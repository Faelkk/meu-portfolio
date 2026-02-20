import type { ProjectFetch } from "../../app/hooks/useProjects";

export const projectData: ProjectFetch = {
  projects: [
    {
      id: "1",
      name: "Library management",
      url: "https://github.com/Faelkk/library-management-fe",
      urlGithub: "https://github.com/Faelkk/library-management-fe",
      description:
        "Este é o front-end do sistema Library Management, desenvolvido para atender à demanda de bibliotecas. O sistema facilita a gestão de livros didáticos e literários, otimizando os processos de empréstimo, devolução e organização do acervo, além do gerenciamento de usuários. A interface foi construída pensando na usabilidade, acessibilidade e responsividade, garantindo uma experiência intuitiva para alunos, professores e administradores.",
      cardimage: "/logos/LibraryLogo.svg",
      defaultimage: "/defaultImages/LibraryFe.png",
      technologies: [
        {
          name: "Angular",
          url: "https://skillicons.dev/icons?i=angular",
        },
        {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "Tailwind",
          url: "https://skillicons.dev/icons?i=tailwind",
        },
      ],
    },
    {
      id: "2",
      name: "Library management API",
      url: "https://github.com/Faelkk/management-library-api",
      urlGithub: "https://github.com/Faelkk/management-library-api",
      description:
        "Library Management é uma API em ASP.NET Core para gerenciar livros, usuários e empréstimos de uma biblioteca escolar com mais de 800 pessoas. Conta com autenticação JWT, documentação Swagger e práticas modernas de arquitetura para garantir segurança e eficiência.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "/defaultImages/LibraryApi.png",
      technologies: [
        {
          name: "C#",
          url: "https://skillicons.dev/icons?i=cs",
        },
        {
          name: ".NET",
          url: "https://skillicons.dev/icons?i=dotnet",
        },
        {
          name: "Docker",
          url: "https://skillicons.dev/icons?i=docker",
        },
        {
          name: "Azure",
          url: "https://skillicons.dev/icons?i=azure",
        },
      ],
    },

    {
      id: "3",
      name: "Barber - Fe",
      url: "https://github.com/Faelkk/barber-fe",
      urlGithub: "https://github.com/Faelkk/barber-fe",
      description:
        "Uma aplicação front-end para uma barbearia, desenvolvida com um layout intuitivo e moderno. O projeto apresenta informações essenciais sobre a barbearia, incluindo localização, unidades, serviços, equipe de barbeiros, redes sociais e formas de contato. Com um sistema de autenticação integrado, tanto barbeiros quanto clientes podem gerenciar agendamentos de forma prática e eficiente.",
      cardimage: "/logos/BarberFeLogo.svg",
      defaultimage: "/defaultImages/BarberFe.png",
      technologies: [
        {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "Tailwind",
          url: "https://skillicons.dev/icons?i=tailwind",
        },
        {
          name: "React",
          url: "https://skillicons.dev/icons?i=react",
        },
        {
          name: "Next.js",
          url: "https://skillicons.dev/icons?i=nextjs",
        },
      ],
    },
    {
      id: "4",
      name: "Barber API",
      url: "https://github.com/Faelkk/barber-api",
      urlGithub: "https://github.com/Faelkk/barber-api",
      description:
        "A Barber API é um software para o gerenciamento de barbearias, desenvolvida com NestJS e Mongoose, utilizando MongoDB para armazenamento de dados e Supabase para o storage de imagens.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "/defaultImages/BarberApi.png",
      technologies: [
        {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "NestJS",
          url: "https://skillicons.dev/icons?i=nestjs",
        },
        {
          name: "NodeJS",
          url: "https://skillicons.dev/icons?i=nodejs",
        },
        {
          name: "Prisma",
          url: "https://skillicons.dev/icons?i=prisma",
        },
        {
          name: "Postgres",
          url: "https://skillicons.dev/icons?i=postgres",
        },
      ],
    },
    {
      id: "5",
      name: "TalkFly",
      url: "https://github.com/Faelkk/talkfly",
      urlGithub: "https://github.com/Faelkk/talkfly",
      description:
        "Aplicação de comunicação em tempo real desenvolvida em Next.js. Oferece autenticação de usuários, gerenciamento de conexões, envio de mensagens, áudio e imagens, proporcionando uma experiência fluida e eficiente. Integrado com a TalkFly-API, permite uma comunicação dinâmica e personalizada.",
      cardimage: "/logos/talkfly.svg",
      defaultimage: "/defaultImages/Talkfly.png",
      technologies: [
        {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "Tailwind",
          url: "https://skillicons.dev/icons?i=tailwind",
        },
        {
          name: "Next.js",
          url: "https://skillicons.dev/icons?i=nextjs",
        },
      ],
    },
    {
      id: "6",
      name: "TalkFly API",
      url: "https://github.com/Faelkk/talkfly-api",
      urlGithub: "https://github.com/Faelkk/talkfly-api",
      description:
        "Talkfly-api uma api desenvolvida em Node.js para conversação em tempo real, utilizando sockets para comunicação instantânea. Oferece autenticação segura com JWT, gerenciamento de conexões de usuários, mensagens, e envio de arquivos multimídia.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "/defaultImages/Talkfly.png",
      technologies: [
        {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "NodeJS",
          url: "https://skillicons.dev/icons?i=nodejs",
        },
        {
          name: "Postgres",
          url: "https://skillicons.dev/icons?i=postgres",
        },
      ],
    },
    {
      id: "7",
      name: "DebtTracker",
      url: "https://github.com/Faelkk/DebtTracker-fe",
      urlGithub: "https://github.com/Faelkk/DebtTracker-fe",
      description:
        "O Debt Track FE é uma aplicação front-end desenvolvida para controle e gestão de dívidas, empréstimos e parcelamentos, oferecendo uma interface moderna, segura e intuitiva para acompanhamento financeiro pessoal ou empresarial.",
      cardimage: "/logos/DebtTracker.svg",
      defaultimage: "/defaultImages/DebtTrackerFe.png",
      technologies: [
            {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "Tailwind",
          url: "https://skillicons.dev/icons?i=tailwind",
        },
        {
          name: "React",
          url: "https://skillicons.dev/icons?i=react",
        },
      ],
    },
    {
      id: "8",
      name: "DebtTracker API",
      url: "https://github.com/Faelkk/DebtTracker",
      urlGithub: "https://github.com/Faelkk/DebtTracker",
      description:
        "O Debt Track é um sistema completo para gerenciamento de dívidas entre múltiplas pessoas, projetado para simplificar o controle de empréstimos. Ele permite criar, listar, parcelar e registrar pagamentos de dívidas de forma prática e eficiente. Desenvolvido em .NET, o sistema utiliza DynamoDB como banco de dados e se integra à AWS Lambda e API Gateway para oferecer uma solução escalável e de alta disponibilidade.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "/defaultImages/DebtApi.png",
      technologies: [
        {
          name: "C#",
          url: "https://skillicons.dev/icons?i=cs",
        },
        {
          name: ".NET",
          url: "https://skillicons.dev/icons?i=dotnet",
        },
        {
          name: "Docker",
          url: "https://skillicons.dev/icons?i=docker",
        },
        {
          name: "AWS",
          url: "https://skillicons.dev/icons?i=aws",
        },
      ],
    },
    {
      id: "9",
      name: "Fincheck - Fe",
      url: "https://github.com/Faelkk/fincheck-fe",
      urlGithub: "https://github.com/Faelkk/fincheck-fe",
      description:
        "O Fincheck - fe é uma aplicação front-end desenvolvida como parte do curso JStack. Essa aplicação tem como objetivo facilitar a gestão financeira dos usuários, integrando-se à API Fincheck. Com o Fincheck - fe, cada usuário pode aprimorar o controle sobre suas finanças, permitindo o cadastro de gastos, despesas e receitas.",
      cardimage: "/logos/fincheckLogo.svg",
      defaultimage: "/defaultImages/FincheckFe.png",
      technologies: [
               {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "Tailwind",
          url: "https://skillicons.dev/icons?i=tailwind",
        },
        {
          name: "React",
          url: "https://skillicons.dev/icons?i=react",
        },
      ],
    },
    {
      id: "10",
      name: "Fincheck API",
      url: "https://github.com/Faelkk/fincheck-api",
      urlGithub: "https://github.com/Faelkk/fincheck-api",
      description:
        "Essa API foi desenvolvida durante o curso JStack, além de ter proposito de aprimorar meu conhecimento em NestJS, Essa api foi feita para consumo em um projeto de gestão de finanças, o fincheck fe , esse projeto busca fornecer informações para melhor gestão financeira dos usuarios.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "/defaultImages/FincheckFe.png",
      technologies: [
        {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "Tailwind",
          url: "https://skillicons.dev/icons?i=tailwind",
        },
        {
          name: "React",
          url: "https://skillicons.dev/icons?i=react",
        },
      ],
    },
    {
      id: "11",
      name: "Microservice auth-fe",
      url: "https://github.com/Faelkk/micro-service-auth-fe",
      urlGithub: "https://github.com/Faelkk/micro-service-auth-fe",
      description:
        "O Micro-Service-Auth-Fe é a interface web do sistema de autenticação, desenvolvida em Angular. Esse frontend é responsável por gerenciar as interações do usuário com o sistema, oferecendo telas para login, cadastro e recuperação de senha, além de comunicação com o serviço de autenticação via APIs RESTful.",
      cardimage: "/logos/AuthFeLogo.svg",
      defaultimage: "/defaultImages/AuthFe.png",
      technologies: [
        {
          name: "TypeScript",
          url: "https://skillicons.dev/icons?i=ts",
        },
        {
          name: "Tailwind",
          url: "https://skillicons.dev/icons?i=tailwind",
        },
        {
          name: "Angular",
          url: "https://skillicons.dev/icons?i=angular",
        },
      ],
    },
    {
      id: "12",
      name: "Microservice auth",
      url: "https://github.com/Faelkk/micro-service-auth",
      urlGithub: "https://github.com/Faelkk/micro-service-auth",
      description:
        "O Micro-Service-Auth é um sistema baseado em microserviços, desenvolvido em .NET, que realiza a autenticação de usuários utilizando JSON Web Token (JWT) e envia notificações por e-mail via RabbitMQ. O projeto usa Docker para facilitar o deploy e MySQL como banco de dados relacional. Este sistema é projetado para ser altamente escalável e modular, com cada serviço operando de maneira independente.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "/defaultImages/AuthApi.png",
      technologies: [
        {
          name: "C#",
          url: "https://skillicons.dev/icons?i=cs",
        },
        {
          name: ".NET",
          url: "https://skillicons.dev/icons?i=dotnet",
        },
        {
          name: "Docker",
          url: "https://skillicons.dev/icons?i=docker",
        },
        {
          name: "RabbitmQ",
          url: "https://skillicons.dev/icons?i=rabbitmq",
        },
      ],
    },
    {
      id: "13",
      name: "Microservice Payments",
      url: "https://github.com/Faelkk/micro-service-payment",
      urlGithub: "https://github.com/Faelkk/micro-service-payment",
      description:
        "Sistema baseado em microserviços desenvolvido em .NET que simula um fluxo completo de pagamentos. O projeto é composto pelos serviços de Produtos, Pedidos e Pagamentos, além de um API Gateway utilizando Ocelot. Todos os serviços são containerizados com Docker e utilizam MySQL para persistência de dados.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "",
      technologies: [
        {
          name: "C#",
          url: "https://skillicons.dev/icons?i=cs",
        },
        {
          name: ".NET",
          url: "https://skillicons.dev/icons?i=dotnet",
        },
        {
          name: "Docker",
          url: "https://skillicons.dev/icons?i=docker",
        },
        {
          name: "MySQL",
          url: "https://skillicons.dev/icons?i=mysql",
        },
      ],
    },
    {
      id: "14",
      name: "NewsLetter API",
      url: "https://github.com/Faelkk/NewsLetter",
      urlGithub: "https://github.com/Faelkk/NewsLetter",
      description:
        "O NewsLetter API é um sistema de assinatura onde o usuário se cadastra e recebe conteúdos mensais diretamente no seu e-mail, de acordo com seus interesses. A aplicação foi desenvolvida utilizando ASP.NET 9.0, com Dapper como ORM, PostgreSQL como banco de dados (rodando em Docker), Hangfire para execução de jobs em segundo plano e integração de pagamentos via Stripe. A comunicação assíncrona e o disparo de eventos entre serviços são realizados através do Kafka.",
      cardimage: "/logos/NewsLetterLogo.svg",
      defaultimage: "/defaultImages/NewsLetter.png",
      technologies: [
        {
          name: "C#",
          url: "https://skillicons.dev/icons?i=cs",
        },
        {
          name: ".NET",
          url: "https://skillicons.dev/icons?i=dotnet",
        },
        {
          name: "Docker",
          url: "https://skillicons.dev/icons?i=docker",
        },
        {
          name: "Postgres",
          url: "https://skillicons.dev/icons?i=postgres",
        },
        {
          name: "Kafka",
          url: "https://skillicons.dev/icons?i=kafka",
        },
      ],
    },
     {
      id: "15",
      name: "Upload Storage Files",
      url: "https://github.com/Faelkk/upload-storage-files",
      urlGithub: "https://github.com/Faelkk/upload-storage-files",
      description:
        "O Upload Storage Files é um projeto pessoal para gerenciar arquivos de forma prática e segura, com suporte a upload, armazenamento local ou na nuvem (Cloudinary) e exclusão de arquivos. Ele valida o tamanho e tipo dos arquivos para evitar erros e problemas. Para garantir performance e escalabilidade, usa mensageria com RabbitMQ para processar uploads e exclusões de forma assíncrona, deixando o sistema mais rápido e estável. A arquitetura segue o padrão MVC adaptado para APIs REST, deixando o código organizado e fácil de manter.",
      cardimage: "/logos/LogoApi.svg",
      defaultimage: "",
      technologies: [
        {
          name: "C#",
          url: "https://skillicons.dev/icons?i=cs",
        },
        {
          name: ".NET",
          url: "https://skillicons.dev/icons?i=dotnet",
        },
        {
          name: "Docker",
          url: "https://skillicons.dev/icons?i=docker",
        },
          {
          name: "RabbitmQ",
          url: "https://skillicons.dev/icons?i=rabbitmq",
        },
      ],
    },
  ],
};
