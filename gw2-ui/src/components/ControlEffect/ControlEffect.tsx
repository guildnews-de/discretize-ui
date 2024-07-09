import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import { ControlEffectTypes } from '../../data/controlEffects';
import {
  CONTROL_EFFECTS,
  CONTROL_EFFECTS_DESCRIPTIONS,
} from '../../i18n/controlEffects';
import { useAPILanguage, useTranslation } from '../../i18n';
import { IconProps } from '../Icon/Icon';
import { WikiLinkProps } from '../WikiLink/WikiLink';

export interface ControlEffectProps {
  name: ControlEffectTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
  iconProps?: Partial<IconProps>;
  wikiLinkProps?: Partial<WikiLinkProps>;
  customLang?: string;
}

const ControlEffect = ({
  name,
  wikiLinkProps,
  customLang,
  ...props
}: ControlEffectProps): ReactElement => {
  const language = useAPILanguage(customLang);
  const nameTranslated = useTranslation(CONTROL_EFFECTS, name, language);
  const descriptionTranslated = useTranslation(
    CONTROL_EFFECTS_DESCRIPTIONS,
    name,
    language,
  );

  return (
    <Effect
      {...props}
      type="Control"
      name={name}
      displayName={nameTranslated}
      description={descriptionTranslated}
      wikiLinkProps={{ lang: language, ...wikiLinkProps }}
    />
  );
};

export default ControlEffect;
