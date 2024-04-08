import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark' ?
        {
            darkBlue: {
                100: "#d0d1d5",
                200: "#a1a4ab",
                300: "#727681",
                400: "#434957",
                500: "#141b2d",
                600: "#101624",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509"
            },
            primary: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632"
            },
            greenAccent: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#4cceac",
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922"
            },
            grayAccent: {
                100: "#f3f3f3",
                200: "#e7e7e7",
                300: "#dadada",
                400: "#cecece",
                500: "#c2c2c2",
                600: "#9b9b9b",
                700: "#747474",
                800: "#4e4e4e",
                900: "#272727"
            },
            purpleAccent: {
                100: "#e7e7e7",
                200: "#cecece",
                300: "#b6b6b6",
                400: "#9d9d9d",
                500: "#858585",
                600: "#6a6a6a",
                700: "#505050",
                800: "#353535",
                900: "#1b1b1b"
            }
        }
        :
        {
            darkBlue: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "#101624",
                500: "#141b2d",
                600: "#434957",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            primary: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#2e7c67",
                400: "#3da58a",
                500: "#4cceac",
                600: "#70d8bd",
                700: "#94e2cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            grayAccent: {
                100: "#272727",
                200: "#4e4e4e",
                300: "#747474",
                400: "#9b9b9b",
                500: "#c2c2c2",
                600: "#cecece",
                700: "#dadada",
                800: "#e7e7e7",
                900: "#f3f3f3",
            },
            purpleAccent: {
                100: "#1b1b1b",
                200: "#353535",
                300: "#505050",
                400: "#6a6a6a",
                500: "#858585",
                600: "#9d9d9d",
                700: "#b6b6b6",
                800: "#cecece",
                900: "#e7e7e7",
            }
        }

    )
})


// mui theme setting
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.darkBlue[700],
                        main: colors.darkBlue[500],
                        light: colors.darkBlue[100],
                    },
                    background: {
                        default: colors.primary[500],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.darkBlue[700],
                        main: colors.darkBlue[500],
                        light: colors.darkBlue[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};


// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});


export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };