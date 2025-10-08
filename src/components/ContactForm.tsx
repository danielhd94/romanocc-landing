'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Schema de validación
const contactSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().optional(),
    subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export default function ContactForm() {
    const [formStatus, setFormStatus] = useState<FormStatus>({ type: 'idle', message: '' });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setFormStatus({ type: 'loading', message: 'Enviando mensaje...' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setFormStatus({
                    type: 'success',
                    message: result.message || 'Mensaje enviado correctamente. Te contactaremos pronto.'
                });
                reset();
            } else {
                setFormStatus({
                    type: 'error',
                    message: result.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setFormStatus({
                type: 'error',
                message: 'Error de conexión. Por favor, verifica tu internet e intenta nuevamente.'
            });
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Contáctanos
                </h2>
                <p className="text-gray-600 text-lg">
                    ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nombre */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Nombre completo *
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline w-4 h-4 mr-2" />
                        Email *
                    </label>
                    <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="tu@email.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                {/* Teléfono */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline w-4 h-4 mr-2" />
                        Teléfono (opcional)
                    </label>
                    <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="+52 55 1234 5678"
                    />
                </div>

                {/* Asunto */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                    </label>
                    <input
                        {...register('subject')}
                        type="text"
                        id="subject"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${errors.subject ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="¿En qué podemos ayudarte?"
                    />
                    {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                </div>

                {/* Mensaje */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="inline w-4 h-4 mr-2" />
                        Mensaje *
                    </label>
                    <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                </div>

                {/* Estado del formulario */}
                {formStatus.type !== 'idle' && (
                    <div className={`p-4 rounded-lg flex items-center ${formStatus.type === 'success'
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : formStatus.type === 'error'
                                ? 'bg-red-50 text-red-800 border border-red-200'
                                : 'bg-orange-50 text-orange-800 border border-orange-200'
                        }`}>
                        {formStatus.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
                        {formStatus.type === 'error' && <AlertCircle className="w-5 h-5 mr-2" />}
                        {formStatus.type === 'loading' && (
                            <div className="w-5 h-5 mr-2 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
                        )}
                        <span className="text-sm font-medium">{formStatus.message}</span>
                    </div>
                )}

                {/* Botón de envío */}
                <button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                    {formStatus.type === 'loading' ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5 mr-2" />
                            Enviar mensaje
                        </>
                    )}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                    Al enviar este formulario, aceptas que procesemos tu información de contacto
                    para responder a tu consulta.
                </p>
            </div>
        </div>
    );
}
