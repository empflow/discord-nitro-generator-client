import CopyBtn from "@/components/CopyBtn";
import DeleteBtn from "@/components/DeleteBtn";
import connDb from "@/lib/db";
import Code from "@/lib/models/Code";

export default async function Home() {
  await connDb();
  const codesData = await Code.find({}, {}, { limit: 1000 });

  return (
    <main className="max-w-[600px] m-auto px-2 py-4">
      <ul className="space-y-2">
        {codesData.map(({ code, id }) => {
          const link =
            "https://discord.com/billing/partner-promotions/1180231712274387115/" +
            code;
          return (
            <li
              key={id}
              className="border border-slate-200 rounded px-4 py-3 space-y-1"
            >
              <p className="overflow-auto whitespace-nowrap">{code}</p>

              <CopyBtn copyValue={link} />
              <form>
                <DeleteBtn id={id} />
              </form>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
