import { small } from "framer-motion/client";

export const GAMES = [
  {
    id: 1, 
    title: "Elden Ring", 
    genre: "RPG", 
    platform: "PC/PS5/Xbox", 
    price: 249.9,
    rating: 10, 
    tags: ["open-world", "hardcore", "fantasy", "singleplayer"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflowgames.gg%2Fwp-content%2Fuploads%2F2023%2F07%2F9edf816d-5625-45d2-9ef6-8b2ae65bb7eaCover_Elder-Ring.webp&f=1&nofb=1&ipt=1d808ac5f0bac7eafc7b1266ad82e74e52e92097c756e77d616a4cbfde8796f5c&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2022%2F02%2Felden-ring-review-98.jpg&f=1&nofb=1&ipt=43e84d71827983a4f57b422e0b75830a5040795c0f4a3b5b8a4246174b12ad17e9c&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.escapistmagazine.com%2Fwp-content%2Fuploads%2F2022%2F02%2FFLz1p-8VgAM0BYk.jpg&f=1&nofb=1&ipt=2e2d32441726e9aecb1dc9d9b90a78d9619a54809324016a7c3922ddff49eee4c&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2024%2F11%2Felden-ring-malenia-boss-cutscene-intro-and-second-form.jpg%3Fq%3D70%26fit%3Dcrop%26dpr%3D1&f=1&nofb=1&ipt=f68eacb5398e05632f516f2be16baff794539cc4a1cd340abac23cd1c84f4c46",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F03%2FWhy-Elden-Rings-World-Is-Called-The-Lands-Between-Open-World-Map.jpg&f=1&nofb=1&ipt=72a42d1d732de6a889a033ce99bbc971aba1d10fdddc3624cff6c43bfd4c6cfc"
    ],
    storage: "60 GB",
    ageRating: "16+",
    gameMode: "Single-player / Co-op Online",
    description: "Um dos RPGs de ação mais aclamados de todos os tempos, o jogo transporta o jogador para as Vastidões Intermédias, um vasto mundo de fantasia sombria criado por Hidetaka Miyazaki e George R. R. Martin. Com total liberdade de exploração, você deve enfrentar semideuses em combates desafiadores, descobrir segredos em masmorras complexas e dominar diversas armas e magias para restaurar o Anel Prístino e se tornar o Lorde Prístino.",
    smallDescription: "Explore um universo de fantasia sombria desafiador criado por Hidetaka Miyazaki e George R. R. Martin.",
    mood: ["desafiador", "exploração", "singleplayer"], 
    badge: "GOTY",
    features: [
      "Mundo aberto massivo com total liberdade de exploração",
      "Combate técnico desafiador baseado em atributos e builds",
      "Sistema de invocação de espíritos e cooperação online"
    ]
  },

  {
    id: 2, 
    title: "It Takes Two", 
    genre: "Cooperativo", 
    platform: "PC/PS5/Xbox", 
    price: 149.9,
    rating: 9.0, 
    tags: ["co-op", "plataforma", "casual", "história"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthfvnext.bing.com%2Fth%2Fid%2FOIP.w1uVTK_vstAl43LarPRUcgHaEK%3Fcb%3Dthfvnextfalcon%26pid%3DApi&f=1&ipt=a613821b150ffe4e6456a4f9d56255b3d078471b454ec50c9eba0eaa3ba82063&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fap%2Frnd%2F202209%2F0715%2FF5eEObxhgwDi8eEdvYMFhSxB.jpg&f=1&nofb=1&ipt=8455498e34ac75e7289618ac34e8888a50ccc490f671b98195436e199c71128b&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamingbolt.com%2Fwp-content%2Fuploads%2F2021%2F03%2FIt-Takes-2-1.jpg&f=1&nofb=1&ipt=aa9cf6622a09c0d59117b17ac1c5cd4f717553ce9d80cefa906cf77080684595&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthfvnext.bing.com%2Fth%2Fid%2FOIP.ZzZ3G5EGD_q9348yFurfdAHaEK%3Fcb%3Dthfvnextfalcon%26pid%3DApi&f=1&ipt=cef2235ee67a669926a3e305aa17f3128817519596d6f2532aa885fac4c4bfa6&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.wLtUKN9GaO8P9LRrb-JrzgHaEK%3Fpid%3DApi&f=1&ipt=c69fe8fa7c4cd4457d2aa0ac1c27304afbe875218e341cdf64bdd0dc1ae122da&ipo=images"
    ],
    storage: "50 GB",
    ageRating: "12+",
    gameMode: "Apenas Cooperativo (Local/Online)",
    description: "Vencedor do prêmio de Jogo do Ano, esta aventura de plataforma foi feita exclusivamente para ser jogada em dupla (cooperativo local ou online). A história acompanha Cody e May, um casal prestes a se separar que é transformado em bonecos por um feitiço. Para voltarem ao normal, eles precisam superar seus desentendimentos e enfrentar desafios brilhantes que mudam de mecânica a cada nova fase.",
    smallDescription: "A maior e mais criativa aventura cooperativa dos games. Trabalhe em equipe para superar desafios únicos e salvar um casamento em crise.",
    mood: ["cooperativo", "casual", "história"], 
    badge: "Co-op Perfeito",
    features: [
      "Jogabilidade 100% cooperativa do início ao fim",
      "Mecânicas de fases totalmente variadas e imprevisíveis",
      "Apenas uma pessoa precisa comprar o jogo com o Passe de Amigo"
    ]
  },

  {
    id: 3, 
    title: "Cyberpunk 2077", 
    genre: "RPG", 
    platform: "PC/PS5/Xbox", 
    price: 199.9,
    rating: 9.0, 
    tags: ["open-world", "fps", "historia", "futuro"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.NZ53080KQK6_O7wTDRTFxwHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=40c14d217f3303e5ab9c3c95e40830c740d782ec5cbb9bae9856253a44d1f02a&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fcyberpunk-2077-night-city-wire_bGluZ2qUmZqaraWkpJRobWllrWdma2U.jpg&f=1&nofb=1&ipt=0e0e2a3843ca74dae41663560459c07c2d70bc862ff5d64b7c5f1dfe39463b8a&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._fiE6VbbQajsyEPlDhb9aAHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=ba3ce0b11c77c27815af89a73e37dfdea3d15e03aaff53af1c6f31123a29a4eb&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa-static.besthdwallpaper.com%2Fcyberpunk-2077-video-game-night-city-concept-art-wallpaper-2400x1350-63186_50.jpg&f=1&nofb=1&ipt=f61636bddfb1c5eebd54fd039e53686512a1d3faee91e576e885e15a1283c341&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fcyberpunk-2077-night-city-2m.jpg&f=1&nofb=1&ipt=3caceb32ea565da34f2025a87f7125d2fd60404f803f61fe694b4e7e7e0d6fd5"
    ],
    storage: "70 GB",
    ageRating: "18+",
    gameMode: "Single-player",
    description: "Um RPG de ação de mundo aberto ambientado em Night City, uma metrópole obcecada por poder, glamour e modificações corporais. Você joga como V, um mercenário fora da lei atrás de um implante único que carrega a chave para a imortalidade. O game oferece imensa liberdade de escolha, permitindo que você personalize suas habilidades cibernéticas e decida como explorar e impactar uma das cidades mais densas e vivas dos videogames.",
    smallDescription: "Sobreviva na megalópole futurista de Night City. Modifique seu body com implantes cibernéticos e defina o seu próprio destino.",
    mood: ["exploração", "história", "ação"], 
    badge: "Redimido",
    features: [
      "Exploração ultra-vertical em Night City",
      "Modificações cibernéticas extensas que alteram sua gameplay",
      "Múltiplas ramificações narrativas e finais alternativos"
    ]
  },

  {
    id: 4, 
    title: "Hollow Knight", 
    genre: "Metroidvania", 
    platform: "PC/Switch", 
    price: 39.9,
    rating: 9.4, 
    tags: ["indie", "hardcore", "plataforma", "exploração"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fen_US%2Fgames%2Fswitch%2Fh%2Fhollow-knight-switch%2Fhero&f=1&nofb=1&ipt=7692f8cebd81901e67c6c3b58e7a29467988b033d7f3d00d09a35dcad0196ef1&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhickmandesign.co.uk%2Fwp-content%2Fuploads%2F2024%2F11%2FThe-Art-Behind-the-Gameplay-A-Journey-Through-Video-Game-Visual-Styles-2D-Hand-drawn-Hollow-Knight.jpg&f=1&nofb=1&ipt=40f8ae0b03d0e61cc6b59c9ddf75a85453d9a2442bdc57ea778a4e75bde9dd2d&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1703226.jpg&f=1&nofb=1&ipt=97bfbbd06020ffc2fea40b67fd48f13cc2b9630e3f930a0dd9a894d31bd56fbf&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshared.fastly.steamstatic.com%2Fstore_item_assets%2Fsteam%2Fapps%2F367520%2Fss_a81e4231cc8d55f58b51a4a938898af46503cae5.1920x1080.jpg%3Ft%3D1695270428&f=1&nofb=1&ipt=34b36b7805531d41068e39713e1c989d946b06c1125ca407eecf0920d6d8b8f0&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frare-gallery.com%2Fmocahbig%2F1308872-Hollow-Knight-HD-Wallpaper.jpg&f=1&nofb=1&ipt=e1dbbbcc243ba640f93cfe71f69ab4e48516114f796313c0dff0df316d9127fa&ipo=images"
    ],
    storage: "9 GB",
    ageRating: "10+",
    gameMode: "Single-player",
    description: "Um metroidvania em 2D com estilo artístico desenhado à mão que se passa no vasto e interconectado reino em ruínas de Hallownest. No controle de um cavaleiro misterioso, você vai explorar cavernas tortuosas, lutar contra mais de 130 inimigos e chefes bizarros, e adquirir novas habilidades e feitiços para abrir caminhos antes inacessíveis. O jogo é amplamente elogiado por sua atmosfera imersiva, trilha sonora melancólica e jogabilidade precisa e desafiadora.",
    smallDescription: "Explore as ruínas esquecidas de um vasto reino de insetos. Enfrente criaturas corrompidas e desvende mistérios ancestrais.",
    mood: ["desafiador", "exploração", "singleplayer"], 
    badge: "Indie Gem",
    features: [
      "Combate em plataforma 2D preciso com esquivas e golpes fluidos",
      "Vasto mapa interconectado com segredos escondidos por toda parte",
      "Trilha sonora e design de áudio incrivelmente imersivos"
    ]
  },

  {
    id: 5, 
    title: "Stardew Valley", 
    genre: "Simulação", 
    platform: "PC/Switch/Mobile", 
    price: 49.9,
    rating: 9.5, 
    tags: ["relaxante", "farm", "rpg", "multiplayer"],
    storage: "1 GB",
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaper.forfun.com%2Ffetch%2Fce%2Fce67e1c3dea028b37d73aaebd8cc7e7a.jpeg%3Fw%3D1470%26r%3D0.5625%26f%3Dwebp&f=1&nofb=1&ipt=1a02461b6d0e1d9583fb92fceb34927925eefbc30b9ed11cd0e15b36059f0d07&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1547827.jpg&f=1&nofb=1&ipt=4f00395c5b6188d46af41744fbcbe94ff24280678e692cb7fe572e5e5d8c489b&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamerempire.net%2Fwp-content%2Fuploads%2F2023%2F04%2FStardew-Valley-Best-Crops-to-Farm-in-the-Fall.jpg&f=1&nofb=1&ipt=7b0b468c3141d59c593fa7d9d9dc590ab6ccdd553a84fc6d733e21ae38008063&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F04%2Fstardew-valley-beach-farm-with-abigail-in-front.jpg&f=1&nofb=1&ipt=43684198ba46717ed40cef31804317032fcc0f62816b23bc3351ba9d7c6d4d73",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamerempire.net%2Fwp-content%2Fuploads%2F2023%2F05%2FStardew-Valley-How-to-Level-Up-Farming.jpg&f=1&nofb=1&ipt=2292d898e86b98a61107de4597474f4588c0aa07091d6c285a309be2a89f007b&ipo=images"
    ],
    ageRating: "10+",
    gameMode: "Single-player / Co-op Online",
    description: "Um RPG de simulação da vida no campo extremamente charmoso e completo. Após herdar o antigo lote de terra do seu avô, você decide deixar o trabalho estressante de escritório para trás e recomeçar do zero. O jogo dá total liberdade para você aprender a viver da terra, minerar recursos preciosos, combater monstros em cavernas, pescar nos rios locais e até mesmo construir relacionamentos ou se casar com os moradores da carismática Vila Pelicano.",
    smallDescription: "Herde a antiga fazenda do seu avô e comece uma nova vida. Cultive a terra, crie animais e faça parte de uma comunidade acolhedora.",
    mood: ["relaxante", "casual", "cooperativo"], 
    badge: "Eterno Clássico",
    features: [
      "Customização e gerenciamento completo de fazendas e safras",
      "Vila Pelicano interativa com dezenas de NPCs e eventos sociais",
      "Sistemas profundos de mineração, pesca, culinária e combate"
    ]
  },

  {
    id: 6, 
    title: "God of War Ragnarök", 
    genre: "Ação", 
    platform: "PS5/PC", 
    price: 299.9,
    rating: 10,
    tags: ["ação", "história", "mitologia", "singleplayer"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4kwallpapers.com%2Fimages%2Fwallpapers%2Fgod-of-war-ragnarok-kratos-atreus-2022-games-playstation-4-3840x2160-8636.jpg&f=1&nofb=1&ipt=0ac637de2d628a75e95ce0af376272bf988be45328d077a7efbe6f00a5316a4b&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.thegamerimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F12%2Fkratos-and-atreus-cropped-1.jpg&f=1&nofb=1&ipt=450410fc66ffbfea13b53f77cc1b50cf3e083399d997ac23c4357d2ced973b23&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F11%2FGod-of-War-Ragnarok-Surtr-Kratos-Freya-Atreus-Asgard.jpg&f=1&nofb=1&ipt=c453938773bc7def90da310ddda06e431df9d9ff411d47f87f240f1a816bcabd&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.videogameschronicle.com%2Ffiles%2F2022%2F08%2Fgod-of-war-ragnarok-art.jpg&f=1&nofb=1&ipt=8f1d812de0c0a6522a7d2cb5f14c333bfbd7f590f3eb180c3201f4c95678c3d4",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamingbolt.com%2Fwp-content%2Fuploads%2F2022%2F09%2Fgod-of-war-ragnarok-image-5.jpg&f=1&nofb=1&ipt=8266f7c5b7690232937bc418a2acb9eb9e32ceb7cfbe9bd2ad3b3a43ce841a24&ipo=images"
    ],
    storage: "190 GB",
    ageRating: "18+",
    gameMode: "Single-player",
    description: "A épica conclusão da jornada nórdica de Kratos e Atreus. Enquanto as forças de Asgard se preparam para uma guerra profetizada que destruirá o mundo, pai e filho precisam explorar todos os Nove Reinos em busca de respostas e aliados. Juntos, eles enfrentarão deuses nórdicos impiedosos e monstros mitológicos em um combate visceral e cinematográfico focado na família e no destino.",
    smallDescription: "A épica conclusão da saga nórdica de Kratos. Enfrente as forças de Asgard e mude o destino dos Nove Reinos.",
    mood: ["ação", "história", "singleplayer"], 
    badge: "Épico",
    features: [
      "Combate brutal com o Machado Leviatã e as Lâminas do Caos",
      "Exploração profunda de todos os Nove Reinos da mitologia nórdica",
      "Narrativa emocionante e cinematográfica focada no amadurecimento"
    ]
  },

  {
    id: 7, 
    title: "Lethal Company", 
    genre: "Horror Co-op", 
    platform: "PC", 
    price: 29.9,
    rating: 9.0,
    tags: ["horror", "cooperativo", "caótico", "humor"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.nichegamer.com%2Fwp-content%2Fuploads%2F2023%2F10%2FLethal-Company-1.jpg&f=1&nofb=1&ipt=a7834b83063e095901a4acd13fd374536a520e21ee6780c5e26f0d4bc7ed8b44&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allkeyshop.com%2Fblog%2Fwp-content%2Fuploads%2FLethal-Company-gameplay.png&f=1&nofb=1&ipt=0fc6373ca6d903f59fab1da6e46a7ba032be279be4bd33c4b33f5b6448c0c228&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gameskinny.com%2Fwp-content%2Fuploads%2F2023%2F12%2Flethal-company-moons-rend.jpg%3Fresize%3D768&f=1&nofb=1&ipt=3e0c33befd94b537f3a7c5156eabdfa2a792185f17f356a1977fea66fc4edbf1&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Findiegameculture.com%2Fwp-content%2Fuploads%2F2023%2F12%2Flethal-company-flood-1.png&f=1&nofb=1&ipt=0b3c4943c14a4630516cca7c52276a53e13a9561337e6614c99a29d98ee27dc1&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gameskinny.com%2Fwp-content%2Fuploads%2F2023%2F11%2Flethal-company-all-monsters-guide.jpg%3Fresize%3D768&f=1&nofb=1&ipt=e612403860412181084f47b85cb421d0db4d68cbfef76dcd6fe358d8d5945ee8&ipo=images"
    ],
    storage: "1 GB",
    ageRating: "14+",
    gameMode: "Co-op Online (Até 4 jogadores)",
    description: "Um jogo de sobrevivência cooperativo e caótico onde você e sua equipe são trabalhadores contratados pela 'The Company'. Sua missão é explorar luas industrializadas abandonadas para coletar sucata e atingir a cota de lucro exigida. O grande problema são as terríveis armadilhas, a escuridão absoluta e as criaturas letais que começam a caçar vocês assim que a noite cai.",
    smallDescription: "Colete sucata em luas alienígenas sinistras para bater suas metas corporativas. Sobreviva com seus amigos se puder.",
    mood: ["cooperativo", "caótico", "horror"], 
    badge: "Viral",
    features: [
      "Bate-papo de voz por proximidade realista, aumentando a imersão e o terror",
      "Geração procedural de instalações industriais perigosas",
      "Trabalho em equipe tenso onde cada membro tem um papel crucial de apoio"
    ]
  },

  {
    id: 8, 
    title: "Hades", 
    genre: "Roguelike", 
    platform: "PC/Switch/PS5", 
    price: 69.9,
    rating: 10,
    tags: ["roguelike", "ação", "historia", "replay"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.colliderimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F11%2Fhades.jpg&f=1&nofb=1&ipt=a3aaa5e6f8fa59adf443b998da204a6dcc0d14096be8ac675e6f95dd09e1cd93&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.gg.deals%2F4e%2F01%2F36d885d368437b48d37e79b190fb8cb29eff_1920xt1080_S1000.jpg&f=1&nofb=1&ipt=511acfac99a2e35752feb58e09b0f300e7da8ac0cc7b8a6659ea8867323cf59a&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.ctfassets.net%2F5owu3y35gz1g%2F5qrxGawZeRyIWA9CsCqheU%2Fa14d2e985daedb10c6064ce1748686b2%2Fhades2_dec22_01.jpg&f=1&nofb=1&ipt=e00399ab1e41af6a8c7eb3e2a9da93d49188bb3fb9509c4fe9f8c1c243a0d749&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2137817.jpg&f=1&nofb=1&ipt=a0be4bab70c0a4ef010164fc1849aa02949abf51c083783b54c5fb0328381d4a&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.akamai.steamstatic.com%2Fsteam%2Fapps%2F1145360%2Fss_2a9e3f9ad4d29d900b890d56361be5b1634225a0.1920x1080.jpg%3Ft%3D1702510146&f=1&nofb=1&ipt=c3ef40537149c752b2ab1f9542ddf508b395faa96879fbe6587e60c5c7147893&ipo=images"
    ],
    storage: "15 GB",
    ageRating: "12+",
    gameMode: "Single-player",
    description: "Um roguelike de ação rápido que combina os melhores aspectos dos jogos aclamados da Supergiant Games. No papel de Zagreu, o príncipe imortal do Submundo, você empunhará os poderes e as armas míticas do Olimpo para se libertar das garras do próprio Deus dos Mortos, enquanto se fortalece e descobre mais segredos da história a cada tentativa de fuga.",
    smallDescription: "Batalhe para sair do submundo grego em um roguelike de ação frenético com narrativa rica e viciante.",
    mood: ["desafiador", "ação", "replay"], 
    badge: "Must Play",
    features: [
      "Combate hack-and-slash extremamente responsivo e satisfatório",
      "Bênçãos customizáveis enviadas por deuses como Zeus, Athena e Poseidon",
      "Narrativa contínua onde morrer faz parte do desenvolvimento dos personagens"
    ]
  },

  {
    id: 9, 
    title: "Deep Rock Galactic", 
    genre: "Cooperativo", 
    platform: "PC/Xbox", 
    price: 59.9,
    rating: 9.0,
    tags: ["cooperativo", "shooter", "casual", "pve"],
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiwant.games%2Fwp-content%2Fuploads%2Fdeep-rock-galactic-cover.jpg&f=1&nofb=1&ipt=97b1b81e6dd513b2a1ceef882b2c7425ea3c9e2515499ce2832535df64f78f83&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5925832e03596efb6d4b502a%2F8c7e4c0b-6e64-4dd9-be75-4375d56305b3%2FDRG_Season03_Screenshot_04.jpg&f=1&nofb=1&ipt=f97a2b441bbfa4caba0eb606732e3f5d3fc13d3efda67f17fc1fcf3f0891fdef&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.dualshockersimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F08%2FPlatform-Showcase-1-scaled.jpg&f=1&nofb=1&ipt=f3b274ca4abc939ac94cbd447506a227bdf8841c736fb5af88d475b8c294054e&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fink.mostepic.win%2Fcontent%2Fimages%2F2018%2F07%2FDRG_023-Monsters.jpg&f=1&nofb=1&ipt=9c69883273a5fed430b40fd865e5ae642f3b502de9b5d534c9bebee6e70b97da&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.gg.deals%2Ffa%2F0f%2F7f317d790839c48439a8d97db76a5065f7b9_1920xt1080_S1000.jpg&f=1&nofb=1&ipt=f08a561808531572ef807c678238492d4ada90bd7cfe1a2abb7d34dee5a9b464&ipo=images"
    ],
    storage: "3 GB",
    ageRating: "12+",
    gameMode: "Single-player / Co-op Online",
    description: "Um jogo de tiro em primeira pessoa cooperativo de ficção científica. Junte-se a uma equipe de anões espaciais durões e explore sistemas de cavernas totalmente destrutíveis e gerados proceduralmente. Trabalhe em equipe para minerar recursos raros, utilizar equipamentos de alta tecnologia e repelir hordas intermináveis de monstros alienígenas insectoides.",
    smallDescription: "Anões espaciais, ambientes 100% destrutíveis e hordas alienígenas no cooperativo de ficção científica definitivo.",
    mood: ["cooperativo", "ação", "casual"], 
    badge: "Rock and Stone!",
    features: [
      "Quatro classes únicas com ferramentas e armas de mineração exclusivas",
      "Cenários subterrâneos totalmente destrutíveis com total liberdade de escavação",
      "Missões geradas proceduralmente garantindo alta rejogabilidade"
    ]
  },
  {
    id: 10,
    title: 'Sonic Frontiers',
    genre: 'Aventura',
    platform: "PC/PS5/Xbox/Switch",
    price: 249.90,
    rating: 7.0,
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurenintendo.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fsonic_frontiers_main.jpeg&f=1&nofb=1&ipt=c543d78e79ee49a45e39aafd2e57f7cdbf028437606e1f1ce2d66929d8cc4447&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fsonic-the-hedgehog-sonic-frontiers_bmhlZmmUmZqaraWkpJRnamtlrWZpaWU.jpg&f=1&nofb=1&ipt=8135948c051fa5f125072b0dfbaca821ded371f50f626fcef3b34305163ddd5a&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.switchaboo.com%2Fcontent%2Fimages%2Fsize%2Fw2000%2F2022%2F10%2Fsonic-frontiers.jpg&f=1&nofb=1&ipt=4019c76fa58544328f5bb4fce198cac2dc203e688f5e9381ee24ee2b0960fd03&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.alphacoders.com%2F119%2F1196178.jpg&f=1&nofb=1&ipt=da321d93f3fe3ce64a9a52e446c49220b304685d982a1e992858851ed2e039a7&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoewalls.com%2Fwp-content%2Fuploads%2F2023%2F02%2Fsonic-frontiers-starfall-thumb.jpg&f=1&nofb=1&ipt=31130f26efcac6b6f60b6bc8b62683bbe901d3587ec3082cc01284bf335ef1a4&ipo=images"
    ],
    storage: "30 GB",
    ageRating: "10+",
    gameMode: "Single-player",
    description: 'Acelere rumo a novos horizontes em uma experiência de plataforma inédita! Enfrente hordas de inimigos poderosos e explore um mundo impressionante cheio de ação, mistério e cenários deslumbrantes. Corra em alta velocidade pelas cinco ilhas de Starfall Islands e descubra mistérios ancestrais com a jogabilidade de zonas abertas.',
    smallDescription: "Explore ilhas gigantescas cheias de mistérios e corra na velocidade da luz em zonas abertas inéditas.",
    mood: ['fast', 'adventure', 'openworld'],
    features: [
      "Estreia do formato de Zonas Abertas com liberdade total de corrida",
      "Sistema de combate reformulado com esquivas, defesas e combos de habilidades",
      "Fases tradicionais de plataforma rápida no clássico Ciberespaço"
    ]
  },

  {
    id: 11,
    title: 'Sonic Racing CrossWorlds',
    genre: 'Corrida',
    platform: "PC/PS5/Xbox/Switch",
    price: 299.90,
    rating: 8.5,
    storage: '35 GB',
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F22808523.jpg&f=1&nofb=1&ipt=81a8f50c89cb0f745df00fcad2d2d7012893f081be963618739ef7fc3b2dd92f&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4kwallpapers.com%2Fimages%2Fwallpapers%2Fsonic-racing-3840x2160-21707.jpg&f=1&nofb=1&ipt=32eb809a26161f2810e2155bccfc42a6b769406b7cf1748235d92b38d215a620&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4kwallpapers.com%2Fimages%2Fwallpapers%2Fsonic-racing-1920x1080-24136.jpg&f=1&nofb=1&ipt=da0fc8d0ccc9657a41b002f065f4d9c9a63c9ea3ecc746ea8cf4fcfc1e0705cf&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomicbook.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2025%2F02%2FSonicRacingCrossWorldsImpressionsFeatured.jpg&f=1&nofb=1&ipt=33f400f0688330112890c57c5e92d02f114072715e96a84551d463d0a729d7b3&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgaming-cdn.com%2Fimages%2Fproducts%2F18299%2Fscreenshot%2Fsonic-racing-crossworlds-pc-steam-wallpaper-2.jpg%3Fv%3D1750948885&f=1&nofb=1&ipt=d2b46b2fe7e93c041f4d9db07821ec90ec008ee9c972d77c48a55fbcdb6b7302&ipo=images"
    ],
    ageRating: "Livre",
    gameMode: "Single-player / Multiplayer Online",
    description: 'Prepare-se para acelerar e driftar através de fendas dimensionais! Neste eletrizante jogo de corrida arcade, os corredores viajam por portais conhecidos como "Travel Rings" para competir em pistas dinâmicas que misturam cenários clássicos com novas realidades. Trazendo o maior elenco já visto na série com mais de 20 personagens jogáveis, o game permite uma customização profunda de veículos com dezenas de karts e acessórios que alteram completamente o estilo de pilotagem em terra, água ou ar.',
    smallDescription: 'Acelere através de fendas dimensionais! Corra com o maior elenco da franquia em karts totalmente customizáveis.',
    mood: ['fast', 'competitive', 'multiplayer'],
    features: [
      "Mecânica exclusiva de fendas dimensionais que altera o traçado em tempo real",
      "Customização profunda de karts influenciando atributos de velocidade e controle",
      "Mais de 20 personagens icônicos dos universos SEGA divididos em classes"
    ]
  },

  {
    id: 12,
    title: 'Gran Turismo 7',
    genre: 'Simulação',
    platform: "PS4 / PS5",
    price: 349.90,
    rating: 9.0,
    storage: '90 GB',
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fap%2Frnd%2F202109%2F1321%2F3GEdKTGktTBsZ8Sj9yIWnr2f.jpg&f=1&nofb=1&ipt=a08219ddb908a9ec56b9dfbe95f8cc2c5d4d766d9558442b76c2494215a29e72&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgmedia.playstation.com%2Fis%2Fimage%2FSIEPDC%2Fgran-turismo-7-screenshot-07-en-09sept21%3F%24native%24&f=1&nofb=1&ipt=236b75ae1ad06eeb20a96c8a220cc4a8ddf4bd98c1b379ae59add348f6a40e47&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gran-turismo.com%2Fimages%2Fc%2Fi1gz0y5tEaRWBz.jpg&f=1&nofb=1&ipt=638532d7e4cdc98a4bb0cd77ea3709b36a2f703583942608e37d3ffe8c868af2&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.playstation.com%2Ftachyon%2F2023%2F02%2F765aab59f5ee98cfb2ce55ebcfad3b01c903fa09.jpg&f=1&nofb=1&ipt=a5cadbcbeeba8ce0fae2b8982019bb377ab856fc40917bf0b5bb433aacbb7d3e&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.operationsports.com%2Fwp-content%2Fuploads%2F2025%2F03%2Fgt7-daily-races-march-24-30.jpg%3Ffit%3D1200%252C675&f=1&nofb=1&ipt=767a7c7150bffb896800196b24b91ac4ee758cdd4d53f2d8249a084930c7c75e&ipo=images"
    ],
    ageRating: "Livre",
    gameMode: "Single-player / Multiplayer Online",
    description: 'O simulador de corrida definitivo da PlayStation combina a clássica progressão de carreira da franquia com o foco competitivo no automobilismo virtual. O jogo é uma verdadeira celebração da cultura automotiva, oferecendo centenas de carros meticulosamente detalhados, física de direção refinada e um impressionante sistema de clima dinâmico que altera drasticamente a aderência nas pistas.',
    smallDescription: 'O simulador de corrida definitivo da PlayStation. Pilote centenas de carros icônicos com física ultra-realista e gráficos impressionantes.',
    mood: ['realistic', 'competitive', 'cars'],
    features: [
      "Física de simulação automotiva hiper-realista com desgaste de pneus",
      "Modo GT Cafe focado no colecionismo e aprendizado sobre marcas históricas",
      "Clima dinâmico realista que impacta diretamente a aderência da pista"
    ]
  },

  {
    id: 13,
    title: 'Forza Horizon 5',
    genre: 'Corrida',
    platform: "PC / Xbox",
    price: 349.90,
    rating: 10,
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgameranx.com%2Fwp-content%2Fuploads%2F2021%2F08%2FForzaHorizon5_KeyArt_Horiz_RGB_Final.jpg&f=1&nofb=1&ipt=cf1ebc80b89e95b25d135c250cc18a86bd72b40fd7fac8eeb4742843ba47dec7&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fap%2Frnd%2F202502%2F1219%2Fc52e465919d6a86df2bd075ca2ebba46cb5e3c00177fddc1.jpg&f=1&nofb=1&ipt=2d1676120546b56eb1f0080f9e6b53230d1f10db875ac931662aa191d9b3f433&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.operationsports.com%2Fwp-content%2Fuploads%2F2024%2F02%2Ffh5-car-1.webp%3Ffit%3D1200%252C675&f=1&nofb=1&ipt=97927d54fa2cdf0f419acc549d5e0841dacd742da3bd6dd55775515d6d68ec0b&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fforza-horizon-5-4k-zhitk2ga5rxp9yu0.jpg&f=1&nofb=1&ipt=3615d01e673067e2c253d14fd2d02c840432b57b02e3477396e6c7c940c63337&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fforza-horizon-5-4k-3wsh8omuls2xhprl.jpg&f=1&nofb=1&ipt=60809625a9fe984022b74004ba194408dd172bcfabfeabe82c565765de9ad6ce&ipo=images"
    ],
    storage: "110 GB",
    ageRating: "Livre",
    gameMode: "Single-player / Multiplayer Online",
    description: 'Sua derradeira aventura Horizon espera por você! Explore as paisagens de mundo aberto vibrantes e em constante evolução do México. Pilote centenas dos melhores carros do mundo em corridas insanas, desafios épicos e expedições por desertos, selvas tropicais, cidades históricas e até mesmo no topo de um vulcão ativo.',
    smallDescription: "Explore paisagens incríveis e pilote centenas de carros icônicos em um festival automotivo em mundo aberto no México.",
    mood: ['cars', 'openworld', 'relax'],
    features: [
      "Mundo aberto massivo ambientado em um México ricamente detalhado",
      "Campanha de Expedições recompensadora focada em turismo automotivo",
      "Clima dinâmico com tempestades de areia e eventos tropicais de grande escala"
    ]
  },

  {
    id: 14,
    title: 'Persona 3 Reload',
    genre: 'RPG',
    platform: "PC/PS5/Xbox",
    price: 299.90,
    rating: 9.0,
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.psu.com%2Fwp%2Fwp-content%2Fuploads%2F2023%2F10%2Fpersona-3-reload-banner.jpeg&f=1&nofb=1&ipt=9d86cccff399d2286ebc360400494d61e7f8afd6ffb9705a045bd9f30dd1d7c1&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpersonacentral.com%2Fwp-content%2Fuploads%2F2024%2F01%2FP3R-Key-Art-Header.jpg&f=1&nofb=1&ipt=b386597055ba7b54cf786f0e27a6e0ed3767d6847d689f3e61bc4861ad4a6b79&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvideogames.si.com%2F.image%2Ft_share%2FMjAwNzQwOTgxNTMwNjk4OTU2%2Fpersona-3-reload-new-moon-014.jpg&f=1&nofb=1&ipt=61b8d67b9f1f642a0d52892a97a914ed7634726530fe86170a2901df28ec4ed5&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.Lziz7o1ZLqxMmh0BLNFnRAHaEK%3Fpid%3DApi&f=1&ipt=68851a4c485a39ea591588958ebc07cea4c28f0d4236c5d0ac35149d988a9164&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.uhdpaper.com%2Fwallpaper%2Fpersona-3-reload-makoto-yuki-aigis-868%401%40n-pc-2k.jpg&f=1&nofb=1&ipt=083e569bcd9f3ca04a880f0ae534bb8b1594b08051cc0ec63583939bc9e09b29&ipo=images"
    ],
    storage: "30 GB",
    ageRating: "14+",
    gameMode: "Single-player",
    description: 'Entre na Hora Sombria e desperte as profundezas do seu coração. Persona 3 Reload é uma releitura cativante do RPG que definiu o gênero, renascido para a era moderna com gráficos de ponta, melhorias de usabilidade e uma trilha sonora inesquecível de J-Rock/Pop que embala uma jornada sombria de mistérios estudantis.',
    smallDescription: 'Viva uma jornada emocional inesquecível misturando gerenciamento de vida escolar e batalhas de turno sobrenaturais.',
    mood: ['story', 'anime', 'rpg'],
    features: [
      "Visual reformulado em Unreal Engine com menus e interface ultra-estilizados",
      "Sistema de combate por turnos focado em explorar fraquezas elementais",
      "Mecânicas de simulador social diário para fortalecer laços com companheiros"
    ]
  },

  {
    id: 15,
    title: 'BioShock Infinite',
    genre: 'FPS',
    platform: "PC/PS4/Xbox/Switch",
    price: 89.90,
    rating: 9.5,
    images: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.epicgames.com%2Foffer%2Fdf2da503f2074f078f8090da3c27ec47%2FEGS_BioShockInfiniteCompleteEdition_MassMediaGames_S1_2560x1440-bf29199cfe7a76f62965f582571024f6&f=1&nofb=1&ipt=6ca92ae5cea0f544de4d3bbba5430d03b638888410b6b6d7776b1e8e150faead&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshared.fastly.steamstatic.com%2Fstore_item_assets%2Fsteam%2Fapps%2F8870%2Fss_e98deaf0e334206b84c2462276aee98107fa20d0.1920x1080.jpg%3Ft%3D1728673518&f=1&nofb=1&ipt=a056992887fb968d45c5f99568eeeda0600bdd2fa37e1cb7b3dd93b0754c6c26&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feskipaper.com%2Fimages%2Fbioshock-infinite-1.jpg&f=1&nofb=1&ipt=4e6cda09cb9427e29c6abf60ca9ab05d32d8db8796469b91a05ef0782e0585de&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.akamai.steamstatic.com%2Fsteam%2Fapps%2F2028850%2Fss_37f25110f8d76335ddbc29a381bc6961e209acf6.1920x1080.jpg%3Ft%3D1560961334&f=1&nofb=1&ipt=38c01f1175ddb29e46e46179abd67a3da5db4e1582f1a78358cc458304db2343&ipo=images",

      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2F2ECRm31.jpg&f=1&nofb=1&ipt=cb4a2e460cca6c36898a90299d288aa735e98c414ed20dea8735ec9bbd311b8d&ipo=images"
    ],
    storage: "30 GB",
    ageRating: "16+",
    gameMode: "Single-player",
    description: 'Crivado de dívidas, o ex-agente Booker DeWitt tem apenas uma oportunidade de limpar sua ficha: resgatar Elizabeth, uma jovem misteriosa presa desde a infância na cidade flutuante de Columbia. Forçados a confiar um no outro, eles desenvolvem um forte laço enquanto lutam para sobreviver em trilhos aéreos suspensos e ambientes hostis em uma das histórias mais revolucionárias e premiadas dos FPS.',
    smallDescription: 'Explore a majestosa e perturbadora cidade flutuante de Columbia em uma narrativa icônica e inesquecível.',
    mood: ['story', 'dark', 'fps'],
    features: [
      "Combate dinâmico usando trilhos aéreos (Sky-Lines) de alta velocidade",
      "Uso combinado de armas de fogo tradicionais com poderes especiais (Vigors)",
      "Inteligência artificial cooperativa avançada com Elizabeth auxiliando na batalha"
    ]
  }
];