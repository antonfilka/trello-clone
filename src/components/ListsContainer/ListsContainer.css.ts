import { style } from "@vanilla-extract/css";
import { vars } from "../App.css";

export const listsContainer = style({
  display: "flex",
  flexDirection: "row",
  margin: vars.spacing.listSpacing,
});
