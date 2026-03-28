# ArgoCD Telepítési Útmutató

## 1. Minikube indítása
```bash
minikube start
```

## 2. ArgoCD telepítése
```bash
# ArgoCD namespace létrehozása
kubectl create namespace argocd

# ArgoCD telepítése
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Várj amíg minden pod elindul
kubectl wait --for=condition=available --timeout=300s deployment/argocd-server -n argocd
```

## 3. ArgoCD elérése
```bash
# Port forwarding
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Alapértelmezett jelszó lekérése
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

## 4. Bejelentkezés
- URL: https://localhost:8080
- Felhasználónév: admin
- Jelszó: (az előző parancs kimenete)

## 5. Alkalmazás deployolása
```bash
kubectl apply -f argocd/application.yaml
```

## 6. Ellenőrzés
```bash
kubectl get pods -n webshop
kubectl get services -n webshop
```
