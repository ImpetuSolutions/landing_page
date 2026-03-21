import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, apellido, empresa, email, telefono, desafioTecnico } = body;

    // 1. Get access token from Zoho
    const tokenResponse = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token',
      },
    });

    const accessToken = tokenResponse.data.access_token;

    if (!accessToken) {
      throw new Error('Failed to retrieve access token');
    }

    // 2. Push Lead to Zoho CRM
    const leadData = {
      data: [
        {
          First_Name: nombre,
          Last_Name: apellido,
          Company: empresa,
          Email: email,
          Phone: telefono,
          Description: `Desafío Técnico: ${desafioTecnico}`,
          Lead_Source: "Landing Page",
        },
      ],
    };

    const leadResponse = await axios.post(
      'https://www.zohoapis.com/crm/v2/Leads',
      leadData,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({ success: true, data: leadResponse.data });
  } catch (error: any) {
    console.error("Zoho CRM API Error:", error?.response?.data || error.message);
    return NextResponse.json(
      { success: false, error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}
