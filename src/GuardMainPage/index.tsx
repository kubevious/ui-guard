import _ from 'the-lodash';
import React, { useState } from 'react';
import { InnerPage, PageHeader, PageLink } from '@kubevious/ui-components';
import { ChangePackageListItem, IGuardService } from '@kubevious/ui-middleware/dist/services/guard';
import { useService } from '@kubevious/ui-framework/dist';
import { ValidationState } from '@kubevious/ui-middleware/dist/entities/guard';


import { Table } from '../Table';

export const GuardMainPage = () => {
    const [items, setItems] = useState<ChangePackageListItem[]>([]);
    // const [nextItemId, setNextItemId] = useState<string | null>(null);

    const service = useService<IGuardService>({ kind: 'guard' }, 
        (svc) => {

            svc.getItems()
                .then(result => {
                    // setNextItemId(result.nextId ?? null);
                    setItems(result.items);
                });

        });

    const renderState = (item: ChangePackageListItem) => {
        if (item.state === ValidationState.completed) {
            return <>
                {(item.success) && 'passed'}
                {(!item.success) && 'failed'}
            </>
        }

        if (item.state === ValidationState.failed) {
            <>
                error processing
            </>
        }

        return <>
            {item.state}
        </>;
    }

    const renderChanges = (item: ChangePackageListItem) => {
        const parts : string[] = [];
        if (item.changeSummary) {
            if (item.changeSummary.createdCount) {
                parts.push(`${item.changeSummary.createdCount} changes`);
            }
            if (item.changeSummary.deletedCount) {
                parts.push(`${item.changeSummary.deletedCount} deletions`);
            }
        }
        if (parts.length == 0) {
            parts.push('no changes');
        }
        return parts.join(', ');
    }

    return (
        <InnerPage
            midNarrow
            header={
                <PageHeader title="Guard">
                </PageHeader>
            }
        >

            <Table columns={['Date', 'Status', 'Changes']}
                   data={items.map(x => {

                        return [
                            "aaa",
                            /* <PageLink name={item.date}
                                      path="/guard/change"
                                      searchParams={{ id: item.change_id }} >
                            </PageLink> */
                            renderState(x),
                            renderChanges(x)
                        ];

                   })}
            >
            </Table>


        </InnerPage>
    );
};
