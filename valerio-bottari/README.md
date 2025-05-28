# ✅ Valerio Bottari - Todo App con Angular

Ciao! Questo è il mio progetto personale: una **Todo App moderna**, sviluppata con **Angular 18** in modalità standalone. L'ho creata per mettere in pratica i concetti core del framework e migliorare la mia organizzazione quotidiana.

## 🚀 Come si usa

Per provarla:

1. Assicurati di avere Node.js, npm e Angular CLI installati.
2. Clona il progetto, installa le dipendenze e avvia con `ng serve`.
3. Apri il browser su `http://localhost:4200`.

## 🔧 Com'è fatta

Ho usato un’architettura modulare con tre componenti principali:

- **AppComponent** → gestisce tutto
- **AddTodoComponent** → per aggiungere attività
- **TodoListComponent** → per visualizzarle e gestirle

# 📁 Struttura del Progetto - Todo App Angular

```text
valerio-bottari/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── add-todo/
│   │   │   │   └── add-todo.component.ts
│   │   │   └── todo-list/
│   │   │       └── todo-list.component.ts
│   │   ├── models/
│   │   │   └── todo.model.ts
│   │   ├── services/
│   │   │   └── todo.service.ts
│   │   └── app.component.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

Tutti comunicano tramite `@Input()` e `@Output()`, e la logica è centralizzata in un servizio (`TodoService`), dove gestisco le attività (CRUD completo).

## 📱 Funzionalità

- Aggiungi, completa o rimuovi attività con un click.
- Vedi quante ne hai fatte e quante ti restano.
- Interfaccia responsive, animata e ottimizzata per ogni device.

## 🛠️ Cosa ho usato

- **Angular 18** (Standalone Components, Dependency Injection, Directives, Binding…)
- **TypeScript** per sicurezza e pulizia del codice
- **CSS** con animazioni, design mobile-first e feedback visivi

## 💡 Miglioramenti futuri

- Salvataggio con localStorage o API
- Filtri per attività
- Esportazione lista
- Scadenze e categorie

---
