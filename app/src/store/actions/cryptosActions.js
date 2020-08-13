import axios from 'axios'

export const FETCH_CRYPTO_DATA_START = 'FETCH_CRYPTO_DATA_START'
export const FETCH_CRYPTO_DATA_SUCCESS = 'FETCH_CRYPTO_DATA_SUCCESS'
export const FETCH_CRYPTO_DATA_FAIL = 'FETCH_CRYPTO_DATA_FAIL'
export const URL = `https://exchange.bitcoin/api/trades?since=5`
export const fetchCryptoData = () => (dispatch) => {
  dispatch({type: FETCH_CRYPTO_DATA_START})
  axios.get(URL)
    .then(res => dispatch({type: FETCH_CRYPTO_DATA_SUCCESS, payload: res.data}))
    .catch(err => {
      dispatch({type: FETCH_CRYPTO_DATA_FAIL, payload: err})
      console.log('Error: '+err)
    })
}

// eslint-disable-next-line
const thunk = store => next => action => {
  if (typeof action === 'object'){
    next(action)
  } else if (typeof action === 'function') {
    action(store.dispatch)
  }
}