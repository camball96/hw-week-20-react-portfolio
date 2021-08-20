import React from 'react';
import { Form } from 'semantic-ui-react';
import formVal from './Components/formVal';


function ContactForm() {
    const {handleChange, values} = formVal();

    return(
        <div className='form'>
            <h1 className='formHeading'>Reach out to us!</h1>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input 
                    label='Name' 
                    placeholder='Your name' 
                    value={values.name} 
                    onChange={handleChange}/>
                    <Form.Input 
                    fluid label='Email' 
                    placeholder='Your email'
                    value={values.email} 
                    onChange={handleChange} />
                </Form.Group>
                <Form.TextArea 
                label='Question' 
                placeholder='Want to ask something?'
                value={values.question} 
                onChange={handleChange} />
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default ContactForm;