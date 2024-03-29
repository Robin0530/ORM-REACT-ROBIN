import React, {useState} from 'react';
import axios from 'axios'

import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [user, setUser] = useState({email:"", password:"", name:""})

    const navigate = useNavigate()

    // 회원가입 이벤트 처리 함수
    const onEntry = (e) => {
        // axios로 회원가입 처리 restapi를 호출해서 회원가입 처리하기
        // 뿌려주는 user데이터는 백엔드에서 전달해주는 속성명과 같으면 동일하게 해도 됨
        // 백엔드 데이터 구조의 속성명은 프론트랑 동일하게 하자

        // 프론트엔드 데이터 바인딩 속성과 백엔드 RESTFul 전달 데이터 구조와 속성명이
        // 다를경우 아래와 같이 백엔드 수신 데이터 구조와 동일한 json데이터를 정의하고
        // 프론트엔드에서의 값으로 데이터를 맞춰준 다음 백엔드로 전달된다.
        const entryData = {
            email: user.email,
            password: user.password,
            name: user.name
        }

        axios.post('http://localhost:3005/api/member/entry', entryData)
        .then((res)=>{
            console.log("회원가입 결과값:", res.data)
            navigate('/login')
        })
        .catch((err)=>{
            console.error("백엔드 호출 엘발생...", err)
        })

        e.preventDefault();
    }

    // 회원정보 데이터 바인딩 처리 함수
    const onChangeEntry = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <form onSubmit={onEntry}>
                메일주소: <input name='email' value={user.email} onChange={onChangeEntry}></input> <br/>
                이름: <input name='name' value={user.name} onChange={onChangeEntry}></input> <br/>
                암호: <input type='password' name='password' value={user.password} onChange={onChangeEntry}></input> <br/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default Register;