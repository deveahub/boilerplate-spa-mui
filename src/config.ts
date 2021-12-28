import yup from './yup';

import { ENVIRONMENTS } from './constants';

const validation = yup.object({
  REACT_APP_HOST_ENV: yup.mixed<Config.env>().oneOf(Object.values(ENVIRONMENTS)).required(),
}).required();

const config = validation.validateSync(process.env, { stripUnknown: true });

export default config;
