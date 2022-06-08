import { ValidationState } from "@kubevious/ui-middleware/dist/entities/guard"
import { ChangePackageListItem } from "@kubevious/ui-middleware/dist/services/guard"

export function getChangeStateInfo(item: ChangePackageListItem) 
{
    if (item.state === ValidationState.completed) {
        if (item.success) {
            return 'passed';
        }
        return 'failed';
    }

    if (item.state === ValidationState.failed) {
        return 'error processing';
    }

    return item.state;
}

export function getChangesInfo(item: ChangePackageListItem)
{
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