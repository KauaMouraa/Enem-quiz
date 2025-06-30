import { useEffect, useState } from "react";
import { API } from "../services/API";

const Pergunta = () => {
  const [quest, setQuest] = useState(null);
  const [resposta, setResposta] = useState(null);

  const ano = 2020;
  const numero = 31;

  async function getQuest() {
    try {
      const response = await API.get(`/exams/${ano}/questions/${numero}`);
      setQuest(response.data);
    } catch (error) {
      console.log("Erro ao buscar a questão", error);
    }
  }

  useEffect(() => {
    getQuest();
  }, []);

  if (!quest) {
    return <p>Carregando...</p>;
  }

  function escolher(letra) {
    setResposta(letra);
  }

  return (
    <div>
      <h2>{quest.title}</h2>

      {quest.files && quest.files.map((img, i) => (
        <img key={i} src={img} alt="imagem da questão" width="300" />
      ))}

      <p>{quest.alternativesIntroduction}</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {quest.alternatives.map((alt) => (
          <li key={alt.letter} style={{ marginBottom: '10px' }}>
            <button
              onClick={() => escolher(alt.letter)}
              style={{
                padding: '10px',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <span>{alt.letter}){alt.text}</span>
            </button>
          </li>
        ))}
      </ul>

      {resposta && (
        <p>
          Você escolheu a letra: <strong>{resposta}</strong><br />
          A alternativa correta é: <strong>{quest.correctAlternative}</strong><br />
          {resposta === quest.correctAlternative ? (
            <span style={{ color: "green"}}>Você acertou!</span>
            ) : (
              <span style={{ color: "red"}}>Você errou.</span>
          )}
        </p>
      )}

    </div>
  );
};

export default Pergunta;