import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p className="mb-4">
              A Clínica Dra. Dinorah foi fundada em 1995 com o objetivo de oferecer serviços de medicina e segurança do
              trabalho com excelência. Contamos com profissionais qualificados e comprometidos com a saúde e bem-estar
              dos trabalhadores. Nosso objetivo é ajudar as empresas a promoverem um ambiente de trabalho seguro e
              saudável.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="hover:text-sky-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-sky-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-sky-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-sky-300">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-sky-300">
                  A Clínica
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-300">
                  Exames
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-300">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-300">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>Seg a Sex</div>
              <div>08h:00 às 18h:00</div>
              <div>Sábado</div>
              <div>08h:00 às 12h:00</div>
            </div>

            <div className="mt-6">
              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  Rua Exemplo, 123 - Centro
                  <br />
                  Rio de Janeiro - RJ
                  <br />
                  CEP: 20000-000
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-500 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          © Copyright 2024 | Clínica Dra. Dinorah | Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  )
}
