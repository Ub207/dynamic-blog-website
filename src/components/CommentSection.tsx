"use client";

import React, { useState } from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment = { name, email, comment };
    setComments([...comments, newComment]);
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Your Comment"
          required
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      <h2 className="text-xl font-semibold text-gray-800 mt-10">Comments</h2>
      <ul className="space-y-6 mt-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="p-4 bg-gray-100 border border-gray-200 rounded-lg"
          >
            <h3 className="text-lg font-medium text-gray-800">{comment.name}</h3>
            <p className="text-gray-600 mt-2">{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CommentSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <CommentForm />
    </div>
  );
};

export default CommentSection;
