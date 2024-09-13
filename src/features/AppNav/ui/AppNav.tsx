import { cn } from '@/shared/lib/classNames';
import { navigation } from './AppNav.module.css';

import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

type AppNavProps = {
  className?: string;
}

const appNavPaths = [
  {
    path: '/',
    title: 'Главная',
    page: 'home'
  },
  {
    path: '/about',
    title: 'О нас',
    page: 'about'
  },
];

export const AppNav = ({ className }: AppNavProps) => {
  const { t } = useTranslation();

  const location = useLocation();
  const pathname = location.pathname;
  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1];

  return (
    <ul className={cn(navigation, className)}>
      {appNavPaths.map(({ path, title, page }) => (
        <li key={path}>
          <Button
            asChild
            option='link'
            variant={
              (currentPage === page)
                ? 'primary'
                : 'secondary'
            }
            size='md'
            underline>
            <Link to={path}>{t(title)}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};