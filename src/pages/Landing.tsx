import Form from "../components/Form"
import {Box, styled, Typography} from "@mui/material"


const Wrapper = styled(Box)`
    overflow:hidden;
    display:flex;
    flex-flow:column wrap;
    align-items:center;
    justify-content:center;
    height:90%;
`

const SearchText = styled(Typography)`
    color:#8752CC;
    font-size:1.6rem;
    letter-spacing: 0.4rem;
`


const Landing = () => {
  return (
    <Wrapper>
        <Box>
            <img src="Github_logo.acf6d4da.svg" alt="github_logo" />
        </Box>
        <Box style={{margin:'30px 0 0 0'}} >
            <img src="Github_write.1d28a75f.svg" alt="github_text" />
        </Box>
        <Box>
            <SearchText fontWeight={700}>Search</SearchText>
        </Box>
        <Box>
            <Form />
        </Box>
    </Wrapper>
  )
}

export default Landing