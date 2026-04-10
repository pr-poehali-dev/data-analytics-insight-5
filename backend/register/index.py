"""
Принимает заявку на регистрацию (телефон + email) и отправляет уведомление на aroslaa@gmail.com
"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": cors_headers, "body": json.dumps({"error": "Method not allowed"})}

    body = json.loads(event.get("body") or "{}")
    phone = body.get("phone", "").strip()
    email = body.get("email", "").strip()

    if not phone or not email:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Телефон и email обязательны"}),
        }

    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.environ["SMTP_PORT"])
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    to_email = "aroslaa@gmail.com"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Новая заявка на регистрацию — Kazangram"
    msg["From"] = smtp_user
    msg["To"] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; background: #2f3136; color: #dcddde; padding: 24px; border-radius: 8px;">
      <h2 style="color: #5865f2; margin-top: 0;">Новая заявка на регистрацию</h2>
      <p style="margin: 8px 0;"><strong style="color: #fff;">Телефон:</strong> {phone}</p>
      <p style="margin: 8px 0;"><strong style="color: #fff;">Email:</strong> {email}</p>
      <hr style="border-color: #40444b; margin: 16px 0;" />
      <p style="color: #8e9297; font-size: 12px;">Kazangram — социальная сеть Казани</p>
    </div>
    """

    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"success": True, "message": "Заявка отправлена!"}),
    }
