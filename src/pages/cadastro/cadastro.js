import { useState } from "react";
import "./cadastro.css";

function Cadastro() {

    const [cadastroForm, setCadastroForm] = useState({
        email: '',
        nome: '',
        cep: '',
        senha: ''
    });

    //e = event (evento disparador pelo input "element")
  const hdInput = (e) => {
    console.log(e.target.name + ' => ' + e.target.value);
    if (e.target.name == 'cep') {
        console.warn('validar cep');
    }
  };

  const hdCadastrar = (e) => {
    e.preventDefault();
    console.warn('enviando o formulário...');

    fetch('localhost:4200/cadastrar')
    .then(
        res => {
            console.log('Cadastro realizado com sucesso');
        }
    ).catch(
        error => {
            console.error(e);
        }
    )
  }

  return (
    <div className="page-cadastro">
      <h3>Cadastro</h3>

      <form method="POST" onSubmit={hdCadastrar}>
        <div className="form-ctrl">
          <label>Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={hdInput}
          />
        </div>
        <div className="form-ctrl">
          <label>Nome</label>
          <input
            className="form-input"
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            onChange={hdInput}
          />
        </div>
        <div className="form-ctrl">
          <label>CEP</label>
          <input
            className="form-input"
            type="text"
            name="cep"
            placeholder="Digite seu CEP"
            maxLength="8"
            onChange={hdInput}
          />
        </div>
        <div className="form-ctrl">
          <label>Senha</label>
          <input
            className="form-input"
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            onChange={hdInput}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
