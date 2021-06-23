import React from "react";
import { auth } from "../firebase";

const Feed = () => {
  return (
    <div>
      <h1>Feed</h1>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
