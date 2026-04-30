# Webshop Team

Full-stack webshop alkalmazás - Angular 21, ASP.NET 10, MongoDB 8, Docker, Kubernetes, ArgoCD.

## Csapat

| Feladat | Leírás |
|---------|--------|
| DevOps & Setup | Dev Container, Docker, CI/CD, Kubernetes, ArgoCD |
| Backend | ASP.NET 10 Web API, MongoDB |
| Frontend | Angular 21, Bootstrap |
| MCP & Docs | MCP szerver, Dokumentáció |

## Csapatmunka

### Hogyan dolgozz a projekten?

#### 1. Klónozd le a repót
```bash
git clone https://github.com/AlpacaLaser/webshop-team.git
cd webshop-team
```

#### 2. Váltj a saját ágadra
```bash
# Backend fejlesztő:
git checkout feature/backend

# Frontend fejlesztő:
git checkout feature/frontend

# MCP fejlesztő:
git checkout feature/mcp
```

#### 3. Dolgozz a saját mappádban
```
backend/     → Backend fejlesztő
frontend/    → Frontend fejlesztő
mcp-server/  → MCP fejlesztő
```

#### 4. Commitolj rendszeresen
```bash
git add .
git commit -m "feat: leírás mit csináltál"
git push origin feature/backend
```

#### 5. Pull Request nyitása
- GitHub-on: **Compare & pull request**
- Leírd mit csináltál
- Várj review-ra

### Commit üzenetek konvenciója
```
feat:  → új funkció
fix:   → hibajavítás
docs:  → dokumentáció
chore: → konfiguráció, beállítások
```
## Architektúra

- frontend/ → Angular 21 (port: 4200)
- backend/ → ASP.NET 10 Web API (port: 5151)
- mcp-server/ → Node.js MCP szerver (port: 3000)
- mongodb → MongoDB 8 (port: 27017)

## Előkövetelmények

### Docker Compose telepítéshez
| Eszköz | Letöltés | Leírás |
|--------|----------|--------|
| Docker Desktop | [letöltés](https://www.docker.com/products/docker-desktop/) | Konténerek futtatásához |
| Git | [letöltés](https://git-scm.com/downloads) | Verziókezelés |

### Fejlesztői környezethez (Dev Container)
| Eszköz | Letöltés | Leírás |
|--------|----------|--------|
| Docker Desktop | [letöltés](https://www.docker.com/products/docker-desktop/) | Konténerek futtatásához |
| VS Code | [letöltés](https://code.visualstudio.com/) | Fejlesztői editor |
| Dev Containers extension | [letöltés](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) | Dev Container támogatás |
| Git | [letöltés](https://git-scm.com/downloads) | Verziókezelés |

### Kubernetes telepítéshez
| Eszköz | Letöltés | Leírás |
|--------|----------|--------|
| Docker Desktop | [letöltés](https://www.docker.com/products/docker-desktop/) | Konténerek futtatásához |
| Git | [letöltés](https://git-scm.com/downloads) | Verziókezelés |
| kubectl | [letöltés](https://kubernetes.io/docs/tasks/tools/) | Kubernetes CLI |
| minikube | [letöltés](https://minikube.sigs.k8s.io/docs/start/) | Helyi Kubernetes cluster |
## Az alkalmazás telepítése

### Docker Compose-zal (ajánlott)

#### 1. Repo klónozása
```bash
git clone https://github.com/AlpacaLaser/webshop.git
cd webshop
```

#### 2. Alkalmazás indítása
```bash
docker-compose up -d
```

#### 3. Megnyitás böngészőben
- Frontend: http://localhost:80

---

### Fejlesztői módban (Dev Container)

#### 1. Repo klónozása
```bash
git clone https://github.com/AlpacaLaser/webshop.git
cd webshop
```

#### 2. Dev Container indítása
- VS Code-ban: **Ctrl+Shift+P** → `Dev Containers: Reopen in Container`

#### 3. Alkalmazás indítása
```bash
# MongoDB + Backend
docker-compose up -d mongodb backend

# Frontend (új terminálban)
cd frontend
ng serve --host 0.0.0.0 --proxy-config proxy.conf.json
```

#### 4. Megnyitás böngészőben
- Frontend: http://localhost:80
- OpenAPI - JSON: http://localhost:5107/openapi/v1.json
  * Dev Containerből működik jelenleg, hogy ne legyen publikusan elérhető. A json tartalma vizualizálható a https://editor.swagger.io/ oldalon.
