## Desafio Técnico - Busca de Super Heróis

### Sobre o Projeto
Este projeto foi desenvolvido como parte de um desafio técnico. Ele consiste em uma aplicação web que permite aos usuários buscar informações sobre super heróis utilizando a API da Marvel. A aplicação oferece diversas funcionalidades, incluindo busca por nome de super herói, feedbacks visuais durante o carregamento e tratamento de erros, entre outros recursos.

### Instruções de Execução
Para executar o projeto localmente, siga as instruções abaixo:

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone o repositório do projeto para o seu ambiente local.
3. Navegue até o diretório raiz do projeto.
4. Execute o comando `npm install` para instalar todas as dependências do projeto.
5. Após a instalação das dependências, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
6. Acesse a aplicação em seu navegador através do endereço `http://localhost:3000`.

### Principais Métodos e Componentes

#### `Home` Container
Este componente representa a página principal da aplicação. Ele inclui a barra de busca e a exibição dos resultados da busca.

#### `Secondarycard` Component
O componente `secondarycard` é responsável por exibir os detalhes de um super herói específico. Ele é acessado através da rota `/:id`.

#### Feedbacks Visuais
- **Feedback de Carregamento:** Durante a busca de dados do super herói, é exibido um indicador de carregamento para informar ao usuário que a aplicação está trabalhando.
- **Feedback de Erro:** Caso a busca não retorne resultados ou ocorra algum erro durante o processo, a aplicação exibe uma mensagem de erro para o usuário.

### Premissas Assumidas
Durante o desenvolvimento deste projeto, foram feitas as seguintes premissas:
- Utilização da API da Marvel para obter os dados dos super heróis.
- Utilização de bibliotecas como React Router DOM para gerenciar a navegação na aplicação.
- Implementação de feedbacks visuais para melhorar a experiência do usuário durante a interação com a aplicação.

### Considerações Finais
Este projeto foi desenvolvido utilizando o Trello como ferramenta de gerenciamento de projeto, onde as tarefas foram organizadas em quadros e listas para melhorar a eficiência e a organização durante o desenvolvimento.
[link_do_repositório](https://trello.com/b/HdR2tYqI/marvel-api).

### Repositório do Projeto
O código fonte deste projeto está disponível em um repositório público no GitHub. Você pode acessá-lo através do seguinte link: [link_do_repositório](https://github.com/danilobrayann/marvel-api).

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato. Agradeço pela oportunidade de participar deste desafio e estou à disposição para mais esclarecimentos durante a apresentação.

Atenciosamente,
[Danilo Souza Santos]
