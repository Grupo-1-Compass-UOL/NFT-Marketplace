import inputStyles from './createAccount.module.css';
import { FormCreateAccount } from '../formCreateAccount/formCreateAccount';
import astronauta from '../../assets/images/astronauta.jpg'

export function CreateAccount() {
    return (
        <div className={inputStyles.createAccountContainer}>
            <div>
                <img src={astronauta} className={inputStyles.imgCreateAccount} alt="" />
            </div>
            <div>
                <h5>Create Account</h5>
                <FormCreateAccount />
            </div>
        </div>
    );
}
