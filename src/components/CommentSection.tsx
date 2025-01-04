"use client";

import React, { useState } from "react";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ name: string; email: string; comment: string }[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment = { name, email, comment };
    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold mb-4">Comment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Comment"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      <h2 className="text-lg font-bold mt-6">Comments</h2>
      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="border rounded p-2 shadow">
            <h3 className="font-semibold">{comment.name}</h3>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CommentSection = () => {
  return (
    <div>
      <CommentForm />
    </div>
  );
};

export default CommentSection;
