import React from 'react';
import styles from './homePage.module.css'

const CountDownTimer = () => {
    return (
        <div className={`${styles['countdown-container']}`}>
            <h4>Register Yourself</h4>
            <h4 className={`${styles['middle-text']}`}>to the</h4>
            <h4>Most Awaiting Tournament of The Year    </h4>
            <div className={`${styles['timeblocks-container']}`}>
                <div className={`${styles['timer-blocks']}`}>
                    <div className={`${styles['time']}`}> 29</div>
                    <div className={`${styles['label']}`}>days</div>
                </div>
                <div className={`${styles['timer-blocks']}`}>
                    <div className={`${styles['time']}`}>17</div>
                    <div className={`${styles['label']}`}>hours</div>
                </div>
                <div className={`${styles['timer-blocks']}`}>
                    <div className={`${styles['time']}`}>59</div>
                    <div className={`${styles['label']}`}>minutes</div>
                </div>
                <div className={`${styles['timer-blocks']}`}>
                    <div className={`${styles['time']}`}>56</div>
                    <div className={`${styles['label']}`}>seconds</div>
                </div>
            </div>
            <button>Register</button>
        </div >
    );
};

export default CountDownTimer;