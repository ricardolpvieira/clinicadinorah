import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import PcmsoSlider from "@/components/pcmso-slider"
import RelatedServicesPcmso from "@/components/related-services-pcmso"

export default function PcmsoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <PcmsoSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">
            Programa de Controle Médico de Saúde Ocupacional (PCMSO)
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que é o PCMSO?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  O <strong>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</strong> é um programa obrigatório
                  estabelecido pela Norma Regulamentadora nº 7 (NR-7) do Ministério do Trabalho, que tem como objetivo a
                  promoção e preservação da saúde dos trabalhadores.
                </p>
                <p className="mb-4">
                  O PCMSO é parte integrante do conjunto mais amplo de iniciativas da empresa no campo da saúde dos
                  trabalhadores, devendo estar articulado com o disposto nas demais NRs, especialmente com o Programa de
                  Gerenciamento de Riscos (PGR).
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Objetivos do PCMSO</h3>
                <p className="mb-4">O PCMSO tem como principais objetivos:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Promover e preservar a saúde do conjunto dos trabalhadores da empresa</li>
                  <li className="mb-2">
                    Prevenir, rastrear e diagnosticar precocemente os agravos à saúde relacionados ao trabalho
                  </li>
                  <li className="mb-2">
                    Constatar a existência de casos de doenças profissionais ou danos irreversíveis à saúde dos
                    trabalhadores
                  </li>
                  <li className="mb-2">Estabelecer medidas para o controle da exposição aos riscos ocupacionais</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Elaboração e Implementação</h3>
                <p className="mb-4">
                  O PCMSO deve ser elaborado e implementado por um médico do trabalho, que será o coordenador do
                  programa. O médico coordenador é responsável por:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Realizar os exames médicos previstos na NR-7</li>
                  <li>Encarregar outros médicos da execução dos exames, quando necessário</li>
                  <li>Dar conhecimento aos trabalhadores dos resultados dos exames</li>
                  <li>Solicitar exames complementares quando necessário</li>
                  <li>Elaborar o relatório anual do PCMSO</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Exames Médicos Obrigatórios</h3>
                <p className="mb-4">O PCMSO deve incluir a realização obrigatória dos seguintes exames médicos:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Admissional:</strong> Realizado antes que o trabalhador assuma suas atividades
                  </li>
                  <li className="mb-2">
                    <strong>Periódico:</strong> Realizado anualmente para trabalhadores menores de 18 e maiores de 45
                    anos, e a cada dois anos para trabalhadores entre 18 e 45 anos
                  </li>
                  <li className="mb-2">
                    <strong>Retorno ao Trabalho:</strong> Realizado no primeiro dia de volta ao trabalho após
                    afastamento por doença ou acidente por período igual ou superior a 30 dias
                  </li>
                  <li className="mb-2">
                    <strong>Mudança de Função:</strong> Realizado antes da data da mudança de função
                  </li>
                  <li className="mb-2">
                    <strong>Demissional:</strong> Realizado até a data da homologação da rescisão do contrato de
                    trabalho
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Relatório Anual</h3>
                <p className="mb-4">
                  O médico coordenador do PCMSO deve elaborar um relatório anual com os dados obtidos nos exames médicos
                  realizados durante o ano. Este relatório deve incluir:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Número e natureza dos exames médicos realizados</li>
                  <li>Estatísticas de resultados anormais</li>
                  <li>Planejamento para o próximo ano</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Benefícios do PCMSO</h3>
                <p className="mb-4">A implementação adequada do PCMSO traz diversos benefícios:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Prevenção de doenças ocupacionais</li>
                  <li>Diagnóstico precoce de problemas de saúde</li>
                  <li>Redução do absenteísmo e aumento da produtividade</li>
                  <li>Cumprimento das exigências legais</li>
                  <li>Redução de custos com indenizações e tratamentos médicos</li>
                  <li>Melhoria da qualidade de vida dos trabalhadores</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Nossa Abordagem</h3>
                <p className="mb-4">
                  Na Clínica Dra. Dinorah, oferecemos um serviço completo de elaboração e implementação do PCMSO, que
                  inclui:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Análise dos riscos ocupacionais presentes na empresa</li>
                  <li>Elaboração do documento-base do PCMSO</li>
                  <li>Realização dos exames médicos ocupacionais</li>
                  <li>Emissão dos Atestados de Saúde Ocupacional (ASOs)</li>
                  <li>Elaboração do relatório anual</li>
                  <li>Assessoria contínua para adequação às normas regulamentadoras</li>
                </ul>
              </div>

              <div className="mt-8">
                <Button className="bg-sky-600 hover:bg-sky-700">Solicitar Orçamento</Button>
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
                    <span>Médicos do trabalho especializados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>PCMSO personalizado para cada empresa</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Integração com o PGR</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Sistema de gestão online do PCMSO</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Assessoria contínua e atualização anual</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Legislação</h4>
                  <p className="text-sm mb-4">
                    O PCMSO é obrigatório para todas as empresas que admitam trabalhadores como empregados, conforme
                    estabelecido na NR-7.
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Consultar NR-7</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesPcmso />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
