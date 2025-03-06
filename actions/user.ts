"use server";

import { prisma } from "@/prisma/prisma";
import { hash } from "bcryptjs";
import StateInterface from "@/types/types";

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

export { signup };
