import React from "react";
import './assets/stylesheets/core/global.scss';
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IStore } from "./types/store";
import Header from "./container/layout/header";

function App() {
  const isAuthenticated = useSelector((state: IStore) => state.auth.isAuthenticated);
  return (
    <Container className="App" fluid>
      <Row>
        <Col x2={12} className="p-0">
          {isAuthenticated ? <Header /> : null}
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p-0">
          <RouterProvider router={router} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
