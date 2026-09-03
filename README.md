# Terra Ignis — web (náhled)

Předběžný náhled webu pro ohnivou show Terra Ignis (Mohelnice).

- **Živá verze:** https://matjucha.github.io/terra-ignis/ (deploy z `main` přes GitHub Actions)
- **Stav obsahu:** texty jsou zatím `lorem ipsum` placeholdery, slouží ke schválení designu a přechodů mezi stránkami.

## Vývoj

```bash
npm ci
npm run dev      # lokální vývoj
npm run lint     # tsc --noEmit
npm run build    # produkční build do dist/
```

Web běží pod subpath `/terra-ignis/` (Vite `base` + `BrowserRouter basename`) —
funguje stejně lokálně i na GitHub Pages.
