import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

type ErrorButtonProps = {
  className?: string;
};

export const ErrorButton = ({ className }: ErrorButtonProps) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const errorToggle = () => {
    setError(!error);
  };

  useEffect(() => {
    if (error) {
      throw new Error('You pressed the ErrorButton');
    }
  }, [error]);

  return (
    <Button
      className={className}
      option="btn"
      variant="primary"
      size="sm"
      onClick={errorToggle}
    >
      {t('Вызвать ошибку')}
    </Button>
  );
};
