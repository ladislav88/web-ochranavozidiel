# Migrácia SEO – Checklist pre autoalarmy-trencin.sk

## 1. Zoznam všetkých 301 presmerovaní

| Stará URL | Cieľová URL |
|-----------|-------------|
| `/autoalarmy`, `/autoalarmy/` | `/sofistikovane-zabezpecenie` |
| `/tajne-vypinace`, `/tajne-vypinace/` | `/sofistikovane-zabezpecenie` |
| `/zederlock`, `/zederlock/` | `/sofistikovane-zabezpecenie` |
| `/alarm-pre-motorky`, `/alarm-pre-motorky/` | `/sofistikovane-zabezpecenie` |
| `/ukradnute-auto-za-par-sekund`, `/ukradnute-auto-za-par-sekund/` | `/sofistikovane-zabezpecenie` |
| `/deaktivacia-system-start-stop`, `.../` | `/sofistikovane-zabezpecenie` |
| `/telefonne-sady`, `/telefonne-sady/` | `/sofistikovane-zabezpecenie` |
| `/autodiagnostika`, `/autodiagnostika/` | `/sofistikovane-zabezpecenie` |
| `/tempomaty`, `/tempomaty/` | `/sofistikovane-zabezpecenie` |
| `/doplnky-pre-motocykle`, `.../` | `/sofistikovane-zabezpecenie` |
| `/katastrofa-len-3-auta-z-236-s-bezklucovym-pristupom-odolali-zlodejom-co-to-vase` | `/sofistikovane-zabezpecenie` |
| `/medzinarodny-system-conex`, `.../` | `/pasivny-monitoring` |
| `/medzinarodny-system-conex/connex-yellow`, `.../` | `/pasivny-monitoring` |
| `/medzinarodny-system-conex/connex-orange-plus`, `.../` | `/pasivny-monitoring` |
| `/medzinarodny-system-conex/connex-blue-pro`, `.../` | `/pasivny-monitoring` |
| `/how-it-works`, `/how-it-works/` | `/sofistikovane-zabezpecenie` |
| `/contact`, `/contact/` | `/kontakt` |
| `/contact-request`, `/contact-request/` | `/kontakt` |
| `/cena-montaze`, `/cena-montaze/` | `/kontakt` |
| `/zavolajte-mi`, `/zavolajte-mi/` | `/kontakt` |
| `/referencie-2`, `/referencie-od-vas`, `/certifikaty`, `/dielna`, `/nasa-praca`, `/odbornici`, `/videa`, `/caste-otazky`, `/zaujimave-clanky-a-odkazy`, `/generali-sos-partner`, `/obchod`, `/kosik`, `/kontrola-objednavky`, `/moj-ucet` | `/` (homepage) |

---

## 2. Ako otestovať lokálne (curl)

Spustite dev server:
```bash
npm run dev
```

Potom v druhom termináli:

```bash
# Test 301 presmerovania – očakávaný výsledok: HTTP 308 (Next.js používa 308 pre permanent redirects, čo je ekvivalent 301)
curl -I http://localhost:3000/autoalarmy
curl -I http://localhost:3000/autoalarmy/
curl -I http://localhost:3000/cena-montaze
curl -I http://localhost:3000/medzinarodny-system-conex
curl -I http://localhost:3000/tajne-vypinace/
curl -I http://localhost:3000/how-it-works

# Kontrola hlavičky Location
curl -sI http://localhost:3000/autoalarmy | grep -i location

# Sitemap
curl http://localhost:3000/sitemap.xml

# Robots.txt
curl http://localhost:3000/robots.txt

# 404 stránka
curl -I http://localhost:3000/neexistujuca-stranka-xyz
```

---

## 3. Vercel deploy – čo nastaviť

1. **Doména**
   - Vercel Dashboard → Project → Settings → Domains
   - Pridať `www.autoalarmy-trencin.sk` a `autoalarmy-trencin.sk`
   - Nakonfigurovať DNS podľa inštrukcií Vercelu

2. **Environment variables**
   - Settings → Environment Variables
   - Pridať `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (ak používate kontaktný formulár)

3. **Deploy**
   - Po push do repozitára Vercel spraví automatický deploy
   - Alebo: Vercel Dashboard → Deployments → Redeploy

4. **Overenie po deployi**
   - Skontrolovať redirecty na produkčnej doméne:
   ```bash
   curl -I https://www.autoalarmy-trencin.sk/autoalarmy
   curl -I https://www.autoalarmy-trencin.sk/cena-montaze
   ```
   - Skontrolovať `https://www.autoalarmy-trencin.sk/sitemap.xml`
   - Skontrolovať `https://www.autoalarmy-trencin.sk/robots.txt`

---

## 4. Súhrn nových stránok

| URL | Popis |
|-----|-------|
| `/` | Homepage |
| `/sofistikovane-zabezpecenie` | Hlavná služba – sofistikované zabezpečenie |
| `/pasivny-monitoring` | Pasívny monitoring, GPS/GSM |
| `/parkovacie-senzory` | Parkovacie senzory |
| `/kontakt` | Kontakt, cenová ponuka |

---

## 5. Canonical URL a SEO metadata

Každá stránka má nastavené:
- `title` a `meta description` (po slovensky)
- `canonical` URL: `https://www.autoalarmy-trencin.sk/...`
- OpenGraph (og:title, og:description, og:url, og:image)
- Twitter cards
