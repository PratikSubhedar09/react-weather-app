import React from "react";
import Card from "react-bootstrap/Card";

export default function WeatherDetails() {
    return (
        <Card>
            <Card.Body>
            <Card.Title>Weather details for the selected cities</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}