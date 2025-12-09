// lib/i18n/dictionary.ts
import type { Locale, Translations } from "../types";

export const dictionaries: Record<Locale, Translations> = {
  "pt-BR": {
    meta: {
      title: "Leonardo Santos | Engenheiro de Software · Dados & Web",
      description:
        "Engenheiro de software com foco em engenharia de dados e desenvolvimento full-stack. Construo pipelines de dados escaláveis, CRMs, dashboards e aplicações web para times de negócio.",
    },
    navigation: {
      home: "Início",
      about: "Sobre",
      skills: "Stack",
      experience: "Experiência",
      services: "Serviços",
      projects: "Projetos",
      testimonials: "Depoimentos",
      process: "Processo",
      faq: "FAQ",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Engenheiro de Software · Dados & Produto",
      name: "Leonardo Santos",
      role: "Data Engineer · Full-Stack Developer",
      subtitle:
        "Engenheiro de dados com experiência em desenvolvimento full-stack. Vou de pipelines em escala a CRMs, dashboards e landing pages prontas para conversão.",
      primaryCta: "Falar sobre dados",
      secondaryCta: "Falar sobre produto / site",
      badges: [
        "4+ anos em engenharia de dados",
        "Experiência em SaaS e CRM",
        "Disponível para trabalho remoto",
      ],
    },
    about: {
      title: "Sobre mim",
      body: "Comecei minha carreira em engenharia de dados, criando pipelines com Python, PySpark e Databricks para apoiar times de negócio com dados confiáveis. Com o tempo, quis ficar mais perto do produto final e passei a desenvolver aplicações web full-stack, incluindo um CRM SaaS multi-tenant. Hoje atuo na interseção dessas duas áreas: construo produtos web com uma base de dados bem pensada, prontos para crescer e gerar insight de verdade.",
      highlights: [
        {
          label: "Experiência",
          value: "4+ anos em engenharia de dados e desenvolvimento",
        },
        {
          label: "Foco",
          value: "SaaS B2B, CRM, analytics e aplicações web",
        },
        {
          label: "Modelo",
          value: "Freelance, contrato ou remoto",
        },
      ],
    },
    skills: {
      title: "Stack & habilidades",
      subtitle:
        "Tecnologias que uso para ir da ingestão de dados à interface final: de pipelines e modelagem a aplicações full-stack em produção.",
      categories: [
        {
          label: "Frontend",
          items: [
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
          ],
        },
        {
          label: "Backend & APIs",
          items: [
            { name: "Node.js", level: "Advanced" },
            { name: "Express / Fastify", level: "Advanced" },
            { name: "REST APIs", level: "Advanced" },
            { name: "JWT Auth", level: "Advanced" },
          ],
        },
        {
          label: "Engenharia de Dados",
          items: [
            { name: "Python & SQL", level: "Advanced" },
            { name: "PySpark & Databricks", level: "Advanced" },
            { name: "ETL / ELT", level: "Advanced" },
            { name: "Airflow, Kafka, NiFi", level: "Advanced" },
          ],
        },
        {
          label: "Bancos & Storage",
          items: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "Data Lakes / Warehouses", level: "Advanced" },
            { name: "GCS / Cloud Storage", level: "Advanced" },
          ],
        },
        {
          label: "DevOps & ferramentas",
          items: [
            { name: "Docker", level: "Intermediate" },
            { name: "CI/CD", level: "Intermediate" },
            { name: "Git & GitHub", level: "Advanced" },
          ],
        },
      ],
    },
    experience: {
      title: "Experiência",
      subtitle:
        "Uma combinação de engenharia de dados, desenvolvimento full-stack e produto digital.",
      items: [
        {
          company: "Space Sales (SaaS CRM Platform)",
          role: "Co-fundador & Desenvolvedor Full-Stack",
          location: "Brasil",
          period: "01/2025 — Presente",
          highlights: [
            "Desenho e desenvolvo uma plataforma CRM SaaS multi-tenant como único engenheiro, cuidando de backend, frontend, banco de dados e arquitetura.",
            "Construo APIs RESTful com Node.js, TypeScript, Express e autenticação JWT, garantindo isolamento de locatários seguro e escalável.",
            "Implemento todo o frontend com React e Tailwind, entregando dashboards responsivos e fluxos de leads.",
            "Estruturo e otimizo modelos de dados relacionais em PostgreSQL, incluindo desenho de esquema e indexação.",
            "Gerencio ambientes de desenvolvimento conteinerizados com Docker e mantenho o controle de versão baseado em Git.",
            "Faço deploy e mantenho ambientes de produção na Heroku, cuidando de pipelines, logs e escalabilidade.",
            "Colaboro com o cofundador de negócios/marketing na definição de roadmap, requisitos e suporte a usuários beta.",
          ],
        },
        {
          company: "DB",
          role: "Engenheiro de Dados",
          location: "Brasil",
          period: "08/2024 — 07/2025",
          highlights: [
            "Liderei o desenho e o desenvolvimento de pipelines ETL escaláveis no Databricks, usando PySpark e SQL para processar grandes volumes de dados.",
            "Colaborei com times para entregar soluções orientadas a dados que melhoraram a eficiência operacional e de inventário.",
            "Liderei iniciativas de migração de dados de SQL Server para Databricks, otimizando conjuntos de dados complexos de RH para melhor acessibilidade e análise.",
            "Executei estratégias de melhoria de qualidade de dados, garantindo precisão e consistência em conjuntos de dados críticos de negócio.",
            "Dei suporte a projetos de dados que aprimoraram operações fabris e gestão de estoque com insights acionáveis.",
            "Atuei com squads multifuncionais para impulsionar inovação em analytics e fomentar uma cultura data-driven entre as áreas de negócio.",
          ],
        },
        {
          company: "2RP Net",
          role: "Engenheiro de Dados",
          location: "Brasil",
          period: "11/2021 — 08/2024",
          highlights: [
            "Transformei dados financeiros brutos em conjuntos analíticos que melhoraram a tomada de decisão em avaliação de risco.",
            "Desenvolvi e mantive conjuntos de dados robustos para análise de cobrança, crédito e fraude com forte qualidade de dados.",
            "Impulsionei melhorias de eficiência e integridade em pipelines de dados, garantindo insights financeiros confiáveis.",
            "Colaborei com times multifuncionais para entregar soluções que suportam iniciativas-chave de risco financeiro.",
            "Contribuí para uma migração para nuvem que aumentou a escalabilidade dos dados e suportou processos modernos de gestão de risco.",
          ],
        },
      ],
    },

    services: {
      title: "Como posso ajudar",
      subtitle:
        "Trabalho em duas frentes principais: infraestrutura de dados para empresas e aplicações web completas para times de negócio.",
      ctaLabel: "Fale sobre um projeto",
      items: [
        {
          title: "Engenharia de dados",
          description:
            "Pipelines e plataformas de dados para suportar analytics, relatórios e produtos de dados.",
          bullets: [
            "Pipelines ETL/ELT com Python, PySpark e Databricks",
            "Modelagem de dados para relatórios e autosserviço",
            "Qualidade de dados e monitoramento básico",
          ],
        },
        {
          title: "Aplicações web & SaaS",
          description: "Produtos digitais completos, de CRMs a dashboards internos.",
          bullets: [
            "Arquitetura full-stack com Next.js, Node.js e PostgreSQL",
            "Autenticação, autorização e suporte a multi-tenant",
            "Dashboards e fluxos pensados para o time de negócio",
          ],
        },
        {
          title: "Landing pages & ferramentas internas",
          description:
            "Interfaces leves para validar ideias, acelerar operações e apoiar times de vendas/ops.",
          bullets: [
            "Landing pages otimizadas para campanhas",
            "Ferramentas internas sob medida para o seu fluxo",
            "Integrações com APIs de pagamento, CRM e automações",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos em destaque",
      subtitle:
        "Uma amostra de produtos e plataformas de dados que construí ou ajudei a desenhar.",
      items: [
        {
          title: "Plataforma CRM SaaS multi-tenant",
          summary:
            "CRM SaaS completo que desenvolvi como único dev, com pipeline de vendas, automações, atendimentos e relatórios para times comerciais.",
          role: "Co-fundador · Full-stack & arquitetura",
          tech: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Heroku",
          ],
          tags: ["SaaS", "Full-stack", "CRM"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "Dashboard e telas principais da plataforma CRM SaaS multi-tenant.",
          longDescription:
            "Desenhei e desenvolvi uma plataforma CRM SaaS multi-tenant como único desenvolvedor. No backend, implementei APIs REST com Node.js, TypeScript, Express e autenticação JWT, garantindo isolamento entre locatários. No frontend, construí uma interface completa em React e Tailwind para dashboard, pipelines, atendimentos, agentes de IA, automações e configurações. Modelei bancos em PostgreSQL, cuidei de índices e relacionamentos e fiz o deploy em Heroku, cobrindo todo o ciclo de vida da aplicação — da arquitetura à produção.",
          images: [
            "/projects/dashboard.png",
            "/projects/pipeline.png",
            "/projects/conversations.png",
            "/projects/automations.png",
          ],
        },
        {
          title: "SocialPilotX – landing page de automação para redes sociais",
          summary:
            "Landing page focada em conversão para uma plataforma de automação de posts que agenda conteúdos, sugere legendas e gera relatórios de performance.",
          role: "Frontend & UI design",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          tags: ["Landing page", "Site de marketing"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "Screenshot da landing page de automação de redes sociais SocialPilotX.",
          longDescription:
            "Projetei e desenvolvi uma landing page de uma única página para a SocialPilotX, plataforma que ajuda criadores e pequenos negócios a automatizarem suas redes sociais. A página apresenta os principais benefícios — agendamento de posts, sugestões de legendas com IA e relatórios de performance — em seções bem organizadas, com chamadas para ação fortes. O layout é totalmente responsivo, otimizado para tráfego mobile e estruturado para facilitar o entendimento da proposta e o agendamento de demonstrações.",
          images: ["/projects/social-pilot-x.png"],
        },
        {
          title:
            "Space Result – landing page de aceleração para confecções de lingerie",
          summary:
            "Landing page focada em conversão para um programa de aceleração de confecções de lingerie, com mentoria e serviços incluídos, voltado a negócios em busca de crescimento estruturado.",
          role: "Frontend & UI design",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          tags: ["Landing page", "Site de oferta"],
          liveUrl: "https://space-result-lp.vercel.app/",
          githubUrl: null,
          imageAlt:
            "Screenshot da landing page em vermelho e preto da oferta de aceleração de confecções de lingerie da Space Result.",
          longDescription:
            "Projetei e desenvolvi uma landing page para divulgar um programa de aceleração específico da Space Result, voltado para confecções de lingerie que querem crescer com mais previsibilidade. A página apresenta com clareza para quem é e para quem não é a oferta, explica o passo a passo da mentoria, mostra os entregáveis (diagnóstico, plano de ação e acompanhamento) e destaca a urgência de uma condição por tempo limitado. O foco é gerar inscrições qualificadas, filtrando o público certo e facilitando o agendamento de conversas com o time comercial.",
          images: ["/projects/space-result.png"],
        },
        {
          title: "Plataforma de dados para risco, cobrança e fraude",
          summary:
            "Pipelines de dados consolidando informações de risco de crédito, cobrança e fraude para um banco de varejo, apoiando analytics e migração para a nuvem.",
          role: "Engenheiro de Dados",
          tech: ["Python", "SQL", "Airflow", "GCP", "Oracle"],
          tags: ["Engenharia de dados", "Risco & cobrança"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "Diagrama de alto nível mostrando pipelines de dados de risco, cobrança e fraude alimentando tabelas analíticas.",
          longDescription:
            "Atuando como engenheiro de dados em um time de risco de um banco de crédito ao consumidor, trabalhei em pipelines que consolidavam dados para análise de risco de crédito, cobrança e fraude. Ingeri dados brutos de provedores externos e sistemas legados, transformei com Python e SQL e entreguei tabelas curadas usadas diariamente pelo time de analytics. Também participei de uma migração de quase um ano de um ambiente Oracle on-premises para GCP, adaptando pipelines, modelos de dados e orquestração para que a nova plataforma em nuvem entregasse conjuntos de dados confiáveis para relatórios operacionais e regulatórios.",
          images: ["/projects/de-risk-platform.png"],
        },
        {
          title: "Analytics de chão de fábrica e supply chain com Databricks",
          summary:
            "Pipelines Databricks transformando dados brutos do SAP em camadas bronze–silver–gold, entregando tabelas prontas para análise para times de fábrica e logística.",
          role: "Engenheiro de Dados",
          tech: ["Python", "PySpark", "Databricks", "SQL", "SAP"],
          tags: ["Engenharia de dados", "Manufatura"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "Diagrama mostrando dados fluindo do SAP para tabelas bronze, silver e gold no Databricks para analytics de chão de fábrica e supply chain.",
          longDescription:
            "Para um grupo industrial de manufatura, atuei em projetos focados em analytics de chão de fábrica e supply chain. Os times de negócio usavam o SAP como principal sistema transacional e precisavam extrair dados manualmente para relatórios. Eu desenhei e implementei pipelines no Databricks em PySpark que ingestavam dados do SAP em tabelas bronze, padronizavam e enriqueciam na camada silver e, por fim, geravam tabelas gold sob medida para cada caso de uso, como estoque, desempenho de produção e logística. Essa automação eliminou extrações manuais, melhorou a consistência dos dados e deu aos stakeholders acesso self-service a conjuntos de dados confiáveis.",
          images: ["/projects/de-shopfloor-databricks.png"],
        },
      ],
    },
    testimonials: {
      title: "Depoimentos",
      subtitle:
        "Algumas opiniões de pessoas com quem já trabalhei em dados e produto.",
      items: [
        {
          quote:
            "Melhor programador que já conheci. Consegui entregar uma demanda super complexa com API de WhatsApp, inteligência artificial e gestão de clientes. Recomendo muito o trabalho do Leonardo para todos que precisam desenvolver aplicações, sites e sistemas.",
          name: "Hudson Souza",
          role: "Fundador · Space Result",
          avatarUrl: "/testimonials/hudson.png",
        },
        {
          quote:
            "Leonardo demonstrou grande competência técnica atuando como engenheiro de dados em um grande projeto de risco e crédito no varejo financeiro, sempre entregando resultados com alto nível de organização. Apresentou excelente capacidade de comunicação, articulando ideias de forma clara e objetiva. É um profissional comprometido, confiável e com grande potencial para assumir desafios ainda maiores.",
          name: "Anderson David de Moura Junior",
          role: "Engenheiro de Dados",
          avatarUrl: "/testimonials/anderson.jpg",
        },
        {
          quote:
            "Tive um grande prazer em trabalhar com o Leonardo, que sempre foi uma soma para a squad. Entende as demandas com facilidade, respeita a priorização do time e mantém uma colaboração ímpar com todos os colegas. Extremamente profissional e ótimo de ter como colega.",
          name: "Osvaldo Caio Oliveira dos Santos",
          role: "Coordenador de Pesquisa e Desenvolvimento",
          avatarUrl: "/testimonials/caio.jpg",
        },
        {
          quote:
            "Leonardo demonstrou grande maturidade e competência atuando como engenheiro de dados na 2RP em um grande projeto para o varejo financeiro, entregando tudo sempre com a maior qualidade possível. Comunicação excelente, proativo e sempre disposto a melhorar a performance. Um profissional totalmente capacitado, comprometido com a equipe e com o projeto.",
          name: "Rafael Moraes dos Santos",
          role: "Engenheiro de Dados",
          avatarUrl: "/testimonials/rafael.jpg",
        },
      ],
    },
    process: {
      title: "Processo de trabalho",
      subtitle:
        "Um fluxo simples para reduzir risco, alinhar expectativas e entregar valor contínuo.",
      steps: [
        {
          title: "1. Descoberta",
          description:
            "Entendo contexto, dados disponíveis, restrições técnicas e objetivos de negócio.",
        },
        {
          title: "2. Desenho da solução",
          description:
            "Defino arquitetura, stack e roadmap, seja para uma aplicação web ou pipeline de dados.",
        },
        {
          title: "3. Implementação",
          description:
            "Desenvolvimento incremental com feedbacks frequentes e ambiente de testes/homologação.",
        },
        {
          title: "4. Entrega & acompanhamento",
          description:
            "Deploy, monitoramento inicial e ajustes com base no uso real e nas métricas.",
        },
      ],
    },
    faq: {
      title: "Perguntas frequentes",
      subtitle:
        "Algumas respostas rápidas sobre como trabalho com dados e desenvolvimento.",
      items: [
        {
          question: "Você trabalha com dados, desenvolvimento ou ambos?",
          answer:
            "Ambos. Posso atuar como engenheiro de dados, desenvolvedor full-stack ou combinando as duas frentes em um mesmo projeto.",
        },
        {
          question: "Quais tecnologias você mais usa hoje?",
          answer:
            "Para dados: Python, SQL, PySpark, Databricks e orquestradores. Para produto web: Next.js, React, TypeScript, Node.js e PostgreSQL.",
        },
        {
          question: "Você entra em projetos existentes?",
          answer:
            "Sim. Consigo entrar em pipelines ou bases já existentes, assim como em aplicações em produção, sempre com cuidado para não quebrar o que já funciona.",
        },
        {
          question: "Qual é o tamanho ideal de projeto?",
          answer:
            "Desde melhorias pontuais em pipelines ou features específicas em um SaaS até projetos de algumas semanas/meses envolvendo produto e dados.",
        },
      ],
    },
    contact: {
      title: "Vamos tirar seu projeto do papel",
      subtitle:
        "Seja para evoluir seu stack de dados ou lançar um produto web, me conte o contexto e eu retorno com próximos passos e uma estimativa inicial.",
      emailLabel: "Ou envie um e-mail direto para",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "Como posso te chamar?",
        emailLabel: "E-mail",
        emailPlaceholder: "seuemail@exemplo.com",
        subjectLabel: "Tipo de projeto",
        subjectPlaceholder:
          "Ex.: pipelines de dados, CRM SaaS, dashboard interno...",
        messageLabel: "Mensagem",
        messagePlaceholder:
          "Explique o contexto, objetivos, tecnologias envolvidas e prazos desejados.",
        submitLabel: "Enviar mensagem",
        sendingLabel: "Enviando...",
      },
      successMessage: "Mensagem enviada com sucesso! Vou responder em breve.",
      errorMessage:
        "Algo deu errado ao enviar o formulário. Tente novamente ou use o e-mail direto.",
    },
    footer: {
      copyright: "Todos os direitos reservados.",
      builtBy: "Feito por Leonardo Santos",
      quickLinksLabel: "Navegação",
      socialLabel: "Redes",
    },
  },
  en: {
    meta: {
      title: "Leonardo Santos | Software Engineer · Data & Web",
      description:
        "Software engineer focused on data engineering and full-stack development. I build scalable data pipelines, CRMs, dashboards and web applications for business teams.",
    },
    navigation: {
      home: "Home",
      about: "About",
      skills: "Stack",
      experience: "Experience",
      services: "Services",
      projects: "Projects",
      testimonials: "Testimonials",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Software Engineer · Data & Product",
      name: "Leonardo Santos",
      role: "Data Engineer · Full-Stack Developer",
      subtitle:
        "Data engineer with strong full-stack experience. I build everything from large-scale data pipelines to CRMs, dashboards and high-converting landing pages.",
      primaryCta: "Need data help",
      secondaryCta: "Need a web app or site",
      badges: [
        "4+ years in data engineering",
        "SaaS & CRM experience",
        "Open to remote work",
      ],
    },
    about: {
      title: "About",
      body: "I started my career in data engineering, building pipelines with Python, PySpark and Databricks to give business teams reliable data. Over time I wanted to be closer to the final product, so I moved into full-stack web development and co-founded a multi-tenant CRM SaaS. Today I work at the intersection of both: I build web products with a solid data foundation, ready to scale and generate real insight.",
      highlights: [
        {
          label: "Experience",
          value: "4+ years in data engineering and development",
        },
        {
          label: "Focus",
          value: "B2B SaaS, CRM, analytics and web apps",
        },
        {
          label: "Work model",
          value: "Freelance, contract or remote",
        },
      ],
    },
    skills: {
      title: "Tech stack",
      subtitle:
        "Technologies I use to go from raw data to final UI: from pipelines and modeling to full-stack applications in production.",
      categories: [
        {
          label: "Frontend",
          items: [
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
          ],
        },
        {
          label: "Backend & APIs",
          items: [
            { name: "Node.js", level: "Advanced" },
            { name: "Express / Fastify", level: "Intermediate" },
            { name: "REST APIs", level: "Advanced" },
            { name: "JWT Auth", level: "Intermediate" },
          ],
        },
        {
          label: "Data Engineering",
          items: [
            { name: "Python & SQL", level: "Advanced" },
            { name: "PySpark & Databricks", level: "Advanced" },
            { name: "ETL / ELT", level: "Advanced" },
            { name: "Airflow, Kafka, NiFi", level: "Intermediate" },
          ],
        },
        {
          label: "Databases & Storage",
          items: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "Data Lakes / Warehouses", level: "Intermediate" },
            { name: "GCS / Cloud Storage", level: "Intermediate" },
          ],
        },
        {
          label: "DevOps & tools",
          items: [
            { name: "Docker", level: "Intermediate" },
            { name: "CI/CD", level: "Intermediate" },
            { name: "Git & GitHub", level: "Advanced" },
          ],
        },
      ],
    },
    experience: {
      title: "Experience",
      subtitle:
        "A mix of data engineering, full-stack development and digital product work.",
      items: [
        {
          company: "Space Sales (SaaS CRM Platform)",
          role: "Co-founder & Full-Stack Developer",
          location: "Brazil",
          period: "01/2025 — Present",
          highlights: [
            "Design and develop a multi-tenant CRM SaaS platform as the sole engineer, handling backend, frontend, database, and architecture.",
            "Build RESTful APIs with Node.js, TypeScript, Express, and JWT authentication, ensuring secure and scalable tenant isolation.",
            "Implement the entire frontend using React and Tailwind, delivering responsive dashboards and lead workflows.",
            "Structure and optimize relational data models in PostgreSQL, including schema design and indexing.",
            "Manage containerized development environments with Docker and maintain Git-based version control.",
            "Deploy and maintain production environments on Heroku, handling pipelines, logs, and scalability.",
            "Collaborate with the business/marketing co-founder on roadmap definition, requirements, and beta user support.",
          ],
        },
        {
          company: "DB",
          role: "Data Engineer",
          location: "Brazil",
          period: "08/2024 — 07/2025",
          highlights: [
            "Spearheaded the design and development of scalable ETL pipelines in Databricks, leveraging PySpark and SQL to process large datasets.",
            "Collaborated with teams to deliver data-driven solutions that improved operational and inventory efficiency.",
            "Led data migration initiatives from SQL Server to Databricks, optimizing complex HR datasets for better accessibility and analysis.",
            "Executed data quality improvement strategies, ensuring accuracy and consistency across critical business datasets.",
            "Supported data projects that enhanced factory operations and inventory management with actionable insights.",
            "Partnered with cross-functional squads to drive innovation in data analytics and foster a data-centric culture across business units.",
          ],
        },
        {
          company: "2RP Net",
          role: "Data Engineer",
          location: "Brazil",
          period: "11/2021 — 08/2024",
          highlights: [
            "Transformed raw financial data into analytical datasets that improved decision-making in risk assessment.",
            "Developed and maintained robust datasets for collections, credit, and fraud analysis with strong data quality.",
            "Drove efficiency and integrity improvements across data pipelines, ensuring reliable financial insights.",
            "Collaborated with cross-functional teams to deliver solutions supporting key financial risk initiatives.",
            "Contributed to a cloud migration that enhanced data scalability and supported modern risk management processes.",
          ],
        },
      ],
    },

    services: {
      title: "What I do",
      subtitle:
        "I work in two main tracks: data infrastructure for companies and full-stack web products for business teams.",
      ctaLabel: "Let’s talk about a project",
      items: [
        {
          title: "Data engineering",
          description:
            "Data pipelines and platforms to power analytics, reporting and data products.",
          bullets: [
            "ETL/ELT pipelines with Python, PySpark and Databricks",
            "Data modeling for reporting and self-service analytics",
            "Data quality checks and basic monitoring",
          ],
        },
        {
          title: "Web apps & SaaS",
          description:
            "End-to-end digital products, from CRMs to internal dashboards.",
          bullets: [
            "Full-stack architecture with Next.js, Node.js and PostgreSQL",
            "Authentication, authorization and multi-tenant setups",
            "Dashboards and UX designed for business teams",
          ],
        },
        {
          title: "Landing pages & internal tools",
          description:
            "Lightweight interfaces to validate ideas, support operations and speed up teams.",
          bullets: [
            "High-converting landing pages for campaigns",
            "Custom internal tools for operations and sales",
            "Integrations with third-party APIs and services",
          ],
        },
      ],
    },
    projects: {
      title: "Selected projects",
      subtitle: "A sample of products and data platforms I helped design and build.",
      items: [
        {
          title: "Multi-tenant CRM SaaS platform",
          summary:
            "End-to-end CRM SaaS I built as the sole developer, with a multi-tenant architecture, sales pipelines, automations and reporting for sales teams.",
          role: "Co-founder · Full-stack & architecture",
          tech: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Heroku",
          ],
          tags: ["SaaS", "Full-stack", "CRM"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "Dashboard and main screens of the multi-tenant CRM SaaS platform.",
          longDescription:
            "Designed and developed a full multi-tenant CRM SaaS platform as the sole engineer. On the backend, I built REST APIs with Node.js, TypeScript, Express and JWT authentication to ensure tenant isolation. On the frontend, I created a complete React + Tailwind interface for dashboards, pipelines, conversations, AI agents, automations and settings. I structured PostgreSQL databases with proper indexing and relationships and deployed the system to Heroku, owning the entire lifecycle from architecture to production.",
          images: [
            "/projects/dashboard.png",
            "/projects/pipeline.png",
            "/projects/conversations.png",
            "/projects/automations.png",
          ],
        },
        {
          title: "SocialPilotX – social media automation landing page",
          summary:
            "Conversion-focused landing page for a social media automation platform that schedules posts, suggests captions and reports performance.",
          role: "Frontend & UI design",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          tags: ["Landing page", "Marketing site"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "Screenshot of the SocialPilotX social media automation landing page.",
          longDescription:
            "I designed and built a single-page marketing site for SocialPilotX, a platform that helps creators and small businesses automate their social media. The page highlights key benefits such as post scheduling, AI-powered caption suggestions and performance reports, using clear sections and strong calls-to-action. The layout is fully responsive, optimized for mobile traffic and structured to make it easy for visitors to understand the value and book a demo.",
          images: ["/projects/social-pilot-x.png"],
        },
        {
          title: "Space Result – limited-time lingerie acceleration landing page",
          summary:
            "Conversion-focused landing page for an acceleration program for lingerie manufacturers, combining mentoring and services to help businesses grow in a structured way.",
          role: "Frontend & UI design",
          tech: ["Next.js", "TypeScript", "Tailwind CSS"],
          tags: ["Landing page", "Marketing site"],
          liveUrl: "https://space-result-lp.vercel.app/",
          githubUrl: null, // preencha se o repo for público
          imageAlt:
            "Screenshot of a red and black landing page for Space Result’s lingerie acceleration program.",
          longDescription:
            "I designed and built a landing page to promote a focused acceleration program from Space Result, aimed at lingerie manufacturers that want more predictable growth. The page clearly explains who the offer is and isn’t for, walks through the step-by-step mentoring process, highlights the main deliverables (diagnostics, action plan and ongoing support) and reinforces the urgency of a limited-time condition. The goal is to generate qualified applications, filter the right audience and make it easy for leads to book a call with the sales team.",
          images: ["/projects/space-result.png"],
        },
        {
          title: "Financial risk, collections and fraud data platform",
          summary:
            "Data pipelines consolidating credit risk, collections and fraud data for a retail credit bank, powering analytics and migration to the cloud.",
          role: "Data Engineer",
          tech: ["Python", "SQL", "Airflow", "GCP", "Oracle"],
          tags: ["Data engineering", "Risk & collections"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "High-level diagram of data pipelines loading risk, collections and fraud data into curated analytics tables.",
          longDescription:
            "As a data engineer in a risk team for a retail credit bank, I worked on data pipelines that consolidated information for credit risk, collections and fraud analysis. I ingested raw data from third-party providers and legacy systems, transformed it with Python and SQL and delivered curated tables used daily by the analytics team. I also participated in a year-long migration from an on-prem Oracle environment to GCP, adapting pipelines, data models and orchestration so that the new platform could deliver reliable, cloud-based datasets for reporting and regulatory needs.",
          images: ["/projects/de-risk-platform-en.png"],
        },
        {
          title: "Shop floor and supply chain analytics with Databricks",
          summary:
            "Databricks pipelines turning raw SAP data into bronze–silver–gold layers, giving factory and supply chain teams automated, analytics-ready tables.",
          role: "Data Engineer",
          tech: ["Python", "PySpark", "Databricks", "SQL", "SAP"],
          tags: ["Data engineering", "Manufacturing"],
          liveUrl: null,
          githubUrl: null,
          imageAlt:
            "Diagram showing data flowing from SAP into bronze, silver and gold tables in Databricks for shop floor and supply chain analytics.",
          longDescription:
            "For an industrial manufacturing group, I worked on projects focused on shop floor and supply chain analytics. The business teams used SAP as their main system of record and previously had to pull data manually for reporting. I designed and implemented Databricks pipelines in PySpark that ingested SAP data into bronze tables, standardized and enriched it in silver and finally produced gold tables tailored for each use case, such as inventory, production performance and logistics. This automation removed manual reporting work, improved data consistency and gave stakeholders self-service access to reliable datasets.",
          images: ["/projects/de-shopfloor-databricks-en.png"],
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subtitle:
        "Feedback from people I worked with on data and product initiatives.",
      items: [
        {
          quote:
            "The best developer I’ve ever worked with. He helped me deliver a very complex project involving the WhatsApp API, artificial intelligence and customer management. I strongly recommend Leonardo’s work to anyone who needs to build applications, websites or systems.",
          name: "Hudson Souza",
          role: "Founder · Space Result",
          avatarUrl: "/testimonials/hudson.png",
        },
        {
          quote:
            "Leonardo showed great technical competence working as a data engineer on a large risk and credit project in retail financial services, consistently delivering well-organized results. He demonstrated excellent communication skills, explaining ideas clearly and objectively. He is a committed and reliable professional with strong potential to take on even bigger challenges.",
          name: "Anderson David de Moura Junior",
          role: "Data Engineer",
          avatarUrl: "/testimonials/anderson.jpg",
        },
        {
          quote:
            "I had the great pleasure of working with Leonardo, who was always a strong addition to the squad. He understands requirements quickly, respects the team’s priorities and collaborates exceptionally well with everyone. He is extremely professional and a great colleague to have on the team.",
          name: "Osvaldo Caio Oliveira dos Santos",
          role: "Research and Development Coordinator",
          avatarUrl: "/testimonials/caio.jpg",
        },
        {
          quote:
            "Leonardo showed great maturity and competence working as a data engineer at 2RP on a large project for the retail financial sector, always delivering with the highest quality. His communication is excellent, he is proactive and constantly looking to improve performance. A highly skilled professional, committed both to the team and to the project.",
          name: "Rafael Moraes dos Santos",
          role: "Data Engineer",
          avatarUrl: "/testimonials/rafael.jpg",
        },
      ],
    },
    process: {
      title: "How I work",
      subtitle:
        "A simple workflow that reduces risk, aligns expectations and delivers value continuously.",
      steps: [
        {
          title: "1. Discovery",
          description:
            "Understand context, available data, technical constraints and business goals.",
        },
        {
          title: "2. Solution design",
          description:
            "Define architecture, stack and roadmap, whether for a web app or a data pipeline.",
        },
        {
          title: "3. Implementation",
          description:
            "Incremental development with frequent check-ins and staging environments.",
        },
        {
          title: "4. Launch & follow-up",
          description:
            "Deployment, early monitoring and adjustments based on real usage and metrics.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subtitle:
        "Quick answers about how I work across data and development projects.",
      items: [
        {
          question: "Do you work on data, development, or both?",
          answer:
            "Both. I can join as a data engineer, a full-stack developer, or combine both roles in the same project.",
        },
        {
          question: "Which technologies do you use the most today?",
          answer:
            "For data: Python, SQL, PySpark, Databricks and orchestration tools. For web: Next.js, React, TypeScript, Node.js and PostgreSQL.",
        },
        {
          question: "Can you join existing projects?",
          answer:
            "Yes. I can work on existing pipelines or codebases already in production, carefully improving them without breaking what works.",
        },
        {
          question: "What is the typical project size?",
          answer:
            "Anything from focused improvements on pipelines or a specific feature in a SaaS product, up to multi-week projects involving both data and product.",
        },
      ],
    },
    contact: {
      title: "Let’s build something together",
      subtitle:
        "Whether you need better data pipelines or a better product experience, share a bit of context. I’ll reply with next steps and an initial estimate.",
      emailLabel: "Or email me directly at",
      form: {
        nameLabel: "Name",
        namePlaceholder: "How should I call you?",
        emailLabel: "Email",
        emailPlaceholder: "leodossantoslds@gmail.com",
        subjectLabel: "Project type",
        subjectPlaceholder: "e.g. data pipelines, CRM SaaS, internal dashboard...",
        messageLabel: "Message",
        messagePlaceholder:
          "Explain the context, goals, technologies involved and preferred timeline.",
        submitLabel: "Send message",
        sendingLabel: "Sending...",
      },
      successMessage: "Message sent successfully! I will get back to you soon.",
      errorMessage:
        "Something went wrong while sending the form. Please try again or use direct email.",
    },
    footer: {
      copyright: "All rights reserved.",
      builtBy: "Built by Leonardo Santos",
      quickLinksLabel: "Navigation",
      socialLabel: "Social",
    },
  },
};
