import { ProductSolution, IndustryItem, TechPillar } from '../types';

export const SITE_BRAND = {
  name: 'AxiWatt',
  tagline: 'Powering Progress. Energizing the Future.',
  subtagline: 'Advanced Battery Solutions for a Sustainable World',
  summary:
    'At AxiWatt, we are focused on delivering innovative battery and energy storage solutions for electric mobility, telecommunications, and modern power infrastructure. Our approach combines reliable performance, efficient energy management, and sustainability to meet the evolving needs of industries.',
  motto: 'Powering mobility. Strengthening connectivity. Enabling a cleaner energy future.',
  contactEmail: 'contact@axiwatt.com',
  supportEmail: 'contact@axiwatt.com',
  phone: '+91 95530 29624',
  companyName: 'Axiwatt GreenTechno Private Limited',
  address:
    'Plot no. 102, 103, Sri Krishna Vihar, Temple Lane, Mythri Nagar Phase-2, Serillingampally, Miyapur Sub Post Office, Hyderabad, Rangareddy, Telangana 500049',
  logoUrl: '/assets/aistudio/AXIWATT-010_b57e6c62.jpg',
};

export const SOLUTIONS_DATA: ProductSolution[] = [
  {
    id: 'automotive',
    title: 'Automotive Battery Solutions',
    subtitle: 'High-Density Mobility Packs',
    description:
      'Battery technologies for electric mobility and automotive applications, with a focus on energy efficiency, dependable operation, and performance.',
    applications: ['Electric vehicles (EVs)', 'Mobility platforms (2-wheelers, 3-wheelers)', 'Commercial delivery fleets', 'Automotive energy systems'],
    keyFeatures: [
      'High energy density prismatic and pouch cell arrangements',
      'Advanced thermal management with liquid cooling and phase-change barrier protection',
      'Modular swappable form factors and native pack-to-chassis (CTP) integration',
      'High continuous discharge rates (up to 3C continuous, 5C pulse)',
    ],
    specs: [
      { label: 'Chemistry', value: 'Automotive-grade LiFePO4 / NMC' },
      { label: 'Voltage Range', value: '48V - 800V Architecture' },
      { label: 'Cycle Longevity', value: '3,000+ Full Cycles to 80% SOH' },
      { label: 'Protection Rating', value: 'IP67 / IP69K Ingress Protection' },
      { label: 'Certification', value: 'UN 38.3, ISO 26262 ASIL-B/D, IEC 62133' },
    ],
    category: 'automotive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-3amLVQmuNS0f3YyiyQZlZrLwBDdnPApUWKZqQfnRsaLbdCr1FFSBV0AqMpPVv0X6sKnrX8xp_2JUzuOD8lwSNPMu4z1N8sYTzMPJsx3awUCnjKAJEC50RXxx9CKuzOLAG9GDELyJwomrREuNvEHRU1rSlL6Zj3f_nDDYlI9XJw8RkyNlB0iKSyKagbVdCiiBcRB39ccyT9MQNWSlNHUEXdLkuUUm47Lza3YT18A1oKQiUBtEJRf08g',
    badge: 'Mobility & Fleet',
  },
  {
    id: 'telecom',
    title: 'Telecom Battery Solutions',
    subtitle: 'Unbroken Communication Resilience',
    description:
      'Backup battery solutions designed to support telecom towers, communication networks, and critical connectivity infrastructure.',
    applications: ['Telecom cell towers & 5G base stations', 'Network equipment shelters', 'Edge data micro-centers', 'Backup power systems'],
    keyFeatures: [
      'Standard 19-inch rack-mount modular footprint',
      'Extreme ambient operating window (-20°C to +60°C without capacity collapse)',
      'Intelligent CAN-bus / RS485 / SNMP remote telemetry monitoring',
      'Rapid recharge capability minimizing diesel generator run hours',
    ],
    specs: [
      { label: 'Chemistry', value: 'High-Stability LiFePO4 (LFP)' },
      { label: 'Nominal Voltage', value: '48V / 51.2V Rack Units' },
      { label: 'Cycle Longevity', value: '4,500+ Cycles @ 80% DOD' },
      { label: 'Self-Discharge', value: '< 1.5% per month @ 25°C' },
      { label: 'Certification', value: 'CE, UL 1973, IEC 62619, Telcordia NEBS' },
    ],
    category: 'telecom',
    image: '/assets/aistudio/image_b2de2f80.png',
    badge: 'Network Infrastructure',
  },
  {
    id: 'bess',
    title: 'Battery Energy Storage Systems (BESS)',
    subtitle: 'Utility & Commercial Power Management',
    description:
      'Flexible energy storage solutions designed to help manage power demand, support renewable energy integration, and improve energy utilization.',
    applications: ['Commercial facilities & office parks', 'Industrial manufacturing plants', 'Renewable solar & wind energy projects', 'Microgrids & peak shaving installations'],
    keyFeatures: [
      'Scalable from 100 kWh cabinet units to 5+ MWh containerized solutions',
      'Built-in multi-stage fire suppression and UL 9540A thermal runaway safety mitigation',
      'High round-trip efficiency (> 92% AC-AC system efficiency)',
      'Grid services compatibility: frequency regulation, peak shaving, and black start',
    ],
    specs: [
      { label: 'Chemistry', value: 'Heavy-Duty LFP (Lithium Iron Phosphate)' },
      { label: 'Energy Range', value: '100 kWh to 10+ MWh Containerized' },
      { label: 'System Efficiency', value: '> 92% Round-Trip AC Efficiency' },
      { label: 'Thermal Control', value: 'Precision Closed-Loop HVAC / Liquid Cooling' },
      { label: 'Certification', value: 'UL 9540, UL 9540A, NFPA 855, IEEE 1547' },
    ],
    category: 'bess',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiq9kRSuRHsteZImYfyoATtva2X2PJE3yXWenySAD6qMm75oZpPN--ENPsMISPISFPCKd0ey091oucqfCToH_OstMgeocxELr7ld1zCpEtM0j7CfRkzyjAWV-WjFoRTcZojGkdS-vxcLzcl0cFD9xLgZWNWYnnKNLrpNip65XX2fs9BbCpDP8i0Nh80mmW2335oVy-oXaX3o0E34OeWzTc_LMhkO3kxhzDiI6BbxlYM9wYUqME05C2ow',
    badge: 'Utility & Commercial',
  },
  {
    id: 'lead-replacement',
    title: 'Lead Replacement Solutions',
    subtitle: 'Modern Drop-In Upgrades',
    description:
      'Modern battery alternatives for suitable applications where improved energy efficiency, reduced maintenance, or different performance characteristics are required.',
    applications: ['Backup power systems', 'Industrial warehouse equipment & forklifts', 'Marine and recreational power', 'Selected energy storage systems'],
    keyFeatures: [
      'True drop-in replacement for standard lead-acid BCI group sizes',
      'Up to 70% weight reduction compared to conventional lead-acid batteries',
      '5x to 8x longer cycle life with zero acid leaks, off-gassing, or watering maintenance',
      'Integrated internal BMS protecting against over-charge, over-discharge, and extreme temperatures',
    ],
    specs: [
      { label: 'Chemistry', value: 'Safe LiFePO4 with Internal Smart BMS' },
      { label: 'Voltage Options', value: '12V, 24V, 36V, 48V Drop-in Blocks' },
      { label: 'Weight Reduction', value: '~65-70% lighter vs. SLA equivalent' },
      { label: 'Usable Capacity', value: '100% DOD usable vs. 50% for Lead-Acid' },
      { label: 'Warranty & Life', value: '8-10 Year Design Life / Maintenance-Free' },
    ],
    category: 'lead-replacement',
    image: '/assets/aistudio/image_863d9d2a.png',
    badge: 'Direct Retrofit',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'mobility',
    name: 'Electric Mobility',
    tagline: 'Supporting the growing demand for battery-powered transportation and electric mobility solutions.',
    description:
      'From agile solo commuter two-wheelers to heavy commercial logistics three-wheelers and transit fleets, AxiWatt delivers lightweight, swappable and high-endurance battery systems tailored to maximize uptime, range, and operator revenue.',
    challenges: ['Range anxiety and prolonged depot charging bottlenecks', 'Harsh vibration, heatwaves, and monsoonal conditions', 'Battery weight limiting cargo payload'],
    solutionsProvided: [
      'Modular slide-and-click swappable packs (< 45s swap time)',
      'Hermetically IP67-sealed enclosures with vibration dampening',
      'Regenerative braking integration returning up to 18% energy to the pack',
    ],
    typicalArchitecture: '48V - 96V modular swappable packs (2.2 kWh to 7.2 kWh parallel sets)',
    icon: 'two_wheeler',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4cm4zJ_xvpFMZUCoz45cqIB7CxXJdr9xH8s3JB2rBC1xSQr_7Zb6B1vURxlLfUhLaQgdCVPYxWnOM-6v-CvKaWEooURa7K0ENIAaUBay75dYSpbWOSIRm3v1XMpYZktQw22K2SqGw-K542ywqd8QeFMeKX364F2ZV0ACZw_Y__89obCJ_rQJH3VI82obWIhPuALYpFJw_fuOgdF7882t4a27s3tHg_Muu2iAftZIvr2t4sJTPS3nNKw',
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    tagline: 'Helping maintain network reliability through dependable backup power solutions for communication infrastructure.',
    description:
      'Telecom infrastructure demands unbroken uptime. AxiWatt telecom battery modules deliver dependable backup power for remote cellular towers, 5G base stations, and optical repeater nodes during severe grid outages.',
    challenges: ['Frequent grid fluctuations and rolling blackouts in remote areas', 'High diesel generator operating and refueling expenses', 'High ambient temperatures degrading legacy lead batteries'],
    solutionsProvided: [
      'Wide-temperature LiFePO4 cells operating reliably up to 60°C',
      'Rapid recharge cycling minimizing reliance on diesel generators',
      'Full remote cloud SNMP telemetry diagnostics reducing site visits',
    ],
    typicalArchitecture: '48V 100Ah / 200Ah standard 19-inch telecom rack modules',
    icon: 'cell_tower',
    image: '/assets/aistudio/image_b2de2f80.png',
  },
  {
    id: 'renewable',
    name: 'Renewable Energy',
    tagline: 'Supporting solar and other renewable energy installations with energy storage solutions designed for suitable applications.',
    description:
      'Renewable energy generation from solar and wind is variable by nature. AxiWatt BESS stabilizes renewable delivery, smooths ramp rates, absorbs mid-day generation peaks, and dispatches stored green energy when demand surges.',
    challenges: ['Solar generation curtailment during peak sun hours', 'Grid interconnection export limits and duck curve penalties', 'Intermittent weather conditions causing power instability'],
    solutionsProvided: [
      'Turnkey containerized BESS with integrated power conversion (PCS)',
      'Dynamic dispatch logic aligned with electricity tariff schedules',
      'Seamless microgrid islanding support during utility transmission cuts',
    ],
    typicalArchitecture: '1.2 MWh to 5.0 MWh containerized BESS with liquid thermal regulation',
    icon: 'solar_power',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiq9kRSuRHsteZImYfyoATtva2X2PJE3yXWenySAD6qMm75oZpPN--ENPsMISPISFPCKd0ey091oucqfCToH_OstMgeocxELr7ld1zCpEtM0j7CfRkzyjAWV-WjFoRTcZojGkdS-vxcLzcl0cFD9xLgZWNWYnnKNLrpNip65XX2fs9BbCpDP8i0Nh80mmW2335oVy-oXaX3o0E34OeWzTc_LMhkO3kxhzDiI6BbxlYM9wYUqME05C2ow',
  },
  {
    id: 'industrial',
    name: 'Industrial and Commercial Power',
    tagline: 'Addressing energy storage and backup power requirements for commercial buildings, industrial facilities, and critical equipment.',
    description:
      'High peak demand charges and power quality anomalies directly hit industrial profitability. AxiWatt C&I storage systems actively shave peaks, provide uninterrupted transition power, and protect delicate manufacturing lines.',
    challenges: ['Punitive peak-demand utility charges and power factor penalties', 'Voltage sags and millisecond brownouts corrupting automated factory robotics', 'Expensive legacy diesel emergency backup infrastructure'],
    solutionsProvided: [
      'Automated peak shaving with sub-cycle response times',
      'High-reliability UPS bridging preventing factory downtime',
      'Modular indoor/outdoor cabinets with zero emissions and quiet operation',
    ],
    typicalArchitecture: '250 kWh - 1 MWh commercial cabinet systems with smart EMS',
    icon: 'precision_manufacturing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX0quTqWUpk2Crm_pu2PXZuxpX_FeCe_LO3kk7XlwTqklHtblsH44EQ5hs_AdRgq1TKZ3siMKK5BYYH2eAyIOAIDNvB7mvK4gRZXaafx21hQXhqnfUfKE8dVYAhHAaUYD81ZmwqEOFzQerV3ehhKJQliigPtFOOnRn_Vvq1NrQstTOAt2i_S0eFQS4_MdSwAk3egmSRryr2lXA-kb0_xP7DF3k1ucJwDGZZJ32XzlsmF3450568K0iyg',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    tagline: 'Supporting the development of resilient power systems for modern infrastructure and energy management applications.',
    description:
      'Modern infrastructure—from EV fast-charging highway hubs and transit interchanges to water treatment plants and civic centers—requires dependable, high-power energy reserves that strengthen the grid without overburdening local sub-stations.',
    challenges: ['Utility substation capacity limits constraining EV fast-charger deployment', 'Mission-critical public safety infrastructure requiring 99.999% uptime', 'Complex regulatory and spatial constraints in dense metropolitan areas'],
    solutionsProvided: [
      'Battery-buffered ultrafast EV charging hubs',
      'Dual-redundant architectural design with multi-stage electrical isolation',
      'Compact volumetric footprint meeting stringent urban fire codes',
    ],
    typicalArchitecture: 'Multi-megawatt infrastructure microgrids with grid-forming inverters',
    icon: 'apartment',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsbdM9guDW_07--NGsIRUaMDsFXGWjLMTK6dueD2wOyHDA8FLBwfI29fHpawHf6U3aDI7GQO8d1oS4M9PySgkcXYuZrxP63vo79kAT--03tUiNYWLqnC3RGu-YbS4ZK-Id4_CngXEIFAnY8-HjNYAOWjaAMkdMtHLSJql3i6tQT7KHcGLEyCsTa3U7VtafyxXiQXiEeV9D8Xx476DongrdTeKE3RMdnxMHzgP0QI5L_LzpMDxr51gguA',
  },
];

export const TECH_PILLARS: TechPillar[] = [
  {
    id: 'battery-tech',
    title: 'Battery Technology',
    summary: 'Exploring battery technologies suited to different power, capacity, lifecycle, and operational requirements.',
    details: [
      'Tailored cell chemistries: high-durability Lithium Iron Phosphate (LiFePO4) for maximum cycle life, and high-nickel NMC for compact weight-sensitive applications.',
      'Advanced prismatic and cylindrical cell packaging with structural adhesive bonding for superior mechanical rigidity.',
      'Research into solid-state electrolytes and silicon-anode blends to push energy density past 320 Wh/kg.',
    ],
    icon: 'battery_full',
  },
  {
    id: 'bms',
    title: 'Battery Management Systems (BMS)',
    summary: 'Battery management technologies can help monitor battery conditions and support safe, efficient operation when integrated into appropriate systems.',
    details: [
      'Edge micro-controllers sampling internal impedance and cell voltages at 500Hz for millisecond runaway detection.',
      'Active cell balancing extending total usable pack capacity and preventing cell divergence across thousands of cycles.',
      'Dual CAN-bus, SMBus, RS485, and cloud IoT connectivity for predictive State-of-Charge (SOC) and State-of-Health (SOH) analytics.',
    ],
    icon: 'memory',
  },
  {
    id: 'integration',
    title: 'Energy Storage Integration',
    summary: 'Solutions designed to work within broader energy systems, including renewable power generation and backup power infrastructure.',
    details: [
      'Bi-directional inverters and smart energy management system (EMS) algorithms that coordinate seamlessly with solar arrays and utility feeds.',
      'Sub-20ms uninterruptible islanding mode transitions during grid dropouts.',
      'Modular rack and container architectures allowing simple plug-and-play capacity expansion as power demands grow.',
    ],
    icon: 'hub',
  },
  {
    id: 'safety',
    title: 'Safety and Reliability',
    summary: 'Emphasizing the importance of suitable system design, operating conditions, protection mechanisms, and battery lifecycle management.',
    details: [
      'Multi-tier protection architecture: hardware fuses, pyrofuses, solid-state disconnects, and independent sensor networks.',
      'Cell-level passive thermal propagation barriers preventing runaway escalation across adjacent cells.',
      'UL 9540A large-scale thermal runaway fire test verified and certified to ISO 26262 ASIL-D standards.',
    ],
    icon: 'shield',
  },
];

export const SUSTAINABILITY_PILLARS = [
  {
    id: 'efficiency',
    title: 'Energy Efficiency',
    description: 'Supporting solutions designed to make effective use of stored energy.',
    metric: '> 92%',
    metricLabel: 'Round-trip system efficiency',
  },
  {
    id: 'electrification',
    title: 'Electrification',
    description: 'Contributing to the development of electric mobility and cleaner energy systems.',
    metric: '100%',
    metricLabel: 'Zero tailpipe emissions supported',
  },
  {
    id: 'lifecycle',
    title: 'Responsible Battery Lifecycle',
    description: 'Encouraging appropriate battery handling, collection, reuse, and recycling through suitable channels.',
    metric: '98.4%',
    metricLabel: 'Closed-loop cathode element recovery',
  },
  {
    id: 'resources',
    title: 'Resource Responsibility',
    description: 'Recognizing the importance of responsible material use and waste reduction.',
    metric: '100%',
    metricLabel: 'Ethically tracked supply chain',
  },
  {
    id: 'value',
    title: 'Long-Term Value',
    description: 'Promoting the selection and use of battery solutions appropriate to their operating requirements.',
    metric: '10+ Yrs',
    metricLabel: 'Standard engineered asset life',
  },
];

export const WHY_CHOOSE_AXIWATT = [
  {
    title: 'Reliability First',
    subtitle: 'Tested for Unforgiving Realities',
    description:
      'Solutions selected and developed around the power requirements of each application. Stringent qualification protocols and fault immunity ensure steady, dependable power in extreme operating conditions.',
    points: ['Rigorous cell qualification across every production batch', 'Sub-zero (-40°C) to desert heat (+60°C) certified operation', 'Redundant fail-safe architecture eliminating single points of failure'],
  },
  {
    title: 'Technology Focus',
    subtitle: 'Innovation Grounded in Science',
    description:
      'An approach centered on battery innovation, energy storage, and evolving industry needs. Continuous R&D into cell chemistry, proprietary BMS algorithms, and high-frequency power electronics.',
    points: ['Silicon carbide (SiC) fast-switching topologies', '500Hz edge impedance monitoring for predictive thermal safety', 'Open integration APIs with CAN-bus, Modbus, and cloud telemetry'],
  },
  {
    title: 'Application-Based Solutions',
    subtitle: 'Engineered for the Job',
    description:
      'Battery options aligned with specific operational and infrastructure requirements. We do not force one-size-fits-all cells; we customize voltage, geometry, and thermal design for your precise use case.',
    points: ['Custom enclosure packaging and CTP (Cell-to-Pack) integration', 'Optimized discharge curves matched to torque or backup duration', 'Turnkey mechanical, electrical, and BMS engineering support'],
  },
  {
    title: 'Sustainability Commitment',
    subtitle: 'Circularity from Mineral to Recycling',
    description:
      'Supporting efficient energy use and responsible battery lifecycle practices. We prioritize long cycle life, high round-trip efficiency, and closed-loop hydrometallurgical recycling programs.',
    points: ['98.4% recovery of critical active cathode metals', 'Ethically audited supply chains with chain-of-custody tracking', 'Second-life battery repurposing programs for stationary storage'],
  },
];

export const GLOBAL_FACILITIES = [
  {
    city: 'Dresden, Germany',
    title: 'Cell Integration & Automated Pack Line',
    badge: 'Giga-Scale Facility',
    desc: 'Fully automated Industry 4.0 fabrication center delivering prismatic and cylindrical module integration for European commercial fleets.',
    capacity: '18.5 GWh / Year',
    cleanPower: '100% Hydro & Solar',
  },
  {
    city: 'Austin, Texas',
    title: 'Power Electronics & BMS Lab',
    badge: 'Advanced R&D',
    desc: 'Silicon carbide (SiC) switching topologies and high-frequency real-time edge telemetry firmware prototyping facility.',
    capacity: '120,000 sq ft Lab',
    cleanPower: 'ASIL-D Firmware Certified',
  },
  {
    city: 'Nagano, Japan',
    title: 'Harsh Climate Stress Range',
    badge: 'Environmental Range',
    desc: 'Sub-zero endurance, high-altitude barometric simulation, and seismic harmonic testing verifying packs under planetary extremes.',
    capacity: '-45°C to +75°C Range',
    cleanPower: 'Up to 4,800m ASL Altitude',
  },
  {
    city: 'Singapore',
    title: 'Commercial Dispatch & Telemetry',
    badge: 'APAC Operations',
    desc: '24/7 autonomous battery asset dispatch center monitoring distributed telecom microgrids and naval energy packs across Oceania.',
    capacity: '4.8M Cells Monitored',
    cleanPower: '< 150ms Cloud Edge NOC',
  },
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001', role: 'Certified Quality Management', body: 'Quality Management Systems' },
  { name: 'ISO 14001', role: 'Certified Quality Management', body: 'Environmental Management Systems' },
  { name: 'ISO 45001', role: 'Certified OHSMS', body: 'Occupational Health & Safety' },
  { name: 'In Collaboration with MNRE', role: 'Clean Energy Partner', body: 'Ministry of New & Renewable Energy, Govt. of India' },
  { name: 'MSME Registered', role: 'Govt. Recognized Enterprise', body: 'Ministry of Micro, Small & Medium Enterprises' },
];
