/* eslint-disable @typescript-eslint/no-explicit-any */
import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import { NextApiRequest, NextApiResponse } from 'next';

// Interface untuk konfigurasi rate limiter
interface RateLimiterConfig {
  maxRequestsPerMinute: number;
  message?: { status: boolean; error: string };
}

export class RateLimiter {
  private limiter: RateLimitRequestHandler;

  constructor(config: RateLimiterConfig) {
    this.limiter = rateLimit({
      windowMs: 60 * 1000, // 1 menit
      max: config.maxRequestsPerMinute, // Maksimum request per menit
      message: config.message || { status: false, error: 'Too many requests, please try again later.' },
      keyGenerator: (req) => req.headers['x-forwarded-for'] || req.socket.remoteAddress || '',
    });
  }

  apply(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void) {
    return (req: NextApiRequest, res: NextApiResponse) => {
      this.limiter(req as any, res as any, () => handler(req, res));
    };
  }
}
