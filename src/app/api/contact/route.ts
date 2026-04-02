import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_PORTAL_ID = '244921424';
const HUBSPOT_FORM_ID = 'f738963e-9243-43e3-848c-df584038fa1a';
const ALLOWED_ORIGIN = 'https://www.a1tradelines.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phone, message } = body;

    if (!firstname || !lastname || !email) {
      return NextResponse.json(
        { success: false, error: 'First name, last name, and email are required.' },
        { status: 400, headers: corsHeaders }
      );
    }

    const hubspotPayload = {
      fields: [
        { name: 'firstname', value: firstname },
        { name: 'lastname', value: lastname },
        { name: 'email', value: email },
        { name: 'phone', value: phone || '' },
        { name: 'message', value: message || '' },
      ],
      context: {
        pageUri: 'https://www.a1tradelines.com/contact',
        pageName: 'A1 Tradelines Contact',
      },
    };

    const hubspotRes = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotPayload),
      }
    );

    if (!hubspotRes.ok) {
      const errText = await hubspotRes.text();
      console.error('HubSpot submission error:', hubspotRes.status, errText);
      return NextResponse.json(
        { success: false, error: 'Failed to submit to CRM. Please try again.' },
        { status: 502, headers: corsHeaders }
      );
    }

    return NextResponse.json({ success: true }, { status: 200, headers: corsHeaders });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
