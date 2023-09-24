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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, CardActionArea, CardActions, CardHeader, CardMedia, LinearProgress, Stack, Link } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import notebook from "assets/images/home_notebook.jpg";
import Box from "@mui/material/Box";
import VuiInput from "../../components/VuiInput";

function Dashboard() {
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

export default Dashboard;
