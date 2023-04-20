import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';


export default function Create(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    let history = useHistory();

    const postData = () => {
        axios.post(`https://644027803dee5b763e305464.mockapi.io/users`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }

    return(
        <Form className='create-form'>
        <Form.Field>
            <label>First Name</label>
            <input 
                placeholder='First Name' 
                onChange={(e) => setFirstName(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input 
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)} 
            />
        </Form.Field>
        <Form.Field>
            <Checkbox 
                label='I agree to the Terms and Conditions' 
                onChange={(e) => setCheckbox(!checkbox)}
            />
        </Form.Field>
        <Button 
            onClick={postData}
            type='submit'
            
        >Submit</Button>
        </Form>
    )
    
}