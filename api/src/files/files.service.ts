import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';

@Injectable()
export class FilesService {

    async createFile(file: Express.Multer.File): Promise<string> {
        try {          
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')  
            const filePath = path.resolve(__dirname, '..', 'static')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, file.originalname), file.buffer, {encoding: "utf8"})
            return file.originalname;
        } catch (e) {
            console.log(e);
            throw new HttpException('[ERROR]', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
