import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return Object.assign({}, state, {
				loading: true,
			});
		case PRODUCT_LIST_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				products: action.payload,
			});
		case PRODUCT_LIST_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.payload,
			});
		default:
			return state;
	}
};

export const productDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return Object.assign({}, state, {
				loading: true,
			});
		case PRODUCT_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				product: action.payload,
			});
		case PRODUCT_DETAILS_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.payload,
			});
		default:
			return state;
	}
};
