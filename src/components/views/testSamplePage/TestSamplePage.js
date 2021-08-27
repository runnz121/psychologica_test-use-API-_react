import React,{useState} from 'react'
import { withRouter } from 'react-router';

function TestSamplePage(props) {

    const [select, setSelect] = useState("");

    const onClickHandler = (e) => {
        setSelect(e.target.value);
        console.log(e.target.value);
    }

    const onClickButtonHandler = (e) => {
        e.preventDefault();
  
        if(!select){
            alert('두 문항 중 한 문항을 선택하세요')
        }else{
            props.history.push("/testpage")
        }
    }
    

    return (
        <div>
             <form onSubmit = {onClickButtonHandler}>
             
                <label>능력발휘</label>
                <input type ='radio' name = 'gender' value = 'male' onClick = {onClickHandler}/>

                <label>자율성</label>
                <input type ='radio' name = 'gender' value = 'female' onClick = {onClickHandler}/>

                <button type="submit" disabled = {!select}> 검사시작 </button>
            </form>
        </div>
    )
 }

export default withRouter(TestSamplePage)
