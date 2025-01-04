import styled from "styled-components";

const StyleCampoTexto = styled.div`
    position: relative;
    display: inline-block;

    input {
        height: 56px;
        padding: 12px 16px;
        border-radius: 10px;
        border: 2px solid;
        border-color: #c98cf1;
        background: transparent;
        box-sizing: border-box;
        width: 566px;
        color: #d9d9d9;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }

    img {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 32px;
        width: 32px;
    }
`;

const CampoTexto = (props) => {
    const { type, placeholder } = props;

    return (
        <StyleCampoTexto>
            <input type={type} placeholder={placeholder} />
            <img src="iconos/search.png" alt="Icono de una lupa" />
        </StyleCampoTexto>
    );
};

export default CampoTexto;
