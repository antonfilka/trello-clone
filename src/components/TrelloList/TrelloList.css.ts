import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: 20,
  padding: 20,
  width: 300,
  height: "max-content",
  borderRadius: 20,
  backgroundColor: "grey",
});

export const T2 = style({
  fontSize: 32,
  marginBottom: 15,
});
