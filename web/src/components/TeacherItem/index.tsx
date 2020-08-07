import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/53984056?s=460&u=8bbf67726dc6a2a1dcf1d0cf3dad350f72d585b1&v=4" alt="Gustavo Dutra"/>
            <div>
                <strong>Gustavo Dutra</strong>
                <span>Química</span>
            </div>
        </header>
        
        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br />
            Apaixonado por explodir coisas em laboratorios e por mudar a vida das pessoas atráves de experiencias.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80.00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;