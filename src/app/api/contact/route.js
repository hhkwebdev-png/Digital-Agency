import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // ============================================================
    // CHECK RESEND ENVIRONMENT VARIABLES
    // ============================================================

    const resendApiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured correctly.",
        },
        {
          status: 500,
        }
      );
    }

    if (!emailFrom) {
      console.error("EMAIL_FROM is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Sender email is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    if (!emailTo) {
      console.error("EMAIL_TO is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Recipient email is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // ============================================================
    // READ REQUEST BODY
    // ============================================================

    const body = await request.json();

    const {
      type,
      fullName,
      companyName,
      email,
      phone,
      countryCode,
      website,
      service,
      budget,
      timeline,
      projectDetails,
      connectionMethod,
      message,
      scheduledDate,
      scheduledTime,
    } = body || {};

    // ============================================================
    // BASIC VALIDATION
    // ============================================================

    if (!fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name and email address are required.",
        },
        {
          status: 400,
        }
      );
    }

    // ============================================================
    // PROJECT INQUIRY EMAIL
    // ============================================================

    if (type === "contact") {
      const emailSubject = `New Project Inquiry from ${fullName}`;

      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Project Inquiry</title>
          </head>

          <body style="margin:0;padding:0;background:#F9FAFA;font-family:Arial,Helvetica,sans-serif;color:#1C3636;">

            <div style="max-width:700px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #1C3636;">

              <div style="background:#1C3636;padding:32px 30px;">
                <h1 style="margin:0;color:#ffffff;font-size:26px;">
                  New Project Inquiry
                </h1>

                <p style="margin:10px 0 0;color:#ffffff;opacity:.75;font-size:14px;">
                  A new project inquiry has been submitted through your website.
                </p>
              </div>

              <div style="padding:30px;">

                <h2 style="margin:0 0 20px;color:#1C3636;font-size:20px;">
                  Contact Information
                </h2>

                <table style="width:100%;border-collapse:collapse;">

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;width:180px;">
                      Full Name
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(fullName)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Email
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(email)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Company
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(companyName || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Phone
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(phone || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Country Code
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(countryCode || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Website
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(website || "Not provided")}
                    </td>
                  </tr>

                </table>

                <div style="height:1px;background:#1C3636;margin:25px 0;"></div>

                <h2 style="margin:0 0 20px;color:#1C3636;font-size:20px;">
                  Project Information
                </h2>

                <table style="width:100%;border-collapse:collapse;">

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;width:180px;">
                      Service
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(service || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Budget
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(budget || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Timeline
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(timeline || "Not provided")}
                    </td>
                  </tr>

                </table>

                <div style="height:1px;background:#1C3636;margin:25px 0;"></div>

                <h2 style="margin:0 0 12px;color:#1C3636;font-size:20px;">
                  Project Details
                </h2>

                <div style="background:#F9FAFA;border-radius:12px;padding:18px;line-height:1.7;white-space:pre-wrap;">
                  ${escapeHtml(projectDetails || "No project details provided.")}
                </div>

              </div>

              <div style="background:#1C3636;padding:20px 30px;text-align:center;">
                <p style="margin:0;color:#ffffff;font-size:13px;opacity:.75;">
                  This inquiry was submitted through your website contact form.
                </p>
              </div>

            </div>

          </body>
        </html>
      `;

      const resendResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailFrom,
            to: [emailTo],
            reply_to: email,
            subject: emailSubject,
            html: emailHtml,
          }),
        }
      );

      const resendText = await resendResponse.text();

      let resendData = {};

      try {
        resendData = resendText
          ? JSON.parse(resendText)
          : {};
      } catch {
        console.error(
          "RESEND RETURNED NON-JSON:",
          resendText
        );

        return NextResponse.json(
          {
            success: false,
            error: "The email service returned an invalid response.",
          },
          {
            status: 502,
          }
        );
      }

      if (!resendResponse.ok) {
        console.error(
          "RESEND API ERROR:",
          resendData
        );

        return NextResponse.json(
          {
            success: false,
            error:
              resendData?.message ||
              resendData?.error ||
              "Unable to send the email.",
          },
          {
            status: resendResponse.status || 500,
          }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Project inquiry email sent successfully.",
          id: resendData?.id || null,
        },
        {
          status: 200,
        }
      );
    }

    // ============================================================
    // STRATEGY CALL EMAIL
    // ============================================================

    if (type === "schedule-call") {
      const emailSubject = `New Strategy Call Request from ${fullName}`;

      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Strategy Call Request</title>
          </head>

          <body style="margin:0;padding:0;background:#F9FAFA;font-family:Arial,Helvetica,sans-serif;color:#1C3636;">

            <div style="max-width:700px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #1C3636;">

              <div style="background:#1C3636;padding:32px 30px;">
                <h1 style="margin:0;color:#ffffff;font-size:26px;">
                  New Strategy Call Request
                </h1>

                <p style="margin:10px 0 0;color:#ffffff;opacity:.75;font-size:14px;">
                  A new strategy call has been requested through your website.
                </p>
              </div>

              <div style="padding:30px;">

                <h2 style="margin:0 0 20px;color:#1C3636;font-size:20px;">
                  Appointment Details
                </h2>

                <div style="background:#1CA186;padding:18px;border-radius:12px;margin-bottom:25px;">

                  <p style="margin:0;color:#ffffff;font-size:13px;font-weight:bold;text-transform:uppercase;">
                    Requested Date
                  </p>

                  <p style="margin:7px 0 15px;color:#ffffff;font-size:18px;font-weight:bold;">
                    ${escapeHtml(scheduledDate || "Not provided")}
                  </p>

                  <p style="margin:0;color:#ffffff;font-size:13px;font-weight:bold;text-transform:uppercase;">
                    Requested Time
                  </p>

                  <p style="margin:7px 0 0;color:#ffffff;font-size:18px;font-weight:bold;">
                    ${escapeHtml(scheduledTime || "Not provided")}
                  </p>

                </div>

                <h2 style="margin:0 0 20px;color:#1C3636;font-size:20px;">
                  Contact Information
                </h2>

                <table style="width:100%;border-collapse:collapse;">

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;width:190px;">
                      Full Name
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(fullName)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Email
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(email)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Company
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(companyName || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Phone
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(phone || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Country Code
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(countryCode || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Website
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(website || "Not provided")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">
                      Connection Method
                    </td>
                    <td style="padding:10px 0;">
                      ${escapeHtml(
                        connectionMethod ||
                          "Not provided"
                      )}
                    </td>
                  </tr>

                </table>

                <div style="height:1px;background:#1C3636;margin:25px 0;"></div>

                <h2 style="margin:0 0 12px;color:#1C3636;font-size:20px;">
                  Message
                </h2>

                <div style="background:#F9FAFA;border-radius:12px;padding:18px;line-height:1.7;white-space:pre-wrap;">
                  ${escapeHtml(
                    message || "No message provided."
                  )}
                </div>

              </div>

              <div style="background:#1C3636;padding:20px 30px;text-align:center;">
                <p style="margin:0;color:#ffffff;font-size:13px;opacity:.75;">
                  This strategy call request was submitted through your website.
                </p>
              </div>

            </div>

          </body>
        </html>
      `;

      const resendResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailFrom,
            to: [emailTo],
            reply_to: email,
            subject: emailSubject,
            html: emailHtml,
          }),
        }
      );

      const resendText = await resendResponse.text();

      let resendData = {};

      try {
        resendData = resendText
          ? JSON.parse(resendText)
          : {};
      } catch {
        console.error(
          "RESEND RETURNED NON-JSON:",
          resendText
        );

        return NextResponse.json(
          {
            success: false,
            error: "The email service returned an invalid response.",
          },
          {
            status: 502,
          }
        );
      }

      if (!resendResponse.ok) {
        console.error(
          "RESEND API ERROR:",
          resendData
        );

        return NextResponse.json(
          {
            success: false,
            error:
              resendData?.message ||
              resendData?.error ||
              "Unable to send the strategy call email.",
          },
          {
            status: resendResponse.status || 500,
          }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message:
            "Strategy call email sent successfully.",
          id: resendData?.id || null,
        },
        {
          status: 200,
        }
      );
    }

    // ============================================================
    // INVALID REQUEST TYPE
    // ============================================================

    return NextResponse.json(
      {
        success: false,
        error:
          "Invalid request type. Expected contact or schedule-call.",
      },
      {
        status: 400,
      }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "An unexpected server error occurred.",
      },
      {
        status: 500,
      }
    );
  }
}

// ================================================================
// HTML ESCAPE HELPER
// ================================================================

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}