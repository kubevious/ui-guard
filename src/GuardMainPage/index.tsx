import _ from 'the-lodash';
import React, { useState } from 'react';
import { InnerPage, Label, PageHeader } from '@kubevious/ui-components';
import { PageLink } from '@kubevious/ui-components';
import { ChangePackageListItem, IGuardService } from '@kubevious/ui-middleware/dist/services/guard';
import { useService } from '@kubevious/ui-framework/dist';
import { getChangesInfo } from '../components/stringifier';
import { Status } from '../components/Status';

import { Button, Table } from '@kubevious/ui-components';

import { GUARD_CHANGE_DETAILS_PAGE } from '../metadata/page';

import styles from './styles.module.css';


export const GuardMainPage = () => {
    const [items, setItems] = useState<ChangePackageListItem[] | null>(null);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [nextToken, setNextToken] = useState<number | null>(null);

    const service = useService<IGuardService>({ kind: 'guard' }, 
        (svc) => {

            svc.getItems()
                .then(result => {
                    setTotalCount(result.totalCount ?? 0);
                    setNextToken(result.nextToken ?? null);
                    setItems(result.items);
                });

        });

    const loadMore = () => {
        if (!nextToken) {
            return;
        }

        service!.getItems(nextToken)
            .then(result => {
                setTotalCount(result.totalCount ?? 0);
                setNextToken(result.nextToken ?? null);
                setItems(_.concat(items ?? [], result.items));
            });
    }

    return (
        <InnerPage
            midNarrow
            header={
                <PageHeader title="Guard">
                </PageHeader>
            }
        >
            <div className={styles.contents}>

            <Table columns={['Date', 'Status', 'Changes']}
                data={(items ?? []).map(x => {

                        return [
                            <PageLink name={x.date}
                                    path={GUARD_CHANGE_DETAILS_PAGE}
                                    searchParams={{ changeid: x.change_id }} >
                            </PageLink>,
                            <Status item={x} />,
                            getChangesInfo(x)
                        ];

                })}
            >
            </Table>

            {items && <>
                {(items.length === 0) && 
                <>
                    <Label color="faded">You have no validation runs.</Label>
                </>}

                {(items.length > 0) && 
                <>
                    <Label color="faded">Total changes: {totalCount}.</Label>
                </>}
            </>}

            {nextToken && 
                <Button type='ghost' onClick={loadMore}>Load More</Button>
                }

            </div>
        </InnerPage>
    );
};
