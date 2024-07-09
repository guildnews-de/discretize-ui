import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';
import { IconProps } from '../Icon/Icon';
import { WikiLinkProps } from '../WikiLink/WikiLink';

import { MistlockInstabilityTypes } from '../../data/mistlockInstabilities';
import { useAPILanguage, useTranslation } from '../../i18n';
import {
  MISTLOCK_INSTABILITIES,
  MISTLOCK_INSTABILITIES_DESCRIPTIONS,
  MISTLOCK_INSTABILTY_CONTROL,
} from '../../i18n/mistlockInstabilities';

export interface MistlockInstabilityProps {
  name: MistlockInstabilityTypes;
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

const MistlockInstability = ({
  name,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
  iconProps,
  wikiLinkProps,
  customLang,
}: MistlockInstabilityProps): ReactElement => {
  const language = useAPILanguage(customLang);
  const nameTranslated = useTranslation(MISTLOCK_INSTABILITIES, name, language);
  const descriptionTranslated = useTranslation(
    MISTLOCK_INSTABILITIES_DESCRIPTIONS,
    name,
    language,
  );

  const mistlockTranslated = useTranslation(
    MISTLOCK_INSTABILTY_CONTROL,
    'Mistlock Instability',
    language,
  );

  return (
    <Effect
      type="MistlockInstability"
      name={name}
      displayName={`${mistlockTranslated}: ${nameTranslated}`}
      description={descriptionTranslated}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      iconProps={iconProps}
      wikiLinkProps={{ lang: language, ...wikiLinkProps }}
      style={style}
    />
  );
};

export default MistlockInstability;
