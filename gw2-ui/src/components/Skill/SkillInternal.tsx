import clsx from 'clsx';
import { CSSProperties, ReactElement } from 'react';
import { ProfessionTypes } from '../../data/professions';
import GW2ApiSkill from '../../gw2api/types/skills/skill';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import IconWithText, { IconWithTextProps } from '../IconWithText/IconWithText';
import professioncss from '../Profession/professions.module.css';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { IconProps } from '../Icon/Icon';

export interface SkillInternalProps
  extends Omit<IconWithTextProps, 'icon' | 'text' | 'loading' | 'style'> {
  data: GW2ApiSkill;
  text?: string;
  disableLink?: boolean;
  disableTooltip?: boolean;
  tooltipProps?: TooltipProps;
  iconProps?: Partial<IconProps>;
  wikiLinkProps?: Partial<WikiLinkProps>;
  style?: CSSProperties;
  className?: string;
}

const SkillInternal = (props: SkillInternalProps): ReactElement => {
  const {
    data,
    text,
    disableLink,
    disableTooltip,
    tooltipProps,
    iconProps,
    wikiLinkProps,
  } = props;

  const { name, icon, professions } = data;
  const profession: ProfessionTypes | undefined = professions?.[0];

  return (
    <Tooltip
      content={<AbilityDetails data={data} />}
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        {...props}
        icon={icon}
        iconProps={iconProps}
        text={
          disableLink ? (
            text || name
          ) : (
            <WikiLink
              to={name}
              text={text}
              {...wikiLinkProps}
              className={clsx(
                profession && professioncss[`coloredProfession${profession}`],
                wikiLinkProps?.className,
              )}
            />
          )
        }
        className={clsx(
          props.className,
          profession && professioncss[`coloredProfession${profession}`],
        )}
      />
    </Tooltip>
  );
};

export default SkillInternal;
