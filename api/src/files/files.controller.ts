import {
  Controller,
  Get,
  Post,
  UploadedFiles,

} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { FilesService } from './files.service';
import {ApiFiles} from "./api-file.decorator"

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  
  @Post('upload')
  @ApiFiles()
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        return files.forEach( async (file) => { this.filesService.createFile(file); });
  }
}
