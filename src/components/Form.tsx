import {Box, TextField, Button, styled} from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom";

// import { getUserInfo } from "../services/Apis";


const TextFieldStyled = styled(TextField)`
    border-bottom: 4px solid #8752CC;
    color: #fff;
`

const Wrapper = styled(Box)`
    display:flex;
    flex-flow:column;
    margin-top:30px;
`

const SubmitButton = styled(Button)`
    margin-top:20px;
    background:#8752CC;
    font-weight:600
`

const IconSearch = styled('img')({    
        width:"12px",
        padding:'0',
        margin:'0',
        overflow:"clip"
})


const Form = () => {
    const [username,setUsername] = useState<string>('')

    // const submitHandle = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     const response = await getUserInfo(username);
    //     console.log(response)
    // }

    // console.log(username)

  return (
    <Wrapper>
        <TextFieldStyled placeholder="Enter user name" type="text" variant="standard" InputProps={{
            disableUnderline: true,       
            inputProps: {
                style: { textAlign: "center" },
            },     
            style:{
                width: '18.75rem',
                color:"#fff",
            }
            }}
            value={username}
            onChange={((e)=>{setUsername(e.target.value)})} 
        />
            {/* <SubmitButton variant="contained" onClick={(e)=>{submitHandle(e)}} > Search <IconSearch /> </SubmitButton> */}
            <SubmitButton variant="contained"> <Link to={`/${username}`} style={{color:"white",textDecoration:"none"}} >  Search <IconSearch src="search_icon.4fa6c507.svg" alt="search_icon"/> </Link></SubmitButton>
            
    </Wrapper>
  )
}

export default Form