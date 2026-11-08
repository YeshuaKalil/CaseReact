import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Field, FieldGroup, FieldLegend, FieldSet} from '@/components/ui/field'
import './index.css'

function App() {

  return (
    <form className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <FieldGroup className="w-full max-w-sm">oklch(0.4867 0.2896 267.54)
        <FieldSet>
          <FieldLegend className="text-center text- font-bold">Login</FieldLegend>
          <FieldGroup>
            <Field>
              <Input placeholder="Username" />
            </Field>
            <Field>
              <Input placeholder="Password" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <Button type="submit">LOGIN</Button>
        </FieldSet>
      </FieldGroup>
    </form>
  )
}

export default App
