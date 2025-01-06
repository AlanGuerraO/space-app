import styled from "styled-components";

const FigureStyles = styled.figure`
    background-image: ${props => `url(${props.$fondo})`};
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-grow: 1;
    align-items: center;
    max-height: 328px;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;

    h1 {
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        color: #ffffff;
        max-width: 300px;
        padding: 0 64px;
    }
`;

const Banner = ({ fondo, titulo }) => {
    return (
        <FigureStyles $fondo={fondo}>
            <h1>{titulo}</h1>
        </FigureStyles>
    );
};

export default Banner;
