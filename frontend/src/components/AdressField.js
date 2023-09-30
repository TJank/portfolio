import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Select from 'react-select';

function AdressField({ onAddressChange }) {
    const states = [
        { value: '', label: 'Select state' },
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'CA', label: 'California' },
        { value: 'CO', label: 'Colorado' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'HI', label: 'Hawaii' },
        { value: 'ID', label: 'Idaho' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IN', label: 'Indiana' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NV', label: 'Nevada' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'OH', label: 'Ohio' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'OR', label: 'Oregon' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'TX', label: 'Texas' },
        { value: 'UT', label: 'Utah' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WA', label: 'Washington' },
        { value: 'WV', label: 'West Virginia' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'WY', label: 'Wyoming' },
    ];


    const handleAddressChange = () => {
        // Get the address data from the form fields
        const streetAddress = document.getElementById('streetAddress').value;
        const apartmentNumber = document.getElementById('apartmentNumber').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zipcode = document.getElementById('zipcode').value;

        // Create an address object
        const addressData = {
            streetAddress,
            apartmentNumber,
            city,
            state,
            zipcode,
        };

        // Invoke the callback function passed from the parent component
        onAddressChange(addressData);
    };


    return (
        <div>
            <Row>
                <Col>
                    <Form.Group controlId="streetAddress">
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter street address" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="apartmentNumber">
                        <Form.Label>Apartment/Unit Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter apartment/unit number" />
                    </Form.Group>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
                        <Select options={states} isSearchable={true} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="zipcode">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter zip code" />
                    </Form.Group>
                </Col>
            </Row>
        </div>
    )
}

export default AdressField