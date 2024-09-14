import { cn } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { page } from './NotFoundPage.module.css';

type NotFoundPageProps = {
  className?: string;
};

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(page, className)}>
      {t('Страница не найдена')}
    </div>
  );
};

export default NotFoundPage;