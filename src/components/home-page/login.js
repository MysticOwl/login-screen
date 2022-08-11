import Divider from '@mui/material/Divider'
import styles from './login.module.css'
import { useState } from 'react'

import { FaGoogle } from 'react-icons/fa'

function LoginArea() {

    function Logando(e) {
        e.preventDefault()
        console.log(login, password)
        return true
    }

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    return (
        <div className={styles.flex}>
            <form>
                <p><span>Login</span></p>
                <p><span>Seja bem-vindo</span></p>
                <button className={styles.google_login}><FaGoogle className={styles.icon} />Logar com conta google</button>
                <Divider>Ou login com email</Divider>
                <div className={styles.input_login}>
                    <input id='login' type='text' name='email' required='required'></input>
                    <span>Email</span>
                </div>
                <div className={styles.input_login}>
                    <input id='password' type='password' name='password' required='required'></input>
                    <span>Senha</span>
                </div>
                <div className={styles.form_bottom}>
                    <div>
                        <input type='checkbox' name='lembrar_me' id='lembrar_me' />
                        <label htmlFor='lembrar_me'>lembrar-me</label>
                    </div>
                    <div>
                        <p><span><a taget='_blank' href='foo'>Esqueceu a senha?</a></span></p>
                    </div>
                </div>
                <button className={styles.button_login}>Login</button>
                <p className={styles.cadastro_link}>Novo aqui? <a taget='_blank' href='foo'>Crie sua conta aqui</a></p>
            </form>
        </div>
    )
}
export default LoginArea