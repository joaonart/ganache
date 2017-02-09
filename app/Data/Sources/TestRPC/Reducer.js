import DefaultState from './DefaultState'
import * as TestRPCActions from './Actions'

import ReduceWith from 'Data/Sources/ReduceWith'

const mutators = {
  'APP/TESTRPCRUNNING': (state, {type, payload}) => ({
    ...state,
    testRpcServerRunning: true,
    accounts: payload.accounts,
    unlockedAccounts: payload.unlockedAccounts,
    mnemonic: payload.mnemonic,
    hdPath: payload.hdPath,
    gasPrice: payload.gasPrice,
    totalAccounts: payload.totalAccounts,
    coinbase: payload.coinbase,
    isMiningOnInterval: payload.isMiningOnInterval,
    isMining: payload.isMining,
    blocktime: payload.blocktime
  }),

  'APP/BLOCKCHAINSTATE': (state, {type, payload}) => ({
    ...state,
    testRpcServerRunning: true,
    accounts: payload.accounts,
    unlockedAccounts: payload.unlockedAccounts,
    mnemonic: payload.mnemonic,
    hdPath: payload.hdPath,
    gasPrice: payload.gasPrice,
    totalAccounts: payload.totalAccounts,
    coinbase: payload.coinbase,
    isMiningOnInterval: payload.isMiningOnInterval,
    isMining: payload.isMining,
    blocktime: payload.blocktime
  }),

  'APP/TESTRPCLOG': (state, { type, payload }) => ({
    ...state,
    logs: state.logs.concat(payload.message)
  })
}

export default ReduceWith(mutators, DefaultState)
