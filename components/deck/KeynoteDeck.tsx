"use client";

import React from "react";
import dynamic from "next/dynamic";
import { DeckContainer } from "@/components/deck/DeckContainer";
import type { DeckVariant, SlideProps } from "@/components/deck/types";

const Slide01_Hook = dynamic(() => import("@/components/slides/Slide01_Hook").then(m => m.Slide01_Hook), { ssr: false });
const Slide02_Bio = dynamic(() => import("@/components/slides/Slide02_Bio").then(m => m.Slide02_Bio), { ssr: false });
const Slide03_Agenda = dynamic(() => import("@/components/slides/Slide03_Agenda").then(m => m.Slide03_Agenda), { ssr: false });
const Slide03_Feb2020 = dynamic(() => import("@/components/slides/Slide03_Feb2020").then(m => m.Slide03_Feb2020), { ssr: false });
const Slide04_Sesgo = dynamic(() => import("@/components/slides/Slide04_Sesgo").then(m => m.Slide04_Sesgo), { ssr: false });
const Slide05_Tesis = dynamic(() => import("@/components/slides/Slide05_Tesis").then(m => m.Slide05_Tesis), { ssr: false });
const Slide06_PuntoInflexion = dynamic(() => import("@/components/slides/Slide06_PuntoInflexion").then(m => m.Slide06_PuntoInflexion), { ssr: false });
const Slide07_FreeVsPaid = dynamic(() => import("@/components/slides/Slide07_FreeVsPaid").then(m => m.Slide07_FreeVsPaid), { ssr: false });
const Slide08_Tweets = dynamic(() => import("@/components/slides/Slide08_Tweets").then(m => m.Slide08_Tweets), { ssr: false });
const Slide09_Sentimiento = dynamic(() => import("@/components/slides/Slide09_Sentimiento").then(m => m.Slide09_Sentimiento), { ssr: false });
const Slide10_Urgency = dynamic(() => import("@/components/slides/Slide10_Urgency").then(m => m.Slide10_Urgency), { ssr: false });
const Slide11_Curve = dynamic(() => import("@/components/slides/Slide11_Curve").then(m => m.Slide11_Curve), { ssr: false });
const Slide12_Secret = dynamic(() => import("@/components/slides/Slide12_Secret").then(m => m.Slide12_Secret), { ssr: false });
const Slide13_Loop = dynamic(() => import("@/components/slides/Slide13_Loop").then(m => m.Slide13_Loop), { ssr: false });
const Slide14_AlphaGo = dynamic(() => import("@/components/slides/Slide14_AlphaGo").then(m => m.Slide14_AlphaGo), { ssr: false });
const Slide15_Metr = dynamic(() => import("@/components/slides/Slide15_Metr").then(m => m.Slide15_Metr), { ssr: false });
const Slide16_Coders = dynamic(() => import("@/components/slides/Slide16_Coders").then(m => m.Slide16_Coders), { ssr: false });
const Slide17_Industries = dynamic(() => import("@/components/slides/Slide17_Industries").then(m => m.Slide17_Industries), { ssr: false });
const Slide18_Lawyers = dynamic(() => import("@/components/slides/Slide18_Lawyers").then(m => m.Slide18_Lawyers), { ssr: false });
const Slide19_LinkbertoIntro = dynamic(() => import("@/components/slides/Slide19_LinkbertoIntro").then(m => m.Slide19_LinkbertoIntro), { ssr: false });
const Slide20_Hierarchy = dynamic(() => import("@/components/slides/Slide20_Hierarchy").then(m => m.Slide20_Hierarchy), { ssr: false });
const Slide21_LinkbertoDemo = dynamic(() => import("@/components/slides/Slide21_LinkbertoDemo").then(m => m.Slide21_LinkbertoDemo), { ssr: false });
const Slide22_LinkbertoVsHuman = dynamic(() => import("@/components/slides/Slide22_LinkbertoVsHuman").then(m => m.Slide22_LinkbertoVsHuman), { ssr: false });
const Slide23_HumanTouch = dynamic(() => import("@/components/slides/Slide23_HumanTouch").then(m => m.Slide23_HumanTouch), { ssr: false });
const Slide25_PowerDynamic = dynamic(() => import("@/components/slides/Slide25_PowerDynamic").then(m => m.Slide25_PowerDynamic), { ssr: false });
const Slide26_Lifeboat = dynamic(() => import("@/components/slides/Slide26_Lifeboat").then(m => m.Slide26_Lifeboat), { ssr: false });
const Slide27_Democratization = dynamic(() => import("@/components/slides/Slide27_Democratization").then(m => m.Slide27_Democratization), { ssr: false });
const Slide28_NaturalLanguage = dynamic(() => import("@/components/slides/Slide28_NaturalLanguage").then(m => m.Slide28_NaturalLanguage), { ssr: false });
const Slide29_Capabilities = dynamic(() => import("@/components/slides/Slide29_Capabilities").then(m => m.Slide29_Capabilities), { ssr: false });
const Slide30_Iterators = dynamic(() => import("@/components/slides/Slide30_Iterators").then(m => m.Slide30_Iterators), { ssr: false });
const Slide31_Advice = dynamic(() => import("@/components/slides/Slide31_Advice").then(m => m.Slide31_Advice), { ssr: false });
const Slide32_DailyHour = dynamic(() => import("@/components/slides/Slide32_DailyHour").then(m => m.Slide32_DailyHour), { ssr: false });
const Slide33_FinancialResilience = dynamic(() => import("@/components/slides/Slide33_FinancialResilience").then(m => m.Slide33_FinancialResilience), { ssr: false });
const Slide34_Closing = dynamic(() => import("@/components/slides/Slide34_Closing").then(m => m.Slide34_Closing), { ssr: false });

const slides: React.ComponentType<SlideProps>[] = [
  Slide01_Hook,
  Slide02_Bio,
  Slide03_Agenda,
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
  Slide25_PowerDynamic,
  Slide23_HumanTouch,
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
