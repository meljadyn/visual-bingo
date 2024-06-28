import { createClient } from "@/utils/supabase/server";
import BingoItem from "./bingo-item";

export default async function BingoCard() {
  const supabase = createClient();

  const { data: bingoItems, error } = await supabase
    .from("bingo-item")
    .select(`
      name,
      bingo_card_id
    `)
    .eq("bingo_card_id", "75a94604-fd9b-4363-ae7a-95d9e24e9ad5")
    .order("location")

    if (!error) {
      return (
      <div className="w-fit rounded border mx-auto p-8">
        <h1 className="text-center text-6xl font-sans mb-4">Bingo Card</h1>
        <ul className="grid grid-cols-5 w-fit mx-auto">
          { bingoItems.map((item) => (
            <li key={item.bingo_card_id}>
              <BingoItem bingo_item_id={item.bingo_card_id} name={item.name} />
            </li>
          ))}
        </ul>
      </div>)
    }

  return (
    <h1>Error</h1>
  );
}
