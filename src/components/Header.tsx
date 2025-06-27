import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

interface HeaderState {
    isMenuOpen: boolean;
}

class Header extends React.Component<{}, HeaderState> {
    state: HeaderState = {
        isMenuOpen: false,
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    closeMenu = () => {
        this.setState({ isMenuOpen: false });
    };

    render(): React.ReactNode {
        const { isMenuOpen } = this.state;

        return (
            <header className="header">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo " onClick={this.closeMenu}>
                            WB
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/cliente" onClick={this.closeMenu}>
                                    Clientes
                                </Link>
                            </li>
                            <li>
                                <Link to="/produto" onClick={this.closeMenu}>
                                    Produtos
                                </Link>
                            </li>
                            <li>
                                <Link to="/servico" onClick={this.closeMenu}>
                                    Serviços
                                </Link>
                            </li>
                        </ul>

                        {/* Botão hamburguer - só aparece em telas pequenas */}
                        <div className="hamburger show-on-small" onClick={this.toggleMenu}>
                            ☰
                        </div>
                    </div>
                </nav>

                {/* Menu dropdown mobile */}
                {isMenuOpen && (
                    <nav className="dropdown-menu">
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/clientes">Clientes</a></li>
                                <li><a href="/produtos">Produtos</a></li>
                                <li><a href="/servicos">Serviços</a></li>
                                <li><a href="/relatorios">Relatórios</a></li>
                            </ul>
                        </nav>

                    </nav>
                )}
            </header>
        );
    }
}

export default Header;
