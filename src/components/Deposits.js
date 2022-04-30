import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes : string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Deposits() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-full px-3 pt-3 ">
      <div className="w-full max-w-sm p-2 mx-auto bg-stone-700 rounded">
        <div className="px-4 py-5 sm:p-6">
          <div className="relative">
            <h2 className="text-2xl text-white">Balance</h2>
            <br/>
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className="flex p-1 space-x-1 bg-stone-500 rounded-lg">
                <Tab
                  key="Deposit"
                  className={({ selected }) =>
                    classNames(
                      "w-full text-black rounded-lg hover:text-white",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60",
                      selected
                        ? "bg-stone-800 shadow text-white"
                        : "text-black hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Deposit
                </Tab>
                <Tab
                  key="Withdraw"
                  className={({ selected }) =>
                    classNames(
                      "w-full text-black rounded-lg hover:text-white",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60",
                      selected
                        ? "bg-stone-800 shadow text-white"
                        : "text-black hover:bg-stone-300/[0.12] hover:text-white"
                    )
                  }
                >
                  Withdraw
                </Tab>
                <Tab disabled> </Tab>
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
                  <table>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          Token
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          Wallet
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          Exchange
                        </th>
                      </tr>
                    </thead>
                    {/* <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 text-sm text-gray-500 bg-white" />
                    </div> */}
                    <tbody>
                      <tr>
                        <td className="text-white">ETH</td>
                        <td className="text-white">0</td>
                        <td className="text-white">0</td>
                      </tr>
                      <tr>
                        <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-12">
                          <div className="sm:col-span-10">
                            <input
                              type="number"
                              name="Deposit"
                              id="Deposit"
                              placeholder=" ETH Amount"
                              className="block w-full mt-1 bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <button
                              type="button"
                              className="inline-flex px-4 py-2 text-base font-medium text-white bg-stone-800 border border-transparent rounded-md shadow-sm items-right hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Deposit
                            </button>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <td className="text-white">MTB</td>
                        <td className="text-white">0</td>
                        <td className="text-white">0</td>
                      </tr>
                      <tr>
                        <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-12">
                          <div className="sm:col-span-10 ">
                            <input
                              type="number"
                              name="Deposit"
                              id="Deposit"
                              placeholder=" MTB Amount"
                              className="block w-full mt-1 bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <button
                              type="button"
                              className="inline-flex px-4 py-2 text-base font-medium text-white bg-stone-800 border border-transparent rounded-md shadow-sm items-right hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Deposit
                            </button>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Panel>
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
                  <table>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          Token
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          Wallet
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          Exchange
                        </th>
                      </tr>
                    </thead>
                    {/* <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 text-sm text-gray-500 bg-white" />
                    </div> */}
                    <tbody>
                      <tr>
                        <td className="text-white">ETH</td>
                        <td className="text-white">0</td>
                        <td className="text-white">0</td>
                      </tr>
                      <tr>
                        <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-12">
                          <div className="sm:col-span-10">
                            <input
                              type="number"
                              name="Withdraw"
                              id="Withdraw"
                              placeholder=" ETH Amount"
                              className="block w-full mt-1 bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <button
                              type="button"
                              className="inline-flex px-4 py-2 text-base font-medium text-white bg-stone-800 border border-transparent rounded-md shadow-sm items-right hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Withdraw
                            </button>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <td className="text-white">MTB</td>
                        <td className="text-white">0</td>
                        <td className="text-white">0</td>
                      </tr>
                      <tr>
                        <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-12">
                          <div className="sm:col-span-10">
                            <input
                              type="number"
                              name="Withdraw"
                              id="Withdraw"
                              placeholder=" MTB Amount"
                              className="block w-full mt-1 bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <button
                              type="button"
                              className="inline-flex px-4 py-2 text-base font-medium text-white bg-stone-800 border border-transparent rounded-md shadow-sm items-right hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Withdraw
                            </button>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
