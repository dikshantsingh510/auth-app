import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const NotAllowed = () => {
  return (
    <div className="relative flex flex-col w-full justify-center bg-background p-6 md:p-10">
      <div className="relative max-w-5xl mx-auto w-full">
        <span className="absolute top-[-40%] w-full text-center inset-0 opacity-[0.04] dark:opacity-[0.03] text-foreground text-[20rem] font-extrabold">
          401
        </span>
        <div className="relative text-center z-[1] pt-52">
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
            Not allowed
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
            You are not allowed to visit the Dashboard. It is for Admin Only.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-3 gap-x-6">
            <Button
              variant="secondary"
              className="-order-1 sm:order-none"
              
            >
              <Link href="/">Take me home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAllowed;
