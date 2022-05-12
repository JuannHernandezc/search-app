import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { getUsers } from "../helpers/getUsers";
import ModalUser from "./ModalUser";

const CardUsers = ({ word }) => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    if (word) {
      getUsers(word).then((dataFetch) => {
        setData(dataFetch);
      });
    }
  }, [word]);

  const handleInfo = (id) => {
    setModalShow(true);
    setUsername(id);
  };
  return (
    <Container>
      <Row className="justify-content-center">
        {data.map((item) => {
          return (
            <Card
              style={{ width: "18rem" }}
              className="m-3"
              key={item.id}
              bg="light"
            >
              <Card.Img variant="top" src={item.avatar_url} className="p-3" />
              <Card.Body>
                <Card.Title className="text-center">{item.username}</Card.Title>
                <Card.Text className="text-center">{item.id}</Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="dark" size="md" onClick={() => handleInfo(item.username)}>
                    Ver más
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      <ModalUser show={modalShow} onHide={() => setModalShow(false)} username={username}/>
    </Container>
  );
};

export default CardUsers;
