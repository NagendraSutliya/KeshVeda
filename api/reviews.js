import { connectToDatabase } from './utils/db.js';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('reviews');

    if (req.method === 'GET') {
      // Fetch all reviews and sort them descending by ID (so newest is first)
      const reviews = await collection.find({}).sort({ id: -1 }).toArray();
      res.status(200).json(reviews);
    } else if (req.method === 'POST') {
      const newReview = req.body;
      
      // Auto-increment logic similar to json-server
      const lastReview = await collection.find({}).sort({ id: -1 }).limit(1).toArray();
      const nextId = lastReview.length > 0 ? lastReview[0].id + 1 : 1;
      
      const reviewToInsert = { ...newReview, id: nextId };
      await collection.insertOne(reviewToInsert);
      
      res.status(201).json(reviewToInsert);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
