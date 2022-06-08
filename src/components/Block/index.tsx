import _ from 'the-lodash';
import React, { FC } from 'react';
import { Label } from '@kubevious/ui-components';

import styles from './styles.module.css';

export interface BlockProps {
    title: string;
}

export const Block : FC<BlockProps> = ({ title, children }) => {

    return <div className={styles.blockContainer}>
        <Label size="xlarge" color="faded">{title}</Label>

        {children}
    </div>;
};
