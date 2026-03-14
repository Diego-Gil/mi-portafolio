import React from 'react';
import { motion } from 'framer-motion'; // 1. Importamos la magia

export default function App() {
  // Definimos una variante de animación para reutilizar
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-gold-accent selection:text-black">
      
      {/* NAVBAR (Aparece después de un pequeño delay) */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-8 mix-blend-difference"
      >
        <div className="text-xl font-bold tracking-tighter uppercase italic">arik.</div>
        <ul className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-light">
          <li className="hover:text-gold-accent cursor-pointer transition">Services</li>
          <li className="hover:text-gold-accent cursor-pointer transition">Work</li>
          <li className="hover:text-gold-accent cursor-pointer transition">About</li>
        </ul>
        <button className="border border-white/20 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition duration-500">
          Let's Talk
        </button>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(197,164,126,0.05),transparent_50%)]"></div>
        
        {/* Animamos el tag superior */}
        <motion.span 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-gold-accent uppercase tracking-[0.5em] text-[10px] mb-6 block"
        >
          Web Designer & Developer
        </motion.span>
        
        {/* Animamos el título con un delay mayor */}
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-serif leading-tight mb-8"
        >
          Creative <br />
          <span className="italic font-light opacity-80">Frontend</span>
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="max-w-md text-gray-500 text-sm font-light leading-relaxed mb-10"
        >
          Premium web design, development, and SEO services to help your business stand out in the digital landscape.
        </motion.p>

        <motion.div 
          initial={{ height: 0 }} animate={{ height: 96 }} transition={{ duration: 1, delay: 0.6 }}
          className="w-[1px] bg-gradient-to-b from-gold-accent to-transparent"
        ></motion.div>
      </section>

      {/* SERVICES SECTION (Aparecen al hacer scroll) */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          { id: '01', title: 'Web Design', desc: 'Interfaces minimalistas que convierten usuarios en clientes.' },
          { id: '02', title: 'Development', desc: 'Código limpio y escalable usando las últimas tecnologías.' },
          { id: '03', title: 'SEO & Content', desc: 'Visibilidad orgánica para que tu marca llegue a quien debe.' }
        ].map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Se activa al bajar el scroll
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-card-bg p-12 border border-white/5 hover:bg-[#151515] transition-all duration-700 group cursor-default"
          >
            <span className="text-gold-accent text-xs mb-6 block opacity-40 group-hover:opacity-100">{service.id}</span>
            <h3 className="text-2xl uppercase tracking-tighter mb-4">{service.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-8">{service.desc}</p>
            <div className="h-[1px] w-8 bg-gold-accent/30 group-hover:w-full transition-all duration-700"></div>
          </motion.div>
        ))}
      </section>

      {/* SECCIÓN DE PROYECTOS (Versión optimizada para Móvil y PC) */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex justify-between items-end mb-16 border-b border-white/5 pb-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif italic">Selected Work</h2>
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 cursor-pointer transition">See all projects</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { id: 1, title: 'Space', cat: 'Web Design', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop' },
            { id: 2, title: 'Nova', cat: 'Development', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop' }
          ].map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-[#111]">
                {/* --- ESTA ES LA ETIQUETA QUE CAMBIAMOS --- */}
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 
                             /* En móvil: poco gris y más luz / En PC: gris total y oscuro */
                             grayscale-50 opacity-70 md:grayscale md:opacity-50 
                             /* Al pasar el mouse o tocar: color total y zoom */
                             group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-serif tracking-tight">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">{project.cat}</p>
                </div>
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="py-20 text-center text-[10px] uppercase tracking-[0.4em] text-gray-600">
        © 2026 Arik Portfolio — Built with React & Motion
      </footer>
    </div>
  );
}