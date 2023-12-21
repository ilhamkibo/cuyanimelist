import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  console.log(collection);
  return (
    <section className="px-2 mt-4">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="border-2 border-color-accent relative"
            >
              <Image
                className="w-full"
                src=""
                alt=""
                width={350}
                height={350}
              />
              <div className="w-full bg-color-accent h-16 absolute bottom-0 flex justify-center items-center">
                <h5 className="text-xl text-center">bangke</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
