import Image from "next/image";

function ImageStacked({ stacks }) {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      {stacks.map((stack) => (
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-150 bg-white"
          key={stack.chain}
        >
          <Image
            className="inline-block h-4 w-4"
            src={`/images/blockchains/${stack.chain}.png`}
            alt="token"
            width={16}
            height={16}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageStacked;
