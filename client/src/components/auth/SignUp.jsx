import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="mt-2 w-full ">
                  <button className="flex justify-center py-2 rounded-lg items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100">
                    Sign up with google <FcGoogle />{" "}
                  </button>
                  <form className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 mt-3">
                      <label htmlFor="email">Full Name</label>
                      <input
                        type="text"
                        name="signin"
                        id="email"
                        placeholder="John Doe"
                        className="w-full border border-gra-400 focus:outline-none focus:border-zmtcolor-400 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="signin"
                        id="email"
                        placeholder="email@email.com"
                        className="w-full border border-gra-400 focus:outline-none focus:border-zmtcolor-400 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="signin"
                        id="password"
                        placeholder="********"
                        className="w-full border border-gra-400 focus:outline-none focus:border-zmtcolor-400 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div className="w-full bg-zmtcolor-400 text-white py-2 rounded-lg text-center">
                      Sign up
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
