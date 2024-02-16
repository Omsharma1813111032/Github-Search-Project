import {Box, Grid, Container, styled} from "@mui/material"
import Header from "../components/Header"
import Profile from "../components/Profile"
import Usercard from "../components/Usercard"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserInfo, getUserRepos } from "../services/Apis"
import { AxiosResponse, AxiosError } from "axios"

const Wrapper = styled(Box)`
    margin-top:40px;
`

interface Params {
    name?:string
}


const User: React.FC<Params> = () => {

    const params = useParams()
    const username = params.name;

    const [userInfo,setUserInfo] = useState<string[]>([])
    const [repos,setRepos] = useState<string[]>([])

    const getData = async()=>{
        try{
            const response = await getUserInfo(username)
            const response1 = await getUserRepos(username);
            setUserInfo(response.data)
            setRepos(response1.data)

        }catch(err){
            alert(err)
        }
        
    }

    useEffect(()=>{
        getData()
    },[username])


    return (
    <Container style={{paddingBottom:"100px"}} >
        <Box>
            <Header/>
        </Box>
        <Wrapper sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                   <Profile userInfo = {userInfo} /> 
                </Grid>
                <Grid item xs={12}  sm={9}>
                   <Usercard repos = {repos} />
                </Grid>
            </Grid>
        </Wrapper>
       
    </Container>
  )
}

export default User