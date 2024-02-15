import {Box, Grid, Card, CardContent, CardActions, Typography, styled, Chip} from "@mui/material"
import BookIcon from '@mui/icons-material/Book';

const IconBook = styled(BookIcon)`
    font-size:16px;
    padding-right:10px;
`
const Chipss = styled(Chip)`
    margin-left:15px;
`
const Action = styled(Box)`
    display:flex;
    flex-flow:row;
    justify-content:center
`

const Usercard = ({repos}) => {
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2}>

            {
                repos.map((rp)=>(
                    <Grid item xs={12} sm={4} key={rp.id}>
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} component="span" >
                                    <IconBook/>{rp.name}  <Chipss variant="outlined" label="Public" />
                                </Typography>
                                <Typography variant="h6" component="span">
                                    {rp.description ? rp.description : "No Description"}
                                </Typography>
                            </CardContent>
                            <CardActions style={{justifyContent:"center"}}>
                                <Action>
                                    <Box style={{display:"flex",paddingRight:"20px"}}>
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
                                    </Box>
                                </Action>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }



        </Grid>
    </Box>
  )
}

export default Usercard