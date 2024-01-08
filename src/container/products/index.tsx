import { Col, Container, Image, Row, Table } from "react-bootstrap";
import thumnailImage from "../../assets/images/bg-login.jpg";
import "../../assets/stylesheets/pages/products.scss";
import { useEffect } from "react";
import { productRequest } from "../../reducers";
import { useDispatch } from "react-redux";


const Products = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productRequest());
  }, []);

  return (
    <Container className="products__container">
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src={thumnailImage} alt="thumbnail" className="thumbnail" />
                </td>
                <td>iPhone 9</td>
                <td>An apple mobile which is nothing like apple</td>
                <td>549</td>
                <td>4.69</td>
                <td>94</td>
                <td>Apple</td>
                <td>smartphones</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;