import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
function NavBar() {
  return (
    <Nav
      activeKey="/home"
      //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/componentA">ComponentA</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/componentB">ComponentB</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;