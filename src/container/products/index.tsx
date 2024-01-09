import { Col, Container, Image, Row, Spinner, Table } from "react-bootstrap";
import { useEffect } from "react";
import { productRequest } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../assets/stylesheets/pages/products.scss";

import type { ITableData } from "../../types/products";
import type { IStore } from "../../types/store";
import { IProduct } from "../../types/reducers/products";



const Products = () => {

  const dispatch = useDispatch();
  const products = useSelector((state: IStore) => state.products.data?.products);
  const total = useSelector((state: IStore) => state.products.data?.total);
  const dataSkip = useSelector((state: IStore) => state.products.skip);
  console.log({ products });

  const TableData = ({ imageUrl, title, description, price, rating, stock, brand, category }: ITableData) => {
    return (
      <tr>
        <td>
          <Image src={imageUrl} alt="thumbnail" className="thumbnail" />
        </td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{stock}</td>
        <td>{brand}</td>
        <td>{category}</td>
      </tr>
    );
  }

  useEffect(() => {
    dispatch(productRequest(0));
  }, [dispatch]);

  return (
    <Container className="products__container">
      <Row>
        <Col>
          <InfiniteScroll
            dataLength={total || 100}
            height={600}
            next={() => {
              console.log("next");
              dispatch(productRequest(dataSkip + 10))
            }}
            hasMore={dataSkip === 100 ? false : true}
            loader={<Spinner />}
          >
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
                {
                  products?.map((it: IProduct, index: number) =>
                    <TableData
                      key={`products-${index}`}
                      imageUrl={it.thumbnail}
                      title={it.title}
                      description={it.description}
                      price={it.price}
                      rating={it.rating}
                      stock={it.stock}
                      brand={it.brand}
                      category={it.category}
                    />)
                }
              </tbody>
            </Table>
          </InfiniteScroll>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;