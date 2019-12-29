
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CityList() {
    const [cities, setSelectedCities] = useState([{name: 'Mumbai', checked: false}, {name: 'Hyderabad', checked: false}, {name: 'Chennai', checked: false}]);
  
    const handleCityCheck = ({ target: { id } }) => {
      const newCitiesState = [...cities];
      const selectedCity = newCitiesState.find(city => city.name === id);
      selectedCity.checked = !selectedCity.checked;
      setSelectedCities(newCitiesState)
    }
  
    const handleSubmit = () => {
      console.log('submitted', cities);
    }
  
    return (
      <>
        <h5>Select the cities and click on "Get Info" to get their weather info</h5>
        <Form>
          <div className="mb-3">
            {
              cities.map(city => (
                <Form.Check
                  type='checkbox'
                  key={city.name}
                  id={city.name}
                  label={city.name}
                  checked={city.checked}
                  onChange={handleCityCheck}
                />
              ))
            }
          </div>
          <Button variant="info" onClick={handleSubmit}>Get Info</Button>
        </Form>
      </>
    );
  };