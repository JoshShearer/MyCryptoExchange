import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import {
  filledOrdersLoadedSelector,
  filledOrdersSelector
} from '../../src/store/selectors'

const showFilledOrders = (filledOrders) => {
  return (
    <tbody className='divide-y divide-grey-400'>
      {filledOrders.map((order) => {
        return (
          <tr className={`order-${order.id}`} key={order.id}>
            <td className="text-stone-500">{order.formattedTimestamp}</td>
            <td className='text-white'>{order.tokenAmount}</td>
            {order.tokenPriceClass === 'red' ?
              <td className='text-red-500'>{order.tokenPrice}</td>
              : <td className='text-green-500'>{order.tokenPrice}</td>
            }
          </tr>
        );
      })}
    </tbody>
  );
};

class Trades extends Component {
  render() {
    return (
      // <div className="w-full pr-3 pt-3 ">
        <div className="w-full max-w-sm p-2 mx-auto bg-stone-700 rounded">
          <div className="py-5 sm:p-6">
            {/* <div className="relative"> */}
              <h2 className="text-2xl text-white">Trades</h2>
              {/* <div className="mt-8 flex flex-col"> */}
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"></div>
                    <table className=' min-w-full divide-y divide-white'>
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="text-left text-sm font-semibold text-white"
                          >
                            Time
                          </th>
                          <th
                            scope="col"
                            className="text-left text-sm font-semibold text-white"
                          >
                            MTB
                          </th>
                          <th
                            scope="col"
                            className="text-left text-sm font-semibold text-white"
                          >
                            MTB/ETH
                          </th>
                        </tr>
                      </thead>
                      {this.props.filledOrdersLoaded ? showFilledOrders(this.props.filledOrders) : <Spinner type="table" />}
                    </table>
                    <br />
                  </div>
                </div>
              </div>
            </div>
      //     </div>
      //   </div>
      // </div>
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
