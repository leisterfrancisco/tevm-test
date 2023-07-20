import { Web3 } from 'web3'

const nodeUrl = 'ws://141.193.240.12:7401/evm'
const wsProvider = new Web3.providers.WebsocketProvider(nodeUrl)
const web3 = new Web3(wsProvider)

// Subscribe to new block headers
const start = async () => {
  console.log('Starting web sockets connection')
  const subscription = await web3.eth.subscribe('newHeads')

  subscription.on('connected', () => {
    console.log('Connected to web sockets')
  })

  // Handle new block headers
  subscription.on('data', (blockHeader: any) => {
    console.log('New block header:', blockHeader)
  })

  // Handle errors
  subscription.on('error', (error: any) => {
    console.error('Subscription error:', error)
  })
}

start()