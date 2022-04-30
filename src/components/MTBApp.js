// import "./main.css";

import Deposits from "./Deposits";
import Orders from "./Orders";
import OrderBook from "./Orderbook";
// import PriceChart from "./PriceChart";
// import MyTransactions from "./MyTransactions";
// import Trades from "./Trades";

const MTBApp = () => {
  return (
    <div className="flex flex-wrap bg-stone-800">
      <div className="columns-1 gap-1 ">
        <Deposits  />
        <Orders />
      </div>
      
      <OrderBook />
      <div className="vertical-split">
        {/* <PriceChart /> */}
        {/* <MyTransactions /> */}
      </div>
      {/* <Trades /> */}
    </div>
  );
};

export default MTBApp;
