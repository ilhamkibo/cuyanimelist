"use client"

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col gap-3">
        <FileSearch size={44} className="text-color-accent"/>
        <h3 className="text-color-accent text-4xl">Page Not Found</h3>
        <button onClick={() => router.back()} className="underline text-color-primary hover:text-color-accent transition-all">Kembali</button>
    </div>
  )
}