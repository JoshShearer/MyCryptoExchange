export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'
<<<<<<< HEAD

export const EVM_REVERT = 'VM Exception while processing transaction: revert'

export const ether = (n) => {
  return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  )
}

// Same as ether
export const tokens = (n) => ether(n)
=======
export const GREEN = 'green'
export const RED = 'red'
// var BN = web3.utils.BN;
// var WEI = web3.utils.toWei;

export const EVM_REVERT = 'VM Exception while processing transaction: revert'

export const DECIMALS = (10**18)

// Shortcut to avoid passing around web3 connection
export const ether = (wei) => {
  if(wei) {
    return(wei / DECIMALS) // 18 decimal places
  }
}

// Tokens and ether have same decimal resolution
export const tokens = ether
>>>>>>> 87e965bad3269d5bd350491659f5b0b87ca640d6
