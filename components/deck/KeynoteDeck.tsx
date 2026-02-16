"use client";

import React from "react";
import { DeckContainer } from "@/components/deck/DeckContainer";
import type { DeckVariant } from "@/components/deck/types";
import { Slide01_Hook } from "@/components/slides/Slide01_Hook";
import { Slide02_Bio } from "@/components/slides/Slide02_Bio";
import { Slide03_Feb2020 } from "@/components/slides/Slide03_Feb2020";
import { Slide04_Sesgo } from "@/components/slides/Slide04_Sesgo";
import { Slide05_Tesis } from "@/components/slides/Slide05_Tesis";
import { Slide06_PuntoInflexion } from "@/components/slides/Slide06_PuntoInflexion";
import { Slide07_FreeVsPaid } from "@/components/slides/Slide07_FreeVsPaid";
import { Slide08_Tweets } from "@/components/slides/Slide08_Tweets";
import { Slide09_Sentimiento } from "@/components/slides/Slide09_Sentimiento";
import { Slide10_Urgency } from "@/components/slides/Slide10_Urgency";
import { Slide11_Curve } from "@/components/slides/Slide11_Curve";
import { Slide12_Secret } from "@/components/slides/Slide12_Secret";
import { Slide13_Loop } from "@/components/slides/Slide13_Loop";
import { Slide14_AlphaGo } from "@/components/slides/Slide14_AlphaGo";
import { Slide15_Metr } from "@/components/slides/Slide15_Metr";
import { Slide16_Coders } from "@/components/slides/Slide16_Coders";
import { Slide17_Industries } from "@/components/slides/Slide17_Industries";
import { Slide18_Lawyers } from "@/components/slides/Slide18_Lawyers";
import { Slide19_LinkbertoIntro } from "@/components/slides/Slide19_LinkbertoIntro";
import { Slide20_Hierarchy } from "@/components/slides/Slide20_Hierarchy";
import { Slide21_LinkbertoDemo } from "@/components/slides/Slide21_LinkbertoDemo";
import { Slide22_LinkbertoVsHuman } from "@/components/slides/Slide22_LinkbertoVsHuman";
import { Slide23_HumanTouch } from "@/components/slides/Slide23_HumanTouch";
import { Slide24_Warning } from "@/components/slides/Slide24_Warning";
import { Slide25_PowerDynamic } from "@/components/slides/Slide25_PowerDynamic";
import { Slide26_Lifeboat } from "@/components/slides/Slide26_Lifeboat";
import { Slide27_Democratization } from "@/components/slides/Slide27_Democratization";
import { Slide28_NaturalLanguage } from "@/components/slides/Slide28_NaturalLanguage";
import { Slide29_Capabilities } from "@/components/slides/Slide29_Capabilities";
import { Slide30_Iterators } from "@/components/slides/Slide30_Iterators";
import { Slide31_Advice } from "@/components/slides/Slide31_Advice";
import { Slide32_DailyHour } from "@/components/slides/Slide32_DailyHour";
import { Slide33_FinancialResilience } from "@/components/slides/Slide33_FinancialResilience";
import { Slide34_Closing } from "@/components/slides/Slide34_Closing";

const slides = [
  Slide01_Hook,
  Slide02_Bio,
  Slide03_Feb2020,
  Slide04_Sesgo,
  Slide05_Tesis,
  Slide06_PuntoInflexion,
  Slide07_FreeVsPaid,
  Slide08_Tweets,
  Slide09_Sentimiento,
  Slide10_Urgency,
  Slide11_Curve,
  Slide12_Secret,
  Slide13_Loop,
  Slide14_AlphaGo,
  Slide15_Metr,
  Slide16_Coders,
  Slide17_Industries,
  Slide18_Lawyers,
  Slide19_LinkbertoIntro,
  Slide20_Hierarchy,
  Slide21_LinkbertoDemo,
  Slide22_LinkbertoVsHuman,
  Slide23_HumanTouch,
  Slide24_Warning,
  Slide25_PowerDynamic,
  Slide26_Lifeboat,
  Slide27_Democratization,
  Slide28_NaturalLanguage,
  Slide29_Capabilities,
  Slide30_Iterators,
  Slide31_Advice,
  Slide32_DailyHour,
  Slide33_FinancialResilience,
  Slide34_Closing,
];

interface KeynoteDeckProps {
  variant?: DeckVariant;
}

export function KeynoteDeck({ variant = "default" }: KeynoteDeckProps) {
  return <DeckContainer slides={slides} variant={variant} />;
}
