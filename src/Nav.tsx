import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  IconButton,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";

import kweenCrown from "./assets/kween-crown.png";

function Nav() {
  const [anchorElBooks, setAnchorElBooks] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenCleaningListMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBooks(event.currentTarget);
  };
  const handleCloseBooksMenu = () => {
    setAnchorElBooks(null);
  };

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down(667));

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        {/* Separate home link from other buttons */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
        >
          {/* Home link */}
          <Stack direction="row" alignItems="center">
            <Link href="/" mr={2}>
              <img
                src={kweenCrown}
                alt="crown"
                style={{
                  height: 50,
                  objectFit: "contain",
                  padding: 12,
                }}
              />
            </Link>

            {!isSm && (
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontWeight: 400,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Kleaning Kween
              </Typography>
            )}
          </Stack>

          {/* Buttons */}
          <Stack
            direction="row"
            justifyContent={isSm ? "space-evenly" : "flex-start"}
          >
            {/* Tips & Tricks Menu */}
            <Button
              onClick={handleOpenCleaningListMenu}
              sx={{ my: 2, display: "block" }}
              aria-controls="menu-books"
            >
              Tips & Tricks
            </Button>
            <Menu
              sx={{
                mt: "45px",
              }}
              id="menu-books"
              anchorEl={anchorElBooks}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElBooks)}
              onClose={handleCloseBooksMenu}
            >
              <MenuItem
                onClick={handleCloseBooksMenu}
                component="a"
                href="#/tips-and-tricks/essentials"
              >
                <Typography>Essentials</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseBooksMenu}
                component="a"
                href="#/tips-and-tricks/move-in"
              >
                <Typography>Move-in Checklist</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseBooksMenu}
                component="a"
                href="#/tips-and-tricks/dollar-store-finds"
              >
                <Typography>Dollar Store Finds</Typography>
              </MenuItem>
            </Menu>

            {/* Instagram */}
            <Box alignSelf="center">
              <IconButton
                href="https://www.instagram.com/kleaning.kween/"
                target="_blank"
              >
                <Instagram style={{ color: "black" }} />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
