import chroma from "chroma-js";

const black = "#000000";
const white = "#ffffff";

const getTranslucentColor = (base: string, alpha: number) => {
  return chroma(base).alpha(alpha).hex();
}

const baseStyle = {
  color: {
    black: black,
    white: white,
    bg: {
      z0: "#D8CFCB",
      z1: "#D9D9D9",
    },
    blue: "#9ED2E6",
    green: "#D2D881",
    yellow: "#F9ED77",
    red: "#FA7373",
    text: {
      base: black,
      light: getTranslucentColor(black, 0.75),
      lighter: getTranslucentColor(black, 0.5),
      baseAlt: white
    }
  },
  spacing: {
    xSmall: 8,
    small: 16,
    shmedium: 24,
    medium: 32,
    large: 48,
    xLarge: 64
  },
  padding: {
    xSmall: 8,
    small: 16,
    shmedium: 24,
    medium: 32,
    large: 48,
    xLarge: 64
  },
  fontFamily: {
    header: "Spectral SC",
    subHeader: "Spectral",
    body: "Spectral",
    input: "Spectral"
  },
  fontSize: {
    small: 16,
    medium: 24,
    large: 36,
    xLarge: 56
  },
  lineHeight: {
    small: 24,
    medium: 32,
    large: 52,
    xLarge: 64
  },
  fontWeight: <Record<"regular" | "medium" | "semiBold" | "bold" | "extraBold", WidgetJSX.FontWeightNumerical>> {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  },
  cornerRadius: {
    small: 8,
    medium: 16,
    large: 32,
    xLarge: 64
  },
  strokeWidth: {
    small: 2,
    medium: 5,
    large: 10
  }
};

const textStyle = {
  header: {
    fontFamily: baseStyle.fontFamily.header,
    fill: baseStyle.color.text.base,
    fontSize: baseStyle.fontSize.large,
    lineHeight: baseStyle.lineHeight.large,
    fontWeight: baseStyle.fontWeight.extraBold
  },
  subHeader: {
    fontFamily: baseStyle.fontFamily.subHeader,
    fill: baseStyle.color.text.base,
    fontSize: baseStyle.fontSize.medium,
    lineHeight: baseStyle.lineHeight.medium,
    fontWeight: baseStyle.fontWeight.bold
  },
  body: {
    fontFamily: baseStyle.fontFamily.body,
    fill: baseStyle.color.text.base,
    fontSize: baseStyle.fontSize.small,
    lineHeight: baseStyle.lineHeight.small,
    fontWeight: baseStyle.fontWeight.regular
  },
  input: {
    fontFamily: baseStyle.fontFamily.input,
    fill: baseStyle.color.text.base,
    fontSize: baseStyle.fontSize.xLarge,
    lineHeight: baseStyle.lineHeight.xLarge,
    fontWeight: baseStyle.fontWeight.regular
  }
};

const style = {
  ...baseStyle,
  textStyle
};

export default style;

export type Style = typeof style;