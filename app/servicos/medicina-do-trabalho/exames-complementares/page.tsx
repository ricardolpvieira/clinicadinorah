import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import ExamesSlider from "@/components/exames-slider"
import RelatedServices from "@/components/related-services-exames"

export default function ExamesComplementaresPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <ExamesSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">Exames Complementares</h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que são Exames Complementares?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Os <strong>Exames Complementares</strong> são procedimentos médicos realizados para complementar a
                  avaliação clínica do trabalhador, auxiliando no diagnóstico de possíveis alterações de saúde
                  relacionadas ao trabalho ou que possam ser agravadas pela atividade laboral.
                </p>
                <p className="mb-4">
                  Estes exames são parte fundamental do Programa de Controle Médico de Saúde Ocupacional (PCMSO) e são
                  solicitados pelo médico do trabalho de acordo com os riscos ocupacionais aos quais o trabalhador está
                  exposto, conforme estabelecido nas Normas Regulamentadoras do Ministério do Trabalho.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Principais Exames Complementares</h3>
                <p className="mb-2">Oferecemos uma ampla gama de exames complementares, incluindo:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Audiometria:</strong> Avalia a capacidade auditiva do trabalhador, especialmente para
                    aqueles expostos a ruídos ocupacionais.
                  </li>
                  <li className="mb-2">
                    <strong>Espirometria:</strong> Avalia a função pulmonar, indicado para trabalhadores expostos a
                    poeiras, gases e vapores.
                  </li>
                  <li className="mb-2">
                    <strong>Acuidade Visual:</strong> Avalia a capacidade visual do trabalhador, importante para funções
                    que exigem precisão visual.
                  </li>
                  <li className="mb-2">
                    <strong>Eletrocardiograma (ECG):</strong> Avalia a atividade elétrica do coração, indicado para
                    trabalhadores em atividades de alto esforço físico.
                  </li>
                  <li className="mb-2">
                    <strong>Exames Laboratoriais:</strong> Hemograma, glicemia, colesterol, triglicerídeos, entre
                    outros.
                  </li>
                  <li className="mb-2">
                    <strong>Raio-X de Tórax:</strong> Avalia a saúde pulmonar, especialmente para trabalhadores expostos
                    a agentes químicos e poeiras.
                  </li>
                  <li className="mb-2">
                    <strong>Eletroencefalograma (EEG):</strong> Avalia a atividade elétrica cerebral, indicado para
                    funções de alto risco.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Quando são Necessários?</h3>
                <p className="mb-4">Os exames complementares são realizados nos seguintes momentos:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Na admissão do trabalhador</li>
                  <li>Periodicamente, conforme estabelecido no PCMSO</li>
                  <li>No retorno ao trabalho após afastamento</li>
                  <li>Na mudança de função</li>
                  <li>Na demissão</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Benefícios dos Exames Complementares</h3>
                <p className="mb-4">A realização regular de exames complementares traz diversos benefícios:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Detecção precoce de doenças ocupacionais</li>
                  <li>Prevenção de agravos à saúde relacionados ao trabalho</li>
                  <li>Monitoramento da saúde do trabalhador ao longo do tempo</li>
                  <li>Adequação do trabalhador à função mais compatível com seu estado de saúde</li>
                  <li>Redução do absenteísmo e aumento da produtividade</li>
                  <li>Cumprimento das exigências legais</li>
                </ul>
              </div>

              <div className="mt-8">
                <Button className="bg-sky-600 hover:bg-sky-700">Agendar Exames</Button>
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
                    <span>Equipamentos de última geração</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Profissionais especializados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Resultados rápidos e precisos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Todos os exames em um só local</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Acesso digital aos resultados</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Pacotes Empresariais</h4>
                  <p className="text-sm mb-4">
                    Oferecemos pacotes especiais para empresas com condições diferenciadas.
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Solicitar Orçamento</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
