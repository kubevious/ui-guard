import _ from 'the-lodash';
import { Promise } from 'the-promise';

import {
    ChangePackageItemDetails,
    ChangePackageListItem,
    ChangePackageListResult,
    IGuardService
} from '@kubevious/ui-middleware/dist/services/guard';
import { ValidationState } from '@kubevious/ui-middleware/dist/entities/guard';

import { ITEMS, MOCK_CHANGES_DATA, MOCK_DELETIONS_DATA, MOCK_NEW_ISSUES_DATA, MOCK_CLEARED_ISSUES_DATA } from './mock/items';

export class GuardService implements IGuardService {

    private _itemData : any[] = [];
    private _resultCount : number;

    constructor(isEmpty: boolean, resultCount: number)
    {
      console.log("[GuardService] constructor");
      this._resultCount = resultCount;
      if (!isEmpty) {
        this._itemData = ITEMS;
      }
    }

    getItems(nextToken?: number): Promise<ChangePackageListResult>
    {
      console.log("[getItems] nextToken: ", nextToken);
      // console.log("[getItems] this._itemData: ", this._itemData);

      let matchingItems : any[] = _.orderBy(this._itemData, x => x.index, ['desc']);
      if (nextToken) {
        matchingItems = _.filter(matchingItems, x => x.index < nextToken);
      }
      // console.log("[getItems] matchingItems:", matchingItems);

      const selectedItems = _.take(matchingItems, this._resultCount);
      console.log("[getItems] selectedItems:", selectedItems);

      let newNextToken : number | undefined;
      if (selectedItems.length < matchingItems.length) {
        newNextToken = _.last(selectedItems).index;
      }
      // console.log("[getItems] newNextToken:", newNextToken);

      return Promise.resolve({
        totalCount: this._itemData.length,
        nextToken: newNextToken,
        items: selectedItems.map(x => makeListItem(x))
      });
    }

    getDetails(changeId: string): Promise<ChangePackageItemDetails | null>
    {
        const x = _.find(this._itemData, x => x.change_id === changeId);
        if (!x) {
          return Promise.resolve(null);
        }

        const listItem = makeListItem(x);

        const details : ChangePackageItemDetails = {
          change_id: listItem.change_id,
          date: listItem.date,
          state: listItem.state,
          success: listItem.success,
          changeSummary: listItem.changeSummary,
          validationSummary: listItem.validationSummary,

          charts: [],
          changes: MOCK_CHANGES_DATA,
          deletions: MOCK_DELETIONS_DATA,
          newIssues: MOCK_NEW_ISSUES_DATA,
          clearedIssues: MOCK_CLEARED_ISSUES_DATA
        }

        return Promise.resolve(details);
    }

    close()
    {

    }
}


function makeListItem(x : any) : ChangePackageListItem
{
  if (x.state === ValidationState.completed)
  {
    if (x.success)
    {
      return  {
        change_id: x.change_id,
        date: x.date,
        changeSummary: x.changeSummary,
        state: x.state,
        success: true,
        validationSummary: {
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
        changeSummary: x.changeSummary,
        state: x.state,
        success: false,
        validationSummary: {
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
      changeSummary: x.changeSummary,
      state: x.state
    }
  }
}