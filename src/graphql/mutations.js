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
export const updateAgenda = /* GraphQL */ `
  mutation UpdateAgenda(
    $input: UpdateAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    updateAgenda(input: $input, condition: $condition) {
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
export const deleteAgenda = /* GraphQL */ `
  mutation DeleteAgenda(
    $input: DeleteAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    deleteAgenda(input: $input, condition: $condition) {
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
