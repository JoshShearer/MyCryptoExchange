import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Orders() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-full px-4 pt-16 ">
      <div className="w-full max-w-md p-2 mx-auto bg-gray-800 rounded-2xl">
        <div className="px-4 py-5 sm:p-6">
          <div className="relative">
            <h2 className="text-lg text-white">New Order</h2>
            <br />
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className="flex p-1 space-x-1 bg-white rounded-lg">
                <Tab
                  key="Buy"
                  className={({ selected }) =>
                    classNames(
                      "w-full text-black rounded-lg hover:text-red-500",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-white shadow"
                        : "text-black hover:bg-white/[0.12] hover:text-red-500"
                    )
                  }
                >
                  Buy
                </Tab>
                <Tab
                  key="Sell"
                  className={({ selected }) =>
                    classNames(
                      "w-full text-black rounded-lg hover:text-red-500",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-white shadow"
                        : "text-black hover:bg-white/[0.12] hover:text-red-500"
                    )
                  }
                >
                  Sell
                </Tab>
                {/* <Tab disabled> </Tab> */}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  {/* <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 text-sm text-gray-500 bg-white" />
                  </div> */}
                  <br />
                  <h2 className="text-white">Buy Amount (DAPP)</h2>
                  <div className="sm:col-span-10">
                    <input
                      type="number"
                      name="Buy"
                      id="Buy"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    />
                  </div>
                  <br/>
                  <h2 className="text-white">Buy Price</h2>
                  <div className="sm:col-span-10">
                    <input
                      type="number"
                      name="Buy"
                      id="Buy"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    />
                  </div>
                  <br />
                  <div className="w-full">
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Buy
                    </button>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <br />
                  <h2 className="text-white">Sell Amount (DAPP)</h2>
                  <div className="sm:col-span-10">
                    <input
                      type="number"
                      name="Sell"
                      id="Sell"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    />
                  </div>
                  <br/>
                  <h2 className="text-white">Sell Price</h2>
                  <div className="sm:col-span-10">
                    <input
                      type="number"
                      name="Sell"
                      id="Sell"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    />
                  </div>
                  <br />
                  <div className="w-full">
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sell
                    </button>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
