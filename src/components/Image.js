import React from "react"

class Image extends React.Component {
    render() {
  return (
    <img src={this.props.image} alt="img" width="200"/>
  )
}
}

export default Image
