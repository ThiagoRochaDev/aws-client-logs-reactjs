import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Assignment from "@material-ui/icons/Assignment";
import Backup from "@material-ui/icons/Backup";
import DeleteSweep from "@material-ui/icons/DeleteSweep";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FormGet from './FormGet';
import FormPut from './FormPut';
import FormDelete from './FormDelete';
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  
  
  
  return (
    <div>
      
      <Parallax style={{ height: `120px ` }} small filter image={require("assets/img/profile-bg.jpg")}  />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container} >
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
               
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Log List",
                      tabIcon: Assignment ,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                            <FormGet justify="center"></FormGet>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Log Edit",
                      tabIcon: Backup,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                         <FormPut></FormPut>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Log Delete",
                      tabIcon: DeleteSweep,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            
                          <FormDelete></FormDelete>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
