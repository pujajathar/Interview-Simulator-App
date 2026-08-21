import { useNavigate } from "react-router-dom";
import Interview from "../Interview/Interview";

function InterviewSetup() {

        const navigate = useNavigate();
    return(
        <div>
  <h2 className='level'>Select a Level</h2>
            <div className='cards'>
            <div className="card">
            <h3>Beginner</h3>
            </div>
            <div className="card">
            <h3>Intermediate</h3>
            </div>
            <div className="card">
            <h3>Advanced</h3>
            </div>
            <div>
            <button onClick={ () => navigate("/interview")}>Start Interview</button>
            </div>
            </div>
            </div>
    );
}
export default InterviewSetup;