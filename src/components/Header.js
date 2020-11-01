import React from "react";
import { Box, Typography } from '@material-ui/core';

function Header() {
    return (
        <Box>
            <Typography style={{fontSize: 40, fontWeight: 40, paddingTop: 200, paddingLeft:100, color: 'white'}}>WELCOME TO OUR</Typography>
            <Typography style={{fontSize: 70, fontWeight: 90, paddingLeft:100, color: 'white'}}>SMART BOOK</Typography>

            {/*<Typography style={{fontSize: 50, fontWeight: 40, padding: 100}}>
                <Typed strings={["WELCOME TO"]} TypeSpeed={40} />
            </Typography>*/}
        </Box>
    );

}

export default Header;