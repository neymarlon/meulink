import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Menu() {
    return(
        <div className='menu'>
            <a className="social" href="https://www.youtube.com/channel/UCTcqljp8OYe8YWSD4tIubWA/featured">
                <BsYoutube color='white' size={24}/>
            </a>

            <a className="social" href="https://instagram.com/bomdianey">
                <BsInstagram color='white' size={24}/>
            </a>
            <Link className="menu-item" to="/links">
                meus links
            </Link>
        </div>
    )
}
