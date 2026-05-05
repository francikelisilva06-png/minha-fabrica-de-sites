// Este é o arquivo principal que sua IA vai preencher
export default function SiteIA({ dados }) {
  // Se não houver dados, usamos um padrão de luxo
  const site = dados || {
    nome: "Carregando Império...",
    headline: "Transformando sua presença digital com IA",
    subheadline: "O site mais rápido do mundo para o seu negócio.",
    botao: "Falar com Consultor",
    cor: "#000000"
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header de Elite */}
      <nav className="p-6 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold tracking-tighter">{site.nome}</h1>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
          {site.botao}
        </button>
      </nav>

      {/* Hero Section - Abertura */}
      <main className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
          {site.headline}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          {site.subheadline}
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition">
            Começar Agora
          </button>
          <button className="border border-gray-300 px-8 py-4 rounded-xl text-lg font-bold">
            Ver Galeria
          </button>
        </div>
      </main>

      {/* Seção de Tecnologia */}
      <section className="bg-gray-50 py-20 border-y">
        <div className="px-6 text-center italic text-gray-400">
          "Site gerado e otimizado por Inteligência Artificial em 0.4s"
        </div>
      </section>
    </div>
  );
}
