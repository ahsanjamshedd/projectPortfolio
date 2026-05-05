// script.js - Portfolio interactivity for Ahsan Ali

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Experience timeline data
  const experience = [
    {
      role: 'GIS / GEOAI DEVELOPER',
      org: 'International Water Management Institute (IWMI)',
      period: '10/2024 – Current',
      tech: 'Angular, TypeScript, SCSS, Leaflet, PrimeNG, GeoServer, GeoNode, QGIS, PostgreSQL/PostGIS, Python (Flask), ETL pipelines, GeoAI frameworks',
      contributions: [
        'Lead design and development of multi-layer GIS dashboards for groundwater, irrigation, and flood monitoring.',
        'Implemented GeoAI pipelines for land/water classification, flood detection, anomaly detection, and predictive modeling.',
        'Integrated WhatsApp Cloud API for automated, geotagged alerts to farmers and managers.',
        'Developed backend services and APIs with Flask and PostGIS for geospatial analytics.',
        'Managed ETL workflows for satellite imagery and field data.',
        'Designed responsive frontend components with Angular, Leaflet, and PrimeNG.'
      ]
    },
    {
      role: 'GIS FULL STACK WEB DEVELOPER',
      org: 'Health Information & Service Delivery Unit (HISDU)',
      period: '08/2022 – 10/2024',
      tech: 'Angular, TypeScript, SCSS, PrimeNG, Leaflet, GeoServer, QGIS, PostgreSQL/PostGIS, Python (Flask)',
      contributions: [
        'Led development of PolioWeb, a province-wide GIS dashboard for vaccination campaigns.',
        'Integrated GeoServer and QGIS for geospatial layers and real-time GPS tracking.',
        'Designed modular frontend components and interactive dashboards.',
        'Created backend APIs for geospatial layers and analytics.',
        'Trained staff on dashboard usage and GIS workflows.'
      ]
    },
    {
      role: 'DATA SCIENCE',
      org: 'Punjab Information Technology Board (PITB)',
      period: '02/2020 – 07/2022',
      tech: 'Python, Flask, Pandas, NumPy, PostGIS/PostgreSQL, Leaflet, QGIS, NLTK, spaCy, ML',
      contributions: [
        'Developed data-driven solutions for agriculture and public services using GIS and AI/ML.',
        'Built NLP-based chatbots for public queries in English and Urdu.',
        'Designed predictive models for wheat sowing optimization.',
        'Created interactive web GIS dashboards for field-level monitoring.'
      ]
    }
  ];

  // Render experience timeline
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    experience.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `
        <h5 class="mb-1">${item.role} <span class="text-primary">@ ${item.org}</span></h5>
        <div class="text-muted mb-1">${item.period}</div>
        <div class="mb-1"><strong>Technologies:</strong> ${item.tech}</div>
        <ul>${item.contributions.map(c => `<li>${c}</li>`).join('')}</ul>
      `;
      timeline.appendChild(div);
    });
  }


  // Projects data (detailed)
  const projects = [
    {
      name: 'Groundwater & Irrigation Dashboard',
      intro: 'An advanced geospatial intelligence platform for government agencies, research organizations, and water authorities to manage water resources efficiently. Integrates groundwater wells, canal networks, crop distribution, and real-time data into a single interactive dashboard.',
      details: `
        <h6 class="fw-bold">Introduction</h6>
        <p>The Groundwater & Irrigation Dashboard is an advanced geospatial intelligence platform designed to help government agencies, research organizations, and water authorities manage water resources more efficiently. It integrates groundwater observation wells, irrigation canal networks, crop distribution, and real-time environmental data into a single interactive dashboard. By combining GIS mapping with analytical models, the system supports strategic decision-making, improves agricultural water planning, and promotes sustainable groundwater use in water-stressed regions.</p>
        <ul>
          <li>Visualize groundwater level trends</li>
          <li>Identify water-stressed hotspots</li>
          <li>Plan irrigation cycles according to crop needs</li>
          <li>Predict future water demand</li>
          <li>Improve the allocation of limited water resources</li>
        </ul>
        <p>This ensures that agricultural productivity increases while water depletion is controlled.</p>
        <h6 class="fw-bold mt-4">Use Cases</h6>
        <ol>
          <li><strong>Groundwater Monitoring:</strong> Displays groundwater levels from hundreds of wells, detects declining trends, and supports recharge planning.</li>
          <li><strong>Irrigation Scheduling & Planning:</strong> Shows canal networks, helps decide irrigation timing/location, and optimizes water rotation.</li>
          <li><strong>Water Stress Zone Analysis:</strong> Highlights low groundwater, high consumption, or insufficient rainfall regions for targeted interventions.</li>
          <li><strong>Agricultural Planning & Advisory:</strong> Integrates crop zones and water requirement models, suggests water needs for various crops.</li>
          <li><strong>Real-Time Decision Support:</strong> Field teams and policymakers access updated maps for audits, studies, and optimization programs.</li>
        </ol>
        <h6 class="fw-bold mt-4">Technologies Used</h6>
        <ul>
          <li><strong>GIS & Spatial Engine:</strong> GeoServer (WMS/WFS), PostGIS (spatial storage), QGIS (preprocessing), Leaflet/OpenLayers (frontend mapping)</li>
          <li><strong>Backend:</strong> Python + Flask for APIs, analytics, and spatial queries</li>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, interactive charts (Plotly/Chart.js), dynamic filters</li>
          <li><strong>Analytics:</strong> Python, Pandas, NumPy for time-series, crop water calculations, predictive modeling, anomaly detection</li>
        </ul>
        <h6 class="fw-bold mt-4">Skills Demonstrated</h6>
        <ul>
          <li>Spatial data analysis (wells, canals, rainfall, crops, GeoJSONs)</li>
          <li>Spatial database optimization (indexes, fast queries, millions of points)</li>
          <li>GeoServer management (publishing, styling, caching)</li>
          <li>Predictive modeling (crop demand, irrigation, groundwater decline)</li>
          <li>Full-stack GIS development (preprocessing → APIs → frontend maps)</li>
          <li>Real-time visualization (live datasets, dynamic dashboards)</li>
        </ul>
        <h6 class="fw-bold mt-4">Contributions</h6>
        <ul>
          <li>Developed multi-layer GIS maps: wells, canals, crops, water stress, soil, rainfall overlays</li>
          <li>Built predictive irrigation models using historical and real-time data</li>
          <li>Implemented dynamic filtering (region, water level, crop type, canal area)</li>
          <li>Integrated real-time and historical data (well readings, rainfall, usage patterns)</li>
        </ul>
        <h6 class="fw-bold mt-4">Achievements & Real-Life Impact</h6>
        <ul>
          <li><strong>Improved Water Resource Planning (15–20%):</strong> Reduced manual analysis time, enabled efficient planning.</li>
          <li><strong>Reduced Water Wastage:</strong> Identified crop water needs and risk areas, reduced unnecessary irrigation.</li>
          <li><strong>Supported IWMI & Government Operations:</strong> Used for feasibility studies, crop planning, recharge programs, scheduling.</li>
          <li><strong>Increased Transparency & Accountability:</strong> Enabled data-driven, justifiable water distribution plans.</li>
          <li><strong>Enhanced Sustainability:</strong> Supported long-term conservation by highlighting over-extraction and promoting balanced irrigation.</li>
        </ul>
        <div class="mb-4 mt-4">
          <a href="https://pakwmis.iwmi.org/" target="_blank" rel="noopener" class="btn btn-success" style="font-weight:600;font-size:1.1rem;letter-spacing:0.5px;">🌐 View Live Project</a>
        </div>
        <h6 class="fw-bold mt-4">Screenshots</h6>
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1rem;">
          <figure style="flex:1;min-width:220px;text-align:center;">
            <img src="public/assets/gmis1.png" alt="GMIS Screenshot 1" style="max-width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);">
            <figcaption style="margin-top:0.5rem;font-size:0.97rem;color:#555;">Dashboard Main View</figcaption>
          </figure>
          <figure style="flex:1;min-width:220px;text-align:center;">
            <img src="public/assets/gmis2.png" alt="GMIS Screenshot 2" style="max-width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);">
            <figcaption style="margin-top:0.5rem;font-size:0.97rem;color:#555;">Code & Map Integration</figcaption>
          </figure>
          <figure style="flex:1;min-width:220px;text-align:center;">
            <img src="public/assets/gmis3.png" alt="GMIS Screenshot 3" style="max-width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);">
            <figcaption style="margin-top:0.5rem;font-size:0.97rem;color:#555;">Visual Presentation 1</figcaption>
          </figure>
          <figure style="flex:1;min-width:220px;text-align:center;">
            <img src="public/assets/gmis4.png" alt="GMIS Screenshot 4" style="max-width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);">
            <figcaption style="margin-top:0.5rem;font-size:0.97rem;color:#555;">Visual Presentation 2</figcaption>
          </figure>
        </div>
      `
    },
    {
      name: 'Flood Detection & Mapping',
      intro: 'AI-powered system for real-time flood detection, mapping, and risk prediction.',
      details: `
        <h6 class="fw-bold">Overview</h6>
        <p>The Flood Detection & Mapping project is an advanced GeoAI-driven disaster management system designed to detect flooded areas, map the spatial extent of floods, and predict high-risk zones before emergencies occur. It integrates satellite imagery, hydrological indicators, weather parameters, and AI models to support government agencies, emergency teams, and disaster relief organizations.</p>
        <div class="my-4 text-center">
          <img src="flood.jpg" alt="Flood Detection Visual" style="max-width: 420px; width: 100%; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.13);">
          <div style="font-size:0.97rem;color:#555;margin-top:0.5rem;">Flood Detection & Mapping – AI-powered visual</div>
        </div>
        <h6 class="fw-bold mt-4">Objective</h6>
        <ul>
          <li>Detect flooded regions from satellite images</li>
          <li>Predict flood-prone zones</li>
          <li>Support emergency response teams with real-time dashboards</li>
        </ul>
        <p>This system enables data-driven decision-making during natural disasters.</p>
        <h6 class="fw-bold mt-4">Use Cases</h6>
        <ul>
          <li>National Disaster Management Authorities</li>
          <li>Flood Early Warning Systems</li>
          <li>Urban planning & infrastructure safety</li>
          <li>Emergency response & relief operations</li>
          <li>Climate impact assessment</li>
          <li>River basin monitoring</li>
        </ul>
        <h6 class="fw-bold mt-4">Technologies Used</h6>
        <ul>
          <li>GeoAI / Machine Learning: Python (model training & inference), Deep Learning (PyTorch/TensorFlow)</li>
          <li>Satellite Imagery: Sentinel-1, Landsat</li>
          <li>Flask (API backend), Angular (frontend dashboard)</li>
          <li>Geospatial Libraries: Rasterio, GDAL, GeoPandas, Shapely</li>
          <li>Rainfall & River Data Integration (API/CSV ingest)</li>
        </ul>
        <h6 class="fw-bold mt-4">Key Features</h6>
        <ol>
          <li><strong>Automated Flood Segmentation (AI Model):</strong> Deep learning for pixel-wise segmentation, extracts flooded areas from SAR/satellite imagery, outputs geotagged shapefiles & GeoJSON.</li>
          <li><strong>Real-Time Data Integration:</strong> Pulls and processes rainfall intensity, river water level, soil moisture, DEM elevation data.</li>
          <li><strong>Predictive Flood Risk Modeling:</strong> ML models using rainfall & historical flood data, predicts high-risk areas, displays severity levels.</li>
          <li><strong>Early Warning Dashboard (Angular):</strong> Live flood maps via Flask API, interactive UI with layers, downloadable reports and alerts.</li>
          <li><strong>Geotagged Actionable Maps:</strong> Generates maps for field teams, outputs PNG, GeoJSON, SHP, supports mobile access.</li>
        </ol>
        <h6 class="fw-bold mt-4">Achievements</h6>
        <ul>
          <li>Reduced flood assessment time by 60% (automated detection)</li>
          <li>Improved predictive flood accuracy significantly</li>
          <li>Enabled rapid, geotagged mapping for field teams</li>
          <li>Integrated multi-source hydrological + satellite data into one platform</li>
        </ul>
        <h6 class="fw-bold mt-4">Contributions</h6>
        <ul>
          <li>AI Model Development: Flood segmentation (U-Net/DeepLab), preprocessing & training pipelines</li>
          <li>Predictive Modeling: Rainfall-based flood forecasting, threshold-based & ML approaches</li>
          <li>Backend/API: Flask REST APIs for imagery, prediction, dashboards</li>
          <li>Dashboard Integration: Angular UI + map layers, real-time analytics & alerts</li>
          <li>Geospatial Data Engineering: Raster-to-vector, GeoServer/QGIS integration, spatial analysis & risk scoring</li>
        </ul>
        <h6 class="fw-bold mt-4">Impact</h6>
        <ul>
          <li>Faster emergency response</li>
            <img src="flood-segmentation.jpg" alt="Flood Segmentation Visual" style="max-width: 420px; width: 100%; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.13);">
          <li>Data-driven disaster management</li>
          <li>Accurate mapping for rescue planning</li>
          <li>Strengthened preparedness for climate-related disasters</li>
        </ul>
        <p>It provides a scalable, AI-powered foundation for national flood warning systems.</p>
      `
    },
    {
      name: 'PolioWeb GIS Dashboard',
      intro: 'Interactive GIS platform for monitoring and optimizing polio vaccination campaigns across Punjab.',
      details: `
        <ul>
          <li><strong>Use Case:</strong> Campaign monitoring, field team management, and coverage analytics.</li>
          <li><strong>Technologies:</strong> Angular, PrimeNG, Leaflet, Flask, PostGIS</li>
          <li><strong>Features:</strong> Digitized vaccination routes, real-time GPS tracking, dynamic map layers, heatmaps for coverage gaps, automated reporting.</li>
          <li><strong>Achievements:</strong> Reduced manual reporting and improved campaign response time. Enabled health authorities to reallocate field teams and vaccines based on real-time data.</li>
          <li><strong>Contributions:</strong> Digitized routes, integrated GPS data, and built analytics dashboards. Trained staff on dashboard usage and GIS workflows.</li>
          <li><strong>Impact:</strong> Enabled data-driven decision-making for health authorities, improving operational efficiency and policy support.</li>
        </ul>
        <p>PolioWeb has become a critical tool for planning, evaluation, and auditing of vaccination campaigns, supporting public health initiatives at scale.</p>
      `
    },
    {
      name: 'NLP Chatbot for Public Services',
      intro: 'Conversational AI platform to automate public queries in English and Urdu.',
      details: `
        <ul>
          <li><strong>Use Case:</strong> Automated service delivery and public information.</li>
          <li><strong>Technologies:</strong> Python, Flask, NLTK, spaCy</li>
          <li><strong>Features:</strong> NLP-based chatbot, multi-language support, integration with backend APIs, web and mobile access.</li>
          <li><strong>Achievements:</strong> Reduced response time for public queries by over 60%. Enabled continuous availability of information to citizens.</li>
          <li><strong>Contributions:</strong> Developed NLP models and integrated multi-platform access. Provided valuable data for analyzing common queries and improving service delivery.</li>
          <li><strong>Impact:</strong> Enabled continuous, automated public service, improving citizen engagement and access to information.</li>
        </ul>
        <p>This chatbot platform automates public service queries, providing instant, accurate responses and freeing up human resources for more complex tasks.</p>
      `
    }
  ];

  // Add PolioWeb project details to the projects array
  projects.push({
    id: "polioweb",
    title: "PolioWeb — GIS Dashboard",
    description: "A real-time geospatial platform for planning, monitoring, and optimizing polio vaccination campaigns across Punjab.",
    details: {
      overview: "PolioWeb is an end-to-end GIS-based monitoring and analytics system developed to digitize the polio vaccination workflow in Punjab. It provides real-time visibility of field operations, vaccination coverage, team performance, route execution, and campaign progress at the Union Council (UC), Tehsil, District, and Provincial levels.",
      purpose: [
        "Vaccination campaign monitoring (daily, real-time updates)",
        "Field team management (team routes, status, coverage)",
        "Identification of coverage gaps (missed areas, low-reach regions)",
        "Analysis & reporting (auto reports for district & provincial authorities)",
        "Route digitization for standardized planning and auditing"
      ],
      technologies: {
        frontend: ["Angular (Component-based UI)", "PrimeNG (Tables, charts, layouts)", "Leaflet (GIS mapping framework)"],
        backend: ["Flask (REST APIs for maps, analytics, GPS tracks)", "Python GIS stack: GeoPandas, GDAL, Shapely", "PostgreSQL + PostGIS (Spatial database and geoprocessing)"],
        tools: ["GeoServer for map publishing", "QGIS for route digitization and preprocessing", "GPS Device / Mobile App feeds for field-team tracking"]
      },
      features: [
        "Digitized Vaccination Routes",
        "Real-Time GPS Tracking",
        "Multi-layer Interactive GIS Map",
        "Heatmaps for Coverage Gaps",
        "Automated Reporting System",
        "Dashboard Analytics",
        "Role-Based Access"
      ],
      achievements: [
        "Reduced manual reporting by 90%",
        "Cut campaign response time significantly",
        "Enabled data-driven reallocation of teams & vaccine supplies",
        "Provided accurate, real-time visibility of field operations",
        "Standardized polio route planning across multiple districts",
        "Improved identification of repeatedly missed areas",
        "Supported government & WHO auditors for verification and analysis"
      ],
      contributions: [
        "Digitization of Vaccination Routes",
        "GPS Integration",
        "Backend & API Development (Flask)",
        "Angular + Leaflet Frontend Development",
        "Training & Documentation"
      ],
      impact: [
        "Improved operational efficiency",
        "Enhanced accountability through GPS and routes",
        "Simplified auditing and field verification",
        "Allowed leadership to make quick and accurate policy decisions",
        "Provided real-time insight into vaccination gaps, reducing risk of outbreaks"
      ]
    }
  });

  // Render projects as a grid of cards (3 per row)
  const projectGrid = document.getElementById('project-grid');
  if (projectGrid) {
    projectGrid.innerHTML = '';
    projects.forEach((p, idx) => {
      // Choose an icon based on project name (simple emoji fallback)
      let icon = '💡';
      if (/groundwater|irrigation/i.test(p.name)) icon = '💧';
      else if (/flood/i.test(p.name)) icon = '🌊';
      else if (/polio/i.test(p.name)) icon = '🗺️';
      else if (/chatbot|nlp/i.test(p.name)) icon = '💬';

      // Tech badges (show up to 3 main techs)
      let techs = [];
      if (p.details && typeof p.details === 'object' && p.details.technologies) {
        techs = [
          ...(p.details.technologies.frontend || []),
          ...(p.details.technologies.backend || []),
          ...(p.details.technologies.tools || [])
        ].slice(0,3);
      } else if (p.details && typeof p.details === 'string') {
        // Try to extract from details string
        const match = p.details.match(/Technologies:\s*([\w, .\-\/\(\)]+)/i);
        if (match) techs = match[1].split(',').map(t => t.trim()).slice(0,3);
      }
      if (p.intro && techs.length < 1) {
        // Fallback: look for techs in intro
        const match = p.intro.match(/(Angular|Python|Flask|Leaflet|GIS|Dash|PrimeNG|PostGIS|NLP|spaCy|NLTK)/gi);
        if (match) techs = match.slice(0,3);
      }

      // Card column
      const col = document.createElement('div');
      // 4 columns on extra-large, 3 on large, 2 on medium, 1 on small
      col.className = 'col-xl-3 col-lg-4 col-md-6 col-12';
      // Card
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="card-top">
          <div class="project-icon-blob">${icon}</div>
          <div class="project-head">
            <div class="project-title">${p.name}</div>
            <div class="project-tagline">${p.intro ? p.intro.slice(0,160) + (p.intro.length>160? '…':'') : ''}</div>
          </div>
        </div>
        <div class="project-badges">
          ${techs.map(t => `<span class="badge-tech">${t.replace(/\(.*\)/,'').slice(0,28)}</span>`).join('')}
        </div>
        <div class="card-footer"><button class="view-project-btn" data-project="${idx}">View Project</button></div>
      `;
      col.appendChild(card);
      projectGrid.appendChild(col);
    });

    // Modal for project details
    let modal = document.getElementById('project-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'project-modal';
      modal.style.display = 'none';
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100vw';
      modal.style.height = '100vh';
      modal.style.background = 'rgba(0,0,0,0.32)';
      modal.style.zIndex = '9999';
      modal.innerHTML = `
        <div style="max-width:820px;margin:5vh auto;background:#fff;border-radius:14px;box-shadow:0 8px 32px rgba(0,0,0,0.12);position:relative;">
          <button id="close-modal-btn" style="position:absolute;top:14px;right:14px;font-size:1.6rem;background:none;border:none;color:#222;cursor:pointer;">&times;</button>
          <div id="modal-content" style="max-height:78vh;overflow-y:auto;padding:2.2rem; -webkit-overflow-scrolling:touch;"></div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    const modalContent = document.getElementById('modal-content');
    // Create a lightweight image lightbox (fullscreen preview) if it doesn't exist
    let lightbox = document.getElementById('image-lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'image-lightbox';
      lightbox.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.8);z-index:10000;backdrop-filter:blur(4px);';
      lightbox.innerHTML = `
        <div style="position:relative;max-width:95vw;max-height:95vh;display:flex;align-items:center;justify-content:center;padding:1rem;">
          <img id="lightbox-img" src="" alt="preview" style="max-width:95vw;max-height:95vh;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,0.5);" />
          <button id="lightbox-close" style="position:absolute;top:8px;right:8px;border:none;background:rgba(255,255,255,0.12);color:#fff;font-size:1.6rem;border-radius:50%;width:40px;height:40px;cursor:pointer;">&times;</button>
        </div>
      `;
      document.body.appendChild(lightbox);

      // Close handlers for lightbox
      lightbox.addEventListener('click', (ev) => {
        if (ev.target.id === 'image-lightbox' || ev.target.id === 'lightbox-close') {
          lightbox.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape' && lightbox.style.display === 'flex') {
          lightbox.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
    projectGrid.addEventListener('click', function(e) {
      const btn = e.target.closest('.view-project-btn');
      if (!btn) return;
      const idx = btn.getAttribute('data-project');
      const p = projects[idx];
      if (modalContent) {
        modalContent.innerHTML = `<h3 style='margin-bottom:0.7rem;'>${p.name}</h3><div class='mb-3'>${p.intro || ''}</div>${typeof p.details === 'string' ? p.details : ''}`;
        // Enable image click -> fullscreen (lightbox)
        modalContent.querySelectorAll('img').forEach(img => {
          img.style.cursor = 'zoom-in';
          img.addEventListener('click', (ie) => {
            const lbImg = document.getElementById('lightbox-img');
            lbImg.src = img.src;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
          });
        });
      }
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
    modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target.id === 'close-modal-btn') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
});
