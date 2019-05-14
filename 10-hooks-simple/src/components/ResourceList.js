import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]); //second argument controls if the function should be invoked

  return (
    <div>{resources.length}</div>
  );
}

export default ResourceList;
