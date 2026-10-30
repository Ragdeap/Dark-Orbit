# NPC de Dark Orbit Local

Fuente de verdad de las estadísticas, comportamiento y recompensas de cada NPC.
Los valores deben coincidir con el objeto `ALIEN` de [dark-orbit.html](dark-orbit.html).

Estados: **Confirmado** = dato del usuario. **Provisional** = valor propio pendiente de validar.

## Resumen

| NPC | Mapas | Vida | Escudo | Recompensas | Estado |
|---|---|---|---|---|---|
| Streuner | 3-1 | 800 | 400 | Ver tabla de recompensas | Vida, escudo y recompensas confirmados; velocidad y alcance provisionales |
| Recruit Streuner | 3-1 | 600 | 800 | 500 exp, 3 honor, 500 créditos, 2 uridium + caja | Vida, escudo y recompensas confirmados; velocidad, alcance y cadencia provisionales |
| Aider Streuner | 3-1 | 1500 | 1000 | 700 exp, 4 honor, 700 créditos, 2 uridium + caja | Vida, escudo y recompensas confirmados; velocidad, alcance y cadencia provisionales |
| Lordakia | — (sin mapa asignado) | 110 | 0 | 40 créditos | Provisional |
| Mordon | — (sin mapa asignado) | 260 | 0 | 90 créditos | Provisional |
| Saimon | — (sin mapa asignado) | 420 | 0 | 150 créditos | Provisional |

## Recompensas

Las recompensas son fijas y se otorgan al destruir al NPC.

| NPC | Experiencia | Honor | Créditos | Uridium | Caja de carga |
|---|---|---|---|---|---|
| Streuner | 400 | 2 | 400 | 1 | 10 Prometium + 10 Terbium |
| Recruit Streuner | 500 | 3 | 500 | 2 | 12 Prometium + 12 Terbium |
| Aider Streuner | 700 | 4 | 700 | 2 | 15 Prometium + 15 Terbium |
| Lordakia | — | — | 40 (provisional) | — | — |
| Mordon | — | — | 90 (provisional) | — | — |
| Saimon | — | — | 150 (provisional) | — | — |

- **Caja de carga:** es garantizada. Cada NPC que tiene caja en su ficha la suelta siempre al morir, con la cantidad indicada. Aparece en el lugar donde murió el NPC y desaparece si no se recoge. Hay que hacer clic sobre ella: la nave viaja hasta la caja y la recoge al llegar, sumando sus 10 Prometium y 10 Terbium al inventario.
- Los datos de Recruit, Aider, Lordakia, Mordon y Saimon son provisionales y tienen que confirmarse.

## Estadísticas completas

| NPC | Radio | Velocidad | Daño máx. | Alcance | Detección | Cadencia (s) | Disparos | Forma |
|---|---|---|---|---|---|---|---|---|
| Streuner | 16 | 90 | 20 | 260 | 350 | 1.6 | 1 | Cuadrado |
| Recruit Streuner | 18 | 100 | 40 | 280 | 380 | 1.4 | 1 | Cuadrado |
| Aider Streuner | 15 | 110 | 70 | 320 | 300 | 2.0 | 1 | Pentágono |
| Lordakia | 18 | 160 | 8 | 300 | 450 | 1.2 | 1 | Triángulo |
| Mordon | 26 | 70 | 14 | 420 | 520 | 2.2 | 3 (abanico) | Octágono |
| Saimon | 30 | 100 | 18 | 480 | 600 | 1.8 | 2 | Hexágono |

- **Radio:** tamaño visual y de colisión.
- **Detección:** distancia a la que el NPC empieza a perseguir (solo los no pasivos).
- **Alcance:** distancia máxima a la que dispara.

## Comportamiento

### Streuner
- **Tipo:** pasivo.
- No reacciona a la nave hasta que recibe daño.
- Tras ser atacado, persigue sin límite de distancia hasta que la nave llega a la base.
- Mantiene distancia: se acerca si está lejos, se aleja si está muy cerca.

### Recruit Streuner
- **Tipo:** agresivo.
- Ataca en cuanto la nave entra en su radio de detección (380).
- **Huida:** al bajar al 20 % de su vida (120 de 600) huye, pero sigue disparando si la nave está en alcance.
- Huye a 1.2 veces su velocidad normal.
- Tras ser atacado, persigue hasta la base.

### Aider Streuner
- **Tipo:** pasivo.
- Mismo comportamiento que el Streuner.
- Dispara menos (cadencia 2.0 s) y tiene más alcance (320).

### Lordakia, Mordon y Saimon
- **Tipo:** agresivo (provisional).
- Atacan al detectar la nave y persiguen tras recibir daño.
- No hay comportamiento de huida definido.
- No aparecen en el mapa 3-1.

## Reglas comunes

- **Persecución:** cualquier NPC que haya recibido daño persigue a la nave sin límite de distancia.
- **Fin de persecución:** la nave llega a la base del mapa, o cambia de mapa por un portal.
- **Muerte de la nave:** el NPC deja de disparar. La persecución termina al reaparecer en la base.
- **Escudo:** absorbe el daño antes que la vida. No se regenera.
- **Daño por disparo:** cada disparo hace entre el 75 % y el 100 % del daño máximo del NPC. Por ejemplo, el Streuner (máximo 20) hace entre 15 y 20.
- **Fallo:** cada disparo tiene un 20 % de probabilidad de fallar. Un disparo fallado sigue de largo y no daña la nave.
- **Aparición:** los NPC no aparecen cerca de la base (distancia mínima de 600 px).

## Pendiente de validar

- Velocidad, alcance y cadencia de Recruit Streuner y Aider Streuner. Su daño máximo ya está confirmado (40 y 70).
- Estadísticas de Lordakia, Mordon y Saimon, y en qué mapas aparecen.
- Equilibrio general: el láser LF-1 (12 de daño) tarda mucho en vaciar a los NPC del 3-1.
