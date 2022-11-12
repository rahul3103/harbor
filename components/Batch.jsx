import { classNames } from "../utils/tools";

function Batch({ active, children }) {
  return (
    <div
      className={classNames(
        active ? "bg-white" : "bg-gray-125",
        active ? "text-gray-275" : "text-gray-250",
        "flex items-center rounded-full border border-gray-125 py-1 px-2 text-xs font-semibold leading-3"
      )}
    >
      {children}
    </div>
  );
}

export default Batch;
