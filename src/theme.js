import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1e5b8a",
            second: "#1b5d8f",
            third: "#3788c7"
        },
        green: {
            main: "#44c780"
        },
        yellow: {
            main: "#ffef69"
        },
        white: {
            main: "#fff"
        }
    },
    typography: {
        "fontFamily": `'Cairo', sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "textWrap": `"nowrap"`,
       }
})