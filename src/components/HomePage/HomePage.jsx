
import { useNavigate } from 'react-router-dom';
import './HomePage.css'
function HomePage ( ) {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Interview Simulator</h1>
          
            
            <div className='btn-container'>
            <button className='btn' onClick={ () => navigate("/interview-setup")}>Start</button>
            </div>
        </div>

    );
}
export default HomePage;