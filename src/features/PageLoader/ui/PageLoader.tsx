import { cn } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';
import { pageLoader } from './PageLoader.module.css';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cn(pageLoader, className)}>
      <Loader />
    </div>
  );
};

