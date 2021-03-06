import _ from 'the-lodash';
import React, { FC } from 'react';
import { ChangePackageItemDetails } from '@kubevious/ui-middleware/dist/services/guard';
import { Block } from '../Block';
import { K8sObjectInfo } from '../K8sObjectInfo';

import styles from './styles.module.css';

export interface DeletedChangesProps {
    details: ChangePackageItemDetails;
}

export const DeletedChanges : FC<DeletedChangesProps> = ({ details }) => {

    if (!details.deletions || details.deletions.length === 0) {
        return <>
        </>;
    }

    return <Block title="Deleted Objects">

        <ul className={styles.innerContainer}>

            {details.deletions.map((x, index) => 

                <li key={index}>
                    <K8sObjectInfo apiVersion={x.apiVersion}
                                   kind={x.kind}
                                   namespace={x.namespace}
                                   name={x.name}
                                   />
                </li>

            )}

        </ul>
               
    </Block>;
};