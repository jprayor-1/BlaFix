import Image from "next/image";
import Hero from "./components/Hero"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero/>
        <div>Home page</div>
      </div>
    </>

  );
}
