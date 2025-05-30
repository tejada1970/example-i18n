# 🌐 Proyecto multilenguaje con Next.js + `next-intl`

Este es un proyecto de ejemplo que implementa **i18n (internacionalización)** en Next.js usando `next-intl`, diseñado para ser una base educativa y funcional. Permite cambiar el idioma mediante rutas como `/en` y `/es`.

> 📚 Incluye una guía completa paso a paso sobre cómo configurar `next-intl`.

---

## 🚀 Características principales

- ✅ Multilenguaje (ES / EN)
- ✅ Basado en la última versión de Next.js con App Router
- ✅ Sin base de datos
- ✅ Proyecto educativo y práctico
- ✅ Componentes traducibles con soporte para Server y Client components

---

## 📘 ¿Qué aprenderás?

* Cómo iniciar un proyecto con la última versión de Next.js desde cero.
* Configurar rutas internacionales (`i18n`) con `next-intl`.
* Cargar archivos de traducción para diferentes idiomas.
* Traducir tanto componentes cliente como servidor.
* Manejar rutas, middleware y estructura de carpetas en proyectos Next.js.

---

## 🔧 Configurar internacionalización paso a paso

Sigue esta guía detallada para implementar `next-intl` desde cero:

📄 [Guía completa de configuración i18n](./docs/i18n-setup.md)

---

## ✅ ¿Prefieres clonar el proyecto ya listo?

Si no deseas configurar todo manualmente, puedes clonar este repositorio basado en *Next.js 14* para ver el proyecto ya funcional:

Asegúrate de tener *Git* instalado en tu sistema. Puedes descargarlo e instalarlo desde [https://git-scm.com/](https://git-scm.com/).

Abre la terminal *Git Bash* y navega a la carpeta *htdocs*:

```bash
cd C:/xampp/htdocs
git clone https://github.com/tejada1970/example-i18n.git
cd example-i18n
npm install
npm run dev
```

Luego, abre [http://localhost:3000/es](http://localhost:3000/es) o [http://localhost:3000/en](http://localhost:3000/en) para ver el sitio en español o inglés.

---

## 📟 Licencia

Este proyecto está licenciado bajo la MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles. Está diseñado con fines educativos y prácticos.

## 📦 Sobre Next.js (base del proyecto)

Este proyecto fue generado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). A continuación, se incluye la documentación estándar de inicio rápido.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
