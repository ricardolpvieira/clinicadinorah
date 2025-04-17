import { Users, Calendar, Target } from "lucide-react"

export default function Stats() {
  return (
    <section className="bg-sky-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <Users className="h-10 w-10 mr-4" />
            <div>
              <div className="text-3xl font-bold">+1000</div>
              <div className="text-sm">Clientes</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Calendar className="h-10 w-10 mr-4" />
            <div>
              <div className="text-3xl font-bold">28</div>
              <div className="text-sm">Anos de experiência</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Target className="h-10 w-10 mr-4" />
            <div>
              <div className="text-3xl font-bold">+20000</div>
              <div className="text-sm">Vidas acompanhadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
