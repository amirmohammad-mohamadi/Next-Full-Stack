import Image from "next/image";
import { getServerSession } from "next-auth";
import rome from "@/public/images/rome2.jpg";
import { Metadata } from "next";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Image
        src="https://bit.ly/react-cover"
        alt="Rome"
        fill
        className="object-cover"
        style={{
          top: "2.5rem!important",
        }}
        sizes="(max-width: 480) 100vw, (max-width: 768), 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}

// use static Metadata
export const metadata: Metadata = {
  title: "Home",
  description: "this is just for testing",
};
