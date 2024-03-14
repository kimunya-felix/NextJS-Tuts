import SignUpForm from "@components/SignUpForm";
import LoginForm from "@components/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className=" w-full flex flex-center flex-col items-center p-8">
      <h1 className="text-center p-4">Home Page</h1>

      {/* <SignUpForm/> */}
      <LoginForm/>
    </section>
    </>
  );
}
