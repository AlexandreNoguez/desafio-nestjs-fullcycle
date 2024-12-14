import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  console.log(port);

  await app.listen(port, () => {
    const now = new Date().toLocaleString('pt-BR');
    console.log(
      `🚀 Servidor rodando na porta ${port} | Hora de inicialização: ${now}`,
    );
  });
}
bootstrap();
