import { style } from "@vanilla-extract/css";
import { vars } from "../App.css";

export const list = style({
  display: "flex",
  flexDirection: "column",
  marginRight: vars.spacing.listSpacing,
  padding: vars.spacing.big2,
  minWidth: vars.minWidth.list,
  width: "max-content",
  height: "max-content",
  borderRadius: 20,
  backgroundColor: vars.color.list,
});

export const name = style({
  fontSize: vars.fontSizing.T3,
  marginBottom: vars.spacing.big2,
});
