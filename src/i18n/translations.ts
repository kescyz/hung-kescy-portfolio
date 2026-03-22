export type Locale = "vi" | "en";

export type Translations = typeof vi;

export const vi = {
  nav: {
    logo: "Hưng Kescy",
    links: [
      { label: "Giới thiệu", href: "#about" },
      { label: "Giải pháp", href: "#services" },
      { label: "Hình ảnh", href: "#gallery" },
      { label: "Phản hồi", href: "#testimonials" },
      { label: "Cộng đồng", href: "#community" },
      { label: "Liên hệ", href: "#contact" },
    ],
    langToggle: "EN",
    langHref: "/en",
  },
  hero: {
    label: "chuyên gia tư vấn & đào tạo",
    h1Line1: "Xin chào, tôi là",
    name: "HƯNG KESCY",
    h1Line2: "CEO & Founder của KesFlow.",
    tagline:
      "Chuyên gia tư vấn và đào tạo tối ưu vận hành doanh nghiệp SME với AI, Automation & LarkSuite.",
    stats: [
      {
        number: "500+",
        label: "chủ DN & quản lý tham gia các buổi đào tạo/ chia sẻ",
      },
      { number: "10+", label: "doanh nghiệp trực tiếp đào tạo nội bộ" },
      { number: "20+", label: "Workshop/ Webinar" },
    ],
  },
  about: {
    label: "sứ mệnh",
    quote:
      '"Khám phá, thấu hiểu và lan tỏa sức mạnh công nghệ để giúp doanh nghiệp Việt Nam vận hành dễ dàng và nhẹ nhàng hơn."',
    cards: [
      {
        title: "Dare",
        description:
          "Dám thay đổi, dám đột phá trong kỷ nguyên số hóa không ngừng nghỉ.",
      },
      {
        title: "Truth",
        description:
          "Tư vấn thực chất, giải pháp thực tế, kết quả đo lường được.",
      },
      {
        title: "Kaizen",
        description:
          "Cải tiến liên tục mỗi ngày để đạt tới sự tối ưu tuyệt đối trong vận hành.",
      },
    ],
  },
  services: {
    label: "giải pháp",
    title: "Tư vấn & đào tạo",
    description:
      "Tích hợp AI và Automation vào quy trình cốt lõi để giải phóng nguồn lực con người.",
    detail: "Chi tiết",
    items: [
      {
        num: "01",
        title: "Khóa đào tạo",
        description:
          "Đào tạo chủ doanh nghiệp và đội ngũ làm chủ các công cụ AI & Automation để nâng cao hiệu suất làm việc.",
      },
      {
        num: "02",
        title: "Đào tạo nội bộ",
        description:
          "Thiết kế chương trình đào tạo riêng biệt cho đặc thù từng doanh nghiệp và phòng ban.",
      },
      {
        num: "03",
        title: "Tư vấn chuyển đổi",
        description:
          "Tư vấn lộ trình chuyển đổi số toàn diện trên nền tảng LarkSuite & AI, tối ưu hóa mọi quy trình.",
      },
      {
        num: "04",
        title: "AI Agents",
        description:
          'Xây dựng hệ thống "Nhân sự AI" trực tiếp tham gia vào các hoạt động của doanh nghiệp, làm việc 24/7.',
      },
    ],
  },
  gallery: {
    title: "Đào tạo & Chia sẻ",
    subtitle:
      "Lan tỏa giá trị công nghệ và tư duy chuyển đổi số thông qua các buổi workshop, đào tạo và sự kiện cộng đồng.",
  },
  experience: {
    label: "sự nghiệp",
    title: "Hành trình đã qua",
    description:
      "Đa dạng trải nghiệm vị trí quản lý và lãnh đạo trong các lĩnh vực kinh doanh.",
    showMore: "Xem thêm",
    showLess: "Ẩn bớt",
    current: "Current",
    items: [
      { company: "KesFlow", role: "CEO & Founder", period: "Current", current: true },
      { company: "SEONGON", role: "AI Solution Manager", period: "2024 — 2025", current: false },
      { company: "Kaipany", role: "CTO & Co-founder", period: "2023 — 2024", current: false },
      { company: "Đồi Llum", role: "CEO", period: "2023 — 2024", current: false },
      { company: "MobiFone IT", role: "Project Manager", period: "2023 — 2023", current: false },
      { company: "ShopBase", role: "Product Manager", period: "2022 — 2023", current: false },
      { company: "Crypto Sloth", role: "CEO & Founder", period: "2021 — 2022", current: false },
      { company: "TXG", role: "Marketing Lead", period: "2019 — 2021", current: false },
      { company: "The Chipmunk Homestay", role: "CEO & Founder", period: "2018 — 2024", current: false },
    ],
  },
  testimonials: {
    label: "Feedback",
    title: "Từ những Lãnh đạo",
    items: [
      {
        quote:
          '"Ứng dụng AI & Automation sẽ giúp giảm tải rất nhiều cho chủ doanh nghiệp trong quản lý và vận hành, tối ưu chi phí nếu sử dụng đúng cách."',
        name: "Chu Việt Tuấn Anh",
        role: "CEO, PHÚC ANH LAWS",
        initials: "CA",
      },
      {
        quote:
          '"Hưng không bao giờ dạy cho xong. Hưng dạy bằng cách liên tục hỏi ngược lại học viên: Bạn đang làm ngành gì? Vấn đề của bạn là gì? Ứng dụng này có giải quyết được bài toán đó không?"',
        name: "Nguyễn Trung Dũng",
        role: "CEO, TCL LOGISTICS",
        initials: "ND",
      },
      {
        quote:
          '"TƯ DUY làm việc với AI & 1 "Chuyên gia đồng hành". Đây mới thực sự là giá trị xứng đáng nhất mình thấy được ở khóa học của Hưng."',
        name: "Bích Nguyễn",
        role: "CEO, HẠT LÀNH",
        initials: "BN",
      },
    ],
  },
  community: {
    title: "Phụng sự cộng đồng",
    items: [
      { title: "JCI Việt Nam 2026", description: "Giám đốc Chuyển đổi số quốc gia." },
      { title: "JCI Grace 2025", description: "Tổng Thư ký (LSG)." },
      { title: "CEO HN8", description: "Trưởng Ban Công nghệ." },
      { title: "CEO HN9", description: "Trưởng Ban Công nghệ lâm thời." },
      { title: "JCI Thanglong Junior Club", description: "Mentor." },
    ],
  },
  cta: {
    title: "SẴN SÀNG TỐI ƯU VẬN HÀNH?",
    subtitle:
      "Đừng để quy trình cũ cản bước tiến của doanh nghiệp bạn trong kỷ nguyên AI.",
    primaryBtn: "Liên hệ tư vấn",
    secondaryBtn: "Đặt lịch 1-1",
  },
  footer: {
    name: "Hưng Kescy",
    tagline:
      "Chuyên gia tư vấn và đào tạo tối ưu vận hành doanh nghiệp SME với AI, Automation & LarkSuite.",
    contactLabel: "liên hệ",
    locationLabel: "địa chỉ",
    location: "Hanoi, Vietnam",
    email: "hungkescy@kesflow.vn",
    phone: "039.345.4795",
    facebook: "fb.com/kescyz",
    copyright: "© 2026 Hưng Kescy",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

export const en: Translations = {
  nav: {
    logo: "Hung Kescy",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Feedback", href: "#testimonials" },
      { label: "Community", href: "#community" },
      { label: "Contact", href: "#contact" },
    ],
    langToggle: "VI",
    langHref: "/",
  },
  hero: {
    label: "consultant & training expert",
    h1Line1: "Hello, I am",
    name: "HUNG KESCY",
    h1Line2: "CEO & Founder of KesFlow.",
    tagline:
      "Consultant and trainer specializing in SME business optimization with AI, Automation & LarkSuite.",
    stats: [
      { number: "500+", label: "business owners & managers joined training sessions" },
      { number: "10+", label: "companies with direct in-house training" },
      { number: "20+", label: "Workshops / Webinars" },
    ],
  },
  about: {
    label: "mission",
    quote:
      '"Explore, understand and spread the power of technology to help Vietnamese businesses operate more easily and efficiently."',
    cards: [
      {
        title: "Dare",
        description: "Dare to change, dare to break through in the era of non-stop digitalization.",
      },
      {
        title: "Truth",
        description: "Substantive consulting, practical solutions, measurable results.",
      },
      {
        title: "Kaizen",
        description: "Continuous daily improvement to achieve absolute optimization in operations.",
      },
    ],
  },
  services: {
    label: "solutions",
    title: "Consulting & Training",
    description:
      "Integrating AI and Automation into core processes to free up human resources.",
    detail: "Details",
    items: [
      {
        num: "01",
        title: "Training Programs",
        description:
          "Train business owners and teams to master AI & Automation tools to improve work efficiency.",
      },
      {
        num: "02",
        title: "In-house Training",
        description:
          "Design customized training programs tailored to each company and department.",
      },
      {
        num: "03",
        title: "Digital Transformation",
        description:
          "Consult on comprehensive digital transformation roadmap on LarkSuite & AI, optimizing all processes.",
      },
      {
        num: "04",
        title: "AI Agents",
        description:
          'Build an "AI Staff" system that directly participates in business activities, working 24/7.',
      },
    ],
  },
  gallery: {
    title: "Training & Sharing",
    subtitle:
      "Spreading technology value and digital transformation mindset through workshops, training sessions and community events.",
  },
  experience: {
    label: "career",
    title: "The Journey So Far",
    description:
      "Diverse experience in management and leadership positions across business domains.",
    showMore: "Show More",
    showLess: "Show Less",
    current: "Current",
    items: [
      { company: "KesFlow", role: "CEO & Founder", period: "Current", current: true },
      { company: "SEONGON", role: "AI Solution Manager", period: "2024 — 2025", current: false },
      { company: "Kaipany", role: "CTO & Co-founder", period: "2023 — 2024", current: false },
      { company: "Đồi Llum", role: "CEO", period: "2023 — 2024", current: false },
      { company: "MobiFone IT", role: "Project Manager", period: "2023 — 2023", current: false },
      { company: "ShopBase", role: "Product Manager", period: "2022 — 2023", current: false },
      { company: "Crypto Sloth", role: "CEO & Founder", period: "2021 — 2022", current: false },
      { company: "TXG", role: "Marketing Lead", period: "2019 — 2021", current: false },
      { company: "The Chipmunk Homestay", role: "CEO & Founder", period: "2018 — 2024", current: false },
    ],
  },
  testimonials: {
    label: "Feedback",
    title: "From Leaders",
    items: [
      {
        quote:
          '"AI & Automation applications can greatly reduce the burden on business owners in management and operations, optimizing costs when used correctly."',
        name: "Chu Viet Tuan Anh",
        role: "CEO, PHUC ANH LAWS",
        initials: "CA",
      },
      {
        quote:
          '"Hung never just teaches and moves on. He teaches by constantly asking trainees: What industry are you in? What is your problem? Can this application solve it?"',
        name: "Nguyen Trung Dung",
        role: "CEO, TCL LOGISTICS",
        initials: "ND",
      },
      {
        quote:
          '"The MINDSET for working with AI and a "companion expert". This is truly the most worthwhile value I found in Hung\'s course."',
        name: "Bich Nguyen",
        role: "CEO, HAT LANH",
        initials: "BN",
      },
    ],
  },
  community: {
    title: "Community Service",
    items: [
      { title: "JCI Vietnam 2026", description: "National Digital Transformation Director." },
      { title: "JCI Grace 2025", description: "Secretary General (LSG)." },
      { title: "CEO HN8", description: "Head of Technology." },
      { title: "CEO HN9", description: "Acting Head of Technology." },
      { title: "JCI Thanglong Junior Club", description: "Mentor." },
    ],
  },
  cta: {
    title: "READY TO OPTIMIZE YOUR OPERATIONS?",
    subtitle:
      "Don't let outdated processes hold back your business in the AI era.",
    primaryBtn: "Contact for Consulting",
    secondaryBtn: "Book 1-1 Session",
  },
  footer: {
    name: "Hung Kescy",
    tagline:
      "Consultant and trainer specializing in SME business optimization with AI, Automation & LarkSuite.",
    contactLabel: "Contact",
    locationLabel: "Location",
    location: "Hanoi, Vietnam",
    email: "hungkescy@kesflow.vn",
    phone: "039.345.4795",
    facebook: "fb.com/kescyz",
    copyright: "© 2026 Hung Kescy",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

export const translations: Record<Locale, Translations> = { vi, en };
