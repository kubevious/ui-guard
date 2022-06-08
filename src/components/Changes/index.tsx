import _ from 'the-lodash';
import React, { FC } from 'react';
import { ChangePackageItemDetails } from '@kubevious/ui-middleware/dist/services/guard';
import { Block } from '../Block';
import { ScrollbarComponent } from '@kubevious/ui-components/dist';
import { K8sConfig } from '../K8sConfig';

import styles from './styles.module.css';

export interface ChangesProps {
    details: ChangePackageItemDetails;
}

export const Changes : FC<ChangesProps> = ({ details }) => {

    if (!details.changes || details.changes.length === 0) {
        return <>
        </>;
    }

    return <Block title="Changes">

        <div className={styles.scrollContainer}>
            <ScrollbarComponent >

                <div className={styles.innerContainer}>

                    {details.changes.map((x, index) => 

                        <K8sConfig key={index} config={x} />

                    )}

                </div>

            </ScrollbarComponent>
        </div>
               
    </Block>;
};