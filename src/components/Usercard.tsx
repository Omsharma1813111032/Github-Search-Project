import {Box, Grid, Card, CardContent, CardActions, Typography, styled, Chip} from "@mui/material"
import BookIcon from '@mui/icons-material/Book';

const IconBook = styled(BookIcon)`
    font-size:16px;
    padding-right:10px;
`
const Chipss = styled(Chip)`
    margin-left:15px;
`

const Usercard = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} >
                            <IconBook/>Blog_app  <Chipss variant="outlined" label="Public" />
                        </Typography>
                        <Typography variant="h5" component="div">
                            Description
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Usercard