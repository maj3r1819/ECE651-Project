import React from 'React';
import { shallow, configure } from 'enzyme';
import Message from '../../components/Message';
import Adapter from 'enzyme-adapter-react-16';

function setup() {
  const props = {
    variant: 'danger',
    children: <h1>hello</h1>,
  };

  const wrapper = shallow(<Message {...props} />);
  return { wrapper, props };
}

configure({ adapter: new Adapter() });

describe('components/Message', () => {
  const { wrapper } = setup();

  it('should pass children', () => {
    expect(wrapper.find('Alert').text()).toEqual('hello');
  });

  it('should pass variant', () => {
    expect(wrapper.find('Alert').props().variant).toEqual('danger');
  });
});
