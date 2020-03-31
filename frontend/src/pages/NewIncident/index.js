import React ,{useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';
import api from '../../services/api';



export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    const data = {
        title,
        description,
        value
    }

    async function handleNewIncident(e){
        e.preventDefault();
        try {
            await api.post('incident',data, {
                headers: {
                    Authorization: ongId,
                }
            } )
            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar');
        }
    }
    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para enconstrar heróis pra resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit = {handleNewIncident} >
                    <input
                     placeholder="Titulo do caso" 
                     value = {title}
                     onChange= { (e) => setTitle(e.target.value)}
                    />
                    <textarea
                     placeholder="Descrição"
                     value = {description}
                     onChange= { (e) => setDescription(e.target.value)} 
                    />

                    <input
                     placeholder="Valor em reais" 
                     value = {value}
                     onChange= { (e) => setValue(e.target.value)}
                    />

                    <div className="input-group">
                        <button className="button" type="submit">Cancelar</button>
                        <button  className="button" type="submit">Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}