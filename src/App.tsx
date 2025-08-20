import {
  Stack,
  ThemeProvider,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

import fullBodyWithWords from "./assets/full-body-with-words.png";
import sparkles from "./assets/sparkles.png";

import { theme } from "./theme";

function App() {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={isMobile ? "column" : "row-reverse"}
        minHeight="100vh"
        p={3}
        spacing={8}
        mb={10}
        justifyContent={isMobile ? undefined : "center"}
      >
        {/* Image */}
        <img
          src={fullBodyWithWords}
          alt="The Kleaning Kween"
          style={{
            width: isMobile ? "100%" : undefined,
            height: isMobile ? undefined : "80vw",
            maxHeight: 900,
          }}
        />

        {/* All Text */}
        <Stack
          justifyContent={isMobile ? "space-between" : "center"}
          spacing={6}
        >
          {/* Turn mess into magic + sparkles */}
          <Stack direction="row" justifyContent="center" textAlign="center">
            <Stack>
              <Typography>
                I can turn <b>mess into magic</b>
              </Typography>
              <Typography>
                with a touch of <b>class</b>
              </Typography>
              <Typography>
                and a whole lot of{" "}
                <b>
                  <i>sparkle</i>
                </b>
                .
              </Typography>
            </Stack>
            <img
              src={sparkles}
              alt="sparkles"
              style={{
                width: 75,
                alignSelf: "flex-end",
              }}
            />
          </Stack>

          {/* Your space deserves */}
          <Typography textAlign="center">
            Your space deserves the <b>royal treatment</b>.
          </Typography>

          {/* Don't be shy */}
          <Stack textAlign="center" spacing={3}>
            <Typography>
              Don’t be shy! Call or text and let’s make your place{" "}
              <b>
                <i>irresistibly</i> clean
              </b>
              .
            </Typography>
            <Link variant="subtitle1" href="tel:847-372-7536" color="#682EAB">
              (847) 372-7536
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
