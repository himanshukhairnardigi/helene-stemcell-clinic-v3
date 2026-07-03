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
  HiOutlineDatabase,
  HiOutlineBadgeCheck,
  HiOutlineFlag,
  HiOutlineDocumentText,
  HiOutlineClipboardList as HiOutlineMedical,
  HiOutlineSparkles as HiOutlineWellness,
} from "react-icons/hi";
import { FaStethoscope, FaHeartbeat, FaPlane } from "react-icons/fa";

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
  travel: FaPlane,
  followup: FaHeartbeat,
  iv: HiOutlineDatabase,
  im: HiOutlineBeaker,
  continuedSupport: HiOutlineBadgeCheck,
  japan: HiOutlineFlag,
  medical: HiOutlineMedical,
  wellness: HiOutlineWellness,
  onlineReview: HiOutlineDocumentText,
  secondVisit: FaStethoscope,
};

interface CardIconProps {
  name: string;
  className?: string;
  bare?: boolean;
}

export function CardIcon({ name, className, bare = false }: CardIconProps) {
  const Icon = iconMap[name] ?? HiOutlineSparkles;
  if (bare) {
    return <Icon className={className ?? "h-8 w-8 text-primary"} aria-hidden="true" />;
  }
  return (
    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
      <Icon className={className ?? "h-6 w-6"} aria-hidden="true" />
    </span>
  );
}
