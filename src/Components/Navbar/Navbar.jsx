import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './style.scss';

const data = [
    {
        label: 'HOME',
        to: '/Home'
    },
    {
        label: 'ABOUT ME',
        to: '/About'
    },
    {
        label: 'SKILLS',
        to: '/Skills'
    },
    {
        label: 'RESUME',
        to: '/Resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/Portfolio'
    },
    {
        label: 'CONTACT',
        to: '/Contact'
    },
];


const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className='navbar_container_logo'>
                        <FaReact size={30} />

                    </Link>
                </div>

                <ul className= {`nav-container-menu ${toggleIcon ? 'active' : ''} `}  >
                    {
                        data.map((item, key) => (
                            <li key={key} className="menu_item">
                                <Link className='menu_item_links' to={item.to}>
                                    {item.label}

                                </Link>
                            </li>
                        ))
                    }
                </ul>
                 <div className="nav-icons" onClick={handleToggleIcon}>
                     {
                         toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                     }
                </div>
            </nav>

        </div>
    )
}

export default Navbar