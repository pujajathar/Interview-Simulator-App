import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p className="footer_text">
                © {year} Interview Simulator. Practice makes perfect.
            </p>
        </footer>
    )
}
export default Footer;