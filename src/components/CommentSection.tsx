import React, { useState } from "react";

interface Comment {
  name: string;
  email: string;
  comment: string;
}

const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]); // Specify the type here

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: Comment = { name, email, comment }; // Ensure the type matches
    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div>
      <h2>Comment Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Comment"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentForm;
