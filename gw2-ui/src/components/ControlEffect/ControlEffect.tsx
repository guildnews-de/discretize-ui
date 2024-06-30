import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import { ControlEffectTypes } from '../../data/controlEffects';
import {
  CONTROL_EFFECTS,
  CONTROL_EFFECTS_DESCRIPTIONS,
} from '../../i18n/controlEffects';
import { useTranslation } from '../../i18n';
import { IconProps } from '../Icon/Icon';

export interface ControlEffectProps {
  name: ControlEffectTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
  iconProps?: IconProps;
  customLang?: string;
}

const ControlEffect = ({
  name,
  customLang,
  ...props
}: ControlEffectProps): ReactElement => {
  const nameTranslated = useTranslation(CONTROL_EFFECTS, name, customLang);
  const descriptionTranslated = useTranslation(
    CONTROL_EFFECTS_DESCRIPTIONS,
    name,
    customLang,
  );

  return (
    <Effect
      {...props}
      type="Control"
      name={name}
      displayName={nameTranslated}
      description={descriptionTranslated}
    />
  );
};

export default ControlEffect;
