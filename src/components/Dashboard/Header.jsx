"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Header({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-4">
      <button onClick={() => router.back()} className="text-color-primary ">
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
}
