import React from 'react';

function PostHeader({ author, date, content }) {
    return (
        <div className="author-post">
            <img className="author-image" src={author.avatar}></img>
            <div className="author-info">
                <h2>{author.name}</h2>
                <small>{date}</small>
            </div>
        </div>
    )
}

function PostComments({ comments }) {
    return (
        <>
            {comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <img className="comment-image" src={comment.author.avatar}></img>
                    <div className="comment-info">

                        <p> <strong>{comment.author.name}</strong>{comment.content}</p>
                    </div>
                </div>

            ))}
        </>
    )
}

function PostItem({ author, date, content, comments }) {
    return (
        <div className="post">
            <PostHeader author={author} date={date} content={content} />
            <p>{content}</p>
            <PostComments comments={comments} />
        </div>
    )
}

export default PostItem