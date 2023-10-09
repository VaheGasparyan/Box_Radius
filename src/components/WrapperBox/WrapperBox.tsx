import { BoxAndTitleWrapper } from './components/BoxAndTitleWrapper';

import styles from './WrapperBox.module.scss';

const WrapperBox = () => {
    return (
        <div className={styles.wrapper_box}>
            <BoxAndTitleWrapper />
        </div>
    )
};

export default WrapperBox;