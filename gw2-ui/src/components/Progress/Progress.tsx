import clsx from 'clsx';
import css from './Progress.module.css';

export interface ProgressProps {
  inline?: boolean;
}

const Progress = ({ inline }: ProgressProps) => {
  return <div className={clsx(css.root, inline && css.inline)} />;
};

export default Progress;
