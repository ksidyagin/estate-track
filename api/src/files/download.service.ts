import { Injectable } from '@nestjs/common';
import { createReadStream, readFileSync } from 'fs';
import * as path from 'path'

/**
 * This service would probably download files from a file storage
 * like S3, minio etc.
 */
@Injectable()
export class DownloadService {
  constructor() {
    // create connection to your file storage
  }

  fileStream(nameFile) {
    const filePath = path.resolve(__dirname, '..', 'static')
    return createReadStream(path.join(filePath, `${nameFile}`));
  }
}
