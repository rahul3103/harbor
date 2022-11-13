import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ArrowDown from "../public/icons/arrow_down.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectMenu({ options, title, onUpdate, selected }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center justify-center space-x-2 text-sm font-medium hover:text-red-900">
        <span className="text-gray-250">{title}</span>
        <span className="text-black-555">
          {options[selected].name || options[selected]}
        </span>
        <ArrowDown
          className="h-2 w-2 text-black-555 group-hover:text-red-800"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md border border-gray-150 bg-white p-2 shadow-menu focus:outline-none">
          <div className="space-y-1 py-1 text-center">
            {options?.map((option, index) => (
              <Menu.Item key={option.name || index}>
                {({ active }) => (
                  <a
                    onClick={() => onUpdate(index)}
                    className={classNames(
                      index === selected ? "bg-gray-130" : "",
                      active ? "bg-gray-130" : "",
                      "block rounded-lg px-4 py-2 text-sm font-semibold text-black-555"
                    )}
                  >
                    {option.name || option}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
