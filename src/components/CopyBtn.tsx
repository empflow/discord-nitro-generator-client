"use client";

import { useState } from "react";

type Props = {
  copyValue: string;
};

export default function CopyBtn({ copyValue }: Props) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(copyValue);
    setCopied(true);
  }

  return (
    <button
      onClick={handleCopy}
      className="border border-slate-300 px-1 py-[2px] rounded"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
