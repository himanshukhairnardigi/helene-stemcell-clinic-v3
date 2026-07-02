import drKobayashi from "@/assets/dr-kobayashi.jpg";
import drMatsuoka from "@/assets/dr-matsuoka.jpg";
import drItohara from "@/assets/dr-itohara.jpg";
import safetyStudyReport from "@/assets/reports/safety-study.pdf";
import diabetesStudyReport from "@/assets/reports/diabetes-hba1c-study.pdf";

export const WHATSAPP_NUMBER = "819012345678";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const nav = {
  logo: "HELENE",
  logoSubtitle: "Stemcell Clinic",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Specialists", href: "#specialists" },
    { label: "Steps", href: "#journey" },
    { label: "Certifications", href: "#why-japan" },
    { label: "FAQs", href: "#faq" },
  ],
  // suitabilityLabel: "See if you are a suitable candidate",
  // suitabilityHref: "#faq",
  ctaLabel: "Chat with our experts",
};

export const hero = {
  eyebrow: "Japan-Regulated Regenerative Therapy",
  headingPrefix: "Still struggling with",
  typewriterWords: ["Diabetes", "Osteoarthritis"],
  headingSuffix: "despite medications and lifestyle changes?",
  subheading:
    "Regenerative medicine in Japan can be an option worth discussing with our medical experts.",
  bullets: [
    // "Japan-regulated medical framework",
    // "Online medical pre-assessment available",
    // "Treatment provided exclusively in Japan",
  ],
  ctaLabel: "Talk to Our Medical Team on WhatsApp",
  imageAlt: "Helene Clinic physician consulting with a patient",
  trustBadgesHeading: "Why patients trust Helene Clinic",
  trustBadges: [
    "Medical consultation by experts",
    "Treatment performed in Japan",
    "Regenerative medicine under Japanese regulatory framework",
    "Personalized suitability assessment",
  ],
};

export const struggleSection = {
  eyebrow: "You're Not Starting From Zero",
  heading: "If You're Reading This, You've Probably Already Tried Everything.",
  intro:
    "Maybe it's the diabetes that won't respond no matter how careful you are. Maybe it's the knee that makes you think twice before taking the stairs. Either way, you didn't land on this page by accident — you've already put in the work.",
  tabs: [
    {
      key: "diabetes",
      label: "For Diabetes",
      points: [
        "Years of metformin, insulin shots, and being told to “just manage your sugar”",
        "An HbA1c number that refuses to move, no matter how disciplined you are with diet and exercise",
        "The quiet, constant worry about complications — your kidneys, your eyes, your nerves",
        "Doctors who treat the lab report in front of them, not the life you're trying to live",
      ],
    },
    {
      key: "osteoarthritis",
      label: "For Osteoarthritis",
      points: [
        "Painkillers that dull the ache for a few hours and fix nothing",
        "Physiotherapy that helps for a week, until the pain creeps back",
        "Being told, sometimes as early as your 50s, that “replacement surgery is your only real option”",
        "Skipping stairs, skipping walks, sitting out when your grandchildren want to play",
      ],
    },
  ],
  closing:
    "Conventional treatment is built to manage symptoms. It was never designed to address what's happening inside your cells. That's the space regenerative medicine is being studied for — and why it matters which clinic you trust with it.",
  ctaLabel: "Talk to an Expert",
};

export const differenceSection = {
  eyebrow: "The Science",
  heading: "What makes regenerative medicine different?",
  intro:
    "Stem cells are being studied because of their potential regenerative and immunomodulatory properties. Researchers are exploring their role in:",
  points: [
    "Supporting tissue repair",
    "Reducing inflammation",
    "Improving cellular function",
    "Supporting quality of life in certain conditions",
  ],
  disclaimerLabel: "Important note",
  disclaimer:
    "Stem cell therapy is not appropriate for everyone, and individual outcomes can vary.",
};

export const japanSection = {
  eyebrow: "The Japan Advantage",
  heading: "Why do international patients choose Japan for regenerative medicine?",
  cards: [
    {
      icon: "ecosystem",
      title: "Advanced regenerative medicine ecosystem",
    },
    {
      icon: "standards",
      title: "High clinical standards",
    },
    {
      icon: "gmp",
      title: "GMP-compliant cell processing",
    },
    {
      icon: "supervision",
      title: "Physician-supervised treatment protocols",
    },
    {
      icon: "expertise",
      title: "Long-standing expertise in stem cell research",
    },
  ],
  ctaLabel: "Understand Treatment Options",
};

export const whyHeleneSection = {
  eyebrow: "Why Helene Clinic",
  heading: "Why Helene Clinic",
  cards: [
    {
      icon: "experience",
      title: "More than a decade of regenerative medicine experience",
    },
    {
      icon: "administrations",
      title: "Thousands of stem cell administrations performed",
    },
    {
      icon: "protocols",
      title: "Physician-led treatment protocols",
    },
    {
      icon: "support",
      title: "International patient support",
    },
    {
      icon: "safety",
      title: "Focus on patient safety and medical evaluation",
    },
  ],
};

export const researchSection = {
  eyebrow: "Published Research",
  heading: "Research that informs our approach",
  safetyStudy: {
    title: "Safety Study",
    intro:
      "A retrospective study involving 2,504 patients receiving intravenous mesenchymal stem cell therapy reported:",
    stats: [
      { value: "0.2%", label: "Major adverse cardiac and cerebrovascular event rate" },
      { value: "0.8%", label: "Minor adverse events" },
      { value: "0", label: "Severe adverse events reported" },
    ],
    footnote:
      "These findings suggest a favorable safety profile, while further randomized studies are still needed.",
    reportUrl: diabetesStudyReport,
  },
  diabetesStudy: {
    title: "Diabetes Study",
    intro:
      "A study involving 61 patients with Type 2 Diabetes receiving a single intravenous MSC infusion reported:",
    stats: [
      { value: "6.7%", label: "Average HbA1c reduction" },
      { value: "3+ yrs", label: "Median follow-up exceeding three years" },
      { value: "0", label: "Serious adverse events reported" },
    ],
    footnote2: "Greater improvements observed in severe diabetes cases.",
    footnote:
      "Further randomized controlled studies are required to validate these findings.",
    reportUrl: safetyStudyReport,
  },
  ctaLabel: "Discuss Whether You May Be a Suitable Candidate",
};

export const specialistsSection = {
  eyebrow: "Our Team",
  heading: "Our Regenerative Medicine Specialists",
  intro:
    "Treatment at Helene Clinic is led and supervised by physicians across regenerative medicine, internal medicine, and orthopedic care — every case is reviewed by a qualified doctor before any treatment plan is proposed.",
  members: [
    {
      name: "Nana Kobayashi",
      role: "Clinical Lead",
      description:
        "Provides senior clinical leadership in regenerative medicine within Japan's regulated medical system.",
      credentials: "Dr. Kobayashi, MD",
      photo: drKobayashi,
    },
    {
      name: "Takaaki Matsuoka",
      role: "Representative of HELENE GROUP",
      description:
        "Leads regenerative medicine protocols and clinical education. Involved in treatment strategy development and medical oversight.",
      credentials: "Dr. Matsuoka, MBBS, DABRM",
      photo: drMatsuoka,
    },
    {
      name: "Takaaki Itohara",
      role: "Cardiovascular & Surgical Specialist in HELENE",
      description:
        "Provides medical assessment and risk evaluation, particularly for patients with cardiovascular or systemic conditions.",
      credentials: "Dr. Itohara, MD",
      photo: drItohara,
    },
  ],
};

export const contact = {
  phone: "+81 701-550-4730",
  email: "contact@helene.jp",
  postalCode: "〒107-0062",
  addressLines: ["5-9-15 Minami Aoyama, Minato-ku", "Tokyo Aoyama OHMOTO Building 3F"],
};

export const locationSection = {
  eyebrow: "Visit Us",
  heading: "Clinic Location — Tokyo, Japan",
  intro:
    "HELENE Clinic is located in Tokyo, approximately an 8–9 hour flight, with dedicated support for international patients throughout consultation, treatment, and follow-up.",
  addressLines: ["Helene Clinic Omotesando", contact.postalCode, ...contact.addressLines, "Tokyo, Japan"],
  mapQuery: "5-9-15 Minami-Aoyama, Minato-ku, Tokyo, Japan",
  fromCity: "Mumbai, India",
  toCity: "Tokyo, Japan",
  caption: "Central Tokyo location with convenient international access",
  ctaLabel: "Start Your Medical Review",
};

export const videoSection = {
  eyebrow: "Inside the Clinic",
  heading: "See How It Actually Works, Inside Our Tokyo Clinic",
  intro:
    "Rather than just take our word for it, here's a look inside the process itself — from how we collect and culture your own cells to how the infusion is administered, under Japan's regulatory framework for regenerative medicine.",
  youtubeId: "JxVk7_Kpvt0",
  caption:
    "Omotesando Helene Clinic — autologous stem cell collection, culturing, and administration.",
};

export const comparisonSection = {
  eyebrow: "The Honest Comparison",
  heading: "What You've Already Tried, vs. What This Offers",
  intro:
    "Before you decide whether this is worth exploring, here's an honest look at how it compares to treatments you've likely already tried in India.",
  tabs: [
    {
      key: "diabetes",
      label: "For Type 2 Diabetes",
      columns: ["Option", "Typical Cost in India", "Frequency", "What It Targets", "Downtime", "Key Limitation"],
      highlightRow: 4,
      rows: [
        ["Oral hypoglycemics (e.g., metformin)", "₹1,500–4,000/month", "Lifelong, daily", "Blood sugar symptom control", "None", "Doesn't address beta-cell decline; needs lifelong adherence"],
        ["Insulin therapy", "₹3,000–9,000/month", "Lifelong, daily injections", "Blood sugar control", "None", "Doesn't address insulin resistance; daily injection burden"],
        ["Newer GLP-1 medications", "₹6,000–18,000/month", "Lifelong", "Blood sugar + weight", "Minimal", "High ongoing cost, indefinite use"],
        ["Bariatric/metabolic surgery", "₹2,50,000–4,50,000 (one-time)", "One-time, major surgery", "Severe insulin resistance", "4–6 weeks", "Invasive, surgical risk, not suitable for everyone"],
        ["MSC IV therapy (Helene, Japan)", "[clinic to confirm package pricing]", "Single infusion, outpatient", "Underlying inflammation & metabolic environment (per published data)", "~1 day, no surgery", "Emerging therapy; long-term durability still being studied; travel required"],
      ],
    },
    {
      key: "osteoarthritis",
      label: "For Osteoarthritis",
      columns: ["Option", "Typical Cost in India", "Frequency", "What It Targets", "Downtime", "Key Limitation"],
      highlightRow: 4,
      rows: [
        ["NSAIDs / painkillers", "₹1,000–3,000/month", "Lifelong, daily", "Pain symptom relief", "None", "No cartilage repair; long-term GI/kidney risk"],
        ["Physiotherapy", "₹15,000–30,000/course", "Ongoing, weekly", "Strength & mobility", "None", "Requires continual sessions; doesn't stop progression"],
        ["Intra-articular injections (PRP/HA)", "₹15,000–40,000/session", "Repeated every 6–12 months", "Local joint lubrication/inflammation", "1–2 days", "Localized & temporary effect"],
        ["Knee/hip replacement surgery", "₹2,50,000–4,50,000/joint", "One-time, major surgery", "Replaces the joint", "6–12 weeks rehab", "Invasive, surgical/anaesthesia risk, age limitations"],
        ["MSC IV therapy (Helene, Japan)", "[clinic to confirm package pricing]", "Single infusion, outpatient", "Systemic anti-inflammatory & supportive effect", "~1 day", "Not a substitute for joint replacement in severe structural damage; emerging evidence"],
      ],
    },
  ],
  costDisclaimer:
    "Cost figures shown for Indian treatment options are illustrative market ranges and may vary by provider, patient condition, and city. This is not a guarantee of outcome or savings. Please confirm exact pricing and suitability for your case with our patient coordinator.",
  smallDisclaimer:
    "No treatment option is universally superior. Suitability depends on individual medical circumstances.",
};

export const journeySection = {
  eyebrow: "How It Works",
  heading: "Your Journey with Helene Clinic",
  steps: [
    { icon: "share", title: "Share your medical reports on WhatsApp" },
    { icon: "review", title: "Initial review by medical team" },
    { icon: "assessment", title: "Suitability assessment" },
    { icon: "planning", title: "Treatment discussion and planning" },
    { icon: "travel", title: "Travel to Japan if appropriate" },
    { icon: "followup", title: "Post-treatment follow-up guidance" },
  ],
};

export const faqSection = {
  eyebrow: "FAQs",
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "Is stem cell therapy legal in Japan?",
      answer:
        "Regenerative medicine in Japan operates under specific regulatory frameworks and treatment protocols.",
    },
    {
      question: "Can you guarantee results?",
      answer:
        "No. Individual outcomes vary and no medical treatment can guarantee specific results.",
    },
    {
      question: "How do I know if I am eligible?",
      answer:
        "Eligibility depends on your medical history, reports and physician assessment.",
    },
    {
      question: "How much does treatment cost?",
      answer:
        "Treatment recommendations and associated costs depend on individual evaluation and treatment plans.",
    },
    {
      question: "Is stem cell therapy safe?",
      answer:
        "Published studies have reported favorable safety outcomes, but all medical treatments involve potential risks and should be discussed with physicians.",
    },
  ],
};

export const finalCta = {
  heading: "Begin Your Regenerative Therapy Evaluation in Japan",
  subheading:
    "Speak with a medical expert to understand treatment eligibility, medical evaluation, and international travel planning.",
  ctaLabel: "Request Medical Review",
  contactHeading: "Contact",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} HELENE Clinic. All rights reserved.`,
  locationLine: "HELENE Clinic Omotesando, Tokyo, Japan",
};
