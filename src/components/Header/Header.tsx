import {Link} from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
    selectedIndex: number;
}

export default function Header(props: HeaderProps) {
    return (
        <header className="d-flex justify-content-center bg-dark py-3">
            <ul className="nav nav-pills">
                <li className="nav-item mx-1">
                    <Link to="/"
                          className={`nav-link ${props.selectedIndex == 0 ? 'active' : ''} ${styles.noUnderline}`}>
                        Главная
                    </Link>
                </li>
                <li className="nav-item mx-1">
                    <Link to="/car_list"
                          className={`nav-link ${props.selectedIndex == 1 ? 'active' : ''} ${styles.noUnderline}`}>
                        Список машин
                    </Link>
                </li>
                <li className="nav-item mx-1">
                    <Link to="/car_statuses"
                          className={`nav-link ${props.selectedIndex == 2 ? 'active' : ''} ${styles.noUnderline}`}>
                        Статусы машин
                    </Link>
                </li>
                <li className="nav-item mx-1">
                    <Link to="/car_types"
                          className={`nav-link ${props.selectedIndex == 3 ? 'active' : ''} ${styles.noUnderline}`}>
                        Типы машин
                    </Link>
                </li>
            </ul>
        </header>
    )
}