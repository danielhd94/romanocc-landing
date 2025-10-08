import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Schema de validación para el formulario
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar los datos del formulario
    const validatedData = contactSchema.parse(body);

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de contacto: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${
              validatedData.phone
                ? `<p><strong>Teléfono:</strong> ${validatedData.phone}</p>`
                : ""
            }
            <p><strong>Asunto:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #333;">${validatedData.message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>Este mensaje fue enviado desde el formulario de contacto de Romanocc Landing Page.</p>
            <p>Fecha: ${new Date().toLocaleString("es-ES", {
              timeZone: "America/Mexico_City",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</p>
          </div>
        </div>
      `,
      text: `
        Nuevo mensaje de contacto
        
        Nombre: ${validatedData.name}
        Email: ${validatedData.email}
        ${validatedData.phone ? `Teléfono: ${validatedData.phone}` : ""}
        Asunto: ${validatedData.subject}
        
        Mensaje:
        ${validatedData.message}
        
        Enviado desde Romanocc Landing Page
        Fecha: ${new Date().toLocaleString("es-ES", {
          timeZone: "America/Mexico_City",
        })}
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente. Te contactaremos pronto.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Datos del formulario inválidos",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Error interno del servidor. Por favor, intenta nuevamente.",
      },
      { status: 500 }
    );
  }
}
