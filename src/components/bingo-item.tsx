import { UUID } from "crypto";

interface BingoItems {
  name: string;
  bingo_item_id: string;
}

export default function BingoItem( { name, bingo_item_id }: BingoItems) {

  return (
    <div className="border-4 w-36 h-36">
      <h1>{ name }</h1>
    </div>
  );
}
