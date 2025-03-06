"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background">
      <div className="relative z-50 container flex justify-center flex-1 flex-col items-center text-center space-y-4 px-5 md:px-10 gap-4">
        
          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ",
              "text-5xl md:text-6xl font-extrabold"
            )}
          >
            AI that works for you.
          </h1>

          <p
            className={cn(
              "text-xl text-muted-foreground",
              "text-lg md:text-xl max-w-[600px]"
            )}
          >
            Transform your workflow with intelligent automation. Simple,
            powerful, reliable.
          </p>

          <div className={cn("flex gap-4", "mt-8")}>
            <Button variant={"outline"}>
              <Link href={"/login"}>Login</Link>
            </Button>

            <Button variant={"default"}>
              <Link href={"/signup"}>Sign up</Link>
            </Button>
          </div>

          <div className="text-muted-foreground text-start w-80  mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <p className="text-lg font-medium mb-2">
              Admin credentials for testing
            </p>
            <p>
              Email: <span className="text-blue-500">steve@gmail.com</span>
            </p>
            <p>
              Password: <span className="text-blue-500">1234</span>
            </p>
          
        </div>
      </div>
    </section>
  );
};

export { Hero };
