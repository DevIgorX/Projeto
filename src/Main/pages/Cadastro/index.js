import './style.css'
import Logo from '../../../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'



function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const navigate = useNavigate('')

    return (
        <div className='Container-Geral-Cadastro'>
            <div className='Container-Cadastro'>

                <img className='img-cadastro-logo' src={Logo} />

                <h2 className='cabecalho-Cadastro'>Cadastre-se</h2>


                <form className='Container-Formulario'>
                    <label>Nome da Loja
                        <input className='input-cadastro' type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                    </label>

                    <label>Email
                        <input className='input-cadastro' type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>Senha
                        <input className='input-cadastro' type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                    </label>

                    <label>Confirmar Senha
                        <input className='input-cadastro' type='password'
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)} />
                    </label>
                    <div className='texto-criar-conta'>
                        <p>   Ao criar uma conta, você concorda com a nossa <br />
                            <a className='texto-rosa'>Política de Privacidade </a> <span>e </span>
                            <a className='texto-rosa'>Termos de serviço</a></p>
                    </div>

                    <div className='container-btn'>
                        <button className='btn-grande-rosa' type='submit'>Fazer Login</button>

                        <p className="cor-texto-preto">
                            Já tem uma conta?
                            <Link className="texto-rosa" to="/login">
                                Fazer login
                            </Link>
                        </p>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default Cadastro;