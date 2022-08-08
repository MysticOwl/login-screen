import Divider from '@mui/material/Divider'
import styles from './login.module.css'

import { FaGoogle} from 'react-icons/fa'

function LoginArea() {

    return (
        <div className={styles.flex}>
            <form>
                <p><span>Login</span></p>
                <p><span>Seja bem-vindo</span></p>
                <button className={styles.google_login}><FaGoogle className={styles.icon}/>Logar com conta google</button>
                <Divider>Ou login com email</Divider>
                <label htmlFor='email'><span>Email</span></label>
                <input id='login' type='email' name='login' placeholder='exemplo@exemplo.com'></input>
                <label htmlFor='password'><span>Senha</span></label>
                <input id='password' type='password' name='password' placeholder='Digite a sua senha'></input>
                    <div className={styles.form_bottom}>
                        <div>
                            <input type='checkbox' name='lembrar_me' id='lembrar_me'/>
                            <label htmlFor='lembrar_me'>lembrar-me</label>
                        </div>
                        <div>
                            <p><span>Esqueceu a senha?</span></p>
                        </div>
                    </div>
                <button className={styles.button_login}>Login</button>
                <p className={styles.cadastro_link}>Novo aqui? Crie sua conta aqui</p>
            </form>
        </div>
    )
}
export default LoginArea