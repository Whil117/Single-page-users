import {FC} from 'react'
import { Users } from './Users'

interface Props {
    data:{
        id:number
        first_name:string
        last_name:string
        avatar:string
        color:string
        email:string
        favorite:Boolean
    }
    handleCheck:(id: number) => void
}
const User:FC <Props>= ({data,handleCheck}) => {
    return (
        <div>
            <img style={{borderRadius:"150px", objectFit:"cover", width:"150px",height:"150px"}} src={data.avatar} alt={data.first_name} />
            <p style={{color:data.color}}><b>{data.first_name} {data.last_name}</b></p>
            <p style={{color:data.color}}>{data.email}</p>
            <button onClick={()=>handleCheck(data.id)}>{data.favorite ? "unfollow" : "follow"}</button>
        </div>
    )
}

export default User
