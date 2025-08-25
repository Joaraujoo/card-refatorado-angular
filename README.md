# Card Refatorado em Angular

Este projeto foi desenvolvido inicialmente em um único arquivo index.html.
Posteriormente, ele foi refatorado em Angular, separando a aplicação em componentes reutilizáveis, com o objetivo de:

Melhorar a organização e estrutura do código

Facilitar a manutenção e evolução do projeto

Aplicar boas práticas de componentização no Angular

## Estrutura

Na versão refatorada, cada parte da aplicação foi dividida em componentes Angular, permitindo maior clareza e escalabilidade do código.

<img width="1375" height="835" alt="Screenshot 2025-08-24 204730" src="https://github.com/user-attachments/assets/1b67a5f5-4577-41d6-9e91-0c1a067673fc" />

## Desafios
Fiquei pensando em como estilizar o background color do header do componente title, que seria reutilizado nos outros componentes. Pois os cards podiam ter duas variações de cor (laranja ou ciano). Minha primeira ideia foi passar a cor via @Input. Isso funcionaria bem com poucos componentes, mas imagine se o projeto crescesse para 30 ou 40 cards: cada um teria que receber a cor manualmente, o que dificultaria muito a manutenção. Depois de pensar, optei por usar a diretiva ngStyle, que no momento, com o conhecimento que tenho de Angular, se mostrou a solução mais viável.

