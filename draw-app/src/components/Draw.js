import React, {useRef, useState} from 'react';
import {SketchField, Tools} from 'react-sketch2';
import {Alert, Button} from 'react-bootstrap'
import axios from 'axios'

const styles={
    draw: {
        margin : '0 auto'
    }  
}

const Draw = () => {
    const [send, setSend] = useState(false)
    const [result, setResult] = useState()
    const sketch = useRef()
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log('proccess', process.env)

    const handleSubmit = () => {
        const canvas = sketch.current.toDataURL()
        sendData(canvas)
    }

    const handleReset = () => {
        sketch.current.clear()
        sketch.current._backgroundColor('black')
        setSend(false)
        setResult()
    }

    const sendData = (c) => {
        console.log(c)

    const headers = {
        'accept': 'application/json'
    }

    const fd = new FormData()
    fd.append('image', c)

    axios.post(`${apiUrl}/api/digits/`, fd, {headers:headers})
    .then(res=>{
        console.log(res.data)
        setSend(true)
        getImageResult(res.data.id)
    })
    .catch(err=>console.log(err))
}

const getImageResult = (id) => {
    axios.get(`${apiUrl}/api/digits/${id}/`)
    .then(res=>{
        setResult(res.data.result)
    })
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-between align-items-center">
                <Button href="/">Информация</Button>
                <h1>Handwtitten digit classification</h1>
                <div />
            </div>
            {send && <Alert variant="info">Succesfully saved for classifier</Alert>}
            {result && <h3>Result is {result}</h3>}
           <SketchField
               ref={sketch}
               width='500px'
               height='500px'
               tool={Tools.Pencil}
               style={styles.draw}
               backgroundColor='black'
               lineColor='white'
               imageFormat='jpg'
               lineWidth={55}
           />
           <div className="mt-3">
               <Button onClick={handleSubmit} variant='primary'>Send</Button>
               <Button onClick={handleReset} variant='secondary'>Reset</Button>
           </div> 
        </React.Fragment>
    );
}

export default Draw;