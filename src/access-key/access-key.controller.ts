// src/access-key/access-key.controller.ts

import { Controller, Post, Delete, Patch, Get, Param, Body } from '@nestjs/common';
import { AccessKeyService } from './access-key.service';
import { AccessKeyDto, UpdateAccessKeyDto } from './access-key.dto';

@Controller('access-key')
export class AccessKeyController {
  constructor(private readonly accessKeyService: AccessKeyService) {}

  @Post('generate')
  generateAccessKey(@Body() accessKeyDto: AccessKeyDto): AccessKeyDto {
    return this.accessKeyService.generateAccessKey(accessKeyDto);
  }

  @Delete(':key')
  deleteAccessKey(@Param('key') key: string): void {
    this.accessKeyService.deleteAccessKey(key);
  }

  @Patch(':key')
  updateAccessKey(
    @Param('key') key: string,
    @Body() updateAccessKeyDto: UpdateAccessKeyDto,
  ): AccessKeyDto {
    return this.accessKeyService.updateAccessKey(key, updateAccessKeyDto);
  }

  @Get(':key')
  getAccessKeyDetails(@Param('key') key: string): AccessKeyDto {
    return this.accessKeyService.getAccessKeyDetails(key);
  }
}
