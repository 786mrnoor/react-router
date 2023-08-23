import { useNavigate } from "react-router-dom"

export default function Contact() {
    const navigate = useNavigate();
    function goToHome(){
        navigate ('/');
    }
    return (
        <>
        <section>
            <div>Contact Page</div>
            <button onClick={goToHome}>Go To Home Page</button>
        </section>
        </>
    )
}