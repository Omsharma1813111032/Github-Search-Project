
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

const Profile = ({userInfo}) => {
  return (
    <Box>  
        <Box>
            <Image src={userInfo.avatar_url} />
        </Box>
        <Textgraph>
            <Typography>Om Sharma</Typography>
            <Typography>@{userInfo.login}</Typography>
            <Location>
                <Typography>
                    {
                        userInfo.company ? userInfo.company : "No company"
                    }
                </Typography>
                <Typography>{userInfo.location}</Typography>
            </Location>
        </Textgraph>
    </Box>
  )
}

export default Profile