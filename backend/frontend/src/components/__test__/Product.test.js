import React from 'react';
import { shallow, configure } from 'enzyme';
import Product from '../../components/Product';
import Adapter from 'enzyme-adapter-react-16';

function setup() {
  const props = {
    product: {
      id: 1,
      product_name: 'test',
      image: 'test.png',
    },
  };

  const wrapper = shallow(<Product {...props} />);
  return { wrapper, props };
}

configure({ adapter: new Adapter() });

describe('components/Product', () => {
  const { wrapper } = setup();

  it('should pass product id', () => {
    expect(wrapper.find('Link').first().props().to).toEqual('/products/1');
  });

  it('should pass product name', () => {
    expect(wrapper.find('strong').text()).toEqual('test');
  });

  it('should pass category image src', () => {
    expect(wrapper.find('CardImg').props().src).toEqual('test.png');
  });
});
