import { type Template } from "@/lib/types";

export function createEmptyTemplate(): Template {
  return {
    id: crypto.randomUUID(),
    name: "Novo Template",
    description: "Descreva rapidamente o objetivo desta mensagem.",
    queueUrl: "",
    jsonBody: JSON.stringify(
      {
        eventType: "order.created",
        orderId: "{{orderId}}",
        customerEmail: "{{@email}}",
        correlationId: "{{@uuid}}",
      },
      null,
      2,
    ),
    messageAttributes: [
      {
        key: "source",
        type: "String",
        value: "catalogo-mensagens",
      },
    ],
  };
}

export function createAllGeneratorsTemplate(): Template {
  return {
    id: crypto.randomUUID(),
    name: "🧪 Todos os Geradores (Teste)",
    description:
      "Template de teste que utiliza todos os geradores disponíveis. Útil para validar o funcionamento de cada gerador.",
    queueUrl: "",
    jsonBody: JSON.stringify(
      {
        _meta: {
          description:
            "Template de teste — cada campo usa um gerador diferente",
          generatedAt: "{{@date.timestamp}}",
          correlationId: "{{@uuid}}",
        },
        person: {
          fullName: "{{@person.fullName}}",
          fullNameMale: "{{@person.fullName.male}}",
          fullNameFemale: "{{@person.fullName.female}}",
          firstName: "{{@person.firstName}}",
          lastName: "{{@person.lastName}}",
          sex: "{{@person.sex}}",
          sexAbbreviation: "{{@person.sex.abbreviation}}",
          birthdate: "{{@person.birthdate}}",
          cpf: "{{@person.cpf}}",
          phone: "{{@person.phone}}",
          email: "{{@email}}",
        },
        location: {
          country: "{{@location.country}}",
          stateName: "{{@location.state.name}}",
          stateAbbreviation: "{{@location.state.abbreviation}}",
          city: "{{@location.city}}",
          streetAddress: "{{@location.streetAddress}}",
          zipCode: "{{@location.zipCode}}",
        },
        dates: {
          past: "{{@date.past}}",
          future: "{{@date.future}}",
          recent: "{{@date.recent}}",
          soon: "{{@date.soon}}",
          dateonlyPast: "{{@dateonly.past}}",
          dateonlyFuture: "{{@dateonly.future}}",
          dateonlyRecent: "{{@dateonly.recent}}",
          dateonlySoon: "{{@dateonly.soon}}",
          timestamp: "{{@date.timestamp}}",
        },
        vehicle: {
          name: "{{@vehicle}}",
          manufacturer: "{{@vehicle.manufacturer}}",
          model: "{{@vehicle.model}}",
          color: "{{@vehicle.color}}",
          vin: "{{@vehicle.vin}}",
          fuel: "{{@vehicle.fuel}}",
        },
        finance: {
          amount: "{{@finance.amount}}",
          currencyCode: "{{@finance.currencyCode}}",
          iban: "{{@finance.iban}}",
        },
        numbers: {
          integer: "{{@number.int}}",
          float: "{{@number.float}}",
        },
        strings: {
          alphanumericShort: "{{@alphanumeric.short}}",
          alphanumericMedium: "{{@alphanumeric.medium}}",
          alphanumericLong: "{{@alphanumeric.long}}",
        },
        internet: {
          email: "{{@email}}",
          url: "{{@url}}",
        },
        misc: {
          uuid: "{{@uuid}}",
          boolean: "{{@boolean}}",
        },
      },
      null,
      2,
    ),
    messageAttributes: [
      { key: "source", type: "String", value: "catalogo-mensagens" },
      { key: "traceId", type: "String", value: "{{@uuid}}" },
      { key: "generatedCpf", type: "String", value: "{{@cpf}}" },
      { key: "generatedPhone", type: "String", value: "{{@phone}}" },
      { key: "generatedEmail", type: "String", value: "{{@email}}" },
      { key: "isActive", type: "String", value: "{{@boolean}}" },
      { key: "amount", type: "Number", value: "{{@number.int}}" },
    ],
  };
}

export function createMockTemplates(): Template[] {
  return [
    createAllGeneratorsTemplate(),
    {
      id: crypto.randomUUID(),
      name: "Pedido criado",
      description: "Evento padrão de criação de pedido.",
      queueUrl: "",
      jsonBody: JSON.stringify(
        {
          eventType: "order.created",
          orderId: "{{orderId}}",
          userId: "{{userId}}",
          customerEmail: "{{@email}}",
          createdAt: "{{@date.recent}}",
        },
        null,
        2,
      ),
      messageAttributes: [
        { key: "domain", type: "String", value: "orders" },
        { key: "traceId", type: "String", value: "{{@uuid}}" },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Usuário atualizado",
      description: "Mensagem para sincronização de dados de usuário.",
      queueUrl: "",
      jsonBody: JSON.stringify(
        {
          eventType: "user.updated",
          userId: "{{userId}}",
          email: "{{@email}}",
          fullName: "{{@fullName}}",
          company: "Acme Corp",
        },
        null,
        2,
      ),
      messageAttributes: [
        { key: "domain", type: "String", value: "users" },
        { key: "version", type: "Number", value: "1" },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Pagamento confirmado",
      description: "Evento para confirmação de pagamento no billing.",
      queueUrl: "",
      jsonBody: JSON.stringify(
        {
          eventType: "payment.confirmed",
          paymentId: "{{paymentId}}",
          orderId: "{{orderId}}",
          amount: "{{amount}}",
          transactionRef: "{{@alphanumeric}}",
        },
        null,
        2,
      ),
      messageAttributes: [
        { key: "domain", type: "String", value: "billing" },
        { key: "priority", type: "String", value: "high" },
      ],
    },
  ];
}

