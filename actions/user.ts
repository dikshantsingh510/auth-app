"use server";

import { prisma } from "@/prisma/prisma";
import { hash } from "bcryptjs";
import StateInterface, { CustomError } from "@/types/types";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

const signup = async (
  prevState: StateInterface,
  formData: FormData
): Promise<StateInterface> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!name || !email || !password || !confirmPassword)
    return { error: "Please fill all fields" };

  if (password !== confirmPassword) return { error: "Passwords do not match" };

  try {
    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) return { error: "User already exists" };

    const hashedPassword = await hash(password, 10);
    // console.log({ name, email, password: hashedPassword });

    await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.log(".................", error);
    return { error: "Error signing up" };
  }
  return { success: "User created successfully" };
};

const login = async (
  prevState: StateInterface,
  formData: FormData
): Promise<StateInterface> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Email and password are required" };
  try {
    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!userExists || !userExists.email) return { error: "User not found!" };

    await signIn("credentials", {
      email: userExists.email,
      password: password,
      redirect: false,
    });

    return { success: "Logged in successfully" };
  } catch (error) {
    const someError = error as CustomError;
    console.log("...................", someError.message);

    return {
      error:
        someError.message || "An unexpected error occurred while logging in",
    };
  }
};

const signout = async () => {
  await signOut({ redirectTo: "/login" });
  revalidatePath("/");
};

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    return {
      data: users,
      error: null,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      data: null,
      error: "Failed to fetch users",
    };
  }
};
export { signup, login, signout, getAllUsers };
