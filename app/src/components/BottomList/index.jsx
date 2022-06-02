import * as React from "react";
import { Stack, Container, Grid, useTheme, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext } from "react";

import { ViewPortMeasureContext } from "../../contexts/ViewPortMeasureContext";
// import Link from '../../src/Link'
import Link from "../Link";

function DesktopLink({ link_text, link_href }) {
  return (
    <Link to={link_href} underline="hover">
      <Typography variant="h6" sx={{ opacity: 0.9 }}>
        {link_text}
      </Typography>
    </Link>
  );
}

export default function BottomList() {
  const { palette } = useTheme();
  const { md_up } = useContext(ViewPortMeasureContext);

  return (
    <>
      <Stack justifyContent="center" alignItems="center" spacing={5}>
        {md_up ? (
          <Stack direction="row" spacing={5}>
            <DesktopLink link_text="About" link_href="/about" />
            <DesktopLink link_text="Work" link_href="/work" />
            <DesktopLink link_text="Blog" link_href="/blog" />
            <DesktopLink link_text="Photo" link_href="/photo" />
            <DesktopLink link_text="Resources" link_href="/resources" />
            <DesktopLink link_text="Changelog" link_href="/changelog" />
          </Stack>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={6} md={2}>
              <Link to="/about" underline="hover">
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link to="/work" underline="hover">
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Work
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link to="/blog" underline="hover">
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Blog
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link to="/photo" underline="hover">
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Photo
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link to="/resources" underline="hover">
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Resources
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link to="/changelog" underline="hover">
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Changelog
                </Typography>
              </Link>
            </Grid>
          </Grid>
        )}

        <Stack p={1} sx={{ width: "100%" }}>
          <Typography
            variant="caption"
            color={palette.primary.main}
            align="center"
            sx={{ opacity: 0.9 }}
          >
            CODE BY LOUIS LAW © 2018 - 2022
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
