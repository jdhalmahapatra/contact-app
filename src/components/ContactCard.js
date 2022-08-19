import React from 'react'
import userImg from '../images/user.png'



const ContactCard = (props) => {
    debugger;
    const {id, name, email} = props.contact
    debugger;
    console.log(props.deleteHandler)

    return (
        <div className='item'>
        <img className='ui avatar image' src={userImg} alt='user'/>
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
            <i className='trash alternate outline icon' 
                style={{color:'red', 
                        marginTop:'7px',
                        float:'right'}}
                onClick={() => {props.deleteHandler(id)}}
            >
            </i>
        </div> 
    )
}

export default ContactCard