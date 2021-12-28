import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Example = () => {
  const { t } = useTranslation();
  return (
    <Typography>
      Example
      {t('common:test')}
    </Typography>
  );
};

export default Example;
