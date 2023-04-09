import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

const convert = require('xml-js');

@Injectable()
export class ParseService {
    async parseXml(xml: string){
        try{
            return convert.xml2json(xml, {compact: false, spaces: 4});
        }
        catch(error){
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
