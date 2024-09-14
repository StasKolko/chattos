import { cn } from '@/shared/lib/classNames';
import { page } from './ErrorPage.module.css';
import { useTranslation } from 'react-i18next';
import { ReloadButton } from '@/features/ReloadButton';

type ErrorPageProps = {
  className?: string;
}

const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation('error-page');

  return (
    <div className={cn(page, className)}>
      <h1>{t('Ой! Произошла ошибка!')}</h1>
      <ReloadButton />
    </div>
  );
};

export default ErrorPage;