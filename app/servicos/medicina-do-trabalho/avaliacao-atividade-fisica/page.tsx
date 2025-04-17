import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import AtividadeFisicaSlider from "@/components/atividade-fisica-slider"
import RelatedServicesAtividadeFisica from "@/components/related-services-atividade-fisica"

export default function AvaliacaoAtividadeFisicaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <AtividadeFisicaSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">
            Avaliação para Atividade Física
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que é a Avaliação para Atividade Física?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  A <strong>Avaliação para Atividade Física</strong> é um exame médico específico que visa determinar a
                  aptidão de um indivíduo para a prática de exercícios físicos, identificando possíveis
                  contraindicações, limitações ou cuidados necessários durante a realização das atividades.
                </p>
                <p className="mb-4">
                  No contexto ocupacional, esta avaliação é fundamental para empresas que implementam programas de
                  ginástica laboral, atividades físicas corporativas ou que possuem academias para seus colaboradores,
                  garantindo que a prática de exercícios seja segura e adequada às condições de saúde de cada
                  trabalhador.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Importância da Avaliação</h3>
                <p className="mb-4">A avaliação para atividade física é essencial por diversos motivos:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Segurança:</strong> Identifica condições de saúde que podem representar riscos durante a
                    prática de exercícios.
                  </li>
                  <li className="mb-2">
                    <strong>Personalização:</strong> Permite a elaboração de programas de exercícios adequados às
                    necessidades e limitações individuais.
                  </li>
                  <li className="mb-2">
                    <strong>Prevenção:</strong> Contribui para a prevenção de lesões e complicações de saúde
                    relacionadas à prática inadequada de atividades físicas.
                  </li>
                  <li className="mb-2">
                    <strong>Responsabilidade legal:</strong> Protege a empresa de possíveis responsabilizações por
                    problemas de saúde decorrentes da prática de exercícios sem avaliação prévia.
                  </li>
                  <li className="mb-2">
                    <strong>Eficácia:</strong> Aumenta a eficácia dos programas de atividade física corporativa.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Como é realizada a avaliação?</h3>
                <p className="mb-4">
                  Nossa avaliação para atividade física é realizada por médicos especializados e inclui:
                </p>
                <ol className="list-decimal pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Anamnese detalhada:</strong> Levantamento do histórico médico, incluindo doenças
                    preexistentes, cirurgias, uso de medicamentos, histórico familiar e hábitos de vida.
                  </li>
                  <li className="mb-2">
                    <strong>Exame físico completo:</strong> Avaliação dos sistemas cardiovascular, respiratório,
                    musculoesquelético e neurológico.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação antropométrica:</strong> Medição de peso, altura, índice de massa corporal (IMC),
                    circunferências e composição corporal.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação cardiovascular:</strong> Medição da pressão arterial, frequência cardíaca de
                    repouso e, quando necessário, realização de eletrocardiograma.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação da aptidão física:</strong> Testes de flexibilidade, força muscular e capacidade
                    cardiorrespiratória.
                  </li>
                  <li className="mb-2">
                    <strong>Exames complementares:</strong> Quando necessário, solicitação de exames laboratoriais,
                    teste ergométrico, entre outros.
                  </li>
                </ol>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Tipos de Avaliação</h3>
                <p className="mb-4">Oferecemos diferentes tipos de avaliação para atividade física:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Avaliação Básica:</strong> Indicada para indivíduos sem fatores de risco e que desejam
                    iniciar atividades físicas de baixa intensidade.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação Intermediária:</strong> Recomendada para pessoas com fatores de risco moderados ou
                    que desejam praticar atividades de intensidade moderada.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação Avançada:</strong> Destinada a indivíduos com fatores de risco significativos,
                    doenças preexistentes ou que desejam praticar atividades de alta intensidade.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação para Ginástica Laboral:</strong> Específica para programas de ginástica laboral em
                    empresas.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Benefícios para a Empresa</h3>
                <p className="mb-4">
                  A implementação de avaliações para atividade física no ambiente corporativo traz diversos benefícios:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Redução do absenteísmo por problemas de saúde</li>
                  <li>Aumento da produtividade e disposição dos colaboradores</li>
                  <li>Diminuição de lesões relacionadas ao trabalho</li>
                  <li>Melhoria do clima organizacional</li>
                  <li>Redução de custos com planos de saúde e afastamentos</li>
                  <li>Promoção de uma cultura de saúde e bem-estar</li>
                  <li>Segurança jurídica na implementação de programas de atividade física</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Programas Corporativos</h3>
                <p className="mb-4">
                  Além das avaliações individuais, oferecemos programas corporativos completos que incluem:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Avaliação inicial de todos os colaboradores</li>
                  <li>Elaboração de programas de ginástica laboral personalizados</li>
                  <li>Treinamento de multiplicadores internos</li>
                  <li>Acompanhamento periódico e reavaliações</li>
                  <li>Palestras e workshops sobre saúde e atividade física</li>
                  <li>Relatórios de acompanhamento e resultados</li>
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
                    <span>Médicos especialistas em medicina esportiva</span>
                  </li>
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
                    <span>Avaliação completa em um único local</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Relatórios detalhados e orientações personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Programas corporativos customizados</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Ginástica Laboral</h4>
                  <p className="text-sm mb-4">
                    Conheça nosso programa de ginástica laboral, desenvolvido por profissionais especializados para
                    melhorar a qualidade de vida no trabalho.
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Saiba Mais</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesAtividadeFisica />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
