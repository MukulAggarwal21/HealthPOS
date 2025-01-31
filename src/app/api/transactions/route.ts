import { NextResponse } from 'next/server';
import type { Transaction } from '@/types';

export async function POST(request: Request) {
  try {
    const transaction = await request.json();
    // Here you would typically save to a database
    return NextResponse.json({ 
      success: true, 
      transaction_id: Math.random().toString(36).substr(2, 9).toUpperCase() 
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process transaction" + error},
      { status: 500 }
    );
  }
}