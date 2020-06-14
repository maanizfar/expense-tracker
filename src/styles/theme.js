export const colors = {
  light: {
    body: "#f7f7f7",
    background: "white",
    textColor: "black",
    shadowColor: "1px 1px 10px -2px rgba(0, 0, 0, 0.75)",
    gradient: "linear-gradient(#f7f7f7, #ffffff)",
  },
  dark: {
    body: "#363537",
    background: "white",
    textColor: "white",
    shadowColor: "1px 1px 20px -2px rgba(0,255,81,1)",
    gradient: "linear-gradient(#363537, black)",
  },
};

export const fonts = {
  noto: "Noto Sans, sans-serif",
};

export const getBodyColor = (theme) => {
  return colors[theme].body;
};

export const getTextColor = (theme) => {
  return colors[theme].textColor;
};

export const getBackgroundColor = (theme) => {
  return colors[theme].background;
};

export const getShadowColor = (theme) => {
  return colors[theme].shadowColor;
};

export const getGradient = (theme) => {
  return colors[theme].gradient;
};
