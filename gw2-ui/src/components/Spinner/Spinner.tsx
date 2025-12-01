import clsx from 'clsx';
import css from './Spinner.module.css';

export interface SpinnerProps {
  inline?: boolean;
  className?: string;
}

const Spinner = ({ inline, className }: SpinnerProps) => (
  <div className={clsx(className, inline && css.inline, css.root)} />
);

export default Spinner;
