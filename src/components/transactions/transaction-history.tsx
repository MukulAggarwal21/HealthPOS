"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils/format-currency";

const transactions = [
  {
    id: "TX123",
    date: "2024-01-31",
    customer: "John Doe",
    total: 150.0,
    status: "completed",
  },
  // Add more sample transactions...
];

export function TransactionHistory() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter((tx) =>
    tx.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <Input
          placeholder="Search transactions..."
          className="max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.id}</TableCell>
                <TableCell>{tx.date}</TableCell>
                <TableCell>{tx.customer}</TableCell>
                <TableCell>{formatCurrency(tx.total)}</TableCell>
                <TableCell className="capitalize">{tx.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}