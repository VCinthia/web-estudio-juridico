import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleAuth, OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private oauth2Client: OAuth2Client;

  constructor(private http: HttpClient) {
    const auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/gmail.send']
    });
    this.oauth2Client = new auth.OAuth2(
      'YOUR_CLIENT_ID',
      'YOUR_CLIENT_SECRET',
      'YOUR_REDIRECT_URL'
    );
  }

  async sendEmail(to: string, subject: string, message: string) {
    try {
      await this.oauth2Client.getRequestHeaders()
      const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
      const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
      const messageParts = [
        `To: ${to}`,
        `Subject: ${utf8Subject}`,
        '',
        `${message}`
      ];
      const messageText = messageParts.join('\n');
      const encodedMessage = Buffer.from(messageText).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
      const res = await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: encodedMessage
        }
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }
}
