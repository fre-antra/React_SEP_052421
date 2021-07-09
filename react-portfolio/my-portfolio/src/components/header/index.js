import React from 'react'
import {
    BrowserRouter,
    Route,
    Link
} from "react-router-dom";
  
  import Contact from '../../pages/contact'
  import Home from '../../pages/home'
  import Portfolio from '../../pages/portfolio'
  

export default function Header() {
    return (
		<div >
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						
					</div>
					<div class = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                            <div class="primary-nav">
                            <BrowserRouter>
                                <div class = "navigation">
                                <Link to="/">Home</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="/contact">Contact</Link>
                                </div>

                                <Route exact path="/" component={Home} />
                                <Route path="/portfolio" component={Portfolio} />
                                <Route path="/contact" component={Contact} />
                        </BrowserRouter>
						</div>
					</div>
				</div>
			</div>
		</div>

    )
}
