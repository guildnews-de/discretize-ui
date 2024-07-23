import React, { CSSProperties, ReactElement } from 'react';
import Effect from '../Effect/Effect';
import { IconProps } from '../Icon/Icon';
import { AuraTypes } from '../../data/auras';
import { translate, useAPILanguage } from '../../i18n';
import {
  TRANSLATIONS_AURAS,
  TRANSLATIONS_AURA_DESCRIPTIONS,
} from '../../i18n/auras';
import { WikiLinkProps } from '../WikiLink/WikiLink';

export interface AuraProps {
  name: AuraTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
  iconProps?: Partial<IconProps>;
  wikiLinkProps: Partial<WikiLinkProps>;
  customLang?: string;
}

const Aura = (props: AuraProps): ReactElement => {
  const { name, customLang, wikiLinkProps } = props;
  const language = useAPILanguage(customLang);

  const translation = translate(TRANSLATIONS_AURAS, name, language);
  const description = translate(TRANSLATIONS_AURA_DESCRIPTIONS, name, language);

  return (
    <Effect
      {...props}
      type="Aura"
      name={name}
      displayName={translation}
      description={description}
      wikiLinkProps={{ lang: language, ...wikiLinkProps }}
    />
  );
};

export default Aura;
