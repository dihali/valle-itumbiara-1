"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function CarroPage() {
  return (
    <main className="bg-white text-[#0A0E1A]">

      {/* HERO */}
      <section className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />
        <motion.div className="relative z-10 max-w-4xl mx-auto" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Link href="/" className="inline-flex items-center gap-1 text-blue-300 hover:text-white text-sm mb-6 transition-colors">
              ← Voltar para início
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="text-[#48CAE4] font-bold tracking-widest text-sm uppercase mb-4">
            PROTEÇÃO VEICULAR EM ITUMBIARA — SEM BUROCRACIA
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Você trabalha duro.<br />
            <span className="text-[#48CAE4]">Seu veículo merece proteção de verdade.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-3">
            Uber, motoboy, jovem condutor ou veículo com história — na Valle, sua dedicação conta mais do que qualquer análise de perfil. A partir de R$&nbsp;100/mês, sem carência, atendimento humano direto no WhatsApp.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#48CAE4] font-semibold mb-10">
            Cotação imediata e sem custo.
          </motion.p>
          <motion.div variants={fadeUp}>
            <CTAWhatsApp label="📱 QUERO PROTEGER MEU VEÍCULO AGORA" variant="green" />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 37 720 42.7C840 48 960 48 1080 42.7C1200 37 1320 27 1380 21.3L1440 16V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* A DOR */}
      <section className="py-20 px-6 bg-white">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#0A0E1A]">
            Cansou de ouvir <span className="text-[#1A3A8F]">&ldquo;não aceitamos seu perfil&rdquo;?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">Seguradora tradicional adora dar desculpa:</p>
          <div className="flex flex-col gap-3 max-w-sm mx-auto text-left">
            {["\"Você é muito jovem\"","\"Mora em zona de risco\"","\"Não tem garagem\"","\"Roda muito de Uber\"","\"Carro muito antigo\""].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                <span className="text-red-400 font-bold">✕</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#1A3A8F] text-white rounded-2xl px-8 py-5 inline-block">
            <p className="font-extrabold text-xl">Na Valle, a resposta é uma só: <span className="text-[#48CAE4]">aceito.</span></p>
            <p className="text-blue-200 mt-1 text-sm">A gente protege quem o sistema deixa pra trás.</p>
          </div>
        </AnimatedSection>
      </section>

      {/* COBERTURAS */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0E1A]">
              Tudo isso por uma mensalidade <span className="text-[#1A3A8F]">que cabe no bolso.</span>
            </h2>
          </AnimatedSection>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: "🛡️", item: "Colisão (com terceiros ou sozinho)" },
              { icon: "🚨", item: "Roubo e furto — reembolso pela tabela FIPE" },
              { icon: "🔥", item: "Incêndio" },
              { icon: "⛈️", item: "Granizo, enchente e fenômenos da natureza" },
              { icon: "🚛", item: "Guincho 24h em qualquer lugar do Brasil" },
              { icon: "🔋", item: "Bateria descarregada — socorro na hora" },
              { icon: "🛞", item: "Pneu furado — troca onde você estiver" },
              { icon: "🔑", item: "Chaveiro 24h" },
              { icon: "⛽", item: "Pane seca — combustível na estrada" },
              { icon: "📡", item: "Rastreador incluso (sem custo extra)" },
              { icon: "⛽", item: "Desconto em postos parceiros" },
            ].map((item) => (
              <motion.div key={item.item} variants={fadeUp}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-[#1A3A8F]/20 transition-all duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0E1A]">
              Carro popular, novo, antigo, alugado pra app — <span className="text-[#1A3A8F]">todos protegidos.</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { titulo: "Motorista de aplicativo", icon: "🚕", desc: "Você roda de Uber, 99 ou InDriver? A Valle aceita. Outras seguradoras dobram o preço quando descobrem que você é app — aqui o preço é o mesmo." },
              { titulo: "Carro popular do dia a dia", icon: "🚗", desc: "HB20, Gol, Uno, Onix, Fiat Argo... protegemos todos os carros populares de Itumbiara." },
              { titulo: "Primeiro carro / motorista jovem", icon: "🎉", desc: "Tem 18, 19, 20 anos? Acabou de tirar carteira? A Valle protege. Sem cobrar a mais por isso." },
              { titulo: "Carro mais antigo (até 20 anos)", icon: "🔧", desc: "Aquele carrão que tá com você há anos? Continua merecendo proteção. Aceitamos veículos até 20 anos de fabricação." },
            ].map((card, i) => (
              <AnimatedSection key={card.titulo} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1A3A8F]/20 transition-all duration-300 h-full">
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h3 className="font-extrabold text-lg text-[#1A3A8F] mb-3">{card.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0E1A]">
              Por que a Valle, e não um <span className="text-[#1A3A8F]">seguro tradicional?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl shadow-lg">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-[#1A3A8F] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Critério</th>
                    <th className="px-6 py-4 font-semibold text-center text-blue-200">Seguro tradicional</th>
                    <th className="px-6 py-4 font-bold text-center text-[#48CAE4]">Valle Proteção</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Análise de perfil", "✅ Faz, e aumenta o preço", "❌ Não faz"],
                    ["Aceita motorista de app", "⚠️ Cobra mais", "✅ Mesmo preço"],
                    ["Carência", "✅ De 30 a 90 dias", "❌ Sem carência"],
                    ["Aceita carro com 15+ anos", "❌ Geralmente não", "✅ Até 20 anos"],
                    ["Atendimento", "📞 Call center", "📱 WhatsApp direto"],
                  ].map(([criterio, seguro, valle], i) => (
                    <tr key={criterio} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>
                      <td className="px-6 py-4 font-medium text-gray-700">{criterio}</td>
                      <td className="px-6 py-4 text-center text-gray-400">{seguro}</td>
                      <td className="px-6 py-4 text-center font-bold text-[#1A3A8F]">{valle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#0A0E1A]">
              Em <span className="text-[#1A3A8F]">4 passos</span> seu carro já tá protegido.
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4 text-left">
            {[
              { num: "01", titulo: "Faça a cotação", desc: "Manda mensagem no WhatsApp. Em minutos você recebe o valor da sua mensalidade.", icon: "📱" },
              { num: "02", titulo: "Envie seus dados", desc: "Documento do veículo, foto da CNH e dados básicos.", icon: "📄" },
              { num: "03", titulo: "Vistoria online", desc: "Você mesmo grava um vídeo curto pelo celular. Sem deslocamento.", icon: "🎥" },
              { num: "04", titulo: "Tá protegido!", desc: "Pagou a filiação, já vale. Sem carência, sem espera.", icon: "🛡️" },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1} direction="left">
                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1A3A8F]/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A3A8F] flex items-center justify-center text-white font-extrabold text-sm">{step.num}</div>
                  <div>
                    <h3 className="font-bold text-[#1A3A8F] text-lg mb-1">{step.icon} {step.titulo}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center hero-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10.7C120 21 240 43 360 48C480 53 600 43 720 37.3C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V0H0Z" fill="white"/>
          </svg>
        </div>
        <AnimatedSection className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Você esperou tempo demais<br />dirigindo desprotegido.<br />
            <span className="text-[#48CAE4]">Isso acaba hoje.</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Fale com o gestor Humberto Correia agora. Em 2 minutos você sabe o valor exato — e já pode sair protegido.
          </p>
          <CTAWhatsApp label="📱 FALAR COM O GESTOR HUMBERTO CORREIA" variant="green" />
        </AnimatedSection>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 px-6 bg-[#0A0E1A] text-gray-400 text-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-3">Valle Proteção Veicular</h4>
            <p>VALLE ASSOCIAÇÃO DE SOCORRO MÚTUO</p>
            <p>CNPJ: 52.243.261/0001-36</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Endereço</h4>
            <p>Av. Calisto Jorge — Bairro Alto da Boa Vista</p>
            <p>Pertinho da Beira Rio, ao lado do Edifício Eco Vida</p>
            <p>Itumbiara — GO</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contato</h4>
            <p>WhatsApp: <a href="https://wa.me/556499399013" className="text-[#00B4D8] hover:underline">(64) 9939-9013</a></p>
            <p>Gestor: Humberto Correia</p>
            <p>Atendimento: 24 horas, todos os dias</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-xs">
          © {new Date().getFullYear()} Valle Proteção Veicular Itumbiara. Todos os direitos reservados.
        </div>
      </footer>

    </main>
  );
}
