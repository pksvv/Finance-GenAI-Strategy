
You are my coding partner for the Finance GenAI Strategy Portal.  
Before writing any code, I want you to design and propose a clear **folder + component structure**.  

Inputs:  
- Business requirements are in `docs/business_req.md`.  
- Coding playbook and standards are in `docs/claude.md`.  

Constraints:  
- Follow the rules in `claude.md` → modular components, max line limits, Tailwind only, no external fonts.  
- Map business requirements (Vision, Roadmap, Use Cases, ERP Integration, Evaluation Dimensions) to clear components.  
- Suggest folder structure including `src/components`, `src/shared`, `src/content`, and `src/assets`.  
- Highlight which component should display which business section.  
- Do **not** generate code yet. Only propose the structure.  

Output format:  
1. Folder structure tree.  
2. Table mapping business sections → components.  
3. Short justification why this structure is scalable and compliant.  

I will review and approve this structure before you start coding.

Based on the business requirements and coding standards, here's the proposed structure:

  1. Folder Structure Tree

  src/
  ├── components/
  │   ├── MainApplication.jsx              # Core navigation, routing, state (≤300 lines)
  │   ├── StrategyOverview.jsx            # Vision, roadmap, strategic shift (≤400 lines)
  │   ├── LearningHub.jsx                 # Dependencies, evaluation dimensions (≤350 lines)
  │   ├── AgentShowcase.jsx               # Use cases, priority problems (≤300 lines)
  │   ├── ArchitectureView.jsx            # Technical visualization, ERP integration (≤350 lines)
  │   └── shared/
  │       ├── InfoCard.jsx                # Reusable info display
  │       ├── SectionHeader.jsx           # Consistent section headers
  │       ├── MetricCard.jsx              # KPI/ROI display
  │       ├── FlowDiagram.jsx             # Process visualization
  │       ├── PhaseTimeline.jsx           # Roadmap display
  │       └── ErrorBoundary.jsx           # Error handling
  ├── content/
  │   ├── visionStatement.js              # Business vision content
  │   ├── roadmapData.js                  # Phase 1-3 timeline data
  │   ├── useCasesData.js                 # Priority problems & use cases
  │   ├── evaluationDimensions.js         # Assessment criteria
  │   ├── erpIntegration.js               # Oracle Cloud strategy
  │   └── metricsData.js                  # Success metrics, ROI
  ├── assets/
  │   ├── diagrams/
  │   │   ├── agent-ecosystem.svg         # Near-autonomous vision
  │   │   ├── data-products-flow.svg      # Data architecture
  │   │   └── erp-integration.svg         # Oracle Cloud alignment
  │   └── icons/                          # UI icons (local SVGs)
  └── utils/
      ├── stateManagement.js              # Discovery/contract state helpers
      └── validation.js                   # Input validation utilities

⏺ Update Todos
  ⎿  ☒ Analyze business requirements and coding standards     
     ☒ Design folder structure based on requirements
     ☐ Create mapping table of business sections to components
     ☐ Explain why structure is scalable and compliant

⏺ 2. Business Sections → Component Mapping

  | Business Section      | Primary Component    | Content File            | Key Features                                      |
  |-----------------------|----------------------|-------------------------|---------------------------------------------------|
  | Vision Statement      | StrategyOverview.jsx | visionStatement.js      | GenAI copilots → near-autonomous agents narrative |
  | Strategic Shift       | StrategyOverview.jsx | visionStatement.js      | Data products + AI agents transformation          |
  | Dependencies          | LearningHub.jsx      | evaluationDimensions.js | Trusted data, SOPs, baseline metrics              |
  | Roadmap (Phases 1-3)  | StrategyOverview.jsx | roadmapData.js          | Foundation → Copilot → Agent Ecosystem timeline   |
  | Evaluation Dimensions | LearningHub.jsx      | evaluationDimensions.js | Business value, risk assessment criteria          |
  | Priority Use Cases    | AgentShowcase.jsx    | useCasesData.js         | Controllers, Tax, Treasury, FP&A agents           |
  | ERP Integration       | ArchitectureView.jsx | erpIntegration.js       | Oracle Cloud strategy, gap analysis               |
  | Success Metrics       | All components       | metricsData.js          | 50-90% cycle time reduction, ROI                  |
  | Barriers & Risks      | LearningHub.jsx      | evaluationDimensions.js | Data quality, talent, compliance challenges       |

⏺ Update Todos
  ⎿  ☒ Analyze business requirements and coding standards     
     ☒ Design folder structure based on requirements
     ☒ Create mapping table of business sections to components
     ☐ Explain why structure is scalable and compliant

⏺ 3. Scalability & Compliance Justification

  Scalable Architecture

  - Modular Content: Business requirements separated from UI components in /content/ folder allows non-technical updates
  - Iterative Growth: Start with 3-4 data products, easily add new agents by extending useCasesData.js and AgentShowcase.jsx
  - Shared Components: Reusable UI blocks (InfoCard, MetricCard) ensure consistency as portal grows
  - State Management: Clean state transitions in MainApplication.jsx prevent stale data across expanding workflows

  Compliance Ready

  - Audit Trails: All business claims traceable to source files in /content/
  - No External Dependencies: Local assets in /assets/, system fonts only per Amex requirements
  - Line Limits: Each component ≤400 lines prevents monolithic code, enables maintainability
  - Error Boundaries: Graceful failure handling meets enterprise reliability standards

  Business Alignment

  - Vision-Driven: StrategyOverview.jsx directly maps to business vision and roadmap sections
  - Use Case Focused: AgentShowcase.jsx demonstrates concrete value (Controllers, Tax, Treasury copilots)
  - Technical Integration: ArchitectureView.jsx addresses Oracle Cloud strategy and SI partnerships
  - Risk Management: LearningHub.jsx covers evaluation dimensions and barriers upfront

⏺ Update Todos
  ⎿  ☒ Analyze business requirements and coding standards     
     ☒ Design folder structure based on requirements
     ☒ Create mapping table of business sections to components
     ☒ Explain why structure is scalable and compliant

⏺ This structure enables leaders to immediately navigate between strategic vision (StrategyOverview), practical use cases (AgentShowcase), learning resources
  (LearningHub), and technical implementation (ArchitectureView) while maintaining enterprise compliance and audit readiness from day one.

