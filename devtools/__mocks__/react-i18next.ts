const i18next = jest.requireActual('react-i18next');

module.exports = {
  ...i18next,
  initReactI18next: { type: '3rdParty', init: jest.fn() },
  useTranslation: () => {
    let language = 'es';
    return {
      t: (x, options: any = {}) => (options.returnObjects ? [x] : x),
      i18n: {
        language,
        exists: jest.fn(() => true),
      },
      changeLanguage: jest.fn(() => {
        language = language === 'es' ? 'en' : 'es';
      }),
    };
  },
};
