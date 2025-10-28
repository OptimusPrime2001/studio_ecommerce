"use client";

import { CommonButton, CommonSelect } from "@components";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { ORDER_STATUS, type OrderStatus } from "@constants/orderStatus";
import orders from "@data/orders.json";
import { formatVnd } from "@utils";
import { Search } from "lucide-react";
import Link from "next/link";
import styles from "./LatestOrders.module.scss";

function getStatusVariant (
  status: OrderStatus,
) {
  switch ( status ) {
    case ORDER_STATUS.DELIVERED:
      return "secondary"; // Use secondary for completed (green-like)
    case ORDER_STATUS.PENDING:
      return "outline"; // Use outline for pending (neutral)
    case ORDER_STATUS.CANCELLED:
      return "destructive"; // Use destructive for rejected (red)
    case ORDER_STATUS.CONFIRMED:
      return "outline"; // Use outline for draft (neutral)
    default:
      return "outline";
  }
}

export const LatestOrders = () => {
  return (
    <Card className={styles.latest_orders_wrapper}>
      <CardHeader className={styles.card_header}>
        <CardTitle className={styles.header_title}>Đơn hàng mới nhất</CardTitle>
        <CardDescription className={styles.header_description}>
          Trong tháng 12, 2025
        </CardDescription>
      </CardHeader>
      <CardContent className={styles.card_content}>
        <section className={styles.filter_section}>
          <div className={styles.filter_type}>
            <span className={styles.filter_label}>Thể loại</span>
            <CommonSelect
              placeholder="Tất cả"
              options={[
                { label: "Tất cả", value: "all" },
                { label: "Đã hoàn thành", value: "completed" },
                { label: "Chờ xử lý", value: "pending" },
                { label: "Từ chối", value: "rejected" },
                { label: "Bản nháp", value: "draft" },
              ]}
              value="all"
              setValue={() => { }}
            />
          </div>
          <div className={styles.filter_status}>
            <span className={styles.filter_label}>Trạng thái</span>
            <CommonSelect
              placeholder="Tất cả"
              options={[
                { label: "Tất cả", value: "all" },
                { label: "Đã gửi", value: "completed" },
                { label: "Chờ xử lý", value: "pending" },
                { label: "Từ chối", value: "rejected" },
                { label: "Đang chờ", value: "draft" },
              ]}
              value="all"
              setValue={() => { }}
            />
          </div>
          <div className={styles.filter_search}>
            <Search className={styles.search_icon} />
            <Input placeholder="Search" className={styles.search_input} />
          </div>
        </section>
        <Table className={styles.latest_orders_table}>
          <TableHeader className={styles.table_header}>
            <TableRow>
              <TableHead>Mã đơn hàng</TableHead>
              <TableHead>Thời gian</TableHead>
              <TableHead>Người đặt</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Tổng cộng</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className={styles.table_body}>
            {orders.slice( 0, 6 ).map( ( order ) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Link
                    className={styles.order_id}
                    href={`dashboard/orders/${order.id}`}
                  >
                    {order.id}
                  </Link>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="">
                  <Badge variant={getStatusVariant( order.status )}>
                    {order.status === "Completed" && "✓"} {order.status}
                  </Badge>
                </TableCell>
                <TableCell >
                  {formatVnd( Number( order.total ) )}
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className={styles.action_button}>
                    Xem chi tiết
                  </Button>
                </TableCell>
              </TableRow>
            ) )}
          </TableBody>
        </Table>
        <div className={styles.action_view_more}>
          <CommonButton variant="secondary" >
            Xem tất cả đơn hàng
          </CommonButton>
        </div>

      </CardContent>
    </Card>
  );
};
