 
import { getServerAuthSession } from "@server/auth";
import Image from "next/image";
import UserInfo from "@components/UserInfo";
import Link from "next/link";

export default async function Home() {

  const authSession = await getServerAuthSession();
  return (
    <>
    <section className=" w-full flex flex-center flex-col items-center p-8">
      <h1 className="text-center p-4">Home Page</h1>

      { authSession?.user && <UserInfo user={authSession.user} /> }
      { !authSession?.user && (
        <Link href="/login" className="font-medium mt-2 text-blue-600 hover:underline"> Login </Link>
      )}
    </section>
    </>
  );
}
