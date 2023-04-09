import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { DownloadController } from './download.controller';
import { DownloadService } from './download.service';

@Module({
  providers: [FilesService, DownloadService],
  exports: [FilesService],
  controllers: [FilesController, DownloadController]
})
export class FilesModule {}
