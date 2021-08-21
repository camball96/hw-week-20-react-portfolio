import { useEffect, useState } from 'react';

const FormVal = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        question: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return {handleChange, values}
}

export default FormVal;