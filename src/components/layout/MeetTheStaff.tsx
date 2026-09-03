import Image from "next/image";
import { Car, Gauge, Heart, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { staffMembers, type StaffHighlight, type StaffMember } from "@/data/staff";

const highlightIcons: Record<string, LucideIcon> = {
  "The Golden Rule": Gauge,
  "First Car": Car,
  "Off the Clock": Heart,
};

function StaffHighlights({ highlights }: { highlights: StaffHighlight[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {highlights.map((highlight) => {
        const Icon = highlightIcons[highlight.label] ?? Gauge;
        return (
          <div
            key={highlight.label}
            className="rounded-lg border border-border bg-background/60 p-4"
          >
            <dt className="flex items-center gap-2 text-sm font-semibold text-battery">
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {highlight.label}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {highlight.value}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

function StaffProfile({ member, reverse }: { member: StaffMember; reverse: boolean }) {
  return (
    <article>
      <Card className="overflow-hidden border-border bg-card shadow-lg">
        <CardContent className="grid gap-0 p-0 md:grid-cols-2">
          <div
            className={`relative h-[22rem] bg-muted md:h-auto md:min-h-[32rem] ${
              reverse ? "md:order-2" : ""
            }`}
          >
            <Image
              src={member.imageSrc}
              alt={member.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_20%]"
            />
          </div>

          <div className="flex flex-col justify-center space-y-5 p-6 md:p-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-battery">
                {member.role}
              </p>
              <h3 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                {member.heading}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {member.bio}
            </p>
            <StaffHighlights highlights={member.highlights} />
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

const MeetTheStaff = () => {
  if (staffMembers.length === 0) {
    return null;
  }

  return (
    <section
      id="meet-the-staff"
      aria-labelledby="meet-the-staff-heading"
      className="w-full scroll-mt-24"
    >
      <div className="space-y-10">
        <div className="space-y-3 text-center">
          <h2
            id="meet-the-staff-heading"
            className="text-4xl font-extrabold tracking-tight text-foreground"
          >
            Meet the Staff
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            The people who keep Alberton families safe on the road.
          </p>
        </div>

        <div className="space-y-10">
          {staffMembers.map((member, index) => (
            <StaffProfile
              key={member.id}
              member={member}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheStaff;
