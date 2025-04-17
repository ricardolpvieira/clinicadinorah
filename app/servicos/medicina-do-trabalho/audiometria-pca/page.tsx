import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import AudiometriaSlider from "@/components/audiometria-slider"
import RelatedServicesAudiometria from "@/components/related-services-audiometria"

export default function AudiometriaPcaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <AudiometriaSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">Audiometria e PCA</h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">Audiometria Ocupacional</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  A <strong>Audiometria Ocupacional</strong> é um exame que avalia a capacidade auditiva do trabalhador,
                  sendo fundamental para identificar precocemente perdas auditivas relacionadas ao trabalho,
                  especialmente em ambientes com exposição a ruídos ocupacionais.
                </p>
                <p className="mb-4">
                  Este exame é obrigatório para trabalhadores expostos a níveis de pressão sonora elevados, conforme
                  estabelecido na Norma Regulamentadora nº 7 (NR-7) do Ministério do Trabalho, e deve ser realizado no
                  exame admissional, periódico e demissional.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Como é realizado o exame?</h3>
                <p className="mb-4">
                  O exame de audiometria é realizado em cabine acústica, onde o trabalhador utiliza fones de ouvido e é
                  submetido a diferentes estímulos sonoros em várias frequências e intensidades. O trabalhador deve
                  indicar quando consegue ouvir cada som, permitindo ao profissional traçar um audiograma que representa
                  graficamente a capacidade auditiva.
                </p>
                <p className="mb-4">
                  Para garantir resultados precisos, o trabalhador deve estar em repouso auditivo de pelo menos 14 horas
                  antes do exame, evitando exposição a ruídos intensos neste período.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6 text-sky-700">Programa de Conservação Auditiva (PCA)</h2>
                <p className="mb-4">
                  O <strong>Programa de Conservação Auditiva (PCA)</strong> é um conjunto de medidas coordenadas que
                  visam prevenir ou estabilizar perdas auditivas ocupacionais, promovendo a saúde auditiva dos
                  trabalhadores expostos a níveis de pressão sonora elevados.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Componentes do PCA</h3>
                <p className="mb-2">Um PCA eficaz deve incluir os seguintes elementos:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Monitoramento dos níveis de ruído:</strong> Avaliação periódica dos níveis de ruído no
                    ambiente de trabalho.
                  </li>
                  <li className="mb-2">
                    <strong>Medidas de controle de engenharia e administrativas:</strong> Implementação de soluções para
                    reduzir a exposição ao ruído na fonte ou no ambiente.
                  </li>
                  <li className="mb-2">
                    <strong>Equipamentos de Proteção Individual (EPIs):</strong> Fornecimento e orientação sobre o uso
                    correto de protetores auditivos.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação audiológica:</strong> Realização de exames audiométricos periódicos para
                    monitoramento da saúde auditiva.
                  </li>
                  <li className="mb-2">
                    <strong>Treinamento e educação:</strong> Conscientização dos trabalhadores sobre os riscos da
                    exposição ao ruído e medidas de proteção.
                  </li>
                  <li className="mb-2">
                    <strong>Registro e análise de dados:</strong> Documentação e acompanhamento dos resultados para
                    avaliação da eficácia do programa.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Benefícios do PCA</h3>
                <p className="mb-4">A implementação de um Programa de Conservação Auditiva traz diversos benefícios:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Prevenção de perdas auditivas ocupacionais</li>
                  <li>Redução de acidentes de trabalho relacionados à dificuldade de comunicação</li>
                  <li>Melhoria da qualidade de vida dos trabalhadores</li>
                  <li>Cumprimento das exigências legais</li>
                  <li>Redução de custos com indenizações e tratamentos médicos</li>
                  <li>Aumento da produtividade e redução do absenteísmo</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Nossa Abordagem</h3>
                <p className="mb-4">
                  Na Clínica Dra. Dinorah, oferecemos um serviço completo de Audiometria e PCA, que inclui:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Exames audiométricos com equipamentos de última geração</li>
                  <li>Elaboração e implementação de Programas de Conservação Auditiva personalizados</li>
                  <li>Avaliação dos ambientes de trabalho e medição dos níveis de ruído</li>
                  <li>Orientação sobre medidas de controle e proteção auditiva</li>
                  <li>Treinamentos para gestores e trabalhadores</li>
                  <li>Acompanhamento e gestão dos resultados</li>
                </ul>
              </div>

              <div className="mt-8">
                <Button className="bg-sky-600 hover:bg-sky-700">Agendar Avaliação</Button>
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
                    <span>Cabine audiométrica certificada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Fonoaudiólogos especializados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Audiômetros calibrados e certificados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Laudos detalhados e explicativos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Consultoria para implementação do PCA</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Legislação</h4>
                  <p className="text-sm mb-4">
                    A NR-7 e NR-9 estabelecem a obrigatoriedade da audiometria e do PCA para empresas com níveis de
                    ruído acima de 85 dB(A).
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Saiba Mais</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesAudiometria />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
