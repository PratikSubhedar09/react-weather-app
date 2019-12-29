import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

export default function WeatherDetails(props) {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const status = props.ajaxStatuses.getCityWeather;
        if (status === 'PENDING') {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [props.ajaxStatuses.getCityWeather]);

    const details = props.cityWeather;
    return (
        <Card>
            <Card.Body>
            <Card.Title>Weather details for the selected cities:</Card.Title>
            {
                isLoading ?
                    <Container>
                        <Row className="justify-content-md-center">
                            <Spinner className="justify-content-md-center" animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Row>
                    </Container>
                :
                <>
                    {
                        details.length > 0 ?
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Location</th>
                                    <th>Weather</th>
                                    <th>Temperature</th>
                                    <th>Humidity</th>
                                    <th>Wind</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        details.map((detail, index) => (
                                            <tr key={detail.location.city}>
                                                <td>{index + 1}</td>
                                                <td>{detail.location.city}</td>
                                                <td>{detail.current_observation.condition.text}</td>
                                                <td>{((detail.current_observation.condition.temperature - 32) * 5 / 9).toFixed(2)}&#8451;</td>
                                                <td>{`${detail.current_observation.atmosphere.humidity}%`}</td>
                                                <td>{`${detail.current_observation.wind.speed} km/h`}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        :
                            <Card.Text>
                                Select a city to get weather info.
                            </Card.Text>
                    }
                </>
            }
            
            </Card.Body>
        </Card>
    )
}