"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CollectionButton({collection, anime_mal_id, user_email, text }) {
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();
  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(collection.isCreated);
      router.refresh();
    }
    return;
  };

  return (
    <>
      {isCreated || collection ? (
        <p className="text-color-primary">Has been added to collection</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-color-accent"
        >
          Add To Collection
        </button>
      )}
    </>
  );
}
