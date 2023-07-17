import styles from './CreateAccount.module.css';
import  FormCreateAccount  from './formCreateAccount/FormCreateAccount'
import { Text } from '../text/text';
import { TitleCreateAccount } from './TitleCreateAccount/TitleCreateAccount';
import Astronaut from '../../assets/images/ImagePlaceholder.png'

function CreateAccount() {

    return (
        <main>
            <div className={styles.createAccountContainer}>
                <div className={styles.imageContainer}>
                    <img src={Astronaut} className={styles.imgCreateAccount} alt="" />
                </div>
                <div className={styles.createForm}>
                    <div className={styles.headlineContainer}>
                        <TitleCreateAccount title='Create Account' />
                        <Text isSize={true} color="white" text='Welcome! enter your details and start creating, collecting and selling NFTs.' />
                    </div>
                    <FormCreateAccount />

                </div>
            </div >
        </main>
    );
}

export default CreateAccount;
