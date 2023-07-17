import Styles from './FormCreateAccount.module.css'
import { Input } from '../../Forms/Input';
import { IconUser } from '../../img/iconUser';
import { IconEmail } from '../../img/iconEmail';
import { IconLockKey } from '../../img/iconLockKey';

export function FormCreateAccount() {
    return (
        <form action="" className={Styles.formCreateContainer}>
            <div className={Styles.inputContainer}>
                <span className={Styles.inputIcon} ><IconUser isGray={true} /></span>
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
