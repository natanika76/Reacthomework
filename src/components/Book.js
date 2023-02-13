import React from "react"

class Book extends React.Component {
  databook = {
    titlename: "100 лет одиночества",
    author: "Габриэль Гарсия Маркес",
    genre: "магический реализм",
    pages: 450,
    review: "Стремительная мозаика жизни заставляет читающего ощутить контраст неумолимого течения времени и чувства одиночества."
} 
    render() {
  return (
    <div className="descript">
<div>Название: {this.databook.titlename}</div>
<div>Автор: {this.databook.author}</div>
<div>Жанр книги: {this.databook.genre} </div>
<div>Количество страниц:{this.databook.pages}</div>
<div>Рецензия: {this.databook.review}</div>
    </div>
  )
}
}

export default Book
