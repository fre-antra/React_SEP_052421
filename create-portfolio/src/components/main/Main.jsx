import { Container, Row } from "react-bootstrap";
import { MainContainer, MainButtons } from "./main.style";
import { CenterInTheMiddleDirectColumn } from "../../common/style/utlis.style";
import { Button } from "../../common/style/buttons.style";

export const Main = () => {
    return (
        <MainContainer>
            <Container fluid>
                <Row>
                    <CenterInTheMiddleDirectColumn>
                        <h1 id="hello">Hello, I'm</h1>
                        <h1 id="name">Yasir H</h1>
                        <h1 id="person-description">
                            UI Developer. Problem Solver.
                        </h1>
                    </CenterInTheMiddleDirectColumn>
                </Row>
                <Row>
                    <CenterInTheMiddleDirectColumn>
                        <MainButtons>
                            <Button>info</Button>
                            <Button>portfolio</Button>
                        </MainButtons>
                    </CenterInTheMiddleDirectColumn>
                </Row>
            </Container>
        </MainContainer>
    );
};
