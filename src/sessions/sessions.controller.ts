import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('sessions')
@UseGuards(AuthGuard('jwt'))
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) { }

  @Post()
  createSession(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.createSession(createSessionDto);
  }

  @Get()
  getAllSessions() {
    return this.sessionsService.getAllSessions();
  }

  @Get(':id')
  getSessionById(@Param('id') id: number) {
    return this.sessionsService.getSessionById(id);
  }

  @Get(':id/seats')
  getAllSeatsDispobibleBySessionId(@Param('id') id: number) {
    return this.sessionsService.getAllSeatsDispobibleBySessionId(id);
  }

  @Patch(':id')
  updateSession(@Param('id') id: number, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionsService.updateSession(id, updateSessionDto);
  }

  @Delete(':id')
  removeSession(@Param('id') id: number) {
    return this.sessionsService.removeSession(id);
  }
}
