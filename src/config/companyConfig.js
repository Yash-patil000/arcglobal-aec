// Central Company Configuration File
// Change company name, email, phone, location or branding here to update the entire site automatically!

export const companyConfig = {
  // Company Branding
  name: "ArcGlobal", // Full working company name
  shortName: "ArcGlobal", // Short name / Logo text
  tagline: "Architecture | Civil | Survey | BIM | Technical Documentation",
  description: "Professional CAD and technical services for architecture, engineering, construction, surveying, and development professionals.",

  // Contact Information (No forms used anywhere on the site)
  email: "info@arcglobalaec.com",
  phone: "+91 XXXXX XXXXX",
  address: "Pune, Maharashtra, India",
  location: "India | Serving Global Clients",
  copyrightYear: "2026",

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "#industries" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Contact", href: "#contact" },
  ],

  // Value Proposition Items
  trustValues: [
    {
      title: "Accuracy",
      description: "Precise and organized technical deliverables.",
    },
    {
      title: "Reliability",
      description: "Consistent workflows and professional project handling.",
    },
    {
      title: "Flexible Capacity",
      description: "Scale technical production according to project requirements.",
    },
    {
      title: "Quality Focus",
      description: "Structured review before final delivery.",
    },
  ],

  // Services List with detailed bullet points
  services: [
    {
      id: "01",
      title: "Architectural CAD",
      category: "Architectural Drafting",
      items: [
        "2D Architectural Drafting",
        "Floor Plans",
        "Elevations",
        "Sections",
        "Detail Drawings",
        "As-Built Drawings",
        "Construction Documentation",
        "PDF to CAD",
        "Sketch to CAD",
      ],
    },
    {
      id: "02",
      title: "Civil Engineering CAD",
      category: "Infrastructure & Site",
      items: [
        "Site Plans",
        "Grading Plans",
        "Utility Plans",
        "Drainage Plans",
        "Roadway Plans",
        "Infrastructure Drawings",
        "Construction Details",
        "Civil CAD Drafting",
      ],
    },
    {
      id: "03",
      title: "Land Survey CAD",
      category: "Geospatial & Boundary",
      items: [
        "Land Survey Drafting",
        "Boundary Surveys",
        "Topographic Surveys",
        "ALTA/NSPS Survey Drafting",
        "As-Built Survey Drawings",
        "Existing Condition Plans",
        "Point Data Processing",
        "Contour Generation",
        "PDF/Scan to CAD",
      ],
    },
    {
      id: "04",
      title: "BIM Services",
      category: "Building Information Modeling",
      items: [
        "BIM Modeling",
        "Architectural BIM",
        "Structural BIM",
        "MEP BIM",
        "Revit Modeling",
        "BIM Coordination",
        "Clash Detection Support",
        "LOD Modeling",
        "Scan-to-BIM",
        "As-Built BIM",
      ],
    },
    {
      id: "05",
      title: "Scan-to-CAD / Scan-to-BIM",
      category: "Point Cloud & As-Built",
      items: [
        "Existing Building Documentation",
        "Renovation Projects",
        "Commercial Properties",
        "Industrial Facilities",
        "Survey Projects",
        "As-Built Documentation",
      ],
    },
    {
      id: "06",
      title: "Technical Signage",
      category: "Signage & Permits",
      items: [
        "Signage Design",
        "Signage Layouts",
        "Sign Face Drawings",
        "Monument Signs",
        "Building Signs",
        "Wayfinding Signage",
        "ADA Signage Documentation",
        "Sign Permit Drawings",
        "Fabrication Drawings",
        "Shop Drawings",
      ],
    },
  ],

  // Workflow Steps
  workflow: [
    {
      step: "01",
      title: "Requirements",
      description: "Project information, drawings, survey data, sketches and specifications.",
    },
    {
      step: "02",
      title: "Technical Review",
      description: "Scope, requirements, standards and deliverables are reviewed.",
    },
    {
      step: "03",
      title: "Production",
      description: "CAD, BIM, survey, civil, architectural or signage documentation is developed.",
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Drawings are reviewed for accuracy, consistency, dimensions and project requirements.",
    },
    {
      step: "05",
      title: "Delivery",
      description: "Final technical files are delivered in the required format.",
    },
  ],

  // Industries Supported
  industries: [
    {
      title: "Architecture",
      description: "Drafting and documentation support for architectural firms.",
    },
    {
      title: "Engineering",
      description: "CAD and technical documentation support for engineering teams.",
    },
    {
      title: "Land Surveying",
      description: "Survey drafting and CAD production support.",
    },
    {
      title: "Construction",
      description: "Construction drawings, as-builts and technical documentation.",
    },
    {
      title: "Real Estate & Development",
      description: "Property documentation and existing-condition drawings.",
    },
    {
      title: "Signage",
      description: "Technical drawings, permit plans and fabrication documentation.",
    },
  ],

  // Technologies / Software
  technologies: [
    "AutoCAD",
    "Civil 3D",
    "Revit",
    "Navisworks",
    "SketchUp",
    "Archicad",
    "Autodesk Construction Cloud",
    "Carlson",
    "Flexisign",
    "CorelDraw",
    "Point Cloud / Survey Data",
  ],

  // Deliverables
  deliverables: [
    { code: "DWG", label: "AutoCAD Vector Format" },
    { code: "DXF", label: "Drawing Exchange Format" },
    { code: "PDF", label: "Vector & Print Documentation" },
    { code: "RVT", label: "Revit Project Models" },
    { code: "IFC", label: "Industry Foundation Classes" },
    { code: "PTS / LAS", label: "Point Cloud Survey Data" },
    { code: "SURVEY", label: "Topographic & Boundary Plans" },
    { code: "CONSTR", label: "Construction Details & Sheets" },
    { code: "SHOP", label: "Fabrication & Shop Drawings" },
    { code: "PERMIT", label: "Permit Submission Drawings" },
    { code: "AS-BUILT", label: "As-Built Verified Plans" },
    { code: "BIM", label: "Multi-Disciplinary 3D Models" },
  ],

  // Why Choose Us (6 points)
  whyChooseUs: [
    {
      title: "Accuracy",
      description: "Precise and organized technical deliverables.",
    },
    {
      title: "Flexible Capacity",
      description: "Increase production capacity without expanding your internal team.",
    },
    {
      title: "Faster Turnaround",
      description: "Efficient workflows designed to reduce project bottlenecks.",
    },
    {
      title: "Cost Efficient",
      description: "Outsource technical production while maintaining quality.",
    },
    {
      title: "Quality Control",
      description: "Structured review before final delivery.",
    },
    {
      title: "Confidentiality",
      description: "Project information and technical data handled professionally.",
    },
  ],

  // Selected Capabilities / Portfolio (6 items)
  capabilities: [
    {
      id: "land-survey",
      title: "Land Survey Drafting",
      description: "Topographic surveys, boundary lines, ALTA/NSPS maps, and point data contour generation.",
      image: "./assets/images/cap_land_survey.svg",
    },
    {
      id: "architectural-doc",
      title: "Architectural Documentation",
      description: "2D drafting, floor plans, elevations, wall sections, and construction document sets.",
      image: "./assets/images/cap_arch_doc.svg",
    },
    {
      id: "civil-site",
      title: "Civil Site Development",
      description: "Grading plans, utility piping, storm drainage layouts, and infrastructure CAD drafting.",
      image: "./assets/images/cap_civil_site.svg",
    },
    {
      id: "bim-modeling",
      title: "BIM Modeling",
      description: "Architectural, structural, and MEP Revit models with clash detection support.",
      image: "./assets/images/cap_bim_model.svg",
    },
    {
      id: "technical-signage",
      title: "Technical Signage",
      description: "Monument sign elevations, sign face layouts, permit drawings, and shop fabrication plans.",
      image: "./assets/images/cap_signage.svg",
    },
    {
      id: "scan-to-cad-bim",
      title: "Scan-to-CAD / Scan-to-BIM",
      description: "Point cloud data processing into accurate 2D as-built CAD drawings and 3D BIM models.",
      image: "./assets/images/cap_scan_to_bim.svg",
    },
  ],

  // Client Types
  clientTypes: [
    "Architectural Firms",
    "Land Surveyors",
    "Civil Engineering Firms",
    "Contractors",
    "Signage Companies",
    "Real Estate Developers",
  ],
};
