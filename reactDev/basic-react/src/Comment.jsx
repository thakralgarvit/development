import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@garvitthakral",
      remarks: "greatjob",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comments" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>{comment.rating} stars</span>
            &nbsp;
            <p>{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentForm addNewComment={addNewComment} />
    </>
  );
}
