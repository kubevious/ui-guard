import { KubernetesObject } from "@kubevious/ui-middleware";
import { ChangePackageListItem } from "@kubevious/ui-middleware/dist/services/guard"


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


export function getK8sConfigTitle(config: KubernetesObject)
{
    const parts : (string | undefined)[] = [];

    parts.push(config.apiVersion);
    parts.push(config.kind);
    parts.push(config.metadata?.namespace);
    parts.push(config.metadata?.name);

    const title = parts.filter(x => x).join(" :: ");
    return title;
}