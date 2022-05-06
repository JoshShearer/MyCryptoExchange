import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Spinner from './Spinner'
import {
  orderBookSelector,
  orderBookLoadedSelector,
  exchangeSelector,
  accountSelector,
  orderFillingSelector
} from '../store/selectors'

import { fillOrder } from '../store/interactions'

const renderOrder = (order, props) => {
  const { dispatch, exchange, account } = props
  const orderColor = `text-${order.orderTypeClass}-500`
  return (


    <tr
      key={order.id}
      className="order-book-order"
      onClick={(e) => fillOrder(dispatch, exchange, order, account)}
    >
      {/* <div id={order.id} role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        {`Click here to ${order.orderFillAction}`}
        <div className="tooltip-arrow" data-popper-arrow></div> */}
        <td className='text-white'>{order.tokenAmount}</td>
        {order.orderTypeClass === 'red' ?
          <td className='text-red-500'>{order.tokenPrice}</td>
          : <td className='text-green-500'>{order.tokenPrice}</td>
        }
        <td className='text-white'>{order.etherAmount}</td>
      {/* </div> */}
    </tr>


  )
}

const showOrderBook = (props) => {
  const { orderBook } = props

  return (
    <tbody className="divide-y divide-gray-400">
      {orderBook.sellOrders.map((order) => renderOrder(order, props))}
      <br />
      <tr>
        <td
          scope="col"
          className="text-sm font-semibold text-white"
        >
          MTB
        </td>
        <td
          scope="col"
          className="text-sm font-semibold text-white"
        >
          MTB/ETH
        </td>
        <td
          scope="col"
          className="text-sm font-semibold text-white"
        >
          ETH
        </td>
      </tr>
      <br />
      {orderBook.buyOrders.map((order) => renderOrder(order, props))}
    </tbody>
  )
}

class OrderBook extends Component {
  render() {
    return (
      <div className="w-full pl-3 pt-3 ">
        <div className="w-full max-w-sm mx-auto bg-stone-700 rounded">
          <div className="py-5 sm:p-6">
            <div className="relative">
              <h2 className="text-2xl text-white">Order Book</h2>
              <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"></div>
                    <table className=' min-w-full divide-y divide-grey-400'>
                      {this.props.showOrderBook ? showOrderBook(this.props) : <Spinner type='table' />}
                    </table>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const orderBookLoaded = orderBookLoadedSelector(state)
  const orderFilling = orderFillingSelector(state)

  return {
    orderBook: orderBookSelector(state),
    showOrderBook: orderBookLoaded && !orderFilling,
    exchange: exchangeSelector(state),
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(OrderBook);











