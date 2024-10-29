// Estrutura de palavras-chave e informações
const keywords = {
    'endereco': {
        keywords: ['endereco', 'local', 'localizacao', 'onde fica', 'como chegar', 'localidade'],
        info: 'O IFSP Campus Salto está localizado na Av. dos Três Poderes, nº 375, no Residencial Central Parque, em Salto, São Paulo.'
    },
    'telefone': {
        keywords: ['telefone', 'contato', 'número', 'ligar'],
        info: 'O telefone do IFSP Campus Salto é (11) 4602-9191, utilizado para atender a consultas e fornecer informações sobre cursos, inscrições e outros serviços oferecidos pela instituição.'
    },
    'funcionamento': {
        keywords: ['funcionamento', 'horas abre', 'expediente', 'horario de funcionamento', 'horario de atendimento', 'quando esta aberto'],
        info: 'O IFSP Campus Salto funciona nos seguintes horarios: de segunda a sexta-feira, das 07:00 às 22:40, e aos sábados, das 08:00 às 18:30. O campus está fechado aos domingos. Esses horarios são flexíveis, podendo ser ajustados conforme a demanda dos alunos e a programação de atividades.'
    },
    'facebook': {
        keywords: ['facebook salto', 'facebook campus', 'fb salto', 'fb campus'],
        info: 'O Facebook do Câmpus Salto é o IFSP Salto. Você pode acessá-lo pelo link: https://www.facebook.com/ifsp.salto/.'
    },
    'instagram': {
        keywords: ['instagram salto', 'instagram campus'],
        info: 'O Instagram do Câmpus Salto é o @ifsp.salto. Você pode acessá-lo pelo link: https://www.instagram.com/ifsp.salto.'
    },
    'redes sociais': {
        keywords: ['redes sociais', 'social media', 'plataformas sociais'],
        info: 'As redes sociais do IFSP Salto são: Instagram @ifsp.salto, Facebook IFSP Salto e o site oficial, onde você pode encontrar mais informações sobre cursos e eventos.'
    },
    'informatica para internet': {
        keywords: ['informatica internet', 'curso informatica'],
        info: 'O curso Técnico em Informática para Internet forma profissionais capacitados para desenvolver sites, sistemas web, aplicativos e gerenciar redes e servidores. É oferecido em duas modalidades: integrado ao ensino médio, com duração de três anos, e subsequente, com duração de três semestres. O ingresso ocorre por processo seletivo. Para mais informações, acesse o site do IFSP Salto.'
    },
    'mecatronica': {
        keywords: ['mecatronica'],
        info: 'O Técnico em Mecatrônica é capacitado para atuar em automação, sistemas mecânicos, eletrônicos e manutenção de máquinas. O curso, integrado ao ensino médio, tem duração de 3 anos e entrada via processo seletivo. Para mais informações, acesse o site do IFSP Salto.'
    },
    'automacao': {
        keywords: ['automacao'],
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
        keywords: ['ads', 'sistemas', 'tecnologo', 'análise e desenvolvimento'],
        info: 'O curso de Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) forma profissionais capacitados para atuar no desenvolvimento de software e gerenciamento de sistemas computacionais. O curso tem duração de 5 semestres, com aulas presenciais no período noturno. A entrada é realizada por meio do SISU (Sistema de Seleção Unificada), que utiliza as notas do Enem para selecionar candidatos. Para mais informações, visite o site da instituição.'
    },
    'tecnico': {
        keywords: ['tecnico'],
        info: 'O IFSP Campus Salto oferece os seguintes cursos técnicos: Informática para Internet, Mecatrônica, Administração EAD e Automação Industrial. Os cursos são disponibilizados nas modalidades integrados ao Ensino Médio e concomitantes ou subsequentes.\n\nPara mais informações, pergunte sobre o curso técnico desejado, como por exemplo: "Fale sobre o curso técnico em Informática."'
    },
    'acesso_suap': {
        keywords: ['acesso suap', 'login suap', 'acessar suap'],
        info: 'Para entrar no SUAP em casos gerais, digite suap.ifsp.edu.br na barra de endereço do navegador. Na tela de login, insira seu CPF e a senha previamente definida. Após isso, clique em "Acessar" para entrar no sistema. Se você for um novo usuário, siga os seguintes passos: Na tela de login, clique em "Primeiro acesso". Indique sua matrícula e CPF, marcando a caixa "Não sou um robô", e clique em "Enviar". Você receberá um link por e-mail para definir sua senha. Para acessos futuros, entre na mesma página, insira seu CPF e senha, e clique em "Acessar".'
    },
    'suap': {
        keywords: ['suap'],
        info: 'O SUAP (Sistema Unificado de Administração Pública) do IFSP é uma plataforma digital que integra diversas funcionalidades para a gestão acadêmica e administrativa da instituição. Ele permite que alunos, professores e servidores acessem informações sobre matrícula, notas, frequência e documentos, facilitando a comunicação e a administração dos processos internos do instituto.'
    },
    'acesso moodle': {
        keywords: ['acesso moodle', 'acessar moodle', 'entrar moodle', 'login moodle'],
        info: 'Para acessar o Moodle como aluno no IFSP, visite o site da instituição, clique na opção "Moodle" e insira seu CPF e senha. Caso não tenha acesso, verifique com o professor ou a coordenação do seu curso para obter as credenciais necessárias.'
    },
    'moodle': {
        keywords: ['moodle'],
        info: 'O Moodle é uma plataforma de aprendizado online utilizada pelo IFSP para gerenciar cursos, disponibilizar materiais, realizar avaliações e facilitar a interação entre alunos e professores.'
    },
    'email_aluno': {
        keywords: ['email aluno', 'email institucional', 'email estudante', 'acesso email', 'acessar email', 'criar email', 'criacao email'],
        info: 'O IFSP disponibiliza um e-mail institucional para alunos no formato @aluno.ifsp.edu.br. Este e-mail oferece uma caixa de mensagens e acesso a ferramentas como Office 365 e armazenamento na nuvem. Para criar uma conta de e-mail, o aluno deve acessar o SUAP, assinar o termo de uso, escolher seu e-mail e seguir as instruções enviadas para seu e-mail pessoal. Caso tenha dúvidas, é recomendado procurar a Coordenadoria de Tecnologia da Informação (TI), a Coordenadoria de Apoio ao Ensino (CAE) ou a Coordenadoria Sociopedagógica (CSP) do câmpus.'
    },
    'carteirinha': {
        keywords: ['carteirinha'],
        info: 'A carteirinha estudantil é um documento que comprova a condição de aluno. Para obtê-la, acesse o Suap, vá em "ENSINO", depois "Procedimentos de Apoio" e selecione "Emitir Carteirinha Estudantil". Em seguida, faça o download do arquivo gerado.'
    },
    'boletim': {
        keywords: ['boletim', 'notas', 'frequencia', 'frequencias', 'historico'],
        info: 'Para ver o boletim no Suap, acesse sua conta, clique em "ENSINO" e selecione "Boletim". Ali, você encontrará suas notas e frequências por disciplina, podendo visualizar o histórico acadêmico completo.'
    },
    'biblioteca': {
        keywords: ['biblioteca'],
        info: 'A biblioteca do IFSP Câmpus Salto atende nos períodos matutino, vespertino e noturno, oferecendo espaços para estudo. Possui empréstimos de livros e periódicos pelo sistema Pergamum, com acesso a livros virtuais e normas técnicas. O acervo abrange diversas áreas do conhecimento, em constante expansão. O horario de funcionamento é de segunda a quinta, das 8h às 22h, e na sexta, das 8h às 20h. Contato: biblioteca.salto@ifsp.edu.br.'
    },
    'pos_graduacao': {
        keywords: ['pos graduacao', 'especializacoes', 'especializacao'],
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
    'graduacao': {
        keywords: ['graduacao', 'bacharelados', 'licenciaturas'],
        info: 'O IFSP Campus Salto oferece um total de cinco graduações. Entre os Bacharelados, estão disponíveis os cursos de Ciência da Computação e Engenharia de Controle e Automação. Na área de Licenciaturas, o campus oferece os cursos de Letras - Português e Matemática. Além disso, na categoria de Cursos Tecnológicos, está disponível o curso de Análise e Desenvolvimento de Sistemas. Se desejar mais informações, sinta-se à vontade para perguntar!'
    },
    'cae': {
        keywords: ['cae', 'apoio ao ensino', 'suporte pedagógico'],
        info: 'A CAE (Coordenadoria de Apoio ao Ensino) é responsável por auxiliar e controlar as atividades do corpo docente e discente no câmpus, oferecendo suporte pedagógico e divulgando atividades educacionais. O setor também supervisiona o Programa de Alimentação Escolar e garante o cumprimento das normas disciplinares, visando melhorar a experiência educacional de todos.'
    },
    'alimentacao': {
        keywords: ['alimentacao'],
        info: 'O sistema de alimentação do IFSP Campus Salto permite o agendamento de refeições. Os pedidos devem ser feitos de segunda-feira a partir das 08:00 am até quinta-feira às 23:59 pm. Não há possibilidade de cancelamento dos pedidos. Caso a refeição não seja retirada, é necessário justificar no sistema de alimentação. Sem a justificativa, você ficará bloqueado para novos pedidos. Para mais informações, consulte o tutorial no sistema ou envie um e-mail para alimentacao.slt@ifsp.edu.br.'
    },
    'csp': {
        keywords: ['csp', 'coordenadoria sociopedagogica', 'assistencia social', 'apoio pedagogico'],
        info: 'A CSP orienta, acompanha e propõe ações pedagógicas e psicossociais para promover a qualidade do ensino e a permanência dos alunos. Oferece orientação educacional, assistência estudantil (PAE) e apoio ao docente, além de combater a evasão escolar. A equipe inclui assistente social, pedagogos, psicólogo e técnicos educacionais. Telefone: (11) 4602-9194 E-mail: csp.slt@ifsp.edu.br horario de atendimento: Segunda a sexta, das 8h às 21h.'
    },
    'auxilio_permanencia': {
        keywords: ['auxilio permanencia', 'assistencia estudantil', 'pae', 'bolsas'],
        info: 'O Programa de Auxílio Permanência (PAE) oferece suporte financeiro a estudantes em vulnerabilidade social, com renda per capita de até R$ 2.118,00. As modalidades incluem auxílio alimentação, transporte, moradia, creche, material didático e saúde. Para participar, acesse o SUAP e preencha a inscrição com documentos comprobatórios.'
    },
    'auxilio_alimentacao': {
        keywords: ['auxilio alimentacao', 'bolsa alimentacao', 'ajuda alimentacao'],
        info: 'O Auxílio Alimentação oferece R$ 200,00 mensais para garantir uma refeição diária aos estudantes. Alunos de cursos técnicos têm acesso à alimentação no campus, sem auxílio financeiro.'
    },
    'auxilio_transporte': {
        keywords: ['auxilio transporte', 'bolsa transporte', 'ajuda transporte'],
        info: 'O Auxílio Transporte destina R$ 120,00 mensais para cobrir despesas de deslocamento dos estudantes até o campus, facilitando o acesso às aulas e atividades acadêmicas.'
    },
    'apoio_pais': {
        keywords: ['apoio pais', 'apoio maes', 'suporte a pais'],
        info: 'O Apoio aos Estudantes Pais e Mães (Creche) oferece R$ 170,00 mensais para estudantes com filhos de até 11 anos e 11 meses, auxiliando nos custos com creche e cuidados infantis.'
    },
    'auxilio_didatico': {
        keywords: ['auxilio didatico', 'apoio didatico'],
        info: 'O Auxílio Apoio Didático-Pedagógico oferece até R$ 150,00 uma única vez para a compra de materiais didáticos relacionados ao curso ou projetos, visando apoiar o aprendizado dos estudantes.'
    },
    'auxilio_saude': {
        keywords: ['auxilio saude', 'bolsa saude', 'ajuda saude'],
        info: 'O Auxílio Saúde oferece até R$ 250,00 para estudantes com problemas de saúde que afetam o aprendizado, priorizando casos com dificuldade de acesso ao SUS. Solicitação requer laudo médico e análise da Coordenadoria Sociopedagógica.'
    },
    'bolsa_ensino': {
        keywords: ['bolsa ensino', 'bolsa auxilio'],
        info: 'O Programa de Bolsas de Ensino, regulamentado pela Portaria nº 1254/2013, tem como objetivo apoiar a participação dos estudantes em atividades acadêmicas e projetos que contribuam para sua formação e aprimoramento profissional. A bolsa permite que o aluno desenvolva atividades educacionais compatíveis com seu nível de conhecimento, interagindo com docentes e auxiliando outros discentes. Para participar, fique atento às divulgações no site do IFSP sobre os projetos e prazos de inscrição.'
    },
    'pesquisa': {
        keywords: ['pesquisa', 'iniciacao cientifica', 'pibifsp', 'bolsa de pesquisa'],
        info: 'O Programa Institucional de Bolsas de Iniciação Científica e Tecnológica do IFSP (PIBIFSP) tem o objetivo de introduzir estudantes de nível médio e de graduação à pesquisa científica e tecnológica. Os professores orientadores submetem projetos de pesquisa para avaliação, geralmente em outubro. Após a aprovação, o orientador seleciona os candidatos para as bolsas, que têm duração de 9 meses. O resultado é divulgado em fevereiro, e o trabalho segue até novembro, com o envio de dois relatórios à Pró-reitoria de Pesquisa: um em julho e outro em dezembro, no final do projeto.'
    },
    'inscricao': {
        keywords: ['inscricao', 'processo seletivo'],
        info: 'As modalidades técnico, graduação e pós-graduação no IFSP campus Salto possuem processos seletivos diferentes. Para informações específicas sobre cada modalidade, basta digitar técnico, graduação ou pós e você receberá detalhes sobre o processo seletivo correspondente.'
    },
    'infraestrutura': {
        keywords: ['infraestrutura', 'setor', 'setores', 'departamento', 'unidade', 'instalacoes'],
        info: 'A infraestrutura do IFSP Campus Salto é dividida em Direção Geral (DRG), Diretoria Adjunta de Administração (DAA) e Diretoria Adjunta Educacional (DAE), cada uma com suas subdivisões. A Direção Geral supervisiona todas as atividades, enquanto a DAA cuida das questões administrativas e a DAE é responsável pelos aspectos educacionais. Para mais informações sobre cada setor, basta perguntar!'
    },
    'direcao geral': {
        keywords: ['direcao geral', 'drg', 'administração central', 'gerencia'],
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
        keywords: ['coordenadoria direcao', 'direcao', 'cdi'],
        info: 'A Coordenadoria de Apoio à Direção (CDI) é um órgão do Campus Salto do IFSP, que fornece suporte técnico-administrativo à Direção-Geral. Suas atribuições incluem a elaboração de documentos oficiais, controle de comissões, e gestão de correspondências. Para contato, utilize o e-mail cdi.slt@ifsp.edu.br ou o telefone (11) 4602-9186.'
    },
    'coordenadoria extensao': {
        keywords: ['coordenadoria extensao', 'cex'],
        info: 'A Coordenadoria de Extensão (CEX) do IFSP planeja e executa atividades que promovem a integração com a comunidade externa. Suas ações incluem eventos, cursos, estágios, acordos de cooperação e visitas técnicas, visando fortalecer o intercâmbio e a extensão da instituição. Para mais informações, acesse os canais da CEX.'
    },
    'coordenadoria tecnologia': {
        keywords: ['coordenadoria tecnologia', 'cti', 'setor de tecnologia', 'suporte técnico'],
        info: 'A Coordenadoria de Tecnologia da Informação (CTI) do IFSP é responsável por coordenar e implementar atividades de informática no campus. Suas competências incluem treinamento de pessoal, manutenção de sistemas, desenvolvimento de softwares, e suporte técnico. Para questões técnicas, contate suporteservidor.slt@ifsp.edu.br; para outros assuntos, utilize cti.salto@ifsp.edu.br.'
    },
    'coordenadoria apoio': {
        keywords: ['coordenadoria apoio', 'apoio ensino', 'cae', 'suporte ensino', 'coordenadoria do apoio', 'assistência ao ensino'],
        info: 'A Coordenadoria de Apoio ao Ensino (CAE) do IFSP apoia e controla atividades do corpo docente e discente, colaborando no atendimento à comunidade escolar. Subordinada à Diretoria Adjunta de Ensino, suas funções incluem assessorar coordenações de cursos, organizar horarios escolares, auxiliar docentes em recursos pedagógicos e garantir a execução do Programa de Alimentação Escolar.'
    },
    'sociopedagogica': {
        keywords: ['sociopedagogica', 'csp', 'apoio social', 'coordenadoria pedagogica', 'apoio pedagogico', 'setor pedagogico'],
        info: 'A Coordenadoria Sociopedagógica (CSP) do IFSP orienta e acompanha ações pedagógicas e psicossociais para melhorar o ensino-aprendizagem e a permanência dos alunos. Suas atividades incluem orientação educacional, assistência estudantil, apoio ao docente e combate à evasão. A CSP, composta por uma equipe interdisciplinar, está subordinada à Diretoria Adjunta Educacional. Para contato, utilize csp.slt@ifsp.edu.br ou ligue 4602-9194 (Ramal).'
    },
    'ifa': {
        keywords: ['ifa', 'instrumento final'],
        info: 'O Instrumento Final de Avaliação (IFA) é acessível aos alunos que mantêm uma frequência mínima de 75% e uma média entre 4 e 6 na disciplina. A nota do IFA prevalece sobre a média das avaliações anteriores, significando que, se a nota do IFA for superior, ela será a considerada para a avaliação final. Para mais informações, converse com o professor.'
    },
    'abono de faltas': {
        keywords: ['abono faltas', 'justificativa falta', 'dispensa falta', 'declaração falta', 'isenção falta'],
        info: 'O abono de faltas é concedido em casos específicos, como declaração de corporação militar, participação em reuniões do CONAES, declaração do Diretor-Geral, atestado médico, certidão de óbito de parentes de primeiro grau ou cônjuge e solicitação judicial. O pedido deve ser feito à CRA em até dois dias úteis após o evento. Para afastamentos médicos superiores a 15 dias, é possível solicitar o Regime de Exercícios Domiciliares (RED).'
    },
    'aproveitamento de estudos': {
        keywords: ['aproveitamento estudos', 'dispensa disciplina', 'isenção disciplina'],
        info: 'O aluno pode solicitar o aproveitamento de estudos para dispensa de disciplinas, tanto em cursos técnicos quanto superiores, apresentando documentos como histórico escolar e ementa. O pedido deve ser feito na CRA, respeitando o calendário escolar, e o aluno deve cursar a disciplina até a aprovação.'
    },
    'cancelar matricula': {
        keywords: ['cancelar matricula', 'cancelamento matricula', 'encerrar matrícula', 'cancelamento curso', 'desistir curso'],
        info: 'O aluno pode solicitar o cancelamento da matrícula a qualquer momento, tornando nulos todos os atos acadêmicos. É necessário preencher um requerimento na CRA, apresentar declaração de débito da biblioteca e realizar entrevista na Coordenadoria Sócio Pedagógica. O IFSP também pode cancelar matrículas compulsoriamente em certas situações.'
    },
    'trancamento de semestre': {
        keywords: ['trancar semestre', 'trancamento semestre', 'trancar matricula', 'trancamento matricula', 'trancar curso', 'trancamento curso', 'pausa no curso'],
        info: 'O estudante pode requerer o trancamento de matrícula a partir do segundo período letivo, interrompendo os estudos por até um período letivo em cursos anuais ou dois em cursos semestrais.'
    },
    'frequencia necessaria': {
        keywords: ['frequencia necessaria', 'quanto frequencia', 'frequencia obrigatoria', 'minimo presença', 'percentual presenca', 'frequencia minima'],
        info: 'A frequência às aulas e atividades escolares é obrigatória, com um mínimo de 75% para aprovação.'
    },
    'rematricula': {
        keywords: ['rematricula', 'renovar matricula', 'renovacao matrícula', 'continuacao curso'],
        info: 'A rematrícula deve ser renovada a cada semestre letivo por meio do Requerimento de Rematrícula, formalizando a continuidade no curso. O pedido deve ser feito na CRE dentro do prazo estipulado no Calendário Escolar.'
    },
    'curso': {
        keywords: ['curso', 'cursos', 'curs'],
        info: 'O IFSP Campus Salto disponibiliza 4 cursos técnicos, 5 cursos de graduação e 3 cursos de pós-graduação.\n\nPara obter mais informações, faça a pergunta relativo ao curso técnico, como "Fale sobre o técnico em informática".'
    },
    'centro academico': {
        keywords: ['centro academico', 'cacc'],
        info: 'O Centro Acadêmico de Ciência da Computação (CACC) no IFSP promove atividades culturais, sociais e acadêmicas, além de representar os alunos. Siga o Instagram @cacc.ifsp para acompanhar eventos e novidades da área.'
    },
    'edilson': {
        keywords: ['edilson', 'diretor'],
        info: 'Edilson Aparecido Bueno é o Diretor Geral do Câmpus Salto do IFSP. Ele é responsável pela gestão administrativa e acadêmica da unidade, coordenando as atividades educacionais e promovendo o desenvolvimento do câmpus. Para entrar em contato, o e-mail dele é drg.slt@ifsp.edu.br.'
    },
    'reitoria': {
        keywords: ['reitoria', 'reitor', 'silmario'],
        info: 'A Reitoria é o órgão executivo que representa o IFSP, sendo responsável pela administração, coordenação e supervisão das atividades da autarquia.\n\nO atual Reitor é Silmário Batista dos Santos.'
    },

    //IFSP
    'ifsp': {
        keywords: ['ifsp', 'instituto federal', 'federal de são paulo', 'if são paulo'],
        info: 'O IFSP (Instituto Federal de São Paulo) é uma instituição de ensino que oferece cursos técnicos, superiores e de pós-graduação, com foco em educação tecnológica, pesquisa e extensão, promovendo desenvolvimento social e econômico.\n\nSe você tiver uma pergunta mais específica, sinta-se à vontade para perguntar! Estou aqui para ajudar.'
    },
    'instagram ifsp': {
        keywords: ['instagram ifsp', 'instagram instituto federal', 'ig ifsp'],
        info: 'O perfil oficial do IFSP (Instituto Federal de São Paulo) no Instagram é uma plataforma onde a instituição compartilha informações, eventos e notícias relevantes sobre sua comunidade e atividades.\n\nAcesse o perfil e fique por dentro das novidades!'
    },

    //PROFESSORES
    'professor ailson email': {
        keywords: ['professor ailson email', 'email professor ailson', 'contato professor ailson'],
        info: 'O email do professor Ailson Teixeira é ailson@ifsp.edu.br.'
    },
    'professor ailson horario': {
        keywords: ['professor ailson atendimento', 'professor ailson horario', 'horario professor ailson', 'atendimento professor ailson'],
        info: 'O professor Ailson Teixeira está disponível para atendimento nas seguintes datas e horarios: segunda-feira, das 14h00 às 19h00; terça-feira, das 19h00 às 22h35; e quarta-feira, das 14h00 às 16h00.'
    },
    'professor ailson': {
        keywords: ['professor ailson'],
        info: 'O professor Ailson Teixeira atua na área de Indústria. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professora almerinda email': {
        keywords: ['professora almerinda email', 'email professora almerinda', 'contato professora almerinda'],
        info: 'O email da professora Almerinda Antônia é almefadini@gmail.com.'
    },
    'professora almerinda horario': {
        keywords: ['professora almerinda atendimento', 'professora almerinda horario', 'horario professora almerinda', 'atendimento professora almerinda'],
        info: 'A professora Almerinda Antônia está disponível para atendimento na quarta-feira, das 13h30 às 14h30.'
    },
    'professora almerinda': {
        keywords: ['professora almerinda'],
        info: 'A professora Almerinda Antônia atua na área de Educação Básica. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },

    'professor amauri email': {
        keywords: ['professor amauri email', 'email professor amauri', 'contato professor amauri'],
        info: 'O email do professor Amauri Amorim é profamauri@ifsp.edu.br.'
    },
    'professor amauri horario': {
        keywords: ['professor amauri atendimento', 'professor amauri horario', 'horario professor amauri', 'atendimento professor amauri'],
        info: 'O professor Amauri Amorim oferece atendimento aos alunos nas sextas-feiras, das 10h às 12h.'
    },
    'professor amauri': {
        keywords: ['professor amauri'],
        info: 'O professor Amauri Amorim atua na área de Indústria. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professora ana paula email': {
        keywords: ['professora ana paula email', 'email professora ana paula', 'contato professora ana paula'],
        info: 'O email da professora Ana Paula é anapaula.darosa@ifsp.edu.br.'
    },
    'professora ana paula horario': {
        keywords: ['professora ana paula atendimento', 'professora ana paula horario', 'horario professora ana paula', 'atendimento professora ana paula'],
        info: 'A professora Ana Paula está disponível para atendimento via e-mail. Para mais informações, entre em contato pelo email fornecido.'
    },
    'professora ana paula': {
        keywords: ['professora ana paula'],
        info: 'A professora Ana Paula atua na área de Informática. Para mais informações, consulte seu e-mail para contato.'
    },
    'professor anderson email': {
        keywords: ['professor anderson email', 'email professor anderson', 'contato professor anderson'],
        info: 'O email do professor Anderson Yasuhiro Afuso é anderson.afuso@ifsp.edu.br.'
    },
    'professor anderson horario': {
        keywords: ['professor anderson atendimento', 'professor anderson horario', 'horario professor anderson', 'atendimento professor anderson'],
        info: 'O professor Anderson Yasuhiro Afuso está disponível para atendimento às terças-feiras, das 19h00 às 21h00, e às quintas-feiras, das 11h00 às 12h00.'
    },
    'professor anderson': {
        keywords: ['professor anderson'],
        info: 'O professor Anderson Yasuhiro Afuso atua na área de Educação Básica. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professora bruna email': {
        keywords: ['professora bruna email', 'email professora bruna', 'contato professora bruna'],
        info: 'O email da professora Bruna Lammoglia é bruna@ifsp.edu.br.'
    },
    'professora bruna horario': {
        keywords: ['professora bruna atendimento', 'professora bruna horario', 'horario professora bruna', 'atendimento professora bruna'],
        info: 'A professora Bruna Lammoglia está disponível para atendimento na sala dos professores, das 16h às 17h.'
    },
    'professora bruna': {
        keywords: ['professora bruna'],
        info: 'A professora Bruna Lammoglia atua na área de Educação Básica. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professor bruno email': {
        keywords: ['professor bruno email'],
        info: 'O email do professor Bruno do Amaral é brunodoamaral@ifsp.edu.br.'
    },
    'professor bruno horario': {
        keywords: ['professor bruno atendimento', 'professor bruno horario', 'professor bruno atende'],
        info: 'O email do professor Bruno do Amaral é brunodoamaral@ifsp.edu.br.'
    },
    'professor bruno': {
        keywords: ['professor bruno'],
        info: 'O professor Bruno do Amaral atua na área de Indústria e está disponível para atendimento na sala dos professores, às quartas-feiras, das 15h às 16h. Para contato, utilize o e-mail brunodoamaral@ifsp.edu.br.'
    },
    'professor caio email': {
        keywords: ['professor caio email', 'email professor caio', 'contato professor caio'],
        info: 'O email do professor Caio Marcus Dias Flausino é flausino@ifsp.edu.br.'
    },
    'professor caio horario': {
        keywords: ['professor caio atendimento', 'professor caio horario', 'horario professor caio', 'atendimento professor caio'],
        info: 'O professor Caio Marcus Dias Flausino está disponível para atendimento às terças-feiras, das 16h30 às 17h; às quartas-feiras, das 14h às 16h; e às sextas-feiras, das 16h30 às 17h.'
    },
    'professor caio': {
        keywords: ['professor caio'],
        info: 'O professor Caio Marcus Dias Flausino atua na área de Indústria. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professor carlos email': {
        keywords: ['professor carlos email', 'email professor carlos', 'contato professor carlos'],
        info: 'O email do professor Carlos Henrique é carlos.henrique@ifsp.edu.br.'
    },
    'professor carlos horario': {
        keywords: ['professor carlos atendimento', 'professor carlos horario', 'horario professor carlos', 'atendimento professor carlos'],
        info: 'O professor Carlos Henrique está disponível para atendimento às quartas-feiras, das 17h às 18h.'
    },
    'professor carlos': {
        keywords: ['professor carlos'],
        info: 'O professor Carlos Henrique atua na área de Educação Básica. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professora carla email': {
        keywords: ['professora carla email', 'email professora carla', 'contato professora carla'],
        info: 'O email da professora Cathia Alves é cathiaalves@ifsp.edu.br.'
    },
    'professora carla horario': {
        keywords: ['professora carla atendimento', 'professora carla horario', 'horario professora carla', 'atendimento professora carla'],
        info: 'A professora Cathia Alves está disponível para atendimento nas segundas-feiras, das 10h00 às 12h00.'
    },
    'professora carla': {
        keywords: ['professora carla'],
        info: 'A professora Cathia Alves atua na área de Educação Básica. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professor claudio haruo email': {
        keywords: ['professor claudio haruo email', 'email professor claudio haruo', 'contato claudio haruo'],
        info: 'O email do professor Cláudio Haruo Yamamoto é haruo@ifsp.edu.br.'
    },
    'professor claudio haruo horario': {
        keywords: ['professor claudio haruo atendimento', 'professor claudio haruo horario', 'horario claudio haruo', 'atendimento claudio haruo'],
        info: 'O professor Cláudio Haruo Yamamoto está disponível para atendimento às terças-feiras, das 18h às 19h, mediante agendamento prévio por e-mail.'
    },
    'professor claudio haruo': {
        keywords: ['professor claudio haruo'],
        info: 'O professor Cláudio Haruo Yamamoto atua na área de Informática. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido. Mais informações estão disponíveis em seu Lattes.'
    },

    'professor claudio luis email': {
        keywords: ['claudio luis email', 'email professor claudio luis', 'contato claudio luis'],
        info: 'O email do professor Cláudio Luis é claudioroveri@ifsp.edu.br.'
    },
    'professor claudio luis horario': {
        keywords: ['professor claudio luis atendimento', 'professor claudio luis horario', 'horario claudio luis', 'atendimento claudio luis'],
        info: 'O professor Cláudio Luis está disponível para atendimento na quarta, quinta e sexta-feira, das 18h00 às 19h00, mediante agendamento prévio.'
    },
    'professor claudio luis': {
        keywords: ['claudio luis'],
        info: 'O professor Cláudio Luis atua na área de Informática. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professor claudio': {
        keywords: ['professor claudio'],
        info: 'Há dois professores chamados Cláudio no IFSP Campus Salto: Cláudio Haruo Yamamoto - Atua na área de Informática. O atendimento é às terças-feiras, das 18h às 19h, com agendamento prévio por e-mail. Para contato, utilize haruo@ifsp.edu.br. Cláudio Luis Roveri Vieira - Também atua na área de Informática. O atendimento é na quarta, quinta e sexta-feira, das 18h às 19h, mediante agendamento prévio. Para contato, utilize claudioroveri@ifsp.edu.br.'
    },
    'professor damione email': {
        keywords: ['professor damione email', 'email professor damione', 'contato damione'],
        info: 'O email do professor Damione Damito é damione@ifsp.edu.br.'
    },
    'professor damione horario': {
        keywords: ['professor damione atendimento', 'professor damione horario', 'horario damione', 'atendimento damione'],
        info: 'O professor Damione Damito está disponível para atendimento às terças-feiras, das 18h às 19h, com agendamento prévio por e-mail.'
    },
    'professor damione': {
        keywords: ['professor damione'],
        info: 'O professor Damione Damito atua na área de Informática. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },

    'professor ed email': {
        keywords: ['professor ed email', 'email professor ed', 'contato ed'],
        info: 'O email do professor Ed Alencar é ed_alencar@ifsp.edu.br.'
    },
    'professor ed horario': {
        keywords: ['professor ed atendimento', 'professor ed horario', 'horario ed', 'atendimento ed'],
        info: 'O professor Ed Alencar realiza atendimento nas quartas-feiras, das 18h às 19h, na sala dos professores (Bloco A). Ele também oferece orientação de estágio às sextas-feiras, das 18h às 19h, em sala virtual via Google Meet, mediante agendamento por e-mail.'
    },
    'professor ed': {
        keywords: ['professor ed'],
        info: 'O professor Ed Alencar atua na área de Indústria. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professor edilson email': {
        keywords: ['professor edilson email', 'email professor edilson', 'contato edilson'],
        info: 'O professor Edilson Aparecido não está disponível para contato por e-mail no momento, pois está afastado para reitoria. Para mais informações, consulte a administração do IFSP.'
    },
    'professor edilson horario': {
        keywords: ['professor edilson horario', 'horario edilson', 'atendimento edilson'],
        info: 'O professor Edilson Aparecido está afastado no momento e não possui horario de atendimento disponível.'
    },
    'professor edilson': {
        keywords: ['professor edilson'],
        info: 'O professor Edilson Aparecido atua na área de Educação Básica e possui titulação de Doutorado. Para mais informações sobre sua atuação e retorno, consulte a administração do IFSP.'
    },

    'professor edson email': {
        keywords: ['professor edson email', 'email professor edson', 'contato edson'],
        info: 'O email do professor Edson Murakami é murakami@ifsp.edu.br.'
    },
    'professor edson horario': {
        keywords: ['professor edson horario', 'horario edson', 'atendimento edson'],
        info: 'O professor Edson Murakami está disponível para atendimento às quartas-feiras, das 15h às 16h.'
    },
    'professor edson': {
        keywords: ['professor edson'],
        info: 'O professor Edson Murakami atua na área de Informática. Para mais informações, consulte seu horario de atendimento ou entre em contato pelo e-mail fornecido.'
    },
    'professor eduardo email': {
        keywords: ['professor eduardo email', 'email professor eduardo', 'contato eduardo'],
        info: 'O professor Eduardo Tadeu está atualmente afastado para qualificação e não possui e-mail disponível para contato. Para mais informações sobre sua atuação e retorno, consulte a administração do IFSP.'
    },
    'professor eduardo horario': {
        keywords: ['professor eduardo horario', 'horario eduardo', 'atendimento eduardo'],
        info: 'O professor Eduardo Tadeu está afastado no momento e não possui horario de atendimento disponível.'
    },
    'professor eduardo': {
        keywords: ['professor eduardo'],
        info: 'O professor Eduardo Tadeu atua na área de Informática. Para mais informações sobre sua atuação e retorno, consulte a administração do IFSP.'
    },

    'professor eli email': {
        keywords: ['professor eli email', 'email professor eli', 'contato eli'],
        info: 'O email do professor Eli Gomes Castanho é eli.castanho@ifsp.edu.br.'
    },
    'professor eli horario': {
        keywords: ['professor eli horario', 'horario eli', 'atendimento eli'],
        info: 'O professor Eli Gomes Castanho está disponível para atendimento, mas não há informações específicas sobre os horarios. Para mais detalhes, entre em contato pelo e-mail fornecido.'
    },
    'professor eli': {
        keywords: ['professor eli'],
        info: 'O professor Eli Gomes Castanho atua na área de Educação Básica. Para informações adicionais, entre em contato com a administração do IFSP.'
    },
    'professora eliane email': {
        keywords: ['professora eliane email', 'email professora eliane', 'contato eliane'],
        info: 'O email da professora Eliane Aparecida Bacocina é elianeab@ifsp.edu.br. Para mais informações, você pode consultar seu Lattes.'
    },
    'professora eliane horario': {
        keywords: ['professora eliane horario', 'horario eliane', 'atendimento eliane'],
        info: 'A professora Eliane Aparecida Bacocina está disponível para atendimento às segundas-feiras, das 18h às 19h.'
    },
    'professora eliane': {
        keywords: ['professora eliane'],
        info: 'A professora Eliane Aparecida Bacocina atua na área de Educação Básica e possui titulação de Doutorado. Para mais informações, consulte seu Lattes.'
    },
    'professor erico email': {
        keywords: ['professor erico email', 'email professor erico', 'contato erico'],
        info: 'O email do professor Érico Pessoa é ericopfelix@ifsp.edu.br.'
    },
    'professor erico horario': {
        keywords: ['professor erico horario', 'horario erico', 'atendimento erico'],
        info: 'O professor Érico Pessoa está disponível para atendimento às quartas-feiras, das 14h às 16h, na sala dos professores, mediante agendamento por e-mail.'
    },
    'professor erico': {
        keywords: ['professor erico'],
        info: 'O professor Érico Pessoa atua na área de Indústria. Para atendimento, agende por e-mail conforme mencionado.'
    },
    'professor modesto email': {
        keywords: ['professor modesto email', 'email professor modesto', 'contato modesto'],
        info: 'O email do professor Fabio Modesto é fabiomodesto@ifsp.edu.br.'
    },
    'professor modesto horario': {
        keywords: ['professor modesto horario', 'horario modesto', 'atendimento modesto'],
        info: 'O professor Fabio Modesto está disponível para atendimento às terças e quartas-feiras, das 09h00 às 12h00, na biblioteca.'
    },
    'professor modesto': {
        keywords: ['professor modesto', 'professor fabio alexandre'],
        info: 'O professor Fabio Modesto atua na área de Informática e possui titulação de Mestrado.'
    },
    'professor fabio de paula email': {
        keywords: ['professor fabio de paula email', 'email professor fabio de paula', 'contato fabio de paula'],
        info: 'O email do professor Fabio de Paula Santos é fabio.santos@ifsp.edu.br.'
    },
    'professor fabio de paula horario': {
        keywords: ['professor fabio de paula horario', 'horario fabio de paula', 'atendimento fabio de paula'],
        info: 'O professor Fabio de Paula Santos está disponível para atendimento às quartas-feiras, das 10h30 às 11h30.'
    },
    'professor fabio de paula': {
        keywords: ['professor fabio de paula'],
        info: 'O professor Fabio de Paula Santos atua na área de Informática.'
    },
    'professor fabio lumertz email': {
        keywords: ['professor lumertz email', 'email lumertz', 'contato lumertz'],
        info: 'O email do professor Fábio Lumertz Garcia é fabiolumertz@ifsp.edu.br.'
    },
    'professor fabio lumertz horario': {
        keywords: ['professor lumertz horario', 'horario fabio lumertz', 'atendimento fabio lumertz'],
        info: 'O professor Fábio Lumertz Garcia está disponível para atendimento às quartas-feiras, das 14h00 às 16h00, mediante agendamento por e-mail, e pode ser realizado na sala dos professores ou no Lab 215.'
    },
    'professor fabio lumertz': {
        keywords: ['professor fabio lumertz'],
        info: 'O professor Fábio Lumertz Garcia atua na área de Indústria.'
    },
    'professor fabio': {
        keywords: ['professor fabio'],
        info: 'Há mais de um professor chamado Fábio no IFSP. Abaixo estão os detalhes dos três professores: O professor Fabio Modesto atua na área de Informática. Ele está disponível para atendimento às terças e quartas-feiras, das 09h00 às 12h00, na biblioteca. Para contato, utilize o e-mail fabiomodesto@ifsp.edu.br. O professor Fabio de Paula atua na área de Informática. Ele está disponível para atendimento às quartas-feiras, das 10h30 às 11h30. Para contato, utilize o e-mail fabio.santos@ifsp.edu.br. O professor Fábio Lumertz atua na área de Indústria. Seu atendimento ocorre às quartas-feiras, das 14h00 às 16h00, mediante agendamento por e-mail, e pode ser realizado na sala dos professores ou no Lab 215. Para contato, utilize o e-mail fabiolumertz@ifsp.edu.br.'
    },
    'professora fabiola email': {
        keywords: ['professora fabiola email', 'email professora fabiola', 'contato fabiola tocchini'],
        info: 'O e-mail da professora Fabíola Tocchini é fabiolatdef@ifsp.edu.br.'
    },
    'professora fabiola horario': {
        keywords: ['professora fabiola horario', 'horario fabiola tocchini', 'atendimento fabiola tocchini'],
        info: 'A professora Fabíola Tocchini está disponível para atendimento às quartas-feiras, das 14h às 15h.'
    },
    'professora fabiola': {
        keywords: ['professora fabiola'],
        info: 'A professora Fabíola Tocchini atua na área de Indústria.'
    },
    'professora fabricia email': {
        keywords: ['professora fabricia email', 'email professora fabricia', 'contato fabricia da silva'],
        info: 'O e-mail da professora Fabricia da Silva é fabricia.souza@ifsp.edu.br.'
    },
    'professora fabricia horario': {
        keywords: ['professora fabricia horario', 'horario fabricia da silva', 'atendimento fabricia da silva'],
        info: 'A professora Fabricia da Silva está disponível para atendimento às quintas-feiras, das 13h30 às 15h.'
    },
    'professora fabricia': {
        keywords: ['professora fabricia'],
        info: 'A professora Fabricia da Silva atua na área de Educação Básica.'
    },
    'professor felipe email': {
        keywords: ['professor felipe email', 'email professor felipe', 'contato felipe miranda'],
        info: 'O e-mail do professor Felipe Antonio Moura Miranda é miranda@ifsp.edu.br.'
    },
    'professor felipe': {
        keywords: ['professor felipe'],
        info: 'O professor Felipe Antonio Moura Miranda atua na área de Informática, mas está atualmente afastado para exercício em outro ministério.'
    },
    'professor francisco email': {
        keywords: ['professor francisco email', 'email professor francisco', 'contato francisco'],
        info: 'O email do professor Francisco Diego é diego@ifsp.edu.br.'
    },
    'professor francisco horario': {
        keywords: ['professor francisco horario', 'horario francisco', 'atendimento francisco'],
        info: 'O professor Francisco Diego está disponível para atendimento às sextas-feiras, das 17h às 18h. O agendamento deve ser feito por e-mail.'
    },
    'professor francisco': {
        keywords: ['professor francisco'],
        info: 'O professor Francisco Diego atua na área de Informática.'
    },
    'professor giacomo email': {
        keywords: ['professor giacomo email', 'email professor giacomo', 'contato giacomo'],
        info: 'O email do professor Giacomo Augusto Bonetto é profgiacomo@ifsp.edu.br.'
    },
    'professor giacomo horario': {
        keywords: ['professor giacomo horario', 'horario giacomo', 'atendimento giacomo'],
        info: 'O professor Giacomo Augusto Bonetto está disponível para atendimento às terças-feiras, das 15h às 16h.'
    },
    'professor giacomo': {
        keywords: ['professor giacomo'],
        info: 'O professor Giacomo Augusto Bonetto atua na área de Educação Básica.'
    },
    'professora giovana email': {
        keywords: ['professora giovana email', 'email professora giovana', 'contato giovana'],
        info: 'O email da professora Giovana Yuko é gyuko@ifsp.edu.br.'
    },
    'professora giovana horario': {
        keywords: ['professora giovana horario', 'horario giovana', 'atendimento giovana'],
        info: 'A professora Giovana Yuko oferece atendimento às terças-feiras, das 10h40 às 11h40, e às quartas-feiras, das 07h30 às 08h30.'
    },
    'professora giovana': {
        keywords: ['professora giovana'],
        info: 'A professora Giovana Yuko atua na área de Informática.'
    },
    'professora graziela email': {
        keywords: ['professora graziela email', 'email professora graziela', 'contato graziela'],
        info: 'O email da professora Graziela Bachião é grazielabachiao@ifsp.edu.br.'
    },
    'professora graziela horario': {
        keywords: ['professora graziela horario', 'horario graziela', 'atendimento graziela'],
        info: 'A professora Graziela Bachião está disponível para atendimento na quinta-feira, das 18h às 19h.'
    },
    'professora graziela': {
        keywords: ['professora graziela'],
        info: 'A professora Graziela Bachião atua na área de Educação Básica.'
    },
    'professora jacqueline email': {
        keywords: ['professora jacqueline email', 'email professora jacqueline', 'contato jacqueline'],
        info: 'O email da professora Jacqueline de Almeida Barbosa Franco é jacqueline.almeida@ifsp.edu.br.'
    },
    'professora jacqueline horario': {
        keywords: ['professora jacqueline horario', 'horario jacqueline', 'atendimento jacqueline'],
        info: 'A professora Jacqueline de Almeida Barbosa Franco oferece atendimento assíncrono em qualquer dia da semana por e-mail.'
    },
    'professora jacqueline': {
        keywords: ['professora jacqueline'],
        info: 'A professora Jacqueline de Almeida Barbosa Franco atua na área de Indústria.'
    },
    'professora joana email': {
        keywords: ['professora joana email', 'email professora joana', 'contato joana'],
        info: 'O email da professora Joana de São Pedro é joana.pedro@ifsp.edu.br.'
    },
    'professora joana horario': {
        keywords: ['professora joana horario', 'horario joana', 'atendimento joana'],
        info: 'A professora Joana de São Pedro está disponível para atendimento na quarta-feira, das 15h às 16h.'
    },
    'professora joana': {
        keywords: ['professora joana'],
        info: 'A professora Joana de São Pedro atua na área de Educação Básica.'
    },
    'professora juliana email': {
        keywords: ['professora juliana email', 'email professora juliana', 'contato juliana'],
        info: 'O email da professora Juliana Arruda Vieira é juliana.vieira@ifsp.edu.br.'
    },
    'professora juliana horario': {
        keywords: ['professora juliana horario', 'horario juliana', 'atendimento juliana'],
        info: 'A professora Juliana Arruda Vieira está disponível para atendimento nas quintas-feiras, das 14h às 15h, e nas sextas-feiras, das 18h às 19h. O atendimento é realizado por meio do Meet.'
    },
    'professora juliana': {
        keywords: ['professora juliana'],
        info: 'A professora Juliana Arruda Vieira atua na área de Educação Básica.'
    },
    'professor leonardo email': {
        keywords: ['professor leonardo email', 'email professor leonardo', 'contato leonardo'],
        info: 'O email do professor Leonardo Borges da Cruz é professorleo@ifsp.edu.br.'
    },
    'professor leonardo horario': {
        keywords: ['professor leonardo horario', 'horario leonardo', 'atendimento leonardo'],
        info: 'O professor Leonardo Borges da Cruz está disponível para atendimento na segunda-feira, das 08h às 10h.'
    },
    'professor leonardo': {
        keywords: ['professor leonardo'],
        info: 'O professor Leonardo Borges da Cruz atua na área de Educação Básica.'
    },
    'professor sacchi email': {
        keywords: ['email sacchi', 'contato sacchi', 'luis henrique email', 'luis henrique contato'],
        info: 'O email do professor Luis Henrique Sacchi é sacchi@ifsp.edu.br.'
    },
    'professor sacchi horario': {
        keywords: ['horario sacchi', 'atendimento sacchi', 'horario luis henrique', 'atendimento luis henrique'],
        info: 'O professor Luis Henrique Sacchi está disponível para atendimento às terças-feiras, das 13h às 14h.'
    },
    'professor sacchi': {
        keywords: ['professor sacchi', 'professor luis henrique'],
        info: 'O professor Luis Henrique Sacchi atua na área de Informática.'
    },
    'professor ferrari email': {
        keywords: ['professor ferrari email', 'email professor ferrari', 'contato ferrari'],
        info: 'Para mais informações sobre o professor Luiz Antonio Ferrari, entre em contato via e-mail.'
    },
    'professor ferrari': {
        keywords: ['professor ferrari', 'professor luiz antonio'],
        info: 'Luiz Antonio Ferrari atua na área de Indústria.'
    },
    'professor biagio email': {
        keywords: ['professor biagio email', 'email professor biagio', 'contato biagio'],
        info: 'Para mais informações sobre o professor Luiz Arnaldo Biagio, entre em contato via e-mail.'
    },
    'professor biagio': {
        keywords: ['professor biagio', 'professor luiz arnaldo'],
        info: 'O professor Luiz Arnaldo Biagio atua na área de Indústria.'
    },
    'professor luiz eduardo email': {
        keywords: ['professor luiz eduardo email', 'email professor luiz eduardo', 'contato luiz eduardo'],
        info: 'Para mais informações sobre o professor Luiz Eduardo Miranda José Rodrigues, entre em contato via e-mail.'
    },
    'professor luiz eduardo': {
        keywords: ['professor luiz eduardo'],
        info: 'O professor Luiz Eduardo Miranda José Rodrigues atua na área de Indústria.'
    },
    'professor luis': {
        keywords: ['professor luis', 'professor luiz'],
        info: 'No IFSP Campus Salto, existem mais de um professor com o nome "Luis". Para facilitar a identificação, seguem os detalhes de cada um: Luis Sacchi atua na área de Informática e está disponível para atendimento às terças-feiras, das 13h às 14h. Para contato, envie um e-mail para sacchi@ifsp.edu.br. Luiz Ferrari atua na área de Indústria. Para mais informações, entre em contato via e-mail. Luiz Biagio atua na área de Indústria. Para mais informações, entre em contato via e-mail. Luiz Eduardo Miranda atua na área de Indústria. Para mais informações, entre em contato via e-mail.'
    },
    'professor marcio email': {
        keywords: ['professor marcio email', 'email professor marcio', 'contato marcio'],
        info: 'O email do professor Márcio Pironel é marcio.pironel@ifsp.edu.br.'
    },
    'professor marcio horario': {
        keywords: ['professor marcio horario', 'horário marcio', 'atendimento marcio'],
        info: 'O professor Márcio Pironel está disponível para atendimento às quartas-feiras, das 13h30 às 15h30, e às terças-feiras, das 18h às 19h.'
    },
    'professor marcio': {
        keywords: ['professor marcio'],
        info: 'O professor Márcio Pironel atua na área de Educação Básica.'
    },
    'professor marcos email': {
        keywords: ['professor marcos email', 'email professor marcos', 'contato marcos'],
        info: 'O email do professor Marcos Alexandre Capellari é capellari@ifsp.edu.br.'
    },
    'professor marcos horario': {
        keywords: ['professor marcos horario', 'horário marcos', 'atendimento marcos'],
        info: 'O professor Marcos Alexandre Capellari está disponível para atendimento às quartas-feiras, das 15h às 16h.'
    },
    'professor marcos': {
        keywords: ['professor marcos'],
        info: 'O professor Marcos Alexandre Capellari atua na área de Educação Básica.'
    },
    'professora marisol email': {
        keywords: ['professora marisol email', 'email professora marisol', 'contato marisol'],
        info: 'O email da professora Marisol Gosse Bergamo é fornecido mediante solicitação, entre em contato para mais informações.'
    },
    'professora marisol horario': {
        keywords: ['professora marisol horario', 'horário marisol', 'atendimento marisol'],
        info: 'A professora Marisol Gosse Bergamo está disponível para atendimento às sextas-feiras, das 8h40 às 10h40.'
    },
    'professora marisol': {
        keywords: ['professora marisol'],
        info: 'A professora Marisol Gosse Bergamo atua na área de Educação Básica.'
    },
    'professor mateus email': {
        keywords: ['professor mateus email', 'email professor mateus', 'contato mateus'],
        info: 'O email do professor Mateus Cruz é mateus.carvalho@ifsp.edu.br.'
    },
    'professor mateus horario': {
        keywords: ['professor mateus horario', 'horário mateus', 'atendimento mateus'],
        info: 'O professor Mateus Cruz está disponível para atendimento às quartas-feiras, das 14h às 16h, ou em outro dia e horário mediante agendamento por e-mail.'
    },
    'professor mateus': {
        keywords: ['professor mateus'],
        info: 'O professor Mateus Cruz atua na área de Educação Básica.'
    },
    'professor mauricio email': {
        keywords: ['professor mauricio email', 'email professor mauricio', 'contato mauricio'],
        info: 'O email do professor Maurício Bronzatto é mauricio.bronzatto@ifsp.edu.br.'
    },
    'professor mauricio horario': {
        keywords: ['professor mauricio horario', 'horário mauricio', 'atendimento mauricio'],
        info: 'O professor Maurício Bronzatto está disponível para atendimento às sextas-feiras, das 18h às 19h, com agendamento prévio.'
    },
    'professor mauricio': {
        keywords: ['professor mauricio'],
        info: 'O professor Maurício Bronzatto atua na área de Educação Básica.'
    },
    'professor mauro email': {
        keywords: ['professor mauro email', 'email professor mauro', 'contato mauro'],
        info: 'O email do professor Mauro Sérgio é mauro@ifsp.edu.br.'
    },
    'professor mauro horario': {
        keywords: ['professor mauro horario', 'horário mauro', 'atendimento mauro'],
        info: 'O professor Mauro Sérgio está disponível para atendimento às quintas-feiras, das 17h às 19h, com agendamento via e-mail.'
    },
    'professor mauro': {
        keywords: ['professor mauro'],
        info: 'O professor Mauro Sérgio atua na área de Indústria.'
    },
    'professor nilson email': {
        keywords: ['professor nilson email', 'email professor nilson', 'contato nilson'],
        info: 'O email do professor Nilson Roberto é inocente@ifsp.edu.br.'
    },
    'professor nilson horario': {
        keywords: ['professor nilson horario', 'horário nilson', 'atendimento nilson'],
        info: 'O professor Nilson Roberto está disponível para atendimento em diversos horários durante a semana, mediante agendamento via e-mail.'
    },
    'professor nilson': {
        keywords: ['professor nilson'],
        info: 'O professor Nilson Roberto atua na área de Indústria.'
    },
    'professor paulo email': {
        keywords: ['professor paulo email', 'email professor paulo', 'contato paulo'],
        info: 'O email do professor Paulo Sérgio Prampero é prampero@ifsp.edu.br.'
    },
    'professor paulo horario': {
        keywords: ['professor paulo horario', 'horário paulo', 'atendimento paulo'],
        info: 'O professor Paulo Sérgio Prampero está disponível para atendimento às quartas-feiras, das 14h às 16h.'
    },
    'professor paulo': {
        keywords: ['professor paulo'],
        info: 'O professor Paulo Sérgio Prampero atua na área de Informática.'
    },
    'professora priscila email': {
        keywords: ['professora priscila email', 'email professora priscila', 'contato priscila'],
        info: 'O email da professora Pricila Balan é pricilapicinato@ifsp.edu.br.'
    },
    'professora priscila horario': {
        keywords: ['professora priscila horario', 'horário priscila', 'atendimento priscila'],
        info: 'A professora Pricila Balan está disponível para atendimento às segundas e quartas-feiras, em horários assíncronos e síncronos.'
    },
    'professora priscila': {
        keywords: ['professora priscila'],
        info: 'A professora Pricila Balan atua na área de Educação Básica.'
    },
    'professor reinaldo batista email': {
        keywords: ['professor reinaldo batista email', 'email professor reinaldo batista', 'contato reinaldo batista'],
        info: 'O email do professor Reinaldo Batista é rbleite@ifsp.edu.br.'
    },
    'professor reinaldo batista horario': {
        keywords: ['professor reinaldo batista horario', 'horário reinaldo batista', 'atendimento reinaldo batista'],
        info: 'O professor Reinaldo Batista está disponível para atendimento mediante agendamento às quartas-feiras, das 13h30 às 14h30.'
    },
    'professor reinaldo batista': {
        keywords: ['professor reinaldo batista'],
        info: 'O professor Reinaldo Batista atua na área de Indústria.'
    },
    'professor reinaldo do valle email': {
        keywords: ['professor reinaldo do valle email', 'email professor reinaldo do valle', 'contato reinaldo do valle'],
        info: 'O email do professor Reinaldo do Valle Junior é rvallejr@ifsp.edu.br.'
    },
    'professor reinaldo do valle horario': {
        keywords: ['professor reinaldo do valle horario', 'horário reinaldo do valle', 'atendimento reinaldo do valle'],
        info: 'O professor Reinaldo do Valle Junior está disponível para atendimento em diversos horários de segunda a quinta-feira.'
    },
    'professor reinaldo do valle': {
        keywords: ['professor reinaldo do valle'],
        info: 'O professor Reinaldo do Valle Junior atua na área de Informática.'
    },
    'professor reinaldo': {
        keywords: ['professor reinaldo'],
        info: 'Há dois docentes com o nome Reinaldo: Reinaldo Batista Leite atua na área de Indústria e oferece atendimento às quartas-feiras, das 13h30 às 14h30, mediante agendamento prévio. Para contato, o e-mail é rbleite@ifsp.edu.br. Reinaldo do Valle Junior atua na área de Informática e está disponível para atendimento em diversos horarios de segunda a quinta-feira. Para contato, o e-mail é rvallejr@ifsp.edu.br.'
    },
    'professora rejane email': {
        keywords: ['professora rejane email', 'email professora rejane', 'contato rejane'],
        info: 'O email da professora Rejane Paloma Faria é rejane.faria@ifsp.edu.br.'
    },
    'professora rejane horario': {
        keywords: ['professora rejane horario', 'horário rejane', 'atendimento rejane'],
        info: 'A professora Rejane Paloma Faria está disponível para atendimento às terças-feiras, das 13h30 às 14h30, e às sextas-feiras, das 18h às 19h.'
    },
    'professora rejane': {
        keywords: ['professora rejane'],
        info: 'A professora Rejane Paloma Faria atua na área de Educação Básica.'
    },
    'professora renata email': {
        keywords: ['professora renata email', 'email professora renata', 'contato renata'],
        info: 'O email da professora Renata Couto é renata.couto@ifsp.edu.br.'
    },
    'professora renata horario': {
        keywords: ['professora renata horario', 'horário renata', 'atendimento renata'],
        info: 'A professora Renata Couto está disponível para atendimento às terças-feiras, das 14h às 15h.'
    },
    'professora renata': {
        keywords: ['professora renata'],
        info: 'A professora Renata Couto atua na área de Informática.'
    },
    'professor ronaldo email': {
        keywords: ['professor ronaldo email', 'email professor ronaldo', 'contato ronaldo'],
        info: 'O email do professor Ronaldo Lima é ronaldo.lima@ifsp.edu.br.'
    },
    'professor ronaldo horario': {
        keywords: ['professor ronaldo horario', 'horário ronaldo', 'atendimento ronaldo'],
        info: 'O professor Ronaldo Lima está disponível para atendimento às quartas-feiras, das 14h às 16h, e sextas-feiras, das 17h às 18h.'
    },
    'professor ronaldo': {
        keywords: ['professor ronaldo'],
        info: 'O professor Ronaldo Lima atua na área de Informática.'
    },
    'professor samuel email': {
        keywords: ['professor samuel email', 'email professor samuel', 'contato samuel'],
        info: 'O email do professor Samuel Albino é samuel.albino@ifsp.edu.br.'
    },
    'professor samuel horario': {
        keywords: ['professor samuel horario', 'horário samuel', 'atendimento samuel'],
        info: 'O professor Samuel Albino está disponível para atendimento mediante agendamento via e-mail.'
    },
    'professor samuel': {
        keywords: ['professor samuel'],
        info: 'O professor Samuel Albino atua na área de Informática.'
    },
    'professor renato email': {
        keywords: ['professor renato email', 'email professor renato', 'contato renato'],
        info: 'O email do professor Renato Francisco é renatomello@ifsp.edu.br.'
    },
    'professor renato horario': {
        keywords: ['professor renato horario', 'horário renato', 'atendimento renato'],
        info: 'O professor Renato Francisco atende nas segundas-feiras, das 18h às 19h.'
    },
    'professor renato': {
        keywords: ['professor renato'],
        info: 'O professor Renato Francisco atua na área de Educação Básica.'
    },
    'professor ricardo dantas email': {
        keywords: ['professor ricardo dantas email', 'email professor ricardo dantas', 'contato ricardo dantas'],
        info: 'O email do professor Ricardo Dantas Dematte é dematte@ifsp.edu.br.'
    },
    'professor ricardo dantas horario': {
        keywords: ['professor ricardo dantas horario', 'horário ricardo dantas', 'atendimento ricardo dantas'],
        info: 'O professor Ricardo Dantas Dematte realiza atendimentos às quartas, quintas e sextas-feiras, sempre às 18h, com agendamento prévio por e-mail.'
    },
    'professor ricardo dantas': {
        keywords: ['professor ricardo dantas'],
        info: 'O professor Ricardo Dantas Dematte atua na área de Informática.'
    },
    'professor ricardo zani email': {
        keywords: ['professor ricardo zani email', 'email professor ricardo zani', 'contato ricardo zani'],
        info: 'O email do professor Ricardo Zani é zani@ifsp.edu.br.'
    },
    'professor ricardo zani horario': {
        keywords: ['professor ricardo zani horario', 'horário ricardo zani', 'atendimento ricardo zani'],
        info: 'O professor Ricardo Zani atende às quartas-feiras, das 14h às 16h.'
    },
    'professor ricardo zani': {
        keywords: ['professor ricardo zani'],
        info: 'O professor Ricardo Zani atua na área de Educação Básica.'
    },
    'professor_ricardo': {
        keywords: ['professor ricardo'],
        info: 'Há dois docentes com o nome Ricardo no IFSP, ambos atuando em áreas diferentes: Ricardo Dantas, que atua na área de Informática. Ele oferece atendimento nas quartas, quintas e sextas-feiras às 18h, mediante agendamento prévio por e-mail. Seu e-mail é dematte@ifsp.edu.br. Ricardo Zani, que atua na área de Educação Básica. Seu horario de atendimento é às quartas-feiras, das 14h às 16h, e pode ser contatado pelo e-mail zani@ifsp.edu.br.'
    },
    'professora seila email': {
        keywords: ['professora seila email', 'email professora seila', 'contato seila'],
        info: 'O email da professora Seila Vasti Faria de Paiva é svfpaiva@ifsp.edu.br.'
    },
    'professora seila horario': {
        keywords: ['professora seila horario', 'horário seila', 'atendimento seila'],
        info: 'A professora Seila Vasti Faria de Paiva oferece atendimento às quartas-feiras, das 14h às 15h, e às quintas-feiras, das 12h30 às 13h30.'
    },
    'professora seila': {
        keywords: ['professora seila'],
        info: 'A professora Seila Vasti Faria de Paiva atua na área de Informática.'
    },
    'professor silvio email': {
        keywords: ['professor silvio email', 'email professor silvio', 'contato silvio'],
        info: 'O email do professor Sílvio César Otero Garcia é oterogarcia@ifsp.edu.br.'
    },
    'professor silvio horario': {
        keywords: ['professor silvio horario', 'horário silvio', 'atendimento silvio'],
        info: 'O professor Sílvio César Otero Garcia realiza atendimentos de forma assíncrona por e-mail, a qualquer dia ou horário.'
    },
    'professor silvio': {
        keywords: ['professor silvio'],
        info: 'O professor Sílvio César Otero Garcia atua na área de Educação Básica.'
    },
    'professora tatiana email': {
        keywords: ['professora tatiana email', 'email professora tatiana', 'contato tatiana'],
        info: 'O email da professora Tatiana Bussaglia de Moraes é tatiana@ifsp.edu.br.'
    },
    'professora tatiana': {
        keywords: ['professora tatiana'],
        info: 'A professora Tatiana Bussaglia de Moraes atua na área de Indústria.'
    },
    'professor uesclei email': {
        keywords: ['professor uesclei email', 'email professor uesclei', 'contato uesclei'],
        info: 'O email do professor Uesclei Costa Santos é uesclei.costa@ifsp.edu.br.'
    },
    'professor uesclei': {
        keywords: ['professor uesclei'],
        info: 'O professor Uesclei Costa Santos atua na área de Indústria.'
    },

    'professora vania email': {
        keywords: ['professora vania email', 'email professora vania', 'contato vania'],
        info: 'O email da professora Vânia Gomes é vania.gomes@ifsp.edu.br.'
    },
    'professora vania horario': {
        keywords: ['professora vania horario', 'horário vania', 'atendimento vania'],
        info: 'A professora Vânia Gomes atende às quartas-feiras, das 9h30 às 10h30.'
    },
    'professora vania': {
        keywords: ['professora vania'],
        info: 'A professora Vânia Gomes atua na área de Educação Básica.'
    },
    'docentes': {
        keywords: ['docentes', 'professores'],
        info: 'O IFSP Campus Salto possui docentes nas áreas de Educação Básica, Indústria e Informática. Para informações sobre um professor em particular, sinta-se à vontade para perguntar!'
    },
    // INTERAÇÕES
    'saudacao': {
        keywords: ['oi', 'ola', 'alo', 'e ai', 'eai', 'salve', 'bom dia', 'boa tarde', 'boa noite', 'oii', 'oiii', 'oiiii'],
        info: 'Olá! Como posso ajudar você hoje?'
    },
    'despedida': {
        keywords: ['tchau', 'ate logo', 'adeus', 'falou', 'ate breve', 'ate a próxima', 'vou embora'],
        info: 'Até mais! Estou aqui sempre que precisar. Tenha um ótimo dia!'
    },
    'como_voce': {
        keywords: ['como voce esta', 'tudo bem', 'como vai', 'como voce ta', 'como se sente', 'como esta', 'você esta bem'],
        info: 'Estou aqui para ajudar! E você, como está hoje?'
    },
    'sobre_mim': {
        keywords: ['sobre voce', 'quem e', 'o que você e', 'o que você faz', 'sua função', 'quem e você'],
        info: 'Sou uma IA aqui para ajudar com informações sobre o IFSP Campus Salto e responder suas perguntas. O que você gostaria de saber?'
    },
    'curiosidade': {
        keywords: ['curiosidade', 'sabe algo interessante?', 'fato curioso'],
        info: 'Você sabia que o IFSP Campus Salto foi inaugurado em 2014? Desde então, vem se destacando na formação técnica e superior!'
    },
    'agradecimento': {
        keywords: ['obrigado', 'valeu', 'agradeco', 'gratidao', 'obrigada', 'agradecido', 'sou grato', 'muito obrigado'],
        info: 'De nada! Fico feliz em ajudar. Se precisar de mais alguma coisa, é só avisar!'
    },
    'perguntar_nome': {
        keywords: ['como se chama', 'seu nome', 'como posso te chamar', 'quem é você'],
        info: 'Meu nome é Megatron 😎! E você, como se chama?'
    },
    'elogio': {
        keywords: ['você e legal', 'gosto de voce', 'você é util', 'bom trabalho'],
        info: 'Agradeço o elogio! Estou aqui para tornar sua experiência a melhor possível.'
    },
    'pergunta_hora': {
        keywords: ['que horas sao', 'sabe que horas sao', 'tem horas', 'informa a hora', 'qual e o horario'],
        info: 'Desculpe, não consigo verificar a hora no momento, mas você pode dar uma olhada no seu relógio!'
    },
    'piada': {
        keywords: ['me conte uma piada', 'piada'],
        info: 'Por que o computador foi ao médico? Porque ele tinha um vírus!'
    },
    'teste': {
        keywords: ['teste', 'testando', 'testar'],
        info: 'Teste! Teste! 1, 2, 3... Alô, alô! Está tudo funcionando perfeitamente por aqui! O que mais posso fazer por você hoje?'
    },
};