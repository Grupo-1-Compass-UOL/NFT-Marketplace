import classes from './nfthighlight.module.css'
import NumberNFT from './NumberNFT';


const TimerNFT = () => {
    return (
        <div className={classes.AuctionTimer}>
            <p>Auction ends in:</p>
            <div className={classes.Timer}>
                <NumberNFT number="59" text='Hours' />
                <h4>:</h4>
                <NumberNFT number="59" text='Minutes' />
                <h4>:</h4>
                <NumberNFT number="59" text='Seconds' />
            </div>
        </div>
    )
}

export default TimerNFT