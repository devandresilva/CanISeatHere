import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { SessionReposiroty } from './sessions.repository';

@Module({
  imports: [
      TypeOrmModule.forFeature([SessionReposiroty])
  ],
  controllers: [SessionsController],
  providers: [SessionsService]
})
export class SessionsModule {}
