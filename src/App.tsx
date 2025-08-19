import { Stack, Typography, useMediaQuery } from "@mui/material";
import kweenFullBody from "./assets/kween-full-body.png";
import fullBodyWithWords from "./assets/full-body-with-words.png";
import kleaningKweenWords from "./assets/kleaning-kween-words.png";
import sparkles from "./assets/sparkles.png";

function App() {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Stack minHeight="100vh" p={3} justifyContent="space-between">
      {isMobile && (
        <img
          src={fullBodyWithWords}
          alt="The Kleaning Kween"
          style={{
            width: "100%",
          }}
        />
      )}

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
      <Stack spacing={1} textAlign="center" mb={8}>
        <Typography>
          Your space deserves the <b>royal treatment</b>.
        </Typography>
        <Typography>
          Don’t be shy — reach out and let’s make your place{" "}
          <b>
            <i>irresistibly</i> clean
          </b>
          .
        </Typography>
      </Stack>
    </Stack>
  );
}

export default App;
