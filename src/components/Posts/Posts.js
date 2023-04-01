import React from 'react'
import Post from '../Post/Post';

export default function Posts(props) {
    return (
        <div className='col-9'>
            <div className='row '>
                {props.posts.map((post) =>
                    <Post
                        key={post.id}
                        title={post.title}
                        price={post.price}
                        image={post.image}
                        category={post.category}
                        item={post}
                    />
                )}
            </div>
        </div>
    )

}
