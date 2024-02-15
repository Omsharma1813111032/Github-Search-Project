
import {Box, styled, Typography} from "@mui/material"


const Image = styled('img')({
    width:'200px',
    borderRadius:"250%"
})

const Textgraph = styled(Box)`
    color:rgb(178,178,178);
    margin-top:20px
`
const Location = styled(Box)`
    margin-top:40px;
`

const Profile = () => {
  return (
    <Box>  
        <Box>
            <Image src="../../public/73094136.png" />
        </Box>
        <Textgraph>
            <Typography>Om Sharma</Typography>
            <Typography>@Omsharma1813111032</Typography>
            <Location>
                <Typography>Krishna Engineering Colllege</Typography>
                <Typography>Uttar Pardesh, Ghaziabad</Typography>
            </Location>
        </Textgraph>
    </Box>
  )
}

export default Profile