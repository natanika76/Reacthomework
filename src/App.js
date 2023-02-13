import React from 'react';
import Header from './components/Header';
import Header1 from './components/Header1';
import Book from './components/Book';
import Group from './components/Group';
import Recipe from './components/Recipe';
import Image from './components/Image';
import krolik from './img/krolik.jpg';
import muse from './img/muse.jpg';
import orig from './img/orig.png';
import Listbooks from './components/Listbooks';
import AddBook from './components/AddBook';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
  books: [
    {
      id: 1,
      author: "Эдгар По",
      namebook: "Ворон",
      genre: "триллер",
      yearpublic: 2023,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      rating: 0,
      isLike: true 
    },
    {
      id: 2,
      author: "Морис Дрюон",
      namebook: "Железный король",
      genre: "история",
      yearpublic: 2020,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      rating: 0,
      isLike: true 
    },
    {
      id: 3,
      author: "Александр Блок",
      namebook: "Двенадцать",
      genre: "поэзия",
      yearpublic: 2000,
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 0, 
      isLike: false 
    },
    {
      id: 4,
      author: "Жюль Верн",
      namebook: "Таинственный остров",
      genre: "приключения",
      yearpublic: 2005,
      text: "Porta non pulvinar neque laoreet suspendisse interdum consectetur. Vel turpis nunc eget lorem dolor sed viverra ipsum.",
      rating: 0,
      isLike: true 
    },
    {
      id: 5,
      author: "Михаил Лермонтов",
      namebook: "Маскарад",
      genre: "драма",
      yearpublic: 2015,
      text: "A lacus vestibulum sed arcu non odio euismod lacinia at. Suspendisse in est ante in nibh mauris. ",
      rating: 0,
      isLike: false 
    }]
    }
    this.addBook = this.addBook.bind(this)
  }
  render() {
    return (<div>
      <Header1 />

      <Header title="Любимая книга"/>
      <Book />

      <Header title="Любимая группа"/>
      <Group />
      <img src={muse} height="200" alt="muse"/>
      <img src={orig} height="200" alt="orig"/>

      <Header title="Любимый кулинарный рецепт"/>
      <Recipe />
      <Image image={krolik}/>

      <Header title="Моя библиотека" />
      <main>
        <Listbooks books={this.state.books}/>
      </main>
      <aside>
        <AddBook onAdd={this.addBook}/>
      </aside>

  </div>)
    }
    addBook(booknew) {
      const id = this.state.books.length + 1
      this.setState({books: [...this.state.books, {id, booknew}]})
  }
  }

  export default App
