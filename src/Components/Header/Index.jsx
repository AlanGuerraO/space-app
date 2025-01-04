import styled from "styled-components";
import CampoTexto from "../CampoTexto/Index";

const HeaderStyle = styled.header`
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Header = () => {
    return <HeaderStyle>
        <img src="imagenes/logo.png" alt="Logo de la aplicacion Space App"/>
        <CampoTexto placeholder="¿Qué estás buscando?"/>
    </HeaderStyle>
};

export default Header;