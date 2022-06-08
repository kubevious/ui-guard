import _ from 'the-lodash';
import React, { FC, useState } from 'react';
import { InnerPage, PageHeader } from '@kubevious/ui-components';
// import { PageLink } from '@kubevious/ui-components';
import { ChangePackageItemDetails, IGuardService } from '@kubevious/ui-middleware/dist/services/guard';
import { useService } from '@kubevious/ui-framework';

import { Summary } from '../Summary';
import { NewIssues } from '../NewIssues';
import { ResolvedIssues } from '../ResolvedIssues';
import { Changes } from '../Changes';
import { DeletedChanges } from '../DeletedChanges';

import styles from './styles.module.css';

export interface ValidationChangeDetailsProps {
    changeId: string;
}

export const ValidationChangeDetails : FC<ValidationChangeDetailsProps> = ({ changeId }) => {
    const [changeDetails, setChangeDetails] = useState<ChangePackageItemDetails | null>(null);

    useService<IGuardService>({ kind: 'guard' }, 
        (svc) => {

            svc.getDetails(changeId)
                .then(result => {
                    setChangeDetails(result);
                });

        });

    return (
        <InnerPage
            header={
                <PageHeader title={`Change ${changeId}`}>
                </PageHeader>
            }
        >
            <div className={styles.container}>

            {changeDetails && <>

                <Summary details={changeDetails} />

                <NewIssues details={changeDetails} />

                <ResolvedIssues details={changeDetails} />

                <Changes details={changeDetails} />

                <DeletedChanges details={changeDetails} />
                
            </>
            }

            </div>
            

        </InnerPage>
    );
};
