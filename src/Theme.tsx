import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
      blue: {
        100: "#6A8AF5",
        400: "#4E61A1",
        900: "#09061C",
      },
    },

    fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
        link: `'Montserrat', sans-serif`,
    },

  })