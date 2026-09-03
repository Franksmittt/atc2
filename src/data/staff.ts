export type StaffHighlight = {
  label: string;
  value: string;
};

export type StaffMember = {
  id: string;
  name: string;
  heading: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bio: string;
  highlights: StaffHighlight[];
};

/** Workshop team shown on Meet the Staff: Shane and Alex. */
export const staffMembers: StaffMember[] = [
  {
    id: "shane",
    name: "Shane",
    heading: "Meet Shane",
    role: "Automotive Expert",
    imageSrc: "/images/staff/shane.jpg",
    imageAlt:
      "Shane, automotive expert at Alberton Tyre Clinic, wearing a Maxtrek vest",
    bio: "Shane brings over 32 years of automotive expertise to Alberton Tyre Clinic, fueled by a lifelong passion for all types of vehicles. Having served the Alberton community for two decades, his approach is built entirely around driver safety. For Shane, the ultimate reward is client gratitude and the quiet satisfaction of knowing he went the extra mile to keep a family secure on the road.",
    highlights: [
      {
        label: "The Golden Rule",
        value:
          "Always check your tyre pressure. Running them too low causes premature wear on the shoulders, while over-inflating burns through the center tread.",
      },
      {
        label: "First Car",
        value: "1984 Mazda 323.",
      },
      {
        label: "Off the Clock",
        value:
          "A dedicated family man who spends his downtime enjoying life with his children and grandchildren.",
      },
    ],
  },
  {
    id: "alex",
    name: "Alex",
    heading: "Meet Alex",
    role: "Quality Control Specialist",
    imageSrc: "/images/staff/alex.jpg",
    imageAlt:
      "Alex, quality control specialist at Alberton Tyre Clinic",
    bio: "Alex brings 32 years of comprehensive automotive experience to the floor, backed by 26 years of deep roots in the Alberton area. He is passionate about every aspect of the tyre industry, but his true focus is on quality control. For Alex, job satisfaction comes from personally inspecting the vehicles in the bay to ensure every fitment is executed perfectly before hand-over.",
    highlights: [
      {
        label: "The Golden Rule",
        value:
          "Don't neglect the fundamentals. Maximizing your tyre life comes down to three non-negotiables: regular pressure checks, proper wheel alignment, and routine rotation.",
      },
      {
        label: "First Car",
        value: "1981 Golf 1.",
      },
      {
        label: "Off the Clock",
        value: "Finding a quiet balance at home by tending to his koi pond.",
      },
    ],
  },
];
