import React from 'react'
import { Container, Navbar as Navigation } from 'react-bootstrap'
const Navbar = () => {
  return (
    <Navigation bg="dark" variant="dark" className="mb-5">
    <Container>
      <Navigation.Brand href="#home">
        <img
          alt=""
          src="https://res.cloudinary.com/danhzm8qb/image/upload/v1652467891/search-app/lupa_yayvxc.png"
          width="30"
          height="30"
          className="d-inline-block align-top mx-4"
        />{' '}
        Aplicación de busqueda
      </Navigation.Brand>
    </Container>
  </Navigation>
  )
}

export default Navbar