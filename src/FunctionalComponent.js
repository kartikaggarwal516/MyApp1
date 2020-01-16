import React from 'react'

const Greetings= (props) => (
<h3>{props.index+1} Good {props.time} {props.username}</h3>
    )

export default Greetings
// export default function Greetings(){
//     return(
//         <div >
//             Hi there 
//         </div>
//     )
// }