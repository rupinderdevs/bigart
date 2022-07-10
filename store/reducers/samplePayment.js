
const initialState = {
  payment: {},
  loading: true,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_UPDATE_PAYMENT":
      return {
        ...state,
        payment: action.payload,
        loading: false,
      };

    case "payment_ERROR_PAYMENT":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;
