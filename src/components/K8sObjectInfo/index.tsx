import _ from 'the-lodash';
import React, { FC } from 'react';
import styles from './styles.module.css';

export interface K8sObjectInfoProps {
    apiVersion: string;
    kind: string;
    namespace?: string;
    name: string;
}

export const K8sObjectInfo : FC<K8sObjectInfoProps> = ({ 
    apiVersion,
    kind,
    namespace,
    name


 }) => {

    return (
        <div className={styles.container}>
            <div>
                {apiVersion} :: {kind} 
            </div>
            <div>
                {namespace && <>
                    {namespace} :: 
                </>} 
                {name}
            </div>
        </div>
    );
};