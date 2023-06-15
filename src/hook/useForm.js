import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const useForm = () => {

    const navigate = useNavigate()
    const [submited, setSubmited] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        setisLoading(true)
        navigate("/submited")
        await fetch('https://formsubmit.co/denisson.graca3@gmail.com', {
            method: 'POST',
            body: formData,
        });
        setisLoading(false)
        setSubmited(true)

    };
    return {
        handleSubmit, submited, isLoading, setSubmited, setisLoading
    }
}

export default useForm