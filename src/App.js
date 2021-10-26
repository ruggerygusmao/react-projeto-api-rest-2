import './App.css';
import api from "./services/api";
import { useState } from 'react';

function App() {

  const [data, setData] = useState('');
  const [cep, setCep] = useState('');
  
  function atribuirCep(e){
    e.preventDefault();
    setCep(e.target.value);
  }

  function consultarCep() {
    let url = cep + "/json";
    console.log(cep);
    api.get(url).then((response) => {
          let objeto = response.data;  
          setData(objeto);
      }).catch((err) => {       
        setData("Sinto muito mas não foi possível encontrar os dados do CEP informado.");
      });
    }

  return (
    <div className="App">
          <div className="busca">
          <h1>Consultar Cep</h1>
            <input onChange={atribuirCep} type="number" name="cep"  />
            <button onClick={consultarCep}>Buscar</button>
          </div>
          {data &&
          <div name="resultado">
          
            <div className="content1">
              <h1>CEP: {data.cep}</h1>
              <p>{data.localidade}</p>
  
            </div>
              <div className="content2">
             
                <ul>
                  <li><b>Logradouro:</b> {data.logradouro}</li>
                  <li><b>CEP:</b> {data.cep}</li>
                  <li><b>Bairro:</b> {data.bairro}</li>
                </ul>

                <ul>
                  <li><b>Cidade:</b> {data.localidade}</li>
                  <li><b>UF:</b> {data.uf}</li>
                  <li><b>DDD:</b> {data.ddd}</li>
                </ul>
              </div> 
             
            </div>
             }
        </div>
  );
}

export default App;
