import _ from 'the-lodash';
import React, { FC } from 'react';
import { ChangePackageItemDetails } from '@kubevious/ui-middleware/dist/services/guard';
import { Block } from '../Block';
import { ItemDetailsList, ListItem } from '@kubevious/ui-components';
import { K8sConfig } from '../K8sConfig';
import { K8sObjectInfo } from '../K8sObjectInfo';

import styles from './styles.module.css';

export interface ChangesProps {
    details: ChangePackageItemDetails;
}

export const Changes : FC<ChangesProps> = ({ details }) => {

    if (!details.changes || details.changes.length === 0) {
        return <>
        </>;
    }
    
    const onRenderChangeDetails = (item: ListItem | null) => {
        if (!item) {
            return <>
            </>
        }

        return <K8sConfig config={(item as any).k8sObj} />;
    }

    return <Block title="Changes">

        <div className={styles.scrollContainer}>
            <ItemDetailsList
                items={details.changes.map((x, index) => ({
                    key: index.toString(),
                    text: <K8sObjectInfo
                                apiVersion={x.apiVersion}
                                kind={x.kind}
                                namespace={x.metadata?.namespace}
                                name={x.metadata?.name}
                                />,
                    k8sObj: x
                }))}
                classNameSelectedItemContainer={styles.selectedItemContainer}
                classNameListContainer={styles.itemListContainer}
                onRenderDetails={onRenderChangeDetails}
            >
            </ItemDetailsList>
        </div>
               
    </Block>;
};