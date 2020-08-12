const jobsLogsData = [
  {
    id: '67dfac11-1caf-4470-9ad1-d533f6360bdd',
    hrId: 2,
    jobProfileName: 'Multilingual support check',
    jobProfileId: '22fafcc3-f582-493d-88b0-3c538480cd83',
    sourcePath: 'path',
    fileName: 'import_28.mrc',
    progress: {
      exported: 7,
      failed: 2,
      total: 9,
    },
    runBy: {
      firstName: 'Ozzy',
      lastName: 'Campenshtorm',
    },
    completedDate: '2018-11-11T14:10:34.000+0000',
    status: 'ERROR',
    uiStatus: 'ERROR',
    userId: '12bbfdb5-91be-50ab-ad28-0d737fb5756a',
  },
  {
    id: '2e149aef-bb77-45aa-8a28-e139674b55e1',
    hrId: 3,
    jobProfileName: 'Standard BIB profile',
    jobProfileId: '32fafcc3-f582-493d-88b0-3c538480cd83',
    sourcePath: 'path',
    fileName: 'import_22.mrc',
    progress: {
      exported: 7,
      failed: 0,
      total: 7,
    },
    runBy: {
      firstName: 'Elliot',
      lastName: 'Lane',
    },
    completedDate: '2018-11-05T14:21:57.000+0000',
    status: 'COMMITTED',
    uiStatus: 'RUNNING_COMPLETE',
    userId: '18bbfdb5-91be-50ab-ad28-0d737fb5758a',
  },
  {
    id: '4aa3f7f9-3fe5-4a29-a149-72f7b08879da',
    hrId: 1,
    jobProfileName: 'BIB profile with customized Holdings',
    jobProfileId: '44fafcc3-f582-493d-88b0-3c538480cd83',
    sourcePath: 'path',
    fileName: 'import_22.mrc',
    progress: {
      exported: 46,
      failed: 0,
      total: 46,
    },
    runBy: {
      firstName: 'Jay',
      lastName: 'Morrowitz',
    },
    completedDate: '2018-11-05T13:08:12.000+0000',
    status: 'COMMITTED',
    uiStatus: 'RUNNING_COMPLETE',
    userId: '19bbfdb5-91be-50ab-ad28-0d737fb5759a',
  },
  {
    id: '2e149aef-bb77-45aa-8a28-e139674b55e1',
    hrId: 4,
    jobProfileName: 'Standard BIB profile',
    jobProfileId: '32fafcc3-f582-493d-88b0-3c538480cd83',
    sourcePath: 'path',
    fileName: 'import_21.mrc',
    progress: {
      exported: 10,
      failed: 0,
      total: 10,
    },
    runBy: {
      firstName: 'Elliot',
      lastName: 'Lane',
    },
    completedDate: '2018-11-05T14:22:57.000+0000',
    status: 'COMMITTED',
    uiStatus: 'RUNNING_COMPLETE',
    userId: '18bbfdb5-91be-50ab-ad28-0d737fb5758a',
  },
];

export const jobsLogs = [...jobsLogsData];