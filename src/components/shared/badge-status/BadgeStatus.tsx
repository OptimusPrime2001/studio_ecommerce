import { Badge } from "@components/ui/badge";
import { ENTITY_STATUS, type EntityStatus } from "@constants";
import { Check, Clock, File, X } from "lucide-react";
import styles from './BadgeStatus.module.scss';
import { cn } from "@utils";
type BadgeStatusProps = {
  status: EntityStatus;
}

export const BadgeStatus: React.FC<BadgeStatusProps> = ( props ) => {
  const { status } = props;
  const renderTextBadge = () => {
    switch ( status ) {
      case ENTITY_STATUS.PENDING:
        return "Đang xử lý";
      case ENTITY_STATUS.COMPLETED:
        return "Hoàn thành";
      case ENTITY_STATUS.REJECTED:
        return "Từ chối";
      case ENTITY_STATUS.DRAFT:
        return "Bản nháp";
      default:
        return "";
    }
  };
  const renderIconBadge = () => {
    switch ( status ) {
      case ENTITY_STATUS.COMPLETED:
        return <Check />;
      case ENTITY_STATUS.PENDING:
        return <Clock />;
      case ENTITY_STATUS.REJECTED:
        return <X />;
      case ENTITY_STATUS.DRAFT:
        return <File />;
      default:
        return "";
    }
  };
  const variantStyle = {
    [ENTITY_STATUS.PENDING]: styles.pending,
    [ENTITY_STATUS.COMPLETED]: styles.completed,
    [ENTITY_STATUS.REJECTED]: styles.rejected,
    [ENTITY_STATUS.DRAFT]: styles.draft,
  }
  return (
    <Badge className={cn( styles.badge_status, variantStyle[status] )}>
      {renderIconBadge()}
      {renderTextBadge()}
    </Badge>
  )
}