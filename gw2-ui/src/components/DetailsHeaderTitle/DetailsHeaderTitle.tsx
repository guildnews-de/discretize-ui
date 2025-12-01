import clsx from 'clsx';
import { type PropsWithChildren } from 'react';
import css from './DetailsHeaderTitle.module.css';

const DetailsHeaderTitle = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx(css.root, className)}>{children}</div>;
};

export default DetailsHeaderTitle;
