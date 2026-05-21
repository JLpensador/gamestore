export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Qual dessas experiências parece mais divertida?",
    options: [
      {
        label: "Explorar um mundo gigantesco",
        types: {
          exploração: 3,
          mundoAberto: 2
        }
      },

      {
        label: "Vencer desafios difíceis",
        types: {
          desafiador: 4
        }
      },

      {
        label: "Relaxar depois de um dia cansativo",
        types: {
          relaxante: 4,
          casual: 2
        }
      },

      {
        label: "Competir e melhorar minhas habilidades",
        types: {
          competitivo: 4,
          ação: 1
        }
      }
    ]
  },

  {
    id: 2,
    question: "Qual ambiente você prefere?",
    options: [
      {
        label: "Fantasia medieval",
        types: {
          fantasia: 3,
          exploração: 1
        }
      },

      {
        label: "Cidade futurista cyberpunk",
        types: {
          história: 2,
          fps: 1,
          mundoAberto: 1
        }
      },

      {
        label: "Pistas e carros",
        types: {
          carros: 4,
          competitivo: 2
        }
      },

      {
        label: "Universos coloridos e rápidos",
        types: {
          velocidade: 3,
          ação: 1,
          anime: 3
        }
      }
    ]
  },

  {
    id: 3,
    question: "Você prefere jogar...",
    options: [
      {
        label: "Sozinho",
        types: {
          história: 2,
          exploração: 1
        }
      },

      {
        label: "Com amigos",
        types: {
          cooperativo: 4
        }
      },

      {
        label: "Contra outras pessoas",
        types: {
          competitivo: 4
        }
      },

      {
        label: "Tanto faz, desde que seja divertido",
        types: {
          casual: 2,
          relaxante: 1
        }
      }
    ]
  },

  {
    id: 4,
    question: "Qual estilo visual mais te agrada?",
    options: [
      {
        label: "Realista e cinematográfico",
        types: {
          história: 3,
          realista: 7
        }
      },

      {
        label: "Anime/JRPG",
        types: {
          anime: 10
        }
      },

      {
        label: "Pixel Art/Indie",
        types: {
          casual: 2,
          relaxante: 2
        }
      },

      {
        label: "Sombrio e pesado",
        types: {
          terror: 3,
          desafiador: 1,
          sombrio: 2
        }
      }
    ]
  },

  {
    id: 5,
    question: "O que mais importa em um jogo?",
    options: [
      {
        label: "História e personagens",
        types: {
          história: 4
        }
      },

      {
        label: "Gameplay divertida",
        types: {
          ação: 3
        }
      },

      {
        label: "Liberdade de exploração",
        types: {
          mundoAberto: 4,
          exploração: 2
        }
      },

      {
        label: "Rejogabilidade infinita",
        types: {
          desafiador: 2,
          competitivo: 2,
          fps: 1
        }
      }
    ]
  },

  {
    id: 6,
    question: "Qual dessas atividades parece mais divertida?",
    options: [
      {
        label: "Cuidar de uma fazenda",
        types: {
          relaxante: 4,
          casual: 2
        }
      },

      {
        label: "Derrotar chefes épicos",
        types: {
          desafiador: 4,
          ação: 2
        }
      },

      {
        label: "Correr em alta velocidade",
        types: {
          velocidade: 3,
          carros: 2
        }
      },

      {
        label: "Sobreviver com amigos",
        types: {
          terror: 2,
          cooperativo: 3,
          sombrio: 1
        }
      }
    ]
  },

  {
    id: 7,
    question: "Qual ritmo de jogo você prefere?",
    options: [
      {
        label: "Calmo e relaxante",
        types: {
          relaxante: 3
        }
      },

      {
        label: "Rápido e frenético",
        types: {
          velocidade: 3,
          ação: 2
        }
      },

      {
        label: "Equilibrado",
        types: {
          história: 2,
          exploração: 1
        }
      },

      {
        label: "Difícil e intenso",
        types: {
          desafiador: 4,
          sombrio: 1
        }
      }
    ]
  },

  {
    id: 8,
    question: "Qual jogo parece mais interessante?",
    options: [
      {
        label: "Um RPG gigantesco de fantasia",
        types: {
          fantasia: 3,
          exploração: 2,
          desafiador: 1
        }
      },

      {
        label: "Uma aventura emocional",
        types: {
          história: 4
        }
      },

      {
        label: "Um simulador de corrida",
        types: {
          carros: 4,
          competitivo: 2
        }
      },

      {
        label: "Um cooperativo caótico",
        types: {
          cooperativo: 4,
          casual: 1
        }
      }
    ]
  },

  {
  id: 9,
  question: "O que você faria primeiro em um jogo novo?",
  options: [
    {
      label: "Exploraria o mapa inteiro",
      types: {
        exploração: 4,
        mundoAberto: 2
      }
    },

    {
      label: "Iria direto para a história principal",
      types: {
        história: 4
      }
    },

    {
      label: "Tentaria dominar o combate",
      types: {
        ação: 3,
        desafiador: 2
      }
    },

    {
      label: "Chamaria amigos para jogar junto",
      types: {
        cooperativo: 4,
        casual: 1
      }
    }
  ]
},

{
  id: 10,
  question: "Qual sensação você busca ao jogar?",
  options: [
    {
      label: "Adrenalina e velocidade",
      types: {
        velocidade: 4,
        ação: 2
      }
    },

    {
      label: "Imersão em uma grande história",
      types: {
        história: 4,
        fantasia: 1
      }
    },

    {
      label: "Paz e conforto",
      types: {
        relaxante: 4,
        casual: 2
      }
    },

    {
      label: "Superar desafios impossíveis",
      types: {
        desafiador: 5
      }
    }
  ]
}
]