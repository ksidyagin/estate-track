import {
  Controller,
  Get,
  Query,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DownloadService } from './download.service';
import { Response } from 'express';


@ApiTags('download')
@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}


  @Get()
  streamable(@Query('file') nameFile: string, @Res({ passthrough: true }) response: Response) {
    const file = this.downloadService.fileStream(nameFile);
    return new StreamableFile(file);
  }
}