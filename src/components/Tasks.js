import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listTopics } from './../graphql/queries';
import { createTopic as createTopicMutation, deleteTopic as deleteTopicMutation } from './../graphql/mutations';
import { Button, Typography } from "@mui/material";

const initialTopicFormState = { title: '', estimate: '' }

function Topics() {

  const [topics, setTopics] = useState([]);
  const [topicFormData, setTopicFormData] = useState(initialTopicFormState);

  useEffect(() => {
    fetchTopics();
  }, []);

  async function fetchTopics() {
    const apiData = await API.graphql({ query: listTopics });
    setTopics(apiData.data.listTopics.items);
  }

  async function createTopic() {
    if (!topicFormData.title || !topicFormData.estimate) return;
    await API.graphql({ query: createTopicMutation, variables: { input: topicFormData } });
    setTopics([ topics, topicFormData ]);
    setTopicFormData(initialTopicFormState);
  }

  async function deleteTopic({ id }) {
    const newTopicsArray = topics.filter(topic=> topic.id !== id);
    setTopics(newTopicsArray);
    await API.graphql({ query: deleteTopicMutation, variables: { input: { id } }});
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
            <Typography variant="myVariant">Add Topic</Typography>
            <input
            onChange={e => setTopicFormData({ ...topicFormData, 'title': e.target.value})}
            placeholder="topic title"
            value={topicFormData.title}
            />
            <input
            onChange={e => setTopicFormData({ ...topicFormData, 'estimate': e.target.value})}
            placeholder="topic time estimate"
            value={topicFormData.estimate}
            />
            <Button onClick={createTopic} variant="outlined">Create Topic</Button>
            <div style={{marginBottom: 30}}>
            {
                topics.map(topic => (
                <div key={topic.id || topic.title}>
                    <h2>{topic.title}</h2>
                    <p>{topic.estimate}</p>
                    <Button onClick={() => deleteTopic(topic)}>Delete topic</Button>
                </div>
                ))
            }
            </div>
        </div>
      )}
      </Authenticator>
    );
  }
  
  export default Topics;