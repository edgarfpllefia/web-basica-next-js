# Web Bàsica Next.js — S12–S15

Projecte del mòdul **M0613 - Desenvolupament Web Servidor** (DAW2).  
Web corporativa de l'empresa fictícia **"Serveis Informàtics"** construïda amb Next.js 16 (App Router), Tailwind CSS, PostgreSQL i Prisma.

## 🔗 Enllaç de producció

> _Pendent de deploy_

**Credencials de demo:**

- Email: `admin@demo.local`
- Contrasenya: `demo1234`

---

## 📋 Checkpoints de progrés

### S12 — Base Next.js

- [x] Projecte creat amb `create-next-app` i Next.js 16
- [x] App Router, layouts i convencions bàsiques
- [x] Estructura de carpetes amb route groups `(site)` i `(dashboard)`

### S13 — Web multipàgina

- [x] Rutes públiques: `/`, `/sobre`, `/serveis`, `/contacte`, `/blog`, `/api-demo`
- [x] Layout públic amb navegació i `NavLink` actiu
- [x] Blog amb llista i detall dinàmic (`/blog/[slug]`) i `notFound()`
- [x] Client Component al formulari de contacte (`useState`)
- [x] Fetch al servidor amb `revalidate` a `/api-demo`
- [x] Dashboard amb sidebar (`_components`) i route group `(dashboard)`

### S14 — Persistència amb PostgreSQL i Prisma

- [x] PostgreSQL amb Docker Compose
- [x] Prisma 7 amb `prisma.config.ts` i adapter `@prisma/adapter-pg`
- [x] Model `Post` amb slug, title, excerpt, content
- [x] Blog llegint dades reals de la BD
- [x] Migracions amb `prisma migrate dev`

### S15 — Auth, rols i CRUD

- [x] Model `User` amb rol (`ADMIN` / `EDITOR`) i `passwordHash`
- [x] Camp `imageUrl` i `updatedAt` al model `Post`
- [x] Auth.js (next-auth@beta) amb proveïdor Credentials i JWT
- [x] `proxy.js` protegint `/admin/*` per rol
- [x] API CRUD: `GET/POST /api/admin/posts` i `GET/PATCH/DELETE /api/admin/posts/[id]`
- [x] Pujada d'imatges: `POST /api/admin/upload`
- [x] Pàgines d'admin: llista, crear i editar articles
- [x] Blog públic mostra la imatge de capçalera si existeix
- [x] Seed amb usuari demo (`admin@demo.local` / `demo1234`)

---

## 🛠️ Stack tecnològic

| Tecnologia          | Ús                               |
| ------------------- | -------------------------------- |
| Next.js 16          | Framework fullstack (App Router) |
| React 19            | Interfície d'usuari              |
| Tailwind CSS 4      | Estils utilitaris                |
| Prisma 7            | ORM per a PostgreSQL             |
| PostgreSQL 16       | Base de dades relacional         |
| Auth.js (next-auth) | Autenticació amb JWT             |
| Docker              | Base de dades en local           |

---

## 🚀 Instal·lació i execució en local

### Requisits

- Node.js 20+
- Docker Desktop.

### Passos

```bash
# 1. Clonar el repositori
git clone <url-del-repo>
cd web-basica-next

# 2. Instal·lar dependències
npm install

# 3. Copiar variables d'entorn
cp .env.example .env
# Edita .env amb els teus valors

# 4. Aixecar la base de dades
docker compose up -d

# 5. Aplicar migracions i seed
npx prisma migrate dev
npx prisma db seed

# 6. Arrancar el servidor
npm run dev
```

Obre [http://localhost:3000](http://localhost:3000) al navegador.

---

## 📁 Estructura del projecte

```
src/
  app/
    (site)/          # Zona pública (layout amb menú)
      page.js        # Inici /
      sobre/         # /sobre
      serveis/       # /serveis
      contacte/      # /contacte
      blog/          # /blog i /blog/[slug]
      api-demo/      # /api-demo (fetch al servidor)
      login/         # /login
    (dashboard)/     # Dashboard intern
      dashboard/     # /dashboard i /dashboard/settings
    admin/           # Backoffice (protegit per proxy.js)
      blog/          # /admin/blog (llista, crear, editar)
    api/
      admin/
        posts/       # CRUD d'articles
        upload/      # Pujada d'imatges
      auth/          # Auth.js handlers
  auth.js            # Configuració Auth.js
  proxy.js           # Protecció de rutes /admin/*
  lib/
    prisma.js        # Client Prisma singleton
    api-auth.js      # Helper requireEditor()
prisma/
  schema.prisma      # Models User i Post
  seed.js            # Usuari admin de demo
  migrations/        # Historial de migracions
```
