import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import GestaoMedicinaSlider from "@/components/gestao-medicina-slider"
import RelatedServicesGestaoMedicina from "@/components/related-services-gestao-medicina"

export default function GestaoMedicinaTrabalhoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <GestaoMedicinaSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">
            Gestão em Medicina do Trabalho
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que é Gestão em Medicina do Trabalho?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  A <strong>Gestão em Medicina do Trabalho</strong> é um conjunto de práticas e processos que visam
                  promover e preservar a saúde dos trabalhadores, prevenindo doenças ocupacionais e acidentes de
                  trabalho, além de garantir o cumprimento das normas regulamentadoras relacionadas à saúde ocupacional.
                </p>
                <p className="mb-4">
                  Trata-se de uma abordagem estratégica e integrada que vai além do simples cumprimento legal, buscando
                  a melhoria contínua das condições de saúde e bem-estar dos trabalhadores, o que resulta em maior
                  produtividade, redução de custos e melhoria do clima organizacional.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Pilares da Gestão em Medicina do Trabalho</h3>
                <p className="mb-4">
                  Uma gestão eficiente em Medicina do Trabalho se baseia em quatro pilares fundamentais:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Prevenção:</strong> Identificação e controle dos riscos à saúde antes que causem danos aos
                    trabalhadores.
                  </li>
                  <li className="mb-2">
                    <strong>Promoção da Saúde:</strong> Desenvolvimento de ações que estimulem hábitos saudáveis e
                    melhorem a qualidade de vida dos trabalhadores.
                  </li>
                  <li className="mb-2">
                    <strong>Monitoramento:</strong> Acompanhamento contínuo das condições de saúde dos trabalhadores e
                    dos ambientes de trabalho.
                  </li>
                  <li className="mb-2">
                    <strong>Conformidade Legal:</strong> Cumprimento das normas regulamentadoras e demais legislações
                    relacionadas à saúde ocupacional.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Programas e Serviços</h3>
                <p className="mb-4">
                  Nossa gestão em Medicina do Trabalho inclui a elaboração, implementação e acompanhamento dos seguintes
                  programas e serviços:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>PCMSO (Programa de Controle Médico de Saúde Ocupacional):</strong> Planejamento e execução
                    de ações de saúde para prevenir, rastrear e diagnosticar precocemente agravos à saúde relacionados
                    ao trabalho.
                  </li>
                  <li className="mb-2">
                    <strong>Exames Ocupacionais:</strong> Realização de exames admissionais, periódicos, de retorno ao
                    trabalho, de mudança de função e demissionais.
                  </li>
                  <li className="mb-2">
                    <strong>Exames Complementares:</strong> Execução de exames laboratoriais, audiometrias,
                    espirometrias, entre outros, conforme os riscos ocupacionais.
                  </li>
                  <li className="mb-2">
                    <strong>Atestados de Saúde Ocupacional (ASO):</strong> Emissão de ASOs conforme as exigências
                    legais.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação de Atestados Médicos:</strong> Análise e gestão de atestados médicos apresentados
                    pelos trabalhadores.
                  </li>
                  <li className="mb-2">
                    <strong>Gestão de Afastamentos:</strong> Acompanhamento de trabalhadores afastados por doença ou
                    acidente.
                  </li>
                  <li className="mb-2">
                    <strong>Programas de Promoção da Saúde:</strong> Desenvolvimento de campanhas e ações para promover
                    a saúde e o bem-estar.
                  </li>
                  <li className="mb-2">
                    <strong>Relatórios Gerenciais:</strong> Elaboração de relatórios com indicadores de saúde
                    ocupacional para suporte à tomada de decisões.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">
                  Benefícios da Gestão em Medicina do Trabalho
                </h3>
                <p className="mb-4">
                  Uma gestão eficiente em Medicina do Trabalho proporciona diversos benefícios para a empresa e seus
                  colaboradores:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Redução do absenteísmo e presenteísmo</li>
                  <li>Diminuição dos custos com afastamentos e substituições</li>
                  <li>Prevenção de doenças ocupacionais e acidentes de trabalho</li>
                  <li>Melhoria da produtividade e do clima organizacional</li>
                  <li>Cumprimento das exigências legais e redução de riscos de autuações</li>
                  <li>Valorização da imagem da empresa perante colaboradores e mercado</li>
                  <li>Redução de custos com planos de saúde e assistência médica</li>
                  <li>Dados e indicadores para tomada de decisões estratégicas</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Nossa Abordagem</h3>
                <p className="mb-4">
                  Na Clínica Dra. Dinorah, oferecemos uma abordagem personalizada e integrada para a Gestão em Medicina
                  do Trabalho:
                </p>
                <ol className="list-decimal pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Diagnóstico Inicial:</strong> Avaliação da situação atual da empresa em relação à saúde
                    ocupacional.
                  </li>
                  <li className="mb-2">
                    <strong>Planejamento Estratégico:</strong> Elaboração de um plano de ação personalizado conforme as
                    necessidades e características da empresa.
                  </li>
                  <li className="mb-2">
                    <strong>Implementação:</strong> Execução dos programas e serviços de saúde ocupacional.
                  </li>
                  <li className="mb-2">
                    <strong>Monitoramento:</strong> Acompanhamento contínuo dos indicadores de saúde ocupacional.
                  </li>
                  <li className="mb-2">
                    <strong>Análise de Resultados:</strong> Avaliação periódica dos resultados e ajustes necessários.
                  </li>
                  <li className="mb-2">
                    <strong>Melhoria Contínua:</strong> Implementação de melhorias com base nos resultados obtidos.
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <Button className="bg-sky-600 hover:bg-sky-700">Solicitar Proposta</Button>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-sky-700">Nossos Diferenciais</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Equipe médica especializada em saúde ocupacional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Sistema informatizado de gestão em saúde ocupacional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Abordagem integrada de saúde e segurança</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Relatórios gerenciais personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Atendimento in company</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Indicadores de Saúde</h4>
                  <p className="text-sm mb-4">
                    Conheça nosso sistema de indicadores para monitoramento da saúde ocupacional na sua empresa.
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Saiba Mais</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesGestaoMedicina />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
