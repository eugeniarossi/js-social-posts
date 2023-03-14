'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            mainTitle: 'Social Posts',
            posts: [
                {
                    id: 1,
                    author: {
                        name: 'Rick Sanchez',
                        image: 'https://unsplash.it/300/300?image=20',
                        age: 39,
                        nPosts: 150
                    },
                    created: '03-10-2023',
                    content: 'Lorem ipsum',
                    media: 'https://unsplash.it/600/300?image=14',
                    likes: 1,
                    likeClass: ''
                },
                {
                    id: 2,
                    author: {
                        name: 'Morty Smith',
                        image: 'https://unsplash.it/300/300?image=',
                        age: 39,
                        nPosts: 150
                    },
                    created: '03-10-2023',
                    content: 'Lorem ipsum',
                    media: 'https://unsplash.it/600/300?image=40',
                    likes: 80,
                    likeClass: ''
                },
                {
                    id: 3,
                    author: {
                        name: 'Summer Smith',
                        image: 'https://unsplash.it/300/300?image=',
                        age: 39,
                        nPosts: 150
                    },
                    created: '03-10-2023',
                    content: 'Lorem ipsum',
                    media: 'https://unsplash.it/600/300?image=21',
                    likes: 80,
                    likeClass: ''
                },
                {
                    id: 4,
                    author: {
                        name: 'Beth Smith',
                        image: 'https://unsplash.it/300/300?image=',
                        age: 39,
                        nPosts: 150,
                    },
                    created: '03-10-2023',
                    content: 'Lorem ipsum',
                    media: 'https://unsplash.it/600/300?image=30',
                    likes: 80,
                    likeClass: ''
                }
            ]
        }
    },
    methods: {
        like(index) {
            
            if (this.posts[index].likeClass === 'like-button--liked') {
                this.posts[index].likeClass = '';
                this.posts[index].likes--;
            } else {
                this.posts[index].likeClass = 'like-button--liked';
                this.posts[index].likes++;
            }
        }
    }
}).mount('#app');