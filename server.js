import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in .env");
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db();
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

connectDB();

// --- API Endpoints ---

app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await db.collection('reviews').find({}).sort({ id: -1 }).toArray();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const newReview = req.body;
    
    // Auto-increment ID
    const lastReview = await db.collection('reviews').find({}).sort({ id: -1 }).limit(1).toArray();
    const nextId = lastReview.length > 0 ? lastReview[0].id + 1 : 1;
    
    const reviewToInsert = { ...newReview, id: nextId };
    await db.collection('reviews').insertOne(reviewToInsert);
    
    res.status(201).json(reviewToInsert);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/api/stats/visitors', async (req, res) => {
  try {
    const stat = await db.collection('stats').findOne({ id: 'visitors' });
    if (!stat) {
      return res.json({ count: 50124 });
    }
    res.json({ count: stat.count });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.patch('/api/stats/visitors', async (req, res) => {
  try {
    const { count } = req.body;
    
    if (count === undefined) {
      return res.status(400).json({ message: 'Count is required' });
    }

    await db.collection('stats').updateOne(
      { id: 'visitors' },
      { $set: { count: count } },
      { upsert: true }
    );
    
    res.json({ id: 'visitors', count });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// --- Production Static Serving ---
if (process.env.NODE_ENV === 'production') {
  // Serve the built frontend files
  app.use(express.static(path.join(__dirname, 'dist')));

  // Route any non-API requests to the React frontend
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Backend Server listening on port ${port}`);
});
