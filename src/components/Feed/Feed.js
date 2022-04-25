import React, { useState, useEffect } from 'react';

import { orderBy, collection, query, onSnapshot } from 'firebase/firestore';

import { db } from '../../firebase';
import PostUploader from '../PostUploader/PostUploader';
import Post from '../Post/Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('timestamp', 'desc'));

    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  return (
    <div>
      <PostUploader />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            userName={post.data.userName}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
