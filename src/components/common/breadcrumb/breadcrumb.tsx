import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@components/ui/breadcrumb";
import { useStore } from "@mobx/store";
import { cn, uniqueId } from "@utils";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import styles from "./breadcrumb.module.scss";

type BreadcrumbPathProps = {
  className?: string;
  reverseMode?: boolean;
};

const BreadcrumbPath: React.FC<BreadcrumbPathProps> = observer(
  ( { className, reverseMode } ) => {
    const { breadcrumb } = useStore();
    const length = breadcrumb.breadcrumbList.length;
    return (
      <Breadcrumb className={cn( styles.breadcrumbWrapper, className )}>
        <BreadcrumbList>
          {breadcrumb.breadcrumbList.map( ( br, index ) =>
            index !== length - 1 ? (
              <React.Fragment key={uniqueId()}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className={cn(
                        reverseMode ? "" : "dark:hover:!text-neutral_00",
                      )}
                      href={br.href}
                    >
                      {br.name}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            ) : (
              <BreadcrumbItem key={uniqueId()}>
                <BreadcrumbPage
                  className={cn(
                    reverseMode
                      ? "text-neutral_07"
                      : "text-neutral_07 dark:text-neutral_00",
                  )}
                >
                  {br.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            ),
          )}
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
);

export default BreadcrumbPath;
