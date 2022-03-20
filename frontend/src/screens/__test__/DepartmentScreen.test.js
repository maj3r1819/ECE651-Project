import React from "react";
import { configure, mount } from "enzyme";
import * as redux from "react-redux";
import DepartmentScreen from "../DepartmentScreen";
import Category from "../../components/Category";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("screens/DepartmentScreen", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    var mockState = {
      categoryList: {
        categories: [
          {
            id: 1,
            category_name: "Fruits & Vegetables",
          },
          {
            id: 2,
            category_name: "Meat & Seafood",
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
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should render without errors", () => {
    const wrapper = mount(
      <BrowserRouter>
        <DepartmentScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(DepartmentScreen);
    expect(component.length).toBe(1);
  });

  it("Should render categories", () => {
    const wrapper = mount(
      <BrowserRouter>
        <DepartmentScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Category);
    expect(component.length).toBe(2);
  });
});

describe("screens/DepartmentScreen/loading", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    var mockState = {
      categoryList: {
        categories: [
          {
            id: 1,
            category_name: "Fruits & Vegetables",
          },
          {
            id: 2,
            category_name: "Meat & Seafood",
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
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should render Loader", () => {
    const wrapper = mount(
      <BrowserRouter>
        <DepartmentScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Loader);
    expect(component.length).toBe(1);
  });
});

describe("screens/DepartmentScreen/error", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    var mockState = {
      categoryList: {
        categories: [
          {
            id: 1,
            category_name: "Fruits & Vegetables",
          },
          {
            id: 2,
            category_name: "Meat & Seafood",
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
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should render Loader", () => {
    const wrapper = mount(
      <BrowserRouter>
        <DepartmentScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(Message);
    expect(component.length).toBe(1);
  });
});
