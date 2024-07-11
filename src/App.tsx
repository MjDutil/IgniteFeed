import './App.css'
import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import style from './App.module.css';
import "./Global.css";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/113648830?v=4",
      name: 'Maju Dutil',
      role: 'Frontend Developer',
    },
    content: [
        { type: 'paragraph', content: 'Fala Galera 😜' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa! 😁' },
        { type: 'link', content: 'github.com/MjDutil' },	
    ],
    publishedAt: new Date('2024-07-02 18:35:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/113648830?v=4",
      name: 'Leo Telles',
      role: 'Backend Developer',
    },
    content: [
        { type: 'paragraph', content: 'Fala Galera 😜' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa! 😁' },
        { type: 'link', content: 'github.com/MjDutil' },	
    ],
    publishedAt: new Date('2024-07-01 12:35:00'),
  },{
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/113648830?v=4",
      name: 'Claudio Campos',
      role: 'UI UX Designer',
    },
    content: [
        { type: 'paragraph', content: 'Fala Galera 😜' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa! 😁' },
        { type: 'link', content: 'github.com/MjDutil' },	
    ],
    publishedAt: new Date('2024-06-30 19:35:00'),
  },
];

export function App() {
  return (
      <div>
        <Header />
          <div className={style.wrapper}>
            <Sidebar />
            <main>
             {posts.map(post => {
                return ( 
                  <Post
                    key={post.id} //informação unica de cada um dos itens da lista
                    post={post}
                  />
                )
             })}
            </main>
          </div>
      </div>
  )
}

export default App
