import { style, createGlobalTheme } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { vars } from "../App.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxHeight: 900,
  minWidth: 300,
  maxWidth: 300,
  padding: vars.spacing.big1,
  opacity: 0.7,
  right: 0,
  overflowY: "auto",
  overflowX: "hidden",
  marginLeft: "auto",
  transition: "all 0.3s ease-in-out",
  background:
    "linear-gradient(180deg, rgba(84,154,208,1) 1%, rgba(84,154,208,1) 45%, rgba(1,121,191,1) 100%)",
});

export const title = style({
  fontSize: 24,
  color: vars.color.brightText,
  marginBottom: vars.spacing.big1,
});
