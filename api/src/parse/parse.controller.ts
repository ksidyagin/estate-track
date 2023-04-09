import { Controller, Get, Post, Query } from '@nestjs/common';
import { ParseService } from './parse.service';
import { ApiTags } from '@nestjs/swagger';
import * as path from 'path'
import * as fs from 'fs';

@ApiTags('parse')
@Controller('parse')
export class ParseController {
    constructor(private readonly xml: ParseService) { }

    @Get('file')
    async parseFile(@Query('parse xml2json') nameFile: string) {
        // xml2json = '<?xml version="1.0" encoding="utf-8"?><note importance="high" logged="true"><title>Happy</title><todo>Work</todo><todo>Play</todo></note>';
        const filePath = path.resolve(__dirname, '..', 'static')
        let xml_string =fs.readFileSync(path.join(filePath, nameFile), "utf8");
        return this.xml.parseXml(xml_string);
    }

    @Get('string')
    async parseString(@Query('parse string') str: string) {
        try{
            return JSON.parse(str);
        }
        catch (e)
        {
            console.log(e);
        }
    }
}
