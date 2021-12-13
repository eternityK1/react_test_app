import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import { useMemo } from 'react';
import './style/App.css';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Test port 1', body: '123ipt' },
    { id: 2, title: '12321 port 2', body: 'asadascr2212334ipt' },
    { id: 3, title: 'цууаа', body: 'цацуаpt' }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [modal, setModal] = useState(false)

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    console.log('Вызвана')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedSerchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.trim().toLowerCase()))
  },
    [filter.query, sortedPosts]
  )
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visable={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <TransitionGroup></TransitionGroup>
      <PostList remove={removePost} posts={sortedSerchedPosts} title={'JS'} />

    </div>
  );
}

export default App;
