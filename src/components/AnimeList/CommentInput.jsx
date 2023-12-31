"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentInput({
  user_email,
  username,
  anime_mal_id,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();
  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.status == 200) {
      setIsCreated(postComment.isCreated);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p>Postingan terinput</p>}
      <textarea
        onChange={handleInput}
        className="w-full h-32 text-xl p-2 rounded"
        value={comment}
      />
      <button
        onClick={handlePosting}
        className="w-52 px-3 py-2 bg-color-accent rounded"
      >
        Posting komentar
      </button>
    </div>
  );
}
