import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Romanocc</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-gray-900 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-gray-900 transition-colors">
                Funcionalidades
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Consulta Legal
            <span className="block text-orange-600">Inteligente</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La aplicación móvil que revoluciona la consulta de leyes y reglamentos de contrataciones públicas.
            Búsqueda rápida, foro de expertos y consultas gratuitas para abogados y profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Descargar App
        </a>
        <a
              href="#servicios"
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Ver Funcionalidades
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades de la App
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas especializadas para profesionales del derecho y contrataciones públicas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Búsqueda Inteligente</h4>
              <p className="text-gray-600">
                Busca en tiempo real entre leyes y reglamentos de contrataciones públicas. 
                Encuentra artículos específicos con resaltado de términos clave.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Foro de Expertos</h4>
              <p className="text-gray-600">
                Comunidad de abogados y profesionales especializados en contrataciones públicas. 
                Comparte dudas, casos y mejores prácticas.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Consultas Gratuitas</h4>
              <p className="text-gray-600">
                Obtén respuestas directas de expertos a través de WhatsApp. 
                Consultas gratuitas para resolver tus dudas legales específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Necesitas ayuda legal?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descarga la app o contáctanos para consultas especializadas en contrataciones públicas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                  Información de Contacto
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Email</h5>
                      <p className="text-gray-600">contacto@romanocc.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Teléfono</h5>
                      <p className="text-gray-600">+52 55 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Ubicación</h5>
                      <p className="text-gray-600">Ciudad de México, México</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Horario</h5>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">¿Por qué elegir Romanocc?</h5>
                <ul className="text-gray-600 space-y-2">
                  <li>• Búsqueda instantánea en leyes y reglamentos</li>
                  <li>• Foro especializado con expertos</li>
                  <li>• Consultas gratuitas vía WhatsApp</li>
                  <li>• Actualizaciones constantes del marco legal</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-semibold mb-4">Romanocc</h5>
              <p className="text-gray-400">
                La aplicación móvil especializada en consulta de leyes y reglamentos de contrataciones públicas.
                Herramientas profesionales para abogados y especialistas.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Funcionalidades</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Búsqueda Inteligente</li>
                <li>Foro de Expertos</li>
                <li>Consultas Gratuitas</li>
                <li>Actualizaciones Legales</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <ul className="space-y-2 text-gray-400">
                <li>contacto@romanocc.com</li>
                <li>+52 55 1234 5678</li>
                <li>Ciudad de México, México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Romanocc. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
