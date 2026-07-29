import './Footer.css';
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <p>
                &copy; {year} Aratrika Sarkar. Built with React.
            </p>
        </footer>
    );
}
export default Footer;
