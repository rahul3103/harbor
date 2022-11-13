import { classNames } from "../../utils/tools";

function NavItem({ items }) {
  return (
    <div className="flex space-x-1">
      {items.map(({ Icon, ...item }) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-175 hover:bg-gray-700 hover:text-white",
            "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          <Icon className="w-3" />
          <span className="hidden md:block">{item.name}</span>
        </a>
      ))}
    </div>
  );
}

export default NavItem;
