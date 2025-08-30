
// export default App;
// Importações de bibliotecas e componentes
import { useState,  } from "react"; // Hooks do React
import { Routes, Route, } from "react-router-dom"; // Roteamento
import Header from "../components/Header/Header.jsx"; // Componente do cabeçalho
import Main from "../../src/components/Main/Main.jsx"; // Componente principal
import Footer from "../components/Footer/Footer.jsx"; // Componente do rodapé


function App() {
   // Dados do usuário atual
  const [loggedIn, setLoggedIn] = useState(false); // Verifica se o usuário está logado
 

  // Estados para controlar o popup e a lista de locais
  const [popup, setPopup] = useState(null); // Controla qual popup está aberto
  const [cards, setCards] = useState([]); // Lista de locais (cards)

  

  // Função para abrir um popup
  function handleOpenPopup(popup) {
    setPopup(popup); // Define qual popup será aberto
  }

  // Função para fechar o popup
  function handleClosePopup() {
    setPopup(null); // Fecha o popup
  }


  


  // Renderização do componente
  return (
   
      <div className="page">
        <Routes>
          {/* Rota protegida para a página inicial */}
          <Route
            path="/"
            element={
              
                  <>
                    <Header loggedIn={loggedIn} onLogout={null} />{" "}
                    {/* Cabeçalho */}
                    <Main
                      popup={popup}
                      cards={cards}
                      handleCardDelete={null}
                      handleCardLike={null}
                      handleClosePopup={handleClosePopup}
                      handleOpenPopup={handleOpenPopup}
                    />
                    <Footer /> {/* Rodapé */}
                  </>
                }
                loggedIn={loggedIn}
          />
          {/* Rota para a página de login */}
          <Route
            path="/login"
            element={
              <>
                <Header text="Se inscreva" />
              </>
            }
          />
          {/* Rota para a página de registro */}
          <Route
            path="/register"
            element={
              <>
                <Header text="Entrar" />
                
              </>
            }
          />
        </Routes>
        {/* Componente principal */}

        
      </div>
   
  );
}

export default App; // Exporta o componente App