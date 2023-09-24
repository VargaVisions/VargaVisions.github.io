/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

// Images
import Project2D from "../../assets/images/project2d.png";

function Games() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} sx={{ minHeight: "75vh" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <NavLink to="/games/Project2D">
                  <Box
                    component="img"
                    src={Project2D}
                    height={window.innerWidth < 1200 ? "12em" : "18em"}
                    borderRadius="10px"
                    margin="0 auto"
                    display="block"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#ffffff">
                      Project2D
                    </Typography>
                    <Typography variant="body2" color="#dbdbdb">
                      Egy kétdimenziós játék a VargaVisions-től, amely a középkorban játszódik.
                      Főhősünk egy lovag/katona, akinek számos akadály kerül az útjába.
                    </Typography>
                  </CardContent>
                </NavLink>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Games;
