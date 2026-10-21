import Janela from "./Janela";

export default function Casa(){
    return (
        <div>
            <h1>Minha casa</h1>
            <div>
                <h2>Sala</h2>
                <Janela largura="120px" altura="150px" cor="blue"></Janela>
                <Janela largura="120px" altura="150px" cor="blue"></Janela>
                <h2>Cozinha</h2>
                <Janela largura="13px" altura="50px" cor="red"></Janela>
                <Janela largura="12px" altura="20px" cor="red"></Janela>
                <h2>Quarto</h2>
                <Janela largura="150px" altura="200px" cor="green"></Janela>
                <Janela largura="180px" altura="120px" cor="green"></Janela>
            </div>
        </div>
    )
}