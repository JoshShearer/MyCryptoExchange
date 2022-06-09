import react, { Component } from "react";
import { connect } from "react-redux";
import { exchangeSelector } from "../store/selectors";
import { loadAllOrders, subscribeToEvents } from "../store/interactions";
import Deposits from "./Deposits";
import Orders from "./Orders";
import OrderBook from "./Orderbook";
import PriceChart from "./PriceChart";
import MyTransactions from "./MyTransactions";
import Trades from "./Trades";

class MTBApp extends Component {
  componentDidMount() {
    this.loadBlockchainData(this.props);
  }

  async loadBlockchainData(props) {
    const { dispatch, exchange } = props;
    await loadAllOrders(exchange, dispatch);
    await subscribeToEvents(exchange, dispatch);
  }

  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pl-4 pr-4 ">
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
          <div className="pb-4">
            <Deposits />
          </div>
          <div>
            <Orders />
          </div>
        </div>
        <div>
          <OrderBook />
        </div>
        <div className="col-span-2 ">
          <div className="pb-4">
            <PriceChart />
          </div>
          <div>
            <MyTransactions />
          </div>
        </div>
        <div>
          <Trades />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    exchange: exchangeSelector(state),
  };
}

export default connect(mapStateToProps)(MTBApp);
