import styles from './CreateAccount.module.css';
import { FormCreateAccount } from './FormCreateAccount/FormCreateAccount'
import { Text } from '../text/text';
import { TitleCreateAccount } from '../titleCreateAccount/titleCreateAccount';
import Astronaut from '../../assets/images/ImagePlaceholder.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function CreateAccount() {
    const fontSize = styles.fontSize;

    return (
        <main>
            <Header />
            <div className={styles.createAccountContainer}>
                <div className={styles.imageContainer}>
                    <img src={Astronaut} className={styles.imgCreateAccount} alt="" />
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
            <Footer />
        </main>
    );
}
