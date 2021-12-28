import 'react-i18next';

declare module 'react-i18next' {

    export type CustomResources = {
        common: typeof import('../../public/locales/en/common.json');
    }

    interface CustomTypeOptions {
        resources: CustomResources;
    }
}
