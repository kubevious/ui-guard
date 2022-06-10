import _ from 'the-lodash';
import React, { FC } from 'react';
import { CodeControl } from '@kubevious/ui-components';
import { k8sConfigToString } from '@kubevious/ui-properties';
import { KubernetesObject } from '@kubevious/ui-middleware';

import styles from './styles.module.css';

export interface K8sConfigProps {
    config: KubernetesObject;
}

export const K8sConfig : FC<K8sConfigProps> = ({ config }) => {

    return (
        <div className={styles.container}>
            <CodeControl value={k8sConfigToString(config, 4)}
                         syntax="yaml"
                         indent={4}
                         showDownloadButton
                         showCopyButton
                         />
        </div>
    );
};