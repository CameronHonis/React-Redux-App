import { 
  FETCH_CRYPTO_DATA_START,
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAIL,
} from '../actions'

const initialState = {
  trades: [],
  isLoading: false,
  error: '',
}

export const cryptoDataReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_CRYPTO_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_CRYPTO_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trades: action.payload
      }
    case FETCH_CRYPTO_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}