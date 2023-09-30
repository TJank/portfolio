import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'

function ContactScreen() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [service, setService] = useState('');
    const [description, setDescription] = useState('');

    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit')
    }

  return (
    <div>
        <FormContainer>
            <h1 className='section-title' style={{textAlign: 'center'}}>Contact Janky Robotics for Consultation</h1>

            {
                errorMsg ? <Message variant='danger'>{errorMsg}</Message> : 
                successMsg ? <Message variant='success'>{successMsg}</Message> : 
                null
            }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='fullname'>
                    <Form.Label className='fieldname'>Full Name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        className='textfield'
                        placeholder='Full Name'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label className='fieldname'>Email</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        className='textfield'
                        placeholder='contact@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='phonenumber'>
                    <Form.Label className='fieldname'>Phone Number</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        className='textfield'
                        placeholder='(123) 456-7890'
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='fieldname'>Select Service</Form.Label>
                    <Form.Select >
                        
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label className='fieldname'>Description</Form.Label>
                    <Form.Control 
                        required
                        as="textarea" 
                        rows={3}
                        style={{height: "175px"}}
                        className='textfield'
                        placeholder='Enter description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <div className='submitbtn'>
                    <Button type='submit' >Submit</Button>
                </div>
            </Form>
        </FormContainer>
    </div>
  )
}

export default ContactScreen