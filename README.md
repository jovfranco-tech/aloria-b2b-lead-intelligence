# Aloria B2B Lead Intelligence - Demo Premium

Demo interactiva premium de **Aloria B2B Lead Intelligence**, diseñada específicamente para ilustrar cómo las empresas de servicios profesionales y B2B (consultoras, agencias, despachos, integradores de TI) pueden automatizar la calificación, el scoring y la generación de briefs comerciales a partir de leads corporativos entrantes vagos o incompletos.

**URL en Producción:** [https://aloria-b2b-lead-intelligence.vercel.app](https://aloria-b2b-lead-intelligence.vercel.app)

---

## 🎯 Objetivo Comercial

Las empresas B2B de servicios reciben constantemente consultas informales o vagas en sus canales (sitio web, WhatsApp, LinkedIn, email) como: *"me interesa"*, *"cuánto cuesta"* o *"necesito una asesoría"*. 
Normalmente, calificar estos leads requiere horas de interacción humana (correos, mensajes de ida y vuelta) o formularios eternos que destruyen la conversión.

**Aloria B2B Lead Intelligence** demuestra un flujo de trabajo AI-native premium que:
1.  **Engancha de inmediato** al prospecto con un asistente conversacional (*AI Sales Concierge*) sumamente consultivo.
2.  **Califica en tiempo real** variables críticas de negocio (Alcance, Urgencia, Presupuesto, Stakeholders/Decisores, Stack tecnológico).
3.  **Calcula dinámicamente el Scoring de Oportunidad** (Fit, Urgencia, Presupuesto, Decisor, Complejidad) y estima el *Revenue Potential* y la siguiente mejor acción comercial (*Next Best Action*).
4.  **Compila un AI Sales Brief ejecutivo** detallado para el equipo de ventas, sincronizándolo en Slack o CRM antes de que empiece la llamada.
5.  **Despliega el calendario de agendamiento instantáneo** solo a leads de alta prioridad, integrando plantillas estructuradas de briefing directamente al WhatsApp del ejecutivo asignado.

---

## ⚙️ Flujo Principal de la Demo

1.  **Selección de Workspace:** El usuario (ejecutivo de ventas o director comercial que evalúa el software) puede alternar entre 3 sectores muestra en el menú superior:
    *   *Agencia de Growth & Marketing*
    *   *Consultoría de Procesos & CRM*
    *   *Integrador de TI & Cloud*
2.  **AI Sales Concierge (Simulador de Chat):** 
    *   El usuario puede escribir una respuesta libre o hacer clic en los **chips de respuestas rápidas** para ver cómo responde la IA consultiva.
    *   Se incluye un botón de **"Simular Flujo Completo"** que automatiza de forma interactiva las 7 preguntas críticas con tiempos de escritura realistas y metadatos de intención visuales (`[Intent detected]`).
3.  **Lead Scoring Reactivo:** En cada interacción, las barras de criterios avanzan, el círculo radial recalcula el porcentaje general y se actualiza el diagnóstico ejecutivo comercial en tiempo real.
4.  **AI Sales Brief & Agendamiento:** Al finalizar el chat, se visualiza el Brief estructurado completo con dolor de negocio, riesgos, oportunidad, alcance y preguntas sugeridas de descubrimiento técnico. Se desbloquea el calendario interactivo y un panel con la previsualización del mensaje estructurado de WhatsApp para el agente comercial.
5.  **Dashboard Log Interactivo:** Un panel administrativo completo con KPIs consolidados, gráficos de problemas sectoriales frecuentes y una tabla de oportunidades recientes. Al hacer clic en cualquier lead previo de la tabla (ej. *NovaOps*, *LegalCore*, *MarketPilot*), la interfaz del calificador se actualiza al instante con sus datos y brief correspondientes para facilitar la auditoría.

---

## 🛠️ Stack Tecnológico

El proyecto se diseñó con un enfoque **zero-overhead** y **ultra-performance**, maximizando la velocidad y eliminando dependencias externas que ralenticen la visualización:
*   **Core:** HTML5 Semántico y Estructurado (W3C compatible, optimizado para lectores de pantalla y SEO básico).
*   **Estilos (CSS3 Vanilla):** Diseño responsive premium con variables CSS de color unificadas, desenfoques glassmorphic (`backdrop-filter`), ritmo visual fluido y adaptabilidad automática a layouts de tarjetas móviles en anchos menores a 768px.
*   **Lógica (Vanilla JS):** Motor dinámico de estados autónomo. Implementa la máquina de estados conversacional, algoritmos matemáticos de scoring, inyección reactiva en el pipeline y lógica cruzada de auditoría.
*   **Alojamiento:** Desplegado de forma estática en **Vercel** bajo infraestructura edge y conectado con automatización de commits a GitHub.

---

## ⚠️ Demo Boundaries (Límites de la Simulación)

Esta aplicación es una **demostración interactiva de alta fidelidad para el área frontend/UX**. 
*   **Sin Backend:** No se realizan consultas a bases de datos ni servicios de red de terceros. Todos los datos de leads precargados y los flujos conversacionales se ejecutan de manera local y determinista en el cliente.
*   **Sin Modelos de Lenguaje (LLM) reales en Producción:** Las respuestas de la IA y las detecciones de intención se simulan mediante reglas estructuradas del motor dinámico del frontend para asegurar consistencia comercial en la prueba.
*   **Sin Integraciones Activas:** El envío de WhatsApp, agendamiento de calendario y sincronización con HubSpot/Salesforce son simulaciones visuales. No se realizan llamadas API ni se almacenan credenciales.

---

## 📄 Licencia y Créditos

Desarrollado con estándares de diseño premium por **Aloria AI Commerce** para venta consultiva corporativa.  
Todos los derechos reservados, 2026.
