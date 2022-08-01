/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAgenda = /* GraphQL */ `
  mutation CreateAgenda(
    $input: CreateAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    createAgenda(input: $input, condition: $condition) {
      id
      title
      description
      topics {
        items {
          id
          title
          estimate
          description
          createdAt
          updatedAt
          agendaTopicsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAgenda = /* GraphQL */ `
  mutation UpdateAgenda(
    $input: UpdateAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    updateAgenda(input: $input, condition: $condition) {
      id
      title
      description
      topics {
        items {
          id
          title
          estimate
          description
          createdAt
          updatedAt
          agendaTopicsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAgenda = /* GraphQL */ `
  mutation DeleteAgenda(
    $input: DeleteAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    deleteAgenda(input: $input, condition: $condition) {
      id
      title
      description
      topics {
        items {
          id
          title
          estimate
          description
          createdAt
          updatedAt
          agendaTopicsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
      id
      title
      estimate
      description
      agenda {
        id
        title
        description
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      agendaTopicsId
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      title
      estimate
      description
      agenda {
        id
        title
        description
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      agendaTopicsId
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      title
      estimate
      description
      agenda {
        id
        title
        description
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      agendaTopicsId
    }
  }
`;
