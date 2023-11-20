import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
};

const userList = () => {
    const users = [
        {email:'ryu@gmail.com', name : '유재석'},
        {email:'gym@gmail.com', name : '짐종국'},
        {email:'heo@gmail.com', name : '허동훈'},
        {email:'song@gmail.com', name : '송지후'},
        {email:'ji@gmail.com', name : '지슥진'},
    ];
    return (
<table>
    <thead>
        <tr>
            <th>이름</th>
            <th>이메일</th>
        </tr>
    </thead>
    <tbody>
        {users.map(user => <User userData={user}/>)}
    </tbody>
</table>
    )
}

export  default userList;