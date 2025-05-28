# 📌 Todo App - Valerio Bottari

Ciao! Questo è il mio progetto: una **Todo App moderna**, costruita con **Angular 18** in modalità **standalone**. Volevo creare qualcosa di davvero usabile, elegante e utile per organizzare le attività quotidiane.

## 🎯 Cosa fa l’app

- Aggiungo, completo o cancello attività con pochi click.
- L’interfaccia è **fluida, colorata e responsive**, quindi perfetta su ogni dispositivo.
- C’è anche un **sistema di contatori** e messaggi che aiutano a capire come sto procedendo.

## 🧩 Come l’ho costruita

- Ho usato **componenti standalone** per rendere tutto più modulare.
- I componenti principali sono:
  - `AppComponent`: gestisce tutto
  - `AddTodoComponent`: per aggiungere attività
  - `TodoListComponent`: per visualizzarle

## 🔄 Comunicazione tra componenti

Uso `@Input` e `@Output` con `EventEmitter` per far parlare i componenti tra loro, senza confusione.

## 🔗 Data binding e direttive

- Ho legato dati e interfaccia con **two-way binding** e direttive come `*ngFor`, `*ngIf`, `trackBy`.
- Ho curato **stili condizionali** e **animazioni** per migliorare l’esperienza.

## 📦 Stato e logica centralizzati

La logica è tutta dentro un servizio (`TodoService`), in modo da mantenere l’app ordinata e scalabile.

## 💡 Tipo di dati sicuri

Uso **TypeScript** con interfacce per rendere tutto più chiaro e sicuro.

```ts
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}
