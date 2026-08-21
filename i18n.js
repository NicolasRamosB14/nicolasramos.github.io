/* =========================================================================
   i18n.js — Sistema de idiomas ES/EN para el portafolio
   =========================================================================

   Por qué un diccionario y no dos páginas HTML:
   mantener /index.html y /en/index.html obliga a editar dos archivos cada vez
   que cambia una frase. En la práctica uno se queda atrás y el sitio acaba
   diciendo cosas distintas en cada idioma. Con un único HTML y las cadenas
   centralizadas aquí, eso no puede pasar.

   Cómo se usa en el HTML:
     <p data-i18n="hero.intro"></p>           -> reemplaza el contenido
     <a data-i18n-href="cv.file" href="..."> -> reemplaza el atributo href
     <img data-i18n-alt="skills.python">      -> reemplaza el atributo alt

   Si el texto contiene etiquetas HTML se inyecta con innerHTML; si no, con
   textContent. Todas las cadenas de este archivo son propias, no vienen de
   ninguna entrada de usuario.
   ========================================================================= */

const TRANSLATIONS = {

  /* ---------------------------------------------------------------- ES -- */
  es: {
    "page.title": "Nicolás Ramos — Analista de Datos",
    "page.description": "Ingeniero de Telecomunicaciones con perfil orientado a datos: análisis, modelado e ingeniería de datos con Python, SQL, BigQuery, Google Cloud, Looker Studio y Power BI.",

    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "nav.linkedin": "LinkedIn",
    "nav.lang": "EN",
    "nav.langLabel": "Ver el sitio en inglés",

    "hero.greeting": "Nicolás Ramos",
    "hero.role": "Analista de Datos · Data Engineer Junior · Analytics Engineer",
    "hero.intro": "Ingeniero de Telecomunicaciones orientado a <strong>datos</strong>, con conocimientos iniciales en análisis, modelado e <strong>ingeniería de datos</strong>. Trabajo con <strong>Python</strong> y <strong>SQL</strong> a lo largo del recorrido del dato: integración de fuentes y APIs, transformación y modelado en <strong>BigQuery</strong>, y reportería en <strong>Looker Studio</strong> y <strong>Power BI</strong>, con experiencia práctica construyendo pipelines ELT que se ejecutan a diario sobre Google Cloud. Me apoyo en <strong>IA generativa</strong> para programar, documentar y aprender.",
    "hero.seeking": "Busco una posición junior en datos — Data Analytics, Analytics Engineering o Data Engineering. — donde aportar y seguir creciendo dentro de un equipo.",
    "hero.cvEs": "Descargar CV (Español)",
    "hero.cvEn": "Descargar CV (English)",

    "stack.title": "Stack técnico",
    "stack.languages": "Lenguajes",
    "stack.cloud": "Google Cloud",
    "stack.engineering": "Ingeniería de datos",
    "stack.systems": "Contenedores y sistemas",
    "stack.bi": "BI y analítica",
    "stack.vcs": "Control de versiones",
    "stack.engineeringItems": "Procesos ETL/ELT · APIs REST y GraphQL · Cargas incrementales · Limpieza y transformación con pandas · Tablas de hechos y dimensiones · Particionamiento y clustering · Calidad de datos",
    "stack.ai": "IA aplicada",
    "stack.aiItems": "IA generativa como apoyo al desarrollo · Diseño de prompts · Agentes con instrucciones y comandos personalizados · Skills · Subagentes · MCP",

    "exp.title": "Experiencia",
    "exp.freelanceRole": "Analista de Datos Jr. / Ingeniero de Datos Jr.",
    "exp.freelanceOrg": "Flupix · Social Media, Ads y e-commerce",
    "exp.freelanceDate": "Mar — Ago 2026",
    "exp.freelanceDesc": "Consolidé en BigQuery las métricas de Social Media, Ads y e-commerce que antes vivían repartidas entre Shopify, Meta, Google Analytics 4, Mailchimp y YouTube, con cinco procesos de carga diaria, y preparé las tablas que alimentan los reportes en Looker Studio.",
    "exp.freelanceLink": "Ver el caso de estudio técnico",
    "exp.claroRole": "Practicante universitario",
    "exp.claroOrg": "Claro Colombia · Bogotá",
    "exp.claroDate": "Feb — Jul 2023",
    "exp.claroDesc": "Informes de seguimiento sobre viabilidades y entregas de fibra, y pruebas de laboratorio de QoS para evaluar políticas de priorización de tráfico IPTV en puntos de acceso.",

    "edu.title": "Educación",
    "edu.degree": "Ingeniería de Telecomunicaciones",
    "edu.degreeOrg": "Universidad Piloto de Colombia · Bogotá",
    "edu.degreeDate": "Ago 2017 — Jul 2023",
    "edu.courseName": "Fundamentos de Data Analytics",
    "edu.courseOrg": "IBM & Guayerd",
    "edu.courseDate": "Ago — Nov 2024",
    "edu.badges": "Certificaciones verificables",

    "proj.title": "Proyectos",
    "proj.featured": "Proyecto principal",
    "proj.pipelineTitle": "Plataforma de datos de marketing y e-commerce",
    "proj.pipelineDesc": "Cinco pipelines ELT que extraen de las APIs de Shopify, Meta, Google Analytics 4, Mailchimp y YouTube, cargan tablas de hechos y dimensiones en BigQuery y construyen una capa de consumo materializada para Looker Studio. Quedaron corriendo a diario como Cloud Run Jobs disparados por Cloud Scheduler.",
    "proj.pipelineCta": "Leer el caso de estudio",
    "proj.ongTitle": "Dashboard de gestión financiera para ONG",
    "proj.ongDesc": "Dashboard de seguimiento de ingresos y gastos desarrollado como proyecto final del programa Fundamentos de Data Analytics de IBM & Guayerd. Consolida registros financieros dispersos en una sola vista para el control del presupuesto.",
    "proj.edaTitle": "Análisis exploratorio de datos — Gym Members",
    "proj.edaDesc": "Análisis de un dataset de 973 registros y 15 variables para identificar relaciones entre hábitos de entrenamiento y medidas fisiológicas, con gráficos de distribución, correlación y pair plots.",
    "proj.pbiTitle": "Portafolio de reportes en Power BI",
    "proj.pbiDesc": "Dashboards interactivos sobre distintos temas, cada uno construido alrededor de una pregunta concreta de negocio y modelado con transformaciones en Power Query y medidas en DAX.",
    "proj.viewDetails": "Ver detalles",

    "secret.title": "Easter egg",
    "secret.movie": "Película favorita",
    "secret.game": "Videojuego favorito",
    "secret.book": "Libro favorito",

    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.email": "Correo",
    "footer.phone": "Teléfono",
    "footer.city": "Ciudad",
    "footer.cityValue": "Bogotá, Colombia",

    /* ---- Caso de estudio ---- */
    "cs.back": "← Volver al portafolio",
    "cs.title": "Plataforma de datos de marketing y e-commerce",
    "cs.subtitle": "Cinco pipelines ELT sobre Google Cloud",
    "cs.confidential": "Trabajo realizado en Flupix para un cliente del sector e-commerce y retail. El repositorio es privado y el nombre del cliente, sus cifras de negocio y los identificadores de su infraestructura no se publican. Lo que se describe aquí son las decisiones técnicas.",

    "cs.overviewTitle": "Resumen",
    "cs.overviewBody": "Una marca de e-commerce medía su desempeño en cinco plataformas distintas —su tienda, sus redes sociales, su web, su email marketing y su canal de vídeo— y cada una vivía en su propio panel. No existía forma de comparar el gasto de una campaña con las ventas que generaba sin exportar hojas de cálculo a mano cada semana. Construí los procesos que extraen los datos de las cinco fuentes a diario, los normalizan en un mismo almacén y los dejan listos para consultar desde un único punto.",

    "cs.problemTitle": "El problema",
    "cs.problemBody": "Cinco APIs, cinco modelos de datos distintos, cinco formas de autenticarse y cinco maneras diferentes de mentir. Google Analytics 4 muestrea los informes grandes sin avisar de forma visible. YouTube redondea los suscriptores y agota su cuota diaria a mitad de una carga histórica. Meta dejó de exponer el alcance de las páginas de Facebook. Mailchimp infla las tasas de apertura desde que Apple precarga las imágenes. Shopify cobra por la complejidad de cada consulta GraphQL y corta la paginación si te pasas. El trabajo real no fue mover datos: fue decidir qué significa cada número antes de guardarlo.",

    "cs.archTitle": "Cómo está organizado",
    "cs.archBody": "Cada fuente tiene su propio pipeline, todos con el mismo esqueleto: extractores en paralelo, un cargador a BigQuery y un modelo SQL que construye la capa de consumo. Son cinco piezas independientes a propósito: si la cuota de YouTube se agota, las otras cuatro siguen cargando, y un fallo se atribuye a un pipeline concreto sin desenredar cinco corridas simultáneas.",

    "cs.stackTitle": "Stack",
    "cs.stackApis": "APIs integradas",
    "cs.stackConsume": "Consumo",
    "cs.flowTitle": "Flujo de datos",
    "cs.flowBody": "El diagrama recorre el camino completo de un dato, desde la API de origen hasta el gráfico que ve el cliente.",

    "cs.implTitle": "Qué construí",
    "cs.impl1": "<strong>Extracción.</strong> Un módulo por dominio de datos dentro de cada pipeline, ejecutados en paralelo. Cinco esquemas de autenticación distintos: OAuth client credentials en Shopify, un token de sistema intercambiado por token de página en Meta, credenciales por defecto del entorno en Google Analytics 4, clave de API en Mailchimp y refresh token OAuth en YouTube.",
    "cs.impl2": "<strong>Carga.</strong> Un cargador a BigQuery común que crea el dataset si no existe, tolera la aparición de campos nuevos en el origen sin romper el esquema, y no hace nada si el DataFrame llega vacío, para que un día sin datos no borre el histórico.",
    "cs.impl3": "<strong>Modelado.</strong> Ocho modelos SQL versionados en el repositorio y parametrizados por proyecto y dataset, que construyen una capa oro particionada y clusterizada por cada fuente. La deduplicación se resuelve con funciones de ventana sobre la marca de extracción.",
    "cs.impl4": "<strong>Orquestación.</strong> Cada pipeline se empaqueta en su propia imagen Docker y corre como un Cloud Run Job disparado por Cloud Scheduler, escalonados media hora entre sí.",
    "cs.impl5": "<strong>Fiabilidad.</strong> Reintentos con backoff exponencial y jitter, clasificación de errores transitorios frente a definitivos, control de límites de tasa antes de agotarlos, y validación de credenciales antes de escribir una sola fila.",
    "cs.impl6": "<strong>Documentación.</strong> Un README por pipeline con la arquitectura, el razonamiento de cada decisión y las tablas de reconciliación de cifras contra la interfaz de cada plataforma.",

    "cs.dec1title": "La capa oro se materializa como tabla, no como vista",
    "cs.dec1body": "La deduplicación usa funciones de ventana, y BigQuery no puede empujar el filtro de fecha del dashboard por debajo de un ROW_NUMBER(). Una vista escanearía las tablas base completas en cada gráfico. Como tabla particionada, el filtro sí poda particiones y la deduplicación se paga una vez por corrida. Una vista materializada tampoco servía: BigQuery no las admite con funciones de ventana.",
    "cs.dec2title": "Tres estrategias de carga incremental, no una",
    "cs.dec2body": "Los pedidos de una tienda no cambian una vez cerrados, así que basta una marca de agua sobre la fecha de actualización, con unos minutos de solape para no perder nada en el límite. Google Analytics 4 y YouTube, en cambio, reescriben el pasado durante días: una marca de agua congelaría cifras provisionales para siempre, así que esas fuentes se reextraen en una ventana móvil. Y cuando la tabla está vacía, el pipeline lo detecta y hace la carga histórica completa sin necesidad de un parámetro manual.",
    "cs.dec3title": "Deduplicar en el modelo, no en el cargador",
    "cs.dec3body": "El cargador siempre añade filas; nunca borra ni reemplaza. Eso lo hace trivialmente reejecutable: una corrida repetida duplica filas en la capa base, y el modelo las descarta al construir la capa oro. Poner la deduplicación en el cargador habría exigido borrados condicionales, que son la vía rápida a perder datos por un filtro mal escrito.",
    "cs.dec4title": "Cinco pipelines independientes, no uno monolítico",
    "cs.dec4body": "Cuando YouTube agota su cuota diaria, las otras cuatro fuentes siguen cargando. Y con los disparadores escalonados media hora, un fallo en los logs se atribuye a un pipeline concreto sin desenredar cinco corridas simultáneas. El coste es repetir la estructura cinco veces; la contrapartida es que un fallo nunca es total.",
    "cs.dec5title": "Quien dispara no es quien ejecuta",
    "cs.dec5body": "La cuenta de servicio que dispara los jobs tiene un único permiso: invocarlos. No puede leer los datos. El programador de tareas no tiene por qué poder ver lo que se carga.",
    "cs.dec6title": "No se almacenan tasas, solo sus componentes",
    "cs.dec6body": "Una tasa de apertura no se puede sumar ni promediar entre días sin obtener un número falso. Los modelos guardan numeradores y denominadores por separado, y la división se hace en la herramienta de visualización sobre las sumas ya agregadas.",

    "cs.ch1title": "Shopify cobra por la complejidad de cada consulta",
    "cs.ch1body": "La API GraphQL rechaza una página si su coste estimado supera el crédito disponible. En vez de fijar un tamaño de página conservador y perder velocidad siempre, el extractor captura el error, calcula un tamaño menor a partir de lo que la propia API declara que puede permitirse, y reintenta con el mismo cursor. No se salta ningún registro, y el log deja escrito el valor que evitaría ese tanteo en corridas futuras.",
    "cs.ch2title": "La cuota de YouTube no se recupera hasta medianoche",
    "cs.ch2body": "Reintentar un error de cuota agotada no solo es inútil: consume más cuota. El clasificador de errores distingue lo transitorio de lo definitivo y aborta de inmediato cuando el motivo es la cuota, en lugar de gastar los reintentos contra una puerta cerrada. Cada corrida contabiliza además las unidades consumidas, que es la línea que responde a dónde se fueron.",
    "cs.ch3title": "Google Analytics 4 puede mentir sin fallar",
    "cs.ch3body": "Un informe demasiado grande se devuelve muestreado, y las dimensiones de alta cardinalidad se colapsan en una categoría llamada (other). En ambos casos la respuesta llega con código 200 y datos de aspecto plausible. El extractor inspecciona los metadatos de cada respuesta y avisa, en lugar de dar la cifra por buena.",
    "cs.ch4title": "Un token válido del canal equivocado",
    "cs.ch4body": "Un refresh token de YouTube puede autenticarse correctamente y pertenecer a otro canal, produciendo series vacías en una corrida que termina en verde. El pipeline contrasta el canal del token contra el configurado antes de empezar, y aborta si no coinciden.",
    "cs.ch5title": "Añadir columnas de una en una rompe BigQuery",
    "cs.ch5body": "BigQuery limita las operaciones de metadatos por tabla. Cuando el origen añadía varias métricas nuevas de golpe, lanzar un ALTER por columna abortaba con un error de demasiadas actualizaciones. La solución fue agrupar todas las columnas que faltan en una sola sentencia.",
    "cs.ch6title": "El alcance de Facebook ya no existe",
    "cs.ch6body": "Meta retiró las métricas de impresiones de página. No es algo pendiente de implementar: es información que la plataforma ya no entrega. Quedó documentado como tal, con la referencia a la deprecación, para que nadie lo confunda con una tarea sin terminar.",

    "cs.diagSources": "Fuentes",
    "cs.diagExtract": "Extracción (Python)",
    "cs.diagBase": "Capa base",
    "cs.diagGold": "Capa oro",
    "cs.diagConsume": "Consumo",
    "cs.diagOrchestration": "Docker · Cloud Run Jobs · Cloud Scheduler (diario)",
    "cs.diagBaseDetail": "Tablas de hechos y dimensiones",
    "cs.diagGoldDetail": "Particionada y clusterizada",
    "cs.decisionsTitle": "Decisiones técnicas",
    "cs.challengesTitle": "Problemas encontrados",
    "cs.outcomeTitle": "Resultado",
    "cs.outcomeBody": "Los cinco pipelines quedaron desplegados y ejecutándose a diario sin intervención. El cliente pasó a consultar en Looker Studio datos que antes exigían exportar y cruzar hojas de cálculo a mano. Las cifras cargadas fueron reconciliadas una a una contra la interfaz de cada plataforma antes de darlas por buenas."
  },

  /* ---------------------------------------------------------------- EN -- */
  en: {
    "page.title": "Nicolás Ramos — Data Analyst",
    "page.description": "Telecommunications engineer with a data-focused profile: analysis, modelling and data engineering with Python, SQL, BigQuery, Google Cloud, Looker Studio and Power BI.",

    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.linkedin": "LinkedIn",
    "nav.lang": "ES",
    "nav.langLabel": "View this site in Spanish",

    "hero.greeting": "Nicolás Ramos",
    "hero.role": "Data Analyst · Junior Data Engineer · Analytics Engineer",
    "hero.intro": "Telecommunications engineer focused on <strong>data</strong>, with early-career knowledge of analysis, modelling and <strong>data engineering</strong>. Hands-on with <strong>Python</strong> and <strong>SQL</strong> across the path of the data: source and API integration, transformation and modelling in <strong>BigQuery</strong>, and reporting in <strong>Looker Studio</strong> and <strong>Power BI</strong>, with practical experience building ELT pipelines that run daily on Google Cloud. I use <strong>generative AI</strong> to support coding, documentation and learning.",
    "hero.seeking": "Looking for a junior data role — data analysis, Analytics Engineering or Data Engineering — to contribute and keep growing within a team.",
    "hero.cvEs": "Download CV (Spanish)",
    "hero.cvEn": "Download CV (English)",

    "stack.title": "Tech stack",
    "stack.subtitle": "Technologies I use in real work, not in tutorials.",
    "stack.languages": "Languages",
    "stack.cloud": "Google Cloud",
    "stack.engineering": "Data engineering",
    "stack.systems": "Containers and systems",
    "stack.bi": "BI and analytics",
    "stack.vcs": "Version control",
    "stack.engineeringItems": "ETL/ELT processes · REST and GraphQL APIs · Incremental loading · Data cleaning and transformation with pandas · Fact and dimension tables · Partitioning and clustering · Data quality",
    "stack.ai": "Applied AI",
    "stack.aiItems": "Generative AI as development support · Prompt design · Agents with custom instructions and commands · Skills · Subagents · MCP",

    "exp.title": "Experience",
    "exp.freelanceRole": "Data Analyst / Junior Data Engineer",
    "exp.freelanceOrg": "Flupix · Social Media, Ads and e-commerce",
    "exp.freelanceDate": "Mar — Aug 2026",
    "exp.freelanceDesc": "Brought into BigQuery the Social Media, Ads and e-commerce metrics that previously lived scattered across Shopify, Meta, Google Analytics 4, Mailchimp and YouTube, through five daily loading processes, and prepared the tables behind the Looker Studio reports.",
    "exp.freelanceLink": "Read the technical case study",
    "exp.claroRole": "University Intern",
    "exp.claroOrg": "Claro Colombia · Bogotá",
    "exp.claroDate": "Feb — Jul 2023",
    "exp.claroDesc": "Tracking reports on fibre feasibility studies and deliveries, and QoS laboratory tests evaluating IPTV traffic prioritisation policies at access points.",

    "edu.title": "Education",
    "edu.degree": "BSc Telecommunications Engineering",
    "edu.degreeOrg": "Universidad Piloto de Colombia · Bogotá",
    "edu.degreeDate": "Aug 2017 — Jul 2023",
    "edu.courseName": "Data Analytics Fundamentals",
    "edu.courseOrg": "IBM & Guayerd",
    "edu.courseDate": "Aug — Nov 2024",
    "edu.badges": "Verifiable certifications",

    "proj.title": "Projects",
    "proj.featured": "Featured project",
    "proj.pipelineTitle": "Marketing and e-commerce data platform",
    "proj.pipelineDesc": "Five ELT pipelines extracting from the Shopify, Meta, Google Analytics 4, Mailchimp and YouTube APIs, loading fact and dimension tables into BigQuery and building a materialised consumption layer for Looker Studio. They were left running daily as Cloud Run Jobs triggered by Cloud Scheduler.",
    "proj.pipelineCta": "Read the case study",
    "proj.ongTitle": "NGO financial management dashboard",
    "proj.ongDesc": "Income and expense tracking dashboard built as the capstone of the IBM & Guayerd Data Analytics programme. Consolidates scattered financial records into a single view for following the budget.",
    "proj.edaTitle": "Exploratory data analysis — Gym Members",
    "proj.edaDesc": "Analysis of a 973-record, 15-variable dataset to surface relationships between training habits and physiological measurements, using distribution, correlation and pair plots.",
    "proj.pbiTitle": "Power BI report portfolio",
    "proj.pbiDesc": "Interactive dashboards on several subjects, each built around a specific reporting question and modelled with Power Query transformations and DAX measures.",
    "proj.viewDetails": "View details",

    "secret.title": "Easter egg",
    "secret.movie": "Favourite film",
    "secret.game": "Favourite game",
    "secret.book": "Favourite book",

    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.email": "Email",
    "footer.phone": "Phone",
    "footer.city": "City",
    "footer.cityValue": "Bogotá, Colombia",

    /* ---- Case study ---- */
    "cs.back": "← Back to portfolio",
    "cs.title": "Marketing and e-commerce data platform",
    "cs.subtitle": "Five ELT pipelines on Google Cloud",
    "cs.confidential": "Work carried out at Flupix for a client in e-commerce and retail. The repository is private, and the client's name, business figures and infrastructure identifiers are not published. What follows are the technical decisions behind it.",

    "cs.overviewTitle": "Overview",
    "cs.overviewBody": "An e-commerce brand measured its performance across five separate platforms — its store, its social accounts, its website, its email marketing and its video channel — and each one lived in its own dashboard. There was no way to compare what a campaign cost against the sales it produced without exporting spreadsheets by hand every week. I built the processes that pull all five sources daily, normalise them into one warehouse and leave them ready to query from a single place.",

    "cs.problemTitle": "The problem",
    "cs.problemBody": "Five APIs, five different data models, five ways to authenticate and five different ways of lying to you. Google Analytics 4 samples large reports without any obvious warning. YouTube rounds subscriber counts and burns through its daily quota halfway into a backfill. Meta stopped exposing Facebook page reach altogether. Mailchimp's open rates have been inflated ever since Apple started prefetching images. Shopify charges by the complexity of each GraphQL query and cuts your pagination short if you overreach. The real work was not moving data: it was deciding what each number actually means before storing it.",

    "cs.archTitle": "How it is organised",
    "cs.archBody": "Each source has its own pipeline, all sharing the same skeleton: parallel extractors, a BigQuery loader and a SQL model that builds the consumption layer. They are five independent pieces: if YouTube's quota runs out, the other four keep loading, and a failure can be traced to one pipeline without untangling five concurrent runs.",

    "cs.stackTitle": "Stack",
    "cs.stackApis": "Integrated APIs",
    "cs.stackConsume": "Consumption",
    "cs.flowTitle": "Data flow",
    "cs.flowBody": "The diagram follows one record's full journey, from the source API to the chart the client sees.",

    "cs.implTitle": "What I built",
    "cs.impl1": "<strong>Extraction.</strong> One module per data domain inside each pipeline, run in parallel. Five different authentication schemes: OAuth client credentials for Shopify, a system token exchanged for a page token in Meta, ambient default credentials for Google Analytics 4, an API key for Mailchimp and an OAuth refresh token for YouTube.",
    "cs.impl2": "<strong>Loading.</strong> A shared BigQuery loader that creates the dataset if missing, tolerates new fields appearing at the source without breaking the schema, and does nothing at all when the DataFrame comes back empty, so a day without data never wipes the history.",
    "cs.impl3": "<strong>Modelling.</strong> Eight SQL models version-controlled in the repository and parametrised by project and dataset, building a partitioned and clustered gold layer per source. Deduplication is handled with window functions over the extraction timestamp.",
    "cs.impl4": "<strong>Orchestration.</strong> Each pipeline is packaged into its own Docker image and runs as a Cloud Run Job triggered by Cloud Scheduler, staggered half an hour apart.",
    "cs.impl5": "<strong>Reliability.</strong> Retries with exponential backoff and jitter, classification of transient versus fatal errors, rate-limit handling before quotas run out, and credential validation before a single row is written.",
    "cs.impl6": "<strong>Documentation.</strong> One README per pipeline covering the architecture, the reasoning behind each decision, and reconciliation tables comparing loaded figures against each platform's own interface.",

    "cs.dec1title": "The gold layer is materialised as a table, not a view",
    "cs.dec1body": "Deduplication uses window functions, and BigQuery cannot push the dashboard's date filter below a ROW_NUMBER(). A view would scan the full base tables on every single chart. As a partitioned table, the filter does prune partitions and deduplication is paid once per run. A materialised view was not an option either: BigQuery does not allow window functions in them.",
    "cs.dec2title": "Three incremental strategies, not one",
    "cs.dec2body": "Store orders do not change once closed, so a watermark on the updated timestamp is enough, with a few minutes of overlap so nothing slips through at the boundary. Google Analytics 4 and YouTube, by contrast, restate the past for days: a watermark would freeze provisional numbers forever, so those sources are re-extracted over a rolling window. And when a table is empty, the pipeline detects it and runs the full backfill without needing a manual flag.",
    "cs.dec3title": "Deduplicate in the model, not in the loader",
    "cs.dec3body": "The loader only ever appends; it never deletes or replaces. That makes it trivially re-runnable: a repeated run duplicates rows in the base layer, and the model discards them when building the gold layer. Putting deduplication in the loader would have required conditional deletes, which are the fastest route to losing data to a badly written filter.",
    "cs.dec4title": "Five independent pipelines, not one monolith",
    "cs.dec4body": "When YouTube burns through its daily quota, the other four sources keep loading. And with triggers staggered half an hour apart, a failure in the logs traces back to one specific pipeline without untangling five concurrent runs. The cost is repeating the structure five times; the payoff is that a failure is never total.",
    "cs.dec5title": "Whoever triggers is not whoever executes",
    "cs.dec5body": "The service account that triggers the jobs has exactly one permission: invoking them. It cannot read the data. The scheduler has no business being able to see what gets loaded.",
    "cs.dec6title": "Rates are never stored, only their components",
    "cs.dec6body": "An open rate cannot be summed or averaged across days without producing a false number. The models store numerators and denominators separately, and the division happens in the visualisation tool over the already-aggregated sums.",

    "cs.ch1title": "Shopify charges by query complexity",
    "cs.ch1body": "The GraphQL API rejects a page when its estimated cost exceeds the available credit. Rather than fixing a conservative page size and losing speed permanently, the extractor catches the error, derives a smaller size from what the API itself says it can afford, and retries on the same cursor. No record is skipped, and the log records the value that would avoid the guesswork on future runs.",
    "cs.ch2title": "YouTube's quota does not reset until midnight",
    "cs.ch2body": "Retrying a quota-exceeded error is not merely useless: it consumes more quota. The error classifier separates transient from fatal and aborts immediately when the reason is quota, instead of spending retries against a closed door. Each run also accounts for the units it consumed, which is the line that answers where they went.",
    "cs.ch3title": "Google Analytics 4 can lie without failing",
    "cs.ch3body": "An oversized report comes back sampled, and high-cardinality dimensions collapse into a bucket called (other). In both cases the response arrives with a 200 and plausible-looking data. The extractor inspects the metadata on every response and warns, instead of taking the figure at face value.",
    "cs.ch4title": "A valid token for the wrong channel",
    "cs.ch4body": "A YouTube refresh token can authenticate perfectly and belong to a different channel, producing empty series in a run that finishes green. The pipeline cross-checks the token's channel against the configured one before starting, and aborts when they disagree.",
    "cs.ch5title": "Adding columns one at a time breaks BigQuery",
    "cs.ch5body": "BigQuery limits metadata operations per table. When a source added several new metrics at once, issuing one ALTER per column aborted with a too-many-updates error. The fix was batching every missing column into a single statement.",
    "cs.ch6title": "Facebook page reach no longer exists",
    "cs.ch6body": "Meta withdrew its page impression metrics. This is not something left to implement: it is data the platform no longer hands out. It was documented as such, with the deprecation reference, so nobody mistakes it for unfinished work.",

    "cs.diagSources": "Sources",
    "cs.diagExtract": "Extraction (Python)",
    "cs.diagBase": "Base layer",
    "cs.diagGold": "Gold layer",
    "cs.diagConsume": "Consumption",
    "cs.diagOrchestration": "Docker · Cloud Run Jobs · Cloud Scheduler (daily)",
    "cs.diagBaseDetail": "Fact and dimension tables",
    "cs.diagGoldDetail": "Partitioned and clustered",
    "cs.decisionsTitle": "Technical decisions",
    "cs.challengesTitle": "Problems I ran into",
    "cs.outcomeTitle": "Outcome",
    "cs.outcomeBody": "All five pipelines were left deployed and running daily without intervention. The client moved to reading in Looker Studio what previously required exporting and cross-referencing spreadsheets by hand. Every loaded figure was reconciled one by one against each platform's own interface before being accepted.",
    "cs.notBuiltTitle": "What it does not have",
    "cs.notBuiltBody": "For the sake of technical honesty, and because it comes up in interviews: this project has no automated tests, no CI/CD and no infrastructure as code. Validation was manual and documented, and deployment happens from the command line. Those three are the top of my learning list."
  }
};

/* ------------------------------------------------------------------------ */

const DEFAULT_LANG = "es";
const STORAGE_KEY = "portfolio-lang";

function translate(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value === undefined) return;
    // Algunas cadenas llevan <strong> para resaltar tecnologías; el resto es
    // texto plano y se asigna con textContent, que es más barato y más seguro.
    if (value.includes("<")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
    // El efecto glitch duplica el texto en dos capas con content: attr(data-text).
    // Si la cadena cambiara de idioma, las capas quedarían desincronizadas.
    if (el.dataset.text !== undefined) el.dataset.text = el.textContent;
  });

  document.querySelectorAll("[data-i18n-href]").forEach((el) => {
    const value = dict[el.dataset.i18nHref];
    if (value !== undefined) el.setAttribute("href", value);
  });

  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    const value = dict[el.dataset.i18nLabel];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  if (dict["page.title"]) document.title = dict["page.title"];

  const meta = document.querySelector('meta[name="description"]');
  if (meta && dict["page.description"]) meta.setAttribute("content", dict["page.description"]);

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // Modo privado o almacenamiento bloqueado: el idioma no persiste entre
    // visitas, pero la página sigue funcionando. No hay nada que reportar.
  }
}

function currentLang() {
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    saved = null;
  }
  if (saved && TRANSLATIONS[saved]) return saved;
  // Sin preferencia guardada se respeta el idioma del navegador: un recruiter
  // internacional debería caer en inglés sin tener que buscar el selector.
  const browser = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
  return TRANSLATIONS[browser] ? browser : DEFAULT_LANG;
}

function toggleLang() {
  translate(document.documentElement.lang === "es" ? "en" : "es");
}

document.addEventListener("DOMContentLoaded", () => {
  translate(currentLang());
  const button = document.getElementById("lang-toggle");
  if (button) button.addEventListener("click", toggleLang);
});
