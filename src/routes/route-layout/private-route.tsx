import { useSelector } from "react-redux"
import { IStore } from "../../types/store";
import { Navigate, Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import SideNav from "../../container/layout/sidenav";


export const PrivateLayout: React.FC = () => {
  const isAuthenticated = useSelector((state: IStore) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Container fluid>
      <Row>
        <Col xs={12} lg={2} className="p-0">
          <SideNav />
        </Col>
        <Col xs={12} lg={8} className="p-0">
          <main>
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  ) : <Navigate to={"/login"} />
}