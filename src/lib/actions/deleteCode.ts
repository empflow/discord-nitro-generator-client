"use server";

import { revalidatePath } from "next/cache";
import Code from "../models/Code";
import dbConnect from "../db";

export default async function deleteCodeAction(id: string) {
  await dbConnect();
  await Code.deleteOne({ _id: id });
  revalidatePath("/");
}
