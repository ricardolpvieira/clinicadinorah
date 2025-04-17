import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Clipboard, Activity, Stethoscope } from "lucide-react"

const relatedServices = [
  {
    id: 1,
    title: "ASO",
    description: "Atestado de Saúde Ocupacional para todas as etapas do contrato de trabalho.",
    icon: <FileText className="h-6 w-6 text-sky-600" />,
    href: "/servicos/medicina-do-trabalho/aso",
  },
  {
    id: 2,
    title: "PCMSO",
    description: "Programa de Controle Médico de Saúde Ocupacional.",
    icon: <Clipboard className="h-6 w-6 text-sky-600" />,
    href: "/servicos/medicina-do-trabalho/pcmso",
  },
  {
    id: 3,
    title: "Avaliação Ergonômica",
    description: "Análise ergonômica do ambiente de trabalho.",
    icon: <Activity className="h-6 w-6 text-sky-600" />,
    href: "/servicos/medicina-do-trabalho/avaliacao-ergonomica",
  },
  {
    id: 4,
    title: "Exames Complementares",
    description: "Exames laboratoriais e específicos para complementar o ASO.",
    icon: <Stethoscope className="h-6 w-6 text-sky-600" />,
    href: "/servicos/medicina-do-trabalho/exames-complementares",
  },
]

export default function RelatedServicesAtividadeFisica() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Serviços Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServices.map((service) => (
            <Link key={service.id} href={service.href} className="block group">
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-sky-50 rounded-full">{service.icon}</div>
                    <h3 className="font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
