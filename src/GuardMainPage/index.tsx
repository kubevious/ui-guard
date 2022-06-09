import _ from 'the-lodash';
import React, { useState } from 'react';
import { InnerPage, PageHeader } from '@kubevious/ui-components';
import { PageLink } from '@kubevious/ui-components';
import { ChangePackageListItem, IGuardService } from '@kubevious/ui-middleware/dist/services/guard';
import { useService } from '@kubevious/ui-framework/dist';
import { getChangesInfo } from '../components/stringifier';
import { Status } from '../components/Status';

import { Table } from '../Table';
import { Button } from '@kubevious/ui-components';

import { GUARD_CHANGE_DETAILS_PAGE } from '../metadata/page';


export const GuardMainPage = () => {
    const [items, setItems] = useState<ChangePackageListItem[]>([]);
    const [nextItemId, setNextItemId] = useState<string | null>(null);

    const service = useService<IGuardService>({ kind: 'guard' }, 
        (svc) => {

            svc.getItems()
                .then(result => {
                    setNextItemId(result.nextId ?? null);
                    setItems(result.items);
                });

        });

    const loadMore = () => {
        if (!nextItemId) {
            return;
        }

        service!.getItems(nextItemId)
            .then(result => {

                setNextItemId(result.nextId ?? null);
                setItems(_.concat(items, result.items));
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

            <Table columns={['Date', 'Status', 'Changes']}
                data={items.map(x => {

                        return [
                            <PageLink name={x.date}
                                    path={GUARD_CHANGE_DETAILS_PAGE}
                                    searchParams={{ id: x.change_id }} >
                            </PageLink>,
                            <Status item={x} />,
                            getChangesInfo(x)
                        ];

                })}
            >
            </Table>

            {nextItemId && 
                <Button type='dark' onClick={loadMore}></Button>
                }

        </InnerPage>
    );
};
