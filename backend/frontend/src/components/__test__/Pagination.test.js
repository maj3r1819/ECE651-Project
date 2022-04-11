import React from 'react';
import { shallow, configure, render } from 'enzyme';
import Pagination from '../../components/Pagination';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

function setup() {
  const props1 = {
    productsPerPage: 50,
    totalProducts: 200,
    isList: true,
  };

  const props2 = {
    productsPerPage: 50,
    totalProducts: 200,
    isList: false,
    isCategory: true,
  };

  const props3 = {
    productsPerPage: 50,
    totalProducts: 200,
    isList: false,
    isCategory: false,
  };

  const wrapper1 = render(
    <Router>
      <Pagination {...props1} />
    </Router>
  );

  const wrapper2 = render(
    <Router>
      <Pagination {...props2} />
    </Router>
  );

  const wrapper3 = render(
    <Router>
      <Pagination {...props3} />
    </Router>
  );

  return { wrapper1, wrapper2, wrapper3 };
}

configure({ adapter: new Adapter() });

describe('components/Pagination', () => {
  const { wrapper1, wrapper2, wrapper3 } = setup();

  it('should link to /admin/productlist', () => {
    wrapper1.find('Link').map((link) => {
      expect(link.props().to).toEqual('/admin/productlist');
      link.simulate('click');
      expect(link.state('onClick')).toBe(true);
    });
  });

  it('should link to /products/categories/id', () => {
    wrapper2.find('Link').map((link) => {
      expect(link.props().to).toEqual('/products/categories/id');
    });
  });

  it('should link to /products', () => {
    wrapper3.find('Link').map((link) => {
      expect(link.props().to).toEqual('/products');
    });
  });

  //   it('test paginate click', () => {
  //     wrapper1.render();
  //     wrapper1.find('Link').forEach((link) => {
  //       link.simulate('click');
  //       expect(link.state('onClick')).toBe(true);
  //     });
  //   });
});
