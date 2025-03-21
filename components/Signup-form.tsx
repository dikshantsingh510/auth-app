"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { signup } from "@/actions/user";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const SignupForm = () => {
  const [state, formAction, isPending] = useActionState(signup, {
    success: "",
    error: "",
  });

  //? Custom alert hook to display error messages
  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      toast.success(state.success);
      redirect("/login");
    }
  }, [state]);

  return (
    <form className="mt-8" action={formAction}>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Tyler" name="name" type="text" required />
      </div>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="projectmayhem@fc.com"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <Label htmlFor="password">Password</Label>
        <Input
          required
          id="password"
          placeholder="••••••••"
          type="password"
          name="password"
        />
      </div>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          required
          id="confirmPassword"
          name="confirmPassword"
          placeholder="••••••••"
          type="string"
        />
      </div>

      <button
        className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${
          isPending ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : <>Sign up &rarr;</>}
      </button>
    </form>
  );
};

export default SignupForm;
