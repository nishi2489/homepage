import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 管理者宛のメール
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: '【昭栄エンジニアサービス】お問い合わせがありました',
      text: `
お問い合わせがありました。

■お名前
${name}

■メールアドレス
${email}

■電話番号
${phone}

■お問い合わせ内容
${message}
      `,
    });

    // 送信者宛の自動返信メール
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: '【昭栄エンジニアサービス】お問い合わせありがとうございます',
      text: `
${name} 様

お問い合わせありがとうございます。
以下の内容で承りました。
担当者より順次ご連絡させていただきます。

■お問い合わせ内容
${message}

※このメールは自動送信されています。
※お問い合わせの内容によっては、ご回答までにお時間をいただく場合がございます。
※営業時間（平日9:00〜17:00）内での対応となりますので、ご了承ください。

--
株式会社昭栄エンジニアサービス
〒124-0001
東京都葛飾区鎌倉3-59-2
TEL: 0120-356-362
Email: info@shoei-engineer.co.jp
      `,
    });

    return NextResponse.json({ message: 'メールを送信しました' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
} 