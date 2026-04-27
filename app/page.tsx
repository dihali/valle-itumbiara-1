"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-white text-[#0A0E1A]">

      {/* HERO — fundo azul gradiente */}
      <section className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">
        {/* Círculos decorativos de fundo */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#00B4D8]/10 pointer-events-none" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="text-[#48CAE4] font-bold tracking-widest text-sm uppercase mb-4">
            PROTEÇÃO VEICULAR EM ITUMBIARA
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Seu veículo protegido.<br />
            <span className="text-[#48CAE4]">Sem burocracia. Sem análise de perfil.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-3">
            Carro ou moto — não importa se você é Uber, motoboy, jovem condutor ou tem veículo mais antigo. A Valle protege quem trabalha, quem cuida da família, quem precisa dirigir tranquilo todo dia.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#48CAE4] font-semibold mb-10">
            Protegido no mesmo dia. A partir de R$&nbsp;83/mês.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAWhatsApp label="📱 QUERO MINHA PROTEÇÃO AGORA" variant="green" />
            <a href="#coberturas" className="text-blue-200 hover:text-white underline underline-offset-4 transition-colors">
              Ver coberturas ↓
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-200">
            <span>✅ Protegido no dia 1 — sem carência</span>
            <span>✅ Atendimento das 6h às 23h</span>
            <span>✅ Cobertura em todo Brasil*</span>
          </motion.div>
          <motion.p variants={fadeUp} className="text-xs text-blue-300/60 mt-2">*exceto SP, RJ e BH</motion.p>
        </motion.div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 37 720 42.7C840 48 960 48 1080 42.7C1200 37 1320 27 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* A DOR */}
      <section className="py-20 px-6 bg-white">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-[#0A0E1A]">
            Em Itumbiara, um veículo é mais que um veículo.<br />
            <span className="text-[#1A3A8F]">É seu trampo. É a escola dos filhos. É a sua liberdade.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Mas seguro tradicional cobra caro, faz pergunta demais e ainda nega cobertura quando você mais precisa.
            Analisa seu &ldquo;perfil&rdquo;. Analisa sua rua. Analisa sua idade. E no final diz não.
            <br /><br />
            A Valle nasceu pra mudar essa história: proteção de verdade, sem letra miúda,
            com preço que cabe no bolso de quem trabalha de segunda a segunda.
          </p>
        </AnimatedSection>
      </section>

      {/* VALUE STACK */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#0A0E1A]">
              O que você leva por <span className="text-[#1A3A8F]">a partir de R$&nbsp;200/mês.</span>
            </h2>
            <p className="text-gray-500">Veja o que a Valle entrega — e o que vale cada parte.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {[
              { item: "Cobertura colisão, roubo, incêndio e fenômenos da natureza", valor: "Inestimável" },
              { item: "Guincho 24h em qualquer lugar do Brasil", valor: "R$ 200+ por acionamento" },
              { item: "Rastreador veicular incluso", valor: "R$ 60/mês" },
              { item: "Assistência completa (bateria, pneu, chave, pane)", valor: "R$ 40/mês" },
              { item: "Desconto em postos parceiros", valor: "R$ 30+/mês" },
              { item: "Atendimento humano das 6h às 23h", valor: "Sem preço" },
            ].map((row, i) => (
              <div
                key={row.item}
                className={`flex justify-between items-center px-6 py-4 gap-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"
                } hover:bg-[#EEF3FF] transition-colors`}
              >
                <span className="text-gray-700 text-sm">{row.item}</span>
                <span className="text-[#1A3A8F] font-bold text-sm whitespace-nowrap">{row.valor}</span>
              </div>
            ))}
            <div className="bg-[#1A3A8F] px-6 py-5 flex justify-between items-center">
              <span className="font-extrabold text-white text-lg">Você paga apenas</span>
              <span className="font-extrabold text-[#48CAE4] text-2xl">A partir de R$&nbsp;200/mês</span>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-3">*Valores de referência para carro popular. Consulte o valor exato no WhatsApp.</p>
        </AnimatedSection>
      </section>

      {/* COBERTURAS */}
      <section id="coberturas" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0A0E1A]">
              Tudo o que você precisa, <span className="text-[#1A3A8F]">sem letra miúda.</span>
            </h2>
            <p className="text-gray-500 text-lg">Você se associa, paga uma mensalidade acessível e tem direito a:</p>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { icon: "🛡️", title: "Colisão", desc: "Bateu? A Valle cobre. Você não fica na mão." },
              { icon: "🚨", title: "Roubo & Furto", desc: "Levaram seu veículo? Reembolso pelo valor da tabela." },
              { icon: "🚛", title: "Guincho 24h", desc: "Pifou na BR? A gente reboca onde você estiver." },
              { icon: "🔥", title: "Incêndio", desc: "Pegou fogo? Coberto." },
              { icon: "⛈️", title: "Fenômenos da natureza", desc: "Granizo, enchente, queda de árvore — protegido." },
              { icon: "📡", title: "Rastreador incluso", desc: "Monitorado 24h, sem custo extra." },
              { icon: "⛽", title: "Desconto combustível", desc: "Economize no tanque sendo associado." },
              { icon: "🆘", title: "Assistência 24h", desc: "Bateria, chave, pneu? A gente vai até você." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#1A3A8F]/30 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-base mb-2 text-[#1A3A8F]">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POR QUE A VALLE */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0E1A]">
              3 motivos pra escolher a <span className="text-[#1A3A8F]">Valle Itumbiara</span> hoje.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { titulo: "SEM CARÊNCIA", icon: "⚡", desc: "Assinou agora, tá protegido agora. Não tem aquela história de 'espera 30 dias'. Aqui é proteção a partir do dia 1." },
              { titulo: "SEM ANÁLISE DE PERFIL", icon: "✅", desc: "Motoboy? Aceito. Uber? Aceito. Tem 21 anos? Aceito. Mora em zona 'perigosa'? Aceito. A Valle protege quem o seguro rejeita." },
              { titulo: "ATENDIMENTO HUMANO", icon: "💬", desc: "Você fala com o Humberto direto, no WhatsApp. Não é call center, não é robô. É gente de Itumbiara cuidando da sua proteção." },
            ].map((card, i) => (
              <AnimatedSection key={card.titulo} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-[#1A3A8F] font-extrabold text-lg mb-4">{card.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
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
              Em <span className="text-[#1A3A8F]">4 passos</span> seu veículo já tá protegido.
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4 text-left">
            {[
              { num: "01", titulo: "Faça a cotação", desc: "Manda mensagem no WhatsApp. Em minutos você recebe o valor da sua mensalidade.", icon: "📱" },
              { num: "02", titulo: "Envie seus dados", desc: "Documento do veículo, foto da CNH e dados básicos.", icon: "📄" },
              { num: "03", titulo: "Vistoria online", desc: "Você mesmo grava um vídeo curto pelo celular. Sem deslocamento, sem perda de tempo.", icon: "🎥" },
              { num: "04", titulo: "Tá protegido!", desc: "Pagou a filiação, já vale. Sem carência, sem espera, sem burocracia.", icon: "🛡️" },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1} direction="left">
                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1A3A8F]/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A3A8F] flex items-center justify-center text-white font-extrabold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A3A8F] text-lg mb-1">{step.icon} {step.titulo}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10">
            <CTAWhatsApp label="📱 COMEÇAR MINHA COTAÇÃO AGORA" variant="blue" />
          </AnimatedSection>
        </div>
      </section>

      {/* QUAL VEÍCULO */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#0A0E1A]">
              Qual veículo você quer <span className="text-[#1A3A8F]">proteger?</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { href: "/carro", emoji: "🚗", titulo: "Carro de passeio", desc: "Popular, intermediário ou novo — protegemos todos.", preco: "A partir de R$ 200/mês" },
              { href: "/moto", emoji: "🏍️", titulo: "Moto", desc: "Uso pessoal, motoboy, delivery, app — todos aceitos.", preco: "A partir de R$ 83/mês" },
            ].map((v, i) => (
              <AnimatedSection key={v.href} delay={i * 0.15}>
                <Link
                  href={v.href}
                  className="group bg-white border border-gray-100 hover:border-[#1A3A8F] rounded-2xl p-10 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
                >
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{v.emoji}</span>
                  <h3 className="text-2xl font-extrabold text-[#1A3A8F]">{v.titulo}</h3>
                  <p className="text-gray-500">{v.desc}</p>
                  <p className="text-[#00B4D8] font-bold text-sm">{v.preco}</p>
                  <span className="text-[#1A3A8F] font-bold group-hover:underline text-sm">Ver detalhes →</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREA DE ATUAÇÃO */}
      <section className="py-20 px-6 bg-white">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#0A0E1A]">
            Atendemos <span className="text-[#1A3A8F]">Itumbiara e toda a região.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Você é de Itumbiara, Buriti Alegre, Goiatuba, Panamá, Cachoeira Dourada, Araporã, Centralina ou qualquer cidade da região? A Valle te atende.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            E se acontecer algo quando você estiver viajando, a cobertura é nacional* — você dirige em todo o Brasil com tranquilidade.
          </p>
          <p className="text-sm text-gray-400 mt-3">*com exceção das capitais SP, RJ e BH</p>
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#F0F5FF]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0E1A]">
              Perguntas <span className="text-[#1A3A8F]">Frequentes</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {[
              { q: "A Valle é seguradora?", a: "Não. A Valle é uma associação de proteção veicular, modelo cooperativo onde os associados se ajudam. Por isso conseguimos preços muito mais acessíveis que seguro tradicional." },
              { q: "Qual a idade máxima do veículo?", a: "Aceitamos veículos com até 20 anos de fabricação." },
              { q: "Tem carência?", a: "Não. A partir do momento que você paga a filiação e a vistoria é aprovada, seu veículo já está protegido. Proteção no dia 1." },
              { q: "Quanto custa a mensalidade?", a: "A partir de R$ 83/mês para motos e a partir de R$ 200/mês para carros populares. Manda mensagem no WhatsApp pra saber o valor exato do seu veículo." },
              { q: "Tem taxa de adesão?", a: "Sim, a filiação é cobrada uma única vez e equivale a aproximadamente 1% do valor de tabela do veículo." },
              { q: "Aceita motoboy, Uber, 99?", a: "Sim, aceitamos todos. A Valle não faz análise de perfil." },
              { q: "Como faço pra acionar em caso de sinistro?", a: "Pelo nosso atendimento direto no WhatsApp ou pelo app oficial Valle Proteção Veicular." },
              { q: "Atende minha cidade?", a: "Atendemos Itumbiara e toda a região do Sul de Goiás e Triângulo Mineiro próximo. Cobertura nacional ao dirigir, com exceção das capitais SP, RJ e BH." },
            ].map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1A3A8F]/20 border border-gray-100 transition-all duration-300">
                  <h3 className="font-bold text-[#1A3A8F] text-base mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10 text-center">
            <p className="text-gray-500 mb-4">Ainda tem dúvida? Fala direto com o Humberto.</p>
            <CTAWhatsApp label="📱 TIRAR MINHA DÚVIDA NO WHATSAPP" variant="outline" />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center hero-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10.7C120 21 240 43 360 48C480 53 600 43 720 37.3C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="#F0F5FF"/>
          </svg>
        </div>
        <AnimatedSection className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Você já trabalhou demais<br />pra ficar desprotegido.<br />
            <span className="text-[#48CAE4]">Isso muda hoje.</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Manda mensagem pro Humberto agora. Em 2 minutos você sabe o valor exato — e já pode sair protegido.
          </p>
          <CTAWhatsApp label="📱 FALAR COM O HUMBERTO — COTAR AGORA" variant="green" />
        </AnimatedSection>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 px-6 bg-[#0A0E1A] text-gray-400 text-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1A3A8F] flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">V</span>
              </div>
              <h4 className="text-white font-bold text-base">Valle Proteção Veicular</h4>
            </div>
            <p>VALLE ASSOCIAÇÃO DE SOCORRO MÚTUO</p>
            <p>CNPJ: 52.243.261/0001-36</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-3">Endereço</h4>
            <p>Av. Calisto Jorge — Bairro Alto da Boa Vista</p>
            <p>Pertinho da Beira Rio, ao lado do Edifício Eco Vida</p>
            <p>Itumbiara — GO</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-3">Contato</h4>
            <p>WhatsApp: <a href="https://wa.me/5564931990013" className="text-[#00B4D8] hover:underline">(64) 9319-9013</a></p>
            <p>Atendimento: das 6h às 23h, todos os dias</p>
            <p>Instagram: <a href="https://instagram.com/valleprotecaoitumbiara" target="_blank" rel="noopener noreferrer" className="text-[#00B4D8] hover:underline">@valleprotecaoitumbiara</a></p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-xs">
          © {new Date().getFullYear()} Valle Proteção Veicular Itumbiara. Todos os direitos reservados.
        </div>
      </footer>

    </main>
  );
}
