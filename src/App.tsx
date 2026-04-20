/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, ShoppingBag, Heart, ExternalLink, ChevronRight, X, Maximize2 } from "lucide-react";

const NAVIGATION = [
  { name: "Chi Siamo", href: "#chi-siamo" },
  { name: "Creazioni", href: "#creazioni" },
  { name: "Vendite", href: "#vendite" },
];

const CREATIONS = [
  {
    title: "Argilla Polimerica",
    description: "Orecchini e anelli minimalisti, modellati a mano per forme organiche e colori unici.",
    image: "/pics/Argilla_1.jpeg",
    items: ["Orecchini geometrici", "Anelli materici", "Pendenti colorati"],
    gallery: [
      "/pics/Argilla_1.jpeg",
      "/pics/Argilla_2.jpeg",
      "/pics/Argilla_3.jpeg",
      "/pics/Argilla_4.jpeg",
    ]
  },
  {
    title: "Uncinetto Handmade",
    description: "Cordini per occhiali, collane e accessori tessili intrecciati con cura.",
    image: "/pics/Uncinetto_1.jpeg",
    items: ["Cordini occhiali", "Collane handmade", "Fermagli capelli"],
    gallery: [
      "/pics/Uncinetto_1.jpeg",
      "/pics/Uncinetto_2.jpeg",
      "/pics/Uncinetto_3.jpeg",
      "/pics/Uncinetto_4.jpeg",
    ]
  }
];

const SHOP_ITEMS = [
  {
    name: "Orecchini a bottone primaverili",
    price: "10,00€",
    url: "https://www.vinted.it/items/8614163750",
    image: "/pics/vinted_1.jpeg"
  },
  {
    name: "Orecchini a bottone grigi",
    price: "8,00€",
    url: "https://www.vinted.it/items/8614256478-orecchini-a-bottone-grigi-handmade-argilla-polimerica-e-acciaio-inox-design-geometrico-elegante",
    image: "/pics/vinted_2.jpeg"
  },
  {
    name: "Ciondolo per aria",
    price: "9,99€",
    url: "https://www.vinted.it/items/7769466714-ciondolo-realizzato-a-mano",
    image: "/pics/vinted_3.jpeg"
  },
  {
    name: "Orecchini verdi e ti perdi",
    price: "7,00€",
    url: "https://www.vinted.it/items/8614163750",
    image: "/pics/vinted_4.jpeg"
  },
];

export default function App() {
  const [selectedGallery, setSelectedGallery] = useState<null | number>(null);
  const [activeImage, setActiveImage] = useState(0);

  const openGallery = (idx: number) => {
    setSelectedGallery(idx);
    setActiveImage(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    document.body.style.overflow = "auto";
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen selection:bg-brand-blue/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 group">
            <img 
              src="/pics/Logo.jpeg" 
              alt="Perlaria Logo" 
              className="h-12 w-auto object-contain brightness-110"
              referrerPolicy="no-referrer"
            />
          </a>
          <div className="hidden md:flex space-x-12">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-brand-ink/70 hover:text-brand-ink transition-colors uppercase letter-spacing-[0.1em]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/perlaria.dd" target="_blank" className="p-2 hover:bg-brand-blue/10 rounded-full transition-colors">
              <Instagram size={20} className="text-brand-ink" />
            </a>
            <a href="https://www.vinted.it/member/148711217-perlariadd" target="_blank" className="p-2 hover:bg-brand-blue/10 rounded-full transition-colors">
              <ShoppingBag size={20} className="text-brand-ink" />
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-64 md:w-80"
            >
              <img 
                src="/pics/Logo.jpeg" 
                alt="Perlaria Handmade Logo" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-ink/60 leading-relaxed font-light text-center">
              L'eleganza del minimale, la poesia del fatto a mano.
              Gioielli e accessori unici creati con argilla polimerica e amore.
            </p>
            <div className="flex justify-center pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#vendite"
                className="px-10 py-4 bg-brand-blue text-white rounded-full font-medium tracking-wide hover:shadow-lg transition-all"
              >
                Esplora le Creazioni
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Section: Chi Siamo */}
        <section id="chi-siamo" className="py-32 px-6 bg-white/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pill-image aspect-[4/5] bg-brand-cream"
            >
              <img
                src="/pics/Argilla_1.jpeg"
                alt="Working on clay"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-brand-blue font-semibold uppercase tracking-widest text-sm">Bio</span>
                <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight">
                  Un progetto nato dalla passione per il dettaglio.
                </h2>
              </div>
              <div className="space-y-6 text-brand-ink/70 text-lg leading-relaxed font-light">
                <p>
                  Perlaria è un brand che celebra la lentezza e la bellezza dell'artigianato. Ogni pezzo è interamente realizzato a mano, rendendolo unico e irripetibile.
                </p>
                <p>
                  La nostra filosofia si basa sul minimalismo: forme pulite, colori armoniosi e materiali ricercati come l'argilla polimerica e il filato uncinetto d'eccellenza.
                </p>
              </div>
              <div className="pt-4 grid grid-cols-2 gap-8 border-t border-brand-ink/10 pt-10">
                <div>
                  <h4 className="font-display text-2xl font-medium">Handmade</h4>
                  <p className="text-sm text-brand-ink/50 uppercase tracking-tighter mt-1">Con cura in Italia</p>
                </div>
                <div>
                  <h4 className="font-display text-2xl font-medium">Minimal</h4>
                  <p className="text-sm text-brand-ink/50 uppercase tracking-tighter mt-1">Stile intramontabile</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Creazioni */}
        <section id="creazioni" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-brand-blue font-semibold uppercase tracking-widest text-sm">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium">Le nostre collezioni</h2>
            </div>
            <p className="max-w-md text-brand-ink/60 font-light text-right">
              Scopri le tecniche che danno vita alle nostre idee: argilla polimerica per la struttura e uncinetto per la morbidezza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {CREATIONS.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group cursor-pointer"
                onClick={() => openGallery(idx)}
              >
                <div className="pill-image aspect-[16/10] bg-brand-cream relative overflow-hidden mb-8">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-brand-ink/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <h3 className="text-3xl font-display font-medium">{cat.title}</h3>
                  <p className="text-brand-ink/60 font-light">{cat.description}</p>
                  <ul className="flex flex-wrap gap-4 pt-2">
                    {cat.items.map(item => (
                      <li key={item} className="text-xs uppercase tracking-wider px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedGallery !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-brand-ink/95 backdrop-blur-xl flex flex-col"
            >
              <div className="flex justify-between items-center px-6 h-20">
                <h3 className="text-white font-display text-2xl font-medium">
                  {CREATIONS[selectedGallery].title}
                </h3>
                <button 
                  onClick={closeGallery}
                  className="p-2 text-white/60 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 gap-10">
                <div className="flex-1 max-w-4xl h-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      src={CREATIONS[selectedGallery].gallery[activeImage]}
                      className="max-h-[70vh] md:max-h-[80vh] w-auto rounded-[32px] shadow-2xl object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>

                <div className="flex md:flex-col gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                  {CREATIONS[selectedGallery].gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImage === i ? "border-brand-blue scale-105" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-24 flex items-center justify-center text-white/40 text-sm font-light">
                {activeImage + 1} / {CREATIONS[selectedGallery].gallery.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section: Vendite */}
        <section id="vendite" className="py-32 px-6 bg-brand-blue text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-medium">Prendi un pezzo di Perlaria</h2>
              <p className="max-w-xl mx-auto opacity-70 font-light text-lg">
                Le nostre vendite avvengono esclusivamente su Vinted per garantire sicurezza e tracciabilità.
              </p>
              <a
                href="https://www.vinted.it/member/148711217-perlariadd"
                target="_blank"
                className="inline-flex items-center space-x-2 text-white border-b border-white/30 hover:border-white transition-all pb-1"
              >
                <span>Visita il profilo Vinted</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {SHOP_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 bg-white/10 border-white/10 group"
                >
                  <div className="rounded-[24px] overflow-hidden aspect-square mb-6 bg-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <div>
                      <h4 className="text-xl font-display">{item.name}</h4>
                      <p className="text-white/60 font-medium">{item.price}</p>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-white text-brand-blue flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                    >
                      <ShoppingBag size={20} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Social CTA */}
        <section className="py-40 px-6 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center space-y-12"
          >
            <div className="relative">
              <Heart className="text-brand-blue/20 w-40 h-40 absolute -top-20 -left-20 animate-pulse" />
              <h2 className="text-5xl md:text-8xl font-display font-medium relative z-10">
                Segui il viaggio su Instagram
              </h2>
            </div>
            <a
              href="https://www.instagram.com/perlaria.dd"
              target="_blank"
              className="group flex items-center space-x-6 text-2xl md:text-3xl font-display hover:text-brand-blue transition-colors"
            >
              <span className="border-b-2 border-brand-ink/10 group-hover:border-brand-blue pb-2">@perlaria.dd</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform" size={40} />
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-brand-ink/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-brand-blue">perlaria</h3>
            <p className="text-sm text-brand-ink/50 uppercase tracking-widest font-medium">Handmade with love in Italy</p>
          </div>
          <div className="flex space-x-8">
            <a href="https://www.instagram.com/perlaria.dd" className="text-brand-ink/50 hover:text-brand-ink transition-colors">Instagram</a>
            <a href="https://www.vinted.it/member/148711217-perlariadd" className="text-brand-ink/50 hover:text-brand-ink transition-colors">Vinted</a>
          </div>
          <p className="text-sm text-brand-ink/30">© {new Date().getFullYear()} Perlaria. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
