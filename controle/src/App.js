import React from "react";
import Header from "./componentes/Header";
import Resume from "./componentes/Header/Resume";
import GlobalStyle from "./styles/global";

const App = () => {
    return (
        <>
        <Header />
        <Resume />
        <GlobalStyle />
        </>
    );
};

export default App;