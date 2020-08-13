import { URL } from './cryptosActions'
export const FETCH_CRYPTO_DATA_START = 'FETCH_CRYPTO_DATA_START'
export const FETCH_CRYPTO_DATA_SUCCESS = 'FETCH_CRYPTO_DATA_SUCCESS'
export const FETCH_CRYPTO_DATA_FAIL = 'FETCH_CRYPTO_DATA_FAIL'
export const fetchCryptoData = () => (dispatch) => {
  dispatch({type: FETCH_CRYPTO_DATA_START})
  if (URL === `https://exchange.bitcoin/api/trades?since=5`){
    setTimeout(() => {
      dispatch({type: FETCH_CRYPTO_DATA_SUCCESS, payload: [
        {
           tid : 6,
           price : 11620.00,
           amount : 0.24843000,
           date : 1597210160
        },
        {
           price : 11595.00,
           tid : 7,
           amount : 0.08800000,
           date : 1597210708
        },
        {
           price : 11599.01,
           tid : 9,
           amount : 0.80000000,
           date : 1597213161
        },
        {
           price : 11605.00,
           tid : 10,
           date : 1597214944,
           amount : 0.05000000
        },
        {
           date : 1597214983,
           amount : 0.00800000,
           tid : 17,
           price : 11595.00
        }
      ]})
    },1000)
  } else {
    setTimeout(() => {
      console.error(`GET ${URL} 404 (Not Found)`)
      dispatch({type: FETCH_CRYPTO_DATA_FAIL, payload: `GET ${URL} 404 (Not Found)`})
    },1000)
  }
}