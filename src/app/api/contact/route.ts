// app/api/contact/route.ts (例: Next.js App Router構成)

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    console.log('お問い合わせデータ受信:', {
      name,
      email,
      phone,
      message
    });

    // ----------------------------------
    // シミュレーションモードを false に
    // => 本番送信を行う
    // ----------------------------------
    const simulationMode = false;

    if (!simulationMode) {
      try {
        // メール送信の設定
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true,
          auth: {
            user: process.env.SMTP_USER || "nishihara-k@shoeinet.com",
            pass: process.env.SMTP_PASS || "",
          },
        });

        console.log('トランスポート設定完了');

        // 管理者宛のメール
        const result = await transporter.sendMail({
          from: "nishihara-k@shoeinet.com",   // 送信元
          to: "nishihara-k@shoeinet.com",     // 送信先（現状では同じ宛先に送る想定）
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

        console.log('メール送信結果:', result);
        console.log('メール送信成功');
        return NextResponse.json({ message: 'メールを送信しました' });
      } catch (emailError) {
        console.error('メール送信処理エラー:', emailError);
        throw emailError;
      }
    } else {
      // シミュレーションモード
      console.log('テストモード: メール送信をシミュレーションします');
      console.log('送信内容:', {
        to: 'nishihara-k@shoeinet.com',
        subject: '【昭栄エンジニアサービス】お問い合わせがありました',
        text: `お名前: ${name}, メールアドレス: ${email}, 電話番号: ${phone}, お問い合わせ内容: ${message}`
      });
      
      // 1秒待機してからレスポンスを返す（非同期処理をシミュレート）
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return NextResponse.json({ 
        message: 'メール送信が完了しました（シミュレーションモード）',
        simulated: true,
        success: true
      });
    }
  } catch (error) {
    console.error('メール送信エラー詳細:', error);
    if (error instanceof Error) {
      console.error('エラーメッセージ:', error.message);
      console.error('エラースタック:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'メールの送信に失敗しました', 
        message: error instanceof Error ? error.message : String(error),
        success: false
      },
      { status: 500 }
    );
  }
}
