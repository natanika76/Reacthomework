import React from "react"

function Grilkrol() {
return (<div>Вымочить кролика в маринаде,
   выложить на разогретый гриль, жарить 30 мин.
   </div>)
}

class Recipe extends React.Component {
    render() {
  return (
    <div className="descript">
<div>Название: "Кролик на гриле"</div>
<div>{Grilkrol()}</div>
    </div>
  )
}
}

export default Recipe