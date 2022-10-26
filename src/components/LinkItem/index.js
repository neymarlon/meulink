import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';


export default function LinkItem({ closeModal, content }){

    async function copyLink() {
        await navigator.clipboard.writeText(content.link)
        alert("URL COPIADA COM SUCESSO")
    }
    return(
        <div className="modal-container">
            <div className="modal-header">
                <h2>link encurtado</h2>
                <button onClick={closeModal}>
                <FiX size={18} color="black"/>
                </button>
            </div>
            <span>
                {content.long_url}
            </span>
            <button className="modal-link" onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="white"/>
            </button>
        </div>
    )
}   