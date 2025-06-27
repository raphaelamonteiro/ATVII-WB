import React from 'react';
import "../index.css";  // ou './Footer.css' se usar CSS separado dedicado

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <h5 className="footer-title">Grupo World Beauty (WB)</h5>
                        <p className="footer-text">
                            Cuidando da sua beleza com qualidade e dedicação.
                        </p>
                    </div>
                    <div className="footer-bottom-bar">
                        © 2025 - Raphaela Monteiro
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
