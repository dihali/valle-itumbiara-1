"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function MotoPage() {
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
            PARA QUEM USA A MOTO PRA TRABALHAR E VIVER
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Sua moto sai todo dia.<br />
            O risco sai junto.<br />
            <span className="text-[#48CAE4]">A Valle fica do seu lado a partir de R$&nbsp;83/mês.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-3">
            Motoboy, delivery, app, uso pessoal — não importa como você usa.
            A Valle protege em Itumbiara e região sem análise de perfil, sem carência.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#48CAE4] font-semibold mb-10">
            Protegido no mesmo dia que assinar. Sem esperar 30 dias.
          </motion.p>
          <motion.div variants={fadeUp}>
            <CTAWhatsApp label="📱 PROTEGER MINHA MOTO AGORA" variant="green" />
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
            Quem anda de moto sabe: <span className="text-[#1A3A8F]">o risco é real.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Você sai pra trampar de manhã sem saber se vai voltar com a moto. Buraco na estrada. Carro fechando. Roubo na esquina. Chuva forte. Pneu que fura no meio do nada.
            <br /><br />
            E quando acontece, a maioria das seguradoras não aceita motoboy. Não aceita delivery. Não aceita app de transporte.
          </p>
          <div className="bg-[#1A3A8F] text-white rounded-2xl px-8 py-5 inline-block">
            <p className="font-extrabold text-2xl">A Valle aceita. <span className="text-[#48CAE4]">Todos.</span></p>
          </div>
        </AnimatedSection>
      </section>

      {/* COBERTURAS */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0E1A]">
              Proteção <span className="text-[#1A3A8F]">completa</span> pra sua moto.
            </h2>
          </AnimatedSection>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: "🛡️", item: "Colisão" },
              { icon: "🚨", item: "Roubo e furto" },
              { icon: "🔥", item: "Incêndio" },
              { icon: "⛈️", item: "Fenômenos da natureza" },
              { icon: "🚛", item: "Guincho 24h em qualquer lugar" },
              { icon: "🔋", item: "Bateria — socorro na hora" },
              { icon: "🛞", item: "Pneu furado — atendimento onde você estiver" },
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
              Pra quem usa a moto pra <span className="text-[#1A3A8F]">trabalhar, viver e curtir.</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { titulo: "Motoboy / Entregador", icon: "🛵", desc: "iFood, Rappi, 99Food, entrega particular — sua moto é seu sustento. Protegemos sem cobrar a mais." },
              { titulo: "Motorista de app", icon: "📱", desc: "Uber Moto, 99 Moto — aceitamos todos os apps de transporte de passageiro." },
              { titulo: "Uso pessoal", icon: "🏠", desc: "Você usa a moto pra ir trabalhar, levar os filhos, viajar nos fins de semana? Protegida do mesmo jeito." },
              { titulo: "Moto esportiva ou customizada", icon: "🏁", desc: "Nem toda seguradora aceita. A Valle aceita." },
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

      {/* VANTAGENS */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0E1A]">
              Por que motoqueiro <span className="text-[#1A3A8F]">escolhe a Valle?</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {[
              "Mensalidade a partir de R$ 83/mês — cabe no bolso",
              "Sem análise de perfil — não importa idade, tempo de habilitação ou cidade",
              "Sem carência — proteção a partir do dia 1",
              "Atendimento humano 24h — o gestor Humberto Correa atende direto no WhatsApp, não é robô",
              "Guincho rápido — moto quebrou? A gente reboca",
              "Aceita até moto com 20 anos de fabricação",
            ].map((v, i) => (
              <AnimatedSection key={v} delay={i * 0.08} direction="left">
                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-[#1A3A8F] font-extrabold text-lg mt-0.5">✓</span>
                  <p className="text-gray-700">{v}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#0A0E1A]">
              Em <span className="text-[#1A3A8F]">4 passos</span> sua moto já tá protegida.
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4 text-left">
            {[
              { num: "01", titulo: "Faça a cotação", desc: "Manda mensagem no WhatsApp. Em minutos você recebe o valor da sua mensalidade.", icon: "📱" },
              { num: "02", titulo: "Envie seus dados", desc: "Documento da moto, foto da CNH e dados básicos.", icon: "📄" },
              { num: "03", titulo: "Vistoria online", desc: "Caso você não esteja na cidade, você mesmo consegue fazer sua vistoria realizando as fotos de forma simples e segura pelo celular.", icon: "🎥" },
              { num: "04", titulo: "Tá protegida!", desc: "Pagou a filiação, já vale. Sem carência, sem espera.", icon: "🛡️" },
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
            Você sai todo dia arriscando<br />sua ferramenta de trabalho.<br />
            <span className="text-[#48CAE4]">A partir de R$&nbsp;83/mês, isso acaba.</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Fale com o gestor Humberto Correa agora. Em 2 minutos você sabe o valor exato da sua moto — e já pode sair protegido.
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
            <p>Gestor: Humberto Correa</p>
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
