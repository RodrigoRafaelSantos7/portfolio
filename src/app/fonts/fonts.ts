// app/fonts.ts
import localFont from "next/font/local";

export const regularFont = localFont({
  src: "./Editorial.otf",
  variable: "--font-regular",
});

export const italicFont = localFont({
  src: "./GreatVibes.ttf",
  variable: "--font-italic",
});

export const pixelFont = localFont({
  src: "./Mondwest.otf",
  variable: "--font-pixel",
});
