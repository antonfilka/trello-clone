import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const sideForm = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

export const input = style({
  padding: vars.spacing.small,
  fontSize: vars.fontSizing.T4,
  minHeight: 30,
});

export const icon = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  marginLeft: vars.spacing.medium,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});
