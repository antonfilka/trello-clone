import { style, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    main: "rgb(1,121,191)",
    mainDarker: "rgb(7,101,160)",
    mainFaded: "rgb(84,154,208)",
    mainFadedBright: "rgb(100,170,208)",
    list: "rgb(235,236,240)",
    task: "rgb(255,255,255)",
    taskHover: "rgb(245,245,245)",
    brightText: "rgb(255,255,255)",
    darkText: "rgb(24,42,77)",
    secondaryDarkText: "rgb(94,108,132)",
    secondaryDarkTextHover: "rgb(218,219,226)",
    selectedTab: "rgb(137, 176, 174)",
  },
  fontSizing: {
    T1: "36px",
    T2: "28px",
    T3: "22px",
    T4: "18px",
    P1: "16px",
  },
  spacing: {
    small: "5px",
    medium: "10px",
    big1: "20px",
    big2: "15px",
    listSpacing: "30px",
  },
  font: {
    body: "arial",
  },
  shadow: {
    basic: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
  },
  minWidth: {
    list: "300px",
  },
});

export const appContainer = style({
  position: "absolute",
  height: "100vh",
  width: "100vw",
  backgroundColor: vars.color.main,
  overflow: "hidden",
});
