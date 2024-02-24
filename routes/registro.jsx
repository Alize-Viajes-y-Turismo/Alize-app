import axios from 'axios'

export default function EnviarFormulario(email, password) {

  const body = {
    email: email,
    password: password,
  }
  const res = axios.post('/users/register', body)
  if (res.status === 200) {
    alert('Se registro')
  }
  else if (res.status === 409) {
    alert('Error')
  }
}



