import React from "react";
import clsx from "clsx";

import { Link, useHistory, useLocation } from "react-router-dom";
import { Grid, Card, CardActions, CardContent, Paper, AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItemIcon, ListItemText, ListItem, Container} from '@material-ui/core';
import NavBar from './NavBar';
import { makeStyles } from "@material-ui/core/styles";


function MyBook() {

    const useStyles = makeStyles((theme) => ({
        cardRoot: {
          width: 200,
          height: 200,
          margin: 30
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },

        root: {
            flexGrow: 1,
            margin: 70
          },
          paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
      }));

      
      const classes = useStyles();
      const bull = <span className={classes.bullet}>•</span>;
    
      return (
          <div>
              <NavBar />
              <div className={classes.root}>
                <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}><Typography inline variant='h6' align="left">Title_1</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="right">Due Oct 25, 2020</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="left">Author_1</Typography></Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align='right' style={{color:'red'}}>Overdue: 0 days</Typography></Grid>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align="right" style={{color:'red'}}>Fine:$0.00</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}><Typography inline variant='h6' align="left">Title_2</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="right">Due Oct 28, 2020</Typography></Grid>
                            <Grid item xs={6}><Typography inline variant='body1' align="left">Author_2</Typography></Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align='right' style={{color:'red'}}>Overdue: 3 days</Typography></Grid>
                                    <Grid item xs={12}><Typography inline variant='subtitle2' align="right" style={{color:'red'}}>Fine:$0.75</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>             
            </Grid>
          </div>
          </div>
        
      );
    

}

export default MyBook;


/*
<Typography color="textSecondary" gutterBottom>
                    Title_1
                    </Typography>   
*/


/*

<div>
            <NavBar />
            <div style={{marginTop:25, marginLeft: 25}}>
                <h1>My Book</h1>
            </div>
            <div>
                <h3>hello</h3>
            </div>

        </div>
*/

/*

const useStyles = makeStyles((theme) => ({
        depositContext: {
          flex: 1,
        },
        toolbar: {
          display: "flex",
          justifyContent: "space-between",
        },
        balance: {
          display: "flex",
        },
        balanceItem: {
          marginRight: "40px",
        },



        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
          },
          toolbarIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar,
          },
         
          menuButton: {
            marginRight: 36,
          },
          menuButtonHidden: {
            display: "none",
          },
          title: {
            flexGrow: 1,
          },
          paper: {
            padding: theme.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
          },
          fixedHeight: {
            height: 300,
          },
          balanceCard: {
            height: 200,
          },
      }));

      const classes = useStyles();

      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const balancePaper = clsx(classes.paper, classes.balanceCard);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    return (

        <>
      <NavBar />
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} lg={8}>
            <Paper className={balancePaper}>


            <React.Fragment>

<div className={classes.toolbar}>
    <h4>Balance</h4>

<Button
  edge="end"
  variant="outlined"
  color="primary"
  onClick={() => {
    //addRandomExpense();
  }}
>
  Add expense
</Button>
</div>
<div className={classes.balance}>
<div className={classes.balanceItem}>
  <Typography component="p" variant="h3">$money
  </Typography>
  <Typography color="textSecondary" className={classes.depositContext}>
      Date format
  </Typography>
  <div>
    <Link color="primary" href="#">
      View balance
    </Link>
  </div>
</div>
<div className={classes.balanceItem}>
  <Typography component="p" variant="h5">
      $money2
  </Typography>
  <Typography color="textSecondary" className={classes.depositContext}>
    Withdrawls
  </Typography>
  <div>
    <Link color="primary" href="#">
      View balance
    </Link>
  </div>
</div>
<div className={classes.balanceItem}>
  <Typography component="p" variant="h5">
    $money3
  </Typography>
  <Typography color="textSecondary" className={classes.depositContext}>
    Deposits
  </Typography>
  <div>
    <Link color="primary" href="#" >
      View balance
    </Link>
  </div>
</div>
</div>  
</React.Fragment>
              </Paper>
              </Grid>
              <Grid item xs={12} md={5} lg={4}>
                <Paper className={balancePaper}>
                  <h2>box2</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Paper className={fixedHeightPaper}>
                </Paper>
              </Grid>
              <Grid item xs={12} md={5} lg={4}>
                <Paper className={fixedHeightPaper}>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
            </Box>
        </>
    
    
            
                
    
        );

*/