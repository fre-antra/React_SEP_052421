import styled from 'styled-components';

export const SummaryWrapper = styled.div`
    img {
        width: 61.88px;
    }

    .row {
        .development-summary {
            width: 50%;
            display: flex;
            justify-content: space-around;
        }
        .development-description {
            max-width: 370px;
        }

        .responsive-summary {
            width: 50%;
            display: flex;
            justify-content: space-around;
        }
        .responsive-description {
            max-width: 370px;
        }

        .ideas-summary {
            width: 50%;
            display: flex;
            justify-content: space-around;
        }
        .ideas-description {
            max-width: 370px;
        }

        .passion-summary {
            width: 50%;
            display: flex;
            justify-content: space-around;
        }
        .passion-description {
            max-width: 370px;
        }
    }
    @media(max-width: 500px) {
        .row {
            .development-summary {
                width: 100%;
            }
            .development-description {
                max-width: 100%;
            }

            .responsive-summary {
                width: 100%;

            }
            .responsive-description {
                max-width: 370px;
            }

            .ideas-summary {
                width: 100%;

            }
            .ideas-description {
                max-width: 370px;
            }

            .passion-summary {
                width: 100%;
            }
            .passion-description {
                max-width: 370px;
            }
        }
    }
`