import axios from "axios";

export default function Login(email, password) {
  const body = {
    email: email,
    password: password
  }
  const res = axios.post('/users/login', body)
  if (res.status === 200) {
    auth = true
  }
  else {
    auth = false
  }
}