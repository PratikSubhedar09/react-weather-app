import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CityList from './containers/CityList';
import WeatherDetails from './containers/WeatherDetails';

import "./App.css";



const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To The Weather App</h1>
      <Container>
        <Row>
          <Col>
            <CityList />
          </Col>
          <Col>
            <WeatherDetails />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </Container>
);

export default App;
