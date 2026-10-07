const scale = (...labels) => labels.map((label) => ({ label, value: label }));

export const SURVEY_SECTIONS = [
  {
    title: '1. INFORMAÇÕES SOBRE O PROCESSO',
    questions: [
      {
        name: 'q1_1',
        label: '1.1. As informações recebidas sobre as etapas do processo de aposentadoria foram claras e suficientes?',
        options: scale(
          'Muito claras e suficientes',
          'Claras e suficientes',
          'Parcialmente claras e suficientes',
          'Pouco claras e insuficientes',
          'Nada claras e insuficientes'
        ),
      },
      {
        name: 'q1_2',
        label: '1.2. Como você avalia as orientações recebidas sobre a documentação necessária para a aposentadoria?',
        options: scale('Excelente', 'Muito boa', 'Boa', 'Regular', 'Ruim', 'Não se aplica'),
      },
      {
        name: 'q1_3',
        label: '1.3. Durante o processo, você recebeu informações suficientes sobre o andamento da sua aposentadoria?',
        options: scale('Sempre', 'Na maioria das vezes', 'Às vezes', 'Raramente', 'Nunca'),
      },
    ],
  },
  {
    title: '2. ATENDIMENTO',
    questions: [
      {
        name: 'q2_1',
        label: '2.1. Quando precisou de atendimento ou esclarecimento de dúvidas, como você avalia o suporte recebido?',
        options: scale('Excelente', 'Muito bom', 'Bom', 'Regular', 'Ruim', 'Não precisei de atendimento'),
      },
      {
        name: 'q2_2',
        label: '2.2. Quando apresentou dúvidas ou solicitações, elas foram solucionadas de forma satisfatória?',
        options: scale('Sempre', 'Na maioria das vezes', 'Às vezes', 'Raramente', 'Nunca', 'Não se aplica'),
      },
    ],
  },
  {
    title: '3. TEMPO DE CONCLUSÃO',
    questions: [
      {
        name: 'q3_1',
        label: '3.1. Como você avalia o tempo necessário para a conclusão do processo de aposentadoria?',
        options: scale(
          'Muito satisfatório',
          'Satisfatório',
          'Regular',
          'Insatisfatório',
          'Muito insatisfatório',
          'Não tenho condições de avaliar'
        ),
      },
    ],
  },
  {
    title: '4. AVALIAÇÃO GERAL',
    questions: [
      {
        name: 'q4_1',
        label: '4.1. Considerando todas as etapas do processo, qual é o seu grau de satisfação com o processo de aposentadoria?',
        legend: ['1 - Muito insatisfeito', '2 - Insatisfeito', '3 - Nem satisfeito nem insatisfeito', '4 - Satisfeito', '5 - Muito satisfeito'],
        options: [1, 2, 3, 4, 5].map((n) => ({ label: String(n), value: n })),
      },
    ],
  },
];