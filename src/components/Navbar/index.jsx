import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

export default function Navbar() {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-3 gap-2">
        <Link href="/" className="font-bold text-2xl">CuyAnimeList</Link>
        <InputSearch />
        <UserActionButton/>
      </div>
    </header>
  );
}
