# ⚽ AntiFraude System

Sistema avançado de análise estatística para futebol utilizando múltiplos modelos matemáticos e probabilísticos para identificação de value bets e redução de risco.

## Objetivo

O AntiFraude System foi desenvolvido para analisar partidas de futebol através de uma combinação de modelos estatísticos independentes, gerando um índice de confiança (Anti-Blefe Score) para apoiar decisões analíticas.

---

## Principais Recursos

### Estatística Avançada

- Poisson
- Binomial Negativa
- Monte Carlo
- Quasi Monte Carlo
- Latin Hypercube Sampling (LHS)
- Variáveis Antitéticas
- Variáveis de Controle
- Quadratura Gaussiana
- MCMC Bayesiano

### Mercados Analisados

- Over 0.5 HT
- Over 1.5 Gols
- Over 2.5 Gols
- Ambas Marcam (BTTS)
- Placar Correto
- Escanteios
- Cartões
- Time Marca +0.5 Gol
- Under 4.5 Gols

### Scanner Anti-Blefe

O sistema aprova apostas apenas quando todos os filtros mínimos são atendidos:

- Consenso estatístico
- Baixa variância
- Robustez das simulações
- Convergência dos modelos
- Score mínimo configurável

---

## Arquitetura

```text
Frontend React
      ↓
API Spring Boot
      ↓
Engine AntiFraude
      ├── Poisson
      ├── Binomial Negativa
      ├── Monte Carlo
      ├── Quasi Monte Carlo
      ├── LHS
      ├── Variáveis Antitéticas
      ├── Variáveis de Controle
      ├── Quadratura Gaussiana
      └── MCMC
      ↓
Consensus Engine
      ↓
Anti-Blefe Score
      ↓
Value Bets
```

## Stack Tecnológica

### Frontend

- React
- TypeScript
- Vite
- TailwindCSS
- Recharts

### Backend

- Java 21
- Spring Boot 3
- Spring Security
- JWT
- Maven

### Banco de Dados

- PostgreSQL
- Redis

### Infraestrutura

- Docker
- Docker Compose
- GitHub Actions

---

## Estrutura do Projeto

```text
antifraude-system

├── frontend
├── backend
├── database
├── docker
├── docs
└── README.md
```

---

## Roadmap

### Fase 1

- Estrutura inicial
- Banco PostgreSQL
- Cadastro de times
- Cadastro de partidas

### Fase 2

- Implementação Poisson
- Implementação Binomial Negativa
- Monte Carlo

### Fase 3

- Quasi Monte Carlo
- LHS
- Variáveis Antitéticas
- Variáveis de Controle

### Fase 4

- Quadratura Gaussiana
- MCMC Bayesiano
- Consensus Engine

### Fase 5

- Dashboard
- Scanner Anti-Blefe
- Value Bets
- Deploy Docker

---

## Score Anti-Blefe

Classificação:

| Score | Classificação |
|---------|---------|
| 95+ | Elite |
| 90+ | Forte |
| 85+ | Boa |
| 80+ | Moderada |
| <80 | Reprovada |

---

## Licença

Projeto em desenvolvimento para fins educacionais e de pesquisa estatística.

---

## Autor

Eron Cerqueira de Jesus

Rio de Janeiro - Brasil 🇧🇷
