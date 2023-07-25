import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/paulanader.png",
      name: "Paula Nader",
      role: "Front-end developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "#novoprojeto" },
    ],
    publishedAt: new Date("2023-07-07 19:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/paulanader.png",
      name: "Paula Nader",
      role: "Front-end developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "#novoprojeto" },
    ],
    publishedAt: new Date("2023-07-08 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
