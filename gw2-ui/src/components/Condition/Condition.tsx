import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';
import { IconProps } from '../Icon/Icon';

import { ConditionTypes } from '../../data/conditions';
import { useTranslation } from '../../i18n';
import { CONDITIONS, CONDITIONS_DESCRIPTIONS } from '../../i18n/conditions';

export interface ConditionProps {
  name: ConditionTypes;
  count?: number;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
  iconProps?: IconProps;
  customLang?: string;
}

const Condition = ({
  name,
  count = 1,
  iconProps,
  customLang,
  ...props
}: ConditionProps): ReactElement => {
  const nameTranslated = useTranslation(CONDITIONS, name, customLang);
  const descriptionTranslated = useTranslation(
    CONDITIONS_DESCRIPTIONS,
    name,
    customLang,
  );

  return (
    <Effect
      type="Condition"
      name={name}
      displayName={nameTranslated}
      description={descriptionTranslated}
      iconProps={{ applyCount: count, ...iconProps }}
      {...props}
    />
  );
};

export default Condition;
