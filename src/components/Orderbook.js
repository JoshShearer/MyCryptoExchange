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
} from '../src/store/selectors'
import { fillOrder } from '../src/store/interactions'

const renderOrder = (order, props) => {
  const { dispatch, exchange, account } = props

  return(
    <OverlayTrigger
      key={order.id}
      placement='auto'
      overlay={
        <Tooltip id={order.id}>
          {`Click here to ${order.orderFillAction}`}
        </Tooltip>
      }
    >
      <tr
        key={order.id}
        className="order-book-order"
        onClick={(e) => fillOrder(dispatch, exchange, order, account)}
      >
        <td>{order.tokenAmount}</td>
        <td className={`text-${order.orderTypeClass}`}>{order.tokenPrice}</td>
        <td>{order.etherAmount}</td>
      </tr>
    </OverlayTrigger>
  )
}

const showOrderBook = (props) => {
  const { orderBook } = props

  return(
    <tbody>
      {orderBook.sellOrders.map((order) => renderOrder(order, props))}
      <tr>
        <th>DAPP</th>
        <th>DAPP/ETH</th>
        <th>ETH</th>
      </tr>
      {orderBook.buyOrders.map((order) => renderOrder(order, props))}
    </tbody>
  )
}

class OrderBook extends Component {
  render() {
    return (
      <div className="w-full px-3 pt-3 ">
        <div className="w-full max-w-sm p-2 mx-auto bg-stone-700 rounded">
          <div className="px-4 py-5 sm:p-6">
            <div className="relative">
              <h2 className="text-2xl text-white">Order Book</h2>
              <table>
                   
                <tbody>
                  
                </tbody>
              </table>

              <table>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          MTB
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          MTB/ETH
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          ETH
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
                    { this.props.showOrderBook ? showOrderBook(this.props) : <Spinner type='table' /> }
                  </table>
              <br/>
            </div>
          </div>
        </div>
      </div>
      // {/* // <div className="vertical">
      // //   <div className="text-white card bg-dark">
      // //     <div className="card-header">
      // //       Order Book
      // //     </div>
      // //     <div className="card-body order-book">
      // //       <table className="table table-dark table-sm small">
      // //         { this.props.showOrderBook ? showOrderBook(this.props) : <Spinner type='table' /> }
      // //       </table>
      // //     </div>
      // //   </div>
      // // </div> */}
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











