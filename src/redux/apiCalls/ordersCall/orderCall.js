import requestApiProtocol from "../../../settings/requestMethod";
import {
  ordersStart,
  ordersSuccess,
  ordersFailure,
} from "../../reducers/ordesReducers";

export const getAllOrders = async (dispatch) => {
  dispatch(ordersStart());
  try {
    const resp = await requestApiProtocol.get("/orders");
    dispatch(ordersSuccess(resp.data));
  } catch (err) {
    dispatch(ordersFailure());
  }
};
