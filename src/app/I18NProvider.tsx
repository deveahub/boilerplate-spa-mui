import i18next, { TFunction } from 'i18next';
import detector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import {
  FC, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import config from '../config';

export type I18NProviderProps = {
  children: ReactNode
}

const I18NProvider: FC<I18NProviderProps> = ({ children }) => {
  const [i18n, setI18n] = useState<TFunction | undefined>();

  const loadI18n = useCallback(async () => {
    const instance = await i18next
      .createInstance()
      .use(HttpBackend)
      .use(detector)
      .use(initReactI18next)
      .init({
        lng: 'es',
        fallbackLng: 'es',
        defaultNS: 'common',
        load: 'languageOnly',
        ns: [],
        debug: config.REACT_APP_HOST_ENV === 'local',
        backend: {
          loadPath: 'locales/{{lng}}/{{ns}}.json',
          requestOptions: { cache: 'no-store' },
        },
        react: {
          useSuspense: true,
        },
        detection: {
          caches: ['sessionStorage'],
        },
      });

    setI18n(instance);
  }, [setI18n]);

  useEffect(() => {
    loadI18n();
  }, [loadI18n]);

  return (
    <I18nextProvider i18n={i18n as any}>
      {children}
    </I18nextProvider>
  );
};

export default I18NProvider;
