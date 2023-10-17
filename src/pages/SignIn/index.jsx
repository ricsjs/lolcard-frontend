import './signin.css'
import logo from '../../assets/logo.png'
import fbicon from '../../assets/fbicon.png'
import googleicon from '../../assets/googleicon.png'

import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div className='background'>
            <div className='ctn-login'>
                <div className='ctn-content-login'>
                    <img src={logo} height={140}/>

                    <div className='opc-login'>
                        <span>entrar com</span>
                        <div className='icon-login'>
                            <img src={fbicon} height={35}/>
                            <img src={googleicon} height={35}/>
                        </div>
                        <span>ou</span>
                    </div>

                    <div className='textfield-login'>
                        <input placeholder='email@email.com' type='email'/>
                        <input placeholder='*******' type='password'/>
                    </div>

                    <div className='btn-entrar'>
                        <button>Entrar</button>
                    </div>

                    <Link className='link-signup' href="#">Não tem uma conta? Cadastre-se!</Link>

                </div>
            </div>
        </div>
    )
}