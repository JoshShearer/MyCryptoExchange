import react, { Component } from 'react';
import { connect } from 'react-redux'
import { exchangeSelector } from '../store/selectors'
import { loadAllOrders, subscribeToEvents } from '../store/interactions'
import Deposits from "./Deposits";
import Orders from "./Orders";
import OrderBook from "./Orderbook";
import PriceChart from "./PriceChart";
import MyTransactions from "./MyTransactions";
import Trades from "./Trades";

class MTBApp extends Component {
  componentDidMount() {
    this.loadBlockchainData(this.props)
  }

  async loadBlockchainData(props) {
    const { dispatch, exchange } = props
    await loadAllOrders(exchange, dispatch)
    await subscribeToEvents(exchange, dispatch)
  }

  render() {
    return (
      <div className="grid grid-flow-row-dense grid-cols-5 gap-1 grid-rows-2 bg-stone-800">
        <div >
          <Deposits />
          <Orders />
        </div>
        <div>
          <OrderBook />
        </div>
        <div className="col-span-2">
          <PriceChart />
          <MyTransactions />
        </div>
        <div>
          <Trades />
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    exchange: exchangeSelector(state)
  }
}

export default connect(mapStateToProps)(MTBApp)