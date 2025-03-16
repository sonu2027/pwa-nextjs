"use server"
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, body } = await request.json();
    console.log('Notification sent:', { title, body });

    return NextResponse.json(
      { message: 'Notification sent successfully', title, body },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json(
      { message: 'Failed to send notification' },
      { status: 500 }
    );
  }
}