import './error.css';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div className="container-error">
            <img src="notfound.png" alt="página não encontrada"></img>
            <h1>página não encontrada</h1>
            <Link to="/">
                voltar ao início
            </Link>
        </div>
    )
}