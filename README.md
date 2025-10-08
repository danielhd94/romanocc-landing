# Romanocc Landing Page

Una landing page moderna y profesional para la aplicación móvil Romanocc, especializada en consulta de leyes y reglamentos de contrataciones públicas. Construida con Next.js, TypeScript y Tailwind CSS, con funcionalidad completa de formulario de contacto y envío de correos.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos modernos
- **Formulario de contacto** con validación
- **API Route** para envío de correos con Nodemailer
- **Responsive design** optimizado para móviles
- **SEO optimizado** con metadatos
- **Validación de formularios** con Zod y React Hook Form

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd romanocc-landing
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp env.example .env.local
```

4. Edita `.env.local` con tus credenciales de email:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password
EMAIL_FROM=tu-email@gmail.com
EMAIL_TO=contacto@romanocc.com
```

## 🔧 Configuración de Email

### Para Gmail:
1. Habilita la verificación en 2 pasos
2. Genera una contraseña de aplicación
3. Usa esa contraseña en `SMTP_PASS`

### Para otros proveedores:
- **Outlook/Hotmail**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **SendGrid**: `smtp.sendgrid.net:587`

## 🚀 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route para el formulario
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
└── components/
    └── ContactForm.tsx           # Componente del formulario
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en Tailwind CSS. Puedes cambiarlos en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6', // Azul principal
      secondary: '#1E40AF', // Azul secundario
    }
  }
}
```

### Contenido
- Edita `src/app/page.tsx` para cambiar el contenido de la landing page
- Modifica `src/components/ContactForm.tsx` para personalizar el formulario

## 📧 API del Formulario

### Endpoint: `POST /api/contact`

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+52 55 1234 5678",
  "subject": "Consulta sobre servicios",
  "message": "Hola, me interesa conocer más sobre sus servicios..."
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente. Te contactaremos pronto."
}
```

**Respuesta de error:**
```json
{
  "success": false,
  "message": "Error al enviar el mensaje",
  "errors": [...]
}
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard
3. Deploy automático en cada push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configura las variables de entorno

### Docker
```bash
docker build -t romanocc-landing .
docker run -p 3000:3000 romanocc-landing
```

## 🔒 Seguridad

- Validación de entrada con Zod
- Sanitización de datos
- Rate limiting (recomendado para producción)
- HTTPS obligatorio en producción

## 📱 Responsive Design

La landing page está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎯 SEO

- Metadatos optimizados
- Open Graph tags
- Twitter Cards
- Sitemap automático
- Robots.txt

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run type-check   # Verificación de tipos
```

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- Email: contacto@romanocc.com
- Teléfono: +52 55 1234 5678

---

Desarrollado con ❤️ por Romanocc