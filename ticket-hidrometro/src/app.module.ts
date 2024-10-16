import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { ClientesModule } from './clientes/clientes.module';
import { GerentesModule } from './gerentes/gerentes.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ClientesModule, GerentesModule, FuncionariosModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
