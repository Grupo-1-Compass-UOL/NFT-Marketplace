import Photo from '../../../../assets/images/Photo.png';
import styles from './style/SubscribeWidget.module.css'
import SubscribeHeadlineText from './SubscribeHeadlineText';
function SubscribeWidget() {
    const image = {
        backgroundImage: `url(${Photo})`,
        backgroundRepeat: 'no-repeat',

    };

    return (
        <div >
            <div style={image}></div>
            <SubscribeHeadlineText
                title="Join our weekly digest"
                text="Get exclusive promotions & updates straight to your inbox."
            />
        </div>
    );
}

export default SubscribeWidget;
