import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import {
  exchangeSelector,
  tokenSelector,
  accountSelector,
  web3Selector,
  buyOrderSelector,
  sellOrderSelector
} from '../store/selectors'

import {
  buyOrderAmountChanged,
  buyOrderPriceChanged,
  sellOrderAmountChanged,
  sellOrderPriceChanged,
} from '../store/actions'
import {
  makeBuyOrder,
  makeSellOrder
} from '../store/interactions'

const ShowForm = (props) => {

  const {
    dispatch,
    buyOrder,
    exchange,
    token,
    web3,
    account,
    sellOrder,
    showBuyTotal,
    showSellTotal
  } = props


  return (

      <div className="w-full  max-w-sm mx-auto bg-stone-700 rounded">
        <div className="py-5 sm:p-6">
            <h2 className="text-2xl text-white">New Order</h2>
            <br />
            <Tab.Group
            >
              <Tab.List className="flex p-1 space-x-1 bg-stone-500 rounded-lg">
                <Tab
                  key="Buy"
                  className={({ selected }) =>
                    classNames(
                      "w-full text-white rounded-lg hover:text-white",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60",
                      selected
                        ? "bg-stone-800 shadow text-white"
                        : "text-white hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Buy
                </Tab>
                <Tab
                  key="Sell"
                  className={({ selected }) =>
                    classNames(
                      "w-full text-white rounded-lg hover:text-white",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60",
                      selected
                        ? "bg-stone-800 shadow text-white"
                        : "text-white hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Sell
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <br />
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    makeBuyOrder(dispatch, exchange, token, web3, buyOrder, account)
                  }}>
                    <h2 className="text-white">Buy Amount (MTB)</h2>
                    <div className="sm:col-span-4">
                      <input
                        type="text"
                        name="Buy"
                        id="Buy"
                        onChange={(e) => dispatch(buyOrderAmountChanged(e.target.value))}
                        placeholder=" Buy Amount"
                        className="block w-full text-white mt-1 bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      />
                    </div>
                    <br />
                    <h2 className="text-white">Buy Price</h2>
                    <div className="sm:col-span-4">
                      <input
                        type="text"
                        name="Buy"
                        id="Buy"
                        onChange={(e) => dispatch(buyOrderPriceChanged(e.target.value))}
                        placeholder=" Buy Price"
                        className="block w-full mt-1 text-white bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      />
                    </div>
                    <br />
                    <div className="w-full">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 text-base font-medium text-white bg-stone-800 border border-transparent rounded-md shadow-sm hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Buy
                      </button>
                    </div>
                    { showBuyTotal ? <small>Total: {buyOrder.amount * buyOrder.price} ETH</small> : null }
                  </form>
                </Tab.Panel>
                <Tab.Panel>
                  <br />
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    makeSellOrder(dispatch, exchange, token, web3, sellOrder, account)
                  }}>
                    <h2 className="text-white">Sell Amount (MTB)</h2>
                    <div className="sm:col-span-4">
                      <input
                        type="text"
                        name="Sell"
                        id="Sell"
                        onChange={(e) => dispatch(sellOrderAmountChanged(e.target.value))}
                        placeholder=" Sell Amount"
                        className="block w-full mt-1 text-white bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      />
                    </div>
                    <br />
                    <h2 className="text-white">Sell Price</h2>
                    <div className="sm:col-span-4">
                      <input
                        type="text"
                        name="Sell"
                        id="Sell"
                        onChange={(e) => dispatch(sellOrderPriceChanged(e.target.value))}
                        placeholder=" Sell Price"
                        className="block w-full mt-1 text-white bg-stone-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      />
                    </div>
                    <br />
                    <div className="w-full">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 text-base font-medium text-white bg-stone-800 border border-transparent rounded-md shadow-sm hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sell
                      </button>
                    </div>
                    { showSellTotal ? <div className="text-white">Total: {sellOrder.amount * sellOrder.price} ETH</div> : null }
                  </form>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
}

class Orders extends Component {

  render() {
    return (
      <div>
        {this.props.showForm ? ShowForm(this.props) : <Spinner />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const buyOrder = buyOrderSelector(state)
  const sellOrder = sellOrderSelector(state)

  return {
    account: accountSelector(state),
    exchange: exchangeSelector(state),
    token: tokenSelector(state),
    web3: web3Selector(state),
    buyOrder,
    sellOrder,
    showForm: !buyOrder.making && !sellOrder.making,
    showBuyTotal: buyOrder.amount && buyOrder.price,
    showSellTotal: sellOrder.amount && sellOrder.price
  }
}

export default connect(mapStateToProps)(Orders)