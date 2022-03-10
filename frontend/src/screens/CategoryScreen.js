import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listCategoryDetails } from "../actionCreators/categoryActionCreators";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Pagination from "../components/Pagination";

function CategoryScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { products, loading, error } = categoryDetails;

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    dispatch(listCategoryDetails(id));
  }, [dispatch, id]);

  console.log(products);
  let currentproducts = [];

  if (!loading) {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    currentproducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-4">
      <Link to="/products/catergories" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {currentproducts.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
            isCategory={true}
          />
        </Row>
      )}
    </div>
  );
}

export default CategoryScreen;
