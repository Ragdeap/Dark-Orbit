# NPC de Dark Orbit Local

Fuente de verdad de las estadísticas, comportamiento y recompensas de cada NPC.
Los valores deben coincidir con el objeto `ALIEN` de [dark-orbit.html](dark-orbit.html).

Estados: **Confirmado** = dato del usuario. **Provisional** = valor propio pendiente de validar.

## Resumen

| NPC | Mapas | Vida | Escudo | Recompensas | Estado |
|---|---|---|---|---|---|
| Streuner | 1-1, 1-2, 2-1, 2-2, 3-1, 3-2 | 800 | 400 | Ver tabla de recompensas | Vida, escudo, recompensas y velocidad confirmados; alcance provisional |
| Recruit Streuner | 1-1, 1-2, 2-1, 2-2, 3-1, 3-2 | 600 | 800 | 500 exp, 3 honor, 500 créditos, 2 uridium + caja | Vida, escudo, recompensas y velocidad confirmados; alcance y cadencia provisionales |
| Aider Streuner | 1-1, 1-2, 2-1, 2-2, 3-1, 3-2 | 1500 | 1000 | 700 exp, 4 honor, 700 créditos, 2 uridium + caja | Vida, escudo y recompensas confirmados; velocidad igual a la de su escolta (ver abajo); alcance y cadencia provisionales |
| Lordakia | 2-2, 3-2, 1-2, 1-3, 2-3, 3-3, 1-4, 2-4, 3-4, 1-5, 2-5, 3-5 | 2000 | 2000 | 800 exp, 4 honor, 800 créditos, 2 uridium + caja | Vida, escudo, daño y recompensas confirmados; velocidad, alcance, detección y cadencia provisionales |
| Mordon | — (sin mapa asignado) | 260 | 0 | 90 créditos | Provisional |
| Saimon | — (sin mapa asignado) | 420 | 0 | 150 créditos | Provisional |
| Boss Lordakia | 1-2, 2-2, 3-2 | 8000 | 8000 | 3200 exp, 16 honor, 3200 créditos, 8 uridium + caja | Vida, escudo, daño y recompensas confirmados; velocidad, alcance, detección, cadencia, radio y disparos provisionales |
| Boss Streuner | 1-2, 2-2, 3-2 | 3200 | 1600 | 1600 exp, 8 honor, 1600 créditos, 4 uridium + caja | Vida, escudo, daño y recompensas confirmados; velocidad, alcance, detección, cadencia y tipo provisionales |

## Recompensas

Las recompensas son fijas y se otorgan al destruir al NPC.

| NPC | Experiencia | Honor | Créditos | Uridium | Caja de carga |
|---|---|---|---|---|---|
| Streuner | 400 | 2 | 400 | 1 | 10 Prometium + 10 Terbium |
| Recruit Streuner | 500 | 3 | 500 | 2 | 12 Prometium + 12 Terbium |
| Aider Streuner | 700 | 4 | 700 | 2 | 15 Prometium + 15 Terbium |
| Lordakia | 800 | 4 | 800 | 2 | 20 Prometium + 20 Terbium + 20 Endurium |
| Mordon | — | — | 90 (provisional) | — | — |
| Saimon | — | — | 150 (provisional) | — | — |
| Boss Lordakia | 3200 | 16 | 3200 | 8 | 80 Prometium + 80 Terbium + 80 Endurium + 10 Prometid + 1 Xenomita |
| Boss Streuner | 1600 | 8 | 1600 | 4 | 40 Prometium + 10 Terbium + 40 Endurium |

- **Caja de carga:** es garantizada. Cada NPC que tiene caja en su ficha la suelta siempre al morir, con la cantidad indicada. Aparece en el lugar donde murió el NPC y desaparece si no se recoge. Hay que hacer clic sobre ella: la nave viaja hasta la caja y la recoge al llegar, sumando al inventario exactamente las materias que indica la ficha de ese NPC.
- Los datos de Recruit, Aider, Lordakia, Mordon y Saimon son provisionales y tienen que confirmarse.

## Materias primas que suelta cada NPC

Cantidad de cada materia en la caja de carga del NPC. El orden es el de la tabla de materias (`MATERIALS` en el código). Un 0 significa que esa materia no sale de ese NPC.

| NPC | Prometium | Endurium | Terbium | Prometid | Duranium | Promerium |
|---|---|---|---|---|---|---|
| Streuner | 10 | 0 | 10 | 0 | 0 | 0 |
| Recruit Streuner | 12 | 0 | 12 | 0 | 0 | 0 |
| Aider Streuner | 15 | 0 | 15 | 0 | 0 | 0 |
| Boss Streuner | 40 | 40 | 10 | 0 | 0 | 0 |
| Lordakia | 20 | 20 | 20 | 0 | 0 | 0 |
| Boss Lordakia | 80 | 80 | 80 | 10 | 0 | 0 |
| Mordon | — (sin caja) | — | — | — | — | — |
| Saimon | — (sin caja) | — | — | — | — | — |

### Materias de refinamiento

- **Xenomita:** la suelta el Boss Lordakia (1 unidad). No ocupa espacio en la bodega, su almacenamiento es ilimitado y no se puede vender. Sirve como materia prima para mejorar otras materias mediante el refinamiento (pendiente de definir).
- En el código se guarda en su propio almacén (`refine`), separado de la bodega y de la estación de venta.

## Estadísticas completas

| NPC | Radio | Velocidad | Daño máx. | Alcance | Detección | Cadencia (s) | Disparos | Forma |
|---|---|---|---|---|---|---|---|---|
| Streuner | 16 | 280 | 20 | 260 | 350 | 1.6 | 1 | Cuadrado |
| Recruit Streuner | 18 | 270 | 40 | 280 | 380 | 1.4 | 1 | Cuadrado |
| Aider Streuner | 15 | Igual que su escolta | 70 | 320 | 300 | 2.0 | 1 | Pentágono |
| Lordakia | 18 | 160 | 80 | 300 | 450 | 1.2 | 1 | Triángulo |
| Mordon | 26 | 70 | 14 | 420 | 520 | 2.2 | 3 (abanico) | Octágono |
| Saimon | 30 | 100 | 18 | 480 | 600 | 1.8 | 2 | Hexágono |
| Boss Streuner | 26 | 80 | 100 | 300 | 350 | 1.6 | 2 | Cuadrado |
| Boss Lordakia | 26 | 130 | 320 | 320 | 450 | 1.2 | 2 | Triángulo |

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

### Lordakia
- **Tipo:** hostil. Ataca a la nave nada más verla, dentro de su detección (450).
- No hay comportamiento de huida definido.
- Mapas: X2 a X5 en las tres facciones (ver tabla de resumen).

### Mordon y Saimon
- **Tipo:** agresivo (provisional).
- Atacan al detectar la nave y persiguen tras recibir daño.
- No hay comportamiento de huida definido.
- Solo en el mapa 3-2 por ahora.

## Reglas comunes

- **Persecución:** cualquier NPC que haya recibido daño persigue a la nave sin límite de distancia.
- **Fin de persecución:** la nave llega a la base del mapa, o cambia de mapa por un portal.
- **Muerte de la nave:** el NPC deja de disparar. La persecución termina al reaparecer en la base.
- **Escudo:** absorbe el daño antes que la vida. No se regenera.
- **Daño por disparo:** cada disparo hace entre el 75 % y el 100 % del daño máximo del NPC. Por ejemplo, el Streuner (máximo 20) hace entre 15 y 20.
- **Fallo:** cada disparo tiene un 20 % de probabilidad de fallar. Un disparo fallado sigue de largo y no daña la nave.
- **Aparición:** los NPC no aparecen cerca de la base (distancia mínima de 600 px).
- **Mapas de Streuner, Recruit Streuner y Aider Streuner:** solo aparecen en los mapas X-1 y X-2: 1-1, 1-2, 2-1, 2-2, 3-1 y 3-2.

## Comportamiento del Aider Streuner

- **Velocidad:** igual que la de su escolta (Streuner, Recruit Streuner o Boss Streuner). Si no hay escolta cerca, se queda quieto.
- **Pasivo por naturaleza:** no ataca por iniciativa propia. Sólo se une al combate si un escolta lucha contra el jugador, o si el jugador le dispara.
- **Asistencia:** cura, de uno en uno, al escolta más dañado que tenga a su alcance (320). El rayo verde recupera el 3,5 % de la vida máxima del escolta por segundo (rango de 2 % a 5 %, valor provisional).
- **Combate:** mientras dura el combate del escolta, dispara láseres al jugador, y deja de hacerlo cuando termina.
- **Pendiente:** la formación de grupos de 4 Aider junto a cada Recruit Streuner no está implementada; aparecen de forma individual.

## Pendiente de validar

- Alcance y cadencia de Recruit Streuner y Aider Streuner. Su daño máximo ya está confirmado (40 y 70). La velocidad de Streuner (280) y Recruit Streuner (270) ya está confirmada.
- Estadísticas de Lordakia, Mordon y Saimon, y en qué mapas aparecen.
- Equilibrio general: el láser LF-1 (12 de daño) tarda mucho en vaciar a los NPC del 3-1.
