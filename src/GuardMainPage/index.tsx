import _ from 'the-lodash';
import React, { useState } from 'react';
import { InnerPage, PageHeader } from '@kubevious/ui-components';
// import { PageLink } from '@kubevious/ui-components';
import { ChangePackageListItem, IGuardService } from '@kubevious/ui-middleware/dist/services/guard';
import { useService } from '@kubevious/ui-framework/dist';
import { getChangesInfo, getChangeStateInfo } from '../components/stringifier';

import { Table } from '../Table';
import { Button } from '@kubevious/ui-components/dist';

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
                            "aaa",
                            /* <PageLink name={item.date}
                                      path="/guard/change"
                                      searchParams={{ id: item.change_id }} >
                            </PageLink> */
                            getChangeStateInfo(x),
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
