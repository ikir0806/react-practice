import { NavLink, Outlet } from "react-router-dom";
import style from './Header.module.css';

export const nav = [
    {
        id: 1,
        name: 'Home',
        to: '/',
    },
    {
        id: 2,
        name: 'Movies',
        to: '/movies',
    },
    {
        id: 3,
        name: 'Music',
        to: '/music',
    },
    {
        id: 4,
        name: 'Info',
        to: '/info',
    },
];

export const Header = () => {
    return (
        <>
            <header>
                <ul className={style.header__ul}>
                    {nav.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={link.to}
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    opacity: isActive ? 0.5 : 1
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </>)
}