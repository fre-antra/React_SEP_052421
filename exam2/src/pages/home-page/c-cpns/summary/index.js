import React, { memo } from 'react';

import developerdesign from '../../../../assets/images/developerdesign.svg';
import responsivedesign from '../../../../assets/images/responsivedesign.svg';
import innovativesolutions from '../../../../assets/images/innovativesolutions.svg';
import passion from '../../../../assets/images/passion.svg';

import { SummaryWrapper } from './style';

export default memo(function Summary() {
    return (
        <SummaryWrapper className="summary">
            <div className="container-fluid">
                <div className="row">
                    <div className="development-summary">
                        <div >
                            <div className="development-img">
                                <img className="img-responsive" src={developerdesign} alt="icon"/>
                            </div>
                        </div>

                        <div >
                            <div className="development-description">
                                <h3>Development and Design</h3>
                                <p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
                            </div>
                        </div>
                    </div>

                    <div className="responsive-summary">
                        <div>
                            <div className="responsive-img">
                                <img className="img-responsive" src={responsivedesign} alt="icon"/>
                            </div>
                        </div>

                        <div >
                            <div className="responsive-description">
                                <h3>Responsive Layouts</h3>
                                <p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="ideas-summary">
                        <div >
                            <div className="idea-img">
                                <img className="img-responsive" src={innovativesolutions} alt="icon"/>
                            </div>
                        </div>

                        <div >
                            <div className="idea-description">
                                <h3>Ideas and Solutions</h3>
                                <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
                            </div>
                        </div>
                    </div>

                    <div className="passion-summary">
                        <div>
                            <img className="img-responsive" src={passion} alt="icon"/>
                        </div>

                        <div >
                            <div className="passion-description">
                                <h3>Passion and Dedication</h3>
                                <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SummaryWrapper>
    )
})
