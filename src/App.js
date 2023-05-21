import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Box
      className="App"
      id="home"
      backgroundPosition="center"
      bg="blackAlpha.900"
      backgroundRepeat="no-repeat"
      bgImage="url('/bgimage.webp')"
      bgSize="cover"
      bgAttachment="fixed"
    >
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
