import {Button} from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import {Label} from '@/components/ui/label'

function Adm() {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  const fazerLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className=" border-gray-400 border-b flex flex-wrap flex-row items-center justify-between pl-8 pr-16 sm:pr-8">
        <Label className="w-1/2 text-3xl m-5 font-bold text-login-meta dark:text-white">Painel do Administrador</Label>
        <Button onClick={fazerLogout} className="bg-login-meta dark:bg-login-meta-variant-dark text-white rounded-2xl hover:bg-login-meta/90 ml-5 mr-5 mt-5 mb-5 w-full sm:w-1/8" type="button">Logout</Button>
      </header>
      <main className="flex flex-col items-center justify-center gap-4 p-4">
        <Card className="w-full max-w-sm mt-5 mb-10 shadow-xl dark:shadow-gray-800 border border-login-meta-outline dark:border-login-meta-outline-dark">
          <CardHeader>
            <CardTitle className="font-bold">Bem vindo, {username}!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Esse é o painel do administrador. Aqui é onde se administra coisas de administração.</p>
          </CardContent>
        </Card>
      </main>
      <footer className="border-gray-400 text-center  pt-5">
        <p>Sem criatividade para o rodapé :(</p>
      </footer>
    </div>
  )
}

export default Adm
