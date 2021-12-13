import { useMemo } from 'react';

export const useSortedPost = (post, sort) => {

    const sortedPosts = useMemo(() => {
        console.log('Вызвана')
        if (sort) {
            return [...post].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return post
    }, [sort, post])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPost(posts, sort);
    const sortedSerchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.trim().toLowerCase()))
    },
        [query, sortedPosts]
    )
    return sortedSerchedPosts;
}