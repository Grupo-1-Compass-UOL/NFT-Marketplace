import { useState } from 'react';
import Styles from './FormCreateAccount.module.css';
import Input from '../../forms/Input'
import { IconUser } from '../../img/iconUser';
import { IconEmail } from '../../img/iconEmail';
import IncoLockKey from '../../../assets/images/img/IconLockKey'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormCreateAccount() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const checkEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    const checkPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");
    const checkUsername = new RegExp("[a-zA-Z0-9]{4,16}$");

    const [inputUsername, setInputUsername] = useState(false);
    const [inputEmail, setInputEmail] = useState(false);
    const [inputPassord, setInputPassword] = useState(false);
    const [inputPasswordMatch, setInputPasswordMatch] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify({ username, email, password, confirmPassword }, null, 2));

    };

    const check = () => {
        if (!checkUsername.test(username)) {
            setInputUsername(true);
        } else {
            setInputUsername(false);
        }
        if (!checkPassword.test(password)) {
            setInputPassword(true);
        } else {
            setInputPassword(false);
        }
        if (!checkEmail.test(email)) {
            setInputEmail(true);
        } else {
            setInputEmail(false);
        }
        if (password !== confirmPassword) {
            setInputPasswordMatch(true);
        }
        else {
            setInputPasswordMatch(false);
        }
    };

    const isFormValid = !inputUsername && !inputEmail && !inputPassord && inputPasswordMatch === false;

    const handleCreateAccount = () => {
        if (isFormValid) {
            toast("Your account was created");
        }
    };

    return (
        <form className={Styles.formCreateContainer} onSubmit={handleSubmit}>
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon}>
                    <IconUser isGray={true} />
                </span>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
            </div>
            {inputUsername && <p>Please enter a valid username</p>}
            <div className={Styles.inputContainer}>

                <span className={Styles.inputIcon}>
                    <IconEmail isGray={true} />
                </span>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>
            {inputEmail && <p>Please enter a valid email.</p>}

            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon}>
                    <IncoLockKey />
                </span>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            {inputPassord && <p>Enter a strong password</p>}

            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon}>
                    <IncoLockKey />
                </span>
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
                {inputPasswordMatch && <p>Passwords do not match</p>}

            </div>
            <div className={Styles.btnContainer}>
                <button onClick={() => {
                    check();
                    handleCreateAccount();
                }} className={Styles.btnCreateAccount} type="submit">
                    Create Account
                </button>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </form>
    );
}

export default FormCreateAccount
