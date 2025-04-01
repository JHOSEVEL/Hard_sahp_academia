import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Send, Dumbbell, Users, Heart, Trophy, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Nome: ${formData.name}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/+5585989500747?text=${whatsappMessage}`, '_blank');
  };

  const scheduleData = [
    { time: '06:00 - 22:00', days: 'Segunda à Sexta' },
    { time: '08:00 - 18:00', days: 'Sábados' },
    { time: '08:00 - 12:00', days: 'Domingos' }
  ];

  const plans = [
    {
      name: 'Plano Básico',
      price: 'R$ 89,90',
      features: ['Acesso à musculação', 'Horário comercial', 'Avaliação física mensal']
    },
    {
      name: 'Plano Premium',
      price: 'R$ 129,90',
      features: ['Acesso total 24h', 'Todas as aulas', 'Avaliação física quinzenal', 'Personal trainer']
    },
    {
      name: 'Plano Família',
      price: 'R$ 199,90',
      features: ['Até 3 pessoas', 'Acesso total 24h', 'Todas as aulas', 'Avaliação física mensal']
    }
  ];

  return (
    <div className="min-h-screen bg-gym-black text-white">
      {/* Navigation */}
      <nav className="bg-gym-black fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-gym-orange font-bold text-2xl">WONER SHAPE</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-gym-orange px-3 py-2">Home</a>
                <a href="#about" className="text-white hover:text-gym-orange px-3 py-2">Sobre</a>
                <a href="#services" className="text-white hover:text-gym-orange px-3 py-2">Serviços</a>
                <a href="#plans" className="text-white hover:text-gym-orange px-3 py-2">Planos</a>
                <a href="#schedule" className="text-white hover:text-gym-orange px-3 py-2">Horários</a>
                <a href="#gallery" className="text-white hover:text-gym-orange px-3 py-2">Galeria</a>
                <a href="#contact" className="text-white hover:text-gym-orange px-3 py-2">Contato</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gym-orange"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-white hover:text-gym-orange block px-3 py-2">Home</a>
              <a href="#about" className="text-white hover:text-gym-orange block px-3 py-2">Sobre</a>
              <a href="#services" className="text-white hover:text-gym-orange block px-3 py-2">Serviços</a>
              <a href="#plans" className="text-white hover:text-gym-orange block px-3 py-2">Planos</a>
              <a href="#schedule" className="text-white hover:text-gym-orange block px-3 py-2">Horários</a>
              <a href="#gallery" className="text-white hover:text-gym-orange block px-3 py-2">Galeria</a>
              <a href="#contact" className="text-white hover:text-gym-orange block px-3 py-2">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Gym training"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              TRANSFORME SEU CORPO NA <span className="text-gym-orange">WONER SHAPE</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Sua jornada para uma vida mais saudável começa aqui
            </p>
            <a
              href="#contact"
              className="bg-gym-orange text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300"
            >
              Comece Agora
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gym-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gym-orange">SOBRE</span> A ACADEMIA
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Dumbbell className="w-12 h-12 text-gym-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Equipamentos Modernos</h3>
              <p className="text-gray-400">Aparelhos de última geração para seu treino</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-gym-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profissionais Qualificados</h3>
              <p className="text-gray-400">Equipe especializada para te orientar</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-gym-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ambiente Acolhedor</h3>
              <p className="text-gray-400">Espaço pensado para seu conforto</p>
            </div>
            <div className="text-center p-6">
              <Trophy className="w-12 h-12 text-gym-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados Garantidos</h3>
              <p className="text-gray-400">Metodologia comprovada de treino</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            NOSSOS <span className="text-gym-orange">SERVIÇOS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gym-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gym-orange">Musculação</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Equipamentos de última geração</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Personal trainers especializados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Programas personalizados</span>
                </li>
              </ul>
            </div>
            <div className="bg-gym-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gym-orange">Aulas Coletivas</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Spinning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Funcional</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Zumba</span>
                </li>
              </ul>
            </div>
            <div className="bg-gym-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gym-orange">Avaliação Física</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Análise de composição corporal</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Medição de percentual de gordura</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                  <span>Planejamento de objetivos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gym-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            NOSSOS <span className="text-gym-orange">PLANOS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gym-orange mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-gym-orange mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block bg-gym-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
                >
                  Começar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gym-orange">HORÁRIOS</span> DE FUNCIONAMENTO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {scheduleData.map((schedule, index) => (
              <div key={index} className="bg-gym-black p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-gym-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{schedule.days}</h3>
                <p className="text-gray-400">{schedule.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gym-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            NOSSA <span className="text-gym-orange">GALERIA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Gym equipment"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Training session"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Gym space"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gym-orange">ENTRE EM</span> CONTATO
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gym-orange mr-4" />
                  <p>Rua da Academia, 123 - Centro</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-gym-orange mr-4" />
                  <p>(00) 1234-5678</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-gym-orange mr-4" />
                  <div>
                    <p>Segunda à Sexta: 06h às 22h</p>
                    <p>Sábado: 08h às 18h</p>
                    <p>Domingo: 08h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gym-orange focus:ring-gym-orange"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gym-orange focus:ring-gym-orange"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-gym-orange focus:ring-gym-orange"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-gym-orange text-white px-4 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gym-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 Hard Shape. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;