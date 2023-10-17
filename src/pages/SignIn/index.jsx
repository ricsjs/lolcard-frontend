import './signin.css'
import logo from '../../assets/logo.png'
import fbicon from '../../assets/fbicon.png'
import googleicon from '../../assets/googleicon.png'

export default function SignIn() {
    return (
        <div className='background'>
            <div className='ctn-login'>
                <div className='ctn-content-login'>
                    <img src={logo} height={150}/>

                    <div className='opc-login'>
                        <span>entrar com</span>
                        
                        <div className='icon-login'>
                            <img src={fbicon} height={35}/>
                            <img src={googleicon} height={35}/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}