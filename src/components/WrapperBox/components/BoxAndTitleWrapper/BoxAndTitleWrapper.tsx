import { BoxButtonsWrapper } from './components/BoxButtonsWrapper';

import styles from './BoxAndTitleWrapper.module.scss';

const BoxAndTitleWrapper = () => {
    return (
        <>
            <div className={styles.title}>
                <h1>Change Box Radius</h1>
            </div>
            <BoxButtonsWrapper />
        </>
    )
};

export default BoxAndTitleWrapper;