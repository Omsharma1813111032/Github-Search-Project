import {Box, Grid, Card, CardContent, Typography, styled, Chip} from "@mui/material"
import BookIcon from '@mui/icons-material/Book';

const IconBook = styled(BookIcon)`
    font-size:16px;
    padding-right:10px;
`
const Chipss = styled(Chip)`
    margin-left:15px;
`
// style={{justifyContent:"center",marginTop:"auto"}}
const ICONS = styled(Box)`
    margin-top: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 18px;
`
const Span = styled('span')({
    display:"flex",
    alignItems:"center",
    gap:"6px",
    padding:"15px"
})

const CARD = styled(Card)`
    display:flex;
    flex-direction:column;
    padding:15px;
    min-height:210px;
`

const Usercard = ({repos}) => {

  return (
    <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2}>

            {
                repos.map((rp:string)=>(
                    <Grid item xs={12} sm={4} key={rp.id}>
                        <CARD>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} component="span" >
                                    <IconBook/>{rp.name.substring(0, 10)}... <Chipss variant="outlined" label="Public" /><br/>
                                </Typography>
                                <Typography variant="h6" component="span">
                                    {rp.description ? rp.description.substring(0, 35) : "No Description"}
                                </Typography>
                            </CardContent>
                            <ICONS> 
                                    <Span>
                                        <img src="star.eb224df0.svg" alt="watchers" />0
                                    </Span>
                                    <Span>
                                        <img src="branch-icon.24fb2a85.svg" alt="forks" />0
                                    </Span>
                                    <Span>
                                        <img src="star.eb224df0.svg" alt="paper-code.f7875364.svg" />0
                                    </Span>
                            </ICONS>
                        </CARD>
                    </Grid>
                ))
            }



        </Grid>
    </Box>
  )
}

export default Usercard




{/* <Box style={{display:"flex",paddingRight:"20px"}}>
                                        <img src="branch-icon.24fb2a85.svg" alt="branchIcon" />
                                        <Typography>0</Typography>
                                    </Box>
                                    <Box style={{display:"flex",paddingRight:"20px"}}>
                                        <img src="star.eb224df0.svg" alt="starIcon" />
                                        <Typography>0</Typography>
                                    </Box>
                                    <Box  style={{display:"flex"}}>
                                        <img src="paper-code.f7875364.svg" alt="papericon" />
                                        <Typography>{rp.language}</Typography>
                                    </Box> */}