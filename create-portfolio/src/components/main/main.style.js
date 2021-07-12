import styled from "styled-components";
import { Images } from "../../images/importExportImgs/index";

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
            rgba(20, 20, 20, 0.7),
            rgba(20, 20, 20, 0.7)
        ),
        url(${Images.AppleMainImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    color: white;
    display: flex;
    align-items: center;
`;

export const MainButtons = styled.section`
    display: flex;
    margin: 2rem 0;
    width: 300px;
    justify-content: space-around;
`;
