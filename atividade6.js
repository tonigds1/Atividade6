let biblioteca = [];

function cadastrarLivro() {
  const titulo = prompt('Digite o título do livro:');
  const autor = prompt('Digite o autor do livro:');
  const livro = {
    id: Math.floor(Math.random() * 1000), // Gera um id aleatório (simulação de identificador único)
    titulo,
    autor,
    emprestado: false
  };
  biblioteca.push(livro);
}

function alterarLivro() {
  exibirLivrosDisponiveis();
  const id = parseInt(prompt('Digite o id do livro que deseja alterar:'));
  const livro = biblioteca.find(livro => livro.id === id);

  if (livro) {
    const novoTitulo = prompt('Digite o novo título (ou pressione Enter para manter o atual):');
    const novoAutor = prompt('Digite o novo autor (ou pressione Enter para manter o atual):');

    if (novoTitulo !== '') {
      livro.titulo = novoTitulo;
    }

    if (novoAutor !== '') {
      livro.autor = novoAutor;
    }

    alert('Livro alterado com sucesso!');
  } else {
    alert('Livro não encontrado.');
  }
}

function deletarLivro() {
  exibirLivrosDisponiveis();
  const id = parseInt(prompt('Digite o id do livro que deseja deletar:'));
  const livroIndex = biblioteca.findIndex(livro => livro.id === id);

  if (livroIndex !== -1) {
    biblioteca.splice(livroIndex, 1);
    alert('Livro deletado com sucesso!');
  } else {
    alert('Livro não encontrado.');
  }
}

function realizarEmprestimo() {
  exibirLivrosDisponiveis();
  const id = parseInt(prompt('Digite o id do livro que deseja emprestar:'));
  const livro = biblioteca.find(livro => livro.id === id);

  if (livro) {
    if (livro.emprestado) {
      alert('Livro já emprestado.');
    } else {
      livro.emprestado = true;
      alert('Livro emprestado com sucesso!');
    }
  } else {
    alert('Livro não encontrado.');
  }
}

function exibirLivrosDisponiveis() {
  alert('Livros disponíveis para empréstimo:');
  for (const livro of biblioteca) {
    if (!livro.emprestado) {
      alert(`ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}`);
    }
  }
}

function exibirMenu() {
  while (true) {
    const escolha = prompt(`
      Menu:
      1. Cadastrar Livro
      2. Alterar Livro
      3. Deletar Livro
      4. Realizar Empréstimo de Livro
      5. Sair
    `);

    switch (escolha) {
      case '1':
        cadastrarLivro();
        break;
      case '2':
        alterarLivro();
        break;
      case '3':
        deletarLivro();
        break;
      case '4':
        realizarEmprestimo();
        break;
      case '5':
        return; // Encerra o programa
      default:
        alert('Opção inválida. Tente novamente.');
    }
  }
}

exibirMenu();
