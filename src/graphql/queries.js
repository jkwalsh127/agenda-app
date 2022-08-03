/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAgenda = /* GraphQL */ `
  query GetAgenda($id: ID!) {
    getAgenda(id: $id) {
      id
      title
      firsttopic
      firstestimate
      firstdescription
      secondtopic
      secondestimate
      seconddescription
      thirdtopic
      thirdestimate
      thirddescription
      fourthtopic
      fourthestimate
      fourthdescription
      complete
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
        firsttopic
        firstestimate
        firstdescription
        secondtopic
        secondestimate
        seconddescription
        thirdtopic
        thirdestimate
        thirddescription
        fourthtopic
        fourthestimate
        fourthdescription
        complete
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
