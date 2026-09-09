"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button className="like-button" onClick={() => setLikes(likes + 1)}>
      Мне нравится: {likes}
    </button>
  );
}
