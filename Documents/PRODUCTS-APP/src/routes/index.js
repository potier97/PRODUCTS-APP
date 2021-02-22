import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
import NoFound from "../pages/noFound";
import Home from "../pages/home";
import Products from "../pages/products";  
import Product from "../pages/product";  
import NewProduct from "../pages/newProduct";  
//TARGETS
import { SnackbarProvider } from "notistack";

export default function Routes(props) {
  return ( 
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
          <Router >
            <Switch>
              <Route path="/newProduct/:id" component={NewProduct} {...props}/>
              <Route path="/product/:id" component={Product} {...props}/>
              <Route path="/products" component={Products} {...props}/>
              <Route exact path="/" component={Home} />
              <Route component={NoFound} />
            </Switch>
          </Router>
      </SnackbarProvider>
    </ThemeProvider> 
  );
} 
