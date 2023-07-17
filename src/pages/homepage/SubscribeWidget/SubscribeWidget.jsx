import Photo from '../../../../assets/images/Photo.png';
import styles from './style/SubscribeWidget.module.css'
import SubscribeHeadlineText from './SubscribeHeadlineText';
import { Input } from './../../../Forms/Input';
import { useState, useEffect } from 'react';
import { IconEmail } from '../../../img/iconEmail';

function SubscribeWidget() {

    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const image = {
        backgroundImage: `url(${Photo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: size >= 1024 ? '425px' : size >= 819 ? '300px' : size >= 375 ? '315px' : '100%',
        height: size >= 1024 ? '310px' : size >= 819 ? '280px' : size >= 375 ? '255px' : 'auto',
        borderRadius: '20px',
    };


    return (
        <div className={styles.widgetContainer}>
            <div className={styles.subscribeWidget}>
                <div className={styles.imageContainer} style={image}></div>
                <div className={styles.sectionheadline} >
                    <SubscribeHeadlineText
                        title="Join our weekly digest"
                        text="Get exclusive promotions & updates straight to your inbox."
                    />
                    <div className={styles.subscribeContainer}>
                        <Input isClass={true} placeholder='Enter Your Email Here' />
                        <button className={styles.btnSubscribe}><IconEmail /> Subscribe</button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default SubscribeWidget;
