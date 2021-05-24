import React from 'react'
import Navbar from "../Upsolve/Navbar/Navbar"

const Pending = (props) => {
    const user = props.userInfo?.data?.result[0];
    console.log(user);
    return (
        <div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Pending
