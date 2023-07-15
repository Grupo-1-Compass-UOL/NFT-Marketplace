import Styles from './formCreateAccount.module.css'
import { Input } from '../forms/input';
import { IconUser } from '../img/iconUser';
import { IconEmail } from '../img/iconEmail';
import { IconLockKey } from '../img/iconLockKey';

export function FormCreateAccount() {
    return (
        <form action="" className={Styles.formCreateContainer}>
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon} ><IconUser /></span>
                <Input type="text" name="" id="" placeholder="Username" />
            </div>
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon} ><IconEmail isGray={true} /></span>
                <Input type="email" placeholder="Email" />
            </div>
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon} ><IconLockKey /></span>
                <Input type="password" placeholder="Password" />
            </div>
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon} ><IconLockKey /></span>
                <Input type="password" placeholder="Confirm Password" />
            </div>
        </form>
    );
}
