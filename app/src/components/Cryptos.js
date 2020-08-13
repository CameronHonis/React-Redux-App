import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCryptoData } from '../store'

const Cryptos = props => {
  useEffect(() => {
    props.fetchCryptoData()
    // eslint-disable-next-line
  },[])

  return(
    <section>
      {props.isLoading && <h4>Loading Crypto Data...</h4>}
      {props.error && <p>Error loading crypto data :(</p>}
      {/* {props.error && <p>Error: {props.error}</p>} */}
      {!props.isLoading && !props.error && (
        <div className='cryptoInfo'>
          {props.trades.map(v => (
            <div key={v.tid}>
              <h2>price: {v.price}</h2>
              <h3>volume: {v.amount}</h3>
              <h3>date: {new Date(v.date*1000).toISOString()}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default connect(state => state, { fetchCryptoData })(Cryptos)