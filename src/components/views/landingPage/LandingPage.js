import React,{useState} from 'react'
import { withRouter } from 'react-router-dom';
import {useDispatch} from 'react-redux';


function LandingPage(props) {
    
    //const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");


    const onClickHandler = (e) => {
        setGender(e.target.value);
        console.log(e.target.value);
    }

    const onNameHandler = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }


    const onClickButtonHandler = (e) => {
        e.preventDefault();
        // let body = {
        //     name : name,
        //     gender : gender
        // }
        
  
        if(!name){
            alert('이름을 입력하세요')
        }else if(!gender){
            alert('성별을 선택하세요')
        } else{
        props.history.push("/testsample")
        }
    }

    return (
        <div>
            <form onSubmit = {onClickButtonHandler}>
                <label>이름</label>
                <input value ={name} onChange={onNameHandler}></input>

                <label>남자</label>
                <input type ='radio' name = 'gender' value = 'male' onClick = {onClickHandler}/>

                <label>여자</label>
                <input type ='radio' name = 'gender' value = 'female' onClick = {onClickHandler}/>

                <button type="submit" disabled = {!name || !gender}> 검사시작 </button>
            </form>
        </div>
    )
}

export default LandingPage
