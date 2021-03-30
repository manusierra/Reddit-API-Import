import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// Library for API import
import axios from 'axios';

function Reddit() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <Fragment>
      <div>
        <h1>/re/reactjs</h1>
        <ul>
          {/* Posts iteration */}
          {posts.map((posts) => (
            <li key={posts.id}>
              <h4>
                <a href={posts.url} target="_blank" rel="noreferrer">
                  {posts.title}
                </a>
              </h4>
              Score: {posts.score}, Author: {posts.author_fullname}
              <br />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

ReactDOM.render(<Reddit />, document.getElementById('root'));
