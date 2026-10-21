export default function Saudacao(props){
    return (
    <div className="bg-black grid shadow-md w-[360px] text-white font-bold">
        <h1>Olá {props.nome}</h1>
    </div>
    )
}