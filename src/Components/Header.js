import React from "react";
import { Alert, Col, Container, Row, Button, Badge } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="primary">Website React Bootstrap</Alert>
        </Col>
        <Col md={7} className="d-flex align-items-start justify-content-end me-3">
          <Button variant="primary">
            Notifications <Badge bg="light" text="dark">9</Badge>
          </Button>
          <Button variant="primary">
            Message<Badge bg="light" text="dark">19</Badge>
          </Button>
        </Col>
        <Col>
          <img
            width="25"
            height="25"
            src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
            alt="user icon"
          />
          {" "}Andreas
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
