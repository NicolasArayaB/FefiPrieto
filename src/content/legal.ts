export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  description: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy = {
  title: "Política de privacidad",
  description:
    "Conoce cómo Fernanda Prieto trata los datos personales compartidos a través de este sitio.",
  updatedAt: "1 de septiembre de 2026",
  intro:
    "Esta política explica cómo se tratan los datos que decides compartir al ponerte en contacto con Fernanda Prieto desde este sitio.",
  sections: [
    {
      title: "Datos que puedes compartir",
      paragraphs: [
        "Cuando abres un enlace de contacto por correo, eliges qué información enviar. Puede incluir tu nombre, dirección de correo, consulta y cualquier otro dato que decidas incorporar en tu mensaje.",
      ],
    },
    {
      title: "Para qué se usan",
      paragraphs: [
        "Los datos se utilizan únicamente para responder tu consulta, coordinar una posible asesoría y dar continuidad a la conversación que inicies.",
        "No se usan para campañas comerciales ajenas a tu consulta sin tu autorización.",
      ],
    },
    {
      title: "Medición del sitio",
      paragraphs: [
        "Con tu consentimiento, utilizamos PostHog para comprender el uso general del sitio. Esta medición puede tratar datos técnicos y de navegación, como páginas visitadas, origen de la visita, interacciones necesarias para medir una consulta, tipo de dispositivo, navegador, dirección IP e información de rendimiento.",
        "No enviamos a PostHog el contenido de los correos que decides enviar ni utilizamos esta medición para publicidad personalizada.",
      ],
    },
    {
      title: "Tus solicitudes",
      paragraphs: [
        "Puedes solicitar acceso, corrección o eliminación de los datos que hayas compartido escribiendo a contacto@fernandaprieto.cl. También puedes pedir que no se utilicen para futuros contactos.",
      ],
    },
    {
      title: "Cookies y retiro del consentimiento",
      paragraphs: [
        "Puedes aceptar o rechazar las cookies analíticas cuando se muestran al visitar el sitio. También puedes cambiar tu decisión en cualquier momento desde el enlace “Gestionar cookies” del pie de página.",
        "La medición solo se activa después de tu aceptación. Si retiras tu consentimiento, se detiene la captura futura desde este navegador.",
      ],
    },
    {
      title: "Cambios a esta política",
      paragraphs: [
        "Esta política puede actualizarse si cambia la forma de tratar datos o las herramientas utilizadas. La fecha de actualización muestra la versión vigente.",
      ],
    },
  ],
} satisfies LegalDocument;

export const termsAndConditions = {
  title: "Términos y condiciones",
  description: "Condiciones de uso del sitio web de Fernanda Prieto.",
  updatedAt: "1 de septiembre de 2026",
  intro:
    "Estos términos describen el uso informativo de este sitio y la forma de iniciar una consulta con Fernanda Prieto.",
  sections: [
    {
      title: "Uso del sitio",
      paragraphs: [
        "El contenido de este sitio es informativo. Su objetivo es explicar la propuesta, el enfoque y los servicios de asesoría de imagen de Fernanda Prieto.",
        "No constituye una oferta vinculante, diagnóstico psicológico ni reemplaza la evaluación profesional que pueda corresponder a cada caso.",
      ],
    },
    {
      title: "Consultas y servicios",
      paragraphs: [
        "Una consulta enviada por correo no confirma una reserva ni la contratación de un servicio. La disponibilidad, alcance, modalidad y condiciones de cada proceso se confirman directamente por correo.",
      ],
    },
    {
      title: "Propiedad intelectual",
      paragraphs: [
        "Los textos, imágenes, identidad visual y demás contenidos del sitio pertenecen a Fernanda Prieto o se utilizan con la autorización correspondiente. No pueden reproducirse o reutilizarse sin autorización previa.",
      ],
    },
    {
      title: "Enlaces externos y cambios",
      paragraphs: [
        "Los enlaces a redes sociales o servicios externos están sujetos a las políticas de esas plataformas. Estos términos pueden actualizarse cuando cambie el sitio o la forma de prestar los servicios.",
      ],
    },
  ],
} satisfies LegalDocument;
