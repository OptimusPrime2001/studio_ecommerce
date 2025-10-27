"use client";

import { Card, CardContent } from "@components/ui/card";
import dataAnalytics from "@data/kpis.json";
import { DollarSign, Eye, ShoppingBag, Users } from "lucide-react";
import styles from "./AnalyticCards.module.scss";

const iconMap: Record<string, any> = {
  ShoppingBag,
  DollarSign,
  Eye,
  Users,
};

export const AnalyticCards = () => {
  return (
    <div className={styles.cards_grid}>
      {dataAnalytics.map( ( data ) => {
        const Icon = iconMap[data.icon];
        return (
          <Card key={data.title} className={styles.card_wrapper}>
            <CardContent className={styles.card_content}>
              <div className={styles.card_inner}>
                <div className={styles.card_texts}>
                  <p className={styles.kpi_title}>{data.title}</p>
                  <p className={styles.kpi_value}>{data.value}</p>
                  <p
                    className={data.positive ? styles.kpi_change_positive : styles.kpi_change_negative}
                  >
                    {data.change}
                  </p>
                </div>
                <div
                  className={data.positive ? styles.icon_wrap_positive : styles.icon_wrap_negative}
                >
                  <Icon className={styles.icon} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      } )}
    </div>
  );
};
