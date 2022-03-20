import React from "react";
import { configure, mount } from "enzyme";
import * as redux from "react-redux";
import OrderScreen from "../OrderScreen";
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("screens/OrderScreen", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    var mockState = {
      orderDetails: {
        order: {
          id: 50,
          cartItems: [
            {
              id: 56,
              name: "Tomato",
              quantity: 1,
              img: "https://i5.walmartimages.ca/images/Enlarge/lu4/853/999999-PLU4853.jpg",
              price_walmart: "1.540",
              price_sobeys: "3.990",
              price_zehrs: "1.770",
              cart: 50,
              product: 6,
            },
            {
              id: 57,
              name: "Lay's Ketchup Potato Chips 235GM",
              quantity: 1,
              img: "https://i5.walmartimages.ca/images/Enlarge/796/821/6000201796821.jpg",
              price_walmart: "2.490",
              price_sobeys: "2.270",
              price_zehrs: "2.990",
              cart: 50,
              product: 131,
            },
          ],
          user: {
            id: 12,
            username: "Hello123",
            email: "Hello123",
            namee: "Gaby",
            isAdminn: false,
          },
          total_price_walmart: "123.000",
          total_price_sobeys: "656.000",
          total_price_zehrs: "235.000",
        },
        loading: false,
        error: "",
      },
      userLogin: {
        userInfo: [
          {
            id: 7,
            namee: "chilliam@email.com",
            isAdminn: true,
            email: "chilliam@email.com",
          },
        ],
      },
    };

    // Mock useSelector hook
    spyOnUseSelector = jest
      .spyOn(redux, "useSelector")
      .mockImplementation((state) => state(mockState));

    // Mock useDispatch hook
    spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
    // Mock dispatch function returned from useDispatch
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    const mockedUsedNavigate = jest.fn();
    jest.mock("react-router-dom", () => {
      const originalModule = jest.requireActual("react-router-dom");
      return {
        ...originalModule,
        useNavigate: () => mockedUsedNavigate,
      };
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should render without errors", () => {
    const wrapper = mount(
      <BrowserRouter>
        <OrderScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(OrderScreen);
    expect(component.length).toBe(1);
  });

});

describe("screens/OrderScreen/loading", () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;
  
    beforeEach(() => {
      var mockState = {
        orderDetails: {
          order: {
            id: 50,
            cartItems: [
              {
                id: 56,
                name: "Tomato",
                quantity: 1,
                img: "https://i5.walmartimages.ca/images/Enlarge/lu4/853/999999-PLU4853.jpg",
                price_walmart: "1.540",
                price_sobeys: "3.990",
                price_zehrs: "1.770",
                cart: 50,
                product: 6,
              },
              {
                id: 57,
                name: "Lay's Ketchup Potato Chips 235GM",
                quantity: 1,
                img: "https://i5.walmartimages.ca/images/Enlarge/796/821/6000201796821.jpg",
                price_walmart: "2.490",
                price_sobeys: "2.270",
                price_zehrs: "2.990",
                cart: 50,
                product: 131,
              },
            ],
            user: {
              id: 12,
              username: "Hello123",
              email: "Hello123",
              namee: "Gaby",
              isAdminn: false,
            },
            total_price_walmart: "123.000",
            total_price_sobeys: "656.000",
            total_price_zehrs: "235.000",
          },
          loading: true,
          error: "",
        },
        userLogin: {
          userInfo: [
            {
              id: 7,
              namee: "chilliam@email.com",
              isAdminn: true,
              email: "chilliam@email.com",
            },
          ],
        },
      };
  
      // Mock useSelector hook
      spyOnUseSelector = jest
        .spyOn(redux, "useSelector")
        .mockImplementation((state) => state(mockState));
  
      // Mock useDispatch hook
      spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
      // Mock dispatch function returned from useDispatch
      mockDispatch = jest.fn();
      spyOnUseDispatch.mockReturnValue(mockDispatch);
  
      const mockedUsedNavigate = jest.fn();
      jest.mock("react-router-dom", () => {
        const originalModule = jest.requireActual("react-router-dom");
        return {
          ...originalModule,
          useNavigate: () => mockedUsedNavigate,
        };
      });
    });
  
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it("Should render Loader", () => {
      const wrapper = mount(
        <BrowserRouter>
          <OrderScreen />
        </BrowserRouter>
      );
      const component = wrapper.find(Loader);
      expect(component.length).toBe(1);
    });
  
  });

  describe("screens/OrderScreen/error", () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;
  
    beforeEach(() => {
      var mockState = {
        orderDetails: {
          order: {
            id: 50,
            cartItems: [
              {
                id: 56,
                name: "Tomato",
                quantity: 1,
                img: "https://i5.walmartimages.ca/images/Enlarge/lu4/853/999999-PLU4853.jpg",
                price_walmart: "1.540",
                price_sobeys: "3.990",
                price_zehrs: "1.770",
                cart: 50,
                product: 6,
              },
              {
                id: 57,
                name: "Lay's Ketchup Potato Chips 235GM",
                quantity: 1,
                img: "https://i5.walmartimages.ca/images/Enlarge/796/821/6000201796821.jpg",
                price_walmart: "2.490",
                price_sobeys: "2.270",
                price_zehrs: "2.990",
                cart: 50,
                product: 131,
              },
            ],
            user: {
              id: 12,
              username: "Hello123",
              email: "Hello123",
              namee: "Gaby",
              isAdminn: false,
            },
            total_price_walmart: "123.000",
            total_price_sobeys: "656.000",
            total_price_zehrs: "235.000",
          },
          loading: false,
          error: "error",
        },
        userLogin: {
          userInfo: [
            {
              id: 7,
              namee: "chilliam@email.com",
              isAdminn: true,
              email: "chilliam@email.com",
            },
          ],
        },
      };
  
      // Mock useSelector hook
      spyOnUseSelector = jest
        .spyOn(redux, "useSelector")
        .mockImplementation((state) => state(mockState));
  
      // Mock useDispatch hook
      spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
      // Mock dispatch function returned from useDispatch
      mockDispatch = jest.fn();
      spyOnUseDispatch.mockReturnValue(mockDispatch);
  
      const mockedUsedNavigate = jest.fn();
      jest.mock("react-router-dom", () => {
        const originalModule = jest.requireActual("react-router-dom");
        return {
          ...originalModule,
          useNavigate: () => mockedUsedNavigate,
        };
      });
    });
  
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it("Should render Message", () => {
      const wrapper = mount(
        <BrowserRouter>
          <OrderScreen />
        </BrowserRouter>
      );
      const component = wrapper.find(Message);
      expect(component.length).toBe(1);
    });
  
  });