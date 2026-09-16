import { connectToDatabase } from './utils/db.js';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('stats');

    if (req.method === 'GET') {
      // Find the visitors stat document
      const stat = await collection.findOne({ id: 'visitors' });
      // If it doesn't exist, return default
      if (!stat) {
        return res.status(200).json({ count: 50124 });
      }
      res.status(200).json({ count: stat.count });
    } else if (req.method === 'PATCH' || req.method === 'PUT') {
      const { count } = req.body;
      
      if (count === undefined) {
        return res.status(400).json({ message: 'Count is required' });
      }

      await collection.updateOne(
        { id: 'visitors' },
        { $set: { count: count } },
        { upsert: true }
      );
      
      res.status(200).json({ id: 'visitors', count });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
