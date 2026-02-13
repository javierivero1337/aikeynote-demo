"use client";

import { DeckContainer } from "@/components/deck/DeckContainer";
import { Slide01_Hook } from "@/components/slides/Slide01_Hook";
import { Slide02_Feb2020 } from "@/components/slides/Slide02_Feb2020";
import { Slide03_Sesgo } from "@/components/slides/Slide03_Sesgo";
import { Slide04_Tesis } from "@/components/slides/Slide04_Tesis";
import { Slide05_PuntoInflexion } from "@/components/slides/Slide05_PuntoInflexion";
import { Slide06_Sentimiento } from "@/components/slides/Slide06_Sentimiento";

const slides = [
  Slide01_Hook,
  Slide02_Feb2020,
  Slide03_Sesgo,
  Slide04_Tesis,
  Slide05_PuntoInflexion,
  Slide06_Sentimiento,
];

export default function Home() {
  return <DeckContainer slides={slides} />;
}
