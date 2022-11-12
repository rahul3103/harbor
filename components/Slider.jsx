import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Panel from "./Panel";
import Navbar from "../components/Navbar";
import Container from "./Container";
import useMenuStore from "../store/menu";

export default function Slider() {
  const { mobileDrawer, toggleMobileDrawer } = useMenuStore((state) => state);

  return (
    <>
      <Transition.Root show={mobileDrawer} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={toggleMobileDrawer}
        >
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <Panel onDrawer />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <main className="grid h-full grid-cols-1 bg-white lg:grid-cols-panel">
        <Navbar />
        <Panel />
        <Container />
      </main>
    </>
  );
}
