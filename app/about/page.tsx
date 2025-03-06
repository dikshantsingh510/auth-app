// import { getSession } from "@/lib/getSession";

import { auth } from "@/auth";
import SignoutBtn from "@/components/signout-btn";

export default async function About() {
  //  const session = await getSession();
  const session = await auth();
  console.log(session);

  return (
    <div className=" w-full min-h-[35rem] flex justify-center items-center">
      <div className="border w-96 p-5 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-10">About</h1>
        {/* <p className="flex justify-between px-5 mb-2">
          <span>Name:</span> <span>{session?.user && session.user.name}</span>
        </p>
        <p className="flex justify-between px-5 mb-2">
          <span>Email:</span> <span>{session?.user && session.user.email}</span>
        </p>
        <p className="flex justify-between px-5 mb-5">
          <span>Role:</span> <span>{session?.user && session.user.role}</span>
        </p> */}

        <div className="w-full flex justify-center items-center">
          <SignoutBtn></SignoutBtn>
        </div>
      </div>
    </div>
  );
}
