import React, { useState, useRef} from "react"
// import { Button, FormControl, Form } from "react-bootstrap";
import './auth.css'
import "@lottiefiles/lottie-player";
export default function RegisterPage() {
    const ref = useRef(null);
    React.useEffect(() => {
      import("@lottiefiles/lottie-player");
    });
 const [auth, setAuth] =useState('')
    const onAuthSave = () => {
     if (auth === "mavzuna95") {
        localStorage.setItem('auth', JSON.stringify({
            id: 15,
            name: auth,
          }))    
     }else{
        alert("Логин или пароль не верны,проверьте еще раз!!")
     }
     window.location.reload()
    }
    return(
        <div className="registr-page">
        <div className='form-list-registr'>
      <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
        //   controls
          loop
          mode="normal"
          src="https://assets6.lottiefiles.com/packages/lf20_bvriqbvf.json"
          style={{ width: "300px", height: "200px" }}
        ></lottie-player>

            <h2 className="telegram-title">Войти в Telegram</h2>
        <form className='loginPage'>
            <input className="input-registr" 
                type="text" name='login'
                onChange={ (e)=> setAuth(e.target.value)} 
                placeholder="login" required/>

            <button onClick={onAuthSave} 
                className='button-registr w-100'>
                Вход
            </button>
        </form>
         </div>
         </div>
 
    ) 
}