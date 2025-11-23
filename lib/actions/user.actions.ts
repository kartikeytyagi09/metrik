'use server';

import { connectToDatabase } from "@/database/db";

export const getAllUserForNewsEmail = async () => {
  try {
    const db = await connectToDatabase();
    if (!db) throw new Error('MongoDB connection failed');

    const users = await db
      .collection('user')
      .find(
        { email: { $exists: true, $ne: null } },
        {
          projection: {
            _id: 1,
            email: 1,
            name: 1,
            country: 1,
          },
        }
      )
      .toArray();

    return users
      .filter((user) => user.email && user.name)
      .map((user) => ({
        id: user._id?.toString(),      
        email: user.email,
        name: user.name,
        country: user.country,
      }));
  } catch (error) {
    console.error('Error while fetching users for news email:', error);
    return [];
  }
};


// done