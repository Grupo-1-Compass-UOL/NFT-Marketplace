import styles from './createAccount.module.css';
import { FormCreateAccount } from './formCreateAccount/formCreateAccount'
import { Text } from '../text/text';
import { TitleCreateAccount } from '../titleCreateAccount/titleCreateAccount';
import Astronauta from '../../assets/images/ImagePlaceholder.png'

export function CreateAccount() {
    const fontSize = styles.fontSize;

    return (
        <div className={styles.createAccountContainer}>
            <div className={styles.imageContainer}>
                <img src={Astronauta} className={styles.imgCreateAccount} alt="" />
            </div>
            <div className={styles.createForm}>
                <div className={styles.headlineContainer}>
                    <TitleCreateAccount title='Create Account' />
                    <Text isSize={true} color="white" text='Welcome! enter your details and start creating, collecting and selling NFTs.' classFontSize={fontSize} />
                </div>
                <FormCreateAccount />
                <button className={styles.btnCreateAccount}>Create Account</button>
            </div>
        </div >
    );
}
