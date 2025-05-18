import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Here would go the logic to send the form data
      alert('Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section id="contacto" className="py-16 px-4 bg-cream-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 relative">
          <span className="relative z-10">Contáctanos</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-primary-500"></span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="font-display text-2xl text-neutral-800 mb-6">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-body text-neutral-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all ${
                    errors.name ? 'border-error-500' : 'border-neutral-300'
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block font-body text-neutral-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all ${
                    errors.email ? 'border-error-500' : 'border-neutral-300'
                  }`}
                  placeholder="Tu email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block font-body text-neutral-700 mb-1">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-body text-neutral-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all ${
                    errors.message ? 'border-error-500' : 'border-neutral-300'
                  }`}
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-body px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
              <h3 className="font-display text-2xl text-neutral-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-neutral-800">Dirección</h4>
                    <p className="font-body text-neutral-600">Av. Constitución 1500, Centro, 64000</p>
                    <p className="font-body text-neutral-600">Monterrey, Nuevo León, México</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-neutral-800">Teléfono</h4>
                    <p className="font-body text-neutral-600">+52 (81) 1234 5678</p>
                    <p className="font-body text-neutral-600">Lun - Sáb: 9:00 - 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-neutral-800">Email</h4>
                    <p className="font-body text-neutral-600">info@angiepasteleria.com</p>
                    <p className="font-body text-neutral-600">ventas@angiepasteleria.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5534635854066!2d-100.31991492394006!3d25.6607724138347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be3975dbea9b%3A0x97cf4d835f8928c0!2sAv.%20Constituci%C3%B3n%2C%20Monterrey%2C%20Nuevo%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1698789012345!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Ubicación de Angie Pastelería"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};