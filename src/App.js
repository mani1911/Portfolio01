import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
      </Box>
    </BrowserRouter>
  );
}

export default App;
