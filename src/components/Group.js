import React from "react"

class Group extends React.Component {
  musicians = [{firstname:"Matt", lastname: "Bellamy"},
  {firstname:"Chris", lastname: "Wolstenholme"},
  {firstname:"Dominic", lastname: "Howard"}]
    render() {
  return (
    <div className="descript">
<div>Название: "MUSE"</div>
<div>Любимый альбом: "Origin Of Symmetry"</div>
<div>Вокал, гитара, клавиши:{this.musicians[0].firstname} {this.musicians[0].lastname} </div>
<div>Бэк-вокал, бас-гитара, вокал:{this.musicians[1].firstname} {this.musicians[1].lastname} </div>
<div>Ударные:{this.musicians[2].firstname} {this.musicians[2].lastname} </div>
    </div>
  )
}
}

export default Group
