import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import {
  filledOrdersLoadedSelector,
  filledOrdersSelector
} from '../src/store/selectors'

const showFilledOrders = (filledOrders) => {
  return(
    <tbody>
      { filledOrders.map((order) => {
        return(
          <tr className={`order-${order.id}`} key={order.id}>
            <td className="text-muted">{order.formattedTimestamp}</td>
            <td>{order.tokenAmount}</td>
            <td className={`text-${order.tokenPriceClass}`}>{order.tokenPrice}</td>
          </tr>
        )
      }) }
    </tbody>
  )
}

class Trades extends Component {
  render() {
    return (
      <div className="w-full px-3 pt-3 ">
        <div className="w-full max-w-sm p-2 mx-auto bg-stone-700 rounded">
          <div className="px-4 py-5 sm:p-6">
            <div className="relative">
              <h2 className="text-2xl text-white">Trades</h2>
              <table>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                        >
                          Time
                        </th>
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
                      </tr>
                    </thead>
                    { this.props.filledOrdersLoaded ? showFilledOrders(this.props.filledOrders) : <Spinner type="table" />}
                  </table>
              <br/>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="vertical">
        <div className="card bg-dark text-white">
          <div className="card-header">
            Trades
          </div>
          <div className="card-body">
            <table className="table table-dark table-sm small">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>DAPP</th>
                  <th>DAPP/ETH</th>
                </tr>
              </thead>
              { this.props.filledOrdersLoaded ? showFilledOrders(this.props.filledOrders) : <Spinner type="table" />}
            </table>
          </div>
        </div>
      </div> */}
    )
  }
}

function mapStateToProps(state) {
  return {
    filledOrdersLoaded: filledOrdersLoadedSelector(state),
    filledOrders: filledOrdersSelector(state),
  }
}

export default connect(mapStateToProps)(Trades)
