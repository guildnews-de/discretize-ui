import {
  type GW2ApiFactAttributeAdjust,
  type GW2ApiFactBuff,
  type GW2ApiFactBuffConversion,
  type GW2ApiFactComboField,
  type GW2ApiFactComboFinisher,
  type GW2ApiFactDamage,
  type GW2ApiFactDistance,
  type GW2ApiFactDuration,
  type GW2ApiFactHeal,
  type GW2ApiFactHealingAdjust,
  type GW2ApiFactNoData,
  type GW2ApiFactNumber,
  type GW2ApiFactPercent,
  type GW2ApiFactPrefixedBuff,
  type GW2ApiFactRadius,
  type GW2ApiFactRange,
  type GW2ApiFactRecharge,
  type GW2ApiFactStunBreak,
  type GW2ApiFactTime,
  type GW2ApiFactUnblockable,
} from './fact';

type GW2ApiTraitedFactAdditional = {
  requires_trait: number;
  overrides?: number;
};

type GW2ApiTraitedFact = GW2ApiFact & GW2ApiTraitedFactAdditional;

export default GW2ApiTraitedFact;
