# 🌿 Esencia — Quiosco de Pedidos

Aplicación web de quiosco/punto de venta construida con **Next.js 14**, **TypeScript**, **Prisma ORM** y **Tailwind CSS**. Permite gestionar pedidos de manera intuitiva desde una interfaz moderna y responsiva.

---

## 🚀 Tecnologías

| Tecnología | Versión |
|---|---|
| [Next.js](https://nextjs.org/) | 14.2.33 |
| [React](https://react.dev/) | 18 |
| [TypeScript](https://www.typescriptlang.org/) | ^5 |
| [Prisma ORM](https://www.prisma.io/) | ^6.19.0 |
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.1 |

---

## 📁 Estructura del proyecto

```
esencia-next/
├── app/                  # Rutas y páginas (App Router de Next.js)
├── components/
│   └── order/            # Componentes relacionados al flujo de pedidos
├── prisma/               # Schema y migraciones de la base de datos
├── src/
│   └── generated/prisma/ # Cliente de Prisma generado
├── .env                  # Variables de entorno
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Instalación y configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/GuadalupeHdez12/Esencia-next.git
cd Esencia-next
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura las variables de entorno

Crea un archivo `.env` en la raíz del proyecto con tu cadena de conexión a la base de datos:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/esencia_db"
```

### 4. Inicializa la base de datos

```bash
npx prisma migrate dev
npx prisma generate
```

---

## 🧑‍💻 Comandos disponibles

```bash
# Inicia el servidor de desarrollo
npm run dev

# Compila para producción
npm run build

# Inicia el servidor en modo producción
npm start

# Ejecuta el linter
npm run lint
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## 🗄️ Base de datos

El proyecto usa **Prisma ORM** para gestionar la base de datos. El schema se encuentra en `prisma/schema.prisma`.

Comandos útiles de Prisma:

```bash
# Visualiza la base de datos en el navegador
npx prisma studio

# Aplica cambios al schema
npx prisma migrate dev --name nombre_migracion

# Regenera el cliente de Prisma
npx prisma generate
```

---

## 📦 Despliegue

La forma más sencilla de desplegar esta aplicación es usando [Vercel](https://vercel.com/):

1. Conecta tu repositorio en [vercel.com/new](https://vercel.com/new)
2. Agrega las variables de entorno necesarias (`DATABASE_URL`, etc.)
3. Vercel detectará automáticamente que es un proyecto Next.js y lo configurará

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más opciones.

---

## 👩‍💻 Autora

**Guadalupe Hernández**  
[@GuadalupeHdez12](https://github.com/GuadalupeHdez12)
