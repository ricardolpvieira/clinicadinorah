import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import ServiceCard from "@/components/service-card"
import ServiceItem from "@/components/service-item"
import Footer from "@/components/footer"
import Stats from "@/components/stats"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-sky-600 text-white">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Gestão em Saúde do Trabalhador realizada por profissionais especializados.
            </h1>
            <Button className="mt-4 bg-white text-sky-600 hover:bg-sky-100">Saiba Mais</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profissional de saúde"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="e-Social"
            description="Gestão completa e automatizada. Mais segurança e praticidade."
            icon="file-text"
            color="bg-sky-500"
            href="/servicos/e-social"
          />
          <ServiceCard
            title="Gestão em Medicina do Trabalho"
            description="Solução qualificada de cada etapa do trabalho para manter seus profissionais."
            icon="stethoscope"
            color="bg-sky-600"
            href="/servicos/medicina-do-trabalho"
          />
          <ServiceCard
            title="Segurança do Trabalho"
            description="Programas completos seguros e eficientes."
            icon="shield"
            color="bg-sky-700"
            href="/servicos/seguranca-do-trabalho"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Clínica Dra. Dinorah Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h2 className="text-3xl font-bold">Clínica Dra. Dinorah</h2>
            <p className="text-gray-600 mt-2">
              Cuidamos Melhor da Qualidade para uma Vida Saudável! Comprometidos com a Sua Saúde e Qualidade de Vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sobre Nós</h3>
              <p className="text-gray-600 mb-6">
                Temos um serviço de qualidade que coloca, melhorando suas condições de trabalho com serviços de
                profissionais experientes e qualidade de serviços mais transparentes.
              </p>

              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-sky-500 mr-2">•</span>
                  <span>Ética</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sky-500 mr-2">•</span>
                  <span>Qualidade</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sky-500 mr-2">•</span>
                  <span>Bem-estar</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sky-500 mr-2">•</span>
                  <span>Responsabilidade</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-6 mb-4">Visão</h3>
              <p className="text-gray-600">Ser reconhecido como uma referência na promoção da saúde e segurança.</p>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Clínica Dra. Dinorah Fachada"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Nossas soluções para sua empresa:</h2>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Medicina do Trabalho Icon"
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <h3 className="text-2xl font-bold mb-12">Medicina do Trabalho</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ServiceItem title="ASO" icon="file-text" href="/servicos/medicina-do-trabalho/aso" />
            <ServiceItem
              title="Exames Complementares"
              icon="users"
              href="/servicos/medicina-do-trabalho/exames-complementares"
            />
            <ServiceItem
              title="Audiometria e PCA"
              icon="headphones"
              href="/servicos/medicina-do-trabalho/audiometria-pca"
            />
            <ServiceItem title="PCMSO" icon="clipboard" href="/servicos/medicina-do-trabalho/pcmso" />
            <ServiceItem
              title="Avaliação Ergonômica"
              icon="activity"
              href="/servicos/medicina-do-trabalho/avaliacao-ergonomica"
            />
            <ServiceItem
              title="Avaliação para Atividade Física"
              icon="user"
              href="/servicos/medicina-do-trabalho/avaliacao-atividade-fisica"
            />
          </div>

          <div className="flex justify-center mt-16 mb-8">
            <Image
              src="/images/logo.png"
              alt="Segurança do Trabalho Icon"
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <h3 className="text-2xl font-bold mb-12">Segurança do Trabalho</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ServiceItem title="PGR" icon="file-text" href="/servicos/seguranca-do-trabalho/pgr" />
            <ServiceItem title="LTCAT" icon="clipboard-check" href="/servicos/seguranca-do-trabalho/ltcat" />
            <ServiceItem
              title="Laudo de Insalubridade e Periculosidade"
              icon="user"
              href="/servicos/seguranca-do-trabalho/laudo-insalubridade-periculosidade"
            />
            <ServiceItem
              title="Avaliação de Agentes Químicos"
              icon="flask"
              href="/servicos/seguranca-do-trabalho/avaliacao-agentes-quimicos"
            />
            <ServiceItem
              title="Treinamentos de NR's"
              icon="users"
              href="/servicos/seguranca-do-trabalho/treinamentos-nrs"
            />
            <ServiceItem title="CIPA" icon="shield" href="/servicos/seguranca-do-trabalho/cipa" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219550619!2d-43.2000!3d-22.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA1JzI0LjAiUyA0M8KwMTInMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  )
}
