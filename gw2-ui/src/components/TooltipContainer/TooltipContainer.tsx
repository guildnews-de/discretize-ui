import clsx from 'clsx';
import { type PropsWithChildren } from 'react';
import css from './TooltipContainer.module.css';

export type TooltipContainerProps = PropsWithChildren<{
  className?: string;
}>;

const TooltipContainer = ({
  children,
  className,
}: TooltipContainerProps) => {
  return <div className={clsx(css.root, className)}>{children}</div>;
};

export default TooltipContainer;
