import { PoundIcon, MessageSquare, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";

const items = [
  {
    icon: PoundIcon,
    heading: "Pricing",
    content: "Keeping it simple and transparent.",
  },
  {
    icon: MessageSquare,
    heading: "Communication",
    content: "Regular updates keeping you informed.",
  },
  {
    icon: Wrench,
    heading: "No commission",
    content: "On maintenance works.",
  },
];

// Duplicate for seamless infinite loop
const loopItems = [...items, ...items, ...items];

const FeaturesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const step = () => {
      scrollPos += speed;
      const singleSetWidth = el.scrollWidth / 3;
      if (scrollPos >= singleSetWidth) {
        scrollPos -= singleSetWidth;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-80 bg-secondary rounded-xl p-8"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand text-brand-foreground mb-5">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              {item.heading}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCarousel;
