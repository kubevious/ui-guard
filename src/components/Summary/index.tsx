import _ from 'the-lodash';
import React, { FC } from 'react';
import { ChangePackageItemDetails } from '@kubevious/ui-middleware/dist/services/guard';
import { Table } from '../../Table';
import { Block } from '../Block';
import { ValidationStateAlerts } from '@kubevious/ui-middleware/dist/entities/guard';
import { getChangesInfo, getChangeStateInfo } from '../stringifier';

export interface SummaryProps {
    details: ChangePackageItemDetails;
}

export const Summary : FC<SummaryProps> = ({ details }) => {

    const rows : any[][] = [
        ['Change Id', details.change_id],
        ['Date', details.date],
        ['State', getChangeStateInfo(details)],
    ];

    if (details.validationSummary) {
        rows.push(['Raised Issues', alertsCountStr(details.validationSummary.issues.raised)]);
        rows.push(['Resolved Issues', alertsCountStr(details.validationSummary.issues.cleared)]);
    }

    rows.push(['Changes', getChangesInfo(details)]);
 
    return <Block title="Summary">

        <Table columns={['Key', 'Value']}
               skipHeader
               data={rows}>
        </Table>
               
    </Block>;
};

function alertsCountStr(issues: ValidationStateAlerts)
{
    return `Errors: ${issues.errors}, Warnings: ${issues.warnings}`;
}