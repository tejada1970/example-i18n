
# 🌍 Configuración paso a paso de i18n con Next.js y `next-intl`

Este documento describe cómo crear desde cero una aplicación multilenguaje utilizando Next.js, TypeScript y la biblioteca `next-intl`. Sigue estos pasos para configurar correctamente tu entorno y traducir contenido de forma eficiente.

---

## 📦 Requisitos previos

* Node.js (versión recomendada: >=18)-[https://nodejs.org/es](https://nodejs.org/es)
* Servidor local (recomendado-XAMPP)-[https://www.apachefriends.org/es/index.html](https://www.apachefriends.org/es/index.html)
* Editor de código (recomendado: Visual Studio Code)-[https://code.visualstudio.com/](https://code.visualstudio.com/)
* Git-[https://git-scm.com/](https://git-scm.com/).
* Conexión a internet

---

### 🚀 Crear un nuevo proyecto con la última versión de Next.js

#### Abre la terminal y navega a la carpeta donde quieras crear el proyecto:

```bash
cd C:/xampp/htdocs
```

#### Crea el proyecto con `create-next-app`:

```bash
npx create-next-app@latest example-i18n
```

#### Durante la configuración:

- Presiona **Enter** en todas las opciones para aceptar la configuración recomendada e instalar todas las dependencias: **TypeScript**, **ESLint**, **Tailwind CSS**, **src**, **App Router**, **Turbopack** y **import alias**

- Cuando te pregunte si deseas personalizar el **import alias** responde **Yes** y luego presiona **Enter** para aceptar la sugerencia por defecto **"@/"**


#### Accede a la carpeta del proyecto:

```bash
cd example-i18n
```

---

## 🧩 Instalación de `next-intl`

```bash
npm install next-intl
```

---

## ✅ Abre el proyecto con **Visual Studio Code**:

```bash
code .
```

---

## 🔌 Extensiones recomendadas para **Visual Studio Code** en este proyecto:

- Spanish Language Pack for Visual de **Microsoft** — Perfecto si prefieres la interfaz en español.

- Pretty TypeScript Errors de **yoavbls** — Muy buena para ver errores TS de forma más clara.

- Tailwind CSS IntelliSense de **Tailwind Labs** — Fundamental para trabajar con Tailwind CSS, con autocompletado y sugerencias.

- ES7+ React/Redux/React-Native snippets de **dsznajder** — Muy útil para escribir componentes y hooks de React rápido.

- Prettier — Code formatter de **Prettier** — Para mantener un código limpio y consistente con formato automático.

---

📂 Estructura del proyecto (resumen)

```plaintext
/messages
  ├── en.json
  └── es.json
/src
  ├── app
  │   ├── [locale]
  │   │   ├── page.tsx
  │   │   ├── layout.tsx
  │   │   └── not-found.tsx
  ├── components
  │   └── Header.tsx
  ├── middleware.ts
  └── i18n.ts
```

---

## 🗂 Estructura de archivos

### 1. Crear carpeta `messages/` en la raíz del proyecto:

```plaintext
/messages
  ├── en.json
  └── es.json
```

### 2. Contenido de los archivos:

**en.json**

```json
{
  "Home": {
    "text": "Hello world!"
  },
  "Header": {
    "text": "Header in English"
  }
}
```

**es.json**

```json
{
  "Home": {
    "text": "Hola mundo!"
  },
  "Header": {
    "text": "Header en Español"
  }
}
```

---

## 🧰 Configuración del proyecto

### 1. Modifica `next.config.mjs`:

```ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
```

---

### 2. Crea `src/i18n.ts`:

```ts
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'es'];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

---

### 3. Crea `src/middleware.ts`:

```ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'es'
});

export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
```

---

## 🧱 Estructura del `app` router

### 1. Crea carpeta `src/app/[locale]/`

Mueve `layout.tsx` y `page.tsx` dentro de esta nueva carpeta.

### 2. Modifica `layout.tsx`:

```tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Example i18n with Next.js 14 and TS",
  description: "Example i18n with Next.js 14 and TS",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### 3. Modifica `page.tsx`:

```tsx
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="min-h-screen flex justify-center items-center text-2xl">
      <h1>{t('text')}</h1>
    </div>
  );
}
```

---

## 🧩 Crear y traducir componentes

### 1. Crea `src/components/Header.tsx`

```tsx
"use client"
import {useTranslations} from 'next-intl';

const Header = () => {
  const t = useTranslations('Header');
  return (
    <header>
      <nav>
        <ul>
          <li className='text-red-600 pb-4'>
            {t('text')}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
```t default Header;
```

> ⚠️ `useTranslations` sólo funciona si está dentro de un `NextIntlClientProvider`.

### 2. Envolver componente con proveedor en `page.tsx`:

```tsx
import {useTranslations, NextIntlClientProvider, useMessages} from 'next-intl';
import Header from '@/components/Header';

export default function Home() {
  const t = useTranslations('Home');
  const messages = useMessages();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-2xl">
      <NextIntlClientProvider messages={messages}>
        <Header />
      </NextIntlClientProvider>
      <h1>{t('text')}</h1>
    </div>
  );
}
```

---

## 📄 Página de error 404 personalizada

Crea `src/app/[locale]/not-found.tsx`:

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex gap-4 justify-center items-center text-xl">
      <h2>Page not found:</h2>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  );
}
```

---

## 🧪 Ejecutar el proyecto

```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000/es](http://localhost:3000/es) o `/en` para probar los idiomas.

---

¡Espero que esta guía te sea útil para aprender e implementar proyectos multilenguaje con Next.js!

