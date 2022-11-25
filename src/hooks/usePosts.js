import { useMemo } from 'react';

const useSortedPosts = (posts, sortBy) =>
  useMemo(() => {
    switch (sortBy) {
      case 'name':
        return [...posts].sort((a, b) => a.title.localeCompare(b.title));

      case 'desc':
        return [...posts].sort((a, b) => a.body.localeCompare(b.body));

      default:
        return [...posts];
    }
  }, [posts, sortBy]);

export const usePosts = (posts, { sortBy, searchQuery }) => {
  const sortedPosts = useSortedPosts(posts, sortBy);

  const sortedAndFoundPosts = useMemo(() => {
    return sortedPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedPosts, searchQuery]);

  return sortedAndFoundPosts;
};
