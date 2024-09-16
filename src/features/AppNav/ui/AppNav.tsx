'use client';

import { cn } from '@/shared/lib/classNames';
import { navigation } from './AppNav.module.css';

import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

export const appNavPaths = [
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

export const AppNav = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const currentPage = pathname === '/' ? 'home' : pathname.split('/')[1];

  return (
    <ul data-testid="app-nav" className={cn(navigation, className)}>
      {appNavPaths.map(({ path, title, page }) => (
        <li key={path}>
          <Button
            asChild
            option='link'
            variant={currentPage === page ? 'primary' : 'secondary'
            }
            size='md'
            underline
          >
            <Link to={path}>{t(title)}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};