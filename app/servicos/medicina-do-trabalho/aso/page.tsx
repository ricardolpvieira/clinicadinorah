import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import AsoSlider from "@/components/aso-slider"
import RelatedServices from "@/components/related-services"

export default function AsoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Slider Section - Agora no topo */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <AsoSlider />
        </div>
      </section>

      {/* Title Section - Agora abaixo do slider */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-sky-700">
            Atestado de Saúde Ocupacional (ASO)
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">O que é o ASO?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  O <strong>Atestado de Saúde Ocupacional (ASO)</strong> é um documento obrigatório exigido pela
                  legislação trabalhista brasileira, especificamente pela Norma Regulamentadora nº 7 (NR-7), que
                  estabelece o Programa de Controle Médico de Saúde Ocupacional (PCMSO).
                </p>
                <p className="mb-4">
                  Este documento é emitido por um médico do trabalho após a realização de exames clínicos e
                  complementares, atestando a aptidão ou inaptidão do trabalhador para desempenhar suas funções
                  específicas, considerando os riscos ocupacionais aos quais está exposto.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Tipos de ASO</h3>
                <p className="mb-2">O ASO deve ser emitido em diferentes momentos da relação de trabalho:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Admissional:</strong> Realizado antes que o trabalhador assuma suas atividades
                  </li>
                  <li className="mb-2">
                    <strong>Periódico:</strong> Realizado regularmente, conforme a periodicidade estabelecida no PCMSO
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

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Informações Contidas no ASO</h3>
                <p className="mb-2">O ASO deve conter, no mínimo, as seguintes informações:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Nome completo do trabalhador</li>
                  <li>Número de identidade e função exercida</li>
                  <li>Riscos ocupacionais específicos existentes na atividade</li>
                  <li>Procedimentos médicos realizados (exames complementares)</li>
                  <li>Definição de apto ou inapto para a função específica</li>
                  <li>Nome, CRM e assinatura do médico responsável</li>
                  <li>Data de emissão</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-sky-600">Importância do ASO</h3>
                <p className="mb-4">
                  O ASO é fundamental para garantir a saúde e segurança do trabalhador, pois permite:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Identificar precocemente alterações na saúde relacionadas ao trabalho</li>
                  <li>Prevenir doenças ocupacionais</li>
                  <li>Adequar o trabalhador à função mais compatível com seu estado de saúde</li>
                  <li>Cumprir as exigências legais, evitando multas e penalidades</li>
                  <li>Reduzir o absenteísmo e aumentar a produtividade</li>
                </ul>
              </div>

              <div className="mt-8">
                <Button className="bg-sky-600 hover:bg-sky-700">Agendar Consulta</Button>
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
                    <span>Médicos especialistas em medicina do trabalho</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Agilidade na emissão dos documentos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Exames complementares no mesmo local</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Atendimento personalizado para empresas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Sistema digital para gestão dos ASOs</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
                  <h4 className="font-bold text-sky-700 mb-2">Precisa de ajuda?</h4>
                  <p className="text-sm mb-4">Entre em contato com nossa equipe para tirar dúvidas sobre o ASO.</p>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Fale Conosco</Button>
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
