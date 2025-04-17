import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import SegurancaTrabalhoSlider from "@/components/seguranca-trabalho-slider"
import RelatedServicesSegurancaTrabalho from "@/components/related-services-seguranca-trabalho"

export default function SegurancaTrabalhoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - No topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <SegurancaTrabalhoSlider />
        </div>
      </section>

      {/* Title Section - Abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">Segurança do Trabalho</h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que é Segurança do Trabalho?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  A <strong>Segurança do Trabalho</strong> é um conjunto de medidas técnicas, educacionais, médicas e
                  psicológicas empregadas para prevenir acidentes, eliminando condições inseguras do ambiente de
                  trabalho e instruindo as pessoas sobre a importância da implementação de práticas preventivas.
                </p>
                <p className="mb-4">
                  Trata-se de uma área multidisciplinar que visa à prevenção de acidentes e doenças ocupacionais,
                  garantindo a integridade física e mental dos trabalhadores, além de proteger o patrimônio da empresa e
                  o meio ambiente.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Importância da Segurança do Trabalho</h3>
                <p className="mb-4">
                  A implementação de medidas de segurança do trabalho é fundamental por diversos motivos:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Proteção da vida e saúde dos trabalhadores:</strong> Prevenção de acidentes e doenças
                    ocupacionais que podem causar lesões, incapacidades ou até mesmo óbitos.
                  </li>
                  <li className="mb-2">
                    <strong>Cumprimento da legislação:</strong> Atendimento às normas regulamentadoras e demais
                    legislações relacionadas à segurança e saúde no trabalho.
                  </li>
                  <li className="mb-2">
                    <strong>Redução de custos:</strong> Diminuição de gastos com afastamentos, indenizações, processos
                    judiciais e substituição de trabalhadores.
                  </li>
                  <li className="mb-2">
                    <strong>Aumento da produtividade:</strong> Ambientes seguros proporcionam maior conforto e
                    tranquilidade aos trabalhadores, resultando em maior produtividade.
                  </li>
                  <li className="mb-2">
                    <strong>Melhoria da imagem da empresa:</strong> Demonstração de responsabilidade social e
                    preocupação com o bem-estar dos colaboradores.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Nossos Serviços em Segurança do Trabalho</h3>
                <p className="mb-4">
                  A Clínica Dra. Dinorah oferece uma ampla gama de serviços em Segurança do Trabalho:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>PGR (Programa de Gerenciamento de Riscos):</strong> Elaboração e implementação do programa
                    que visa identificar, avaliar e controlar os riscos ambientais existentes ou que venham a existir no
                    ambiente de trabalho.
                  </li>
                  <li className="mb-2">
                    <strong>LTCAT (Laudo Técnico das Condições Ambientais do Trabalho):</strong> Elaboração do laudo que
                    identifica a existência ou não de agentes nocivos no ambiente de trabalho, para fins
                    previdenciários.
                  </li>
                  <li className="mb-2">
                    <strong>Laudo de Insalubridade e Periculosidade:</strong> Avaliação e caracterização das condições
                    de trabalho que podem gerar direito aos adicionais de insalubridade ou periculosidade.
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação de Agentes Químicos:</strong> Monitoramento e avaliação da exposição dos
                    trabalhadores a agentes químicos presentes no ambiente de trabalho.
                  </li>
                  <li className="mb-2">
                    <strong>Treinamentos de NR's:</strong> Capacitação dos trabalhadores conforme as exigências das
                    Normas Regulamentadoras, como NR-10, NR-12, NR-33, NR-35, entre outras.
                  </li>
                  <li className="mb-2">
                    <strong>CIPA (Comissão Interna de Prevenção de Acidentes):</strong> Assessoria na formação e
                    treinamento da CIPA, conforme a NR-5.
                  </li>
                  <li className="mb-2">
                    <strong>Análise de Acidentes:</strong> Investigação e análise de acidentes de trabalho para
                    identificação das causas e implementação de medidas preventivas.
                  </li>
                  <li className="mb-2">
                    <strong>Plano de Emergência:</strong> Elaboração de planos de emergência e realização de simulados
                    para preparação dos trabalhadores em situações de emergência.
                  </li>
                  <li className="mb-2">
                    <strong>Assessoria em Segurança do Trabalho:</strong> Consultoria técnica para adequação da empresa
                    às normas de segurança e saúde no trabalho.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Nossa Abordagem</h3>
                <p className="mb-4">
                  Nossa abordagem em Segurança do Trabalho é baseada em três princípios fundamentais:
                </p>
                <ol className="list-decimal pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Prevenção:</strong> Identificação e controle dos riscos antes que causem danos.
                  </li>
                  <li className="mb-2">
                    <strong>Educação:</strong> Capacitação e conscientização dos trabalhadores sobre a importância da
                    segurança.
                  </li>
                  <li className="mb-2">
                    <strong>Melhoria Contínua:</strong> Avaliação constante dos processos e implementação de melhorias.
                  </li>
                </ol>

                <p className="mb-4">
                  Trabalhamos de forma integrada com a área de Medicina do Trabalho, garantindo uma abordagem completa
                  da saúde e segurança ocupacional, com foco na prevenção de acidentes e doenças relacionadas ao
                  trabalho.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Benefícios dos Nossos Serviços</h3>
                <p className="mb-4">Ao contratar nossos serviços de Segurança do Trabalho, sua empresa obtém:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Redução de acidentes e doenças ocupacionais</li>
                  <li>Cumprimento das exigências legais</li>
                  <li>Diminuição de custos com afastamentos e indenizações</li>
                  <li>Melhoria do clima organizacional e da produtividade</li>
                  <li>Assessoria técnica especializada</li>
                  <li>Documentação completa e atualizada</li>
                  <li>Integração com os serviços de Medicina do Trabalho</li>
                  <li>Suporte contínuo para questões relacionadas à segurança</li>
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
                    <span>Equipe técnica especializada e certificada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Equipamentos de medição calibrados e certificados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Abordagem integrada com a Medicina do Trabalho</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Documentação digital e acessível</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Atendimento personalizado e suporte contínuo</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Normas Regulamentadoras</h4>
                  <p className="text-sm mb-4">
                    Conheça as principais Normas Regulamentadoras (NRs) e como elas se aplicam à sua empresa.
                  </p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Consultar NRs</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesSegurancaTrabalho />

      {/* Stats Section */}
      <Stats />

      <Footer />
    </main>
  )
}
