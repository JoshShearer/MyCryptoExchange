import React, { Component } from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {ssr: false})
import Spinner from './Spinner'
import { chartOptions } from './PriceChart.config'
import {
  priceChartLoadedSelector,
  priceChartSelector
} from '../store/selectors'

const priceSymbol = (lastPriceChange) => {
  let output
  if(lastPriceChange === '+') {
    output = <span className="text-green-500">&#9650;</span> // Green up tiangle
  } else {
    output = <span className="text-red-500">&#9660;</span> // Red down triangle
  }
  return(output)
}

const showPriceChart = (priceChart) => {
  return(
    <div className="text-white text-2xl">
      <div className="price">
        <h2>{"   "}MTB/ETH &nbsp; {priceSymbol(priceChart.lastPriceChange)} &nbsp; {priceChart.lastPrice}</h2>
      </div>
      <Chart options={chartOptions} series={priceChart.series} type='candlestick' width='100%' height='auto' />
    </div>
  )
}

class PriceChart extends Component {
  render() {
    return (
      // <div className="w-full px-3 pt-3 ">
        <div className="w-full max-w-lg p-2 min-h-fit mx-auto bg-stone-700 rounded">
          <div className="px-4 py-5 sm:p-6">
            {/* <div className="relative"> */}
              <h2 className="text-2xl text-white">Price Chart</h2>
              <br/>
              {this.props.priceChartLoaded ? showPriceChart(this.props.priceChart) : <Spinner />}
            </div>
          </div>
      //   </div>
      // </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    priceChartLoaded: priceChartLoadedSelector(state),
    priceChart: priceChartSelector(state),
  }
}

export default connect(mapStateToProps)(PriceChart)
