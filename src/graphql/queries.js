/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAgenda = /* GraphQL */ `
  query GetAgenda($id: ID!) {
    getAgenda(id: $id) {
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
export const listAgenda = /* GraphQL */ `
  query ListAgenda(
    $filter: ModelAgendaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgenda(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        estimate
        description
        agenda {
          id
          title
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        agendaTopicsId
      }
      nextToken
    }
  }
`;
