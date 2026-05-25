# Changelog

Todos los cambios notables en el proyecto **Aloria B2B Lead Intelligence** serán documentados en este archivo. El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a las prácticas de etiquetado de demos de negocio.

---

## [1.0.0-demo] - 2026-05-25

### Adicionado
*   **AI Lead Qualification Assistant:** Simulación interactiva del *AI Sales Concierge* de 7 preguntas con soporte de autocompletado simulado de alta velocidad.
*   **Filtros de Workspace Dinámicos:** Configuración parametrizada para 3 sectores B2B (Agencia, Consultoría, TI Cloud).
*   **Métricas e Interpretación Diagnóstica:** Módulo de lead scoring que evalúa y grafica en tiempo real Fit, Urgencia, Presupuesto, Decisión y Complejidad.
*   **AI Sales Brief Ejecutivo:** Estructuración automatizada de Pain Points, riesgos, alcance de proyecto y preguntas de descubrimiento sugeridas.
*   **Log de Oportunidades Interactivo:** Tabla en dashboard con precarga de leads corporativos reales del sector. Soporta carga instantánea cruzada (clic en fila carga Scoring y Brief en el calificador).
*   **Documentación de Preparación:**
    *   `README.md`: Documento central con objetivo de negocio, flujo detallado, stack técnico y boundaries de la simulación.
    *   `SECURITY_NOTES.md`: Registro de auditoría que detalla el estado actual, mitigaciones XSS e infraestructura de producción recomendada.

### Modificado
*   **Refinamiento de Trust Copy:**
    *   Se reemplazaron todos los claims de "Datos en vivo" por "Escenario demo · Datos simulados" para total honestidad con el usuario evaluador.
    *   Se agregaron leyendas de microcopy discreto en las métricas del pipeline y la tabla comparativa: *"Escenario ilustrativo con datos simulados."*
*   **Sanitización de Seguridad (XSS-lite):**
    *   Se creó el helper central `escapeHTML` en `app.js` para escapar caracteres peligrosos (`&`, `<`, `>`, `"`, `'`).
    *   Se aplicó `escapeHTML` a todas las inyecciones de `innerHTML` que manipulan cadenas de variables dinámicas procedentes de entradas libres de chat (`chatAnswers`).
    *   Se prefirió y reforzó el uso de `.textContent` en todas las inserciones simples de texto del *Brief Card* y *Scoring Panel*.
*   **Ajuste de CTA Final:**
    *   El enlace secundario "Ver otras demos de Aloria" se redirigió de `https://vercel.com` a `#casos-de-uso` (para mantener la retención dentro de la SPA).
    *   Se dejó el enlace oficial en producción de Aloria preparado como comentario para despliegues definitivos.
