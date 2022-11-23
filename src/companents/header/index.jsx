import './style.css'
import logo from '../../assets/logo-heard.svg'
import { Link } from 'react-router-dom'
import { BsCartPlusFill } from 'react-icons/bs'

export default function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <img src={logo} alt="marca" />
            </div>

            <ul className="navegação">
                <li>
                    <Link className='link' to="">


                    </Link>
                </li>
            </ul>
        </header>
    )
}


