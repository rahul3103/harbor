import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Docs from "../public/icons/docs.svg";
import CommandSheet from "../public/icons/command_sheet.svg";
import UserKey from "../public/icons/user_key.svg";
import ArrowDown from "../public/icons/arrow_down.svg";
import Logo from "../public/icons/logo.svg";
import { classNames } from "../utils/tools";
const navigationLeft = [
  { name: "Docs", href: "#", current: false, Icon: Docs },
  { name: "Command Cheatsheet", href: "#", current: false, Icon: CommandSheet },
];

const navigationRight = [
  { name: "Your User Key", href: "#", current: false, Icon: UserKey },
];

const navigations = [...navigationLeft, ...navigationRight];

export default function NavBar() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 col-span-2 bg-black-100 ">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-5">
            <div className="relative flex h-15 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Logo className="h-5.5 w-auto text-white" />
                </div>
                <div className="hidden sm:ml-10 sm:block">
                  <div className="flex space-x-1">
                    {navigationLeft.map(({ Icon, ...item }) => (
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
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <div className="mr-5 hidden sm:block">
                  <div className="flex space-x-1">
                    {navigationRight.map(({ Icon, ...item }) => (
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
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-5">
                  <div>
                    <Menu.Button className="flex items-center rounded-md bg-black-100 px-4 py-1 text-sm text-gray-175 hover:bg-gray-700 hover:text-white focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="mr-2 h-8 w-8 rounded-full border border-solid border-black-125"
                        src="/images/dp.jpg"
                        alt="dp"
                        width={32}
                        height={32}
                      />
                      <ArrowDown className="w-3" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="ring-black absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigations.map(({ Icon, ...item }) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-175 hover:bg-gray-700 hover:text-white",
                    "flex gap-2 rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Icon className="w-3" />
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
