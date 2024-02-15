import {Box, styled} from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
    margin-top:30px;
    display:flex;
    justify-content:space-between;
`

const ArrowIcon = styled(ArrowBackIcon)`
    font-size:40px;
`


const Header = () => {
  return (
    <Wrapper>
        <Box>
            <img  src="Header_logo.png" alt="Headericon"/>
        </Box>
        <Box>
            <Link to="/" >
                <ArrowIcon />
            </Link>
        </Box>
    </Wrapper>
  )
}

export default Header