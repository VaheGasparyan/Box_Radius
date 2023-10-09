import { ChangeEvent, useState } from 'react';

import styles from './BoxButtonsWrapper.module.scss';

const BoxButtonsWrapper = () => {
    const [boxRadius, setBoxRadius] = useState({
        borderTopRightRadius: '32',
        borderTopLeftRadius: '15',
        borderBottomRightRadius: '25',
        borderBottomLeftRadius: '46'
    });

    const changeBoxRadius = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.dataset.name);
        setBoxRadius(prevState => {
            return {
                ...prevState,
                [event.target.dataset.name as string]: event.target.value + '%'
            }
        })
    }

    return (
        <div className={styles.box_button_wrapper} >
            <div className={styles.change_box} style={{...boxRadius}} ></div>
            <div className={styles.buttons_wrapper}>
                <div>
                    <span>Top Left Radius</span>
                    <input onChange={changeBoxRadius} value={parseInt(boxRadius.borderTopLeftRadius)} data-name='borderTopLeftRadius' type="range" />
                    <span>Top Right Radius</span>
                    <input onChange={changeBoxRadius} value={parseInt(boxRadius.borderTopRightRadius)} data-name='borderTopRightRadius' type="range" />
                </div>
                <div>
                    <span>Bottom Left Radius</span>
                    <input onChange={changeBoxRadius} value={parseInt(boxRadius.borderBottomLeftRadius)} data-name='borderBottomLeftRadius' type="range" />
                    <span>Bottom Right Radius</span>
                    <input onChange={changeBoxRadius} value={parseInt(boxRadius.borderBottomRightRadius)} data-name='borderBottomRightRadius' type="range" />
                </div>
            </div>
        </div>
    )
};

export default BoxButtonsWrapper;