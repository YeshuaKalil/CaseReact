import {Button} from '@/components/ui/button'
import {Field, FieldGroup, FieldLabel, FieldSet} from '@/components/ui/field'
import '../index.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const fazerLogin = () => {
    if (!username) {
      alert('Por favor, insira um nome de usuário.');
      return;
    }
    localStorage.setItem('username', username);
    navigate('/adm');
  }

  return (
    <form className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <FieldGroup className="w-full max-w-sm">
        <FieldSet className="flex flex-col items-center">
            <FieldLabel className=" text-4xl m-5 font-bold text-login-meta dark:text-white">Login</FieldLabel>
          <FieldGroup>
            <Field>
              <input onChange={(e) => setUsername(e.target.value)} className="border-login-meta-outline dark:border-login-meta-outline-dark p-1 rounded-2xl border-2 text-xs" placeholder="Username" type="text" required />
            </Field>
            <Field>
              <input className="border-login-meta-outline dark:border-login-meta-outline-dark p-1 rounded-2xl border-2 text-xs" placeholder="Password" type="password" required />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet className="flex flex-col items-center gap-4 mt-4">
          <Button onClick={fazerLogin} className="bg-login-meta text-white rounded-2xl hover:bg-login-meta/90 w-1/2" type="button">LOGIN</Button>
        </FieldSet>
      </FieldGroup>
    </form>
  )
}

export default Login
