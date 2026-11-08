import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Field, FieldGroup, FieldLegend, FieldSet} from '@/components/ui/field'
import './index.css'

function App() {

  return (
    <form className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <FieldGroup className="w-full max-w-sm">
        <FieldSet>
            <h1 className=" text-center text-5xl m-5 text- font-bold text-login-meta">Login</h1>
          <FieldGroup>
            <Field>
              <Input className="border-login-meta-outline rounded-2xl border-2 text-xs" placeholder="Username" />
            </Field>
            <Field>
              <Input className="border-login-meta-outline rounded-2xl border-2 text-xs" placeholder="Password" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet className="flex flex-col items-center gap-4 mt-4">
          <Button className="bg-login-meta text-white rounded-2xl hover:bg-login-meta/90 w-1/2" type="submit">LOGIN</Button>
        </FieldSet>
      </FieldGroup>
    </form>
  )
}

export default App
