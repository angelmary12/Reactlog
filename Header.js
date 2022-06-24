import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    <Link to="/add" >Add Product</Link>
                    <Link to="/update" >Update Product</Link>
                    <Link to="/login" >Login</Link>
                    <Link to="/register" >Register</Link>

                </Nav>
            </Navbar>
        </div>
    )
}
export default Header
