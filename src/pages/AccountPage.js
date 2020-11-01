import React from "react";
import NavBar from '../components/NavBar';
import { Box, } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';


function AccountPage() {
    return (
        <Box height={952} style={{background: 'linear-gradient(#6EBFF3, #95E0F1, #A1EAF0, #D8F2F5, #E8F2F8)', }}> 
            <NavBar />
            <Box style={{alignItems:"center", display: 'flex', justifyContent: 'center',}}>        
                <Skeleton variant="rect" style={{alignItems:"center", marginTop: 140}} width={500} height={600} animation={false}>

                </Skeleton>
            </Box>
        </Box>
    );
}

export default AccountPage;