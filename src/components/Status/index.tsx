import React, { FC } from 'react';
import _ from 'the-lodash';
import { ChangePackageListItem } from '@kubevious/ui-middleware/dist/services/guard';
import { ValidationState } from '@kubevious/ui-middleware/dist/entities/guard';
import { FontAwesomeIcon, FASolidIcons } from '@kubevious/ui-components';

import styles from './styles.module.css';

export interface StatusProps {
    item: ChangePackageListItem;
}

export const Status : FC<StatusProps> = ({ item }) => {

    let stateStr: string = item.state;
    let color = '#fb8b24';
    let icon: any;

    item = item || {};

    if (item.state === ValidationState.completed) {
        if (item.success) {
            stateStr = 'passed';
            icon = FASolidIcons.faCircleCheck;
            color = '#4ECD77'
        } else {
            stateStr = 'failed';
            icon = FASolidIcons.faCircleXmark;
            color = '#d62828'
        }
    }
    else if (item.state === ValidationState.failed) {
        stateStr = 'error processing';
        icon = FASolidIcons.faBug;
        color = '#c1121f'
    }
    else {
        stateStr = item.state;
        if (item.state === ValidationState.pending) {
            icon = FASolidIcons.faHourglass;
            color = '#caf0f8'
        } else if (item.state === ValidationState.running) {
            icon = FASolidIcons.faPersonRunning;
            color = '#80ed99'
        }
    }

    return <div className={styles.status}>
        <FontAwesomeIcon icon={icon} color={color} />
        {stateStr}
    </div>;
};
