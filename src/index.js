import React  from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles/login.module.css";


const Loginpage = () =>{
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="image_1.png" alt=" "/>
      </div>
      
      <div className={styles.loginform}>
      <p>Welcome back</p>
      <h2>Login to your account</h2>
        <form>
          <p>Email</p>
          <input type="email" placeholder="John.snow@gmail.com"/>
          <p>Password</p>
          <input type="password" placeholder="*********"/>
        </form>
        <div className={styles.pwdremaining}>
        <div><input type="radio"/>
        <label>Remeber me</label></div>   
        <p style={{color:"#2C5282"}}>Forgot password?</p>
      </div>
      <button className={styles.loginbutton}>login now</button><br/>
      <button className={styles.Googlebutton}><img src="iconfinderGoogle.png" alt=" "/>or sign-in with google</button> 
      <div className={styles.account}><p>Dont have an account? Join free today</p></div> 
      </div>
    </div>
  );
};
ReactDOM.render(<Loginpage />, document.getElementById('root'));
