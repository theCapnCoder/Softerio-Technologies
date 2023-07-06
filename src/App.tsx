import { Box, Container, Typography, ContainerProps } from "@mui/material";
import { NavBar, TestNavBar } from "./containers/NavBar";

const containerStyle: ContainerProps["sx"] = {
  backgroundColor: "#FEF4FF",
};

function App() {
  return (
    <Container disableGutters sx={containerStyle} maxWidth="xl" >
      {/* <NavBar /> */}
      <TestNavBar />
      {/* <Typography variant="h1" component={"h1"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
      </Typography>
      <Typography variant="h2" component={"h1"} style={{ fontWeight: 600 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
      </Typography>
      <Typography variant="h2" component={"h1"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
      </Typography>
      <Typography variant="h3" component={"h1"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
      </Typography>
      <Typography variant="h4" component={"h1"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
      </Typography>
      <Typography variant="h5" component={"h1"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
      </Typography> */}
    </Container>
  );
}

export default App;
