import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom';


function TestPageQuestions(props) {
     // www.career.go.kr/inspct/openapi/test/questions?apikey=7b0ee7a19cc6ebcfee1cf232ec3a26d2&q=6
    // http://inspct.career.go.kr/openapi/test/questions?apikey=[인증키]&q=[심리검사번호]	

const dispatch = useDispatch();
const [lists, setLists] = useState([]);
const [showq, setShowq] = useState([]);

useEffect(() => {
    const fetchTest = async () => {
        const response = await axios.get('openapi/test/questions?apikey=7b0ee7a19cc6ebcfee1cf232ec3a26d2&q=6');
        console.log(response.data.RESULT);
        setLists(response.data.RESULT);
    }
    fetchTest();
}, []);

dispatch()



    return (
        <div>
           
        </div>
    )
}

export default withRouter(TestPageQuestions)
