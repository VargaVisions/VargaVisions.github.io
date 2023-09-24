import borders from "../../assets/theme/base/borders";
import VuiBox from "../../components/VuiBox";
import VuiTypography from "../../components/VuiTypography";
import GradientBorder from "../../examples/GradientBorder";
import radialGradient from "../../assets/theme/functions/radialGradient";
import palette from "../../assets/theme/base/colors";
import VuiInput from "../../components/VuiInput";
import VuiButton from "../../components/VuiButton";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  // Email sender
  // ###################################################################################################################
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  // ###################################################################################################################

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} width={window.innerWidth < 1200 ? "100%" : "50%"} margin={"auto"}>
        <GradientBorder borderRadius={borders.borderRadius.form} minWidth="100%" maxWidth="100%">
          <VuiBox
            component="form"
            role="form"
            ref={form}
            borderRadius="inherit"
            p="45px"
            sx={({ palette: { secondary } }) => ({
              backgroundColor: secondary.focus,
            })}
          >
            <VuiTypography
              color="white"
              fontWeight="bold"
              textAlign="center"
              mb="24px"
              sx={({ typography: { size } }) => ({
                fontSize: size.lg,
              })}
            >
              Lépj velem kapcsolatba
            </VuiTypography>
            <VuiBox mb={2}>
              <VuiBox mb={1} ml={0.5}>
                <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                  Név
                </VuiTypography>
              </VuiBox>
              <GradientBorder
                minWidth="100%"
                borderRadius={borders.borderRadius.lg}
                padding="1px"
                backgroundImage={radialGradient(
                  palette.gradients.borderLight.main,
                  palette.gradients.borderLight.state,
                  palette.gradients.borderLight.angle,
                )}
              >
                <VuiInput
                  name="user_name"
                  placeholder="Név"
                  sx={({ typography: { size } }) => ({
                    fontSize: size.sm,
                  })}
                />
              </GradientBorder>
            </VuiBox>
            <VuiBox mb={2}>
              <VuiBox mb={1} ml={0.5}>
                <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                  Email
                </VuiTypography>
              </VuiBox>
              <GradientBorder
                minWidth="100%"
                borderRadius={borders.borderRadius.lg}
                padding="1px"
                backgroundImage={radialGradient(
                  palette.gradients.borderLight.main,
                  palette.gradients.borderLight.state,
                  palette.gradients.borderLight.angle,
                )}
              >
                <VuiInput
                  name="user_email"
                  type="text"
                  placeholder="Your email..."
                  sx={({ typography: { size } }) => ({
                    fontSize: size.sm,
                  })}
                />
              </GradientBorder>
            </VuiBox>
            <VuiBox mb={2}>
              <VuiBox mb={1} ml={0.5}>
                <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                  Tárgy
                </VuiTypography>
              </VuiBox>
              <GradientBorder
                minWidth="100%"
                borderRadius={borders.borderRadius.lg}
                padding="1px"
                backgroundImage={radialGradient(
                  palette.gradients.borderLight.main,
                  palette.gradients.borderLight.state,
                  palette.gradients.borderLight.angle,
                )}
              >
                <VuiInput
                  name="subject"
                  type="text"
                  placeholder="Üzeneted tárgya"
                  sx={({ typography: { size } }) => ({
                    fontSize: size.sm,
                  })}
                />
              </GradientBorder>
            </VuiBox>
            <VuiBox mb={2}>
              <VuiBox mb={1} ml={0.5}>
                <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                  Üzenet
                </VuiTypography>
              </VuiBox>
              <GradientBorder
                minWidth="100%"
                borderRadius={borders.borderRadius.lg}
                padding="1px"
                backgroundImage={radialGradient(
                  palette.gradients.borderLight.main,
                  palette.gradients.borderLight.state,
                  palette.gradients.borderLight.angle,
                )}
              >
                <VuiInput
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Írd ide, amit szeretnél mondani"
                  style={{
                    WebkitBoxSizing: "border-box",
                    MozBoxSizing: "border-box",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                  sx={({ typography: { size } }) => ({
                    fontSize: size.sm,
                    resize: "none",
                  })}
                />
              </GradientBorder>
            </VuiBox>
            <VuiBox mt={4} mb={1}>
              <VuiButton color="info" fullWidth onClick={sendEmail}>
                Küldés
              </VuiButton>
            </VuiBox>
          </VuiBox>
        </GradientBorder>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Contact;