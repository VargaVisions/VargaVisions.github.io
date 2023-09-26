// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components

// React icons

// Data
import Typography from "@mui/material/Typography";

import notebook from "assets/images/home_notebook.jpg";
import Box from "@mui/material/Box";

function Home() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} sx={{ minHeight: "75vh" }}>
        <VuiBox mb={3} marginTop="3em">
          <Grid
            container
            item
            width={window.innerWidth < 1200 ? "100%" : "80%"}
            margin="auto"
            borderRadius="2em"
            style={{
              background: "linear-gradient(45deg, rgba(14, 9, 30, 0.2) 30%, rgba(53, 78, 176, 0.2) 90%)",
              backdropFilter: "blur(1em)",
            }}
            padding={"2em"}
            alignItems="center"
            justify-content="space-between"
          >
            <Grid item xs={12} md={8}>
              <Typography gutterBottom variant="h2" component="div" color="#fff">
                Üdv az oldalon!
              </Typography>
              <Typography variant="body1" color="#56f5ed" marginTop="2em" marginBottom="1em" style={{ textAlign: "justify" }}>
                Itt a játékfejlesztés és szórakozás találkozik egy igazi hobbi környezetben.
                Célom, hogy megosszam veled a régebbi és a közelgő játékprojektjeimet, valamint bevezesselekk a saját
                kreatív játékfejlesztés világába.
                Lapozz vissza az időben, és fedezd fel régebbi alkotásaimat, amikkel kezdtem ezt a fantasztikus utazást.
                Lépj be a nosztalgia birodalmába, és merülj el azokban a játékokban, amelyeket először készítettem.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                component="img"
                src={notebook}
                height={window.innerWidth < 1200 ? "12em" : "18em"}
                margin={window.innerWidth < 1200 ? "1em" : "2.5em"}
                borderRadius="3em"
              />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Home;
