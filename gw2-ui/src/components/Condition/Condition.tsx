import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';
import { IconProps } from '../Icon/Icon';
import { WikiLinkProps } from '../WikiLink/WikiLink';

import { ConditionTypes } from '../../data/conditions';
import { useAPILanguage, useTranslation } from '../../i18n';
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
  iconProps?: Partial<IconProps>;
  wikiLinkProps?: Partial<WikiLinkProps>;
  customLang?: string;
}

const Condition = ({
  name,
  count = 1,
  iconProps,
  wikiLinkProps,
  customLang,
  ...props
}: ConditionProps): ReactElement => {
  const language = useAPILanguage(customLang);
  const nameTranslated = useTranslation(CONDITIONS, name, language);
  const descriptionTranslated = useTranslation(
    CONDITIONS_DESCRIPTIONS,
    name,
    language,
  );

  return (
    <Effect
      type="Condition"
      name={name}
      displayName={nameTranslated}
      description={descriptionTranslated}
      iconProps={{ applyCount: count, ...iconProps }}
      wikiLinkProps={{ lang: language, ...wikiLinkProps }}
      {...props}
    />
  );
};

export default Condition;
