import { ValidationState } from '@kubevious/ui-middleware/dist/entities/guard';

export const ITEMS: any[] = [
    {
        change_id: 'k8s-default-change-46e30319-9593-4864-99cb-41667264fa7b',
        date: '2022-06-06T19:23:19.000Z',
        state: ValidationState.pending,
        changeSummary: {
            createdCount: 57,
            deletedCount: 0,
        },
    },
    {
        change_id: 'k8s-default-change-44dc9bee-6176-4937-b676-30435f5f3594',
        date: '2022-06-03T20:38:13.000Z',
        state: ValidationState.completed,
        success: false,
        changeSummary: {
            createdCount: 0,
            deletedCount: 10,
        },
    },
    {
        change_id: 'k8s-default-change-d19d1cbd-8288-4fe2-bde5-f4820a42b93f',
        date: '2022-06-03T20:20:39.000Z',
        state: ValidationState.completed,
        success: true,
        changeSummary: {
            createdCount: 20,
            deletedCount: 30,
        },
    },
    {
        change_id: 'k8s-default-change-996122ef-e792-4cfc-877d-bacc3fac40e1',
        date: '2022-06-03T20:20:15.000Z',
        state: ValidationState.failed,
        changeSummary: {
            createdCount: 57,
            deletedCount: 0,
        },
    },
    {
        change_id: 'k8s-default-change-8bc6ae18-2cfd-4cc9-a47c-eb424559881c',
        date: '2022-06-03T20:12:32.000Z',
        state: ValidationState.running,
    },
    {
        change_id: 'k8s-default-change-8bc6ae18-2cfd-4cc9-a47c-eb424559881c',
        date: '2022-06-03T20:12:32.000Z',
        state: ValidationState.completed,
        success: false,
    },
];

export const MOCK_CHARTS_DATA = [

];

export const MOCK_CHANGES_DATA = [
    {
        kind: 'PodSecurityPolicy',
        spec: {
            fsGroup: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            hostIPC: false,
            hostPID: false,
            seLinux: { rule: 'RunAsAny' },
            volumes: ['secret'],
            runAsUser: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            privileged: false,
            hostNetwork: false,
            supplementalGroups: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            readOnlyRootFilesystem: false,
        },
        metadata: {
            name: 'my-prometheus-kube-state-metrics',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'policy/v1beta1',
    },
    {
        kind: 'PodSecurityPolicy',
        spec: {
            fsGroup: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            hostIPC: false,
            hostPID: true,
            seLinux: { rule: 'RunAsAny' },
            volumes: [
                'configMap',
                'emptyDir',
                'projected',
                'secret',
                'downwardAPI',
                'persistentVolumeClaim',
                'hostPath',
            ],
            hostPorts: [{ max: 65535, min: 0 }],
            runAsUser: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            privileged: false,
            hostNetwork: true,
            supplementalGroups: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: false,
            requiredDropCapabilities: ['ALL'],
        },
        metadata: {
            name: 'my-prometheus-node-exporter',
            labels: {
                'helm.sh/chart': 'node-exporter-3.0.0',
                'app.kubernetes.io/name': 'node-exporter',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'policy/v1beta1',
    },
    {
        kind: 'PodSecurityPolicy',
        spec: {
            fsGroup: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            hostIPC: false,
            hostPID: false,
            seLinux: { rule: 'RunAsAny' },
            volumes: ['configMap', 'emptyDir', 'projected', 'secret', 'downwardAPI', 'persistentVolumeClaim'],
            runAsUser: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            privileged: false,
            hostNetwork: false,
            supplementalGroups: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            allowPrivilegeEscalation: false,
            requiredDropCapabilities: ['ALL'],
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-alertmanager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'policy/v1beta1',
    },
    {
        kind: 'PodSecurityPolicy',
        spec: {
            fsGroup: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            hostIPC: false,
            hostPID: false,
            seLinux: { rule: 'RunAsAny' },
            volumes: ['configMap', 'emptyDir', 'projected', 'secret', 'downwardAPI', 'persistentVolumeClaim'],
            runAsUser: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            privileged: false,
            hostNetwork: false,
            supplementalGroups: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            allowPrivilegeEscalation: false,
            requiredDropCapabilities: ['ALL'],
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'policy/v1beta1',
    },
    {
        kind: 'PodSecurityPolicy',
        spec: {
            fsGroup: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            hostIPC: false,
            hostPID: false,
            seLinux: { rule: 'RunAsAny' },
            volumes: ['configMap', 'emptyDir', 'projected', 'secret', 'downwardAPI', 'persistentVolumeClaim'],
            runAsUser: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            privileged: false,
            hostNetwork: false,
            supplementalGroups: { rule: 'MustRunAs', ranges: [{ max: 1001, min: 1001 }] },
            allowPrivilegeEscalation: false,
            requiredDropCapabilities: ['ALL'],
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'policy/v1beta1',
    },
    {
        kind: 'ServiceAccount',
        metadata: {
            name: 'my-prometheus-kube-state-metrics',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'v1',
        automountServiceAccountToken: true,
    },
    {
        kind: 'ServiceAccount',
        metadata: {
            name: 'my-prometheus-node-exporter',
            labels: {
                'helm.sh/chart': 'node-exporter-3.0.0',
                'app.kubernetes.io/name': 'node-exporter',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
        automountServiceAccountToken: true,
    },
    {
        kind: 'ServiceAccount',
        metadata: {
            name: 'my-prometheus-kube-prometh-alertmanager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
        automountServiceAccountToken: true,
    },
    {
        kind: 'ServiceAccount',
        metadata: {
            name: 'my-prometheus-kube-prometh-blackbox-exporter',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'blackbox-exporter',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
        automountServiceAccountToken: true,
    },
    {
        kind: 'ServiceAccount',
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
        automountServiceAccountToken: true,
    },
    {
        kind: 'ServiceAccount',
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
        automountServiceAccountToken: true,
    },
    {
        data: {
            'alertmanager.yaml':
                'Z2xvYmFsOgogIHJlc29sdmVfdGltZW91dDogNW0KcmVjZWl2ZXJzOgotIG5hbWU6ICJudWxsIgpyb3V0ZToKICBncm91cF9ieToKICAtIGpvYgogIGdyb3VwX2ludGVydmFsOiA1bQogIGdyb3VwX3dhaXQ6IDMwcwogIHJlY2VpdmVyOiAibnVsbCIKICByZXBlYXRfaW50ZXJ2YWw6IDEyaAogIHJvdXRlczoKICAtIG1hdGNoOgogICAgICBhbGVydG5hbWU6IFdhdGNoZG9nCiAgICByZWNlaXZlcjogIm51bGwi',
        },
        kind: 'Secret',
        metadata: {
            name: 'alertmanager-my-prometheus-kube-prometh-alertmanager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'v1',
    },
    {
        data: {
            'config.yml':
                '"modules":\n  "http_2xx":\n    "http":\n      "preferred_ip_protocol": "ip4"\n    "prober": "http"\n  "http_post_2xx":\n    "http":\n      "method": "POST"\n      "preferred_ip_protocol": "ip4"\n    "prober": "http"\n  "irc_banner":\n    "prober": "tcp"\n    "tcp":\n      "preferred_ip_protocol": "ip4"\n      "query_response":\n      - "send": "NICK prober"\n      - "send": "USER prober prober prober :prober"\n      - "expect": "PING :([^ ]+)"\n        "send": "PONG ${1}"\n      - "expect": "^:[^ ]+ 001"\n  "pop3s_banner":\n    "prober": "tcp"\n    "tcp":\n      "preferred_ip_protocol": "ip4"\n      "query_response":\n      - "expect": "^+OK"\n      "tls": true\n      "tls_config":\n        "insecure_skip_verify": false\n  "ssh_banner":\n    "prober": "tcp"\n    "tcp":\n      "preferred_ip_protocol": "ip4"\n      "query_response":\n      - "expect": "^SSH-2.0-"\n  "tcp_connect":\n    "prober": "tcp"\n    "tcp":\n      "preferred_ip_protocol": "ip4"',
        },
        kind: 'ConfigMap',
        metadata: {
            name: 'my-prometheus-kube-prometh-blackbox-exporter',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'blackbox-exporter',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'v1',
    },
    {
        data: { 'prometheus-config-reloader': 'docker.io/bitnami/prometheus-operator:0.56.3-debian-10-r3' },
        kind: 'ConfigMap',
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            { verbs: ['list', 'watch'], apiGroups: ['certificates.k8s.io'], resources: ['certificatesigningrequests'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['configmaps'] },
            { verbs: ['list', 'watch'], apiGroups: ['batch'], resources: ['cronjobs'] },
            { verbs: ['list', 'watch'], apiGroups: ['extensions', 'apps'], resources: ['daemonsets'] },
            { verbs: ['list', 'watch'], apiGroups: ['extensions', 'apps'], resources: ['deployments'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['endpoints'] },
            { verbs: ['list', 'watch'], apiGroups: ['autoscaling'], resources: ['horizontalpodautoscalers'] },
            { verbs: ['list', 'watch'], apiGroups: ['extensions', 'networking.k8s.io'], resources: ['ingresses'] },
            { verbs: ['list', 'watch'], apiGroups: ['batch'], resources: ['jobs'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['limitranges'] },
            {
                verbs: ['list', 'watch'],
                apiGroups: ['admissionregistration.k8s.io'],
                resources: ['mutatingwebhookconfigurations'],
            },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['namespaces'] },
            { verbs: ['list', 'watch'], apiGroups: ['networking.k8s.io'], resources: ['networkpolicies'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['nodes'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['persistentvolumeclaims'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['persistentvolumes'] },
            { verbs: ['list', 'watch'], apiGroups: ['policy'], resources: ['poddisruptionbudgets'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['pods'] },
            { verbs: ['list', 'watch'], apiGroups: ['extensions', 'apps'], resources: ['replicasets'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['replicationcontrollers'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['resourcequotas'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['secrets'] },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['services'] },
            { verbs: ['list', 'watch'], apiGroups: ['apps'], resources: ['statefulsets'] },
            { verbs: ['list', 'watch'], apiGroups: ['storage.k8s.io'], resources: ['storageclasses'] },
            { verbs: ['list', 'watch'], apiGroups: ['storage.k8s.io'], resources: ['volumeattachments'] },
        ],
        metadata: {
            name: 'my-prometheus-kube-state-metrics',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            {
                verbs: ['use'],
                apiGroups: ['extensions'],
                resources: ['podsecuritypolicies'],
                resourceNames: ['my-prometheus-kube-state-metrics'],
            },
        ],
        metadata: {
            name: 'my-prometheus-kube-state-metrics-psp',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            {
                verbs: ['use'],
                apiGroups: ['extensions'],
                resources: ['podsecuritypolicies'],
                resourceNames: ['my-prometheus-node-exporter'],
            },
        ],
        metadata: {
            name: 'my-prometheus-node-exporter-psp',
            labels: {
                'helm.sh/chart': 'node-exporter-3.0.0',
                'app.kubernetes.io/name': 'node-exporter',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            {
                verbs: ['use'],
                apiGroups: ['extensions'],
                resources: ['podsecuritypolicies'],
                resourceNames: ['my-prometheus-kube-prometh-alertmanager'],
            },
        ],
        metadata: {
            name: 'my-prometheus-kube-prometh-alertmanager-psp',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            { verbs: ['create'], apiGroups: ['apiextensions.k8s.io'], resources: ['customresourcedefinitions'] },
            {
                verbs: ['get', 'update'],
                apiGroups: ['apiextensions.k8s.io'],
                resources: ['customresourcedefinitions'],
                resourceNames: [
                    'alertmanagers.monitoring.coreos.com',
                    'podmonitors.monitoring.coreos.com',
                    'prometheuses.monitoring.coreos.com',
                    'prometheusrules.monitoring.coreos.com',
                    'servicemonitors.monitoring.coreos.com',
                    'thanosrulers.monitoring.coreos.com',
                    'probes.monitoring.coreos.com',
                ],
            },
            {
                verbs: ['*'],
                apiGroups: ['monitoring.coreos.com'],
                resources: [
                    'alertmanagers',
                    'alertmanagers/finalizers',
                    'alertmanagerconfigs',
                    'prometheuses',
                    'prometheuses/status',
                    'prometheuses/finalizers',
                    'thanosrulers',
                    'thanosrulers/finalizers',
                    'servicemonitors',
                    'podmonitors',
                    'probes',
                    'prometheusrules',
                ],
            },
            { verbs: ['*'], apiGroups: ['apps'], resources: ['statefulsets'] },
            { verbs: ['*'], apiGroups: [''], resources: ['configmaps', 'secrets'] },
            { verbs: ['list', 'delete'], apiGroups: [''], resources: ['pods'] },
            {
                verbs: ['get', 'create', 'update', 'delete'],
                apiGroups: [''],
                resources: ['services', 'services/finalizers', 'endpoints'],
            },
            { verbs: ['list', 'watch'], apiGroups: [''], resources: ['nodes'] },
            { verbs: ['get', 'list', 'watch'], apiGroups: [''], resources: ['namespaces'] },
            { verbs: ['get', 'list', 'watch'], apiGroups: ['networking.k8s.io'], resources: ['ingresses'] },
        ],
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            {
                verbs: ['use'],
                apiGroups: ['extensions'],
                resources: ['podsecuritypolicies'],
                resourceNames: ['my-prometheus-kube-prometh-operator'],
            },
        ],
        metadata: {
            name: 'my-prometheus-kube-prometh-operator-psp',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            { verbs: ['get', 'list', 'watch'], apiGroups: [''], resources: ['nodes/metrics'] },
            {
                verbs: ['get', 'list', 'watch'],
                apiGroups: [''],
                resources: ['nodes', 'nodes/proxy', 'services', 'endpoints', 'pods'],
            },
            {
                verbs: ['get', 'list', 'watch'],
                apiGroups: ['extensions', 'networking.k8s.io'],
                resources: ['ingresses'],
            },
            { verbs: ['get'], nonResourceURLs: ['/metrics'] },
        ],
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRole',
        rules: [
            {
                verbs: ['use'],
                apiGroups: ['extensions'],
                resources: ['podsecuritypolicies'],
                resourceNames: ['my-prometheus-kube-prometh-prometheus'],
            },
        ],
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus-psp',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-kube-state-metrics',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-kube-state-metrics',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-kube-state-metrics', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-kube-state-metrics-psp',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-kube-state-metrics-psp',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-kube-state-metrics', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-node-exporter-psp',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-node-exporter-psp',
            labels: {
                'helm.sh/chart': 'node-exporter-3.0.0',
                'app.kubernetes.io/name': 'node-exporter',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-node-exporter', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-kube-prometh-alertmanager-psp',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-alertmanager-psp',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-kube-prometh-alertmanager', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-kube-prometh-operator',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-kube-prometh-operator', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-kube-prometh-operator-psp',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-operator-psp',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-kube-prometh-operator', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-kube-prometh-prometheus',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-kube-prometh-prometheus', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'ClusterRoleBinding',
        roleRef: {
            kind: 'ClusterRole',
            name: 'my-prometheus-kube-prometh-prometheus-psp',
            apiGroup: 'rbac.authorization.k8s.io',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus-psp',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        subjects: [{ kind: 'ServiceAccount', name: 'my-prometheus-kube-prometh-prometheus', namespace: 'default' }],
        apiVersion: 'rbac.authorization.k8s.io/v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http', port: 8080, nodePort: null, targetPort: 'http' }],
            selector: { 'app.kubernetes.io/name': 'kube-state-metrics', 'app.kubernetes.io/instance': 'my-prometheus' },
            sessionAffinity: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-state-metrics',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'metrics', port: 9100, nodePort: null, targetPort: 'metrics' }],
            selector: { 'app.kubernetes.io/name': 'node-exporter', 'app.kubernetes.io/instance': 'my-prometheus' },
            sessionAffinity: 'None',
        },
        metadata: {
            name: 'my-prometheus-node-exporter',
            labels: {
                jobLabel: 'node-exporter',
                'helm.sh/chart': 'node-exporter-3.0.0',
                'app.kubernetes.io/name': 'node-exporter',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: { 'prometheus.io/scrape': 'true' },
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http', port: 9093, targetPort: 9093 }],
            selector: {
                alertmanager: 'my-prometheus-kube-prometh-alertmanager',
                'app.kubernetes.io/name': 'alertmanager',
            },
            sessionAffinity: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-alertmanager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http', port: 19115, nodePort: null, protocol: 'TCP', targetPort: 'http' }],
            selector: {
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'blackbox-exporter',
            },
            sessionAffinity: 'None',
            publishNotReadyAddresses: true,
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-blackbox-exporter',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'blackbox-exporter',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http-metrics', port: 9153, protocol: 'TCP', targetPort: 9153 }],
            selector: { 'k8s-app': 'kube-dns' },
            clusterIP: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-coredns',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'my-prometheus-kube-prometh-coredns',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'kube-system',
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http-metrics', port: 10252, protocol: 'TCP', targetPort: 10252 }],
            selector: { component: 'kube-controller-manager' },
            clusterIP: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-kube-controller-manager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'kube-controller-manager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'kube-system',
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http-metrics', port: 10249, protocol: 'TCP', targetPort: 10249 }],
            selector: { 'k8s-app': 'kube-proxy' },
            clusterIP: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-kube-proxy',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'kube-proxy',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'kube-system',
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http-metrics', port: 10251, protocol: 'TCP', targetPort: 10251 }],
            selector: { component: 'kube-scheduler' },
            clusterIP: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-kube-scheduler',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'kube-scheduler',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'kube-system',
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http', port: 8080, targetPort: 'http' }],
            selector: {
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
            },
            sessionAffinity: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
    },
    {
        kind: 'Service',
        spec: {
            type: 'ClusterIP',
            ports: [{ name: 'http', port: 9090, protocol: 'TCP', targetPort: 9090 }],
            selector: { prometheus: 'my-prometheus-kube-prometh-prometheus', 'app.kubernetes.io/name': 'prometheus' },
            sessionAffinity: 'None',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'v1',
    },
    {
        kind: 'DaemonSet',
        spec: {
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'node-exporter',
                    'app.kubernetes.io/instance': 'my-prometheus',
                },
            },
            template: {
                spec: {
                    hostPID: true,
                    volumes: [
                        { name: 'proc', hostPath: { path: '/proc' } },
                        { name: 'sys', hostPath: { path: '/sys' } },
                    ],
                    affinity: {
                        podAffinity: null,
                        nodeAffinity: null,
                        podAntiAffinity: {
                            preferredDuringSchedulingIgnoredDuringExecution: [
                                {
                                    weight: 1,
                                    podAffinityTerm: {
                                        namespaces: ['default'],
                                        topologyKey: 'kubernetes.io/hostname',
                                        labelSelector: {
                                            matchLabels: {
                                                'app.kubernetes.io/name': 'node-exporter',
                                                'app.kubernetes.io/instance': 'my-prometheus',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    containers: [
                        {
                            args: [
                                '--path.procfs=/host/proc',
                                '--path.sysfs=/host/sys',
                                '--web.listen-address=0.0.0.0:9100',
                                '--collector.filesystem.ignored-fs-types=^(autofs|binfmt_misc|cgroup|configfs|debugfs|devpts|devtmpfs|fusectl|hugetlbfs|mqueue|overlay|proc|procfs|pstore|rpc_pipefs|securityfs|sysfs|tracefs)$',
                                '--collector.filesystem.ignored-mount-points=^/(dev|proc|sys|var/lib/docker/.+)($|/)',
                            ],
                            name: 'node-exporter',
                            image: 'docker.io/bitnami/node-exporter:1.3.1-debian-10-r160',
                            ports: [{ name: 'metrics', protocol: 'TCP', containerPort: 9100 }],
                            envFrom: null,
                            resources: { limits: {}, requests: {} },
                            volumeMounts: [
                                { name: 'proc', readOnly: true, mountPath: '/host/proc' },
                                { name: 'sys', readOnly: true, mountPath: '/host/sys' },
                            ],
                            livenessProbe: {
                                httpGet: { path: '/', port: 'metrics' },
                                periodSeconds: 10,
                                timeoutSeconds: 5,
                                failureThreshold: 6,
                                successThreshold: 1,
                                initialDelaySeconds: 120,
                            },
                            readinessProbe: {
                                httpGet: { path: '/', port: 'metrics' },
                                periodSeconds: 10,
                                timeoutSeconds: 5,
                                failureThreshold: 6,
                                successThreshold: 1,
                                initialDelaySeconds: 30,
                            },
                            imagePullPolicy: 'IfNotPresent',
                            securityContext: { runAsUser: 1001, runAsNonRoot: true },
                        },
                    ],
                    hostNetwork: true,
                    securityContext: { fsGroup: 1001 },
                    serviceAccountName: 'my-prometheus-node-exporter',
                },
                metadata: {
                    labels: {
                        'helm.sh/chart': 'node-exporter-3.0.0',
                        'app.kubernetes.io/name': 'node-exporter',
                        'app.kubernetes.io/instance': 'my-prometheus',
                        'app.kubernetes.io/managed-by': 'Helm',
                    },
                },
            },
            updateStrategy: { type: 'RollingUpdate', rollingUpdate: { maxUnavailable: 1 } },
            minReadySeconds: 0,
        },
        metadata: {
            name: 'my-prometheus-node-exporter',
            labels: {
                'helm.sh/chart': 'node-exporter-3.0.0',
                'app.kubernetes.io/name': 'node-exporter',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'apps/v1',
    },
    {
        kind: 'Deployment',
        spec: {
            replicas: 1,
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'kube-state-metrics',
                    'app.kubernetes.io/instance': 'my-prometheus',
                },
            },
            strategy: {},
            template: {
                spec: {
                    affinity: {
                        podAffinity: null,
                        nodeAffinity: null,
                        podAntiAffinity: {
                            preferredDuringSchedulingIgnoredDuringExecution: [
                                {
                                    weight: 1,
                                    podAffinityTerm: {
                                        namespaces: ['default'],
                                        topologyKey: 'kubernetes.io/hostname',
                                        labelSelector: {
                                            matchLabels: {
                                                'app.kubernetes.io/name': 'kube-state-metrics',
                                                'app.kubernetes.io/instance': 'my-prometheus',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    containers: [
                        {
                            args: [
                                '--resources=certificatesigningrequests',
                                '--resources=configmaps',
                                '--resources=cronjobs',
                                '--resources=daemonsets',
                                '--resources=deployments',
                                '--resources=endpoints',
                                '--resources=horizontalpodautoscalers',
                                '--resources=ingresses',
                                '--resources=jobs',
                                '--resources=limitranges',
                                '--resources=mutatingwebhookconfigurations',
                                '--resources=namespaces',
                                '--resources=networkpolicies',
                                '--resources=nodes',
                                '--resources=persistentvolumeclaims',
                                '--resources=persistentvolumes',
                                '--resources=poddisruptionbudgets',
                                '--resources=pods',
                                '--resources=replicasets',
                                '--resources=replicationcontrollers',
                                '--resources=resourcequotas',
                                '--resources=secrets',
                                '--resources=services',
                                '--resources=statefulsets',
                                '--resources=storageclasses',
                                '--resources=volumeattachments',
                            ],
                            name: 'kube-state-metrics',
                            image: 'docker.io/bitnami/kube-state-metrics:2.4.2-debian-10-r72',
                            ports: [{ name: 'http', protocol: 'TCP', containerPort: 8080 }],
                            envFrom: null,
                            resources: { limits: {}, requests: {} },
                            livenessProbe: {
                                httpGet: { path: '/healthz', port: 'http' },
                                periodSeconds: 10,
                                timeoutSeconds: 5,
                                failureThreshold: 6,
                                successThreshold: 1,
                                initialDelaySeconds: 120,
                            },
                            readinessProbe: {
                                httpGet: { path: '/', port: 'http' },
                                periodSeconds: 10,
                                timeoutSeconds: 5,
                                failureThreshold: 6,
                                successThreshold: 1,
                                initialDelaySeconds: 30,
                            },
                            imagePullPolicy: 'IfNotPresent',
                            securityContext: { runAsUser: 1001, runAsNonRoot: true },
                        },
                    ],
                    hostNetwork: false,
                    securityContext: { fsGroup: 1001 },
                    serviceAccountName: 'my-prometheus-kube-state-metrics',
                },
                metadata: {
                    labels: {
                        'helm.sh/chart': 'kube-state-metrics-3.0.1',
                        'app.kubernetes.io/name': 'kube-state-metrics',
                        'app.kubernetes.io/instance': 'my-prometheus',
                        'app.kubernetes.io/managed-by': 'Helm',
                    },
                    annotations: null,
                },
            },
            minReadySeconds: 0,
        },
        metadata: {
            name: 'my-prometheus-kube-state-metrics',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'apps/v1',
    },
    {
        kind: 'Deployment',
        spec: {
            replicas: 1,
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'kube-prometheus',
                    'app.kubernetes.io/instance': 'my-prometheus',
                    'app.kubernetes.io/component': 'blackbox-exporter',
                },
            },
            strategy: { type: 'RollingUpdate' },
            template: {
                spec: {
                    volumes: [
                        {
                            name: 'blackbox-exporter-config',
                            configMap: { name: 'my-prometheus-kube-prometh-blackbox-exporter' },
                        },
                    ],
                    affinity: {
                        podAffinity: null,
                        nodeAffinity: null,
                        podAntiAffinity: {
                            preferredDuringSchedulingIgnoredDuringExecution: [
                                {
                                    weight: 1,
                                    podAffinityTerm: {
                                        namespaces: ['default'],
                                        topologyKey: 'kubernetes.io/hostname',
                                        labelSelector: {
                                            matchLabels: {
                                                'app.kubernetes.io/name': 'kube-prometheus',
                                                'app.kubernetes.io/instance': 'my-prometheus',
                                                'app.kubernetes.io/component': 'blackbox-exporter',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    containers: [
                        {
                            args: [
                                '--config.file=/bitnami/blackbox-exporter/conf/config.yml',
                                '--web.listen-address=:19115',
                            ],
                            name: 'blackbox-exporter',
                            image: 'docker.io/bitnami/blackbox-exporter:0.20.0-debian-10-r69',
                            ports: [{ name: 'http', containerPort: 19115 }],
                            envFrom: null,
                            resources: { limits: {}, requests: {} },
                            volumeMounts: [
                                { name: 'blackbox-exporter-config', mountPath: '/bitnami/blackbox-exporter/conf' },
                            ],
                            livenessProbe: {
                                httpGet: { port: 'http' },
                                periodSeconds: 10,
                                timeoutSeconds: 1,
                                failureThreshold: 3,
                                successThreshold: 1,
                                initialDelaySeconds: 30,
                            },
                            readinessProbe: {
                                httpGet: { port: 'http' },
                                periodSeconds: 10,
                                timeoutSeconds: 1,
                                failureThreshold: 3,
                                successThreshold: 1,
                                initialDelaySeconds: 60,
                            },
                            imagePullPolicy: 'IfNotPresent',
                            securityContext: { runAsUser: 1001, runAsNonRoot: true },
                        },
                    ],
                    initContainers: null,
                    securityContext: { fsGroup: 1001 },
                    serviceAccountName: 'my-prometheus-kube-prometh-blackbox-exporter',
                },
                metadata: {
                    labels: {
                        'helm.sh/chart': 'kube-prometheus-8.0.0',
                        'app.kubernetes.io/name': 'kube-prometheus',
                        'app.kubernetes.io/instance': 'my-prometheus',
                        'app.kubernetes.io/component': 'blackbox-exporter',
                        'app.kubernetes.io/managed-by': 'Helm',
                    },
                    annotations: {
                        'checksum/config': 'fcc60a9ef0426dc32b000f4c575eaf86d844bef8818d80f06c229ddc70700ffb',
                    },
                },
            },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-blackbox-exporter',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'blackbox-exporter',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'apps/v1',
    },
    {
        kind: 'Deployment',
        spec: {
            replicas: 1,
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'kube-prometheus',
                    'app.kubernetes.io/instance': 'my-prometheus',
                    'app.kubernetes.io/component': 'operator',
                },
            },
            template: {
                spec: {
                    affinity: {
                        podAffinity: null,
                        nodeAffinity: null,
                        podAntiAffinity: {
                            preferredDuringSchedulingIgnoredDuringExecution: [
                                {
                                    weight: 1,
                                    podAffinityTerm: {
                                        namespaces: ['default'],
                                        topologyKey: 'kubernetes.io/hostname',
                                        labelSelector: {
                                            matchLabels: {
                                                'app.kubernetes.io/name': 'kube-prometheus',
                                                'app.kubernetes.io/instance': 'my-prometheus',
                                                'app.kubernetes.io/component': 'operator',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    containers: [
                        {
                            env: [
                                {
                                    name: 'PROMETHEUS_CONFIG_RELOADER',
                                    valueFrom: {
                                        configMapKeyRef: {
                                            key: 'prometheus-config-reloader',
                                            name: 'my-prometheus-kube-prometh-operator',
                                        },
                                    },
                                },
                            ],
                            args: [
                                '--kubelet-service=kube-system/my-prometheus-kube-prometh-kubelet',
                                '--log-format=logfmt',
                                '--log-level=info',
                                '--localhost=127.0.0.1',
                                '--prometheus-config-reloader=$(PROMETHEUS_CONFIG_RELOADER)',
                            ],
                            name: 'prometheus-operator',
                            image: 'docker.io/bitnami/prometheus-operator:0.56.3-debian-10-r3',
                            ports: [{ name: 'http', protocol: 'TCP', containerPort: 8080 }],
                            envFrom: null,
                            livenessProbe: {
                                httpGet: { path: '/metrics', port: 'http', scheme: 'HTTP' },
                                periodSeconds: 10,
                                timeoutSeconds: 5,
                                failureThreshold: 6,
                                successThreshold: 1,
                                initialDelaySeconds: 120,
                            },
                            readinessProbe: {
                                httpGet: { path: '/metrics', port: 'http', scheme: 'HTTP' },
                                periodSeconds: 10,
                                timeoutSeconds: 5,
                                failureThreshold: 6,
                                successThreshold: 1,
                                initialDelaySeconds: 30,
                            },
                            imagePullPolicy: 'IfNotPresent',
                            securityContext: {
                                capabilities: { drop: ['ALL'] },
                                runAsNonRoot: true,
                                readOnlyRootFilesystem: false,
                                allowPrivilegeEscalation: false,
                            },
                        },
                    ],
                    securityContext: { fsGroup: 1001, runAsUser: 1001 },
                    serviceAccountName: 'my-prometheus-kube-prometh-operator',
                },
                metadata: {
                    labels: {
                        'helm.sh/chart': 'kube-prometheus-8.0.0',
                        'app.kubernetes.io/name': 'kube-prometheus',
                        'app.kubernetes.io/instance': 'my-prometheus',
                        'app.kubernetes.io/component': 'operator',
                        'app.kubernetes.io/managed-by': 'Helm',
                    },
                },
            },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'apps/v1',
    },
    {
        kind: 'Alertmanager',
        spec: {
            image: 'docker.io/bitnami/alertmanager:0.24.0-debian-10-r60',
            paused: false,
            affinity: {
                podAntiAffinity: {
                    preferredDuringSchedulingIgnoredDuringExecution: [
                        {
                            weight: 1,
                            podAffinityTerm: {
                                namespaces: ['default'],
                                topologyKey: 'kubernetes.io/hostname',
                                labelSelector: {
                                    matchLabels: {
                                        'app.kubernetes.io/name': 'kube-prometheus',
                                        'app.kubernetes.io/instance': 'my-prometheus',
                                        'app.kubernetes.io/component': 'alertmanager',
                                    },
                                },
                            },
                        },
                    ],
                },
            },
            logLevel: 'info',
            portName: 'web',
            replicas: 1,
            logFormat: 'logfmt',
            resources: {},
            retention: '120h',
            containers: [
                {
                    name: 'alertmanager',
                    livenessProbe: {
                        httpGet: { path: '/-/healthy', port: 'web', scheme: 'HTTP' },
                        periodSeconds: 5,
                        timeoutSeconds: 3,
                        failureThreshold: 120,
                        successThreshold: 1,
                        initialDelaySeconds: 0,
                    },
                    readinessProbe: {
                        httpGet: { path: '/-/ready', port: 'web', scheme: 'HTTP' },
                        periodSeconds: 5,
                        timeoutSeconds: 3,
                        failureThreshold: 120,
                        successThreshold: 1,
                        initialDelaySeconds: 0,
                    },
                    securityContext: {
                        capabilities: { drop: ['ALL'] },
                        runAsNonRoot: true,
                        readOnlyRootFilesystem: false,
                        allowPrivilegeEscalation: false,
                    },
                },
                {
                    name: 'config-reloader',
                    livenessProbe: {
                        tcpSocket: { port: 'reloader-web' },
                        periodSeconds: 10,
                        timeoutSeconds: 5,
                        failureThreshold: 6,
                        successThreshold: 1,
                        initialDelaySeconds: 10,
                    },
                    readinessProbe: {
                        tcpSocket: { port: 'reloader-web' },
                        periodSeconds: 20,
                        timeoutSeconds: 5,
                        failureThreshold: 6,
                        successThreshold: 1,
                        initialDelaySeconds: 15,
                    },
                    securityContext: {
                        capabilities: { drop: ['ALL'] },
                        runAsNonRoot: true,
                        readOnlyRootFilesystem: false,
                        allowPrivilegeEscalation: false,
                    },
                },
            ],
            externalUrl: 'http://my-prometheus-kube-prometh-alertmanager.default:9093/',
            listenLocal: false,
            podMetadata: {
                labels: {
                    'app.kubernetes.io/name': 'kube-prometheus',
                    'app.kubernetes.io/instance': 'my-prometheus',
                    'app.kubernetes.io/component': 'alertmanager',
                },
            },
            routePrefix: '/',
            securityContext: { fsGroup: 1001, runAsUser: 1001 },
            serviceAccountName: 'my-prometheus-kube-prometh-alertmanager',
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-alertmanager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'Prometheus',
        spec: {
            image: 'docker.io/bitnami/prometheus:2.35.0-debian-10-r33',
            paused: false,
            shards: 1,
            affinity: {
                podAntiAffinity: {
                    preferredDuringSchedulingIgnoredDuringExecution: [
                        {
                            weight: 1,
                            podAffinityTerm: {
                                namespaces: ['default'],
                                topologyKey: 'kubernetes.io/hostname',
                                labelSelector: {
                                    matchLabels: {
                                        'app.kubernetes.io/name': 'kube-prometheus',
                                        'app.kubernetes.io/instance': 'my-prometheus',
                                        'app.kubernetes.io/component': 'prometheus',
                                    },
                                },
                            },
                        },
                    ],
                },
            },
            alerting: {
                alertmanagers: [
                    {
                        name: 'my-prometheus-kube-prometh-alertmanager',
                        port: 'http',
                        namespace: 'default',
                        pathPrefix: '/',
                    },
                ],
            },
            logLevel: 'info',
            portName: 'web',
            replicas: 1,
            logFormat: 'logfmt',
            retention: '10d',
            containers: [
                {
                    name: 'prometheus',
                    startupProbe: {
                        httpGet: { path: '/-/ready', port: 'web', scheme: 'HTTP' },
                        periodSeconds: 15,
                        timeoutSeconds: 3,
                        failureThreshold: 60,
                        successThreshold: 1,
                        initialDelaySeconds: 0,
                    },
                    livenessProbe: {
                        httpGet: { path: '/-/healthy', port: 'web', scheme: 'HTTP' },
                        periodSeconds: 10,
                        timeoutSeconds: 3,
                        failureThreshold: 10,
                        successThreshold: 1,
                        initialDelaySeconds: 0,
                    },
                    readinessProbe: {
                        httpGet: { path: '/-/ready', port: 'web', scheme: 'HTTP' },
                        periodSeconds: 10,
                        timeoutSeconds: 3,
                        failureThreshold: 10,
                        successThreshold: 1,
                        initialDelaySeconds: 0,
                    },
                    securityContext: {
                        capabilities: { drop: ['ALL'] },
                        runAsNonRoot: true,
                        readOnlyRootFilesystem: false,
                        allowPrivilegeEscalation: false,
                    },
                },
                {
                    name: 'config-reloader',
                    livenessProbe: {
                        tcpSocket: { port: 'reloader-web' },
                        periodSeconds: 10,
                        timeoutSeconds: 5,
                        failureThreshold: 6,
                        successThreshold: 1,
                        initialDelaySeconds: 10,
                    },
                    readinessProbe: {
                        tcpSocket: { port: 'reloader-web' },
                        periodSeconds: 20,
                        timeoutSeconds: 5,
                        failureThreshold: 6,
                        successThreshold: 1,
                        initialDelaySeconds: 15,
                    },
                    securityContext: {
                        capabilities: { drop: ['ALL'] },
                        runAsNonRoot: true,
                        readOnlyRootFilesystem: false,
                        allowPrivilegeEscalation: false,
                    },
                },
            ],
            externalUrl: 'http://my-prometheus-kube-prometh-prometheus.default:9090/',
            listenLocal: false,
            podMetadata: {
                labels: {
                    'app.kubernetes.io/name': 'kube-prometheus',
                    'app.kubernetes.io/instance': 'my-prometheus',
                    'app.kubernetes.io/component': 'prometheus',
                },
            },
            routePrefix: '/',
            ruleSelector: {},
            probeSelector: {},
            enableAdminAPI: false,
            initContainers: null,
            securityContext: { fsGroup: 1001, runAsUser: 1001 },
            podMonitorSelector: {},
            serviceAccountName: 'my-prometheus-kube-prometh-prometheus',
            ruleNamespaceSelector: {},
            probeNamespaceSelector: {},
            serviceMonitorSelector: {},
            podMonitorNamespaceSelector: {},
            serviceMonitorNamespaceSelector: {},
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: '',
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'kube-state-metrics',
                    'app.kubernetes.io/instance': 'my-prometheus',
                },
            },
            endpoints: [{ port: 'http', honorLabels: true }],
            namespaceSelector: { matchNames: ['default'] },
        },
        metadata: {
            name: 'my-prometheus-kube-state-metrics',
            labels: {
                'helm.sh/chart': 'kube-state-metrics-3.0.1',
                'app.kubernetes.io/name': 'kube-state-metrics',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: 'jobLabel',
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'node-exporter',
                    'app.kubernetes.io/instance': 'my-prometheus',
                },
            },
            endpoints: [{ port: 'metrics' }],
            namespaceSelector: { matchNames: ['default'] },
        },
        metadata: {
            name: 'my-prometheus-node-exporter',
            labels: {
                'helm.sh/chart': 'node-exporter-3.0.0',
                'app.kubernetes.io/name': 'node-exporter',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: '',
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'kube-prometheus',
                    'app.kubernetes.io/instance': 'my-prometheus',
                    'app.kubernetes.io/component': 'alertmanager',
                },
            },
            endpoints: [{ path: '/metrics', port: 'http' }],
            namespaceSelector: { matchNames: ['default'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-alertmanager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'alertmanager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: 'k8s-app',
            selector: { matchLabels: { 'app.kubernetes.io/component': 'my-prometheus-kube-prometh-coredns' } },
            endpoints: [
                { port: 'http-metrics', bearerTokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token' },
            ],
            namespaceSelector: { matchNames: ['kube-system'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-coredns',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'my-prometheus-kube-prometh-coredns',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: 'component',
            selector: { matchLabels: { provider: 'kubernetes', component: 'apiserver' } },
            endpoints: [
                {
                    port: 'https',
                    scheme: 'https',
                    tlsConfig: {
                        caFile: '/var/run/secrets/kubernetes.io/serviceaccount/ca.crt',
                        serverName: 'kubernetes',
                        insecureSkipVerify: true,
                    },
                    bearerTokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token',
                },
            ],
            namespaceSelector: { matchNames: ['default'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-apiserver',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'apiserver',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: 'component',
            selector: { matchLabels: { 'app.kubernetes.io/component': 'kube-controller-manager' } },
            endpoints: [
                { port: 'http-metrics', bearerTokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token' },
            ],
            namespaceSelector: { matchNames: ['kube-system'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-kube-controller-manager',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'kube-controller-manager',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: 'k8s-app',
            selector: { matchLabels: { 'app.kubernetes.io/component': 'kube-proxy' } },
            endpoints: [
                { port: 'http-metrics', bearerTokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token' },
            ],
            namespaceSelector: { matchNames: ['kube-system'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-kube-proxy',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'kube-proxy',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: 'component',
            selector: { matchLabels: { 'app.kubernetes.io/component': 'kube-scheduler' } },
            endpoints: [
                { port: 'http-metrics', bearerTokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token' },
            ],
            namespaceSelector: { matchNames: ['kube-system'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-kube-scheduler',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'kube-scheduler',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            jobLabel: 'k8s-app',
            selector: { matchLabels: { 'k8s-app': 'kubelet' } },
            endpoints: [
                {
                    port: 'https-metrics',
                    scheme: 'https',
                    tlsConfig: {
                        caFile: '/var/run/secrets/kubernetes.io/serviceaccount/ca.crt',
                        serverName: 'kubernetes',
                        insecureSkipVerify: true,
                    },
                    honorLabels: true,
                    bearerTokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token',
                },
                {
                    path: '/metrics/cadvisor',
                    port: 'https-metrics',
                    scheme: 'https',
                    tlsConfig: {
                        caFile: '/var/run/secrets/kubernetes.io/serviceaccount/ca.crt',
                        serverName: 'kubernetes',
                        insecureSkipVerify: true,
                    },
                    honorLabels: true,
                    bearerTokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token',
                },
            ],
            namespaceSelector: { matchNames: ['kube-system'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-kubelet',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'kubelet',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'kube-prometheus',
                    'app.kubernetes.io/instance': 'my-prometheus',
                    'app.kubernetes.io/component': 'operator',
                },
            },
            endpoints: [{ port: 'http', honorLabels: true }],
            namespaceSelector: { matchNames: ['default'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-operator',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'operator',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
            annotations: null,
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
    {
        kind: 'ServiceMonitor',
        spec: {
            selector: {
                matchLabels: {
                    'app.kubernetes.io/name': 'kube-prometheus',
                    'app.kubernetes.io/instance': 'my-prometheus',
                    'app.kubernetes.io/component': 'prometheus',
                },
            },
            endpoints: [{ path: '/metrics', port: 'http' }],
            namespaceSelector: { matchNames: ['default'] },
        },
        metadata: {
            name: 'my-prometheus-kube-prometh-prometheus',
            labels: {
                'helm.sh/chart': 'kube-prometheus-8.0.0',
                'app.kubernetes.io/name': 'kube-prometheus',
                'app.kubernetes.io/instance': 'my-prometheus',
                'app.kubernetes.io/component': 'prometheus',
                'app.kubernetes.io/managed-by': 'Helm',
            },
            namespace: 'default',
        },
        apiVersion: 'monitoring.coreos.com/v1',
    },
];
