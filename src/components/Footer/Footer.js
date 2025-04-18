
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <p>Изготвила Ренета Бонева</p>
                <div id='footerIconsDiv'>
                    <a href="https://www.linkedin.com/in/reneta-boneva-39bb72259/" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/renetaBoneva" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}