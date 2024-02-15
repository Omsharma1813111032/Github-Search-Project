import Landing from "./pages/Landing"
import {Box,styled} from "@mui/material"
import {Routes,Route} from "react-router-dom"
import User from "./pages/User"
import Error from "./pages/Error"

const Main = styled(Box)`
  width:95vw;
  height:95vh;
`

function App() {

  return (
    <Main>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/:name" element={<User/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Main>
  )
}

export default App
