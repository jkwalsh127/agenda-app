/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAgenda = /* GraphQL */ `
  subscription OnCreateAgenda {
    onCreateAgenda {
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
export const onUpdateAgenda = /* GraphQL */ `
  subscription OnUpdateAgenda {
    onUpdateAgenda {
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
export const onDeleteAgenda = /* GraphQL */ `
  subscription OnDeleteAgenda {
    onDeleteAgenda {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
