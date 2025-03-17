import { useNavigate } from "react-router-dom"

export const About = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>Aboot</h1>
            <button onClick={() => navigate('/')}>Home</button><br></br>
            <button onClick={() => navigate('/services')}>Services</button>
        </>
    )
}
