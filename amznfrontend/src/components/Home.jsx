import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Navbar,
  FormControl,
  Nav,
  Form,
} from "react-bootstrap";

class Home extends Component {
  state = {
    products: [],
  };

  fetchProducts = async () => {
    try {
      let response = await fetch(`http://127.0.0.1:3004/products`);
      let data = await response.json();
      this.setState({ products: data });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  render() {
    console.log(this.props);
    return (
      <>
        {" "}
        <Navbar style={{ backgroundColor: "#131921" }}>
          <Nav className="mr-auto">
            <Form inline style={{ marginLeft: "500px", width: "850px" }}>
              <FormControl
                type="text"
                placeholder="Search"
                style={{ width: "800px", height: "50px" }}
              />
            </Form>
            <Nav.Link
              style={{ color: "white", fontWeight: "bolder", fontSize: "22px" }}
            >
              Account e liste
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", fontWeight: "bolder", fontSize: "22px" }}
            >
              Resi e ordini
            </Nav.Link>
          </Nav>
        </Navbar>
        <Navbar style={{ backgroundColor: "#232F3E" }}>
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              Tutte
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              Offerte di Natale
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              Buoni Regalo
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              Prime
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              AmazonBasics
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              Amazon.it di Abadabbadul
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              Servizio Clienti
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontWeight: "bold" }}>
              Bestseller
            </Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Row>
            {this.state.products.map((product) => (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  style={{ height: "120px", width: "150px" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}€</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
