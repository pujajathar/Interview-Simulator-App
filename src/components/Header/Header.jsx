import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import './Header.css';

function Header () {

    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }
    return (
        <header className="header">
            <span className="header_title">Interview Simulator</span>
        
        {isAuthenticated && (
            <div className="header_right">
                <span className="header_email">{user?.email}</span>
                <button className="header_logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        )}
        </header>
    )
 
}
export default Header;