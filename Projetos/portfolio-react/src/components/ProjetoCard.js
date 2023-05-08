import "../styles/ProjetoCard.css";

const ProjetoCard = () => {
  return (
    <div className="card">
        <div className="card-img">
            <img src="/" alt="imagem do projeto" />
        </div>
        <div className="card-info">
            <h2>Titulo card</h2>
            <p>descrição projeto</p>
            <a href="/">Ver main</a>
        </div>
    </div>

  );
};

export default ProjetoCard;