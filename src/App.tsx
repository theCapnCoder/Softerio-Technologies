import { Container, ContainerProps } from "@mui/material";
import { NavBar } from "./containers/NavBar";

const containerStyle: ContainerProps["sx"] = {
  backgroundColor: "#FEF4FF",
};

function App() {
  return (
    <Container disableGutters sx={containerStyle} maxWidth="xl">
      <NavBar />
    </Container>
  );
}

export default App;
