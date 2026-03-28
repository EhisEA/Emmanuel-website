export function buildMasterclassEmailHtml(
  name: string,
  email: string,
  role: string,
  experience: string,
  goal: string,
  whyAdmit?: string
) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#0B0B0B;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0B0B;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding-bottom:32px;">
              <span style="font-size:20px;font-weight:bold;color:#E5E7EB;">EA</span><span style="font-size:20px;font-weight:bold;color:#6366F1;">.</span>
              <span style="float:right;font-size:12px;color:#9CA3AF;line-height:24px;">Masterclass Application</span>
            </td>
          </tr>
          <!-- Card -->
          <tr>
            <td style="background-color:#111111;border:1px solid #222222;border-radius:12px;padding:32px;">
              <!-- Applicant -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:4px;">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:600;">Applicant</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style="font-size:16px;font-weight:600;color:#E5E7EB;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:2px;">
                    <a href="mailto:${email}" style="font-size:14px;color:#6366F1;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>
              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #222222;margin:0 0 24px 0;" />
              <!-- Role -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding-bottom:4px;">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:600;">Role / Field</span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:15px;color:#E5E7EB;">${role}</td>
                </tr>
              </table>
              <!-- Experience -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding-bottom:4px;">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:600;">AI Experience</span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:15px;color:#E5E7EB;">${experience}</td>
                </tr>
              </table>
              <!-- Goal -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:${whyAdmit ? "20px" : "0"};">
                <tr>
                  <td style="padding-bottom:4px;">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:600;">What They Hope to Gain</span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:15px;line-height:1.6;color:#E5E7EB;">${goal.replace(/\n/g, "<br />")}</td>
                </tr>
              </table>${whyAdmit ? `
              <!-- Why Admit -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:4px;">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:600;">Why They Should Be Admitted</span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:15px;line-height:1.6;color:#E5E7EB;">${whyAdmit.replace(/\n/g, "<br />")}</td>
                </tr>
              </table>` : ""}
            </td>
          </tr>
          <!-- Reply button -->
          <tr>
            <td align="center" style="padding-top:24px;">
              <a href="mailto:${email}" style="display:inline-block;background-color:#6366F1;color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;padding:12px 32px;border-radius:8px;">
                Reply to ${name}
              </a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:32px;">
              <span style="font-size:12px;color:#9CA3AF;">AI Beyond the Chat Interface | Masterclass Application</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
