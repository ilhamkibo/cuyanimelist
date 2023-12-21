import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      <div className="flex flex-col justify-center items-center mt-8 text-color-primary">
        <h5 className="text-2xl font-bold mb-2">Welcome, {user?.name}</h5>
        <Image src={user?.image} alt="..." width={250} height={250} />
        <div className="flex flex-wrap gap-4 py-8">
            <Link href="/users/dashboard/collection" className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl">My Collection</Link>
            <Link href="/users/dashboard/comment" className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl">My Comment</Link>
        </div>
      </div>
    </div>
  );
}
