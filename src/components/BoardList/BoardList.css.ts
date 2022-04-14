import { style } from "@vanilla-extract/css";
import { vars } from "../App.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  rowGap: 15,
  minHeight: 60,
  padding: vars.spacing.big1,
  backgroundColor: vars.color.mainDarker,
});

export const title = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  marginRight: vars.spacing.big1,
});

export const addButton = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  cursor: "pointer",
  marginLeft: vars.spacing.big1,
  ":hover": {
    opacity: 0.8,
  },
});

export const boardItem = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
  backgroundColor: vars.color.mainFaded,
  padding: vars.spacing.medium,
  borderRadius: 10,
  cursor: "pointer",
  marginRight: vars.spacing.big1,
  ":hover": {
    opacity: 0.8,
  },
});

export const boardItemActive = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
  backgroundColor: vars.color.selectedTab,
  padding: vars.spacing.medium,
  borderRadius: 10,
  cursor: "pointer",
  marginRight: vars.spacing.big1,
});

export const addSection = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

export const smallTitle = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
});
