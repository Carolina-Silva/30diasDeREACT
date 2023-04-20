import '../styles/card.css'

const CardCountry = () => {
    return(
        <div className="card-country">
            <div className="img-box">
                <img src="https://flagcdn.com/br.svg" alt="flag country" />
            </div>
            <div className="info-box">
                <h4>Brasil</h4>
                <p><span>Capital:</span> Brasilia</p>
                <p><span>Language:</span>Portuguese</p>
                <p><span>Population:</span>43,562,452</p>
                <p><span>Currency:</span>R$</p>
            </div>
        </div>

    )
}

export default CardCountry;