import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

const AddNameUser = ({ setWord }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 4) {
      setError("La cantidad de carácteres debe ser mayor a 4");
      console.log(error);
      return;
    }
    if (inputValue.trim().toLowerCase() === "teleperformance") {
      setError("La búsqueda no es válida");
      return;
    }
    setWord(inputValue);
    setError(null);
    setInputValue("");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">
            A continuación escriba el nombre que desea buscar:
          </Form.Label>
          <Form.Control
            className="p-3"
            type="text"
            placeholder="Escribir Nombre"
            onChange={handleInputChange}
            value={inputValue}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="warning">
            Buscar
          </Button>
        </div>
      </Form>
      {error != null ? <Alert variant="danger mt-4">{error}</Alert> : false}
    </Container>
  );
};

export default AddNameUser;
