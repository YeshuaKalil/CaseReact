import {Button} from '@/components/ui/button'
import {Field, FieldGroup, FieldLabel, FieldSet} from '@/components/ui/field'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

function Register() {

  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <form className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <FieldGroup className="w-full max-w-sm">
        <FieldSet className="flex flex-col items-center">
          <FieldLabel className=" text-4xl m-5 font-bold text-login-meta dark:text-white">Register</FieldLabel>
          <FieldGroup>
            <Field>
              <input className=" border-login-meta-outline dark:border-login-meta-outline-dark p-1 rounded-xl border-2 text-xs" placeholder="Full Name" type="text" required />
            </Field>
            <Field>
              <input className="border-login-meta-outline dark:border-login-meta-outline-dark p-1 rounded-xl border-2 text-xs" placeholder="E-mail" type="email" required />
            </Field>
            <Field>
              <input className="border-login-meta-outline dark:border-login-meta-outline-dark p-1 rounded-xl border-2 text-xs" placeholder="Phone" type="tel" />
            </Field>
            <Field>
              <input className="border-login-meta-outline dark:border-login-meta-outline-dark p-1 rounded-xl border-2 text-xs" placeholder="Password" type="password" required />
            </Field>
            <Field>
              <input className="border-login-meta-outline dark:border-login-meta-outline-dark p-1 rounded-xl border-2 text-xs" placeholder="Confirm Password" type="password" required />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet className="flex flex-col items-center gap-4 mt-4">
          <FieldGroup>
            <Button onClick={toggleTheme} className="bg-login-meta-variant dark:bg-login-meta-variant-dark text-white rounded-2xl hover:bg-login-meta/90" type="button">Register</Button>
            <Button onClick={() => navigate("./login")} className="bg-login-meta-outline dark:bg-login-meta-variant2-dark text-white rounded-2xl hover:bg-login-meta/90" type="button">
                Have account? Sign In
            </Button>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  )
}

export default Register
