import React from "react"
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class Eachbook extends React.Component {
    eachbook = this.props.eachbook
    render() {
  return (
    <div className="book"> 
    <IoCloseCircleSharp className="delete-icon"/>
    <IoHammerSharp className="edit-icon" />
    <h3>{this.eachbook.author} {this.eachbook.namebook}</h3>
    <p>{this.eachbook.text}</p>
    <b>{this.eachbook.rating ? "оценок нет": "есть рейтинг"}</b>
    </div>
  )
}
}

export default Eachbook