import { useNavigate } from "react-router-dom"
export default function About() {
    const navigate = useNavigate();
    function goToContact(){
        navigate('/contact')
    }
    return (
        <>
        <section>
            <div>About Page</div>
            <button onClick={goToContact}>Go To Contact Page</button>
            <button onClick={()=> {navigate(-1)}}>Go Back</button>

        </section>
        </>
    )
}