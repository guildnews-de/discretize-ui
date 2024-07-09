import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';
import { IconProps } from '../Icon/Icon';
import { WikiLinkProps } from '../WikiLink/WikiLink';

import { CommonEffectTypes } from '../../data/commonEffects';
import { useAPILanguage, useTranslation } from '../../i18n/index';
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
  iconProps?: Partial<IconProps>;
  wikiLinkProps?: Partial<WikiLinkProps>;
  customLang?: string;
}

const CommonEffect = ({
  name: propsName,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  wikiLinkProps,
  className,
  style,

  customLang,
}: CommonEffectProps): ReactElement => {
  const language = useAPILanguage(customLang);
  const name =
    propsName === 'Mistlock Singularity' ? 'Rigorous Certainty' : propsName;

  const nameTranslated = useTranslation(COMMON_EFFECTS, name, language);
  const descriptionTranslated = useTranslation(
    COMMON_EFFECTS_DESCRIPTIONS,
    name,
    language,
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
      wikiLinkProps={{ lang: language, ...wikiLinkProps }}
    />
  );
};

export default CommonEffect;
