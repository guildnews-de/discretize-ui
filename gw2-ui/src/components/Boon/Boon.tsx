import React, { CSSProperties, ReactElement } from 'react';
import { BoonsTypes } from '../../data/boons';
import { translate, useAPILanguage } from '../../i18n';
import {
  TRANSLATIONS_BOONS,
  TRANSLATIONS_BOON_DESCRIPTIONS,
} from '../../i18n/boons';
import Effect from '../Effect/Effect';
import { IconProps } from '../Icon/Icon';
import { WikiLinkProps } from '../WikiLink/WikiLink';

export interface BoonProps {
  name: BoonsTypes;
  count?: number;
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

const Boon = ({
  name,
  count = 1,
  iconProps,
  wikiLinkProps,
  customLang,
  ...props
}: BoonProps): ReactElement => {
  const language = useAPILanguage(customLang);

  const translation = translate(TRANSLATIONS_BOONS, name, language);
  const description = translate(TRANSLATIONS_BOON_DESCRIPTIONS, name, language);

  return (
    <Effect
      {...props}
      type="Boon"
      name={name}
      displayName={translation}
      description={description}
      iconProps={{ applyCount: count, ...iconProps }}
      wikiLinkProps={{ lang: language, ...wikiLinkProps }}
    />
  );
};

export default Boon;
