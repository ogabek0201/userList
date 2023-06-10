import { Container } from "@mui/material";
import Layout from "./layout/Layout";
import Table from "./pages/Table/Table";
import ContextAPI from "./context/ContextAPI";

function App() {
  return (
    <>
    <ContextAPI>
      <Container maxWidth="lg">
        <Layout />
        <Table /> 
      </Container>
    </ContextAPI>
    
    </>
  );
}

export default App;
