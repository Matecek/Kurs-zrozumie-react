import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const WIDTH = 120;

export function List() {
  return (
    <>
      <button
        className={`cursor-pointer rounded-[5px] border border-solid border-current bg-transparent p-3 w-[${WIDTH}px] m-8 text-salmon transition-colors hover:bg-salmon hover:text-white`}
        onClick={() => {
          alert(`Liczba emoji: ${emojis.length}`);
        }}
      >
        Pokaż liczbe emoji
      </button>
      <ul className="flex flex-col gap-8 p-8">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
