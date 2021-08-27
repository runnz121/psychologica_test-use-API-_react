import React,{useState,useEffect, useReducer} from 'react'
import axios from 'axios';
import TestPageQuestions from './TestPageQuestions';

function TestPage() {

  
    return (
        <div>
            <TestPageQuestions />
        </div>
    )
}

export default TestPage
