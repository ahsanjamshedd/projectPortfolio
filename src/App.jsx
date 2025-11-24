

import './App.css';

function Section({ title, children }) {
  return (
    <section style={{ margin: '2rem 0', textAlign: 'left' }}>
      <h2 style={{ color: '#646cff' }}>{title}</h2>
      <div>{children}</div>
    </section>
  );
}



function App() {
  return (
    <div className="portfolio-bg">
      <nav className="portfolio-nav">
        <div className="nav-logo">Ahsan Ali</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="nav-hireme" href="#contact">Hire Me &raquo;</a>
      </nav>
      <div className="portfolio-container">
        <header className="hero-header">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-greeting">Hello! I’m</h2>
              <h1 className="hero-name">Ahsan Ali</h1>
              <p className="hero-title">GIS, GeoAI & Full-Stack Developer</p>
              <p className="hero-desc">I design, develop, and deploy enterprise-grade geospatial and AI-powered solutions for real-world impact.</p>
              <div className="hero-actions">
                <a className="hero-btn" href="mailto:ahsanjamshed34@gmail.com">Get Resume</a>
                <a className="hero-btn secondary" href="#projects">View Projects</a>
              </div>
            </div>
            <div className="hero-avatar">
              {/* Add your photo/avatar here */}
              <div className="avatar-placeholder">Your Photo</div>
            </div>
          </div>
          <div className="hero-social-circles">
            <a href="https://www.linkedin.com/in/ahsanjamshed/" target="_blank" rel="noopener noreferrer" className="social-circle linkedin" aria-label="LinkedIn"><span>in</span></a>
            <a href="https://github.com/ahsanjamshed" target="_blank" rel="noopener noreferrer" className="social-circle github" aria-label="GitHub"><span>GH</span></a>
            <a href="mailto:ahsanjamshed34@gmail.com" className="social-circle email" aria-label="Email"><span>@</span></a>
          </div>
        </header>

      <Section title="About Me" id="about">
        <p>
          I’m Ahsan Ali, a Computer Science graduate with 5+ years of professional experience in GIS, GeoAI, and full-stack development. I specialize in designing, developing, and deploying enterprise-grade geospatial systems, AI-powered geospatial pipelines, and interactive web dashboards to address complex challenges in environmental management, agriculture, water resource planning, and public health.
        </p>
        <p>
          I am proficient in Angular, React, TypeScript for frontend development and Python, Flask, Django, Node.js for backend APIs and ETL workflows. I have hands-on experience with PostgreSQL/PostGIS, GeoServer, GeoNode, and QGIS, enabling efficient storage, retrieval, and visualization of large-scale spatial datasets.
        </p>
        <p>
          I also work extensively with GeoAI and machine learning frameworks such as TensorFlow and PyTorch for land/water classification, flood detection, predictive modeling, and anomaly detection using very high-resolution (VHR) satellite imagery. I integrate multi-source datasets, automate workflows, and deploy cloud-ready solutions using Docker, Kubernetes, AWS, and Google Cloud for scalable, real-time decision-support systems.
        </p>
        <p>
          I have a proven track record of transforming raw spatial and tabular data into actionable insights, building predictive and analytical models, and delivering impactful dashboards that improve operational efficiency, resource management, and policy-making. I am passionate about leveraging GIS, AI/ML, and full-stack technologies to create data-driven, scalable, and measurable solutions that support informed decision-making.
        </p>
      </Section>

      <Section title="Skills" id="skills">
        <ul>
          <li><b>GIS & GeoAI:</b> GeoServer, GeoNode, QGIS, Leaflet, PostGIS/PostgreSQL, GeoJSON, STAC & COG Workflows, VHR Satellite Imagery Processing, Geospatial Analysis, Land/Water Classification, Flood Detection, Segmentation, Object Detection, Change Detection, Predictive Modeling</li>
          <li><b>Machine Learning & AI:</b> GeoAI Pipelines, TensorFlow, PyTorch, Predictive Analytics, Anomaly Detection, Land/Water & Flood Classification Models</li>
          <li><b>Data Analysis & ETL:</b> Pandas, NumPy, Matplotlib, Seaborn, GDAL, DuckDB, ETL Pipeline Development, Geospatial Data Cleaning & Transformation</li>
          <li><b>Backend Development & APIs:</b> Flask (REST APIs), Django, Node.js, API Integration, Server-Side Logic, Data Processing Workflows</li>
          <li><b>Frontend Development:</b> Angular, React, Next.js, HTML5, CSS3, SCSS, Bootstrap 5, PrimeNG, Responsive UI/UX Design, Interactive Dashboards, Dynamic Map Layers</li>
          <li><b>Databases:</b> PostgreSQL/PostGIS, MySQL, SQL, DuckDB, MongoDB, Spatial Database Optimization</li>
          <li><b>Cloud & Deployment:</b> AWS, Google Cloud, Azure, Docker, Kubernetes, Cloud-Based GIS/GeoAI Solutions</li>
          <li><b>State Management & Frontend Services:</b> RxJS, Angular Services, Interactive Map Components, Multi-Layer Data Visualization</li>
          <li><b>Web Services & Standards:</b> OGC-Compliant WMS/WMTS/WFS/CSW, Mapbox Vector Tiles, RESTful API Development, GIS Web Integration</li>
          <li><b>Additional Tools & Integrations:</b> WhatsApp Cloud API, TTS Streaming APIs, Real-Time Alerts & Notifications, Dashboard Automation, Interactive GIS Widgets</li>
        </ul>
      </Section>

      <Section title="Projects" id="projects">
        {/* IWMI Projects */}
        <ProjectCard
          name="Groundwater & Irrigation Dashboard"
          introduction="A real-time GIS platform for visualizing irrigation networks, groundwater wells, and crop water requirements."
          useCase="Supports researchers, field teams, and policymakers in water resource planning and irrigation scheduling."
          contribution="Designed and developed multi-layer interactive maps, predictive irrigation models, and dynamic filtering dashboards."
          achievement="Improved water resource planning efficiency by 15–20%. Widely used for operational and research purposes."
        />
        <ProjectCard
          name="Flood Detection & Mapping"
          introduction="GeoAI-driven system to detect, map, and predict flood-prone areas for disaster management and mitigation."
          useCase="Enables early warning and rapid response for field teams and policymakers during flood events."
          contribution="Automated segmentation of flooded areas, integrated rainfall and river data, and built predictive risk dashboards."
          achievement="Reduced flood assessment time by 60%. Enhanced predictive accuracy for emergency response."
        />
        <ProjectCard
          name="GeoAI Land/Water Classification"
          introduction="High-resolution land/water classification system for sustainable water management and monitoring."
          useCase="Guides irrigation and water resource planning by identifying agricultural lands, water bodies, and wetlands."
          contribution="Segmented VHR satellite imagery, detected anomalies, and integrated predictive models with GIS dashboards."
          achievement="Enabled long-term monitoring and reduced manual mapping errors. Supported strategic planning."
        />

        {/* HISDU Project */}
        <ProjectCard
          name="PolioWeb GIS Dashboard"
          introduction="Province-wide GIS platform for monitoring and optimizing polio vaccination campaigns."
          useCase="Digitizes field operations, provides real-time insights, and supports evidence-based decision-making for health authorities."
          contribution="Led development of route digitization, GPS tracking, administrative mapping, heatmaps, and automated reporting."
          achievement="Improved operational efficiency, data accuracy, and policy support for public health campaigns."
        />

        {/* PITB Projects */}
        <ProjectCard
          name="NLP Chatbot for Public Services"
          introduction="Conversational AI platform to automate public queries in English and Urdu."
          useCase="Provides instant responses and analytics for public service delivery across web and mobile platforms."
          contribution="Developed NLP models, integrated with Flask backend, and enabled multi-platform access."
          achievement="Reduced response time by 60% and improved citizen service delivery."
        />
        <ProjectCard
          name="Wheat Sowing Optimization"
          introduction="Predictive analytics system to optimize wheat sowing schedules using geospatial and meteorological data."
          useCase="Helps farmers and agricultural officers maximize yield and plan resource allocation."
          contribution="Integrated spatial and weather data, built regression models, and visualized outputs on interactive maps."
          achievement="Increased crop yield efficiency by 10–15% in pilot regions. Provided actionable insights for planning."
        />
        <ProjectCard
          name="GIS Dashboards and Data Integration"
          introduction="Interactive mapping tools and ETL workflows for campaign monitoring, policy planning, and real-time analysis."
          useCase="Supports government teams in operational planning and campaign monitoring."
          contribution="Digitized boundaries, developed mapping tools, and automated multi-source data integration."
          achievement="Streamlined data pipelines and improved operational planning."
        />

        {/* Freelance & Demo Projects */}
        <ProjectCard
          name="ETL & GIS Pipelines (Spatial Stack)"
          introduction="Automated geospatial data processing and ETL pipelines for GIS dashboards."
          useCase="Enables fast, reliable querying and visualization of large-scale spatial datasets."
          contribution="Built ETL pipelines, automated data cleaning, and integrated processed data into PostGIS and APIs."
          achievement="Reduced manual data prep time by 50% and improved dashboard reliability."
        />
        <ProjectCard
          name="Web Dashboard Clones (Rootfortech)"
          introduction="Responsive web dashboard clones (e.g., SadaPay, Azamone) using HTML, CSS, Bootstrap, and JavaScript."
          useCase="Demonstrates frontend proficiency and real-world dashboard replication for client applications."
          contribution="Developed responsive layouts, interactive components, and ensured cross-browser compatibility."
          achievement="Successfully delivered fully functional clones and strengthened modern web development skills."
        />
        <ProjectCard
          name="Satellite Change Detection Pipeline"
          introduction="AI/ML pipeline for detecting land/water/infrastructure changes using satellite imagery."
          useCase="Enables timely monitoring of environmental changes and land-use dynamics."
          contribution="Built Python+PyTorch pipeline, implemented change detection algorithms, and integrated GIS layers."
          achievement="Provided scalable, reusable pipeline for geospatial monitoring projects."
        />
        <ProjectCard
          name="STAC & COG Data Integration"
          introduction="Cloud-based workflow for integrating STAC and COG datasets into PostGIS and GIS dashboards."
          useCase="Optimizes cloud-efficient geospatial data access and processing for large satellite datasets."
          contribution="Automated STAC ingestion, processed COG imagery, and optimized storage/retrieval."
          achievement="Improved processing speed and reduced storage costs."
        />
        <ProjectCard
          name="Interactive Leaflet Web GIS Demo"
          introduction="Multi-layer GIS mapping demo using Leaflet and PostGIS."
          useCase="Showcases full-stack geospatial development skills for stakeholders and clients."
          contribution="Developed interactive maps, dynamic filtering, popups, and backend integration."
          achievement="Created a functional demo and reference for GIS capabilities."
        />

      </Section>
      <Section title="Contact" id="contact">
        <p>Email: <a href="mailto:ahsanjamshed34@gmail.com">ahsanjamshed34@gmail.com</a></p>
        <p>Phone: +92 315 4331859</p>
        <p>Location: Lahore, Pakistan</p>
      </Section>

      <footer className="portfolio-footer">
        <small>© {new Date().getFullYear()} Ahsan Ali. All rights reserved.</small>
      </footer>
    </div>
  );
}


function ProjectCard({ name, introduction, useCase, contribution, achievement }) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p><b>Introduction:</b> {introduction}</p>
      <p><b>Use Case:</b> {useCase}</p>
      <p><b>Contribution:</b> {contribution}</p>
      <p><b>Achievement:</b> {achievement}</p>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
          <div style={{
            width: 180, height: 120, background: '#181a20', border: '1px dashed #888',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', margin: '0 auto 0.5rem'
          }}>
            <span>Project Screenshot</span>
          </div>
          <small style={{ color: '#888' }}>Add screenshot here</small>
        </div>
        <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
          <div style={{
            width: 180, height: 120, background: '#181a20', border: '1px dashed #888',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', margin: '0 auto 0.5rem'
          }}>
            <span>Code Screenshot</span>
          </div>
          <small style={{ color: '#888' }}>Add code screenshot here</small>
        </div>
      </div>
    </div>
  );
}

export default App;
