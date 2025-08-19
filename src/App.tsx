import { Stack, Typography } from "@mui/material";
import kweenFullBody from "./assets/kween-full-body.png";
import kleaningKweenWords from "./assets/kleaning-kween-words.png";
import sparkles from "./assets/sparkles.png";

function App() {
  return (
    <Stack alignItems="center">
      {/* Top page */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        height="100vh"
        p={10}
      >
        <Stack spacing={4}>
          <Stack alignItems="center">
            <Typography variant="h6" textAlign="center">
              Let me introduce myself as
            </Typography>
            <Typography variant="h5" textAlign="center">
              <i>the</i>
            </Typography>
            <img
              src={kleaningKweenWords}
              alt="Kleaning Kween"
              style={{
                width: "20vw",
              }}
            />
          </Stack>

          <Stack direction="row" position="relative">
            <Typography variant="h6" textAlign="center">
              I can turn mess into magic with a touch of class and a whole lot
              of <i>sparkle</i>.
            </Typography>
            <img
              src={sparkles}
              alt="sparkles"
              style={{
                width: "100px",
                position: "absolute",
                right: -50,
                top: 12,
              }}
            />
          </Stack>

          <Typography variant="h6">
            Your space deserves the royal treatment.
          </Typography>

          <Typography variant="h6">
            Don’t be shy — reach out and let’s make your place irresistibly
            clean.
          </Typography>
        </Stack>

        <img
          src={kweenFullBody}
          alt="The Kleaning Kween"
          style={{
            height: "80vh",
          }}
        />
      </Stack>
      {/* More info section */}
    </Stack>
  );
}

export default App;
