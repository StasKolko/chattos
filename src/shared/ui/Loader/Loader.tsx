import { cn } from '@/shared/lib/classNames';
import { loader } from './Loader.module.css';

export const Loader = ({ className }: { className?: string }) => (
  <span className={cn(loader, className)} />
);
