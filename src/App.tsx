import { Stack, Typography } from "@mui/material";
import kweenFullBody from "./assets/kween-full-body.png";
import kleaningKweenWords from "./assets/kleaning-kween-words.png";
import sparkles from "./assets/sparkles.png";

function App() {
  return (
    <Stack alignItems="center">
      {/* Top page - words then picture */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        height="100vh"
        p={10}
      >
        <Stack spacing={6}>
          {/* Main intro */}
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

          {/* Turn mess into magic + sparkles */}
          <Stack direction="row">
            <Stack>
              <Typography variant="h6">I can turn mess into magic</Typography>
              <Typography variant="h6">with a touch of class</Typography>
              <Typography variant="h6">
                and a whole lot of <i>sparkle</i>.
              </Typography>
            </Stack>
            <img
              src={sparkles}
              alt="sparkles"
              style={{
                height: 100,
              }}
            />
          </Stack>

          {/* Your space deserves */}
          <Stack>
            <Typography variant="h6" textAlign="right">
              Your space deserves the royal treatment.
            </Typography>
            <Typography variant="h6" textAlign="right">
              Don’t be shy — reach out and let’s make your place irresistibly
              clean.
            </Typography>
          </Stack>
        </Stack>

        <img
          src={kweenFullBody}
          alt="The Kleaning Kween"
          style={{
            height: "80vh",
          }}
        />
      </Stack>
    </Stack>
  );
}

export default App;
