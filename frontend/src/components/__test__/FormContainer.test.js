import React from 'React';
import { shallow, configure } from 'enzyme';
import FormContainer from '../../components/FormContainer';
import Adapter from 'enzyme-adapter-react-16';

function setup() {
  const props = {
    children: <h1>hello</h1>,
  };

  const wrapper = shallow(<FormContainer {...props} />);
  return { wrapper, props };
}

configure({ adapter: new Adapter() });

describe('components/FormContainer', () => {
  const { wrapper } = setup();

  it('should pass children', () => {
    expect(wrapper.find('Col').children().text()).toEqual('hello');
  });
});
