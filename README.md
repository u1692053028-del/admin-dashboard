# Discord Punishments Admin Dashboard

Admin dashboard pro správu trestů na Discord serveru. Zobrazuje warny, muty, bany a kicky v přehledné tabulce.

## Funkce

- 📊 Dashboard se statistikou trestů
- 🔍 Hledání hráčů
- 📋 Tabulka se všemi tresty
- 🎨 Moderní design s tmavým motivem

## Struktura

```
.
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── dist/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## Rychlý start

1. Klonuj úložiště
2. Otevři `dist/index.html` v prohlížeči
3. Data jsou zatím v `script.js` - můžeš je propojit s API

## Přizpůsobení

### Přidání nového trestu

V `script.js` přidej do pole `data`:

```javascript
{
  id: "discord_id",
  user: "Jméno hráče",
  type: "Warn|Ban|Mute|Kick",
  reason: "Důvod trestu",
  mod: "Jméno moderátora",
  date: "DD.MM.YYYY"
}
```

## Licence

MIT License - viz `LICENSE.txt`
