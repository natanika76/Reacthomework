import React from "react"

class Header extends React.Component {
    render() {
  return (
    <div className="header">
<h2>{this.props.title}</h2>
    </div>
  )
}
}

export default Header
