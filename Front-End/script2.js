/* //1 - Combine os reducers existentes com a função combineReducers e salve-o em uma constante.
const rootReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });


//2 - Crie uma store com a combinação dos reducers.
const store = Redux.createStore(rootReducer)


//3 - Crie actions que alterem o nome e o sobrenome dos estados iniciais, e adapte seu respectivo reducer.
const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
    switch (action.type) {
      case 'ALTERAR_PRIMEIRO_NOME_E_SOBRENOME':
        return {
          ...state,
          nome: action.nome,
          sobrenome: action.sobrenome,
        };
      default:
        return state;
    }
  };

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'ALTERAR_SEGUNDO_NOME_E_SOBRENOME':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };
    default:
      return state;
  }
};


//4.Crie dispatchs para alterar os nomes após alguns segundos depois que a página carregar. 
window.onload = () => {
    setTimeout(() => {
      store.dispatch({
        type: 'ALTERAR_PRIMEIRO_NOME_E_SOBRENOME',
        nome: 'Bruna',
        sobrenome: 'Santana Oliveira',
      });
      store.dispatch({
        type: 'ALTERAR_SEGUNDO_NOME_E_SOBRENOME',
        nome: 'Rodrigo',
        sobrenome: 'Santos da Silva',
      });
    }, 2000);
  };


 //5 - Adicione um store.subscribe() para atualizar as informações na página de acordo  com o que temos armazenado na store .
 // com o que temos armazenado na store . Quando a página carregar o nome renderizado deve ser alterado após alguns segundos.
 store.subscribe(() => {
    const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
    document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.nome;
    document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome;

    document.getElementById('nome-2').innerHTML = meuSegundoReducer.nome;
    document.getElementById('sobrenome-2').innerHTML = meuSegundoReducer.sobrenome;
  }); */


  console.log('teste')

  const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
    switch (action.type) {
      case 'ALTERAR_PRIMEIRO_NOME_E_SOBRENOME':
        return {
          ...state,
          nome: action.nome,
          sobrenome: action.sobrenome,
        };
      default:
        return state;
    }
  };

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'ALTERAR_SEGUNDO_NOME_E_SOBRENOME':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });

const store = Redux.createStore(rootReducer);

window.onload = () => {
  setTimeout(() => {
    store.dispatch({
      type: 'ALTERAR_PRIMEIRO_NOME_E_SOBRENOME',
      nome: 'Bruna',
      sobrenome: 'Santana Oliveira',
    });
    store.dispatch({
      type: 'ALTERAR_SEGUNDO_NOME_E_SOBRENOME',
      nome: 'Rodrigo',
      sobrenome: 'Santos da Silva',
    });
  }, 2000);
};

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome;

  document.getElementById('nome-2').innerHTML = meuSegundoReducer.nome;
  document.getElementById('sobrenome-2').innerHTML = meuSegundoReducer.sobrenome;
});