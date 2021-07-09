import "./main.css";
export const Main = () => {
    return (
        <div class="main">
            <div class="container-fluid">
                <div class="row text-center">
                    <div class="entry-banner ">
                        <h1 id="hello">Hello, I'm</h1>
                        <h1 id="name">Yasir Hassan</h1>
                        <h1 id="person-description">
                            Software Developer. Problem Solver.
                        </h1>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="banner-buttons">
                        <div class="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                            <a class="btn btn-default btn-border" href="#about">
                                Info
                            </a>
                        </div>

                        <div class="col-sm-1 col-md-1">
                            <a
                                class="btn btn-default btn-border"
                                href="#projects"
                            >
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
