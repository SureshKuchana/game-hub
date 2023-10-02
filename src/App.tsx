import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        // eslint-disable-next-line quotes
        base: `"nav" "main"`,
        // eslint-disable-next-line quotes
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <Show above='lg'>
        <GridItem area='main'>Main</GridItem>
      </Show>
    </Grid>
  );
}

export default App;
