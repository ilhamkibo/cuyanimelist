import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();

  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });
  console.log("🚀 ~ file: page.jsx:5 ~ Page ~ comments:", comments);

  return (
    <section className="px-2 mt-4 w-full">
      <Header title={"My Comments"} />
      <div className="flex flex-col gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-3 rounded"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
