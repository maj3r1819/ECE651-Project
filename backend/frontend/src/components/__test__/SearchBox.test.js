import React from 'react';
import { shallow, configure, render } from 'enzyme';
import SearchBox from '../../components/SearchBox';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

function setup() {
  const wrapper = render(
    <Router>
      <SearchBox />
    </Router>
  );

  return { wrapper };
}

configure({ adapter: new Adapter() });
describe('components/SearchBox', () => {
  it('should render SearchBox', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Button').text()).toEqual('Search');
  });
});
