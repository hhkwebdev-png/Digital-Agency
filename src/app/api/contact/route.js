
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();

    // Popup fields
    const {
      fullName,
      email,
      company,
      goal,

      // Contact Page fields
      companyName,
      phone,
      website,
      service,
      budget,
      timeline,
      projectDetails,
    } = body;

    // --------------------------------------------------
    // ENVIRONMENT VARIABLES
    // --------------------------------------------------

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "RESEND_API_KEY is missing from .env.local",
        },
        { status: 500 }
      );
    }

    if (!process.env.EMAIL_FROM) {
      return NextResponse.json(
        {
          success: false,
          error: "EMAIL_FROM is missing from .env.local",
        },
        { status: 500 }
      );
    }

    if (!process.env.EMAIL_TO) {
      return NextResponse.json(
        {
          success: false,
          error: "EMAIL_TO is missing from .env.local",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // SUPPORT BOTH FORMS
    // --------------------------------------------------

    // Contact Page uses companyName
    // Popup uses company
    const finalCompany = companyName || company || "Not provided";

    // --------------------------------------------------
    // REQUIRED FIELDS
    // --------------------------------------------------

    if (!fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name and email are required.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // RESEND
    // --------------------------------------------------

    const resend = new Resend(process.env.RESEND_API_KEY);

    // --------------------------------------------------
    // EMAIL CONTENT
    // --------------------------------------------------

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,

      to: [process.env.EMAIL_TO],

      // When you click Reply, it replies directly to the client
      replyTo: email,

      subject: `New Project Inquiry from ${fullName}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          background: #f8fafc;
          padding: 30px;
          color: #17202a;
        ">

          <!-- HEADER -->
          <div style="
            background: #1C3636;
            padding: 25px;
            border-radius: 12px 12px 0 0;
            color: white;
          ">

            <h1 style="
              margin: 0;
              font-size: 24px;
            ">
              New Project Inquiry
            </h1>

            <p style="
              margin: 8px 0 0;
              color: #a7f3d0;
              font-size: 14px;
            ">
              A new inquiry has been submitted through your website.
            </p>

          </div>

          <!-- CONTENT -->
          <div style="
            background: #ffffff;
            padding: 30px;
            border-radius: 0 0 12px 12px;
          ">

            <!-- CLIENT INFORMATION -->

            <h2 style="
              color: #1C3636;
              margin-top: 0;
              margin-bottom: 20px;
            ">
              Client Information
            </h2>

            <table style="
              width: 100%;
              border-collapse: collapse;
              font-size: 14px;
            ">

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  width: 180px;
                  vertical-align: top;
                ">
                  Full Name
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(fullName)}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  vertical-align: top;
                ">
                  Email
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  vertical-align: top;
                ">
                  Company
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(finalCompany)}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  vertical-align: top;
                ">
                  Phone
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(phone || "Not provided")}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  vertical-align: top;
                ">
                  Website
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(website || "Not provided")}
                </td>
              </tr>

            </table>

            <hr style="
              border: none;
              border-top: 1px solid #e5e7eb;
              margin: 25px 0;
            " />

            <!-- PROJECT INFORMATION -->

            <h2 style="
              color: #1C3636;
              margin-bottom: 20px;
            ">
              Project Information
            </h2>

            <table style="
              width: 100%;
              border-collapse: collapse;
              font-size: 14px;
            ">

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  width: 180px;
                  vertical-align: top;
                ">
                  Service
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(service || "Not provided")}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  vertical-align: top;
                ">
                  Estimated Budget
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(budget || "Not provided")}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  vertical-align: top;
                ">
                  Project Timeline
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(timeline || "Not provided")}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 10px 0;
                  font-weight: bold;
                  vertical-align: top;
                ">
                  Primary Goal
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(goal || "Not provided")}
                </td>
              </tr>

            </table>

            <hr style="
              border: none;
              border-top: 1px solid #e5e7eb;
              margin: 25px 0;
            " />

            <!-- PROJECT DETAILS -->

            <h2 style="
              color: #1C3636;
              margin-bottom: 15px;
            ">
              Project Details
            </h2>

            <div style="
              background: #f1f5f9;
              padding: 20px;
              border-radius: 10px;
              line-height: 1.7;
              font-size: 14px;
              white-space: pre-wrap;
            ">
              ${escapeHtml(projectDetails || "Not provided")}
            </div>

            <!-- FOOTER -->

            <div style="
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #64748b;
              font-size: 12px;
            ">
              This inquiry was submitted through your website.
            </div>

          </div>

        </div>
      `,
    });

    // --------------------------------------------------
    // RESEND ERROR
    // --------------------------------------------------

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message || "Resend rejected the email.",
          details: error,
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // SUCCESS
    // --------------------------------------------------

    console.log("EMAIL SENT:", data);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Contact API failed.",
      },
      { status: 500 }
    );
  }
}


// --------------------------------------------------
// SECURITY: ESCAPE HTML
// --------------------------------------------------

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
