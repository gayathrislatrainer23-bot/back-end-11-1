import { useState } from "react"
import api from '../api/axiosInstance'
import { useNavigate } from "react-router-dom"

function Register() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
const handleSubmit = async (e)=>{
  e.preventDefault()

  const formData={
  name : name,
  email: email,
  password: password
  }
  try{
   const res=  await api.post('/auth/userRegister',formData)
      if(res.status === 200){
        alert('registration sucess')
        
navigate('/login')
      } 
          
  }catch(err){
    alert('404 error')
console.log(err)
  }
}

  return (
    <>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
      <input type="email" placeholder="Enter your email" value={email}  onChange={(e)=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Enter your password" value={password}  onChange={(e)=>setPassword(e.target.value)} /><br/>
      {/* <input type="file" /><br/> */}
      <button>Register</button>
    </form>
  
    </>
  )
}

export default Register
