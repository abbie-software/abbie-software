interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export function EmailTemplate({ fullName, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h2>New message from Abbieverse</h2>
      <p><strong>Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
}