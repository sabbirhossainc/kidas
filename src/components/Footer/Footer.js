import CssBaseline from "@material-ui/core/CssBaseline";
import FootUp from "../Body/FootUp";
const Footer = () => {
  return (
      <>
      <CssBaseline />
      <FootUp/>
      <footer
        style={{
          color: "black",
          textAlign: "center",
          border: 20,
          padding: 10,
          backgroundColor: "#F77F00",
        }}
      >
        Copyright © Kidas 2020 (Keraniganj Intellectually Disabled And Autistic
        School) All Rights Reserved | <b><a href="https://www.facebook.com/sabbirhossainf">Sabbir Hossain</a></b>
      </footer>
      </>
  );
};

export default Footer;