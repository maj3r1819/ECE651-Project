import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams, useParams } from 'react-router-dom';

function Pagination({ productsPerPage, totalProducts, paginate, isList, isCategory }) {
  const pageNumbers = [];

  const [searchParams] = useSearchParams();
  let keyword = '';
  if (searchParams) {
    keyword = searchParams.get('keyword');
  } else {
    keyword = '';
  }

  const { id } = useParams();


  let pathname;
  if (keyword) {
    pathname = `/products?keyword=${keyword}`;
  } else {
    if (isList) {
      pathname = '/admin/productlist';
    } else {
      if (isCategory) {
        pathname = `/products/categories/${id}`;

      } else {
        pathname = '/products';

      }
      
    }
  }

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <Link
              onClick={() => paginate(number)}
              to={{ pathname: pathname }}
              className='page-link'
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
