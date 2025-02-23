import clsx from 'clsx';
import { CSSProperties, ReactElement } from 'react';
import GW2ApiSpecialization from '../../gw2api/types/specialization/specialization';
import IconWithText from '../IconWithText/IconWithText';
import professioncss from '../Profession/professions.module.css';
import Tooltip from '../Tooltip/Tooltip';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import SpecializationTooltip from './SpecializationTooltip';
import { IconProps } from '../Icon/Icon';

export interface SpecializationInternalProps {
  data: GW2ApiSpecialization;
  text?: string;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  inline?: boolean;
  style?: CSSProperties;
  className?: string;
  iconProps?: Partial<IconProps>;
  wikiLinkProps?: Partial<WikiLinkProps>;
}

const SpecializationInternal = (
  props: SpecializationInternalProps,
): ReactElement => {
  const {
    data,
    text,
    disableIcon,
    disableText,
    disableLink,
    inline,
    style,
    className,
    iconProps,
    wikiLinkProps,
  } = props;
  const { name, icon, profession } = data;

  return (
    <Tooltip content={<SpecializationTooltip data={data} />}>
      <IconWithText
        icon={icon}
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
              )}
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ hexagon: true, ...iconProps }}
        style={style}
        className={clsx(
          className,
          profession && professioncss[`coloredProfession${profession}`],
        )}
      />
    </Tooltip>
  );
};

export default SpecializationInternal;
