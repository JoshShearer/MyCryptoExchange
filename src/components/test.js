import react, { Component } from 'react';

import Web3 from 'web3';

class test extends Component {
    componentDidMount(){
        this.loadBlockchainData();
    }
}

const loadBlockchainData = async () => {
    const web3 = Web3(Web3.eth.givenProvider || 'http://localhost:7545')
    console.log("web3", web3)
    console.log("BN", we3.utils.BN(1234).toString())
}