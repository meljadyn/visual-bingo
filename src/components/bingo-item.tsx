import { UUID } from "crypto";

interface BingoItems {
  name: string;
  bingo_item_id: string;
}

export default function BingoItem( { name, bingo_item_id }: BingoItems) {

  return (
    <div className="border w-36 h-36">
      <h1 className="text-center">{ name }</h1>
    </div>
  );
}
