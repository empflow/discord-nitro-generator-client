"use server";

import { revalidatePath } from "next/cache";
import Code from "../models/Code";

export default async function deleteCodeAction(id: string) {
  console.log("hello");
  await Code.deleteOne({ _id: id });
  revalidatePath("/");
}
