import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import ShoppingList from '../ShoppingList/ShoppingList';

export default function Sections() {
  //style
  const style = {
    marginTop: '100px',
  };

  //get data from api
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(
      post => { setPosts(post.data) }
    )
  }, [])



  return (
    <div className='container ' style={style}>
      <div className='row'>
        
        <ShoppingList />

        <Posts
          posts={posts}
        />

      </div>
    </div>
  )
}
