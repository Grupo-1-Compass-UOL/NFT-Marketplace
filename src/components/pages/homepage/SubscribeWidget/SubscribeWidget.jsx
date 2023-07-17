import Photo from '../../../../assets/images/Photo.png';
import styles from './style/SubscribeWidget.module.css'
import SubscribeHeadlineText from './SubscribeHeadlineText';
import { Input } from './../../../Forms/Input';
function SubscribeWidget() {

    const image = {
        backgroundImage: `url(${Photo})`,
        backgroundRepeat: 'no-repeat',
        width: '315px',
        height: '255px',
        borderRadius: '20px'


    };

    return (
        <div className={styles.subscribeWidget}>
            <div className={styles.imageContainer} style={image}></div>
            <div className={styles.sectionheadline} >
                <SubscribeHeadlineText
                    title="Join our weekly digest"
                    text="Get exclusive promotions & updates straight to your inbox."
                />
                <div>
                    <Input isClass={true} placeholder='Enter your email here' />
                </div>
            </div>
        </div >
    );
}

export default SubscribeWidget;
