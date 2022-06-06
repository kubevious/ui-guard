import _ from 'the-lodash';
import { Promise } from 'the-promise';

import {
    ChangePackageItemDetails,
    ChangePackageListItem,
    ChangePackageListResult,
    IGuardService
} from '@kubevious/ui-middleware/dist/services/guard';
import { ValidationState } from '@kubevious/ui-middleware/dist/entities/guard';

export class GuardService implements IGuardService {

    getItems(lastId?: string): Promise<ChangePackageListResult>
    {
        return Promise.resolve({
          "totalCount": ITEMS.length,
          "items": ITEMS.map(x => makeListItem(x))
        });
    }

    getDetails(id: string): Promise<ChangePackageItemDetails | null>
    {
        const x = _.find(ITEMS, x => x.change_id === id);
        if (!x) {
          return null;
        }

        const listItem = makeListItem(x);

        return Promise.resolve({
          change_id: listItem.change_id,
          date: listItem.date,
          state: listItem.state,
          success: listItem.success,
          summary: listItem.summary,

          charts: [],
          changes: [],
          deletions: [],

        });
    }

    close()
    {

    }
}


const ITEMS : any[] = [
  {
    change_id: "k8s-default-change-46e30319-9593-4864-99cb-41667264fa7b",
    date: "2022-06-06T19:23:19.000Z",
    state: ValidationState.pending
  },
  {
    change_id: "k8s-default-change-44dc9bee-6176-4937-b676-30435f5f3594",
    date: "2022-06-03T20:38:13.000Z",
    state: ValidationState.completed,
    success: false,
  },
  {
    change_id: "k8s-default-change-d19d1cbd-8288-4fe2-bde5-f4820a42b93f",
    date: "2022-06-03T20:20:39.000Z",
    state: ValidationState.completed,
    success: true,
  },
  {
    change_id: "k8s-default-change-996122ef-e792-4cfc-877d-bacc3fac40e1",
    date: "2022-06-03T20:20:15.000Z",
    state: ValidationState.failed,
  },
  {
    change_id: "k8s-default-change-8bc6ae18-2cfd-4cc9-a47c-eb424559881c",
    date: "2022-06-03T20:12:32.000Z",
    state: ValidationState.running,
  },
  {
    change_id: "k8s-default-change-8bc6ae18-2cfd-4cc9-a47c-eb424559881c",
    date: "2022-06-03T20:12:32.000Z",
    state: ValidationState.completed,
    success: false,
  }
];


function makeListItem(x : any) : ChangePackageListItem
{
  if (x.state === ValidationState.completed)
  {
    if (x.success)
    {
      return  {
        change_id: x.change_id,
        date: x.date,
        state: x.state,
        success: true,
        summary: {
          "issues": {
            "raised": {
              "errors": 0,
              "warnings": 0
            },
            "cleared": {
              "errors": 0,
              "warnings": 0
            }
          }
        }
      }
    }
    else
    {
      return  {
        change_id: x.change_id,
        date: x.date,
        state: x.state,
        success: false,
        summary: {
          "issues": {
            "raised": {
              "errors": 10,
              "warnings": 20
            },
            "cleared": {
              "errors": 0,
              "warnings": 0
            }
          }
        }
      }
    }
  }
  else
  {
    return  {
      change_id: x.change_id,
      date: x.date,
      state: x.state
    }
  }
}