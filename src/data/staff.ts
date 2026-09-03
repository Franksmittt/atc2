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

/**
 * Workshop team shown on Meet the Staff.
 * Currently Shane only — Alex can be added as a second entry.
 */
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
];
