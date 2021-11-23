import { withWidth } from '@material-ui/core'
import React from 'react'


 const Ocult = (props) => {
    return (
        <div>
            Ancho: {props.width}
        </div>
    )
}


export default withWidth()(Ocult)