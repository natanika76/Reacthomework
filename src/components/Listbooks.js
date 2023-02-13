import React from "react"
import Eachbook from "./Eachbook";

class Listbooks extends React.Component {
  
    render() {
      if(this.props.books.length > 0)
  return (<div>
  {this.props.books.map((el) => (
    <Eachbook key={el.id} eachbook={el}/>
  ))}
  </div>)
    else 
    return (<div className="book">
    <h3>В библиотеке книг нет</h3>
      </div>)
}
}

export default Listbooks
