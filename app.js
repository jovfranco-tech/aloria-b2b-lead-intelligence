/* ==========================================================================
   ALORIA B2B LEAD INTELLIGENCE - ENGINE & INTERACTIVE STATE MACHINE (ITERATION FINAL)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  // Helper para escapar HTML (Prevenir ataques XSS en la demo)
  function escapeHTML(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 1. CONFIGURACIÓN DE WORKSPACES MOCK (REQUISITO 13)
  const workspaces = {
    marketing: {
      name: "Agencia de Growth & Marketing",
      domain: "leads.growth.aloria.mx",
      salesRep: "Sofía Ramos · Directora de Growth",
      avgBudget: "$6,450",
      leadsCaptados: "184",
      leadsCalificados: "132",
      leadsHigh: "48",
      agendaRate: "42%",
      estancados: "32 prospectos",
      frecuente: "Costo de pauta Meta Ads",
      recomendedLead: "NovaOps Consulting ha agendado llamada para mañana 09:00 AM. Fit Score de 94% con presupuesto de $7,000/mes. Revisa su brief de 5 canales antes de la llamada.",
      problems: [
        { label: "Bajo Retorno en Pauta Ads", pct: 45 },
        { label: "Embudo de Tráfico Roto", pct: 35 },
        { label: "Falta de CRM y Leads Fríos", pct: 20 }
      ],
      suggestedLeads: [
        { 
          id: "m1", 
          company: "NovaOps Consulting", 
          industry: "Consultoría TI", 
          initialLead: "Necesito una cotización para automatizar mi proceso comercial", 
          budget: "$7,000 USD/mes", 
          urgency: "Alta (30 días)", 
          priority: "high", 
          score: 87, 
          decisor: "Socio Comercial / Dir. Ventas", 
          tools: "Excel, WhatsApp individual", 
          problem: "El equipo comercial recibe leads por WhatsApp y los gestiona manualmente en hojas de cálculo. Pérdidas en tiempos de respuesta.", 
          summary: "El prospecto busca calificar y enrutar leads corporativos entrantes de WhatsApp para eliminar cuellos de botella y descarte comercial.",
          opportunity: "Venta de licencia Aloria Suite (Enterprise) con integraciones personalizadas de CRM. Ticket mensual estimado de $7,000 USD.",
          scope: "AI lead qualification, WhatsApp flow, CRM handoff y dashboard comercial ligero.", 
          painPoints: "Saturación comercial, pérdida del 30% de oportunidades por falta de velocidad.",
          risks: "Falta de claridad sobre integración con herramientas locales y legacy.", 
          revenuePotential: "ALTO ($25k - $75k USD)",
          nextAction: "Discovery call urgente de 30 minutos",
          diagnostic: "Lead de alta prioridad. El prospecto tiene un problema claro de pérdida de leads en WhatsApp, urgencia alta de 30 días y posible decisor involucrado. Recomendación: agendar discovery call esta semana.",
          questions: [
            "¿Cuántos leads se pierden exactamente por falta de velocidad en el primer contacto?",
            "¿Qué CRM legado o herramientas de facturación requieren sincronizarse?",
            "¿Quién auditará la propuesta final del integrador comercial?"
          ]
        },
        { 
          id: "m2", 
          company: "LegalCore Partners", 
          industry: "Servicios Legales", 
          initialLead: "Quiero una cotización para centralizar mi intake de leads legales", 
          budget: "Por definir", 
          urgency: "Media (60 días)", 
          priority: "info", 
          score: 61, 
          decisor: "Gerente Operativo (No decisor directo)", 
          tools: "Excel, carpetas físicas", 
          problem: "Intake lento de leads fiscales que entran por formularios web. Buscan centralización inicial.", 
          summary: "Firma de servicios legales que investiga un sistema centralizado de intake de leads fiscales, pero no cuenta con presupuesto aprobado.",
          opportunity: "Lead viable para nurturing a mediano plazo. Re-calificar en 60 días para plan de automatización inicial una vez liberados los fondos de TI.",
          scope: "Flujo básico de intake legal, almacenamiento seguro en base de datos contable.", 
          painPoints: "Falta de presupuesto aprobado y ausencia de decisor clave en el chat.",
          risks: "Presupuesto anual TI aún no liberado ni aprobado.", 
          revenuePotential: "MEDIO ($10k - $25k USD)",
          nextAction: "Solicitar presupuesto / Nurturing",
          diagnostic: "Falta información clave. El prospecto busca solucionar un intake lento, pero no cuenta con presupuesto definido ni decisores autorizados en la mesa. Recomendación: enviar brochure y solicitar mayor contexto por email.",
          questions: [
            "¿Cuándo estiman liberar el presupuesto anual para software y operaciones?",
            "¿Quién en el Comité de Socios lidera la digitalización legal?",
            "¿Qué nivel de cifrado de datos requieren para los expedientes?"
          ]
        },
        { 
          id: "m3", 
          company: "MarketPilot Agency", 
          industry: "Agencia B2B", 
          initialLead: "Busco cotizar automatizaciones en LinkedIn para captar clientes corporativos", 
          budget: "$3,000 USD/mes", 
          urgency: "Media-Baja (Próximo trimestre)", 
          priority: "nurture", 
          score: 54, 
          decisor: "Director General / CEO", 
          tools: "HubSpot básico, LinkedIn Premium", 
          problem: "Generación lenta de prospectos y prospección fría muy costosa en LinkedIn.", 
          summary: "Agencia de growth con interés en optimizar la prospección fría de LinkedIn y sincronizar contactos a HubSpot el próximo trimestre.",
          opportunity: "Venta de plan Aloria Growth. Programar correo automatizado con casos de éxito B2B y reactivar la llamada a mediados del próximo mes.",
          scope: "AI Assistant de prospección + Sincronización automática de contactos calificados a HubSpot.", 
          painPoints: "Falta de urgencia de implementación inmediata (planeada para el próximo trimestre).",
          risks: "Restricciones de API de LinkedIn para flujos intensivos.", 
          revenuePotential: "MEDIO-ALTO ($15k - $35k USD)",
          nextAction: "Enviar caso de uso / Programar seguimiento",
          diagnostic: "Prospecto calificado para Nurturing. Presupuesto y decisor viables, pero la ventana de implementación está programada a 90 días. Recomendación: enviar casos de éxito B2B automatizados.",
          questions: [
            "¿Cuál es el ticket promedio corporativo que buscan vender?",
            "¿Qué tasa de conversión de cierre tienen actualmente en HubSpot?",
            "¿Qué canales de prospección en frío les han funcionado en el pasado?"
          ]
        }
      ],
      chatFlow: {
        intro: "¡Hola! Bienvenido al asistente de **Aloria B2B Lead Intelligence**. Veo que buscas una cotización para automatizar tus ventas B2B. Para ayudarte a estructurar una propuesta exacta en minutos, ¿podrías decirme qué problema o cuello de botella en ventas buscas resolver principalmente?",
        questions: [
          {
            key: "problema",
            question: "¿Qué problema o necesidad comercial quieres resolver principalmente?",
            quickReplies: ["Automatización comercial / Captura", "Pérdida de leads en CRM / WhatsApp", "Falta de leads calificados B2B", "Otro problema operativo"]
          },
          {
            key: "volumen",
            question: "Excelente. ¿Cuántos leads o solicitudes de clientes reciben al mes actualmente en la empresa?",
            quickReplies: ["Menos de 50 leads/mes", "50 - 200 leads/mes", "Más de 200 leads/mes", "Aún no lo medimos"]
          },
          {
            key: "canales",
            question: "Entendido. ¿De qué canales o fuentes de adquisición les llegan esos leads principalmente?",
            quickReplies: ["WhatsApp & Web", "Redes Sociales / LinkedIn Ads", "Búsqueda Google / SEO", "Recomendaciones / Referidos"]
          },
          {
            key: "seguimiento",
            question: "¿Quién en tu equipo les da seguimiento hoy en día a esos leads y cuánto tiempo tardan en responder en promedio?",
            quickReplies: ["Vendedores dedicados (tardan horas)", "Director / Dueño (tardan días)", "Respuestas en minutos", "Sin seguimiento estructurado"]
          },
          {
            key: "presupuesto",
            question: "Perfecto. ¿Tienen un presupuesto aprobado o estimado para resolver este problema comercial?",
            quickReplies: ["Aún no definido", "Menos de $15k MXN/mes", "$15k - $45k MXN/mes", "Más de $45k MXN/mes"]
          },
          {
            key: "decisor",
            question: "Muy claro. ¿Quién toma la decisión final sobre la aprobación y contratación de este proyecto en la empresa?",
            quickReplies: ["Yo tomo la decisión", "Socio comercial / Director", "Comité directivo / CEO", "Solo investigando inicialmente"]
          },
          {
            key: "herramientas",
            question: "Por último, ¿qué herramientas o plataformas de ventas/CRM usan actualmente en su negocio hoy?",
            quickReplies: ["Excel / Hojas manuales", "WhatsApp Business únicamente", "HubSpot / Salesforce CRM", "Ninguna herramienta"]
          }
        ]
      }
    },
    consultoria: {
      name: "Consultoría de Procesos & CRM",
      domain: "leads.consulting.aloria.mx",
      salesRep: "Carlos Mendoza · Socio Consultor",
      avgBudget: "$12,800",
      leadsCaptados: "94",
      leadsCalificados: "62",
      leadsHigh: "22",
      agendaRate: "38%",
      estancados: "14 prospectos",
      frecuente: "Costo de implementación CRM",
      recomendedLead: "Orbis Consultores ha agendado llamada para el martes 9:00 AM. Fit Score de 96% con presupuesto de $12k. Socios decisores participarán en la llamada.",
      problems: [
        { label: "Procesos Manuales y Lentitud", pct: 50 },
        { label: "Fuga de Leads en WhatsApp", pct: 35 },
        { label: "Falta de Visibilidad Directiva", pct: 15 }
      ],
      suggestedLeads: [
        { 
          id: "c1", 
          company: "Orbis Consultores", 
          industry: "Servicios Corporativos", 
          initialLead: "Busco consultoría operativa para estructurar flujos comerciales y CRM", 
          budget: "$12,000 USD", 
          urgency: "Alta (30 días)", 
          priority: "high", 
          score: 96, 
          decisor: "Director de Operaciones / Socios", 
          tools: "Excel, WhatsApp individual", 
          problem: "Tardan hasta 48 horas en cotizar servicios corporativos complejos y pierden cerca de 25% de prospectos.", 
          summary: "Despacho corporativo que pierde el 25% de sus prospectos por demoras de hasta 48 horas en cotizaciones e inconsistencia operativa.",
          opportunity: "Consultoría de reconfiguración de ventas + Implementación completa de HubSpot Enterprise CRM. Retorno estimado en 90 días.",
          scope: "Mapeo de procesos comerciales + Implementación completa de HubSpot CRM + Firma digital.", 
          painPoints: "Procesos lentos, asesores desorganizados, pérdida activa de oportunidades del 25%.",
          risks: "Resistencia cultural de asesores de ventas tradicionales.", 
          revenuePotential: "ALTO ($45k - $90k USD)",
          nextAction: "Discovery call enfocada en flujos de cotización",
          diagnostic: "Oportunidad corporativa de alta prioridad. Cuentan con un dolor comercial crítico (merma del 25%), urgencia alta y decisores directamente involucrados. Discovery call técnica prioritaria.",
          questions: [
            "¿Cuánto tiempo promedio toma cotizar una propuesta personalizada hoy?",
            "¿Qué herramientas de firma electrónica emplean en operaciones?",
            "¿Cómo se mide la comisión del equipo comercial?"
          ]
        },
        { 
          id: "c2", 
          company: "Apex RH", 
          industry: "RH / Outsourcing", 
          initialLead: "cotizacion de asesoria comercial porfa", 
          budget: "Por definir", 
          urgency: "Desconocida", 
          priority: "info", 
          score: 48, 
          decisor: "Gerente Operativo (Investigador inicial)", 
          tools: "WhatsApp", 
          problem: "Microempresa buscando soporte contable y de recursos humanos general.", 
          summary: "Microempresa buscando asesoría de contratación o soporte operativo básico, sin estructura comercial ni tecnológica.",
          opportunity: "No califica para servicios directos de consultoría corporativa. Recomendación: derivar a webinars y plantillas comerciales grabadas.",
          scope: "No fit para consultoría corporativa de procesos.", 
          painPoints: "Falta de estructura corporativa y presupuesto nulo.",
          risks: "Baja rentabilidad para consultores senior.", 
          revenuePotential: "BAJO (Menos de $5k)",
          nextAction: "Derivar a cursos grabados y webinars",
          diagnostic: "Lead no califica por ahora. Sin presupuesto aprobado, sin decisores corporativos de nivel senior y buscando consultoría menor. Derivar a recursos y nutrir pasivamente.",
          questions: [
            "¿Tienen un volumen mensual superior a $10,000 USD en facturación?",
            "¿Qué nivel de digitalización busca el fundador a largo plazo?",
            "¿Quién en la dirección autorizaría contratos de asesoría?"
          ]
        }
      ],
      chatFlow: {
        intro: "¡Hola! Bienvenido al asistente de **Aloria B2B Lead Intelligence**. Veo que te interesa una consultoría operativa o la optimización de procesos mediante CRM. Para ayudarte a estructurar soluciones exactas en minutos, ¿podrías decirme qué problema o cuello de botella en ventas y operaciones buscas resolver principalmente?",
        questions: [
          {
            key: "problema",
            question: "¿Qué cuello de botella en ventas y operaciones buscas resolver principalmente?",
            quickReplies: ["Cotizaciones lentas / Pérdida leads", "Falta de CRM / Procesos manuales", "Fugas en WhatsApp de ejecutivos", "Falta de reportes directivos"]
          },
          {
            key: "volumen",
            question: "Excelente. ¿Cuántos ejecutivos comerciales o asesores operan actualmente en la organización?",
            quickReplies: ["1 - 5 asesores", "6 - 20 asesores", "21 - 80 asesores", "+80 corporativo"]
          },
          {
            key: "canales",
            question: "¿De qué canales o fuentes comerciales les llegan los leads corporativos?",
            quickReplies: ["Licitaciones / Sitio web", "WhatsApp individual", "LinkedIn / Eventos directos", "Recomendados / Ventas en frío"]
          },
          {
            key: "seguimiento",
            question: "¿Quién da seguimiento hoy en día y cuánto tardan en cotizar?",
            quickReplies: ["Vendedores individuales (tardan 24-48h)", "Comité directivo (tardan semanas)", "Respuestas rápidas", "Sin proceso formal"]
          },
          {
            key: "presupuesto",
            question: "Perfecto. ¿Cuál es el presupuesto estimado de inversión total asignado para esta consultoría?",
            quickReplies: ["Aún no definido", "Menos de $50k MXN", "$50k - $150k MXN", "Más de $150k MXN"]
          },
          {
            key: "decisor",
            question: "Entendido. ¿Quiénes son los stakeholders involucrados en la aprobación final del proyecto?",
            quickReplies: ["Comité de Socios", "Director de Ventas / Finanzas", "CEO / Dueño Único", "Investigación técnica"]
          },
          {
            key: "herramientas",
            question: "Por último, ¿qué herramientas o software corporativo utilizan hoy para su negocio?",
            quickReplies: ["Excel / WhatsApp", "CRM básico (Zoho/Pipedrive)", "ERP corporativo (SAP/Oracle)", "Ninguna herramienta"]
          }
        ]
      }
    },
    tecnologia: {
      name: "Integrador de TI & Cloud",
      domain: "leads.cloud.aloria.mx",
      salesRep: "Elena Garrido · Arquitecta Cloud",
      avgBudget: "$22,400",
      leadsCaptados: "120",
      leadsCalificados: "88",
      leadsHigh: "35",
      agendaRate: "45%",
      estancados: "8 prospectos",
      frecuente: "Costo de migración AWS",
      recomendedLead: "Kripto Tecnologías ha agendado llamada para hoy. Fit Score de 94% con presupuesto de $25k. Plazo crítico para migrar base de datos local a AWS.",
      problems: [
        { label: "Caídas de Servidor Local / VPN", pct: 55 },
        { label: "Inseguridad de Datos (Home Office)", pct: 25 },
        { label: "Falta de Escalabilidad Tecnológica", pct: 20 }
      ],
      suggestedLeads: [
        { 
          id: "t1", 
          company: "Kripto Tecnologías", 
          industry: "Tecnología / Software", 
          initialLead: "Necesitamos cotizar la migración de servidores locales a la nube de AWS", 
          budget: "$25,000 USD/año", 
          urgency: "Alta (60 días)", 
          priority: "high", 
          score: 94, 
          decisor: "Director de TI / CFO", 
          tools: "Windows Server local, SQL Server", 
          problem: "Caídas recurrentes de base de datos local VPN lenta y vulnerable para teletrabajo.", 
          summary: "Empresa de tecnología que busca migrar bases de datos locales a AWS Cloud para evitar caídas recurrentes que frenan la operación de 120 empleados en home office.",
          opportunity: "Migración e integración Cloud de bases de datos a AWS RDS + Configuración de VPN segura redundante. Presupuesto aprobado de $25k anuales.",
          scope: "Migración de base de datos SQL a AWS RDS Cloud + VPN redundante de alta disponibilidad.", 
          painPoints: "VPN lenta, caídas del sistema local de bases de datos que frenan al equipo.",
          risks: "Interrupción de base de datos activa de facturación durante migración.", 
          revenuePotential: "ALTO ($50k - $120k USD)",
          nextAction: "Discovery call técnica con arquitecto AWS",
          diagnostic: "Oportunidad de alta prioridad técnica de TI. Cuenta con presupuesto anual aprobado, decisores clave involucrados y plazo crítico del trimestre fiscal. Discovery técnico urgente.",
          questions: [
            "¿Qué volumen en GB tienen las bases de datos de Windows Server?",
            "¿Tienen respaldos históricos y backups redundantes hoy?",
            "¿Cuál es el margen máximo de inactividad tolerado en migración?"
          ]
        }
      ],
      chatFlow: {
        intro: "¡Hola! Bienvenido al asistente de **Aloria B2B Lead Intelligence**. Veo que buscas una cotización para infraestructura TI, migración Cloud o ciberseguridad. Para ayudarte a estructurar soluciones exactas en minutos, ¿podrías decirme qué problema técnico o vulnerabilidad buscas resolver principalmente?",
        questions: [
          {
            key: "problema",
            question: "¿Qué problema técnico o vulnerabilidad en la nube buscas resolver principalmente?",
            quickReplies: ["Caídas de servidores locales", "VPN lenta / Latencia de red", "Seguridad home office vulnerable", "Migración de base de datos SQL"]
          },
          {
            key: "volumen",
            question: "Entendido. ¿Cuántos usuarios o empleados utilizarán los sistemas e infraestructura tecnológica a diario?",
            quickReplies: ["1 - 20 usuarios", "21 - 100 usuarios", "101 - 500 usuarios", "+500 corporativo"]
          },
          {
            key: "canales",
            question: "¿De dónde provienen usualmente los requerimientos técnicos?",
            quickReplies: ["Sitio web / RFP técnico", "Soporte de TI interno", "Correos de dirección", "Ventas en frío"]
          },
          {
            key: "seguimiento",
            question: "¿Quién da seguimiento hoy en día al área de sistemas internos y qué tan rápido atienden?",
            quickReplies: ["Área de soporte interna (lenta)", "Director de TI (tardan días)", "Soporte express en minutos", "Sin área formal de TI"]
          },
          {
            key: "presupuesto",
            question: "Perfecto. ¿Tienen un presupuesto de TI anual estimado para este proyecto?",
            quickReplies: ["Aún no definido", "Menos de $100k MXN", "$100k - $400k MXN", "Más de $400k MXN"]
          },
          {
            key: "decisor",
            question: "Excelente. ¿Quiénes son los roles o decisores que autorizan el presupuesto final de tecnología?",
            quickReplies: ["Director de TI / CTO", "CFO / Director Financiero", "Director General / CEO", "Solo investigación inicial"]
          },
          {
            key: "herramientas",
            question: "Por último, ¿cuál es su entorno o stack tecnológico actual (servidores locales, SQL Server, AWS, etc.)?",
            quickReplies: ["Windows Server local + SQL", "Nube básica (AWS/Azure)", "Computadoras locales + Excel", "Ninguna herramienta"]
          }
        ]
      }
    }
  };

  // 2. ESTADOS INTERACTIVOS DE LA SPA
  let currentWorkspaceKey = "marketing";
  let chatStep = 0;
  let chatAnswers = {};
  let isAutofilling = false;

  // Selectores DOM principales
  const workspaceBtn = document.getElementById("workspaceBtn");
  const workspaceDropdown = document.getElementById("workspaceDropdown");
  const currentWorkspaceText = document.getElementById("currentWorkspaceText");
  const navbarLinks = document.querySelectorAll(".nav-link");
  const navbar = document.getElementById("navbar");
  
  // Chat DOM
  const chatConversation = document.getElementById("chatConversation");
  const chatQuickOptions = document.getElementById("chatQuickOptions");
  const chatTextarea = document.getElementById("chatTextarea");
  const sendChatBtn = document.getElementById("sendChatBtn");
  const autofillBtn = document.getElementById("autofillBtn");
  const assistantTitleName = document.getElementById("assistantTitleName");

  // Stepper DOM (Requisito 7)
  const stepNew = document.getElementById("stepNew");
  const stepProgress = document.getElementById("stepProgress");
  const stepScore = document.getElementById("stepScore");
  const stepBrief = document.getElementById("stepBrief");
  const stepSales = document.getElementById("stepSales");

  // Scoring DOM
  const radialProgress = document.getElementById("radialProgress");
  const radialText = document.getElementById("radialText");
  const priorityBadge = document.getElementById("priorityBadge");
  const revenuePotentialText = document.getElementById("revenuePotentialText");
  const diagnosticText = document.getElementById("diagnosticText");
  
  // Criterios individuales bars
  const fitScoreText = document.getElementById("fitScoreText");
  const fitScoreFill = document.getElementById("fitScoreFill");
  const urgencyScoreText = document.getElementById("urgencyScoreText");
  const urgencyScoreFill = document.getElementById("urgencyScoreFill");
  const budgetScoreText = document.getElementById("budgetScoreText");
  const budgetScoreFill = document.getElementById("budgetScoreFill");
  const decisionScoreText = document.getElementById("decisionScoreText");
  const decisionScoreFill = document.getElementById("decisionScoreFill");
  const complexityScoreText = document.getElementById("complexityScoreText");
  const complexityScoreFill = document.getElementById("complexityScoreFill");

  // Brief DOM
  const briefCompanyName = document.getElementById("briefCompanyName");
  const briefIndustry = document.getElementById("briefIndustry");
  const briefDecisor = document.getElementById("briefDecisor");
  const briefPresupuesto = document.getElementById("briefPresupuesto");
  const briefUrgencia = document.getElementById("briefUrgencia");
  const briefAlcance = document.getElementById("briefAlcance");
  const briefSummary = document.getElementById("briefSummary");
  const briefProblema = document.getElementById("briefProblema");
  const briefPainPoints = document.getElementById("briefPainPoints");
  const briefRiesgos = document.getElementById("briefRiesgos");
  const briefOpportunity = document.getElementById("briefOpportunity");
  const briefPreguntas = document.getElementById("briefPreguntas");
  const briefNextAction = document.getElementById("briefNextAction");

  // Booking & WhatsApp DOM
  const agendaSection = document.getElementById("agenda-section");
  const salesRepName = document.getElementById("salesRepName");
  const whatsappMessage = document.getElementById("whatsappMessage");
  const calendarDays = document.querySelectorAll(".calendar-day.available");
  const calendarSlots = document.querySelectorAll(".calendar-slot");
  const confirmBookingBtn = document.getElementById("confirmBookingBtn");

  // Dashboard DOM
  const dashboardWorkspaceTitle = document.getElementById("dashboardWorkspaceTitle");
  const dashboardDomain = document.getElementById("dashboardDomain");
  const mLeadsCaptados = document.getElementById("mLeadsCaptados");
  const mLeadsCalificados = document.getElementById("mLeadsCalificados");
  const mLeadsHigh = document.getElementById("mLeadsHigh");
  const mBudgetAvg = document.getElementById("mBudgetAvg");
  const mEstancados = document.getElementById("mEstancados");
  const mFrecuente = document.getElementById("mFrecuente");
  const recomendedLeadText = document.getElementById("recomendedLeadText");
  const dashboardProblemsChart = document.getElementById("dashboardProblemsChart");
  const dashboardLeadsTableBody = document.getElementById("dashboardLeadsTableBody");

  // Pipeline DOM
  const pipeDemoLead = document.getElementById("pipeDemoLead");
  const pipeDemoLeadName = document.getElementById("pipeDemoLeadName");

  // ==========================================
  // 3. EVENTO DE SCROLL NAVBAR Sticky Morph
  // ==========================================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ==========================================
  // 4. CAMBIO DE WORKSPACE & ACCESIBILIDAD ARIA (Requisito 13 & 15)
  // ==========================================
  workspaceBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = workspaceDropdown.classList.toggle("show");
    workspaceBtn.setAttribute("aria-expanded", isExpanded);
  });

  document.addEventListener("click", () => {
    workspaceDropdown.classList.remove("show");
    workspaceBtn.setAttribute("aria-expanded", "false");
  });

  const workspaceOptions = document.querySelectorAll(".workspace-option");
  workspaceOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      workspaceOptions.forEach(o => {
        o.classList.remove("active");
        o.setAttribute("aria-selected", "false");
      });
      opt.classList.add("active");
      opt.setAttribute("aria-selected", "true");
      
      const wsKey = opt.dataset.workspace;
      currentWorkspaceKey = wsKey;
      
      // Actualizar Navbar text
      currentWorkspaceText.textContent = workspaces[wsKey].name;
      
      // Inicializar todo con el nuevo Workspace
      initWorkspace();
    });
  });

  // ==========================================
  // 5. MOTOR DE INICIALIZACIÓN
  // ==========================================
  function initWorkspace() {
    const ws = workspaces[currentWorkspaceKey];
    
    // Resetear Chat & Steppers
    chatStep = 0;
    chatAnswers = {};
    isAutofilling = false;
    chatConversation.innerHTML = "";
    chatQuickOptions.innerHTML = "";
    chatTextarea.value = "";
    
    updateSteppers("new");

    // Ocultar sección de agendamiento inicial & pipeline board lead inyectado
    agendaSection.style.display = "none";
    pipeDemoLead.style.display = "none";
    
    // Actualizar Títulos de asistente
    assistantTitleName.textContent = ws.name.split(" ")[0] + " Concierge";
    
    // Inyectar burbuja inicial
    appendAiMessage(ws.chatFlow.intro);
    renderQuickReplies();
    
    // Resetear scoring visual a 0%
    updateScoring(0, 0, 0, 0, 0, 0, "pendiente", "PENDIENTE", "Ingresa una consulta en el chat o simula el proceso para calcular el scoring ejecutivo de oportunidad.");
    
    // Resetear Brief
    briefCompanyName.textContent = "Esperando Datos...";
    briefIndustry.textContent = "Completa el cuestionario";
    briefDecisor.textContent = "—";
    briefPresupuesto.textContent = "—";
    briefUrgencia.textContent = "—";
    briefAlcance.textContent = "—";
    briefSummary.textContent = "—";
    briefProblema.textContent = "—";
    briefPainPoints.textContent = "—";
    briefRiesgos.textContent = "—";
    briefOpportunity.textContent = "—";
    briefNextAction.textContent = "Selecciona una consulta comercial en el chat...";
    briefPreguntas.innerHTML = "<li>—</li>";

    // Actualizar Dashboard
    updateDashboardUI();
  }

  // ==========================================
  // 6. CONTROLADORES DE RENDER DEL CHAT
  // ==========================================
  function appendAiMessage(text) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble-ai";
    bubble.innerHTML = text;
    chatConversation.appendChild(bubble);
    chatConversation.scrollTop = chatConversation.scrollHeight;
  }

  function appendUserMessage(text) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble-user";
    bubble.textContent = text;
    chatConversation.appendChild(bubble);
    chatConversation.scrollTop = chatConversation.scrollHeight;
  }

  function appendTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "chat-bubble chat-bubble-ai typing-indicator-container";
    indicator.id = "typingIndicator";
    indicator.innerHTML = `
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    chatConversation.appendChild(indicator);
    chatConversation.scrollTop = chatConversation.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById("typingIndicator");
    if (indicator) {
      indicator.remove();
    }
  }

  function updateSteppers(status) {
    // Resetear clases
    [stepNew, stepProgress, stepScore, stepBrief, stepSales].forEach(s => {
      s.style.borderColor = "var(--border-color)";
      s.style.color = "var(--color-text-dim)";
    });

    if (status === "new") {
      stepNew.style.borderColor = "var(--color-teal)";
      stepNew.style.color = "var(--color-teal)";
    } else if (status === "progress") {
      stepNew.style.borderColor = "var(--color-teal)";
      stepNew.style.color = "var(--color-teal)";
      stepProgress.style.borderColor = "var(--color-teal)";
      stepProgress.style.color = "var(--color-teal)";
    } else if (status === "score") {
      [stepNew, stepProgress, stepScore].forEach(s => {
        s.style.borderColor = "var(--color-teal)";
        s.style.color = "var(--color-teal)";
      });
    } else if (status === "brief") {
      [stepNew, stepProgress, stepScore, stepBrief].forEach(s => {
        s.style.borderColor = "var(--color-teal)";
        s.style.color = "var(--color-teal)";
      });
    } else if (status === "sales") {
      [stepNew, stepProgress, stepScore, stepBrief, stepSales].forEach(s => {
        s.style.borderColor = "var(--color-teal)";
        s.style.color = "var(--color-teal)";
      });
    }
  }

  function renderQuickReplies() {
    chatQuickOptions.innerHTML = "";
    const ws = workspaces[currentWorkspaceKey];
    
    // Si ya completamos las preguntas
    if (chatStep >= ws.chatFlow.questions.length) {
      chatQuickOptions.innerHTML = `<span class="quick-option-chip" style="border-color: var(--color-teal); color: var(--color-teal); font-weight: 700; cursor: default;">Calificación Completada ✔</span>`;
      return;
    }

    const currentQuestion = ws.chatFlow.questions[chatStep];
    currentQuestion.quickReplies.forEach(reply => {
      const chip = document.createElement("button");
      chip.className = "quick-option-chip";
      chip.textContent = reply;
      chip.addEventListener("click", () => {
        if (isAutofilling) return;
        handleUserAnswer(reply);
      });
      chatQuickOptions.appendChild(chip);
    });
  }

  // ==========================================
  // 7. CONTROLADOR DE RESPUESTAS & ESTADOS
  // ==========================================
  function handleUserAnswer(answerText) {
    if (!answerText.trim()) return;
    
    // Agregar respuesta del usuario
    appendUserMessage(answerText);
    
    const ws = workspaces[currentWorkspaceKey];
    const currentQuestion = ws.chatFlow.questions[chatStep];
    
    // Registrar respuesta
    chatAnswers[currentQuestion.key] = answerText;
    
    // Incrementar paso
    chatStep++;
    chatTextarea.value = "";
    
    updateSteppers("progress");

    // Calcular Scoring y Brief Intermedio
    processIntermediateScores();

    // Siguiente paso
    if (chatStep < ws.chatFlow.questions.length) {
      // AI simula responder
      appendTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        
        let prefix = "";
        if (chatStep === 1) prefix = `<span class="chat-meta-indicator">[Intent detected: Automatización]</span>`;
        if (chatStep === 3) prefix = `<span class="chat-meta-indicator">[Missing context identified: Presupuesto]</span>`;
        if (chatStep === 5) prefix = `<span class="chat-meta-indicator">[Next best question: Validar decisores]</span>`;

        appendAiMessage(prefix + ws.chatFlow.questions[chatStep].question);
        renderQuickReplies();
      }, isAutofilling ? 50 : 900);
    } else {
      // Completado del flujo
      appendTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        finishQualification();
      }, isAutofilling ? 50 : 1100);
    }
  }

  // Listener para botón enviar manual
  sendChatBtn.addEventListener("click", () => {
    const text = chatTextarea.value;
    if (text.trim()) {
      handleUserAnswer(text);
    }
  });

  // Permitir enviar con Enter
  chatTextarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChatBtn.click();
    }
  });

  // ==========================================
  // 8. CÁLCULO DE SCORING EN TIEMPO REAL
  // ==========================================
  function processIntermediateScores() {
    let fit = 0, urgency = 0, budget = 0, decision = 0, complexity = 0;
    
    // 1. Fit (Alcance)
    if (chatAnswers.problema) {
      fit = 90;
    }
    
    // 2. Volumen/Equipo
    if (chatAnswers.volumen) {
      if (chatAnswers.volumen.includes("50 - 200") || chatAnswers.volumen.includes("6 - 20") || chatAnswers.volumen.includes("21 - 80") || chatAnswers.volumen.includes("101 - 500") || chatAnswers.volumen.includes("+500") || chatAnswers.volumen.includes("Más de 200")) {
        complexity = 95;
      } else {
        complexity = 60;
      }
    }
    
    // 3. Seguimiento / Canales
    if (chatAnswers.seguimiento) {
      urgency = 75;
    }
    
    // 4. Presupuesto
    let revenuePotential = "PENDIENTE";
    if (chatAnswers.presupuesto) {
      const p = chatAnswers.presupuesto;
      if (p.includes("Más de") || p.includes("$150k") || p.includes("$400k") || p.includes("$7,000") || p.includes("$25,000") || p.includes("$3,000 - $7,000") || p.includes("$7,000 - $15,000") || p.includes("$15,000 - $35,000")) {
        budget = 90;
        revenuePotential = "ALTO ($25k - $75k USD)";
      } else if (p.includes("$15k - $45k") || p.includes("$50k - $150k") || p.includes("$100k - $400k") || p.includes("$1,500 - $3,000")) {
        budget = 80;
        revenuePotential = "MEDIO ($10k - $25k USD)";
      } else {
        budget = 35;
        revenuePotential = "BAJO (Menos de $10k)";
      }
    }
    
    // 5. Decisor
    if (chatAnswers.decisor) {
      const d = chatAnswers.decisor;
      if (d.includes("Yo tomo") || d.includes("Socio") || d.includes("Director") || d.includes("Comité") || d.includes("CEO") || d.includes("CTO") || d.includes("CFO")) {
        decision = 95;
      } else {
        decision = 45;
      }
    }

    // Calcular Overall Score promedio
    let activeCounts = 0;
    let sum = 0;
    if (fit > 0) { sum += fit; activeCounts++; }
    if (urgency > 0) { sum += urgency; activeCounts++; }
    if (budget > 0) { sum += budget; activeCounts++; }
    if (decision > 0) { sum += decision; activeCounts++; }
    if (complexity > 0) { sum += complexity; activeCounts++; }
    
    let overall = activeCounts > 0 ? Math.round(sum / activeCounts) : 0;
    
    // Determinar prioridad y diagnóstico
    let priority = "pendiente";
    let diagnostic = "Analizando respuestas de la simulación comercial en tiempo real...";
    
    if (chatStep >= 4) {
      if (overall >= 82) {
        priority = "high";
        diagnostic = "Lead calificado como ALTA PRIORIDAD. Dolores de alta urgencia detectados con tomador de decisión activo. Recomendación: agendar discovery call esta semana.";
      } else if (overall >= 60) {
        priority = "nurture";
        diagnostic = "Lead requiere Nurturing. El problema de origen es viable, pero el presupuesto o decisor requiere maduración. Recomendación: nutrir con caso de éxito.";
      } else {
        priority = "info";
        diagnostic = "Falta información clave de negocio. El presupuesto no está definido y el contacto no es el decisor directo. Recomendación: solicitar presupuesto por email.";
      }
    }

    updateScoring(overall, fit, urgency, budget, decision, complexity, priority, revenuePotential, diagnostic);
  }

  function updateScoring(overall, fit, urgency, budget, decision, complexity, priority, revenuePotential, diagnostic) {
    // 1. Círculo Radial
    radialText.textContent = `${overall}%`;
    const offset = 226 - (226 * overall) / 100;
    radialProgress.style.strokeDashoffset = offset;

    // 2. Textos e fills
    fitScoreText.textContent = `${fit}%`;
    fitScoreFill.style.width = `${fit}%`;
    
    urgencyScoreText.textContent = `${urgency}%`;
    urgencyScoreFill.style.width = `${urgency}%`;
    
    budgetScoreText.textContent = `${budget}%`;
    budgetScoreFill.style.width = `${budget}%`;
    
    decisionScoreText.textContent = `${decision}%`;
    decisionScoreFill.style.width = `${decision}%`;
    
    complexityScoreText.textContent = `${complexity}%`;
    complexityScoreFill.style.width = `${complexity}%`;

    // 3. Badge de prioridad
    priorityBadge.className = "priority-badge-large";
    if (priority === "high") {
      priorityBadge.textContent = "Alta Prioridad · Discovery Call";
      priorityBadge.style.color = "var(--priority-high)";
      priorityBadge.style.background = "var(--priority-high-bg)";
      priorityBadge.style.borderColor = "var(--priority-high-border)";
    } else if (priority === "nurture") {
      priorityBadge.textContent = "Requiere Nurturing · Enviar Brochure";
      priorityBadge.style.color = "var(--priority-nurture)";
      priorityBadge.style.background = "var(--priority-nurture-bg)";
      priorityBadge.style.borderColor = "var(--priority-nurture-border)";
    } else if (priority === "info") {
      priorityBadge.textContent = "Necesita Más Información";
      priorityBadge.style.color = "var(--priority-info)";
      priorityBadge.style.background = "var(--priority-info-bg)";
      priorityBadge.style.borderColor = "var(--priority-info-border)";
    } else if (priority === "nofit") {
      priorityBadge.textContent = "No Fit por ahora";
      priorityBadge.style.color = "var(--priority-nofit)";
      priorityBadge.style.background = "var(--priority-nofit-bg)";
      priorityBadge.style.borderColor = "var(--priority-nofit-border)";
    } else {
      priorityBadge.textContent = "Pendiente de Calificación";
      priorityBadge.style.color = "var(--color-text-dim)";
      priorityBadge.style.background = "rgba(255,255,255,0.02)";
      priorityBadge.style.borderColor = "var(--border-color)";
    }

    // 4. Revenue & Diagnostic
    revenuePotentialText.textContent = revenuePotential;
    diagnosticText.textContent = diagnostic;
  }

  // ==========================================
  // 9. FINALIZACIÓN Y CARGA DE BRIEF AUTOMÁTICO
  // ==========================================
  function finishQualification() {
    const ws = workspaces[currentWorkspaceKey];
    updateSteppers("brief");
    
    // Inyectar mensaje final del AI Concierge
    appendAiMessage(`
      <span class="chat-meta-indicator">[Brief ready for sales team]</span>
      <strong>¡Calificación Completada con Éxito! ✔</strong><br><br>
      Aloria AI ha compilado todos tus requerimientos comerciales con un **Fit Score de 94%** (Alta Prioridad). Hemos generado un **AI Sales Brief** ejecutivo y lo hemos sincronizado a tu pipeline.<br><br>
      
      Por favor, selecciona un horario de videollamada de 30 minutos a continuación. Llegaremos a la llamada con todo este contexto estructurado para optimizar tu tiempo.
    `);
    
    renderQuickReplies();
    
    // Nuevo Lead dinámico en base a respuestas
    const dynamicLead = {
      id: "demo-lead-dyn",
      company: "Nuevo Lead Demo",
      industry: currentWorkspaceKey === "marketing" ? "E-Commerce / Marketing" : currentWorkspaceKey === "consultoria" ? "Servicios Prof." : "Infraestructura Cloud",
      initialLead: escapeHTML(chatAnswers.problema) || "Necesito cotizar una automatización comercial",
      budget: escapeHTML(chatAnswers.presupuesto) || "$5,000 USD/mes",
      urgency: "Alta (30 días)",
      priority: "high",
      score: 94,
      decisor: escapeHTML(chatAnswers.decisor) || "Director General",
      tools: escapeHTML(chatAnswers.herramientas) || "Excel, WhatsApp",
      problem: escapeHTML(chatAnswers.problema) || "Pérdida de prospectos en CRM y desorden en captación comercial.",
      summary: `Prospecto de ${currentWorkspaceKey === "marketing" ? "Growth" : currentWorkspaceKey === "consultoria" ? "Consultoría" : "Cloud"} calificado en escenario demo. Presenta problemas graves de velocidad y dolores en captura manual.`,
      opportunity: "Implementación de Aloria Suite para automatizar calificación conversacional y sincronizar CRM. Ticket mensual estimado de $5,000 USD.",
      painPoints: "Demoras de respuesta de vendedores, falta de visibilidad en volumen.",
      risks: "Integración con ERP/CRM legacy existente.",
      revenuePotential: "ALTO ($25k - $75k USD)",
      nextAction: "Schedule discovery call de 30 min",
      diagnostic: "Lead de alta prioridad. El prospecto tiene un problema claro, urgencia alta y posible decisor involucrado. Recomendación: agendar discovery call esta semana.",
      questions: [
        "¿Cuántos leads se pierden exactamente por falta de velocidad en el primer contacto?",
        "¿Qué CRM o ERP legacy requiere sincronización técnica?",
        "¿Cuál es el margen de producto o inactividad máxima permitido?"
      ]
    };

    // Actualizar Scoring al 94% final
    updateScoring(dynamicLead.score, 96, 92, 85, 95, 95, dynamicLead.priority, dynamicLead.revenuePotential, dynamicLead.diagnostic);
    
    // Renderizar Brief Card
    renderBriefCard(dynamicLead);
    
    // Mostrar stepper final
    updateSteppers("sales");

    // Desplegar Sección de Agendamiento
    agendaSection.style.display = "block";
    salesRepName.textContent = ws.salesRep;
    
    // Generar formato de WhatsApp / Correo
    renderWhatsAppMessage(dynamicLead);

    // Agregar este nuevo lead recién calificado a la parte superior del Dashboard Log
    addNewLeadToDashboardTable(dynamicLead);

    // Mover pantalla suavemente al agendamiento
    setTimeout(() => {
      agendaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);
  }

  function renderBriefCard(leadData) {
    briefCompanyName.textContent = leadData.company;
    briefIndustry.textContent = leadData.industry;
    briefDecisor.textContent = leadData.decisor;
    briefPresupuesto.textContent = leadData.budget;
    briefUrgencia.textContent = leadData.urgency;
    briefAlcance.textContent = leadData.scope;
    
    // Nuevos campos premium de brief (Requisitos Auditoría)
    briefSummary.textContent = leadData.summary || "—";
    briefProblema.textContent = leadData.problem || "—";
    briefPainPoints.textContent = leadData.painPoints || "—";
    briefRiesgos.textContent = leadData.risks || "—";
    briefOpportunity.textContent = leadData.opportunity || "—";
    briefNextAction.textContent = leadData.nextAction || "—";
    
    // Preguntas sugeridas
    briefPreguntas.innerHTML = "";
    leadData.questions.forEach(q => {
      const li = document.createElement("li");
      li.textContent = q;
      briefPreguntas.appendChild(li);
    });
  }

  function renderWhatsAppMessage(leadData) {
    // Escapar variables interpoladas en HTML
    const company = escapeHTML(leadData.company);
    const industry = escapeHTML(leadData.industry);
    const score = escapeHTML(leadData.score);
    const revenuePotential = escapeHTML(leadData.revenuePotential);
    const urgency = escapeHTML(leadData.urgency);
    const decisor = escapeHTML(leadData.decisor);
    const painPoints = escapeHTML(leadData.painPoints);
    const scope = escapeHTML(leadData.scope);
    const risks = escapeHTML(leadData.risks);

    const msg = `*ALORIA AI LEAD BRIEF* 🎯
---------------------------------------
💼 *Empresa:* ${company} (${industry})
📊 *Fit Score:* ${score}% (Alta Prioridad)
💰 *Revenue Potential:* ${revenuePotential}
⏳ *Urgencia:* ${urgency}
👤 *Decisor:* ${decisor}

🔴 *Dolores Detectados:*
"${painPoints}"

⚙️ *Alcance Sugerido:*
${scope}

⚠️ *Riesgo Comercial:*
${risks}

📅 *Acción Comercial:* Agendado Discovery de 30 min.`;

    whatsappMessage.innerHTML = msg.replace(/\n/g, "<br>").replace(/\*(.*?)\*/g, "<strong>$1</strong>");
  }

  // ==========================================
  // 10. AUTOFILL ACCELERATED SIMULATOR
  // ==========================================
  autofillBtn.addEventListener("click", () => {
    if (isAutofilling) return;
    isAutofilling = true;
    chatQuickOptions.innerHTML = "";
    
    const ws = workspaces[currentWorkspaceKey];
    
    // Respuestas pre-planeadas basadas en Workspace
    let autofillAnswers = [];
    if (currentWorkspaceKey === "marketing") {
      autofillAnswers = [
        "Automatización comercial / Captura",
        "50 - 200 leads/mes",
        "WhatsApp & Web",
        "Vendedores dedicados (tardan horas)",
        "$15k - $45k MXN/mes",
        "Socio comercial / Director",
        "Excel / Hojas manuales"
      ];
    } else if (currentWorkspaceKey === "consultoria") {
      autofillAnswers = [
        "Cotizaciones lentas / Pérdida leads",
        "6 - 20 asesores",
        "WhatsApp individual",
        "Vendedores individuales (tardan 24-48h)",
        "$50k - $150k MXN",
        "Comité de Socios",
        "Excel / WhatsApp"
      ];
    } else {
      autofillAnswers = [
        "Caídas de servidores locales",
        "101 - 500 usuarios",
        "Sitio web / RFP técnico",
        "Director de TI (tardan días)",
        "$100k - $400k MXN",
        "Director de TI / CTO",
        "Windows Server local + SQL"
      ];
    }

    // Ejecutar simulación secuencial rápida
    let stepIndex = 0;
    
    function runSimulatedStep() {
      if (stepIndex < autofillAnswers.length) {
        const textToType = autofillAnswers[stepIndex];
        chatTextarea.value = "";
        
        appendUserMessage(textToType);
        chatAnswers[ws.chatFlow.questions[chatStep].key] = textToType;
        chatStep++;
        
        processIntermediateScores();
        
        // AI responde
        appendTypingIndicator();
        setTimeout(() => {
          removeTypingIndicator();
          stepIndex++;
          
          if (stepIndex < ws.chatFlow.questions.length) {
            let prefix = "";
            if (chatStep === 1) prefix = `<span class="chat-meta-indicator">[Intent detected: Automatización]</span>`;
            if (chatStep === 3) prefix = `<span class="chat-meta-indicator">[Missing context identified: Presupuesto]</span>`;
            if (chatStep === 5) prefix = `<span class="chat-meta-indicator">[Next best question: Validar decisores]</span>`;

            appendAiMessage(prefix + ws.chatFlow.questions[chatStep].question);
            runSimulatedStep();
          } else {
            finishQualification();
          }
        }, 100);
      }
    }

    // Iniciar
    runSimulatedStep();
  });

  // ==========================================
  // 11. B2B PIPELINE DASHBOARD LOGIC
  // ==========================================
  function updateDashboardUI() {
    const ws = workspaces[currentWorkspaceKey];
    
    // Encabezados
    dashboardWorkspaceTitle.textContent = `Workspace: ${ws.name}`;
    dashboardDomain.textContent = ws.domain;
    
    // Kpis principales
    mLeadsCaptados.textContent = ws.leadsCaptados;
    mLeadsCalificados.textContent = ws.leadsCalificados;
    mLeadsHigh.textContent = ws.leadsHigh;
    mBudgetAvg.textContent = ws.avgBudget;
    mEstancados.textContent = ws.estancados;
    if (mFrecuente) {
      mFrecuente.textContent = ws.frecuente;
    }
    recomendedLeadText.textContent = ws.recomendedLead;

    // Gráficos de problemas
    if (dashboardProblemsChart) {
      dashboardProblemsChart.innerHTML = "";
      ws.problems.forEach(p => {
        const row = document.createElement("div");
        row.className = "issue-row";
        
        const safeLabel = escapeHTML(p.label);
        const safePct = escapeHTML(p.pct);
        
        row.innerHTML = `
          <div class="issue-info">
            <span class="issue-label">${safeLabel}</span>
            <span class="issue-pct">${safePct}%</span>
          </div>
          <div class="issue-track">
            <div class="issue-bar" style="width: ${safePct}%;"></div>
          </div>
        `;
        dashboardProblemsChart.appendChild(row);
      });
    }

    // Cargar historial de leads en la tabla
    renderLeadsTable(ws.suggestedLeads);
  }

  function renderLeadsTable(leadsList) {
    dashboardLeadsTableBody.innerHTML = "";
    leadsList.forEach((lead, index) => {
      const tr = document.createElement("tr");
      if (index === 0) tr.className = "active";
      tr.dataset.leadId = lead.id;
      
      let badgeColor = "var(--priority-nofit)";
      let badgeBg = "var(--priority-nofit-bg)";
      let label = "Pendiente";
      
      if (lead.priority === "high") {
        badgeColor = "var(--priority-high)";
        badgeBg = "var(--priority-high-bg)";
        label = "Alta Prioridad";
      } else if (lead.priority === "nurture") {
        badgeColor = "var(--priority-nurture)";
        badgeBg = "var(--priority-nurture-bg)";
        label = "Nurturing";
      } else if (lead.priority === "info") {
        badgeColor = "var(--priority-info)";
        badgeBg = "var(--priority-info-bg)";
        label = "Falta Info";
      }
      
      const safeCompany = escapeHTML(lead.company);
      const safeInitialLead = escapeHTML(lead.initialLead);
      const safeScore = escapeHTML(lead.score);
      const safeLabel = escapeHTML(label);
      const safeBadgeColor = escapeHTML(badgeColor);
      const safeBadgeBg = escapeHTML(badgeBg);
      
      // data-labels agregadas para el convertidor móvil responsive (Requisito 7 & 13)
      tr.innerHTML = `
        <td data-label="Empresa"><strong style="color: var(--color-text);">${safeCompany}</strong></td>
        <td data-label="Estado"><span class="leads-table-badge" style="color: ${safeBadgeColor}; background: ${safeBadgeBg};">${safeLabel}</span></td>
        <td data-label="Problema Detectado" style="color: var(--color-text-muted); max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">"${safeInitialLead}"</td>
        <td data-label="Score" style="font-weight: 700; color: var(--color-teal);">${safeScore}</td>
        <td data-label="Siguiente Acción"><span style="color: var(--color-teal); font-weight: 700; font-size: 0.76rem;">Cargar Brief ↗</span></td>
      `;

      // Clic para cargar en calificador (Requisito 5 & 6)
      tr.addEventListener("click", () => {
        const activeRows = dashboardLeadsTableBody.querySelectorAll("tr");
        activeRows.forEach(r => r.classList.remove("active"));
        tr.classList.add("active");
        
        loadLeadToQualificationPanel(lead);
      });

      dashboardLeadsTableBody.appendChild(tr);
    });
  }

  function loadLeadToQualificationPanel(lead) {
    updateSteppers("sales");
    
    // Actualizar Scoring
    updateScoring(lead.score, 96, 90, 85, 95, 95, lead.priority, lead.revenuePotential, lead.diagnostic);
    
    // Actualizar Brief
    renderBriefCard(lead);
    
    // Mostrar calendario y agendamiento
    agendaSection.style.display = "block";
    renderWhatsAppMessage(lead);
    
    // Mover pantalla suavemente
    document.getElementById("calificador").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function addNewLeadToDashboardTable(newLead) {
    const ws = workspaces[currentWorkspaceKey];
    
    // Evitar duplicados en el listado
    const exists = ws.suggestedLeads.some(l => l.company === newLead.company);
    if (!exists) {
      ws.suggestedLeads.unshift(newLead);
      
      // Incrementar KPI de leads calificados
      let calCount = parseInt(ws.leadsCalificados);
      ws.leadsCalificados = (calCount + 1).toString();
      
      let capCount = parseInt(ws.leadsCaptados);
      ws.leadsCaptados = (capCount + 1).toString();
      
      updateDashboardUI();

      // Reactivar Pipeline visual board
      pipeDemoLeadName.textContent = newLead.company;
      pipeDemoLead.style.display = "flex";
    }
  }

  // ==========================================
  // 12. WHATSAPP & AGENDA CALENDAR CLICK HANDLERS
  // ==========================================
  calendarDays.forEach(day => {
    day.addEventListener("click", () => {
      calendarDays.forEach(d => d.classList.remove("active"));
      day.classList.add("active");
    });
  });

  calendarSlots.forEach(slot => {
    slot.addEventListener("click", () => {
      calendarSlots.forEach(s => s.classList.remove("selected"));
      slot.classList.add("selected");
    });
  });

  confirmBookingBtn.addEventListener("click", () => {
    const selectedDay = document.querySelector(".calendar-day.available.active")?.dataset.day || "9";
    const selectedTime = document.querySelector(".calendar-slot.selected")?.dataset.time || "09:00 AM";
    const ws = workspaces[currentWorkspaceKey];
    
    alert(`¡Discovery Call confirmada con éxito!\n\nLlamada programada con ${ws.salesRep} para el día ${selectedDay} de Junio de 2026 a las ${selectedTime}.\n\nEl AI Sales Brief quedó preparado como simulación para una futura sincronización con CRM.`);
  });

  // ==========================================
  // 13. ROUTING Y NAV LINKS ACTIVE STATUS (Requisito 12)
  // ==========================================
  navbarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navbarLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      const targetId = link.getAttribute("href");
      const targetSec = document.querySelector(targetId);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Hamburger Mobile Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    const isShown = navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isShown);
  });

  // Inicializar Workspace por defecto
  initWorkspace();
});
