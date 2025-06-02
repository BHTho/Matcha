import styles from './PageParentDiv.module.css';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

function PageParentDiv({children}: Props) {
    return (
        <div className={styles.PageParentDiv}>
            {children}
        </div>
    )
};

export default PageParentDiv;