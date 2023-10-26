// pages/api/comments.js

import fs from 'fs';
import path from 'path';

const commentsFilePath = path.join(process.cwd(), 'comments.json');

function getComments() {
  try {
    const commentsData = fs.readFileSync(commentsFilePath, 'utf-8');
    return JSON.parse(commentsData);
  } catch (error) {
    return [];
  }
}

function saveComments(comments) {
  fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2));
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    const comments = getComments();
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    // Extract comment data from the request body
    const { author, email, content } = req.body;

    // Create a new comment object
    const newComment = {
      id: Date.now(), // Generate a unique ID (timestamp-based)
      author,
      email,
      content,
    };

    // Get existing comments
    const existingComments = getComments();

    // Add the new comment to the list of existing comments
    existingComments.push(newComment);

    // Save the updated comments list
    saveComments(existingComments);

    // Return the saved comment
    res.status(201).json(newComment);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
