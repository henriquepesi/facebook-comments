import React, { Component } from 'react';
import PostItem from './PostItem'

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Marie',
                    avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
                },

                date: '15/07/2019',
                content: 'Testando novo post',

                comments: [
                    {
                        id: 2,
                        author: {
                            name: 'John',
                            avatar: 'https://randomuser.me/api/portraits/men/58.jpg'
                        },
                        content: 'Ad qui nihil repudiandae. Eripuit offendit suscipiantur sea no. Verterem eleifend consequuntur ius no, mel ocurreret neglegentur no, diceret laboramus elaboraret est ea. Et hinc illud virtute has, ius viris conceptam temporibus eu, vitae alienum qui an. Nam epicuri hendrerit ex, ea natum suavitate eum. Qui alienum phaedrum ad, sed te autem noster ocurreret, vis officiis urbanitas eu. Vim at sale intellegam.'
                    }
                ]
            },
            {
                id: 3,
                author: {
                    name: 'Marie',
                    avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
                },

                date: '15/07/2019',
                content: 'Testando novo post',

                comments: [
                    {
                        id: 4,
                        author: {
                            name: 'John',
                            avatar: 'https://randomuser.me/api/portraits/men/58.jpg'
                        },
                        content: 'Funcionou :D'
                    }
                ]
            },
        ]
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="postlist">
                {posts.map(post => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
        )
    }
}

export default PostList