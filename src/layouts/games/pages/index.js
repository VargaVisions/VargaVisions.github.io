import VuiBox from "../../../components/VuiBox";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import React from "react";
import Typography from "@mui/material/Typography";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";

function Project2D() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} width={window.innerWidth < 1200 ? "100%" : "50%"} margin={"auto"}>
        <Typography variant="h1" color="#56f5ed" margin="auto">Hamarosan...</Typography>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Project2D;