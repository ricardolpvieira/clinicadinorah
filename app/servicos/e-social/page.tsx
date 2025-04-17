import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import ESocialSlider from "@/components/e-social-slider"
import RelatedServicesESocial from "@/components/related-services-e-social"

export default function ESocialPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <ESocialSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">e-Social</h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que é o e-Social?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  O <strong>e-Social</strong> é um sistema digital do Governo Federal que unifica o envio de informações
                  pelo empregador em relação aos seus trabalhadores. Este sistema integra a coleta de dados de
                  obrigações fiscais, previdenciárias e trabalhistas, armazenando-as em um Ambiente Nacional Virtual.
                </p>
                <p className="mb-4">
                  Criado para simplificar e unificar o cumprimento das obrigações acessórias, o e-Social substitui o
                  preenchimento e a entrega de formulários e declarações separados a cada um dos órgãos fiscalizadores,
                  como Receita Federal, Previdência Social, Caixa Econômica Federal e Ministério do Trabalho.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Objetivos do e-Social</h3>
                <p className="mb-4">O sistema e-Social foi desenvolvido com os seguintes objetivos:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Unificação:</strong> Centralizar o envio de informações trabalhistas, previdenciárias e
                    fiscais em um único sistema.
                  </li>
                  <li className="mb-2">
                    <strong>Simplificação:</strong> Reduzir a burocracia e simplificar o cumprimento das obrigações
                    acessórias pelos empregadores.
                  </li>
                  <li className="mb-2">
                    <strong>Padronização:</strong> Estabelecer um padrão para transmissão das informações.
                  </li>
                  <li className="mb-2">
                    <strong>Qualidade da informação:</strong> Garantir maior qualidade e consistência nas informações
                    prestadas.
                  </li>
                  <li className="mb-2">
                    <strong>Fiscalização:</strong> Facilitar a fiscalização por parte dos órgãos governamentais.
                  </li>
                  <li className="mb-2">
                    <strong>Garantia de direitos:</strong> Assegurar os direitos trabalhistas e previdenciários dos
                    trabalhadores.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Eventos de Saúde e Segurança do Trabalho</h3>
                <p className="mb-4">
                  No contexto da Medicina e Segurança do Trabalho, o e-Social exige o envio de diversos eventos
                  relacionados à saúde e segurança dos trabalhadores, incluindo:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>S-2210:</strong> Comunicação de Acidente de Trabalho (CAT)
                  </li>
                  <li className="mb-2">
                    <strong>S-2220:</strong> Monitoramento da Saúde do Trabalhador (exames ocupacionais)
                  </li>
                  <li className="mb-2">
                    <strong>S-2240:</strong> Condições Ambientais do Trabalho - Agentes Nocivos
                  </li>
                  <li className="mb-2">
                    <strong>S-2245:</strong> Treinamentos, Capacitações, Exercícios Simulados e Outras Anotações
                  </li>
                  <li className="mb-2">
                    <strong>S-3000:</strong> Informações do Empregador/Contribuinte/Órgão Público - Exclusão
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Desafios para as Empresas</h3>
                <p className="mb-4">
                  A implementação do e-Social representa diversos desafios para as empresas, especialmente no que se
                  refere à Medicina e Segurança do Trabalho:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Adequação dos processos internos às exigências do sistema</li>
                  <li>Cumprimento dos prazos para envio das informações</li>
                  <li>Necessidade de sistemas informatizados compatíveis</li>
                  <li>Capacitação dos profissionais responsáveis pelo envio das informações</li>
                  <li>Organização e digitalização de documentos</li>
                  <li>Integração entre os departamentos da empresa</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Nossa Solução</h3>
                <p className="mb-4">
                  A Clínica Dra. Dinorah oferece uma solução completa para auxiliar sua empresa no cumprimento das
                  obrigações do e-Social relacionadas à Medicina e Segurança do Trabalho:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Consultoria especializada:</strong> Orientação sobre as exigências do e-Social relacionadas
                    à saúde e segurança do trabalho.
                  </li>
                  <li className="mb-2">
                    <strong>Sistema informatizado:</strong> Plataforma digital integrada para gestão das informações de
                    saúde ocupacional compatível com o e-Social.
                  </li>
                  <li className="mb-2">
                    <strong>Elaboração e gestão de documentos:</strong> Desenvolvimento e atualização de documentos como
                    PCMSO, PGR, LTCAT e outros exigidos pelo e-Social.
                  </li>
                  <li className="mb-2">
                    <strong>Realização de exames ocupacionais:</strong> Execução de todos os exames médicos ocupacionais
                    com registro digital das informações.
                  </li>
                  <li className="mb-2">
                    <strong>Treinamento:</strong> Capacitação da equipe da empresa para lidar com as informações de
                    saúde e segurança no e-Social.
                  </li>
                  <li className="mb-2">
                    <strong>Suporte técnico:</strong> Assistência contínua para resolução de dúvidas e problemas
                    relacionados ao envio de eventos de SST.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Benefícios do Nosso Serviço</h3>
                <p className="mb-4">Ao contratar nossos serviços de gestão do e-Social, sua empresa obtém:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Conformidade com a legislação e redução de riscos de autuações</li>
                  <li>Otimização de processos e redução de custos operacionais</li>
                  <li>Segurança na transmissão das informações ao governo</li>
                  <li>Acesso a profissionais especializados em Medicina e Segurança do Trabalho</li>
                  <li>Integração entre os programas de saúde ocupacional e o e-Social</li>
                  <li>Tranquilidade para focar no seu negócio principal</li>
                </ul>
              </div>

              <div className="mt-8">
                <Button className="bg-sky-600 hover:bg-sky-700">Solicitar Consultoria</Button>
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
                    <span>Equipe especializada em e-Social</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Sistema próprio compatível com o e-Social</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Atualização constante sobre mudanças na legislação</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Suporte técnico contínuo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Solução integrada de Medicina e Segurança do Trabalho</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Cronograma e-Social</h4>
                  <p className="text-sm mb-4">
                    Fique por dentro dos prazos e fases de implementação do e-Social para sua empresa.
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Ver Cronograma</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesESocial />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
