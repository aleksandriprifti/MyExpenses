const COLORS = {
  primary50: "#D9E4EC",
  primary100: "#D9E4EC",
  primary200: "#a281f0",
  primary400: "#5721d4",
  primary500: "#6AABD2",
  primary700: "#385E72",
  primary800: "#200364",
  accent500: "#2F5061",
  error50: "#fcc4e4",
  error500: "red",
  gray500: "#39324a",
  gray700: "#221c30",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const STYLES = {
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};

export { COLORS, FONT, SIZES, SHADOWS, STYLES };
