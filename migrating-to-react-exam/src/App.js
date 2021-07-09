import React, {useEffect} from "react";
import './App.css';
import Layout from "./Components/Layout/Layout";
import OuterContact from "./Components/OuterContact/OuterContact";
import Portfolio from "./Components/Portfolio/Portfolio";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import $ from 'jquery';

function App() {

  useEffect(() => {
    navigation();
    projects();
  }, [])

  const navigation = () => {
    $('.primary-nav').css('height', $('.logo').height());
    $('.primary-nav li').css(
        'margin-top',
        ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
    );

    $(window).resize(function () {
      setTimeout(navigation, 500);
    });
  }

  const projects = () => {
    $('.luvtalk-project').css('height', $('.luvtalk-project').width());
    $('.luvtalk-project h3').css(
        'padding-top',
        ($('.luvtalk-project').height() -
            $('.luvtalk-project h3').height() -
            $('.luvtalk-project .row').outerHeight()) /
        2
    );
    $('.personal-website-project').css(
        'height',
        $('.personal-website-project').width()
    );
    $('.personal-website-project h3').css(
        'padding-top',
        ($('.personal-website-project').height() -
            $('.personal-website-project h3').height() -
            $('.personal-website-project .row').outerHeight()) /
        2
    );
    $('.strike-zone-project').css('height', $('.strike-zone-project').width());
    $('.strike-zone-project h3').css(
        'padding-top',
        ($('.strike-zone-project').height() -
            $('.strike-zone-project h3').height() -
            $('.strike-zone-project .row').outerHeight()) /
        2
    );
    var doit;
    $(window).resize(function () {
      clearTimeout(doit);
      doit = setTimeout(projects, 500);
    });
  }


  return (
      <Router>
        <Switch>
          <Route exact path='/'><Layout/></Route>
          <Route exact path='/index.html'><Layout/></Route>
          <Route exact path='/portfolio.html'><Portfolio/></Route>
          <Route exact path='/contact.html'><OuterContact/></Route>
        </Switch>
      </Router>
  );
}

export default App;
