// src/data/content.ts
import ballLockImg from "@/assets/ball-lock.jpg";
import zeroPointImg from "@/assets/zero-point.jpg";
import toggleClampsImg from "@/assets/toggle-clamps.jpg";
import okViseImg from "@/assets/ok-vise.jpg";
import machineWashdownImg from "@/assets/machine-washdown.jpg";
import centerPullHoistImg from "@/assets/center-pull-hoist.jpg";
import quickReleasePinsImg from "@/assets/quick-release-pins.jpg";
import sidePullHoistImg from "@/assets/side-pull-hoist.jpg";
import keyLockingImg from "@/assets/key-locking.jpg";
import handlesImg from "@/assets/handles.jpg";
import plungersImg from "@/assets/plungers.jpg";
import toolingColumnsImg from "@/assets/tooling-columns.jpg";

// ✅ Import founder images
import teamImage1 from "@/assets/team-founders1.jpg";
import teamImage2 from "@/assets/team-founders2.jpg";
import teamImage3 from "@/assets/team-founders3.jpg";

export const productCategories = [
  "Modular Workholding",
  "Fixturing Components",
  "Hoist Rings & Lifting Solutions",
  "Quick-Release Pins",
  "OEM & MRO Components",
];

export const individualProducts = [
  {
    id: "ball-lock",
    name: "Ball Lock",
    description: "Precision ball lock systems for secure and repeatable workholding applications.",
    image: ballLockImg,
  },
  {
    id: "zero-point",
    name: "Zero Point System",
    description: "Quick-change zero point clamping systems for reduced setup times.",
    image: zeroPointImg,
  },
  {
    id: "toggle-clamps",
    name: "Toggle Clamps",
    description: "Heavy-duty toggle clamps for fast and reliable workpiece securing.",
    image: toggleClampsImg,
  },
  {
    id: "ok-vise",
    name: "OK-Vise",
    description: "Precision OK-Vise mounting systems for machining applications.",
    image: okViseImg,
  },
  {
    id: "machine-washdown",
    name: "Machine Washdown Tool",
    description: "Industrial-grade washdown tools for equipment maintenance.",
    image: machineWashdownImg,
  },
  {
    id: "center-pull-hoist",
    name: "Center Pull Hoist Rings",
    description: "Center-pull hoist rings for vertical lifting applications.",
    image: centerPullHoistImg,
  },
  {
    id: "quick-release-pins",
    name: "Double Acting Quick Release Pins",
    description: "Double-acting quick release pins for rapid assembly and disassembly.",
    image: quickReleasePinsImg,
  },
  {
    id: "side-pull-hoist",
    name: "Side Pull Hoist Rings",
    description: "Side-pull hoist rings for angular lifting requirements.",
    image: sidePullHoistImg,
  },
  {
    id: "key-locking",
    name: "Key Locking Inserts",
    description: "Key locking thread inserts for secure fastening solutions.",
    image: keyLockingImg,
  },
  {
    id: "handles",
    name: "Handles",
    description: "Ergonomic handles for tooling and fixture applications.",
    image: handlesImg,
  },
  {
    id: "plungers",
    name: "Plungers",
    description: "Precision plungers for positioning and locating applications.",
    image: plungersImg,
  },
  {
    id: "tooling-columns",
    name: "Production Tooling Columns",
    description: "Precision tooling columns for fixture and jig construction.",
    image: toolingColumnsImg,
  },
];

export const founders = [
  {
    name: "Mr. Bharath Rajarao",
    role: "Managing Director",
    bio: "A Mechanical Engineer from Bangalore University and an alumnus of IIM Ahmedabad, is the driving force behind the company's venture into manufacturing technologically advanced products...",
    image: teamImage1,
  },
  {
    name: "Mrs. Tulasi Rao",
    role: "Co-Founder & Visionary",
    bio: "A science graduate from Bangalore University and a senior citizen, has been instrumental in shaping the company's vision...",
    image: teamImage2,
  },
  {
    name: "Raghavendra Rao G. N.",
    role: "Advisor - Manufacturing, Quality & Operations",
    bio: "A seasoned engineering and management professional with over 25 years of experience spanning aerospace, electronics, and mechanical design...",
    image: teamImage3,
  },
];

export const faqs = [
  {
    question: "What standards do your components meet?",
    answer: "All our components are manufactured to ASTM, ASME, and ISO standards...",
  },
  {
    question: "Can you handle custom OEM requirements?",
    answer: "Yes, we specialize in custom manufacturing from prototypes to production runs...",
  },
  {
    question: "What is your typical lead time?",
    answer: "Standard catalog items: 2-4 weeks. Custom components: 6-10 weeks depending on complexity...",
  },
  {
    question: "Do you export internationally?",
    answer: "Yes, we export to clients worldwide with full export documentation...",
  },
  {
    question: "What quality certifications do you hold?",
    answer: "We maintain ISO 9001:2015 certification and follow stringent quality protocols...",
  },
  {
    question: "Can I visit your manufacturing facility?",
    answer: "Absolutely. We welcome client visits to our Bangalore facility...",
  },
];
