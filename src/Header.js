import React from "react";
import { Box, Typography } from '@material-ui/core';

function Header() {
    return (
        <Box>
            <Typography style={{fontSize: 50, fontWeight: 40, padding: 100}}>WELCOME TO</Typography>
            <Typography style={{fontSize: 50, fontWeight: 40, paddingLeft:100}}>SMART BOOK</Typography>

            {/*<Typography style={{fontSize: 50, fontWeight: 40, padding: 100}}>
                <Typed strings={["WELCOME TO"]} TypeSpeed={40} />
            </Typography>*/}
        </Box>
    );

}

export default Header;