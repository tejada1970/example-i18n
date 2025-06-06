# 🌍 Configuración paso a paso de i18n con Next.js y `next-intl`

Este documento describe cómo crear desde cero una aplicación multilenguaje utilizando Next.js, TypeScript y la biblioteca `next-intl`. Sigue estos pasos para configurar correctamente tu entorno y traducir contenido de forma eficiente.

---

## 📦 Requisitos previos

* Conexión a internet
* Servidor local (recomendado-XAMPP)-[https://www.apachefriends.org/es/index.html](https://www.apachefriends.org/es/index.html)
* Editor de código (recomendado: Visual Studio Code)-[https://code.visualstudio.com/](https://code.visualstudio.com/)
* Git-[https://git-scm.com/](https://git-scm.com/).
* Node.js (versión recomendada: >=20)-[https://nodejs.org/es](https://nodejs.org/es) o descargar con NVM (recomendado)

---

## 🧰 Instalación de Node.js con NVM en Windows

### ✅ Descargar NVM para Windows

* Visita [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
* Descarga el archivo: `Assets/nvm-setup.exe` correspondiente a la última versión.
* Ejecuta el instalador y sigue los pasos. Puedes dejar las opciones por defecto (ruta de instalación, etc.).

---

### ✅ Verificar que NVM se ha instalado correctamente

> 💡 Se recomienda instalar **Git**. Visita la página oficial: [https://git-scm.com/](https://git-scm.com/)

* Abre una terminal (PowerShell o Git Bash) y escribe:

  ```bash
  nvm version
  ```

* Deberías ver la versión de NVM instalada, por ejemplo:

  ```plaintext
  1.1.12
  ```

---

## 📦 Instalar y gestionar versiones de Node.js

### ✅ Instalar versiones específicas

Puedes instalar múltiples versiones de Node.js según las necesidades del proyecto. Por ejemplo:

* Para Next.js 15, se recomienda: 

  ```bash
  nvm install 20.13.1
  ```

* Si necesitas una versión anterior:

  ```bash
  nvm install 18.17.0
  ```

---

### ✅ Cambiar de versión según el proyecto

* Para activar una versión específica antes de iniciar el desarrollo:

  ```bash
  nvm use 20.13.1
  ```

* O si necesitas una versión anterior:

  ```bash
  nvm use 18.17.0
  ```

* Puedes verificar cuál versión está activa con:

  ```bash
  node -v
  ```

---

### ✅ Ver versiones instaladas

* Para ver una lista las versiones instaladas en tu sistema, ejecuta:

  ```bash
  nvm list
  ```

* El resultado será similar a:

  ```plaintext
  * 20.13.1 (default)
  18.17.0
  ```

* El asterisco `*` indica qué versión está activa actualmente.

---

## 🚀 Crear un nuevo proyecto con la última versión de Next.js

#### Abre la terminal y navega a la carpeta donde quieras crear el proyecto, por ejemplo:

```bash
cd C:/xampp/htdocs
```

#### Crea un nuevo proyecto con `create-next-app@latest`:

```bash
npx create-next-app@latest example-i18n
```

#### Durante la configuración:

- Presiona **Enter** en todas las opciones para aceptar la configuración recomendada e instalar todas las dependencias: **TypeScript**, **ESLint**, **Tailwind CSS**, **src**, **App Router**, **Turbopack** y **import alias**

- Cuando te pregunte si deseas personalizar el **import alias** responde **Yes** y luego presiona **Enter** para aceptar la sugerencia por defecto **@/**


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

## ✅ Abre el proyecto con VS Code:

```bash
code .
```

---

## 🔌 Extensiones recomendadas en VS Code para este proyecto:

- Spanish Language Pack for Visual de **Microsoft** — Perfecto si prefieres la interfaz en español.

- Pretty TypeScript Errors de **yoavbls** — Muy buena para ver errores TS de forma más clara.

- Tailwind CSS IntelliSense de **Tailwind Labs** — Fundamental para trabajar con Tailwind CSS, con autocompletado y sugerencias.

- ES7+ React/Redux/React-Native snippets de **dsznajder** — Muy útil para escribir componentes y hooks de React rápido.

- Prettier — Code formatter de **Prettier** — Para mantener un código limpio y consistente con formato automático.

---

## 🖥️ Configurar Git Bash como terminal predeterminada en VS Code

Para evitar errores como los de PowerShell (por ejemplo, "la ejecución de scripts está deshabilitada"), puedes usar Git Bash como terminal por defecto en Visual Studio Code.

### 🧪 ¿Qué es Git Bash?

Git Bash es una terminal que simula un entorno Linux (Bash) en Windows. Permite usar comandos como `ls`, `cd`, `touch`, `rm`, etc. Esto es útil para trabajar con herramientas de desarrollo modernas como Laravel, Node.js y Docker desde un entorno más familiar para desarrolladores que vienen de Linux/macOS.

### ✅ Pasos para configurarla:

1. Abre **Visual Studio Code**.

2. Abre la configuración con:

   ```
   Ctrl + ,
   ```

   O manualmente:

   ```
   Archivo → Preferencias → Configuración
   ```

3. En la barra de búsqueda de configuración escribe:

   ```
   terminal predeterminada
   ```

4. Haz clic en **Edit in settings.json** o o **Editar en settings.json**

5. Dentro del archivo `settings.json`, agrega las siguientes líneas al final (sin borrar lo que ya existe):

```json
{
  ...

  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "source": "Git Bash"
    }
  }
}
```

⚠️ Asegúrate de no eliminar otras configuraciones existentes en el archivo JSON.

Guarda los cambios (Ctrl + S), luego cierra y vuelve a abrir VS Code. Cuando abras una nueva terminal (Ctrl + ñ), debería abrirse con Git Bash automáticamente.

### 💡 Resultado:

A partir de ahora, al abrir la terminal (`Ctrl + ñ`) en VS Code, se usará Git Bash por defecto. Esto evita problemas con la ejecución de scripts y te brinda una experiencia más fluida al trabajar con Node.js, Laravel, y otros entornos de desarrollo.

---

## 🧪 Ejecuta el proyecto:

```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para comprobar que Next.js funciona y se visualiza correctamente.

---

## 📘 Consulta la documentación

Puedes consultar la documentación oficial del proceso implementado en esta guía aquí:

🔗 [https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing)

---

📂 Estructura del proyecto (resumen)

```plaintext
├── messages
│   ├── en.json
│   └── ...
├── next.config.ts
└── src
    ├── i18n
    │   ├── routing.ts
    │   ├── navigation.ts
    │   └── request.ts
    ├── middleware.ts
    └── app
        └── [locale]
            ├── layout.tsx
            └── page.tsx
```

---

## 🗂 Estructura de archivos

### 1. Crea la carpeta `messages/` en la raíz del proyecto:

```plaintext
/messages
  ├── en.json
  └── es.json
```

### 2. Contenido de los archivos:

`messages/en.json`:

```json
{
  "Home": {
    "text": "Hello world!"
  },
  "Header": {
    "text": "Header in English"
  },
  "Metadata": {
    "title": "Example i18n with Next.js, next-intl and TS",
    "description": "A sample multilingual app using Next.js, next-intl and TypeScript."
  }
}
```

`messages/es.json`:

```json
{
  "Home": {
    "text": "Hola mundo!"
  },
  "Header": {
    "text": "Header en Español"
  },
  "Metadata": {
    "title": "Ejemplo i18n con Next.js, next-intl y TS",
    "description": "Una aplicación de ejemplo multilingüe usando Next.js, next-intl y TypeScript."
  }
}
```

---

## 🧰 Configuración del proyecto

### 1. Modifica `next.config.ts`:

```ts
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
```

---

### 2. Crea `src/i18n/routing.ts`:

```ts
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
```

---

### 3. Crea `src/i18n/navigation.ts`:

```ts
import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';
 
// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
```

---

### 4. Crea `src/middleware.ts`:

```ts
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
```

---

### 5. Crea `src/i18n/request.ts`:

```ts
import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
```

---

## 🧱 Estructura del `app` router

### 1. Crea carpeta `src/app/[locale]/`:

Mueve `layout.tsx` y `page.tsx` dentro de esta nueva carpeta.

### 2. Modifica `layout.tsx`:

```tsx
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type {Metadata} from 'next';
import '@/app/globals.css';

export async function generateMetadata({
  params
}: {
   params: Promise<{locale: string}>;
}): Promise<Metadata> {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title'),
    description: t('description')
  };
}
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
   params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className='flex-full'>
        <div className='card'>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
```

---

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

En el caso de componentes asincrónicos `page.tsx`, puedes utilizar la función getTranslations en espera:

```tsx
import {getTranslations} from 'next-intl/server';
 
export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
```

---

## 🧩 Crear y traducir componentes

### 1. Crea `src/components/Header.tsx`:

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
```

---

> ⚠️ `useTranslations` sólo funciona si está dentro de un `NextIntlClientProvider`.

---

### 2. Envolver componente con proveedor en `page.tsx`:

```tsx
import {useTranslations, NextIntlClientProvider, useMessages} from 'next-intl';
import Header from '@/components/Header';

export default function Home() {
  const t = useTranslations('Home');
  const messages = useMessages();

  return (
    <div>
      <NextIntlClientProvider messages={messages}>
        <Header />
      </NextIntlClientProvider>
      <h1>{t('text')}</h1>
    </div>
  );
}
```

---

#### 🎨 Archivo `globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

@layer base {
  h1, h2 {
    @apply text-gray-700;
  }
  .flex-full {
    @apply min-h-screen flex justify-center items-center;
  }
  .card {
    @apply flex justify-between items-center gap-3 max-w-2xl text-lg bg-white px-4 py-10 sm:p-14 rounded-lg shadow-lg shadow-slate-700 text-center border border-red-600 mx-2;
  }
}
```

---

Abre tu navegador en [http://localhost:3000/es](http://localhost:3000/es) o `/en` para probar los idiomas.

---

¡Espero que esta guía te sea útil para aprender e implementar proyectos multilenguaje con Next.js!
