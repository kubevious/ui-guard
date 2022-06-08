import _ from 'the-lodash';
import React, { FC } from 'react';
import { ChangePackageItemDetails } from '@kubevious/ui-middleware/dist/services/guard';
import { Block } from '../Block';
import { IssuesList } from '../IssuesList';

export interface NewIssuesProps {
    details: ChangePackageItemDetails;
}

export const ResolvedIssues : FC<NewIssuesProps> = ({ details }) => {

    if (!details.clearedIssues) {
        return <>
        </>;
    }

    return <Block title="Resolved Issues">

        <IssuesList issues={details.clearedIssues} />
               
    </Block>;
};