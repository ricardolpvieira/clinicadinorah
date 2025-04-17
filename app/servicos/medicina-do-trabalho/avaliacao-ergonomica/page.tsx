import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import ErgonomiaSlider from "@/components/ergonomia-slider"
import RelatedServicesErgonomia from "@/components/related-services-ergonomia"

export default function AvaliacaoErgonomicaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <ErgonomiaSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">Avaliação Ergonômica</h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que é Avaliação Ergonômica?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  A <strong>Avaliação Ergonômica</strong> é um processo sistemático de análise do trabalho que visa
                  identificar os riscos ergonômicos presentes nas atividades laborais e propor medidas para adequar o
                  ambiente de trabalho às características psicofisiológicas dos trabalhadores.
                </p>
                <p className="mb-4">
                  Este processo é regulamentado pela Norma Regulamentadora nº 17 (NR-17) do Ministério do Trabalho, que
                  estabelece parâmetros que permitam a adaptação das condições de trabalho às características
                  psicofisiológicas dos trabalhadores, de modo a proporcionar um máximo de conforto, segurança e
                  desempenho eficiente.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Aspectos Avaliados</h3>
                <p className="mb-4">Uma Avaliação Ergonômica completa deve analisar diversos aspectos, incluindo:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Mobiliário:</strong> Adequação de mesas, cadeiras, suportes para os pés, entre outros.
                  </li>
                  <li className="mb-2">
                    <strong>Equipamentos:</strong> Disposição e características dos equipamentos utilizados.
                  </li>
                  <li className="mb-2">
                    <strong>Condições ambientais:</strong> Ruído, temperatura, iluminação, umidade e velocidade do ar.
                  </li>
                  <li className="mb-2">
                    <strong>Organização do trabalho:</strong> Normas de produção, modo operatório, exigência de tempo,
                    determinação do conteúdo de tempo, ritmo de trabalho e conteúdo das tarefas.
                  </li>
                  <li className="mb-2">
                    <strong>Postura e movimentos:</strong> Análise biomecânica das posturas e movimentos realizados
                    durante as atividades.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Metodologia</h3>
                <p className="mb-4">Nossa metodologia para Avaliação Ergonômica inclui as seguintes etapas:</p>
                <ol className="list-decimal pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Análise da Demanda:</strong> Identificação das situações-problema que motivaram a avaliação.
                  </li>
                  <li className="mb-2">
                    <strong>Análise da Tarefa:</strong> Estudo do que o trabalhador deve realizar e as condições para
                    esta realização.
                  </li>
                  <li className="mb-2">
                    <strong>Análise da Atividade:</strong> Observação do comportamento do trabalhador na realização da
                    tarefa.
                  </li>
                  <li className="mb-2">
                    <strong>Diagnóstico:</strong> Identificação dos fatores de risco ergonômicos.
                  </li>
                  <li className="mb-2">
                    <strong>Recomendações:</strong> Propostas de melhorias para adequação ergonômica.
                  </li>
                  <li className="mb-2">
                    <strong>Implementação:</strong> Acompanhamento da implementação das recomendações.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação:</strong> Verificação da eficácia das medidas implementadas.
                  </li>
                </ol>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Ferramentas e Métodos</h3>
                <p className="mb-4">
                  Utilizamos diversas ferramentas e métodos científicos para realizar a Avaliação Ergonômica, incluindo:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>
                    <strong>RULA (Rapid Upper Limb Assessment):</strong> Avaliação rápida dos membros superiores.
                  </li>
                  <li>
                    <strong>REBA (Rapid Entire Body Assessment):</strong> Avaliação rápida do corpo inteiro.
                  </li>
                  <li>
                    <strong>OWAS (Ovako Working Posture Analysing System):</strong> Sistema de análise de postura de
                    trabalho.
                  </li>
                  <li>
                    <strong>NIOSH (National Institute for Occupational Safety and Health):</strong> Equação para
                    levantamento de cargas.
                  </li>
                  <li>
                    <strong>Moore & Garg:</strong> Índice de esforço para atividades manuais.
                  </li>
                  <li>
                    <strong>Questionários e entrevistas:</strong> Para coleta de dados subjetivos.
                  </li>
                  <li>
                    <strong>Registros fotográficos e vídeos:</strong> Para análise detalhada das posturas e movimentos.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Benefícios da Avaliação Ergonômica</h3>
                <p className="mb-4">A realização de uma Avaliação Ergonômica traz diversos benefícios:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Prevenção de doenças ocupacionais, como LER/DORT</li>
                  <li>Redução do absenteísmo e presenteísmo</li>
                  <li>Aumento da produtividade e qualidade do trabalho</li>
                  <li>Melhoria do conforto e satisfação dos trabalhadores</li>
                  <li>Redução de custos com afastamentos e tratamentos médicos</li>
                  <li>Cumprimento das exigências legais (NR-17)</li>
                  <li>Melhoria do clima organizacional</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Análise Ergonômica do Trabalho (AET)</h3>
                <p className="mb-4">
                  A <strong>Análise Ergonômica do Trabalho (AET)</strong> é um documento que registra os resultados da
                  Avaliação Ergonômica e deve conter, no mínimo:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Descrição das características da empresa</li>
                  <li>Descrição das atividades realizadas</li>
                  <li>Identificação dos fatores de risco ergonômicos</li>
                  <li>Diagnóstico das condições de trabalho</li>
                  <li>Recomendações ergonômicas</li>
                  <li>Plano de ação para implementação das recomendações</li>
                </ul>
              </div>

              <div className="mt-8">
                <Button className="bg-sky-600 hover:bg-sky-700">Solicitar Avaliação</Button>
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
                    <span>Equipe multidisciplinar especializada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Utilização de métodos científicos validados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Relatórios detalhados e personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Acompanhamento da implementação das melhorias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Treinamentos ergonômicos para colaboradores</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Ginástica Laboral</h4>
                  <p className="text-sm mb-4">
                    Complementamos nossa avaliação ergonômica com programas de ginástica laboral personalizados para sua
                    empresa.
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Saiba Mais</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesErgonomia />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
