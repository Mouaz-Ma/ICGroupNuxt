const web3 = {
    namespaced: true,
    state: () => ({
        web3: {
            netWorkType: null,
            netWorkName: null,
            networkId: null,
            coinbase: null,
            balance: null,
            etherBalance: null
        },
    }),
    getters: {
        getInstance: (state) => {
            return state.web3
        },
    },
    mutations: {
        registerWeb3Instance (state, payload) {
            console.log('registerWeb3instance Mutation being executed', payload)
            let result = payload
            let web3Copy = state.web3
            console.log(web3Copy)
            web3Copy.netWorkType = result.netWorkType
            web3Copy.netWorkName = result.netWorkName
            web3Copy.coinbase = result.coinbase
            web3Copy.networkId = result.networkId
            web3Copy.balance = parseInt(result.balance, 10)
            web3Copy.etherBalance = result.etherBalance
            state.web3 = web3Copy
        },
    },
    actions: {
    }
  }

  export default web3