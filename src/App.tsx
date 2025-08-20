import { Stack, Typography, useMediaQuery } from "@mui/material";
import kweenFullBody from "./assets/kween-full-body.png";
import fullBodyWithWords from "./assets/full-body-with-words.png";
import kleaningKweenWords from "./assets/kleaning-kween-words.png";
import sparkles from "./assets/sparkles.png";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
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
      <Stack justifyContent={isMobile ? "space-between" : "center"} spacing={3}>
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
            }}
          />
        </Stack>

        {/* Your space deserves */}
        <Typography textAlign="center">
          Your space deserves the <b>royal treatment</b>.
        </Typography>

        {/* Don't be shy */}
        <Stack textAlign="center">
          <Typography>
            Don’t be shy — reach out and let’s make your place{" "}
            <b>
              <i>irresistibly</i> clean
            </b>
            .
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
