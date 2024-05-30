// src/access-key/access-key.dto.ts

export class AccessKeyDto {
    readonly key: string;
    rateLimit: number; // requests per minute
    expiration: Date;
  }
  
  export class UpdateAccessKeyDto {
    readonly rateLimit?: number; // requests per minute
    readonly expiration?: Date;
  }
  