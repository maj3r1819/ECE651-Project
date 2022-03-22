import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import * as redux from 'react-redux';
import ProductScreen from '../ProductScreen';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('screens/ProductScreen', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let spyOnUseEffect;
  let mockDispatch;
  let props;

  beforeEach(() => {
    var mockState = {
      productDetails: {
        product: {
          id: 10,
          product_name: 'Yellow Onions',
          image:
            'https://i5.walmartimages.ca/images/Enlarge/208/928/6000202208928.jpg',
          price_walmart: '1.970',
          price_sobeys: '2.490',
          price_zehrs: '2.990',
          walmart_url:
            'https://www.walmart.ca/en/ip/onion-yellow-your-fresh-market/6000197111437',
          zehrs_url:
            'https://www.zehrs.ca/yellow-onions-3lb-bag/p/20811994001_EA',
          sobeys_url: 'https://voila.ca/products/14573EA/details',
          description:
            'Yellow onions have a light golden skin and a white flesh. These all-purpose onions have a strong flavour and odour and are a very popular choice for cooking. Chop and add to soups, stews, and almost any recipe that calls for onion.',
          category: 1,
          user: null,
        },
      },
    };

    // Mock useSelector hook
    spyOnUseSelector = jest
      .spyOn(redux, 'useSelector')
      .mockImplementation((state) => state(mockState));

    // Mock useDispatch hook
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
    // Mock dispatch function returned from useDispatch
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => {
      const originalModule = jest.requireActual('react-router-dom');
      return {
        ...originalModule,
        useNavigate: () => mockedUsedNavigate,
      };
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should render without errors', () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProductScreen />
      </BrowserRouter>
    );
    const component = wrapper.find(ProductScreen);
    expect(component.length).toBe(1);
  });

  it('should render ProductScreen', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ProductScreen />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
