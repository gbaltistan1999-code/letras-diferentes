/**
 * Real fonts for the tattoo preview (/letras-para-tatuagem). next/font
 * downloads them at build time and serves them from this site, so visitors'
 * browsers never contact Google. `preload: false` keeps them off the initial
 * page load; each file is fetched only when the preview tab shows it.
 *
 * next/font requires literal options in every call, hence the repetition.
 */
import {
  Cinzel,
  Dancing_Script,
  Great_Vibes,
  Pinyon_Script,
  Pirata_One,
  Satisfy,
  Special_Elite,
  UnifrakturMaguntia,
} from "next/font/google";

const unifraktur = UnifrakturMaguntia({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
const pirata = Pirata_One({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
const pinyon = Pinyon_Script({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
const dancing = Dancing_Script({ weight: "600", subsets: ["latin"], display: "swap", preload: false });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
const specialElite = Special_Elite({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
const cinzel = Cinzel({ weight: "600", subsets: ["latin"], display: "swap", preload: false });

export interface TattooFont {
  id: string;
  label: string;
  font: string;
  className: string;
}

export const tattooFonts: TattooFont[] = [
  { id: "old-english", label: "Old English", font: "UnifrakturMaguntia", className: unifraktur.className },
  { id: "gotica-moderna", label: "Gótica Moderna", font: "Pirata One", className: pirata.className },
  { id: "caligrafia", label: "Caligrafia", font: "Great Vibes", className: greatVibes.className },
  { id: "cursiva-fina", label: "Cursiva Fina", font: "Pinyon Script", className: pinyon.className },
  { id: "manuscrita", label: "Manuscrita", font: "Dancing Script", className: dancing.className },
  { id: "lettering", label: "Lettering", font: "Satisfy", className: satisfy.className },
  { id: "maquina", label: "Máquina de Escrever", font: "Special Elite", className: specialElite.className },
  { id: "romana", label: "Romana Clássica", font: "Cinzel", className: cinzel.className },
];
