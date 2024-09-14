import { cn } from '@/shared/lib/classNames';
import { loader } from './Loader.module.css';

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => (
  <span className={cn(loader, className)} />
);
