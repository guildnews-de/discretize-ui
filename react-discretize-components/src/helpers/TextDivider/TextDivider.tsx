import classNames from 'classnames';
import classes from './TextDivider.module.css';
import type { ReactElement } from 'react';

export interface TextDividerProps {
  className?: string;
  text?: string;
  children?: ReactElement;
}

const TextDivider = ({ className, text, children }: TextDividerProps) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.divider} />
      <div className={classes.content}>{text || children}</div>
      <div className={classes.divider} />
    </div>
  );
};
export default TextDivider;
