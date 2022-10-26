import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { getLinksSave, saveLink } from '../../services/storeLinks';

export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);


  async function handleShortLink() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data);
      setShowModal(true);  
      saveLink('@encurtaLink', response.data)
      setLink('')
    }catch{
      alert("No momento estamos intermitentes. Aguarde atualizações! :)");
      setLink('');
    }    
  }
    return(
      <div className="container-home">
        <div className="logo">
          <img src="/logo.png" alt="logo"/>
          <h1>encurtador do ney ^_^</h1>
          <span>simples e rápido</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={18} color="#FFF"/>
            <input
              placeholder="cole seu link aqui"
              value={link}
              onChange={ (e) => setLink(e.target.value) }
            />
          </div>

          <button onClick={handleShortLink}>gerar link</button>
        </div>    
        <Menu/>
        {showModal && (
          <LinkItem
            closeModal={ () => setShowModal(false) }
            content={data}
          />
        )}
      </div>      
    )
  }