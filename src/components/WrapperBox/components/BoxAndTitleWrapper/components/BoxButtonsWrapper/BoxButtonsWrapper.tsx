import { ChangeEvent, useState } from 'react';

import styles from './BoxButtonsWrapper.module.scss';

const BoxButtonsWrapper = () => {
    const [boxRadius, setBoxRadius] = useState({
        topLeft: 32,
        topRight: 15,
        bottomLeft: 25,
        bottomRight: 46
    });

    const changeBoxRadius = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.dataset.name);
        setBoxRadius(prevState => {
            return {
                ...prevState,
                [event.target.dataset.name as string]: event.target.value
            }
        })
    }

    return (
        <div className={styles.box_button_wrapper} >
            <div className={styles.change_box} style={{borderTopRightRadius: `${boxRadius.topRight}%`, borderTopLeftRadius: `${boxRadius.topLeft}%`, borderBottomRightRadius: `${boxRadius.bottomRight}%`, borderBottomLeftRadius: `${boxRadius.bottomLeft}%`}}></div>
            <div className={styles.buttons_wrapper}>
                <div>
                    <span>Top Left Radius</span>
                    <input onChange={changeBoxRadius} value={boxRadius.topLeft} data-name='topLeft' type="range" />
                    <span>Top Right Radius</span>
                    <input onChange={changeBoxRadius} value={boxRadius.topRight} data-name='topRight' type="range" />
                </div>
                <div>
                    <span>Bottom Left Radius</span>
                    <input onChange={changeBoxRadius} value={boxRadius.bottomLeft} data-name='bottomLeft' type="range" />
                    <span>Bottom Right Radius</span>
                    <input onChange={changeBoxRadius} value={boxRadius.bottomRight} data-name='bottomRight' type="range" />
                </div>
            </div>
        </div>
    )
};

export default BoxButtonsWrapper;