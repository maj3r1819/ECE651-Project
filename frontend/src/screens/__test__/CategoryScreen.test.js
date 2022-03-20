import React from "react";
import { configure, mount } from "enzyme";
import * as redux from "react-redux";
import CategoryScreen from "../CategoryScreen";
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("screens/CategoryScreen", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    var mockState = {
      categoryDetails: {
        products: [
          {
            id: 9,
            product_name: "Carrots",
            image:
              "https://i5.walmartimages.ca/images/Enlarge/094/417/6000200094417.jpg",
            price_walmart: "2.470",
            price_sobeys: "3.990",
            price_zehrs: "2.990",
            walmart_url: "https://www.walmart.ca/en/ip/carrots/6000196795077",
            zehrs_url: "https://www.zehrs.ca/carrots-bunched/p/20047449001_EA",
            sobeys_url: "https://voila.ca/products/774685EA/details",
            description:
              "Carrots are long and slender and come in a variety of colours in addition to orange. This popular vegetable is available all year and can be eaten raw or cooked in many ways. Try roasting whole carrots, chopping them for soups, stews, and casseroles, or indulge in carrot cake with cream cheese frosting",
            category: 1,
            user: null,
          },
          {
            id: 10,
            product_name: "Yellow Onions",
            image:
              "https://i5.walmartimages.ca/images/Enlarge/208/928/6000202208928.jpg",
            price_walmart: "1.970",
            price_sobeys: "2.490",
            price_zehrs: "2.990",
            walmart_url:
              "https://www.walmart.ca/en/ip/onion-yellow-your-fresh-market/6000197111437",
            zehrs_url:
              "https://www.zehrs.ca/yellow-onions-3lb-bag/p/20811994001_EA",
            sobeys_url: "https://voila.ca/products/14573EA/details",
            description:
              "Yellow onions have a light golden skin and a white flesh. These all-purpose onions have a strong flavour and odour and are a very popular choice for cooking. Chop and add to soups, stews, and almost any recipe that calls for onion.",
            category: 1,
            user: null,
          },
        ],
        loading: false,
        error: "",
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
        <CategoryScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(CategoryScreen);
    expect(component.length).toBe(1);
  });

  it("Should render Product", () => {
    const wrapper = mount(
      <BrowserRouter>
        <CategoryScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Product);
    expect(component.length).toBe(2);
  });
});

describe("screens/CategoryScreen/loading", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    var mockState = {
      categoryDetails: {
        products: [
          {
            id: 9,
            product_name: "Carrots",
            image:
              "https://i5.walmartimages.ca/images/Enlarge/094/417/6000200094417.jpg",
            price_walmart: "2.470",
            price_sobeys: "3.990",
            price_zehrs: "2.990",
            walmart_url: "https://www.walmart.ca/en/ip/carrots/6000196795077",
            zehrs_url: "https://www.zehrs.ca/carrots-bunched/p/20047449001_EA",
            sobeys_url: "https://voila.ca/products/774685EA/details",
            description:
              "Carrots are long and slender and come in a variety of colours in addition to orange. This popular vegetable is available all year and can be eaten raw or cooked in many ways. Try roasting whole carrots, chopping them for soups, stews, and casseroles, or indulge in carrot cake with cream cheese frosting",
            category: 1,
            user: null,
          },
          {
            id: 10,
            product_name: "Yellow Onions",
            image:
              "https://i5.walmartimages.ca/images/Enlarge/208/928/6000202208928.jpg",
            price_walmart: "1.970",
            price_sobeys: "2.490",
            price_zehrs: "2.990",
            walmart_url:
              "https://www.walmart.ca/en/ip/onion-yellow-your-fresh-market/6000197111437",
            zehrs_url:
              "https://www.zehrs.ca/yellow-onions-3lb-bag/p/20811994001_EA",
            sobeys_url: "https://voila.ca/products/14573EA/details",
            description:
              "Yellow onions have a light golden skin and a white flesh. These all-purpose onions have a strong flavour and odour and are a very popular choice for cooking. Chop and add to soups, stews, and almost any recipe that calls for onion.",
            category: 1,
            user: null,
          },
        ],
        loading: true,
        error: "",
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
        <CategoryScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Loader);
    expect(component.length).toBe(1);
  });

});

describe("screens/CategoryScreen/error", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    var mockState = {
      categoryDetails: {
        products: [
          {
            id: 9,
            product_name: "Carrots",
            image:
              "https://i5.walmartimages.ca/images/Enlarge/094/417/6000200094417.jpg",
            price_walmart: "2.470",
            price_sobeys: "3.990",
            price_zehrs: "2.990",
            walmart_url: "https://www.walmart.ca/en/ip/carrots/6000196795077",
            zehrs_url: "https://www.zehrs.ca/carrots-bunched/p/20047449001_EA",
            sobeys_url: "https://voila.ca/products/774685EA/details",
            description:
              "Carrots are long and slender and come in a variety of colours in addition to orange. This popular vegetable is available all year and can be eaten raw or cooked in many ways. Try roasting whole carrots, chopping them for soups, stews, and casseroles, or indulge in carrot cake with cream cheese frosting",
            category: 1,
            user: null,
          },
          {
            id: 10,
            product_name: "Yellow Onions",
            image:
              "https://i5.walmartimages.ca/images/Enlarge/208/928/6000202208928.jpg",
            price_walmart: "1.970",
            price_sobeys: "2.490",
            price_zehrs: "2.990",
            walmart_url:
              "https://www.walmart.ca/en/ip/onion-yellow-your-fresh-market/6000197111437",
            zehrs_url:
              "https://www.zehrs.ca/yellow-onions-3lb-bag/p/20811994001_EA",
            sobeys_url: "https://voila.ca/products/14573EA/details",
            description:
              "Yellow onions have a light golden skin and a white flesh. These all-purpose onions have a strong flavour and odour and are a very popular choice for cooking. Chop and add to soups, stews, and almost any recipe that calls for onion.",
            category: 1,
            user: null,
          },
        ],
        loading: false,
        error: "error",
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
        <CategoryScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Message);
    expect(component.length).toBe(1);
  });

});
