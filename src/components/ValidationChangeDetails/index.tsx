import _ from 'the-lodash';
import React, { FC, useState } from 'react';
import { InnerPage, Label, PageHeader } from '@kubevious/ui-components';
// import { PageLink } from '@kubevious/ui-components';
import { ChangePackageItemDetails, IGuardService } from '@kubevious/ui-middleware/dist/services/guard';
import { useService } from '@kubevious/ui-framework/dist';

import { Summary } from '../Summary';
import { NewIssues } from '../NewIssues';
import { ResolvedIssues } from '../ResolvedIssues';

import styles from './styles.module.css';

export interface ValidationChangeDetailsProps {
    changeId: string;
}

export const ValidationChangeDetails : FC<ValidationChangeDetailsProps> = ({ changeId }) => {
    const [changeDetails, setChangeDetails] = useState<ChangePackageItemDetails | null>(null);

    const service = useService<IGuardService>({ kind: 'guard' }, 
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

                <Label size="xlarge" color="faded">Changes</Label>


                <pre>
                {JSON.stringify(changeDetails, null, 4)}
                </pre>

            </>
            }

            </div>
            

        </InnerPage>
    );
};
