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
| Lordakia | 2-2, 3-2, 1-2, 1-3, 2-3, 3-3, 1-4, 2-4, 3-4, 1-5, 2-5, 3-5 | 2000 | 2000 | 800 exp, 4 honor, 800 créditos, 2 uridium + caja | Vida, escudo, daño, recompensas y velocidad confirmados; alcance, detección y cadencia provisionales |
| Mordon | 1-3, 2-3, 3-3, 1-4, 2-4, 3-4 | 20000 | 10000 | 3200 exp, 16 honor, 6400 créditos, 8 uridium + caja | Vida, escudo, daño, mapas, recompensas, caja y velocidad confirmados; alcance, detección y cadencia provisionales |
| Saimon | 1-3, 2-3, 3-3, 1-4, 2-4, 3-4 | 6000 | 6000 | 1600 exp, 8 honor, 1600 créditos, 4 uridium + caja | Vida, escudo, daño, recompensas, caja y velocidad confirmados; alcance, detección y cadencia provisionales |
| Boss Lordakia | 1-2, 2-2, 3-2 | 8000 | 8000 | 3200 exp, 16 honor, 3200 créditos, 8 uridium + caja | Vida, escudo, daño, recompensas y velocidad confirmados; alcance, detección, cadencia, radio y disparos provisionales |
| Boss Streuner | 1-2, 2-2, 3-2 | 3200 | 1600 | 1600 exp, 8 honor, 1600 créditos, 4 uridium + caja | Vida, escudo, daño, recompensas y velocidad confirmados; alcance, detección, cadencia y tipo provisionales |
| Boss Saimon | 1-3, 2-3, 3-3, 1-4, 2-4, 3-4 | 24000 | 12000 | 6400 exp, 32 honor, 6400 créditos, 16 uridium + caja | Vida, escudo, daño, mapas, recompensas, caja, velocidad y comportamiento confirmados; alcance, detección, cadencia, radio, forma y probabilidad de PEM provisionales |
| Boss Mordon | 1-3, 2-3, 3-3 | 80000 | 40000 | 12800 exp, 64 honor, 25600 créditos, 32 uridium + caja | Vida, escudo, daño, mapas, recompensas, caja, velocidad y comportamiento confirmados; alcance, detección, cadencia, radio, forma y probabilidad del misil ralentizador provisionales |
| Devolarium | 1-3, 2-3, 3-3 | 100000 | 100000 | 6400 exp, 32 honor, 51200 créditos, 16 uridium + caja | Vida, escudo, daño, mapas, recompensas, caja, velocidad y comportamiento confirmados; forma, radio, alcance, detección, cadencia y disparos provisionales |
| Boss Devolarium | 1-3, 2-3, 3-3 | 400000 | 400000 | 26500 exp, 128 honor, 204800 créditos, 64 uridium + caja | Vida, escudo, daño, mapas, recompensas, caja, velocidad y comportamiento confirmados; forma, radio, alcance, detección, cadencia y disparos provisionales |
| Sibelon | 1-4, 2-4, 3-4 | 200000 | 200000 | 12800 exp, 64 honor, 102400 créditos, 32 uridium + caja | Vida, escudo, daño, mapas, recompensas, caja, velocidad y comportamiento confirmados; forma, radio, alcance, detección, cadencia y disparos provisionales |
| Boss Sibelon | 1-4, 2-4, 3-4 | 800000 | 800000 | 51000 exp, 1256 honor, 409600 créditos, 128 uridium + caja | Vida, escudo, daño, mapas, recompensas, caja, velocidad y comportamiento confirmados; forma, radio, alcance, detección, cadencia y disparos provisionales |

## Recompensas

Las recompensas son fijas y se otorgan al destruir al NPC.

| NPC | Experiencia | Honor | Créditos | Uridium | Caja de carga |
|---|---|---|---|---|---|
| Streuner | 400 | 2 | 400 | 1 | 10 Prometium + 10 Terbium |
| Recruit Streuner | 500 | 3 | 500 | 2 | 12 Prometium + 12 Terbium |
| Aider Streuner | 700 | 4 | 700 | 2 | 15 Prometium + 15 Terbium |
| Lordakia | 800 | 4 | 800 | 2 | 20 Prometium + 20 Terbium + 20 Endurium |
| Mordon | 3200 | 16 | 6400 | 8 | 80 Prometium + 80 Terbium + 80 Endurium + 8 Prometid + 8 Duranium + 1 Promerium |
| Saimon | 1600 | 8 | 1600 | 4 | 40 Prometium + 40 Terbium + 40 Endurium + 2 Prometid + 2 Duranium |
| Boss Lordakia | 3200 | 16 | 3200 | 8 | 80 Prometium + 80 Terbium + 80 Endurium + 10 Prometid + 1 Xenomita |
| Boss Streuner | 1600 | 8 | 1600 | 4 | 40 Prometium + 10 Terbium + 40 Endurium |
| Boss Saimon | 6400 | 32 | 6400 | 16 | 160 Prometium + 160 Terbium + 160 Endurium + 8 Prometid + 8 Duranium + 1 Promerium + 2 Xenomita |
| Boss Mordon | 12800 | 64 | 25600 | 32 | 320 Prometium + 320 Terbium + 320 Endurium + 32 Prometid + 32 Duranium + 8 Promerium + 8 Xenomita |
| Devolarium | 6400 | 32 | 51200 | 16 | 100 Prometium + 100 Terbium + 100 Endurium + 16 Prometid + 16 Duranium + 2 Promerium |
| Boss Devolarium | 26500 | 128 | 204800 | 64 | 400 Prometium + 400 Terbium + 400 Endurium + 64 Prometid + 64 Duranium + 8 Promerium + 8 Xenomita |
| Sibelon | 12800 | 64 | 102400 | 32 | 200 Prometium + 200 Terbium + 200 Endurium + 32 Prometid + 32 Duranium + 4 Promerium |
| Boss Sibelon | 51000 | 1256 | 409600 | 128 | 800 Prometium + 800 Terbium + 800 Endurium + 128 Prometid + 128 Duranium + 16 Promerium + 32 Xenomita |

- **Caja de carga:** es garantizada. Cada NPC que tiene caja en su ficha la suelta siempre al morir, con la cantidad indicada. Aparece en el lugar donde murió el NPC y desaparece si no se recoge. Hay que hacer clic sobre ella: la nave viaja hasta la caja y la recoge al llegar, sumando al inventario exactamente las materias que indica la ficha de ese NPC.
- Los datos de Recruit, Aider y Lordakia son provisionales y tienen que confirmarse.

## Materias primas que suelta cada NPC

Cantidad de cada materia en la caja de carga del NPC. El orden es el de la tabla de materias (`MATERIALS` en el código). Un 0 significa que esa materia no sale de ese NPC.

| NPC | Prometium | Endurium | Terbium | Prometid | Duranium | Promerium |
|---|---|---|---|---|---|---|
| Streuner | 10 | 0 | 10 | 0 | 0 | 0 |
| Recruit Streuner | 12 | 0 | 12 | 0 | 0 | 0 |
| Aider Streuner | 15 | 0 | 15 | 0 | 0 | 0 |
| Boss Streuner | 40 | 40 | 10 | 0 | 0 | 0 |
| Boss Saimon | 160 | 160 | 160 | 8 | 8 | 1 |
| Boss Mordon | 320 | 320 | 320 | 32 | 32 | 8 |
| Devolarium | 100 | 100 | 100 | 16 | 16 | 2 |
| Boss Devolarium | 400 | 400 | 400 | 64 | 64 | 8 |
| Sibelon | 200 | 200 | 200 | 32 | 32 | 4 |
| Boss Sibelon | 800 | 800 | 800 | 128 | 128 | 16 |
| Lordakia | 20 | 20 | 20 | 0 | 0 | 0 |
| Boss Lordakia | 80 | 80 | 80 | 10 | 0 | 0 |
| Mordon | 80 | 80 | 80 | 8 | 8 | 1 |
| Saimon | 40 | 40 | 40 | 2 | 2 | 0 |

### Materias de refinamiento

- **Xenomita:** la sueltan el Boss Lordakia (1 unidad), el Boss Saimon (2 unidades), el Boss Mordon (8 unidades), el Boss Devolarium (8 unidades) y el Boss Sibelon (32 unidades). No ocupa espacio en la bodega, su almacenamiento es ilimitado y no se puede vender. Sirve como materia prima para mejorar otras materias mediante el refinamiento (pendiente de definir).
- En el código se guarda en su propio almacén (`refine`), separado de la bodega y de la estación de venta.

## Estadísticas completas

| NPC | Radio | Velocidad | Daño máx. | Alcance | Detección | Cadencia (s) | Disparos | Forma |
|---|---|---|---|---|---|---|---|---|
| Streuner | 16 | 280 | 20 | 260 | 350 | 1.6 | 1 | Cuadrado |
| Recruit Streuner | 18 | 270 | 40 | 280 | 380 | 1.4 | 1 | Cuadrado |
| Aider Streuner | 15 | Igual que su escolta | 70 | 320 | 300 | 2.0 | 1 | Pentágono |
| Lordakia | 18 | 320 | 80 | 300 | 450 | 1.2 | 1 | Triángulo |
| Mordon | 26 | 125 | 390 | 420 | 520 | 2.2 | 3 (abanico) | Octágono |
| Saimon | 30 | 320 | 200 | 480 | 600 | 1.8 | 2 | Hexágono |
| Boss Streuner | 26 | 250 | 100 | 300 | 350 | 1.6 | 2 | Cuadrado |
| Boss Saimon | 36 | 300 | 800 | 480 | 600 | 1.8 | 2 | Hexágono |
| Boss Mordon | 36 | 150 | 1500 | 420 | 520 | 2.2 | 3 (abanico) | Octágono |
| Devolarium | 40 | 200 | 1200 | 420 | 520 | 2.2 | 3 (abanico) | Pentágono |
| Boss Devolarium | 48 | 160 | 4650 | 420 | 520 | 2.2 | 3 (abanico) | Pentágono |
| Sibelon | 40 | 100 | 2650 | 420 | 520 | 2.2 | 3 (abanico) | Hexágono |
| Boss Sibelon | 52 | 175 | 12350 | 420 | 520 | 2.2 | 3 (abanico) | Hexágono |
| Boss Lordakia | 26 | 280 | 320 | 320 | 450 | 1.2 | 2 | Triángulo |

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

### Saimon y Boss Saimon: huida y PEM
- Boss Saimon tiene el mismo comportamiento que Saimon, con una probabilidad de PEM mayor: 50 % (provisional) frente al 30 % de Saimon. Su umbral es el mismo, 20 % de vida.
- **Huida:** al bajar al 20 % de su vida (1200 de 6000) huye como el Recruit Streuner, a 1.2 veces su velocidad. Sigue disparando si la nave está en alcance.
- **Persecución:** si la nave se acerca lo bastante como para seguir golpeándolo, sigue atacando.
- **PEM (pulso electromagnético):** al bajar al 20 % de su vida hay una única tirada con un 30 % de probabilidad (provisional). Si sale, quita el objetivo fijado por la nave, que tiene que volver a seleccionarlo. Se muestra como una descarga eléctrica que se expande desde Saimon, con el texto "PEM".
- La tirada se hace una sola vez por Saimon y se guarda con el resto de datos del mapa, así que no se repite al volver a entrar.
- Mordon aparece en X3 y X4 (1-3, 2-3, 3-3, 1-4, 2-4, 3-4); esos mapas aún no existen en el juego.
- **Tipo:** agresivo, confirmado. Ataca en cuanto la nave entra en su detección (520) y persigue tras recibir daño.

### Mordon y Boss Mordon: misil ralentizador
- Boss Mordon tiene el mismo comportamiento que Mordon, con una probabilidad de misil ralentizador mayor: 40 % (provisional) frente al 20 % de Mordon. Ambos tienen una única tirada por combate.
- Hay una única tirada por combate, con un 20 % de probabilidad (provisional), en el primer disparo del combate. Si sale, lanza un único misil ralentizador en lugar del abanico de 3 disparos. Si no sale, no vuelve a intentarlo hasta el siguiente combate.
- El misil **no hace daño**. Si impacta en la nave, reduce su velocidad a la mitad durante 5 segundos (provisional). Volver a impactar renueva el tiempo. Puede fallar igual que un disparo normal, y un fallo no frena la nave. Atraviesa a los bots.
- Un combate termina cuando Mordon pierde su objetivo (muere la nave o el objetivo, o la nave llega a la base). Después, la tirada vuelve a estar disponible. No se guarda al cambiar de mapa ni al cerrar el juego.
- Mientras dura el efecto aparece el aviso "RALENTIZADO" con los segundos restantes, encima de la nave. El misil se ve como un punto azul brillante y viaja a 200 px/s.
- Saimon aparece en X3 y X4 (1-3, 2-3, 3-3, 1-4, 2-4, 3-4); esos mapas aún no existen en el juego.

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
- Alcance, detección y cadencia de Mordon.
- Boss Saimon: radio (36), forma (hexágono), alcance (480), detección (600), cadencia (1.8 s), disparos (2) y probabilidad de PEM (50 %, provisional). No confirmados.
- Boss Mordon: radio (36), alcance (420), detección (520), cadencia (2.2 s), disparos (3) y probabilidad del misil ralentizador (40 %, provisional). No confirmados. Su mapa son sólo 1-3, 2-3 y 3-3 (X3), según indicaste.
- Devolarium: forma (pentágono), radio (40), alcance (420), detección (520), cadencia (2.2 s) y disparos (3), copiados de Mordon y provisionales. No confirmados. No tiene misil ralentizador ni huida definidos.
- Boss Devolarium: forma (pentágono), radio (48), alcance (420), detección (520), cadencia (2.2 s) y disparos (3), copiados de Mordon y provisionales. No confirmados. No tiene misil ralentizador ni huida definidos.
- Sibelon: forma (hexágono), radio (40), alcance (420), detección (520), cadencia (2.2 s) y disparos (3), copiados de Mordon y provisionales. No confirmados. No tiene misil ralentizador ni huida definidos. Sus mapas son X4 (1-4, 2-4 y 3-4).
- Boss Sibelon: forma (hexágono), radio (52), alcance (420), detección (520), cadencia (2.2 s) y disparos (3), copiados de Mordon y provisionales. No confirmados. No tiene misil ralentizador ni huida definidos. Sus mapas son X4 (1-4, 2-4 y 3-4).
- Probabilidad (20 %), duración (5 s) y reducción de velocidad (50 %) del misil ralentizador de Mordon.
- Equilibrio general: el láser LF-1 (12 de daño) tarda mucho en vaciar a los NPC del 3-1.
