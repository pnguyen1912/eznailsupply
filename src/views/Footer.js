import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import customer from 'customer.json';


const useStyles = makeStyles(productStyle);

export default function FooterPage() {
  const classes = useStyles();

  return (
    <div className="cd-section">
      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.eznailsupplywi.com"
                    target="blank"
                    className={classes.block}
                  >
                    Ez Nail Supply
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              {customer.name}.
              All Rights Reserved.
            </div>
          </div>
        }
      />
    </div>
  );
}

