// src/access-key/access-key.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { AccessKeyDto, UpdateAccessKeyDto } from './access-key.dto';

@Injectable()
export class AccessKeyService {
  private accessKeys: AccessKeyDto[] = [];

  generateAccessKey(accessKeyDto: AccessKeyDto): AccessKeyDto {
    const newKey = { ...accessKeyDto };
    this.accessKeys.push(newKey);
    return newKey;
  }

  deleteAccessKey(key: string): void {
    const index = this.accessKeys.findIndex(k => k.key === key);
    if (index === -1) {
      throw new NotFoundException(`Access key "${key}" not found.`);
    }
    this.accessKeys.splice(index, 1);
  }

  updateAccessKey(key: string, updateAccessKeyDto: UpdateAccessKeyDto): AccessKeyDto {
    const keyToUpdate = this.accessKeys.find(k => k.key === key);
    if (!keyToUpdate) {
      throw new NotFoundException(`Access key "${key}" not found.`);
    }
    if (updateAccessKeyDto.rateLimit !== undefined) {
      keyToUpdate.rateLimit = updateAccessKeyDto.rateLimit;
    }
    if (updateAccessKeyDto.expiration !== undefined) {
      keyToUpdate.expiration = updateAccessKeyDto.expiration;
    }
    return keyToUpdate;
  }

  getAccessKeyDetails(key: string): AccessKeyDto {
    const accessKey = this.accessKeys.find(k => k.key === key);
    if (!accessKey) {
      throw new NotFoundException(`Access key "${key}" not found.`);
    }
    return accessKey;
  }
}
