"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import orders from "@/data/orders.json";
import styles from "./LatestOrders.module.scss";

function getStatusClass(status: string) {
  switch (status) {
    case "Completed":
      return styles.status_completed;
    case "Pending":
      return styles.status_pending;
    case "Rejected":
      return styles.status_rejected;
    case "Draft":
      return styles.status_draft;
    default:
      return styles.status_draft;
  }
}

export const LatestOrders = () => {
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.card_header}>
        <div>
          <CardTitle>Latest orders</CardTitle>
        </div>
        <div className={styles.header_actions}>
          <Button variant="outline" size="sm">
            Pages
          </Button>
          <Button
            variant="default"
            size="sm"
            className={styles.download_btn}
          >
            Download
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className={styles.search_section}>
          <div className={styles.search_row}>
            <Input placeholder="Search item" className={styles.search_input} />
            <Button variant="outline">Search</Button>
          </div>
        </div>

        <div className={styles.table_wrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.table_head_row}>
                <th className={styles.th}>
                  Order ID
                </th>
                <th className={styles.th}>
                  Date
                </th>
                <th className={styles.th}>
                  Order by
                </th>
                <th className={styles.th}>
                  Status
                </th>
                <th className={styles.th}>
                  Total sum
                </th>
                <th className={styles.th}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 6).map((order) => (
                <tr key={order.id} className={styles.row}>
                  <td className={styles.cell}>
                    <span className={styles.order_id}>
                      {order.id}
                    </span>
                  </td>
                  <td className={`${styles.cell} ${styles.muted}`}>
                    {order.date}
                  </td>
                  <td className={`${styles.cell} ${styles.muted}`}>
                    {order.customer}
                  </td>
                  <td className={styles.cell}>
                    <Badge className={getStatusClass(order.status)}>
                      {order.status === "Completed" && "✓"} {order.status}
                    </Badge>
                  </td>
                  <td className={`${styles.cell} ${styles.muted}`}>
                    {order.total}
                  </td>
                  <td className={styles.cell}>
                    <Button variant="ghost" size="sm" className={styles.view_detail}>
                      View detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.view_all_wrap}>
          <Button variant="outline" className={styles.view_all_btn}>
            View all orders
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
