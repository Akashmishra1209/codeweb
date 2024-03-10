import React, { useState } from 'react'
import img from "./favicon.png"
export default function Policy() {
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const emailfunction = (e) => {
    setemail(e.target.value)
  }
  const passfunction = (e) => {
    setpass(e.target.value)
  }
  return (
    <>
      <form className='mt-5'>
        <div class="form-group container ">
          <label for="exampleInputEmail1" >Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={emailfunction} />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group container ">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="container mt-4 ">
          <button type="submit" class="btn btn-primary text-center ">Submit</button>
        </div>
      </form>
    </>
  )
}
