// src/data/conversationBlocks.js (Novo arquivo para organizar o fluxo)

const conversationBlocks = {
  dice1: [ // Bloco do Dado 1 (ODS 1, 2, 3, 4)
    {
      id: 'intro_dice1',
      speaker: 'friend',
      text: 'E aí, tudo bem? O tema de hoje será sobre as ODS de 1 a 4. Vamos começar com a Erradicação da Pobreza, a ODS 1!',
      options: [{ text: 'Bora!', nextId: 'ods1_detail1' }],
      ods: 'Introdução: ODS 1, 2, 3, 4'
    },
    {
      id: 'ods1_detail1',
      speaker: 'friend',
      text: 'Então, ODS 1 não é só sobre dinheiro. É também sobre acesso à saúde, educação e oportunidades justas. É multifacetado.',
      ods: 'ODS 1: Erradicação da Pobreza',
      options: [
        { text: 'Faz sentido! E a ODS 2?', nextId: 'topic2_intro' },
        { text: 'Que outros fatores estão envolvidos?', nextId: 'ods1_more_factors' },
        { text: 'E o que eu posso fazer?', nextId: 'ods1_action' },
        { text: 'Acho que a educação tem um papel importante aí.', nextId: 'ods1_education_link' },
      ],
    },
    {
      id: 'ods1_more_factors',
      speaker: 'friend',
      text: 'A pobreza também é influenciada por conflitos, desastres naturais e falta de acesso a infraestrutura básica como água e saneamento.',
      ods: 'ODS 1: Erradicação da Pobreza',
      options: [
        { text: 'Impressionante como tudo se conecta.', nextId: 'topic2_intro' },
        { text: 'Vamos para a ODS 2!', nextId: 'topic2_intro' },
      ],
    },
    {
      id: 'ods1_action',
      speaker: 'friend',
      text: 'Podemos apoiar iniciativas locais, consumir de empresas socialmente responsáveis e buscar informações para combater a desinformação.',
      ods: 'ODS 1: Erradicação da Pobreza',
      options: [
        { text: 'Boas dicas! ODS 2 agora?', nextId: 'topic2_intro' },
        { text: 'Próximo tema!', nextId: 'topic2_intro' },
      ],
    },
    {
      id: 'ods1_education_link',
      speaker: 'friend',
      text: 'Com certeza! Educação de qualidade (ODS 4) é chave para quebrar o ciclo da pobreza. Uma pessoa educada tem mais chances no mercado de trabalho e de tomar decisões conscientes.',
      ods: 'ODS 4: Educação de Qualidade',
      options: [
        { text: 'Isso é muito importante mesmo.', nextId: 'ods4_detail_from_ods1' },
        { text: 'E a ODS 2? "Fome Zero"?', nextId: 'topic2_intro' },
      ],
    },
    {
      id: 'ods4_detail_from_ods1',
      speaker: 'friend',
      text: 'Garantir que todos, desde crianças a adultos, tenham acesso a uma educação inclusiva e equitativa é a base para o desenvolvimento sustentável.',
      ods: 'ODS 4: Educação de Qualidade',
      options: [
        { text: 'Faz sentido. Vamos para ODS 2.', nextId: 'topic2_intro' },
      ],
    },
    {
      id: 'topic2_intro',
      speaker: 'friend',
      text: 'Agora, sobre a ODS 2: "Fome Zero e Agricultura Sustentável". Não é só ter comida, mas ter comida nutritiva e produzida de forma que não agrida o planeta.',
      ods: 'ODS 2: Fome Zero e Agricultura Sustentável',
      options: [
        { text: 'Quais os maiores desafios disso?', nextId: 'ods2_challenges' },
        { text: 'Como a agricultura sustentável entra nisso?', nextId: 'ods2_sustainable_ag' },
        { text: 'E o desperdício de alimentos?', nextId: 'ods2_food_waste' },
        { text: 'Tem a ver com a ODS 12 de consumo responsável?', nextId: 'ods2_link_ods12' },
      ],
    },
    {
      id: 'ods2_challenges',
      speaker: 'friend',
      text: 'Os desafios incluem a distribuição desigual de alimentos, o impacto das mudanças climáticas na produção e a falta de acesso a tecnologias para pequenos agricultores.',
      ods: 'ODS 2: Fome Zero e Agricultura Sustentável',
      options: [
        { text: 'E como a gente resolve isso?', nextId: 'ods2_solutions' },
        { text: 'Vamos para a ODS 3!', nextId: 'topic3_intro' },
      ],
    },
    {
      id: 'ods2_sustainable_ag',
      speaker: 'friend',
      text: 'É sobre usar métodos de cultivo que preservem o solo, a água e a biodiversidade, sem o uso excessivo de agrotóxicos, garantindo a sustentabilidade a longo prazo.',
      ods: 'ODS 2: Fome Zero e Agricultura Sustentável',
      options: [
        { text: 'Entendi! ODS 3 agora?', nextId: 'topic3_intro' },
      ],
    },
    {
      id: 'ods2_food_waste',
      speaker: 'friend',
      text: 'Sim! Reduzir o desperdício de alimentos em todas as etapas, da produção ao consumo, é crucial. Muita comida boa vai para o lixo enquanto pessoas passam fome.',
      ods: 'ODS 2: Fome Zero e Agricultura Sustentável',
      options: [
        { text: 'Verdade, um grande problema. ODS 3?', nextId: 'topic3_intro' },
      ],
    },
    {
      id: 'ods2_link_ods12',
      speaker: 'friend',
      text: 'Com certeza! A ODS 12 (Consumo e Produção Responsáveis) complementa a ODS 2 ao focar na redução do desperdício e na promoção de padrões sustentáveis de consumo.',
      ods: 'ODS 2 & ODS 12',
      options: [
        { text: 'Que legal a conexão!', nextId: 'topic3_intro' },
      ],
    },
    {
      id: 'topic3_intro',
      speaker: 'friend',
      text: 'Beleza! A ODS 3 é "Saúde e Bem-Estar". Garante vida saudável e promove o bem-estar para todos, em todas as idades.',
      ods: 'ODS 3: Saúde e Bem-Estar',
      options: [
          { text: 'Inclui saúde mental?', nextId: 'ods3_mental_health' },
          { text: 'E vacinas?', nextId: 'ods3_vaccines' },
          { text: 'Quais os maiores desafios?', nextId: 'ods3_challenges' },
          { text: 'Vamos para ODS 4!', nextId: 'topic4_intro_from_ods3' },
      ],
    },
    {
      id: 'ods3_mental_health',
      speaker: 'friend',
      text: 'Com certeza! A saúde mental é um componente essencial do bem-estar. ODS 3 busca garantir acesso a serviços de saúde mental de qualidade para todos.',
      ods: 'ODS 3: Saúde e Bem-Estar',
      options: [
        { text: 'Entendi. ODS 4?', nextId: 'topic4_intro_from_ods3' },
      ],
    },
    {
      id: 'ods3_vaccines',
      speaker: 'friend',
      text: 'Sim, a imunização é vital. ODS 3 visa acabar com epidemias de AIDS, tuberculose, malária e outras doenças transmissíveis, e as vacinas são chave nisso.',
      ods: 'ODS 3: Saúde e Bem-Estar',
      options: [
        { text: 'Que bom! ODS 4?', nextId: 'topic4_intro_from_ods3' },
      ],
    },
    {
      id: 'ods3_challenges',
      speaker: 'friend',
      text: 'Desafios incluem acesso a água potável (ODS 6), saneamento básico, e a luta contra doenças como a COVID-19, além de garantir recursos para saúde em áreas remotas.',
      ods: 'ODS 3: Saúde e Bem-Estar & ODS 6',
      options: [
        { text: 'Muita coisa para fazer. ODS 4?', nextId: 'topic4_intro_from_ods3' },
      ],
    },
    {
      id: 'topic4_intro_from_ods3',
      speaker: 'friend',
      text: 'Por fim, a ODS 4: "Educação de Qualidade". Assegura a inclusão e equidade na educação e promove oportunidades de aprendizagem ao longo da vida para todos.',
      ods: 'ODS 4: Educação de Qualidade',
      options: [
          { text: 'Como garantir acesso para todos?', nextId: 'ods4_access' },
          { text: 'E a educação digital?', nextId: 'ods4_digital' },
          { text: 'Professores são importantes?', nextId: 'ods4_teachers' },
          { text: 'Gostei! Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods4_access',
      speaker: 'friend',
      text: 'É sobre construir e melhorar instalações educacionais, aumentar o número de bolsas de estudo e garantir que não haja barreiras para ninguém estudar.',
      ods: 'ODS 4: Educação de Qualidade',
      options: [
        { text: 'Perfeito. Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods4_digital',
      speaker: 'friend',
      text: 'Crucial! Acesso à tecnologia e habilidades digitais são essenciais hoje. A ODS 4 também abrange isso para que ninguém fique para trás na era digital.',
      ods: 'ODS 4: Educação de Qualidade',
      options: [
        { text: 'Super importante. Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods4_teachers',
      speaker: 'friend',
      text: 'Demais! Valorizar e capacitar professores é a base. Eles são os pilares para uma educação de qualidade para todos.',
      ods: 'ODS 4: Educação de Qualidade',
      options: [
        { text: 'Concordo totalmente! Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
  ],
  dice2: [ // Bloco do Dado 2 (ODS 5, 6, 7, 8)
    {
      id: 'intro_dice2',
      speaker: 'friend',
      text: 'E aí, tudo certo? Hoje vamos mergulhar nas ODS 5 a 8. Que tal começarmos com a ODS 5: Igualdade de Gênero?',
      options: [{ text: 'Bora!', nextId: 'topic5_intro' }],
      ods: 'Introdução: ODS 5, 6, 7, 8'
    },
    {
      id: 'topic5_intro',
      speaker: 'friend',
      text: 'A ODS 5 é sobre alcançar a **Igualdade de Gênero** e empoderar todas as mulheres e meninas. Vai muito além da igualdade salarial, sabe?',
      ods: 'ODS 5: Igualdade de Gênero',
      options: [
        { text: 'Como assim, "além da igualdade salarial"?', nextId: 'ods5_detail1' },
        { text: 'Qual o papel da mulher na sociedade nesse ODS?', nextId: 'ods5_role_women' },
        { text: 'É um tema bem atual, né?', nextId: 'ods5_relevance' },
        { text: 'Tem a ver com a ODS 4 (Educação)?', nextId: 'ods5_link_ods4' },
      ],
    },
    {
      id: 'ods5_detail1',
      speaker: 'friend',
      text: 'É sobre eliminar a violência contra mulheres, reconhecer o trabalho de cuidado não remunerado, garantir participação plena na política e economia, e acabar com práticas discriminatórias.',
      ods: 'ODS 5: Igualdade de Gênero',
      options: [
        { text: 'Entendi. E a ODS 6?', nextId: 'topic6_intro' },
        { text: 'Ainda há muito a ser feito.', nextId: 'ods5_challenge' },
        { text: 'Qual a próxima ODS?', nextId: 'topic6_intro' },
        { text: 'Como isso impacta a sociedade em geral?', nextId: 'ods5_societal_impact' },
      ],
    },
    {
      id: 'ods5_role_women',
      speaker: 'friend',
      text: 'Mulheres empoderadas impulsionam o desenvolvimento em todas as áreas. A participação delas na liderança é essencial para uma sociedade mais justa e eficiente.',
      ods: 'ODS 5: Igualdade de Gênero',
      options: [
        { text: 'Faz sentido. ODS 6 agora?', nextId: 'topic6_intro' },
      ],
    },
    {
      id: 'ods5_relevance',
      speaker: 'friend',
      text: 'Muito! A luta pela igualdade é contínua e fundamental para que todos tenham as mesmas oportunidades e direitos, sem distinção de gênero.',
      ods: 'ODS 5: Igualdade de Gênero',
      options: [
        { text: 'Concordo. ODS 6?', nextId: 'topic6_intro' },
      ],
    },
    {
      id: 'ods5_link_ods4',
    speaker: 'friend',
    text: 'Sim! A educação de qualidade (ODS 4) para meninas e mulheres é fundamental para o empoderamento e para romper ciclos de desigualdade. Elas precisam ter as mesmas oportunidades de aprendizado.',
    ods: 'ODS 5: Igualdade de Gênero & ODS 4: Educação de Qualidade',
    options: [
      { text: 'Faz todo sentido!', nextId: 'topic6_intro' },
      { text: 'Próxima ODS!', nextId: 'topic6_intro' },
    ],
  },

    {
      id: 'topic6_intro',
      speaker: 'friend',
      text: 'Vamos para a ODS 6: **Água Potável e Saneamento**. É sobre garantir disponibilidade e gestão sustentável da água e saneamento para todos. Essencial para a saúde e dignidade, né?',
      ods: 'ODS 6: Água Potável e Saneamento',
      options: [
        { text: 'Quais os principais desafios disso?', nextId: 'ods6_challenges' },
        { text: 'E a importância do saneamento?', nextId: 'ods6_sanitation' },
        { text: 'Como a escassez de água afeta as pessoas?', nextId: 'ods6_scarcity_impact' },
        { text: 'Qual a próxima ODS?', nextId: 'topic7_intro' },
      ],
    },
    {
      id: 'ods6_challenges',
      speaker: 'friend',
      text: 'Poluição da água, falta de infraestrutura de tratamento, desperdício e acesso desigual em áreas rurais são grandes desafios.',
      ods: 'ODS 6: Água Potável e Saneamento',
      options: [
        { text: 'É um problema sério no Brasil. ODS 7?', nextId: 'topic7_intro' },
      ],
    },
    {
      id: 'ods6_sanitation',
      speaker: 'friend',
      text: 'Saneamento básico adequado previne doenças, melhora a qualidade de vida e a dignidade, especialmente para mulheres e meninas que muitas vezes sofrem mais com a falta dele.',
      ods: 'ODS 6: Água Potável e Saneamento',
      options: [
        { text: 'Entendi. ODS 7?', nextId: 'topic7_intro' },
      ],
    },

    {
      id: 'topic7_intro',
      speaker: 'friend',
      text: 'A ODS 7: **Energia Limpa e Acessível**. O objetivo é garantir o acesso universal a serviços de energia confiáveis, sustentáveis, modernos e a preços acessíveis. É sobre fontes renováveis e eficiência energética.',
      ods: 'ODS 7: Energia Limpa e Acessível',
      options: [
        { text: 'Quais são as principais fontes de energia limpa?', nextId: 'ods7_sources' },
        { text: 'Como a energia afeta o clima?', nextId: 'ods7_link_ods13' }, // Liga com ODS 13
        { text: 'E a energia solar no Brasil?', nextId: 'ods7_brazil_solar' },
        { text: 'Por que é importante ser "acessível"?', nextId: 'ods7_accessibility' },
      ],
    },
    {
      id: 'ods7_sources',
      speaker: 'friend',
      text: 'Principalmente solar, eólica (vento), hidrelétrica, biomassa e geotérmica. Elas emitem menos gases de efeito estufa e são inesgotáveis, ao contrário dos combustíveis fósseis.',
      ods: 'ODS 7: Energia Limpa e Acessível',
      options: [
        { text: 'Isso é ótimo! E a ODS 8?', nextId: 'topic8_intro' },
        { text: 'Qual o desafio da energia eólica?', nextId: 'ods7_wind_challenge' },
      ],
    },
    {
      id: 'ods7_link_ods13',
      speaker: 'friend',
      text: 'A transição para energia limpa (ODS 7) é CRUCIAL para a **Ação Contra a Mudança Global do Clima** (ODS 13), pois a queima de combustíveis fósseis é uma das maiores causas do aquecimento global. Uma depende da outra!',
      ods: 'ODS 7: Energia Limpa e Acessível & ODS 13: Ação Contra a Mudança Global do Clima',
      options: [
        { text: 'Faz todo o sentido!', nextId: 'topic8_intro' },
        { text: 'Qual a próxima ODS?', nextId: 'topic8_intro' },
      ],
    },
    {
      id: 'topic8_intro',
      speaker: 'friend',
      text: 'Finalmente, a ODS 8: **Trabalho Decente e Crescimento Econômico**. Promove o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.',
      ods: 'ODS 8: Trabalho Decente e Crescimento Econômico',
      options: [
        { text: 'O que é "trabalho decente"?', nextId: 'ods8_decent_work' },
        { text: 'Como combater o trabalho infantil?', nextId: 'ods8_child_labor' },
        { text: 'E o crescimento sustentável?', nextId: 'ods8_sustainable_growth' },
        { text: 'Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods8_decent_work',
      speaker: 'friend',
      text: 'Significa ter salários justos, condições de trabalho seguras, direitos trabalhistas e proteção social. É sobre dignidade para o trabalhador.',
      ods: 'ODS 8: Trabalho Decente e Crescimento Econômico',
      options: [
        { text: 'Entendi. Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods8_child_labor',
      speaker: 'friend',
      text: 'A ODS 8 busca erradicar todas as formas de trabalho infantil e forçado. Educação de qualidade (ODS 4) e combate à pobreza (ODS 1) são cruciais para isso.',
      ods: 'ODS 8: Trabalho Decente e Crescimento Econômico',
      options: [
        { text: 'Concordo. Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods8_sustainable_growth',
      speaker: 'friend',
      text: 'É um crescimento que não esgota os recursos naturais, não degrada o meio ambiente e gera empregos de qualidade. É equilibrado para o presente e o futuro.',
      ods: 'ODS 8: Trabalho Decente e Crescimento Econômico',
      options: [
        { text: 'Muito bom. Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
  ],
  dice3: [ // Bloco do Dado 3 (ODS 9, 10, 11, 12)
    {
      id: 'intro_dice3',
      speaker: 'friend',
      text: 'Fala, tudo bem? Para este bloco, vamos explorar as ODS de 9 a 12. Que tal começarmos com Indústria, Inovação e Infraestrutura, a ODS 9?',
      options: [{ text: 'Bora!', nextId: 'topic9_intro' }],
      ods: 'Introdução: ODS 9, 10, 11, 12'
    },
    {
      id: 'topic9_intro',
      speaker: 'friend',
      text: 'A ODS 9 é sobre construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável e fomentar a inovação. É a base para o desenvolvimento!',
      ods: 'ODS 9: Indústria, Inovação e Infraestrutura',
      options: [
        { text: 'Qual a importância da infraestrutura?', nextId: 'ods9_infra_importance' },
        { text: 'E a inovação?', nextId: 'ods9_innovation' },
        { text: 'Como a indústria pode ser sustentável?', nextId: 'ods9_sustainable_industry' },
        { text: 'Qual a próxima ODS?', nextId: 'topic10_intro' },
      ],
    },
    {
      id: 'ods9_infra_importance',
      speaker: 'friend',
      text: 'Boa infraestrutura (transportes, energia, comunicação) é essencial para o crescimento econômico e para conectar pessoas e mercados, especialmente em áreas remotas.',
      ods: 'ODS 9: Indústria, Inovação e Infraestrutura',
      options: [
        { text: 'Faz sentido. ODS 10 agora?', nextId: 'topic10_intro' },
      ],
    },
    {
      id: 'ods9_innovation',
      speaker: 'friend',
      text: 'Inovação é a chave para soluções para os desafios sustentáveis, como novas tecnologias de energia limpa (ODS 7) ou processos produtivos mais eficientes.',
      ods: 'ODS 9: Indústria, Inovação e Infraestrutura & ODS 7',
      options: [
        { text: 'Que legal a conexão! ODS 10?', nextId: 'topic10_intro' },
      ],
    },
    {
      id: 'ods9_sustainable_industry',
      speaker: 'friend',
      text: 'É sobre indústrias que adotam práticas mais limpas, usam recursos de forma eficiente e geram menos resíduos, contribuindo para um consumo responsável (ODS 12).',
      ods: 'ODS 9: Indústria, Inovação e Infraestrutura & ODS 12',
      options: [
        { text: 'Ótimo. ODS 10?', nextId: 'topic10_intro' },
      ],
    },

    {
      id: 'topic10_intro',
      speaker: 'friend',
      text: 'Agora, a ODS 10: **Redução das Desigualdades**. Ela busca reduzir a desigualdade de renda dentro e entre os países, e combater a discriminação de qualquer tipo.',
      ods: 'ODS 10: Redução das Desigualdades',
      options: [
        { text: 'Que tipos de desigualdade?', nextId: 'ods10_types' },
        { text: 'Como reduzir a desigualdade de renda?', nextId: 'ods10_income_inequality' },
        { text: 'Qual a próxima ODS?', nextId: 'topic11_intro' },
        { text: 'Qual o papel da justiça nesse ODS?', nextId: 'ods10_link_ods16' },
      ],
    },
    {
      id: 'ods10_types',
      speaker: 'friend',
      text: 'Não é só econômica. Inclui desigualdades de gênero (ODS 5), raça, etnia, religião, origem, deficiência. A ODS 10 quer garantir que ninguém seja deixado para trás.',
      ods: 'ODS 10: Redução das Desigualdades & ODS 5',
      options: [
        { text: 'É um desafio enorme. ODS 11?', nextId: 'topic11_intro' },
      ],
    },

    {
      id: 'topic11_intro',
      speaker: 'friend',
      text: 'A ODS 11: **Cidades e Comunidades Sustentáveis**. Visa tornar as cidades e assentamentos humanos inclusivos, seguros, resilientes e sustentáveis. Nossas cidades precisam evoluir!',
      ods: 'ODS 11: Cidades e Comunidades Sustentáveis',
      options: [
        { text: 'O que faz uma cidade ser "sustentável"?', nextId: 'ods11_sustainable_city' },
        { text: 'E o transporte público?', nextId: 'ods11_public_transport' },
        { text: 'Qual a próxima ODS?', nextId: 'topic12_intro' },
        { text: 'Como a cultura se encaixa nisso?', nextId: 'ods11_culture' },
      ],
    },
    {
      id: 'ods11_sustainable_city',
      speaker: 'friend',
      text: 'Ter acesso a moradia digna, transporte eficiente, áreas verdes, gestão de resíduos, e planejamento urbano que priorize as pessoas e o meio ambiente.',
      ods: 'ODS 11: Cidades e Comunidades Sustentáveis',
      options: [
        { text: 'Perfeito. ODS 12 agora?', nextId: 'topic12_intro' },
      ],
    },
    {
      id: 'ods11_public_transport',
      speaker: 'friend',
      text: 'Sim! Reduzir o uso de carros, investir em transporte público de qualidade e ciclovias, diminuindo a poluição e o trânsito, e contribuindo para cidades mais vivas.',
      ods: 'ODS 11: Cidades e Comunidades Sustentáveis',
      options: [
        { text: 'Concordo. ODS 12?', nextId: 'topic12_intro' },
      ],
    },

    {
      id: 'topic12_intro',
      speaker: 'friend',
      text: 'E a ODS 12: **Consumo e Produção Responsáveis**. Busca garantir padrões de consumo e produção sustentáveis. É sobre como produzimos e o que consumimos.',
      ods: 'ODS 12: Consumo e Produção Responsáveis',
      options: [
        { text: 'Como posso consumir de forma responsável?', nextId: 'ods12_consumer_action' },
        { text: 'E o lixo?', nextId: 'ods12_waste_management' },
        { text: 'Qual a relação com a ODS 2?', nextId: 'ods12_link_ods2' },
        { text: 'Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods12_consumer_action',
      speaker: 'friend',
      text: 'Escolher produtos duráveis, recicláveis, de empresas que se preocupam com o impacto social e ambiental. É sobre ter consciência do que compramos e usamos.',
      ods: 'ODS 12: Consumo e Produção Responsáveis',
      options: [
        { text: 'Entendi. Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods12_waste_management',
      speaker: 'friend',
      text: 'É sobre reduzir drasticamente a geração de resíduos através da prevenção, redução, reciclagem e reuso. Economia circular é a palavra-chave!',
      ods: 'ODS 12: Consumo e Produção Responsáveis',
      options: [
        { text: 'Muito bom. Fim do nosso bloco de hoje!', nextId: 'farewell_block' },
      ],
    },
  ],
  dice4: [ // Bloco do Dado 4 (ODS 13, 14, 15, 16, 17) - 5 ODS
    {
      id: 'intro_dice4',
      speaker: 'friend',
      text: 'Olá! Para a última parte, vamos abordar as ODS de 13 a 17, incluindo Ação Contra a Mudança Global do Clima. Preparado(a)?',
      options: [{ text: 'Com certeza!', nextId: 'topic13_intro' }],
      ods: 'Introdução: ODS 13, 14, 15, 16, 17'
    },
    {
      id: 'topic13_intro',
      speaker: 'friend',
      text: 'A ODS 13: **Ação Contra a Mudança Global do Clima**. Ela nos desafia a tomar medidas urgentes para combater as mudanças climáticas e seus impactos. Não é algo para o futuro, é para agora!',
      ods: 'ODS 13: Ação Contra a Mudança Global do Clima',
      options: [
        { text: 'Quais os maiores impactos que já vemos?', nextId: 'ods13_impacts' },
        { text: 'O que as nações podem fazer?', nextId: 'ods13_national_action' },
        { text: 'Qual a próxima ODS?', nextId: 'topic14_intro' },
        { text: 'Qual a relação com desastres naturais?', nextId: 'ods13_natural_disasters' },
      ],
    },
    {
      id: 'ods13_impacts',
      speaker: 'friend',
      text: 'Temperaturas extremas, aumento do nível do mar, eventos climáticos mais severos (secas, inundações, tempestades). Afeta a todos, especialmente os mais vulneráveis.',
      ods: 'ODS 13: Ação Contra a Mudança Global do Clima',
      options: [
        { text: 'É assustador. ODS 14 agora?', nextId: 'topic14_intro' },
      ],
    },
    {
      id: 'ods13_national_action',
      speaker: 'friend',
      text: 'Governanças precisam investir em políticas de energia renovável (ODS 7), transporte sustentável, e proteger ecossistemas, além de se preparar para impactos climáticos.',
      ods: 'ODS 13: Ação Contra a Mudança Global do Clima & ODS 7',
      options: [
        { text: 'Perfeito. ODS 14?', nextId: 'topic14_intro' },
      ],
    },

    {
      id: 'topic14_intro',
      speaker: 'friend',
      text: 'A ODS 14: **Vida na Água**. É sobre conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável. Os oceanos são vitais!',
      ods: 'ODS 14: Vida na Água',
      options: [
        { text: 'Quais as maiores ameaças aos oceanos?', nextId: 'ods14_threats' },
        { text: 'Como a poluição afeta?', nextId: 'ods14_pollution' },
        { text: 'E a pesca sustentável?', nextId: 'ods14_sustainable_fishing' },
        { text: 'Qual a próxima ODS?', nextId: 'topic15_intro' },
      ],
    },
    {
      id: 'ods14_threats',
      speaker: 'friend',
      text: 'Poluição por plástico, acidificação dos oceanos, pesca excessiva e destruição de habitats marinhos como os corais.',
      ods: 'ODS 14: Vida na Água',
      options: [
        { text: 'Triste realidade. ODS 15?', nextId: 'topic15_intro' },
      ],
    },
    {
      id: 'ods14_pollution',
      speaker: 'friend',
      text: 'A poluição, especialmente plástica, mata a vida marinha e entra na nossa cadeia alimentar. A ODS 12 (Consumo Responsável) tem papel chave nisso, reduzindo o lixo.',
      ods: 'ODS 14: Vida na Água & ODS 12',
      options: [
        { text: 'Verdade. ODS 15?', nextId: 'topic15_intro' },
      ],
    },

    {
      id: 'topic15_intro',
      speaker: 'friend',
      text: 'Agora, a ODS 15: **Vida Terrestre**. Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade.',
      ods: 'ODS 15: Vida Terrestre',
      options: [
        { text: 'Qual a maior ameaça à biodiversidade?', nextId: 'ods15_threats' },
        { text: 'Como combater o desmatamento?', nextId: 'ods15_deforestation' },
        { text: 'Qual a próxima ODS?', nextId: 'topic16_intro' },
        { text: 'E os parques e áreas protegidas?', nextId: 'ods15_protected_areas' },
      ],
    },
    {
      id: 'ods15_threats',
      speaker: 'friend',
      text: 'Destruição de habitats, desmatamento, mudanças climáticas (ODS 13), espécies invasoras e superexploração de recursos. Perder uma espécie afeta todo o ecossistema.',
      ods: 'ODS 15: Vida Terrestre & ODS 13',
      options: [
        { text: 'Precisamos proteger! ODS 16?', nextId: 'topic16_intro' },
      ],
    },
    {
      id: 'ods15_deforestation',
      speaker: 'friend',
      text: 'É sobre combater o desmatamento ilegal, reflorestar, promover a agricultura sustentável e incentivar o consumo consciente de produtos florestais.',
      ods: 'ODS 15: Vida Terrestre',
      options: [
        { text: 'Entendi. ODS 16?', nextId: 'topic16_intro' },
      ],
    },

    {
      id: 'topic16_intro',
      speaker: 'friend',
      text: 'A ODS 16: **Paz, Justiça e Instituições Eficazes**. É sobre promover sociedades pacíficas e inclusivas, oferecer acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.',
      ods: 'ODS 16: Paz, Justiça e Instituições Eficazes',
      options: [
        { text: 'Como a justiça se conecta com as outras ODS?', nextId: 'ods16_link_all' },
        { text: 'E sobre a violência e conflitos?', nextId: 'ods16_violence' },
        { text: 'Qual a próxima ODS?', nextId: 'topic17_intro' },
        { text: 'O que são "instituições eficazes"?', nextId: 'ods16_institutions' },
      ],
    },
    {
      id: 'ods16_link_all',
      speaker: 'friend',
      text: 'É fundamental! Sem paz e instituições justas, é muito difícil alcançar a erradicação da pobreza (ODS 1), a educação de qualidade (ODS 4) ou a igualdade de gênero (ODS 5). Tudo se conecta!',
      ods: 'ODS 16: Paz, Justiça e Instituições Eficazes (e Conexão com Outras ODS)',
      options: [
        { text: 'Faz todo o sentido! ODS 17 agora!', nextId: 'topic17_intro' },
      ],
    },

    {
      id: 'topic17_intro',
      speaker: 'friend',
      text: 'Por fim, a ODS 17: **Parcerias e Meios de Implementação**. Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável. É a ODS da colaboração!',
      ods: 'ODS 17: Parcerias e Meios de Implementação',
      options: [
        { text: 'O que isso significa na prática?', nextId: 'ods17_practical' },
        { text: 'Como ela se relaciona com todas as outras?', nextId: 'ods17_link_all' },
        { text: 'Qual o papel da tecnologia?', nextId: 'ods17_technology' },
        { text: 'Foi um ótimo papo! Fim do nosso bloco!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods17_practical',
      speaker: 'friend',
      text: 'É sobre cooperação entre governos, setor privado e sociedade civil. Compartilhar conhecimento, tecnologia e recursos financeiros para atingir todas as ODS.',
      ods: 'ODS 17: Parcerias e Meios de Implementação',
      options: [
        { text: 'Essencial! Fim do nosso bloco!', nextId: 'farewell_block' },
      ],
    },
    {
      id: 'ods17_link_all',
      speaker: 'friend',
      text: 'Ela é a ODS que "costura" todas as outras! Nenhuma ODS pode ser alcançada por um país ou setor sozinho. A colaboração global é a chave para o sucesso de toda a Agenda 2030.',
      ods: 'ODS 17: Parcerias e Meios de Implementação',
      options: [
        { text: 'Que ótima forma de terminar! Fim!', nextId: 'farewell_block' },
      ],
    },
  ],
  farewell_block: { // Um turno de despedida genérico para o final de cada bloco
    id: 'farewell_block',
    speaker: 'friend',
    text: 'Ufa! Abordamos bastante coisa hoje. Foi um papo super importante sobre esses ODS! A gente continua depois, ok? Até mais! 👋',
    isEnd: true,
  },
};

export default conversationBlocks; // Exporte os blocos de conversa