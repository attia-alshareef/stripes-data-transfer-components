# Change history for stripes-data-transfer-components

## 2.1.0 (IN PROGRESS)
* Update list formatters and list properties generators to fix rows accessibility. UIDEXP-117.
* Update export and imports to make them consistent using named approach. STDTC-3.

## [2.0.1](https://github.com/folio-org/stripes-data-transfer-components/tree/v2.0.1) (2020-07-09)
[Full Changelog](https://github.com/folio-org/stripes-data-transfer-components/tree/v2.0.0...v2.0.1)
* Fix error screen display in case of missed user information in job executions. UIDEXP-107.
* Update properties in `ProfilesPopoverInteractor` and export `ProfilesLabelInteractors`. UIDEXP-53.
* Add job name display in job logs and executions. UIDEXP-116.
* Extend `SettingsLabel` with ability to provide arbitrary label content. UIDEXP-86.
* Extend `FullScreenView` to accept `actionMenu` prop. Sync up eslint config with data-export and replace deprecated `type` with `actAs` in package.json. UIDEXP-84.
* Update translations

## [2.0.0](https://github.com/folio-org/stripes-data-transfer-components/tree/v2.0.0) (2020-06-12)
[Full Changelog](https://github.com/folio-org/stripes-data-transfer-components/tree/v1.0.1...v2.0.0)
* Implement `SearchForm` component. UIDEXP-51.
* Add `ProfilesLabel` and `SettingsLabel` components for second settings pane. UIDEXP-39.
* Add mapping profiles pane component to display static data. UIDEXP-41.
* Handle "form elements must have labels" accessibility problem for the file uploader form. STDTC-7.
* Update jobs list structure according to the accessibility requirements. UIDEXP-49.
* Create reusable `SearchResults` view component. STDTC-8.
* Create reusable `SearchAndSortPane` component. STDTC-9.
* Move `FullScreenFormComponent` from ui-data-import project. UIDEXP-96.
* Add icon for job profiles. UIDEXP-79.
* Update to Stripes v4. STDTC-10.
* Export test utils and extend FOLIO record types list. UIDEXP-46.
* Implement `JobProfiles` list component. UIDEXP-80.
* Update formatter for `MappingProfiles` list items. UIDEXP-57.
* Export PreloaderInteractor. UIDEXP-82.
* Update record column in jobs logs list for failed status. UIDEXP-97.
* Export ProgressInteractor and update job execution prop types. UIDEXP-38.
* Extend `SearchAndSortPane` and `JobProfiles` with new props in order to adjust it for choose job profile page. Extend and export test utils for building resources and mutator. UIDEXP-87.
* Add `FullScreenView` component. Change `SearchAndSortPane` rowProp `href` with `to`. UIDEXP-50.
* Update translations

## [1.0.1](https://github.com/folio-org/stripes-data-transfer-components/tree/v1.0.0) (2020-04-02)
[Full Changelog](https://github.com/folio-org/stripes-data-transfer-components/tree/v1.0.0...v1.0.1)
* Update `stripes-smart-components` to `v3.0.0` to avoid errors. UIDEXP-37.
* Remove totalRecords value from defaultJobLogsColumnWidths settings for the jobs logs list. Adjust `sortNumbers` function to work correctly with empty values. Refs UIDEXP-58.

## [1.0.0](https://github.com/folio-org/stripes-data-transfer-components/tree/v1.0.0) (2020-03-13)
* Module is created. Add FileUploader component. Refs UIDEXP-11.
* Move components from ui-data-import to display jobs and jobs lists. UIDEXP-14.
* Move accordion with jobs list to separated component. UIDEXP-6.
* Add shared utils for initiating data export process. UIDEXP-20.
* Move job logs component from ui-data-import. UIDEXP-16.
* Move getFileExtension from ui-data-import. UIDEXP-21.
* Update `stripes` to `v3.0.0`, `stripes-core` to `4.0.0` and `react-intl` to `2.9.0`. UIDEXP-31.
* Implement DataFetcher component for making API requests upon interval. Refs UIDEXP-22.
* Update JobLogs and related components according to changes in requirements . UIDEXP-7.
* Rewrite DataFetcher with the class based approach instead of hooks as it was not consistent with the behavior in data-import. UIDEXP-23.
