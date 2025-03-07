import LoginForm from "@/components/Login-form";
import { getSession } from "@/lib/getSession";
import Link from "next/link";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getSession();
  if (session) {
    redirect("/about");
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <LoginForm />
      <p className="text-neutral-500 text-sm max-w-sm mt-2 mb-4 dark:text-neutral-300">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-500" href="/register">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
