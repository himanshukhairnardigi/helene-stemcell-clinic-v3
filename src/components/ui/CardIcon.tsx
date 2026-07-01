import type { IconType } from "react-icons";
import {
  HiOutlineBeaker,
  HiOutlineShieldCheck,
  HiOutlineClipboardCheck,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineClipboardList,
  HiOutlineChatAlt2,
  HiOutlineDocumentSearch,
  HiOutlineClipboardCheck as HiOutlineAssessment,
  HiOutlineCalendar,
  HiOutlinePaperAirplane,
  HiOutlineAnnotation,
} from "react-icons/hi";

const iconMap: Record<string, IconType> = {
  ecosystem: HiOutlineBeaker,
  standards: HiOutlineShieldCheck,
  gmp: HiOutlineClipboardCheck,
  supervision: HiOutlineUserGroup,
  expertise: HiOutlineAcademicCap,
  experience: HiOutlineSparkles,
  administrations: HiOutlineChartBar,
  protocols: HiOutlineClipboardList,
  support: HiOutlineGlobeAlt,
  safety: HiOutlineHeart,
  share: HiOutlineChatAlt2,
  review: HiOutlineDocumentSearch,
  assessment: HiOutlineAssessment,
  planning: HiOutlineCalendar,
  travel: HiOutlinePaperAirplane,
  followup: HiOutlineAnnotation,
};

interface CardIconProps {
  name: string;
  className?: string;
}

export function CardIcon({ name, className }: CardIconProps) {
  const Icon = iconMap[name] ?? HiOutlineSparkles;
  return (
    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
      <Icon className={className ?? "h-6 w-6"} aria-hidden="true" />
    </span>
  );
}
