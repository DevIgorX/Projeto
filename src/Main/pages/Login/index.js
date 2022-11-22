import './style.css'
import Logo from '../../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className='Container-Geral'>
            <div className='Container-Card'>

                <img className='logo-login' src={Logo} />

                <h3 className='cabecalho-login'>Boas-vindas!</h3>
                <p className='texto-login'>Use seu e-mail e senha para acessar a conta</p>

                <form className='Container-Login'>

                    <label>E-mail
                        <input className='input-login' type='text'
                            placeholder='exemplo@email.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>Senha
                        <input className='input-login' type='password'
                            placeholder='Insira sua senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                    </label>

                    <button className='btn-grande-rosa' type='submit'>Fazer Login</button>

                    <p className="cor-texto-preto">
                        Não possui conta?
                        <Link className="texto-rosa" to="/cadastrar">
                            Cadastrar
                        </Link>
                    </p>

                </form>
            </div>

        </div>

    )
}

export default Login;