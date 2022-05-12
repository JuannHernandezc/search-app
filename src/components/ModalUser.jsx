import React, { useEffect, useState } from "react";
import {
  Modal,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { getUser } from "../helpers/getUser";

const ModalUser = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (props.username) {
      getUser(props.username).then((dataFetch) => {
        setData(dataFetch);
      });
    }
  }, [props.username]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="justify-content-center"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Informacion de Usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.avatar_url} className="p-3" />
            <Card.Body>
              <Card.Title className="text-center">{data.username}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> <b>ID:</b> {data.id}</ListGroupItem>
              <ListGroupItem>
              {data.location
                  ? (
                      <span><b>Localizacion:</b> {data.location}</span>
                  )
                  : (
                    <span><b>Localizacion:</b> N/A</span>
                  )}
              </ListGroupItem>
              <ListGroupItem> <b>Seguidores:</b> {data.followers}</ListGroupItem>
            </ListGroup>
          </Card>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUser;
