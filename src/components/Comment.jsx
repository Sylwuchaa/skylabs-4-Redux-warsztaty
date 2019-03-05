import React from "react";
import { connect } from "react-redux";

import { voteUpComment, voteDownComment, removeComment } from "../actions/commentAction";
const CommentRaw = ({ text, votes, id, voteUpComment, voteDownComment, removeComment }) => (
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => voteUpComment(id)}>Vote Up</button>
    <button onClick={() => voteDownComment(id)}>Vote Down</button>
    <button onClick={() => removeComment(id)}>Remove</button>
  </li>
);

export const Comment = connect(
  null,
  { voteUpComment, voteDownComment, removeComment }
)(CommentRaw);