import { colord } from "colord";
import ghLangColors from "gh-lang-colors";

const getLanguageColor = (language: string, alpha: number): string => {
  const languageColor: string = colord(
    ghLangColors[language as keyof typeof ghLangColors] ||
      `rgba(0,0,0,${alpha})`
  )
    .alpha(alpha)
    .toRgbString();
  return languageColor;
};

export { getLanguageColor };
