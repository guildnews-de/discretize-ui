import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import { CommonEffectTypes } from '../../data/commonEffects';
import { useTranslation } from '../../i18n/index';
import {
  COMMON_EFFECTS,
  COMMON_EFFECTS_DESCRIPTIONS,
} from '../../i18n/commonEffects';

export interface CommonEffectProps {
  name: CommonEffectTypes | 'Mistlock Singularity';
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
  customLang?: string;
}

const CommonEffect = ({
  name: propsName,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
  customLang,
}: CommonEffectProps): ReactElement => {
  const name =
    propsName === 'Mistlock Singularity' ? 'Rigorous Certainty' : propsName;

  const nameTranslated = useTranslation(COMMON_EFFECTS, name, customLang);
  const descriptionTranslated = useTranslation(
    COMMON_EFFECTS_DESCRIPTIONS,
    name,
    customLang,
  );

  return (
    <Effect
      type="Common"
      name={name}
      displayName={nameTranslated}
      description={descriptionTranslated}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default CommonEffect;
