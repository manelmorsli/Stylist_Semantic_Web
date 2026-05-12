# Ontologie de la Mode — Semantic Web University Project

> Modélisation de l'industrie et de la sociologie de la mode à l'aide des technologies du Web Sémantique (OWL, RDF, SPARQL) et de l'éditeur Protégé.

---

## Table of Contents

1. [What This Project Is About](#1-what-this-project-is-about)
2. [Real-World Applications](#2-real-world-applications)
3. [Technology Stack](#3-technology-stack)
4. [Ontology Architecture](#4-ontology-architecture)
5. [File Structure](#5-file-structure)
6. [Step-by-Step: How to Load in Protégé](#6-step-by-step-how-to-load-in-protégé)
7. [Running SPARQL Queries in Protégé](#7-running-sparql-queries-in-protégé)
8. [SPARQL Queries Reference](#8-sparql-queries-reference)
9. [How to Extend the Ontology](#9-how-to-extend-the-ontology)
10. [Key OWL Concepts Used](#10-key-owl-concepts-used)

---

## 1. What This Project Is About

This project builds a **formal knowledge model (ontology)** of the fashion domain using **OWL 2** (Web Ontology Language) and **RDF** (Resource Description Framework).

The ontology captures:

- **Fashion creators** (Créateurs de Mode) such as Coco Chanel, Yves Saint Laurent, and Virgil Abloh — with their birth dates and countries of origin.
- **Brands** (Marques) — commercial entities that market fashion trends, described by creation date, average price, and fashion type.
- **Trends** (Tendances) — observable movements in fashion (e.g., Sneaker culture, Denim universalism), described by their start date, durability, and popularity level.
- **Sociological phenomena** that explain how fashion spreads and is adopted:
  | Concept | Meaning |
  |---|---|
  | Affirmation | Fashion as identity assertion |
  | Autonomie | Fashion as individual freedom of expression |
  | Impérialisation | Fashion imposed by dominant actors (luxury brands, celebrities) |
  | Personnalisation | Adapting a trend to one's personal style |
  | Symbolisation | Fashion as cultural / social symbol |
  | Convergence | Multiple trends merging into a single dominant style |

The ontology also encodes the **relationships** between these concepts: a creator *creates* a brand or trend; a brand *commercialises* a trend; a trend *imposes*, *symbolises*, *personalises*, or *expresses autonomy* through sociological phenomena.

---

## 2. Real-World Applications

| Application | How This Ontology Helps |
|---|---|
| **Fashion recommendation systems** | Reason over relationships between trends, brands, and styles to suggest relevant items to users |
| **E-commerce semantic search** | Enable queries like "show me all denim trends inspired by French creators" |
| **Cultural heritage / museum** | Classify fashion items and designers in structured, machine-readable archives |
| **Social media trend analysis** | Map emerging trends to the sociological phenomena driving them |
| **Academic research in fashion sociology** | Formalise sociological concepts for cross-study comparisons |
| **Knowledge Graph building** | Serve as a domain vocabulary for linking fashion-related Linked Open Data |

---

## 3. Technology Stack

| Technology | Role | Version |
|---|---|---|
| **OWL 2** (Web Ontology Language) | Define classes, properties, axioms, and individuals | W3C Standard |
| **RDF/XML** | Serialisation format for the ontology file | W3C Standard |
| **SPARQL 1.1** | Query language to interrogate the ontology | W3C Standard |
| **Protégé** | Desktop ontology editor and reasoner front-end | 5.x (recommended) |
| **HermiT / Pellet** | OWL 2 reasoner (built into Protégé) | bundled |

---

## 4. Ontology Architecture

### Class Hierarchy

```
owl:Thing
├── Industrie_de_la_Mode
│   ├── Créateur_de_Mode
│   │   ├── DateNaissance
│   │   ├── Nom  (multi-parent — see below)
│   │   └── PaysOrigine  (multi-parent)
│   ├── Marque
│   │   ├── DateCreation
│   │   ├── Nom
│   │   ├── PaysOrigine
│   │   ├── PrixMoyen
│   │   └── TypeMode
│   ├── Tendance
│   │   ├── DateDebut
│   │   ├── Durabilite
│   │   ├── Nom
│   │   └── Popularite
│   └── Convergence
│       ├── Description  (multi-parent)
│       └── Nom
└── Sociologie_de_la_Mode
    ├── Affirmation
    │   ├── Description
    │   └── Nom
    ├── Autonomie
    │   ├── Description
    │   └── Nom
    ├── Impérialisation
    │   ├── Description
    │   └── Nom
    ├── Personnalisation
    │   ├── Description
    │   └── Nom
    └── Symbolisation
        ├── Description
        └── Nom
```

### Object Properties (Relations between classes)

| Property | Domain | Range |
|---|---|---|
| `cree` | Créateur_de_Mode | Marque, Tendance |
| `estCreePar` | Marque | Créateur_de_Mode, Marque |
| `colaboreAvec` | Créateur_de_Mode | Marque |
| `commercialise` | Marque | Tendance |
| `estInspirePar` | Créateur_de_Mode, Marque | Tendance |
| `inspire` | Tendance | Créateur_de_Mode, Marque |
| `convergeVers` | Tendance | Convergence |
| `convergeDe` | Convergence | Tendance |
| `affirme` | Tendance | Affirmation |
| `exprimeAutonomie` | Tendance | Autonomie |
| `impose` | Tendance | Impérialisation |
| `estImposePar` | Impérialisation | Tendance |
| `personnalise` | Tendance | Personnalisation |
| `estPersonnalisePar` | Personnalisation | Tendance |
| `symbolise` | Tendance | Symbolisation |
| `estSymbolisePar` | Symbolisation | Tendance |

### Data Properties

| Property | Domain class | Range (XSD type) |
|---|---|---|
| `nom` | Nom | xsd:string |
| `description` | Description | xsd:string |
| `dateNaissance` | DateNaissance | xsd:dateTime |
| `dateCreation` | DateCreation | xsd:dateTime |
| `dateDebut` | DateDebut | xsd:dateTime |
| `dateActuelle` | — | xsd:dateTime |
| `paysOrigine` | PaysOrigine | xsd:string (**Functional**) |
| `typeMode` | TypeMode | xsd:string |
| `prixMoyen` | PrixMoyen | xsd:float |
| `popularite` | Popularite | xsd:integer |
| `durabilite` | Durabilite | xsd:boolean |

### Named Individuals

| Individual | Class | Key data |
|---|---|---|
| `Gabrielle_Chasnel` ≡ `Coco_Chanel` | Créateur_de_Mode | born 1883-08-19, France |
| `Virgil_Abloh` | Créateur_de_Mode | born 1980-09-30, America |
| `Yves_Saint_Laurent` | Créateur_de_Mode | born 1936-04-01, Algeria |
| `Costumes-cravates` | Convergence | "Toujours associés au sérieux et au professionnalisme." |
| `Mode_des_Sneakers` | Tendance | "Tout le monde adopte les baskets comme pièce incontournable." |
| `Denim_universel` | Tendance | "Le jean est adopté dans tous les milieux sociaux." |

> `Coco_Chanel` and `Gabrielle_Chasnel` are declared `owl:sameAs` — they refer to the same real-world person. This demonstrates OWL's open-world assumption and identity reasoning.

---

## 5. File Structure

```
Stylist_Semantic_Web/
├── la_mode.owl              ← Main ontology file (load this in Protégé)
├── sparql_queries.sparql    ← All SPARQL queries ready to copy-paste
├── README.md                ← This file
└── owl/
    ├── code OWL-XML.txt     ← OWL/XML serialisation (alternative format)
    ├── code RDF-XML.txt     ← Original RDF/XML source
    ├── requetes.txt         ← Original SPARQL queries from the report
    └── RAPPORT WEB SEMANTIQUE.pdf  ← Full project report (French)
```

---

## 6. Step-by-Step: How to Load in Protégé

### Prerequisites

1. **Java 11+** installed ([https://adoptium.net](https://adoptium.net))
2. **Protégé 5.x** downloaded from [https://protege.stanford.edu](https://protege.stanford.edu)

### Loading the Ontology

1. Launch Protégé.
2. Go to **File → Open…**
3. Navigate to and select `la_mode.owl`.
4. Protégé will parse the RDF/XML file and display the ontology.

### Exploring the Class Hierarchy

- Click the **Classes** tab → expand the tree under `owl:Thing`.
- You will see `Industrie_de_la_Mode` and `Sociologie_de_la_Mode` as the two root classes.

### Viewing Object Properties

- Click the **Object Properties** tab.
- Select any property (e.g., `cree`) to see its **Domain**, **Range**, and any axioms.

### Viewing Individuals

- Click the **Individuals (by type)** tab.
- Select `Créateur_de_Mode` to see Gabrielle_Chasnel, Virgil_Abloh, and Yves_Saint_Laurent.
- Click an individual to see all its asserted property values.

### Running the Reasoner

1. Go to **Reasoner → HermiT** (or Pellet).
2. Click **Start reasoner** (Ctrl+R).
3. After classification, yellow highlights show inferred class memberships.
4. The `owl:sameAs` between `Coco_Chanel` and `Gabrielle_Chasnel` will be detected automatically.

---

## 7. Running SPARQL Queries in Protégé

1. Go to **Window → Tabs → SPARQL Query** (if not visible, enable it via **Window → Views → Query views → SPARQL query**).
2. Open `sparql_queries.sparql` in any text editor.
3. Copy one query block (from `SELECT` to the closing `}`) into the Protégé SPARQL panel.
4. Click **Execute**.

> **Tip:** Always include the `PREFIX` lines at the top of each query when running in Protégé. The prefixes are repeated in the file for convenience.

---

## 8. SPARQL Queries Reference

| # | Query | What it returns |
|---|---|---|
| 1 | Subclass hierarchy | All `(subClass, superClass)` pairs |
| 2 | All fashion creators | Name, birth date, country of origin |
| 3 | Convergence elements | Name and description of convergence trends |
| 4 | All trends | Name and description of every Tendance individual |
| 5 | Individuals + aliases | Types and `owl:sameAs` links |
| 6 | All data property values | Every literal value of every individual |
| 7 | Creators born before 1950 | Filtered by `xsd:dateTime` comparison |
| 8 | Object property relations | All inter-individual relationships |

---

## 9. How to Extend the Ontology

### Adding a new Fashion Creator

In Protégé:
1. Open the **Individuals** tab, select `Créateur_de_Mode`.
2. Click the **+** button to add a new individual (e.g., `Karl_Lagerfeld`).
3. In the property assertions panel, add:
   - `nom` → `"Karl Lagerfeld"^^xsd:string`
   - `dateNaissance` → `"1933-09-10T00:00:00"^^xsd:dateTime`
   - `paysOrigine` → `"Allemagne"^^xsd:string`

### Adding a new Brand

1. Create a new individual of type `Marque`.
2. Add data properties: `nom`, `dateCreation`, `prixMoyen`, `typeMode`, `paysOrigine`.
3. Add object property: `estCreePar` → link to the creator individual.

### Adding a new Trend

1. Create a new individual of type `Tendance`.
2. Add: `nom`, `description`, `dateDebut`, `durabilite` (true/false), `popularite` (integer).
3. Link to sociological phenomena with `affirme`, `symbolise`, `personnalise`, etc.

### Saving back to OWL

- **File → Save** will overwrite `la_mode.owl` in RDF/XML format.
- To export in OWL/XML format: **File → Save As… → OWL/XML Syntax**.

---

## 10. Key OWL Concepts Used

| OWL Feature | Where Used in This Ontology |
|---|---|
| `owl:Class` | All domain concepts (Créateur_de_Mode, Marque, Tendance…) |
| `rdfs:subClassOf` | Hierarchy (e.g., Tendance ⊆ Industrie_de_la_Mode) |
| `owl:ObjectProperty` | Relations between individuals (cree, inspire…) |
| `owl:DatatypeProperty` | Literal values (nom, dateNaissance, prixMoyen…) |
| `owl:FunctionalProperty` | `paysOrigine` — each entity has at most one country of origin |
| `owl:NamedIndividual` | Concrete instances (Coco Chanel, Virgil Abloh…) |
| `owl:sameAs` | Identity between Coco_Chanel and Gabrielle_Chasnel |
| `owl:AllDisjointClasses` | Sociological concepts (Affirmation, Autonomie…) cannot overlap |
| `rdfs:domain` / `rdfs:range` | Type constraints on properties |
| `owl:propertyDisjointWith` | `dateActuelle` ≠ `dateCreation` ≠ `dateDebut` ≠ `dateNaissance` |

---

*Project created for the Semantic Web & Ontologies course — University, 2025.*
