import { useState } from 'react';
import Styles from './FormCreateAccount.module.css';
import { Input } from '../../Forms/Input';
import { IconUser } from '../../img/iconUser';
import { IconEmail } from '../../img/iconEmail';
import { IconLockKey } from '../../img/iconLockKey';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FormCreateAccount() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const alert = () => toast("Your account was created");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify({ username, email, password, confirmPassword }, null, 2));
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
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon}>
                    <IconLockKey />
                </span>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon}>
                    <IconLockKey />
                </span>
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
            </div>
            <div className={Styles.btnContainer}>
                <button onClick={alert} className={Styles.btnCreateAccount} type="submit">
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
