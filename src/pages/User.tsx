import {Box, Grid, Container, styled} from "@mui/material"
import Header from "../components/Header"
import Profile from "../components/Profile"
import Usercard from "../components/Usercard"


const Wrapper = styled(Box)`
    margin-top:70px;
`

const User = () => {
  return (
    <Container >
        <Box>
            <Header/>
        </Box>
        <Wrapper sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                   <Profile /> 
                </Grid>
                <Grid item xs={12}  sm={9}>
                   <Usercard/>
                </Grid>
            </Grid>
        </Wrapper>
       
    </Container>
  )
}

export default User