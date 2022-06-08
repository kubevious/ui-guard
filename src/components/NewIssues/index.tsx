import _ from 'the-lodash';
import React, { FC } from 'react';
import { ChangePackageItemDetails } from '@kubevious/ui-middleware/dist/services/guard';
import { Block } from '../Block';
import { IssuesList } from '../IssuesList';

export interface NewIssuesProps {
    details: ChangePackageItemDetails;
}

export const NewIssues : FC<NewIssuesProps> = ({ details }) => {

    if (!details.newIssues) {
        return <>
        </>;
    }

    return <Block title="Raised Issues">

        <IssuesList issues={details.newIssues} />
               
    </Block>;
};