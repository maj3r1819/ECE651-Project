import { cartReducer } from "../cartReducers";
import * as actions from "../../constants/cartConstants";
import { CART_ITEM, CART_ITEM_EXIST, CART_ITEM_COMBINED } from "../../mock/mockCartRes";
import expect from "expect";

describe("cart reducers", () => {
    it("should return the initial state", () => {
      expect(cartReducer(undefined, {})).toEqual({ cartItems: [] });
    });

    it("should handle CART_ADD_ITEM", () => {
        const addAction = {
          type: actions.CART_ADD_ITEM,
          payload: CART_ITEM
        };
        expect(cartReducer({ cartItems: [] }, addAction)).toEqual({
            cartItems: [CART_ITEM]
        });
      });

      it("should handle CART_ADD_ITEM with existItem", () => {
        const addExistAction = {
          type: actions.CART_ADD_ITEM,
          payload: CART_ITEM
        };
        expect(cartReducer({ cartItems: [CART_ITEM] }, addExistAction)).toEqual({
            cartItems: [CART_ITEM]
        });
      });

      it("should handle CART_ADD_ITEM with nonexistItem", () => {
        const addExistAction = {
          type: actions.CART_ADD_ITEM,
          payload: CART_ITEM
        };
        expect(cartReducer({ cartItems: CART_ITEM_EXIST }, addExistAction)).toEqual({
            cartItems: CART_ITEM_COMBINED
        });
      });

      it("should handle CART_REMOVE_ITEM", () => {
        const removeAction = {
          type: actions.CART_REMOVE_ITEM,
          payload: 12
        };
        expect(cartReducer({ cartItems: [CART_ITEM] }, removeAction)).toEqual({
            cartItems: []
        });
      });

      it("should handle CART_CLEAR_ITEMS", () => {
        const requestAction = {
          type: actions.CART_CLEAR_ITEMS,
          payload: 12
        };
        expect(cartReducer({ cartItems: [CART_ITEM] }, requestAction)).toEqual({
            cartItems: []
        });
      });


    
})