import { Injectable } from '@nestjs/common';
import * as sql from "mssql";

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await sql.connect("Data Source=DESKTOP-KAQ762C\\SQLEXPRESS;Database=PHF;Persist Security Info=True;User ID=SA;Password=123456;TrustServerCertificate=True;");
    let x = await sql.query("select top 1 * from [user]");
    return 'Hello World!';
  }
}
