import React from 'react';
import { Form } from 'semantic-ui-react';

function ContactForm() {
    let value='';

    return(
        <div>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default ContactForm;