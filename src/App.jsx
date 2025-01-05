import styled from "styled-components"
import GlobalStyles from "./Components/GlobalStyles"
import Header from "./Components/Header/Index"
import MenuLateral from "./Components/MenuLateral"

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <Header />
        <MenuLateral />
      </FondoGradiente>
    </>
  )
}

export default App
