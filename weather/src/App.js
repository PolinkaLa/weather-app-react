import React, {Component, Fragment} from 'react';
import "./bootstrap.css";
import { Nav, Container, Row, Col } from "react-bootstrap";
import WeatherDisplay from './WeatherDisplay';
import PLACES from './PLACES'

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    }
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <Fragment>
        <h1 className="text-center">React Weather App</h1>
        <Container>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                variant="pills"
                className="flex-column"
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}>
                {PLACES.map((place, index) => (
                <Nav.Item><Nav.Link key={index} eventKey={index}>{place.name}</Nav.Link></Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default App;
