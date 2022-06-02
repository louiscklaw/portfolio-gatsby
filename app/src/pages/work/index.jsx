import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import * as React from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import BottomList from "../../components/BottomList";
import ContactsPart from "../../components/ContactsPart";
import FullPageMobileMenu from "../../components/FullPageMobileMenu";
import ProjectCard from "../../components/ProjectCard";
import HalfWidthProjectCard from "../../components/HalfWidthProjectCard";
import NavMenu from "../../components/NavMenu";

function FirstPart() {
  const { palette } = useTheme();
  return (
    <Container maxWidth="md">
      <Stack rowGap={2}>
        <ProjectCard
          img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
          title="Enhancing Stock Trading Experience"
          subtitle="Building professional stock trading and analysis interface on browser"
          button_link="/work/project1"
          button_text=""
          category_text="HSBC @ PROTIVITI"
        />
        <ProjectCard
          img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
          title="Enhancing Stock Trading Experience"
          subtitle="Building professional stock trading and analysis interface on browser"
          button_link="/work/project1"
          button_text=""
          category_text="HSBC @ PROTIVITI"
        />
        <ProjectCard
          img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
          title="Enhancing Stock Trading Experience"
          subtitle="Building professional stock trading and analysis interface on browser"
          button_link="/work/project1"
          button_text=""
          category_text="HSBC @ PROTIVITI"
        />
      </Stack>
    </Container>
  );
}

function MoreWorks() {
  let { palette } = useTheme();
  return (
    <>
      <Container maxWidth="md">
        <Stack direction="column" rowGap={"2rem"}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              More Works
            </Typography>
            <Typography variant="body1">
              Check out of my personal work & design projects
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <HalfWidthProjectCard
                img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
                title="Enhancing Stock Trading Experience"
                subtitle="Building professional stock trading and analysis interface on browser"
                button_link="/work/project1"
                button_text=""
                category_text="HSBC @ PROTIVITI"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HalfWidthProjectCard
                img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
                title="Enhancing Stock Trading Experience"
                subtitle="Building professional stock trading and analysis interface on browser"
                button_link="/work/project1"
                button_text=""
                category_text="HSBC @ PROTIVITI"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HalfWidthProjectCard
                img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
                title="Enhancing Stock Trading Experience"
                subtitle="Building professional stock trading and analysis interface on browser"
                button_link="/work/project1"
                button_text=""
                category_text="HSBC @ PROTIVITI"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HalfWidthProjectCard
                img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
                title="Enhancing Stock Trading Experience"
                subtitle="Building professional stock trading and analysis interface on browser"
                button_link="/work/project1"
                button_text=""
                category_text="HSBC @ PROTIVITI"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HalfWidthProjectCard
                img_src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
                title="Enhancing Stock Trading Experience"
                subtitle="Building professional stock trading and analysis interface on browser"
                button_link="/work/project1"
                button_text=""
                category_text="HSBC @ PROTIVITI"
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

function PageHead() {
  return (
    <Container maxWidth="md">
      <Stack spacing={8} direction="column">
        <Stack
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            sx={{ opacity: 0.9 }}
          >
            My Work
          </Typography>
          <Typography variant="body1" component="h3" sx={{ opacity: 0.9 }}>
            Selected websites and apps showcase since 2017
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default function NotFound() {
  let [mobile_menu_open, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={0}>
          <Stack spacing={18} justifyContent="center" alignItems={"center"}>
            <NavMenu setMobileMenuOpen={setMobileMenuOpen} />
            <FullPageMobileMenu
              mobile_menu_open={mobile_menu_open}
              setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* content here ? */}
            <PageHead />
            <FirstPart />
            <MoreWorks />

            {/* content here ? */}
            <ContactsPart />
            <BottomList />
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
