/**
 * Website copy. Written answer-first (blueprint §10, GEO) and without
 * unverified claims: no invented statistics, awards, prices, testimonials
 * or project facts. Replace the concept projects with SDY's real case
 * studies as soon as photo sets and permissions are available.
 */

export type Illustration = "living" | "kitchen" | "bedroom" | "wardrobe" | "home" | "dining" | "study";

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  intro: string;
  idealFor: string[];
  includes: string[];
  clarify: string[];
  approach: { title: string; text: string }[];
  budgetFactors: string[];
  faqs: FAQ[];
  illustration: Illustration;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "full-home-interiors",
    name: "Full Home Interiors",
    short: "One designer, one plan, every room. From layout to handover, your whole home designed as a single story.",
    metaTitle: "Full Home Interior Design in Mumbai | SDY Interior",
    metaDescription:
      "Plan your entire Mumbai home with SDY Interior: space planning, kitchen, bedrooms, living, storage, lighting and finishes designed together and coordinated to handover.",
    h1: "Full Home Interior Design in Mumbai",
    answer:
      "Full home interior design means every room of your home is planned together, so layouts, storage, materials, lighting and colour work as one. SDY Interior leads the design and coordinates the work room by room until handover.",
    intro:
      "Mumbai homes ask a lot of every square foot. Designing the whole home at once lets us balance storage against openness, keep finishes consistent from the entrance to the balcony, and sequence site work so that trades are not undoing each other. You get one point of contact, one set of drawings and one coherent result.",
    idealFor: [
      "New flats before or just after possession",
      "Complete renovation of an older apartment",
      "Families who want one coordinated design rather than room-by-room fixes",
      "Homeowners who prefer a single accountable point of contact",
    ],
    includes: [
      "Site measurement and assessment of the existing condition",
      "Space planning and furniture layouts for every room",
      "Design concepts, mood and material boards",
      "Kitchen, wardrobe and storage design",
      "False ceiling, lighting and electrical point planning",
      "Material, finish and hardware selection",
      "Coordination of execution through to handover",
    ],
    clarify: [
      "Civil work, plumbing and electrical changes are agreed project by project after the site visit.",
      "Appliances, loose furniture, soft furnishings and décor can be included or left to you; this is decided in the scope document.",
      "Society permissions and building rules are discussed early so the plan is practical.",
    ],
    approach: [
      { title: "Plan the whole, then the parts", text: "We fix circulation, storage and lighting for the full home before detailing any single room." },
      { title: "One material language", text: "A restrained palette of laminates, veneers, stone and metal keeps the home calm and consistent." },
      { title: "Sequenced execution", text: "Civil, electrical, carpentry and finishing are scheduled in the right order to avoid rework." },
    ],
    budgetFactors: [
      "Carpet area and number of rooms",
      "Extent of civil, electrical and plumbing changes",
      "Material grade: laminate, veneer, lacquer, stone or solid wood",
      "Hardware and fittings specification",
      "Amount of loose furniture and décor included",
    ],
    faqs: [
      { q: "How long does a full home interior project take?", a: "The timeline depends on home size, the amount of civil work and how quickly materials are finalised. After the site visit SDY shares a stage-wise schedule specific to your home rather than a generic promise." },
      { q: "Can I do the full home in phases?", a: "Yes. We can design the whole home now and execute in phases, so that later rooms still match the first ones." },
      { q: "Do you work on ready-possession and under-construction flats?", a: "Yes. Planning before possession often saves time, because measurements and layouts can be prepared in advance and confirmed on site." },
    ],
    illustration: "home",
    related: ["residential-interiors", "modular-kitchen", "wardrobes-storage"],
  },
  {
    slug: "residential-interiors",
    name: "Residential Interiors",
    short: "Apartments, flats, bungalows and villas, designed around how your family actually lives.",
    metaTitle: "Residential Interior Design Mumbai | Flats & Villas | SDY",
    metaDescription:
      "Residential interior design for Mumbai apartments, 1, 2, 3 and 4 BHK flats, bungalows and villas. Practical layouts, smart storage and calm, lasting finishes by SDY Interior.",
    h1: "Residential Interior Design for Mumbai Homes",
    answer:
      "Residential interior design is the planning and finishing of a home's rooms around the people who live there. SDY Interior designs apartments, flats, bungalows and villas, starting from your daily routine rather than from a catalogue look.",
    intro:
      "A 1 BHK in the suburbs and a 4 BHK sea-facing flat have very different problems. We begin by listening: who lives here, what you store, how you host, where the light falls. Then we design layouts, joinery and finishes that make the home easier to live in, and better to look at, every day.",
    idealFor: [
      "1, 2, 3 and 4 BHK apartments",
      "Bungalows, row houses and villas",
      "Partial makeovers of selected rooms",
      "Rental homes being upgraded for long-term living",
    ],
    includes: [
      "Lifestyle and requirement brief",
      "Measured layouts and furniture planning",
      "3D visualisation of key rooms (where included in scope)",
      "Joinery, storage and finish design",
      "Lighting and ceiling design",
      "Execution coordination and quality checks",
    ],
    clarify: [
      "The exact rooms and deliverables are written into a scope document before work begins.",
      "Structural changes are only proposed when permitted by the building and society.",
    ],
    approach: [
      { title: "Brief before beauty", text: "A clear written brief keeps every design decision tied to your real needs." },
      { title: "Storage that disappears", text: "Built-in storage is planned into walls, beds and seating so rooms stay uncluttered." },
      { title: "Light as a material", text: "Layered ambient, task and accent lighting changes how every finish reads." },
    ],
    budgetFactors: ["Number of rooms in scope", "Joinery quantity and finish", "Ceiling and lighting complexity", "Civil and wet-area changes"],
    faqs: [
      { q: "Do you design small apartments?", a: "Yes. Compact homes benefit the most from careful planning: multi-use furniture, concealed storage and a light palette can make a small flat feel generous." },
      { q: "Can you work with furniture I already own?", a: "Yes. Tell us what you want to keep and we will design around it." },
    ],
    illustration: "living",
    related: ["full-home-interiors", "living-room-interiors", "bedroom-interiors"],
  },
  {
    slug: "modular-kitchen",
    name: "Modular Kitchen",
    short: "Kitchens planned around how you cook: workflow, storage, finishes and hardware that last.",
    metaTitle: "Modular Kitchen Designer in Mumbai | SDY Interior",
    metaDescription:
      "Modular kitchen design in Mumbai: L, U, parallel and island layouts, smart storage, durable finishes and quality hardware, planned around how your family cooks.",
    h1: "Modular Kitchen Design in Mumbai",
    answer:
      "A modular kitchen is built from factory-made cabinet modules fitted to your measured kitchen. SDY Interior plans the layout around your cooking workflow, then selects carcass material, shutter finish, countertop and hardware for durability and easy cleaning.",
    intro:
      "Indian cooking is demanding: heat, oil, masala storage, large utensils and often more than one cook. A good kitchen starts with the work triangle and the location of the hob, sink and fridge, then adds tall units, drawers and corner solutions that keep everything within reach.",
    idealFor: ["New kitchens in new flats", "Replacing an old masonry kitchen", "Compact kitchens that need more storage", "Open kitchens that must look tidy from the living room"],
    includes: [
      "Measurement and plumbing, gas and electrical point check",
      "Layout options: straight, L-shape, U-shape, parallel or island",
      "Cabinet, drawer and tall-unit planning",
      "Shutter finish, countertop and backsplash selection",
      "Hardware, accessories and lighting plan",
    ],
    clarify: ["Appliances and the chimney can be supplied by you or included; this is agreed in the scope.", "Moving the sink or gas line may involve plumbing and civil work."],
    approach: [
      { title: "Workflow first", text: "Store, prep, cook, serve: modules are placed in the order you actually use them." },
      { title: "Drawers over doors", text: "Deep drawers at waist height usually beat shelves you must kneel to reach." },
      { title: "Wipe-clean surfaces", text: "Finishes and edges are chosen for Mumbai humidity and everyday cooking." },
    ],
    budgetFactors: ["Running length of cabinets", "Carcass material (e.g. BWP plywood)", "Shutter finish: laminate, acrylic, PU, veneer", "Countertop material", "Hardware brand and accessory count"],
    faqs: [
      { q: "Which kitchen layout is best for a small Mumbai flat?", a: "It depends on the room shape and window position. Straight and L-shaped layouts are common in compact kitchens, while parallel layouts suit narrow galley kitchens. We compare options on your actual measurements." },
      { q: "What material is best for kitchen cabinets?", a: "Moisture-resistant boards are generally preferred near sinks and in humid climates. We explain the trade-offs of each option during material selection." },
    ],
    illustration: "kitchen",
    related: ["full-home-interiors", "wardrobes-storage", "residential-interiors"],
  },
  {
    slug: "bedroom-interiors",
    name: "Bedroom Interiors",
    short: "Restful bedrooms with built-in wardrobes, soft lighting and a bed wall you will love waking up to.",
    metaTitle: "Bedroom Interior Design in Mumbai | SDY Interior",
    metaDescription:
      "Bedroom interior design in Mumbai: master, kids and guest bedrooms with built-in wardrobes, storage beds, study corners, ceiling and lighting design.",
    h1: "Bedroom Interior Design in Mumbai",
    answer:
      "Good bedroom design balances rest and storage. SDY Interior plans the bed position, wardrobes, lighting and finishes together so the room feels calm, and everything you own has a place.",
    intro:
      "Bedrooms in city homes often double as a study, a dressing room and a storeroom. We design master, children's and guest bedrooms with storage beds, full-height wardrobes, dressing units and a headboard wall that gives the room its character.",
    idealFor: ["Master bedrooms with dressing areas", "Children's rooms that grow with the child", "Guest rooms that double as a study", "Compact bedrooms that need more storage"],
    includes: ["Bed and furniture layout", "Wardrobe and storage design", "Headboard / feature wall design", "Ceiling, ambient and bedside lighting", "Study or dressing unit where needed"],
    clarify: ["Mattresses, linen and loose décor are optional and agreed in the scope."],
    approach: [
      { title: "Quiet palette", text: "Soft textures and warm lighting help the room wind down at night." },
      { title: "Hidden storage", text: "Hydraulic beds and lofts take seasonal storage off the floor." },
      { title: "Built to grow", text: "Kids' rooms use adaptable furniture that changes with age." },
    ],
    budgetFactors: ["Wardrobe size and shutter type", "Bed type: storage, hydraulic, upholstered", "Feature wall material", "Lighting and ceiling design"],
    faqs: [
      { q: "Sliding or hinged wardrobe doors?", a: "Sliding doors save space in narrow rooms; hinged doors give full access to the interior. The right choice depends on the clearance in front of the wardrobe." },
    ],
    illustration: "bedroom",
    related: ["wardrobes-storage", "full-home-interiors", "living-room-interiors"],
  },
  {
    slug: "living-room-interiors",
    name: "Living Room Interiors",
    short: "Living and dining spaces planned for conversation, family time and effortless hosting.",
    metaTitle: "Living Room Interior Design in Mumbai | SDY Interior",
    metaDescription:
      "Living and dining room interior design in Mumbai: layouts, TV units, crockery units, false ceilings, lighting and feature walls that make your home welcoming.",
    h1: "Living Room Interior Design in Mumbai",
    answer:
      "Living room design sets the first impression of a home. SDY Interior plans seating, TV and display units, dining, lighting and a feature wall so the space works for family evenings and for guests.",
    intro:
      "The living room carries the most traffic and the most expectation. We design seating around conversation as well as the screen, find space for a crockery or bar unit, conceal wiring and plan a lighting scheme you can change for every occasion.",
    idealFor: ["Combined living and dining rooms", "Homes that host often", "Open-plan spaces next to the kitchen", "Rooms that need a mandir, bar or display unit"],
    includes: ["Seating and circulation layout", "TV, display and crockery units", "Feature wall and panelling design", "False ceiling and layered lighting", "Dining area and mandir unit design where needed"],
    clarify: ["Sofas and loose furniture may be custom-made, purchased or retained; this is agreed in the scope."],
    approach: [
      { title: "Conversation first", text: "Seating is grouped so people face each other, not just the TV." },
      { title: "Layered light", text: "Cove, spot and accent lighting create different moods from one room." },
      { title: "One focal point", text: "A single statement wall keeps the room confident rather than busy." },
    ],
    budgetFactors: ["Size of the living-dining area", "Panelling and feature wall material", "Ceiling profile and lighting", "Custom furniture"],
    faqs: [
      { q: "How do I make a small living room feel bigger?", a: "Use a light palette, wall-mounted units that float off the floor, fewer but larger pieces of furniture and layered lighting that reaches the corners." },
    ],
    illustration: "dining",
    related: ["residential-interiors", "full-home-interiors", "bedroom-interiors"],
  },
  {
    slug: "wardrobes-storage",
    name: "Wardrobes & Storage",
    short: "Custom wardrobes, lofts, shoe racks and utility storage that make every corner count.",
    metaTitle: "Custom Wardrobes & Storage Solutions Mumbai | SDY Interior",
    metaDescription:
      "Custom wardrobe and storage design in Mumbai: sliding and hinged wardrobes, walk-ins, lofts, shoe and utility storage planned for compact city homes.",
    h1: "Custom Wardrobes and Storage Solutions",
    answer:
      "Custom storage is joinery designed to fit your exact walls and belongings. SDY Interior plans wardrobe internals, lofts, entrance, utility and under-bed storage so a city home stays clutter-free.",
    intro:
      "Most clutter is a storage design problem. We start by understanding what you need to store, from saris and suits to suitcases and seasonal items, and design internals with the right mix of hanging, shelves, drawers and accessories.",
    idealFor: ["Compact flats short on storage", "Walk-in or dressing wardrobes", "Entrance, shoe and utility storage", "Lofts and overhead storage"],
    includes: ["Inventory-led wardrobe internal planning", "Sliding, hinged and walk-in wardrobe design", "Loft, entrance and shoe storage", "Utility and balcony storage", "Finish, handle and lighting selection"],
    clarify: ["Wardrobe accessories (trouser pull-outs, tie racks, etc.) are selected individually and listed in the quotation."],
    approach: [
      { title: "Inventory first", text: "We plan internals around what you actually own." },
      { title: "Full height", text: "Floor-to-ceiling units use space that is otherwise wasted." },
      { title: "Seamless fronts", text: "Handle-less or profile handles keep walls calm." },
    ],
    budgetFactors: ["Total running length and height", "Shutter type and finish", "Internal accessories", "Lighting inside units"],
    faqs: [
      { q: "What is a good depth for a wardrobe?", a: "Hanging wardrobes typically need enough depth for a hanger plus clearance for the shutter. We confirm the depth against your room's clearance during planning." },
    ],
    illustration: "wardrobe",
    related: ["bedroom-interiors", "modular-kitchen", "full-home-interiors"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  propertyType: string;
  configuration: string;
  style: string;
  scope: string[];
  summary: string;
  brief: string;
  solution: string[];
  materials: string[];
  illustration: Illustration;
  services: string[];
  palette: string[];
};

/**
 * Design concepts that show SDY's approach. Clearly labelled on the site as
 * concepts. Replace with real case studies (blueprint §7).
 */
export const projects: Project[] = [
  {
    slug: "warm-minimal-2bhk-concept",
    title: "Warm Minimal 2 BHK",
    location: "Mumbai",
    propertyType: "Apartment",
    configuration: "2 BHK",
    style: "Warm minimal",
    scope: ["Living & dining", "Modular kitchen", "Two bedrooms", "Wardrobes"],
    summary: "A compact family flat made to feel open with light oak tones, concealed storage and a single gold accent line.",
    brief: "A young family wanted a calm, easy-to-clean home with space for a growing child, a work-from-home corner and plenty of storage.",
    solution: [
      "Wall-to-wall storage at the entrance absorbs shoes, bags and the daily clutter before it reaches the living room.",
      "A floating TV unit with a fluted panel keeps the floor visible and the room feeling larger.",
      "An L-shaped kitchen with tall pantry units and drawers instead of base shelves.",
      "The child's room uses a storage bed and an adaptable study wall.",
    ],
    materials: ["Light oak laminate", "Fluted panelling", "Quartz countertop", "Brushed brass profile"],
    illustration: "living",
    services: ["full-home-interiors", "modular-kitchen"],
    palette: ["#e9dcc4", "#c9a877", "#1d3d35", "#f6f0e5"],
  },
  {
    slug: "forest-and-brass-3bhk-concept",
    title: "Forest & Brass 3 BHK",
    location: "Mumbai",
    propertyType: "Apartment",
    configuration: "3 BHK",
    style: "Contemporary luxe",
    scope: ["Living & dining", "Kitchen", "Three bedrooms", "Foyer"],
    summary: "Deep green joinery, warm brass and soft ivory walls: a contemporary home that borrows from the SDY palette.",
    brief: "Homeowners who entertain often wanted a statement living room, a bar unit and bedrooms that stay quiet and restful.",
    solution: [
      "A green lacquer bar and crockery unit anchors the dining space.",
      "Cove lighting and a stepped ceiling define living and dining without walls.",
      "Master bedroom with an upholstered headboard wall and walk-in wardrobe.",
      "Parallel kitchen with a tall appliance bank.",
    ],
    materials: ["Green lacquer", "Brass inlay", "Italian-look marble", "Walnut veneer"],
    illustration: "dining",
    services: ["full-home-interiors", "living-room-interiors"],
    palette: ["#1d3d35", "#d9ae62", "#f6f0e5", "#6b6a4a"],
  },
  {
    slug: "serene-master-suite-concept",
    title: "Serene Master Suite",
    location: "Mumbai",
    propertyType: "Apartment",
    configuration: "Master bedroom",
    style: "Soft modern",
    scope: ["Bedroom", "Wardrobe", "Dressing unit"],
    summary: "A bedroom redesign focused on rest: textured headboard, sliding wardrobe and layered warm lighting.",
    brief: "A couple wanted to turn a cluttered bedroom into a hotel-like retreat without losing any storage.",
    solution: [
      "Full-height sliding wardrobe with mirrored and fabric-finish panels.",
      "Headboard wall in fabric panels with hidden reading lights.",
      "Hydraulic storage bed for seasonal items.",
    ],
    materials: ["Fabric panels", "Smoked glass", "Ash veneer", "Warm 2700K lighting"],
    illustration: "bedroom",
    services: ["bedroom-interiors", "wardrobes-storage"],
    palette: ["#ece2cf", "#a8957a", "#264c42", "#d9ae62"],
  },
  {
    slug: "family-kitchen-concept",
    title: "The Family Kitchen",
    location: "Mumbai",
    propertyType: "Apartment",
    configuration: "U-shaped kitchen",
    style: "Classic modern",
    scope: ["Modular kitchen", "Utility"],
    summary: "A U-shaped kitchen planned for two cooks, with drawer-first storage and a utility zone.",
    brief: "A large family that cooks every day needed more counter space, better storage and a clean look from the dining area.",
    solution: [
      "U-shaped layout gives two cooks their own prep zone.",
      "Deep drawers for utensils and a tall pull-out pantry.",
      "Separate utility area keeps washing away from cooking.",
    ],
    materials: ["Matte acrylic shutters", "Quartz countertop", "Ceramic backsplash", "Soft-close hardware"],
    illustration: "kitchen",
    services: ["modular-kitchen"],
    palette: ["#f6f0e5", "#335f53", "#d9ae62", "#3a3a32"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const processSteps = [
  { title: "Consultation", text: "A conversation about your home, your family, your style and your budget. We understand the brief before we suggest anything." },
  { title: "Site assessment", text: "We visit and measure the home, check walls, plumbing, electrical points and light, and note building rules." },
  { title: "Concept & layout", text: "Space plans, furniture layouts and a mood board give the whole home a direction you can react to." },
  { title: "Design development", text: "3D views of key areas (where included) and working drawings for joinery, ceilings, electrical and finishes." },
  { title: "Material selection", text: "Laminates, veneers, stone, hardware and lighting are finalised with samples, and a clear quotation follows." },
  { title: "Execution", text: "Civil, electrical, carpentry and finishing are sequenced and supervised with regular progress updates." },
  { title: "Handover", text: "Final quality checks, snag fixing, a deep clean and a walkthrough of your finished home." },
];

export const generalFaqs: FAQ[] = [
  { q: "Who is SDY Interior?", a: "SDY Interior is a Mumbai home interior design studio led by Interior Designer Dharamraj Yadav. The studio designs full homes, kitchens, bedrooms, living rooms and custom storage under the philosophy “Design Beyond Walls”." },
  { q: "Which areas do you serve?", a: "SDY Interior is based in Mumbai, Maharashtra. Share your location when you enquire and we will confirm whether we can take on your project." },
  { q: "How do I start a project with SDY Interior?", a: "Call +91 91679 55625 or +91 83690 03578, send a WhatsApp message, or fill in the enquiry form. We will set up a consultation to understand your home and requirements." },
  { q: "How much does interior design cost in Mumbai?", a: "Cost depends on carpet area, the rooms in scope, civil work, material grade, hardware and how much furniture is included. SDY prepares an itemised estimate after the consultation and site visit. Read our cost guide for the main factors." },
  { q: "Do you provide 3D designs before execution?", a: "Visualisation of key spaces can be part of the design scope. Ask during your consultation and it will be listed in your scope document." },
  { q: "Can I see your previous work?", a: "Yes. Visit the projects page, or ask during your consultation to see relevant completed work for your type of home." },
  { q: "Do you handle execution or only design?", a: "SDY coordinates execution as well as design. The exact responsibilities for civil, electrical, carpentry and finishing work are written into your scope document." },
  { q: "How long does a home interior project take?", a: "It varies with home size, civil work and material decisions. You receive a stage-wise schedule for your specific home after the site visit." },
];

export const designStyles = [
  { name: "Contemporary", text: "Clean lines, warm neutrals and one or two statement materials. Comfortable rather than cold.", tone: ["#e9dcc4", "#1d3d35"] },
  { name: "Warm Minimal", text: "Fewer, better things. Light woods, hidden storage and plenty of breathing room.", tone: ["#f6f0e5", "#c9a877"] },
  { name: "Modern Luxe", text: "Rich veneers, stone, brass detailing and dramatic lighting for homes that entertain.", tone: ["#152e28", "#d9ae62"] },
  { name: "Indian Contemporary", text: "Cane, carved wood, jaali and handloom textures in a modern, uncluttered layout.", tone: ["#b98f45", "#6b6a4a"] },
  { name: "Japandi", text: "Japanese restraint meets Scandinavian warmth: natural textures, low furniture, soft light.", tone: ["#ece2cf", "#3a3a32"] },
  { name: "Classic Modern", text: "Mouldings, panelling and symmetry, simplified for today's apartments.", tone: ["#fbf8f2", "#264c42"] },
];

export const materials = [
  { name: "Plywood & boards", text: "The carcass behind every cabinet. Moisture-resistant grades are preferred in kitchens and bathrooms.", care: "Keep edges sealed; wipe spills promptly." },
  { name: "Laminates", text: "Durable, affordable and available in hundreds of textures, from matte solids to realistic woodgrain.", care: "Clean with a soft damp cloth; avoid abrasive pads." },
  { name: "Veneers", text: "Thin slices of real wood with natural grain variation, finished with polish or lacquer.", care: "Avoid direct prolonged sunlight; polish periodically." },
  { name: "Acrylic & PU finishes", text: "High-gloss or matte seamless finishes for a contemporary look, often used on kitchen shutters.", care: "Use microfibre cloths to avoid scratches." },
  { name: "Stone & quartz", text: "Countertops and feature surfaces. Quartz is non-porous; natural marble is beautiful but needs sealing.", care: "Use trivets for hot pans; reseal natural stone as advised." },
  { name: "Hardware", text: "Hinges, channels, lift-ups and handles decide how joinery feels every day. Soft-close is worth it.", care: "Check alignment once a year; keep channels clean." },
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  answer: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  illustration: Illustration;
};

export const posts: BlogPost[] = [
  {
    slug: "questions-before-hiring-an-interior-designer",
    title: "What to check before hiring an interior designer in Mumbai",
    description: "A practical checklist of questions to ask an interior designer about scope, process, materials, timelines and payments before you sign.",
    date: "2026-11-01",
    readMinutes: 6,
    answer:
      "Before hiring an interior designer, check their completed work, what exactly is included in their scope, how they handle execution, which materials and hardware they specify, how payments are staged and how changes are managed. Ask for these in writing.",
    sections: [
      { heading: "1. See work that is similar to your home", body: ["Ask to see completed homes of a similar size and type, not only renders. Real photographs show finishing quality, alignment and how the design held up after handover."] },
      { heading: "2. Get the scope in writing", body: ["The biggest source of disputes is unclear scope. A good scope document lists every room and item and clearly states what is excluded."], list: ["Civil, plumbing and electrical work", "Ceilings and lighting", "Joinery and furniture", "Appliances, décor and soft furnishings", "Deep cleaning and debris removal"] },
      { heading: "3. Understand the process and timeline", body: ["Ask how design is approved, when materials are finalised and how site progress is communicated. A stage-wise schedule tells you when decisions are needed from you."] },
      { heading: "4. Ask about materials and hardware", body: ["Two quotations can look similar but specify very different boards, finishes and hinges. Ask for brands and grades to be named so you are comparing like with like."] },
      { heading: "5. Clarify payments and changes", body: ["Payment milestones should be linked to visible progress. Ask how design changes after approval are handled and priced."] },
    ],
    illustration: "study",
  },
  {
    slug: "how-to-plan-interiors-before-possession",
    title: "How to plan your interiors before taking possession of a new flat",
    description: "Use the months before possession to finalise layouts, kitchen and wardrobe designs and materials, so work can start the day you get the keys.",
    date: "2026-10-18",
    readMinutes: 5,
    answer:
      "You can plan most of your interiors before possession: brief, layouts, kitchen and wardrobe design, lighting plan and materials. Measurements are confirmed on site once you get access, so execution can begin quickly.",
    sections: [
      { heading: "Start with the floor plan", body: ["The builder's floor plan is enough to begin furniture layouts and storage planning. Mark where you want the TV, beds, study and mandir."] },
      { heading: "Write a family brief", body: ["List who lives in the home, what each person needs, what you own and what you plan to buy. This brief drives every design decision."] },
      { heading: "Finalise long-lead items early", body: ["Kitchens, wardrobes, stone and some lighting take time to make or procure. Deciding these early protects your move-in date."] },
      { heading: "Check society rules", body: ["Many buildings have rules on working hours, debris disposal and structural changes. Knowing them early avoids delays."] },
      { heading: "Confirm on site", body: ["Once you have access, everything is re-measured and plumbing and electrical points are checked before production starts."] },
    ],
    illustration: "home",
  },
  {
    slug: "modular-kitchen-materials-guide",
    title: "Modular kitchen materials: finishes, durability and maintenance",
    description: "Compare carcass boards, shutter finishes and countertops for a modular kitchen, and learn how each one behaves in a busy Indian kitchen.",
    date: "2026-10-04",
    readMinutes: 7,
    answer:
      "A modular kitchen has three main material decisions: the carcass board, the shutter finish and the countertop. Moisture resistance matters most for the carcass, scratch and stain resistance for the shutters, and heat and stain resistance for the countertop.",
    sections: [
      { heading: "Carcass: what the cabinets are made of", body: ["The carcass carries the weight and faces moisture from the sink and cleaning. Moisture-resistant plywood grades are commonly chosen for wet areas."] },
      { heading: "Shutters: the face of your kitchen", body: ["Shutters take daily handling, oil and heat."], list: ["Laminate: durable, budget-friendly, many textures", "Acrylic: high gloss, seamless look, shows scratches if not cared for", "PU / lacquer: luxurious painted finish, premium cost", "Veneer: natural wood look, needs care near heat and water"] },
      { heading: "Countertops", body: ["Quartz is non-porous and low maintenance. Granite is tough and heat-resistant. Natural marble is beautiful but can stain with turmeric and lemon unless sealed."] },
      { heading: "Hardware decides how it feels", body: ["Soft-close hinges, full-extension channels and good corner mechanisms make the biggest difference to everyday use. Name the hardware brand in your quotation."] },
    ],
    illustration: "kitchen",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const locations = [
  {
    slug: "mumbai",
    name: "Mumbai",
    metaTitle: "Interior Designer in Mumbai | Home Interiors | SDY Interior",
    metaDescription:
      "SDY Interior is a home interior designer in Mumbai led by ID. Dharamraj Yadav. Full home, modular kitchen, bedroom, living room and wardrobe design. Call +91 91679 55625.",
    h1: "Interior Designer in Mumbai",
    answer:
      "SDY Interior is a Mumbai-based home interior design studio led by Interior Designer Dharamraj Yadav. We design full homes, modular kitchens, bedrooms, living rooms and custom storage for apartments, bungalows and villas in Mumbai.",
    body: [
      "Designing in Mumbai means designing for compact floor plates, high humidity, monsoon seasons, society rules and busy family lives. Our work starts from those realities: moisture-resistant materials where they matter, storage planned into every wall, and layouts that make the most of natural light and cross-ventilation.",
      "Whether you have just taken possession of a new flat or are renovating a family home, we begin with a consultation and a site visit, then share a clear scope, design and schedule specific to your home.",
    ],
  },
];
