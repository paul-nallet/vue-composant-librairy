import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
    color: {
        primary: "#0070f3",
        secondary: "#ff0070",
    },
});