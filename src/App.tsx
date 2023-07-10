import { Container, ContainerProps } from "@mui/material";
import { NavBar } from "./containers/NavBar";
import { Main } from "./containers/Main";

const containerStyle: ContainerProps["sx"] = {
  backgroundColor: "#FEF4FF",
};

function App() {
  return (
    <Container disableGutters sx={containerStyle} maxWidth="xl">
      <NavBar />
      <Main />
    </Container>
  );
}

export default App;
