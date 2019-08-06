import React from 'react'
import '../styles/Header.scss'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="#home">WatchFace Toolbox <span role="img" aria-label="tools">🛠️</span></Navbar.Brand>
      <Nav>
        <Nav.Link href="#file">File</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header
