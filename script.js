// Função para remover acentos, substituir "ç" por "c" e remover pontuações
function removeAccents(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '') 
              .replace(/ç/g, 'c') 
              .replace(/[.,?!;(){}[\]"']/g, ''); 
}

// Estrutura de dados para as respostas
const keywords = {
    'endereco': {
        keywords: ['endereco'],
        info: 'O IFSP Campus Salto está localizado na Av. dos Três Poderes, nº 375, no Residencial Central Parque, em Salto, São Paulo, oferecendo educação pública de qualidade em diversas áreas.'
    },
    'telefone': {
        keywords: ['telefone', 'contato'],
        info: 'O telefone do IFSP Campus Salto é (11) 4602-9191, utilizado para atender a consultas e fornecer informações sobre cursos, inscrições e outros serviços oferecidos pela instituição.'
    },
    'funcionamento': {
        keywords: ['funcionamento'],
        info: 'O IFSP Campus Salto funciona nos seguintes horários: de segunda a sexta-feira, das 07:00 às 22:40, e aos sábados, das 08:00 às 18:30. O campus está fechado aos domingos. Esses horários são flexíveis, podendo ser ajustados conforme a demanda dos alunos e a programação de atividades.'
    },
    'facebook': {
        keywords: ['facebook salto', 'facebook campus'],
        info: 'O Facebook do Câmpus Salto é o IFSP Salto. Você pode acessá-lo pelo link: https://www.facebook.com/ifsp.salto/.'
    },
    'instagram': {
        keywords: ['instagram salto', 'instagram campus'],
        info: 'O Instagram do Câmpus Salto é o @ ifsp.salto. Você pode acessá-lo pelo link: https://www.instagram.com/ifsp.salto.'
    },
    'informatica para internet': {
        keywords: ['informatica para internet'],
        info: 'O curso Técnico em Informática para Internet forma profissionais capacitados para desenvolver sites, sistemas web, aplicativos e gerenciar redes e servidores. É oferecido em duas modalidades: integrado ao ensino médio, com duração de três anos, e subsequente, com duração de três semestres. O ingresso ocorre por processo seletivo. Para mais informações, acesse o site do IFSP Salto.'
    },
    'mecatronica': {
        keywords: ['mecatronica'],
        info: 'O Técnico em Mecatrônica é capacitado para atuar em automação, sistemas mecânicos, eletrônicos e manutenção de máquinas. O curso, integrado ao ensino médio, tem duração de 3 anos e entrada via processo seletivo. Para mais informações, acesse o site do IFSP Salto.'
    },
    'automacao': {
        keywords: ['automacao', 'industrial'],
        info: 'O curso Técnico em Automação Industrial capacita profissionais para desenvolver e gerenciar sistemas automatizados em processos industriais. É oferecido em duas modalidades: integrado ao ensino médio, com duração de três anos, e subsequente, com duração de três semestres. O ingresso ocorre por processo seletivo. Para mais informações, acesse o site do IFSP Salto.'
    },
    'informatica': {
        keywords: ['informatica'],
        info: 'O curso Técnico em Informática capacita profissionais para desenvolver, implementar e manter sistemas computacionais e redes. É oferecido em duas modalidades: integrado ao ensino médio, com duração de três anos, e subsequente, com duração de três semestres. O ingresso ocorre por processo seletivo. Para mais informações, acesse o site do IFSP Salto.'
    },
    'administracao': {
        keywords: ['administracao'],
        info: 'O curso Técnico em Administração é oferecido na modalidade EAD, capacitando profissionais para gerenciar e otimizar processos administrativos. É subsequente ao ensino médio, com duração de três semestres. O ingresso ocorre por processo seletivo. Para mais informações, acesse o site do IFSP Salto.'
    },
    'ciencia da computacao': {
        keywords: ['ciencia da computacao'],
        info: 'A graduação em Ciência da Computação forma profissionais capacitados para desenvolver soluções computacionais e atuar em diversas áreas da tecnologia. O curso tem duração de 4 anos, com aulas presenciais no período da manhã. A entrada é feita por meio do SISU (Sistema de Seleção Unificada), que utiliza as notas do Enem para selecionar candidatos. Para mais informações, visite o site da instituição.'
    },
    'engenharia': {
        keywords: ['engenharia'],
        info: 'O IFSP Campus Salto oferece a graduação em Engenharia de Controle e Automação, que forma profissionais qualificados para projetar, desenvolver e gerenciar sistemas automatizados em diversas indústrias. O curso tem duração de 5 anos, com aulas presenciais no período integral, predominantemente pela manhã. A entrada é realizada por meio do SISU (Sistema de Seleção Unificada), que utiliza as notas do Enem para selecionar candidatos. Para mais informações, visite o site da instituição.'
    },
    'matematica': {
        keywords: ['matematica'],
        info: 'A graduação em Matemática forma profissionais capacitados para atuar em diversas áreas, incluindo pesquisa, ensino e setores que demandam análise quantitativa. O curso tem duração de 4 anos, com aulas presenciais no período noturno. A entrada é realizada por meio do SISU (Sistema de Seleção Unificada), que utiliza as notas do Enem para selecionar candidatos. Para mais informações, visite o site da instituição.'
    },

    'portugues': {
        keywords: ['portugues', 'letras'],
        info: 'A graduação em Letras forma profissionais preparados para atuar na área de ensino de línguas e literatura, além de desenvolver habilidades de comunicação e análise crítica. O curso tem duração de 4 anos, com aulas presenciais no período noturno. A entrada é realizada por meio do SISU (Sistema de Seleção Unificada), que utiliza as notas do Enem para selecionar candidatos. Para mais informações, visite o site da instituição.'
    },
    'ads': {
        keywords: ['ads', 'sistemas', 'tecnologo'],
        info: 'O curso de Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) forma profissionais capacitados para atuar no desenvolvimento de software e gerenciamento de sistemas computacionais. O curso tem duração de 5 semestres, com aulas presenciais no período noturno. A entrada é realizada por meio do SISU (Sistema de Seleção Unificada), que utiliza as notas do Enem para selecionar candidatos. Para mais informações, visite o site da instituição.'
    },
    'curso': {
        keywords: ['curs'],
        info: 'O IFSP Campus Salto disponibiliza 4 cursos técnicos, 5 cursos de graduação e 3 cursos de pós-graduação.\n\nPara obter mais informações, faça a pergunta relativo ao curso técnico, como "Fale sobre o técnico em informática".'
    },
    'tecnico': {
        keywords: ['tecnico'],
        info: 'O IFSP Campus Salto oferece os seguintes cursos técnicos: Informática para Internet, Mecatrônica, Administração EAD e Automação Industrial. Os cursos são disponibilizados nas modalidades integrados ao Ensino Médio e concomitantes ou subsequentes.\n\nPara mais informações, pergunte sobre o curso técnico desejado, como por exemplo: "Fale sobre o curso técnico em Informática."'
    },
    'graduacao': {
        keywords: ['graduacao'],
        info: 'O IFSP Campus Salto oferece um total de cinco graduações. Entre os Bacharelados, estão disponíveis os cursos de Ciência da Computação e Engenharia de Controle e Automação. Na área de Licenciaturas, o campus oferece os cursos de Letras - Português e Matemática. Além disso, na categoria de Cursos Tecnológicos, está disponível o curso de Análise e Desenvolvimento de Sistemas. Se desejar mais informações, sinta-se à vontade para perguntar!'
    },
    'acesso_suap': {
        keywords: ['acesso suap'],
        info: 'Para entrar no SUAP em casos gerais, digite suap.ifsp.edu.br na barra de endereço do navegador. Na tela de login, insira seu CPF e a senha previamente definida. Após isso, clique em "Acessar" para entrar no sistema. Se você for um novo usuário, siga os seguintes passos: Na tela de login, clique em "Primeiro acesso". Indique sua matrícula e CPF, marcando a caixa "Não sou um robô", e clique em "Enviar". Você receberá um link por e-mail para definir sua senha. Para acessos futuros, entre na mesma página, insira seu CPF e senha, e clique em "Acessar".'
    },
    'suap': {
        keywords: ['suap'],
        info: 'O SUAP (Sistema Unificado de Administração Pública) do IFSP é uma plataforma digital que integra diversas funcionalidades para a gestão acadêmica e administrativa da instituição. Ele permite que alunos, professores e servidores acessem informações sobre matrícula, notas, frequência e documentos, facilitando a comunicação e a administração dos processos internos do instituto.'
    },
    'email_aluno': {
        keywords: ['email aluno', 'email acesso'],
        info: 'O IFSP disponibiliza um e-mail institucional para alunos no formato @aluno.ifsp.edu.br. Este e-mail oferece uma caixa de mensagens e acesso a ferramentas como Office 365 e armazenamento na nuvem. Para criar uma conta de e-mail, o aluno deve acessar o SUAP, assinar o termo de uso, escolher seu e-mail e seguir as instruções enviadas para seu e-mail pessoal. Caso tenha dúvidas, é recomendado procurar a Coordenadoria de Tecnologia da Informação (TI), a Coordenadoria de Apoio ao Ensino (CAE) ou a Coordenadoria Sociopedagógica (CSP) do câmpus.'
    },
    'biblioteca': {
        keywords: ['biblioteca'],
        info: 'A biblioteca do IFSP Câmpus Salto atende nos períodos matutino, vespertino e noturno, oferecendo espaços para estudo. Possui empréstimos de livros e periódicos pelo sistema Pergamum, com acesso a livros virtuais e normas técnicas. O acervo abrange diversas áreas do conhecimento, em constante expansão. O horário de funcionamento é de segunda a quinta, das 8h às 22h, e na sexta, das 8h às 20h. Contato: biblioteca.salto@ifsp.edu.br.'
    },
    'pos_graduacao': {
        keywords: ['pos graduacao, pos graduacoes'],
        info: 'As especializações do IFSP em Salto são: Temas Transversais, Cultura, Educação e Tecnologias, e Educação Matemática: Crítica e Sociedade. Se precisar de mais informações ou detalhes, estou à disposição!'
    },
    'temas_transversais': {
        keywords: ['temas transversais'],
        info: 'A Pós-graduação Lato Sensu em Temas Transversais forma profissionais da educação para atuar criticamente em questões como Ética, Saúde e Pluralidade Cultural. O ingresso se dá por processo seletivo, no turno noturno, com duração de 3 semestres e carga horária mínima de 420 horas. O curso é presencial, com 30 vagas disponíveis.'
    },
    'cultura_educacao_tec': {
        keywords: ['cultura educacao tec'],
        info: 'A Pós-graduação Lato Sensu em Cultura, Educação e Tecnologias visa formar profissionais críticos na educação, integrando tecnologias da informação e comunicação ao ensino. O ingresso ocorre por processo seletivo, com duração de 3 semestres no turno noturno, totalizando 420 horas. O curso é presencial e oferece 30 vagas.'
    },
    'matematica_critica': {
        keywords: ['matematica critica'],
        info: 'A Pós-graduação Lato Sensu em Educação Matemática: Crítica e Sociedade forma profissionais críticos para atuar na Educação Básica e Superior. O ingresso ocorre por processo seletivo, com início das aulas em abril de 2024. O curso tem duração de 3 semestres, é presencial no turno noturno e oferece 30 vagas.'
    },
    'cae': {
        keywords: ['cae', 'apoio ao ensino'],
        info: 'A CAE (Coordenadoria de Apoio ao Ensino) é responsável por auxiliar e controlar as atividades do corpo docente e discente no câmpus, oferecendo suporte pedagógico e divulgando atividades educacionais. O setor também supervisiona o Programa de Alimentação Escolar e garante o cumprimento das normas disciplinares, visando melhorar a experiência educacional de todos.'
    },
    'alimentacao': {
        keywords: ['alimentacao'],
        info: 'O sistema de alimentação do IFSP Campus Salto permite o agendamento de refeições. Os pedidos devem ser feitos de segunda-feira a partir das 08:00 am até quinta-feira às 23:59 pm. Não há possibilidade de cancelamento dos pedidos. Caso a refeição não seja retirada, é necessário justificar no sistema de alimentação. Sem a justificativa, você ficará bloqueado para novos pedidos. Para mais informações, consulte o tutorial no sistema ou envie um e-mail para alimentacao.slt@ifsp.edu.br.'
    },
    'csp': {
        keywords: ['csp', 'coordenadoria sociopedagogica'],
        info: 'A CSP orienta, acompanha e propõe ações pedagógicas e psicossociais para promover a qualidade do ensino e a permanência dos alunos. Oferece orientação educacional, assistência estudantil (PAE) e apoio ao docente, além de combater a evasão escolar. A equipe inclui assistente social, pedagogos, psicólogo e técnicos educacionais. Telefone: (11) 4602-9194 E-mail: csp.slt@ifsp.edu.br Horário de atendimento: Segunda a sexta, das 8h às 21h.'
    },
    'bolsa_ensino': {
        keywords: ['bolsa ensino'],
        info: 'O Programa de Bolsas de Ensino, regulamentado pela Portaria nº 1254/2013, tem como objetivo apoiar a participação dos estudantes em atividades acadêmicas e projetos que contribuam para sua formação e aprimoramento profissional. A bolsa permite que o aluno desenvolva atividades educacionais compatíveis com seu nível de conhecimento, interagindo com docentes e auxiliando outros discentes. Para participar, fique atento às divulgações no site do IFSP sobre os projetos e prazos de inscrição.'
    },
    'pesquisa': {
        keywords: ['pesquisa'],
        info: 'O Programa Institucional de Bolsas de Iniciação Científica e Tecnológica do IFSP (PIBIFSP) tem o objetivo de introduzir estudantes de nível médio e de graduação à pesquisa científica e tecnológica. Os professores orientadores submetem projetos de pesquisa para avaliação, geralmente em outubro. Após a aprovação, o orientador seleciona os candidatos para as bolsas, que têm duração de 9 meses. O resultado é divulgado em fevereiro, e o trabalho segue até novembro, com o envio de dois relatórios à Pró-reitoria de Pesquisa: um em julho e outro em dezembro, no final do projeto.'
    },
    'inscricao': {
        keywords: ['inscricao', 'processo seletivo'],
        info: 'As modalidades técnico, graduação e pós-graduação no IFSP campus Salto possuem processos seletivos diferentes. Para informações específicas sobre cada modalidade, basta digitar técnico, graduação ou pós e você receberá detalhes sobre o processo seletivo correspondente.'
    },
    'infraestrutura': {
        keywords: ['infraestrutura', 'setor'],
        info: 'A infraestrutura do IFSP Campus Salto é dividida em Direção Geral (DRG), Diretoria Adjunta de Administração (DAA) e Diretoria Adjunta Educacional (DAE), cada uma com suas subdivisões. A Direção Geral supervisiona todas as atividades, enquanto a DAA cuida das questões administrativas e a DAE é responsável pelos aspectos educacionais. Para mais informações sobre cada setor, basta perguntar!'
    },
    'direcao geral': {
        keywords: ['direcao geral', 'drg'],
        info: 'A direção geral é responsável por supervisionar e coordenar as atividades acadêmicas e administrativas da instituição. O e-mail drg.slt@ifsp.edu.br é um canal de comunicação para assuntos relacionados à Direção Geral. A direção geral é dividida em CDI (Coordenação de Apoio à Direção), CEX (Coordenação de Extensão), CTI (Coordenação de Tecnologia da Informação) e CPI (Coordenação de Pesquisa e Inovação). Se tiver dúvidas sobre algum dos setores, basta perguntar.'
    },
    'diretoria administracao': {
        keywords: ['diretoria administracao', 'daa'],
        info: 'A Diretoria Adjunta de Administração (DAA) do IFSP é responsável pela coordenação administrativa da instituição. Ela é composta por quatro subdivisões: CCF: Coordenação de Contabilidade e Finanças. CAP: Coordenação de Manutenção, Almoxarifado e Patrimônio. CGP: Coordenação de Gestão de Pessoas. CLT: Coordenação de Licitações e Contratos. Para mais informações, contate: daa.slt@ifsp.edu.br.'
    },
    'diretoria educacional': {
        keywords: ['diretoria educacional', 'dae'],
        info: 'A Diretoria Adjunta Educacional (DAE) do IFSP é responsável pela coordenação das atividades educacionais e pela supervisão dos cursos oferecidos. Ela se organiza em diversas subdivisões, incluindo: CBI: Biblioteca. CAE: Coordenação de Apoio ao Ensino. CRA: Coordenação de Registros Acadêmicos. CSP: Coordenação Sociopedagógica. ADS: Coordenação do Curso de Análise e Desenvolvimento de Sistemas. BCC: Coordenação do Curso de Ciência da Computação. ECA: Coordenação do Curso de Engenharia de Controle e Automação. GPI: Coordenação do Curso de Gestão da Produção Industrial. LET: Coordenação do Curso de Letras-Português. MAT: Coordenação do Curso de Matemática. TAI: Coordenação do Curso de Automação Industrial. TINF: Coordenação do Curso de Informática. PTT: Coordenação do Curso de Pós-Graduação Lato Sensu em Temas Transversais. TADM: Coordenação de Curso Técnico em Administração. Para mais informações, contate: dae.salto@ifsp.edu.br.'
    },
    'coordenadoria direcao': {
        keywords: ['coordenadoria direcao', 'direcao'],
        info: 'A Coordenadoria de Apoio à Direção (CDI) é um órgão do Campus Salto do IFSP, que fornece suporte técnico-administrativo à Direção-Geral. Suas atribuições incluem a elaboração de documentos oficiais, controle de comissões, e gestão de correspondências. Para contato, utilize o e-mail cdi.slt@ifsp.edu.br ou o telefone (11) 4602-9186.'
    },
    'coordenadoria extensao': {
        keywords: ['coordenadoria extensao', 'cex'],
        info: 'A Coordenadoria de Extensão (CEX) do IFSP planeja e executa atividades que promovem a integração com a comunidade externa. Suas ações incluem eventos, cursos, estágios, acordos de cooperação e visitas técnicas, visando fortalecer o intercâmbio e a extensão da instituição. Para mais informações, acesse os canais da CEX.'
    },
    'coordenadoria tecnologia': {
        keywords: ['coordenadoria tecnologia', 'cti'],
        info: 'A Coordenadoria de Tecnologia da Informação (CTI) do IFSP é responsável por coordenar e implementar atividades de informática no campus. Suas competências incluem treinamento de pessoal, manutenção de sistemas, desenvolvimento de softwares, e suporte técnico. Para questões técnicas, contate suporteservidor.slt@ifsp.edu.br; para outros assuntos, utilize cti.salto@ifsp.edu.br.'
    },
    'coordenadoria apoio': {
        keywords: ['coordenadoria apoio', 'apoio ensino', 'cae'],
        info: 'A Coordenadoria de Apoio ao Ensino (CAE) do IFSP apoia e controla atividades do corpo docente e discente, colaborando no atendimento à comunidade escolar. Subordinada à Diretoria Adjunta de Ensino, suas funções incluem assessorar coordenações de cursos, organizar horários escolares, auxiliar docentes em recursos pedagógicos e garantir a execução do Programa de Alimentação Escolar.'
    },
    'sociopedagogica': {
        keywords: ['sociopedagogica', 'csp'],
        info: 'A Coordenadoria Sociopedagógica (CSP) do IFSP orienta e acompanha ações pedagógicas e psicossociais para melhorar o ensino-aprendizagem e a permanência dos alunos. Suas atividades incluem orientação educacional, assistência estudantil, apoio ao docente e combate à evasão. A CSP, composta por uma equipe interdisciplinar, está subordinada à Diretoria Adjunta Educacional. Para contato, utilize csp.slt@ifsp.edu.br ou ligue 4602-9194 (Ramal).'
    },

    //IFSP
    'ifsp': {
        keywords: ['ifsp', 'instituto federal'],
        info: 'O IFSP (Instituto Federal de São Paulo) é uma instituição de ensino que oferece cursos técnicos, superiores e de pós-graduação, com foco em educação tecnológica, pesquisa e extensão, promovendo desenvolvimento social e econômico.\n\nSe você tiver uma pergunta mais específica, sinta-se à vontade para perguntar! Estou aqui para ajudar.'
    },

    'instagram ifsp': {
        keywords: ['nstagram'],
        info: 'O IFSP (Instituto Federal de São Paulo) é uma instituição de ensino que oferece cursos técnicos, superiores e de pós-graduação, com foco em educação tecnológica, pesquisa e extensão, promovendo desenvolvimento social e econômico.\n\nSe você tiver uma pergunta mais específica, sinta-se à vontade para perguntar! Estou aqui para ajudar.'
    },

    //PROFESSORES
    'professor ailson': {
        keywords: ['professor ailson'],
        info: 'O professor Ailson Teixeira atua na área de Indústria e está disponível para atendimento nas seguintes datas e horários: segunda-feira, das 14h00 às 19h00; terça-feira, das 19h00 às 22h35; e quarta-feira, das 14h00 às 16h00. Para entrar em contato, você pode enviar um e-mail para ailson@ifsp.edu.br.'
    },
    'professora almerinda': {
        keywords: ['professora almerinda'],
        info: 'A professora Almerinda Antônia atua na área de Educação Básica e está disponível para atendimento na quarta-feira, das 13h30 às 14h30. Para contato, você pode enviar um e-mail para almefadini@gmail.com.'
    },
    'professor amauri': {
        keywords: ['professor amauri'],
        info: 'O professor Amauri Amorim atua na área de Indústria e oferece atendimento aos alunos nas sextas-feiras, das 10h às 12h. Para contato, utilize o e-mail profamauri@ifsp.edu.br.'
    },
    'professora ana paula': {
        keywords: ['professora ana paula'],
        info: 'A professora Ana Paula atua na área de Informática e está disponível para atendimento via e-mail. Você pode entrar em contato pelo endereço anapaula.darosa@ifsp.edu.br para mais informações.'
    },
    'professor anderson': {
        keywords: ['professor anderson'],
        info: 'O professor Anderson Yasuhiro Afuso atua na área de Educação Básica e está disponível para atendimento às terças-feiras, das 19h00 às 21h00, e às quintas-feiras, das 11h00 às 12h00. Para contato, utilize o e-mail anderson.afuso@ifsp.edu.br.'
    },
    'professora bruna': {
        keywords: ['professora bruna'],
        info: 'A professora Bruna Lammoglia atua na área de Educação Básica e está disponível para atendimento na sala dos professores, das 16h às 17h. Para contato, você pode enviar um e-mail para bruna@ifsp.edu.br.'
    },
    'professor bruno': {
        keywords: ['professor bruno'],
        info: 'O professor Bruno do Amaral atua na área de Indústria e está disponível para atendimento na sala dos professores, às quartas-feiras, das 15h às 16h. Para contato, utilize o e-mail brunodoamaral@ifsp.edu.br.'
    },
    'professor caio': {
        keywords: ['professor caio'],
        info: 'O professor Caio Marcus Dias Flausino atua na área de Indústria e está disponível para atendimento às terças-feiras, das 16h30 às 17h; às quartas-feiras, das 14h às 16h; e às sextas-feiras, das 16h30 às 17h. Para contato, utilize o e-mail flausino@ifsp.edu.br.'
    },
    'professor carlos': {
        keywords: ['professor carlos'],
        info: 'O professor Carlos Henrique atua na área de Educação Básica e está disponível para atendimento às quartas-feiras, das 17h às 18h. Para contato, você pode enviar um e-mail para carlos.henrique@ifsp.edu.br.'
    },
    'professora carla': {
        keywords: ['professora carla'],
        info: 'A professora Cathia Alves atua na área de Educação Básica e está disponível para atendimento nas segundas-feiras, das 10h00 às 12h00. Para contato, você pode enviar um e-mail para cathiaalves@ifsp.edu.br.'
    },
    'docentes': {
        keywords: ['docentes', 'professores'],
        info: 'O IFSP Campus Salto possui docentes nas áreas de Educação Básica, Indústria e Informática. Para informações sobre um professor em particular, sinta-se à vontade para perguntar!'
    },
    'professor claudio haruo': {
        keywords: ['professor claudio haruo'],
        info: 'O professor Cláudio Haruo Yamamoto atua na área de Informática e está disponível para atendimento às terças-feiras, das 18h às 19h, mediante agendamento prévio por e-mail. Para contato, utilize haruo@ifsp.edu.br. Mais informações estão disponíveis em seu Lattes.'
    },
    'claudio luis': {
        keywords: ['claudio luis'],
        info: 'O professor Cláudio Luis atua na área de Informática e está disponível para atendimento na quarta, quinta e sexta-feira, das 18h00 às 19h00, mediante agendamento prévio. Para contato, utilize o e-mail claudioroveri@ifsp.edu.br.'
    },
    'professor claudio': {
        keywords: ['professor claudio'],
        info: 'Há dois professores chamados Cláudio no IFSP Campus Salto: Cláudio Haruo Yamamoto - Atua na área de Informática. O atendimento é às terças-feiras, das 18h às 19h, com agendamento prévio por e-mail. Para contato, utilize haruo@ifsp.edu.br. Cláudio Luis Roveri Vieira - Também atua na área de Informática. O atendimento é na quarta, quinta e sexta-feira, das 18h às 19h, mediante agendamento prévio. Para contato, utilize claudioroveri@ifsp.edu.br.'
    },
    'professor damione': {
        keywords: ['professor damione'],
        info: 'O professor Damione Damito atua na área de Informática. Ele está disponível para atendimento às terças-feiras, das 18h às 19h, com agendamento prévio por e-mail. Para contato, utilize damione@ifsp.edu.br.'
    },
    'professor ed': {
        keywords: ['professor ed'],
        info: 'O professor Ed Alencar atua na área de Indústria. Seu atendimento é realizado nas quartas-feiras, das 18h às 19h, na sala dos professores (Bloco A). Ele também oferece orientação de estágio às sextas-feiras, das 18h às 19h, e em sala virtual via Google Meet, mediante agendamento por e-mail. Para contato, utilize ed_alencar@ifsp.edu.br.'
    },
    'professor edilson': {
        keywords: ['professor edilson'],
        info: 'O professor Edilson Aparecido atua na área de Educação Básica e possui titulação de Doutorado. No momento, ele está afastado para reitoria. Para mais informações sobre sua atuação e retorno, consulte a administração do IFSP.'
    },
    'professor edson': {
        keywords: ['professor edson'],
        info: 'O professor Edson Murakami atua na área de Informática. Ele está disponível para atendimento às quartas-feiras, das 15h às 16h. Para contato, utilize murakami@ifsp.edu.br.'
    },
    'professor eduardo': {
        keywords: ['professor eduardo'],
        info: 'O professor Eduardo Tadeu atua na área de Informática. Ele está atualmente afastado para qualificação. Para mais informações sobre sua atuação e retorno, consulte a administração do IFSP.'
    },
    'professor eli': {
        keywords: ['professor eli'],
        info: 'O professor Eli Gomes Castanho atua na área de Educação Básica. Para contato, utilize o e-mail eli.castanho@ifsp.edu.br. Para informações adicionais, entre em contato com a administração do IFSP.'
    },
    'professora eliane': {
        keywords: ['professora eliane'],
        info: 'A professora Eliane Aparecida Bacocina atua na área de Educação Básica e possui titulação de Doutorado. Ela está disponível para atendimento às segundas-feiras, das 18h às 19h. Para contato, utilize elianeab@ifsp.edu.br. Mais informações podem ser encontradas em seu Lattes.'
    },
    'professor erico': {
        keywords: ['professor erico'],
        info: 'O professor Érico Pessoa atua na área de Indústria. Ele está disponível para atendimento às quartas-feiras, das 14h às 16h, na sala dos professores, mediante agendamento por e-mail. Para contato, utilize ericopfelix@ifsp.edu.br.'
    },
    'professor modesto': {
        keywords: ['professor modesto', 'professor fabio alexandre'],
        info: 'O professor Fabio Modesto atua na área de Informática e possui titulação de Mestrado. Ele está disponível para atendimento às terças e quartas-feiras, das 09h00 às 12h00, na biblioteca. Para contato, utilize o e-mail fabiomodesto@ifsp.edu.br.'
    },
    'professor fabio de paula': {
        keywords: ['professor fabio de paula'],
        info: 'O professor Fabio de Paula Santos atua na área de Informática. Ele está disponível para atendimento às quartas-feiras, das 10h30 às 11h30. Para contato, utilize o e-mail fabio.santos@ifsp.edu.br.'
    },
    'professor fabio lumertz': {
        keywords: ['professor fabio lumertz'],
        info: 'O professor Fábio Lumertz Garcia atua na área de Indústria. Seu atendimento ocorre às quartas-feiras, das 14h00 às 16h00, mediante agendamento por e-mail, e pode ser realizado na sala dos professores ou no Lab 215. Para contato, utilize o e-mail fabiolumertz@ifsp.edu.br.'
    },
    'professor fabio': {
        keywords: ['professor fabio'],
        info: 'Há mais de um professor chamado Fábio no IFSP. Abaixo estão os detalhes dos três professores: O professor Fabio Modesto atua na área de Informática. Ele está disponível para atendimento às terças e quartas-feiras, das 09h00 às 12h00, na biblioteca. Para contato, utilize o e-mail fabiomodesto@ifsp.edu.br. O professor Fabio de Paula atua na área de Informática. Ele está disponível para atendimento às quartas-feiras, das 10h30 às 11h30. Para contato, utilize o e-mail fabio.santos@ifsp.edu.br. O professor Fábio Lumertz atua na área de Indústria. Seu atendimento ocorre às quartas-feiras, das 14h00 às 16h00, mediante agendamento por e-mail, e pode ser realizado na sala dos professores ou no Lab 215. Para contato, utilize o e-mail fabiolumertz@ifsp.edu.br.'
    },
    'professora fabiola': {
        keywords: ['professora fabiola'],
        info: 'A professora Fabíola Tocchini atua na área de Indústria e está disponível para atendimento às quartas-feiras, das 14h às 15h. Para contato, utilize o e-mail fabiolatdef@ifsp.edu.br.'
    },
    'professora fabricia': {
        keywords: ['professora fabricia'],
        info: 'A professora Fabricia da Silva atua na área de Educação Básica e está disponível para atendimento às quintas-feiras, das 13h30 às 15h. Para contato, utilize o e-mail fabricia.souza@ifsp.edu.br.'
    },
    'professor felipe': {
        keywords: ['professor felipe'],
        info: 'O professor Felipe Antonio Moura Miranda atua na área de Informática, mas está atualmente afastado para exercício em outro ministério. Para informações, você pode enviar um e-mail para miranda@ifsp.edu.br.'
    },
    'professor francisco': {
        keywords: ['professor francisco'],
        info: 'O professor Francisco Diego atua na área de Informática e está disponível para atendimento às sextas-feiras, das 17h às 18h. O agendamento deve ser feito por e-mail, diego@ifsp.edu.br.'
    },
    'professor giacomo': {
        keywords: ['professor giacomo'],
        info: 'O professor Giacomo Augusto Bonetto atua na área de Educação Básica e está disponível para atendimento às terças-feiras, das 15h às 16h. Para contato, utilize o e-mail profgiacomo@ifsp.edu.br.'
    },
    'professora giavana': {
        keywords: ['professora giovana'],
        info: 'A professora Giovana Yuko atua na área de Informática e oferece atendimento aos alunos nas terças-feiras, das 10h40 às 11h40, e nas quartas-feiras, das 07h30 às 08h30. Para mais informações, envie um e-mail para gyuko@ifsp.edu.br.'
    },
    'professora graziela': {
        keywords: ['professora graziela'],
        info: 'A professora Graziela Bachião atua na área de Educação Básica e está disponível para atendimento na quinta-feira, das 18h às 19h. Para contato, utilize o e-mail grazielabachiao@ifsp.edu.br.'
    },
    'professora jacqueline': {
        keywords: ['professora jacqueline'],
        info: 'A professora Jacqueline de Almeida Barbosa Franco atua na área de Indústria e oferece atendimento assíncrono em qualquer dia da semana por e-mail. Para contato, envie um e-mail para jacqueline.almeida@ifsp.edu.br.'
    },
    'professora joana': {
        keywords: ['professora joana'],
        info: 'A professora Joana de São Pedro atua na área de Educação Básica e está disponível para atendimento na quarta-feira, das 15h às 16h. Para contato, utilize o e-mail joana.pedro@ifsp.edu.br.'
    },
    'professora juliana': {
        keywords: ['professora juliana'],
        info: 'A professora Juliana Arruda Vieira atua na área de Educação Básica e está disponível para atendimento nas quintas-feiras, das 14h às 15h, e nas sextas-feiras, das 18h às 19h. O atendimento é realizado por meio do Meet. Para contato, utilize o e-mail juliana.vieira@ifsp.edu.br.'
    },
    'professor leonardo': {
        keywords: ['professor leonardo'],
        info: 'O professor Leonardo Borges da Cruz atua na área de Educação Básica e está disponível para atendimento na segunda-feira, das 08h às 10h. Para contato, utilize o e-mail professorleo@ifsp.edu.br.'
    },
    'professor luis': {
        keywords: ['professor luis', 'professor luiz'],
        info: 'No IFSP Campus Salto, existem mais de um professor com o nome "Luis". Para facilitar a identificação, seguem os detalhes de cada um: Luis Sacchi atua na área de Informática e está disponível para atendimento às terças-feiras, das 13h às 14h. Para contato, envie um e-mail para sacchi@ifsp.edu.br. Luiz Ferrari atua na área de Indústria. Para mais informações, entre em contato via e-mail. Luiz Biagio atua na área de Indústria. Para mais informações, entre em contato via e-mail. Luiz Eduardo Miranda atua na área de Indústria. Para mais informações, entre em contato via e-mail.'
    },
    'professor sacchi': {
        keywords: ['professor sacchi', 'professor luis henrique'],
        info: 'O professor Luis Henrique Sacchi atua na área de Informática e está disponível para atendimento às terças-feiras, das 13h às 14h. Para contato, envie um e-mail para sacchi@ifsp.edu.br.'
    },
    'professor ferrari': {
        keywords: ['professor luiz antonio', 'professor ferrari'],
        info: 'Luiz Antonio Ferrari atua na área de Indústria. Para mais informações, entre em contato via e-mail.'
    },
    'professor biagio': {
        keywords: ['professor luiz arnaldo', 'professor biagio'],
        info: 'O professor Luiz Arnaldo Biagio atua na área de Indústria. Para mais informações, entre em contato via e-mail.'
    },
    'professor luiz eduardo': {
        keywords: ['professor luiz eduardo'],
        info: 'O professor Luiz Eduardo Miranda José Rodrigues atua na área de Indústria. Para mais informações, entre em contato via e-mail.'
    },
    'professor marcio': {
        keywords: ['professor marcio'],
        info: 'O professor Márcio Pironel atua na área de Educação Básica e está disponível para atendimento às quartas-feiras, das 13h30 às 15h30, e às terças-feiras, das 18h às 19h. Para contato, envie um e-mail para marcio.pironel@ifsp.edu.br.'
    },
    'professor marcos': {
        keywords: ['professor marcos'],
        info: 'O professor Marcos Alexandre Capellari atua na área de Educação Básica e está disponível para atendimento às quartas-feiras, das 15h às 16h. Para contato, envie um e-mail para capellari@ifsp.edu.br.'
    },
    'professor marisol': {
        keywords: ['professora marisol'],
        info: 'A professora Marisol Gosse Bergamo atua na área de Educação Básica e está disponível para atendimento às sextas-feiras, das 8h40 às 10h40. Para mais informações, entre em contato via e-mail.'
    },
    'professor mateus': {
        keywords: ['professor mateus'],
        info: 'O professor Mateus Cruz atua na área de Educação Básica e está disponível para atendimento às quartas-feiras, das 14h às 16h, ou em outro dia e horário mediante agendamento por e-mail. Para contato, envie um e-mail para mateus.carvalho@ifsp.edu.br.'
    },
    'professor mauricio': {
        keywords: ['professor mauricio'],
        info: 'O professor Maurício Bronzatto atua na área de Educação Básica e está disponível para atendimento às sextas-feiras, das 18h às 19h, com agendamento prévio. Para contato, envie um e-mail para mauricio.bronzatto@ifsp.edu.br.'
    },
    'professor mauro': {
        keywords: ['professor mauro'],
        info: 'O professor Mauro Sérgio atua na área de Indústria e está disponível para atendimento às quintas-feiras, das 17h às 19h, com agendamento via e-mail. Para contato, envie um e-mail para mauro@ifsp.edu.br.'
    },
    'professor nilson': {
        keywords: ['professor nilson'],
        info: 'O professor Nilson Roberto atua na área de Indústria e está disponível para atendimento em diversos horários durante a semana, mediante agendamento via e-mail. Para contato, envie um e-mail para inocente@ifsp.edu.br.'
    },
    'professor paulo': {
        keywords: ['professor paulo'],
        info: 'O professor Paulo Sérgio Prampero atua na área de Informática e está disponível para atendimento às quartas-feiras, das 14h às 16h. Para contato, envie um e-mail para prampero@ifsp.edu.br.'
    },
    'professora priscila': {
        keywords: ['professora priscila'],
        info: 'A professora Pricila Balan atua na área de Educação Básica e está disponível para atendimento às segundas e quartas-feiras, em horários assíncronos e síncronos. Para contato, envie um e-mail para pricilapicinato@ifsp.edu.br.'
    },
    'professor reinaldo': {
        keywords: ['professor reinaldo'],
        info: 'Há dois docentes com o nome Reinaldo: Reinaldo Batista Leite atua na área de Indústria e oferece atendimento às quartas-feiras, das 13h30 às 14h30, mediante agendamento prévio. Para contato, o e-mail é rbleite@ifsp.edu.br. Reinaldo do Valle Junior atua na área de Informática e está disponível para atendimento em diversos horários de segunda a quinta-feira. Para contato, o e-mail é rvallejr@ifsp.edu.br.'
    },
    'professor reinaldo batista': {
        keywords: ['professor reinaldo batista'],
        info: 'O professor Reinaldo Batista atua na área de Indústria e está disponível para atendimento mediante agendamento às quartas-feiras, das 13h30 às 14h30. Para contato, envie um e-mail para rbleite@ifsp.edu.br.'
    },
    'professor reinaldo do valle': {
        keywords: ['professor reinaldo do valle'],
        info: 'O professor Reinaldo do Valle Junior atua na área de Informática e está disponível para atendimento em diversos horários de segunda a quinta-feira. Para contato, envie um e-mail para rvallejr@ifsp.edu.br.'
    },
    'professora rejane': {
        keywords: ['professor rejane'],
        info: 'A professora Rejane Paloma Faria atua na área de Educação Básica e está disponível para atendimento às terças-feiras, das 13h30 às 14h30, e às sextas-feiras, das 18h às 19h. Para contato, envie um e-mail para rejane.faria@ifsp.edu.br.'
    },
    'professora renata': {
        keywords: ['professor renata'],
        info: 'A professora Renata Couto atua na área de Informática e está disponível para atendimento às terças-feiras, das 14h às 15h. Para contato, envie um e-mail para renata.couto@ifsp.edu.br.'
    },
    'professor ronaldo': {
        keywords: ['professor ronaldo'],
        info: 'O professor Ronaldo Lima atua na área de Informática e está disponível para atendimento às quartas-feiras, das 14h às 16h, e sextas-feiras, das 17h às 18h. Para contato, envie um e-mail para ronaldo.lima@ifsp.edu.br.'
    },
    'professor samuel': {
        keywords: ['professor samuel'],
        info: 'O professor Samuel Albino atua na área de Informática e está disponível para atendimento mediante agendamento via e-mail. Para contato, envie um e-mail para samuel.albino@ifsp.edu.br.'
    },
    'professor_renato': {
        keywords: ['professor renato'],
        info: 'O professor Renato Francisco atua na área de Educação Básica e atende nas segundas-feiras, das 18h às 19h. Para contato, envie um e-mail para renatomello@ifsp.edu.br.'
    },
    'professor_ricardo': {
        keywords: ['professor ricardo'],
        info: 'Há dois docentes com o nome Ricardo no IFSP, ambos atuando em áreas diferentes: Ricardo Dantas, que atua na área de Informática. Ele oferece atendimento nas quartas, quintas e sextas-feiras às 18h, mediante agendamento prévio por e-mail. Seu e-mail é dematte@ifsp.edu.br. Ricardo Zani, que atua na área de Educação Básica. Seu horário de atendimento é às quartas-feiras, das 14h às 16h, e pode ser contatado pelo e-mail zani@ifsp.edu.br.'
    },
    'professor_ricardo_dantas': {
        keywords: ['professor ricardo dantas'],
        info: 'O professor Ricardo Dantas Dematte atua na área de Informática e realiza atendimentos às quartas, quintas e sextas-feiras, sempre às 18h, com agendamento prévio por e-mail. Para contato, envie um e-mail para dematte@ifsp.edu.br.'
    },
    'professor_ricardo_zani': {
        keywords: ['professor ricardo zani'],
        info: 'O professor Ricardo Zani atua na área de Educação Básica e atende às quartas-feiras, das 14h às 16h. Para contato, envie um e-mail para zani@ifsp.edu.br.'
    },
    'professora_seila': {
        keywords: ['professora seila'],
        info: 'A professora Seila Vasti Faria de Paiva atua na área de Informática e oferece atendimento às quartas-feiras, das 14h às 15h, e às quintas-feiras, das 12h30 às 13h30. Para contato, envie um e-mail para svfpaiva@ifsp.edu.br.'
    },
    'professor_silvio': {
        keywords: ['professor silvio'],
        info: 'O professor Sílvio César Otero Garcia atua na área de Educação Básica e realiza atendimentos de forma assíncrona por e-mail, a qualquer dia ou horário. Para contato, envie um e-mail para oterogarcia@ifsp.edu.br.'
    },
    'professora_tatiana': {
        keywords: ['professora tatiana'],
        info: 'A professora Tatiana Bussaglia de Moraes atua na área de Indústria. Para contato, envie um e-mail para tatiana@ifsp.edu.br.'
    },
    'professor_uesclei': {
        keywords: ['professor uesclei'],
        info: 'O professor Uesclei Costa Santos atua na área de Indústria. Para contato, envie um e-mail para uesclei.costa@ifsp.edu.br.'
    },
    'professora_vania': {
        keywords: ['professora vania'],
        info: 'A professora Vânia Gomes atua na área de Educação Básica e atende às quartas-feiras, das 9h30 às 10h30. Para contato, envie um e-mail para vania.gomes@ifsp.edu.br.'
    }
};


// Função para buscar a resposta
function searchKeywords(keywords, question) {
    let found = null;
    const normalizedQuestion = removeAccents(question.toLowerCase()); // Normaliza a pergunta
    const questionWords = normalizedQuestion.split(' '); // Divide a pergunta em palavras

    for (const [key, value] of Object.entries(keywords)) {
        for (const keyword of value.keywords) {
            const normalizedKeyword = removeAccents(keyword.toLowerCase()); // Normaliza a palavra-chave
            const keywordWords = normalizedKeyword.split(' '); // Divide a palavra-chave em palavras

            // Verifica se todas as palavras da palavra-chave estão presentes na pergunta
            if (keywordWords.every(word => questionWords.includes(word))) {
                return value.info; // Retorna a informação correspondente
            }
        }
    }
    return found;
}

function getAnswer() {
    const question = removeAccents(document.getElementById('question').value.toLowerCase());
    let response = searchKeywords(keywords, question);

    if (!response) {
        response = 'Desculpe, não tenho uma resposta para isso.';
    }

    document.getElementById('response').innerText = response;
    speak(response);

    // Adiciona a animação de "talk" à imagem do robô
    const roboImage = document.getElementById('robo-image');
    roboImage.classList.add('talk');

    // Remove a animação de "talk" após a fala ser finalizada
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.3;
    
    let voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => voice.lang === 'pt-BR' && voice.name.includes('Google')) || voices[0];
    utterance.voice = preferredVoice;

    // Quando a fala terminar, remover a animação
    utterance.onend = () => {
        roboImage.classList.remove('talk');
    };
    
    window.speechSynthesis.speak(utterance);
}



// Função para converter texto em fala
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.3;
    
    let voices = window.speechSynthesis.getVoices();
    if (!voices.length) {
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => voice.lang === 'pt-BR' && voice.name.includes('Google')) || voices[0];
            utterance.voice = preferredVoice;
            window.speechSynthesis.speak(utterance);
        };
    } else {
        const preferredVoice = voices.find(voice => voice.lang === 'pt-BR' && voice.name.includes('Google')) || voices[0];
        utterance.voice = preferredVoice;
        window.speechSynthesis.speak(utterance);
    }
}

