import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://telegram-weather-bot-roan.vercel.app',
      'telegram-weather-dj0onqezh-johntharians-projects.vercel.app',
      'https://telegram-weather-bot-johntharians-projects.vercel.app',
<<<<<<< HEAD
      'https://telegram-frontend.vercel.app',
      'https://bot-client-rho.vercel.app',
=======
>>>>>>> 0610aab56ed0f9e707fba03583bf278917167a30
    ],
  });

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
