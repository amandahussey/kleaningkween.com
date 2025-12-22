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
  Popover,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Instagram, Phone } from "@mui/icons-material";

import kweenCrown from "./assets/kween-crown.png";

function Nav() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down(667));
  const isXs = useMediaQuery(theme.breakpoints.down(390));

  const [anchorElTipsAndTricks, setAnchorElTipsAndTricks] =
    React.useState<null | HTMLElement>(null);

  const handleCloseTipsAndTricks = () => {
    setAnchorElTipsAndTricks(null);
  };

  const [anchorElPopover, setAnchorElPopover] =
    React.useState<null | HTMLElement>(null);
  const popoverIsOpen = Boolean(anchorElPopover);
  const popoverId = popoverIsOpen ? "simple-popover" : undefined;

  const handleOpenTipsAndTricksMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElTipsAndTricks(event.currentTarget);
  };

  const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorElPopover(null);
  };

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
              onClick={handleOpenTipsAndTricksMenu}
              sx={{ my: 2, display: "block", fontSize: isXs ? 16 : undefined }}
              aria-controls="menu-tips-and-tricks"
            >
              Tips & Tricks
            </Button>
            <Menu
              sx={{
                mt: "45px",
              }}
              id="menu-tips-and-tricks"
              anchorEl={anchorElTipsAndTricks}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElTipsAndTricks)}
              onClose={handleCloseTipsAndTricks}
            >
              <MenuItem
                onClick={handleCloseTipsAndTricks}
                component="a"
                href="#/tips-and-tricks/essentials"
              >
                <Typography>Essentials</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseTipsAndTricks}
                component="a"
                href="#/tips-and-tricks/move-in"
              >
                <Typography>Move-in Checklist</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseTipsAndTricks}
                component="a"
                href="#/tips-and-tricks/dollar-store-finds"
              >
                <Typography>Dollar Store Finds</Typography>
              </MenuItem>
            </Menu>

            {/* Contact */}
            <Box alignSelf="center">
              <IconButton
                onClick={handleClickPopover}
                size={isXs ? "small" : "medium"}
              >
                <Phone
                  style={{ color: "black" }}
                  fontSize={isXs ? "small" : "medium"}
                />
              </IconButton>
            </Box>
            {/* Contact Popover */}
            <Popover
              id={popoverId}
              open={popoverIsOpen}
              anchorEl={anchorElPopover}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Stack p={2}>
                <Typography>Call or text:</Typography>
                <Link variant="subtitle1" href="tel:847-372-7536">
                  <Typography>(847) 372-7536</Typography>
                </Link>
              </Stack>
            </Popover>

            {/* Instagram */}
            <Box alignSelf="center">
              <IconButton
                href="https://www.instagram.com/kleaning.kween/"
                target="_blank"
              >
                <Instagram
                  style={{ color: "black" }}
                  fontSize={isXs ? "small" : "medium"}
                />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
