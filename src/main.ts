import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './swagger';
import { validator } from './validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  validator(app);
  swagger(app); 
  await app.listen(3000);
}
bootstrap();