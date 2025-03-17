import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { fullName, mobileNo, email, subject, message } = await req.json();

        if (!fullName || !mobileNo || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Here, store data in a database or send an email.
        // Example: Save to a JSON file, Firebase, or a database

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
    }
}
