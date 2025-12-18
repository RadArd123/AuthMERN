export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
    <div style="background: #161616; border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
      <div style="text-align: center; margin-bottom: 2rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" style="margin-bottom: 1rem;">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h1 style="color: #f5f5f5; font-size: 1.75rem; margin: 0.5rem 0;">Verify Your Email</h1>
      </div>

      <div style="color:rgb(255, 255, 255); line-height: 1.6;">
        <p style="color: #f5f5f5;">Welcome to [App Name]! Please use this verification code:</p>
        
        <div style="background: #1a1a1a; padding: 1.5rem; border-radius: 12px; margin: 2rem 0; text-align: center; border: 1px solid #2d2d2d;">
          <div style="font-size: 2rem; letter-spacing: 0.2em; color: #4CAF50; font-weight: 600;">{verificationCode}</div>
        </div>

        <p style="color: #999;">This code expires in 15 minutes. If you didn't request this, please ignore this email.</p>
        
        <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #2d2d2d;">
          <p style="margin: 0; font-size: 0.875em; color: #666;">© 2024 Your App Name<br>All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Updated</title>
</head>
<body style="font-family: 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
    <div style="background: #161616; border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
      <div style="text-align: center; margin-bottom: 2rem;">
        <h1 style="color: #f5f5f5; font-size: 1.75rem; margin: 0.5rem 0;">Password Changed</h1>
      </div>

      <div style="color: #d1d1d1; line-height: 1.6;">
        <p>Your password has been successfully updated.</p>
        
        <div style="background: #1a1a1a; padding: 1.5rem; border-radius: 12px; margin: 2rem 0; border: 1px solid #2d2d2d;">
          <h3 style="margin-top: 0; color: #4CAF50;">Security Tips:</h3>
          <ul style="padding-left: 1.25rem; margin: 0;">
            <li style="margin-bottom: 0.75rem;">Use a unique password</li>
            <li style="margin-bottom: 0.75rem;">Enable 2FA if available</li>
            <li>Review account activity regularly</li>
          </ul>
        </div>

        <p style="color: #999; font-size: 0.875em;">If you didn't make this change, contact our support team immediately.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Password</title>
</head>
<body style="font-family: 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
    <div style="background: #161616; border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
      <div style="text-align: center; margin-bottom: 2rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" style="margin-bottom: 1rem;">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
        <h1 style="color: #f5f5f5; font-size: 1.75rem; margin: 0.5rem 0;">Reset Your Password</h1>
      </div>

      <div style="color: #d1d1d1; line-height: 1.6;">
        <p style="color: #d1d1d1; text-align: center;">Click below to reset your password. This link expires in 1 hour.</p>
        
        <div style="text-align: center; margin: 2.5rem 0;">
          <a href="{resetURL}" style="background: #4CAF50; color: #fff; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 500; display: inline-block; transition: transform 0.2s ease;">
            Reset Password
          </a>
        </div>

        <p style="text-align: center; color: #999; margin-top: 2rem;">
          Best regards from Radu's Website
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`;
export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to [App Name]</title>
</head>
<body style="font-family: 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
    <div style="background: #161616; border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
      <div style="text-align: center; margin-bottom: 2rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" style="margin-bottom: 1rem;">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        <h1 style="color: #f5f5f5; font-size: 1.75rem; margin: 0.5rem 0;">Welcome to Radu's Email Sender!</h1>
        <p style="color: #999; margin: 0;">We're thrilled to have you on board</p>
      </div>

      <div style="color:rgb(255, 255, 255); line-height: 1.6;">
        <p style="color: #f5f5f5;">Hi <strong>{name}</strong>,</p>
        
        <p style="color: #f5f5f5;">Thank you for joining Radu's Website! You've taken the first step toward watching Animes.</p>
        
        <div style="background: #1a1a1a; padding: 1.5rem; border-radius: 12px; margin: 2rem 0; border: 1px solid #2d2d2d;">
          <h3 style="color: #4CAF50; margin-top: 0;">Get started quickly:</h3>
          <ol style="padding-left: 1.25rem; margin-bottom: 0;">
            <li style="margin-bottom: 0.5rem; color: #f5f5f5;">Complete your profile</li>
            <li style="margin-bottom: 0.5rem; color: #f5f5f5;">Explore the dashboard</li>
            <li>Try your first Anime</li>
          </ol>
        </div>

        <div style="text-align: center; margin: 2rem 0;">
          <a href="{appLink}" style="display: inline-block; background: #4CAF50; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600;">Go to Dashboard</a>
        </div>

        <p style="color: #f5f5f5;">If you have any questions, simply reply to this email or visit our <a href="{helpLink}" style="color: #4CAF50;">Help Center</a>.</p>
        
        <p style="color: #999;">Happy [using/applying/creating]!</p>
        <p style="color: #f5f5f5;">— The [App Name] Team</p>
        
        <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #2d2d2d;">
          <p style="margin: 0; font-size: 0.875em; color: #666;">© 2024 [App Name]<br>All rights reserved</p>
          <p style="margin: 0.5rem 0 0; font-size: 0.875em; color: #666;">
            <a href="{unsubscribeLink}" style="color: #666;">Unsubscribe</a> | 
            <a href="{preferencesLink}" style="color: #666;">Email Preferences</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;