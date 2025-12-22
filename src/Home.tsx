import { Stack, Link, Typography, useMediaQuery } from "@mui/material";

import fullBodyWithWords from "./assets/full-body-with-words.png";
import sparkles from "./assets/sparkles.png";

function App() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isSm = useMediaQuery("(max-width:458px)");
  console.log(isMobile, isSm);

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
          objectFit: "contain",
        }}
      />

      {/* All Text */}
      <Stack justifyContent={isMobile ? "space-between" : "center"} spacing={6}>
        {/* Turn mess into magic + sparkles */}
        <Stack direction="row" justifyContent="center" textAlign="center">
          <Stack>
            <Typography>
              I can turn {isSm ? <br /> : ""}
              <b>mess into magic</b>
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
            Don’t be shy - call or text and let’s make your place{" "}
            <b>
              <i>irresistibly</i> clean
            </b>
            .
          </Typography>
          <Link variant="subtitle1" href="tel:847-372-7536">
            (847) 372-7536
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
