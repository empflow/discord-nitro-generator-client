"use client";

import deleteCodeAction from "@/lib/actions/deleteCode";
import { useFormStatus } from "react-dom";
import Loading from "./Loading";

type Props = {
  id: string;
};

export default function DeleteBtn({ id }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="flex gap-1 items-center border border-slate-300 px-1 py-[2px] rounded"
      formAction={deleteCodeAction.bind(null, id)}
    >
      {pending && <Loading className="w-4 h-4" />}
      Delete
    </button>
  );
}
