
# Starwars Planets Search 🌌🔍

Projeto de estudo desenvolvido durante a formação em **Desenvolvimento Web da Trybe**.  
Uma aplicação em **React** que consome dados de planetas do universo *Star Wars* e permite ao usuário filtrar esses planetas por nome e pelos seus atributos.

---

## 💡 Sobre

O *Starwars Planets Search* é um app que carrega uma lista de planetas (vinda de uma API pública ou mock) e possibilita:

✔️ Buscar planetas por nome  
✔️ Filtrar planetas por atributos numéricos (population, diameter etc)  
✔️ Ver os resultados atualizados instantaneamente  
✔️ Navegar e interagir com uma interface intuitiva

Esse projeto reforça conceitos de **componentização**, **estado**, **efeitos colaterais com Hooks**, **lógica de filtro** e **manipulação de listas**.

---

## 🛠 Tecnologias utilizadas

- **React**
- **JavaScript / JSX**
- **React Hooks** (useState, useEffect)
- **CSS** (ou Styled Components)
- HTML5

---

## 🚀 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Thaisvc/Project-Starwars-Planets-Search.git
cd Project-Starwars-Planets-Search
````

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Inicie a aplicação

```bash
npm start
```

ou

```bash
yarn start
```

Isso abre o app em:

```
http://localhost:3000
```

---

## 🪐 Funcionalidades

### 🔎 Busca por nome

Campo de texto que filtra a lista de planetas pelo nome, atualizando à medida que o usuário digita.


### 📊 Filtros numéricos

O usuário pode aplicar filtros combinados como:

✔️ maior que <br>
✔️ menor que <br>
✔️ igual a <br>

em atributos como:

* population
* orbital_period
* diameter
* rotation_period
* surface_water

Os filtros se acumulam e atualizam a lista exibida.

---

## 📁 Estrutura do projeto

```
Project-Starwars-Planets-Search/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── services/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---


## 📚 Aprendizado

Com esse projeto consolidou:

✔️ Componentes React e estrutura de pastas  <br>
✔️ Estados e Hooks (useState, useEffect) <br>
✔️ Filtragem de dados de forma dinâmica <br>
✔️ Consumo de APIs externas <br>
✔️ Manipulação de listas e renderização condicional <br>
✔️ Interação do usuário com filtros e inputs <br>


---
