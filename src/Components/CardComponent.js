import React from "react";
import { Card, CardGroup, Button, Container} from "react-bootstrap";
import dataSoccer from "../Lib/DataSoccer";

const CardComponent = () => {
  return (
    <Container className="mt-5 px-5">
      <center>
          <CardGroup className="col-md-10">
            {dataSoccer.map((item, index) => {
              return (
                <Card style={{ width: '18rem' }} key={index}>
                  <Card.Img variant="top" src={item.imgUrl} alt={item.title} />
                  <Card.Body className="text-start mt-2 px-2">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.article}</Card.Text>
                  <Button variant="primary">Readmore</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
          </center>
    </Container>
  );
};

export default CardComponent;
