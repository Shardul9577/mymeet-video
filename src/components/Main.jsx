import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'

function Main() {

    const pass = Math.floor(Math.random()*100)
    let navigate = useNavigate()

    const joinHandler = ()=>{
      navigate(`/room/${pass}`)
    }

  return (
    <div>
      <Paper className='container' style={{padding:"25px" , width:"40vw" , marginTop:"5%"}}>
        <div style={{textAlign:"center"}}>
          <h1>mymeet</h1>
          <img style={{width:"25vw"}} src='/Images/Image.png'/>
        </div>
        <hr className='container'></hr>
        <div>
            <div class="form-floating mb-3">
                <input value={pass} type="code" class="form-control" id="floatingInput" placeholder="xxxx..."/>
                <label for="floatingInput">Meeting Code</label>
            </div>
            <div class="d-grid gap-2">
                <button onClick={joinHandler} class="btn btn-primary" type="button">Create Meeting +</button>
            </div>
        </div>
      </Paper>
    </div>
  )
}

export default Main
