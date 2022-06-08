import _ from 'the-lodash';
import React, { FC } from 'react';
import { ValidationIssues } from '@kubevious/ui-middleware/dist/entities/guard';
import { MyAlert, AlertView } from '@kubevious/ui-alerts';

export interface IssuesListProps {
    issues: ValidationIssues;
}

export const IssuesList : FC<IssuesListProps> = ({ issues }) => {

    const alerts : MyAlert[] = [];

    for(const dn of issues)
    {
        for(const alert of dn.alerts)
        {
            alerts.push(
                {
                    source: alert.source,
                    msg: alert.msg,
                    severity: alert.severity,
                    id: alert.id,
                    dn: dn.dn
                }
            )
        }
    }
 
    return <AlertView alerts={alerts} />;
};
