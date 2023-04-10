import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/user/model/user.entity';
import { UserI } from 'src/user/model/user.interface';
import { Repository } from 'typeorm';
import { map, mapTo, switchMap } from 'rxjs/operators';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { AuthService } from 'src/auth/service/auth.service';
const bcrypt = require('bcryptjs');

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private authService: AuthService
  ) { }

  create(newUser: UserI): Observable<UserI> {
    return this.mailExists(newUser.email).pipe(
      switchMap((exists: boolean) => {
        console.log(exists);
        if (!exists) {
          return this.hashPassword(newUser.password).pipe(
            switchMap((passwordHash: string) => {
              // overwrite the user password with the hash, to store the hash in the database
              newUser.password = passwordHash;
              newUser.role = 'user';
              newUser.group = 'group';
              return from(this.userRepository.save(newUser)).pipe(
                switchMap((user: UserI) => this.findOne(user.id))
              );
            })
          )
        } else {
          throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
        }
      })
    )
  }

  // Refactor to use JWT in next Video
  login(user: UserI): Observable<string> {
    return this.findByEmail(user.email).pipe(
      switchMap((foundUser: UserI) => {
        if (foundUser) {
          return this.validatePassword(user.password, foundUser.password).pipe(
            switchMap((matches: boolean) => {
              if (matches) {
                return this.findOne(foundUser.id).pipe(
                  switchMap((payload: UserI) => this.authService.generateJwt(payload)))
              } else {
                throw new HttpException('Login was not successfull, wrong credentials', HttpStatus.UNAUTHORIZED);
              }
            })
          )
        } else {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
      })
    )
  }

  findAll(options: IPaginationOptions): Observable<Pagination<UserI>> {
    return from(paginate<UserEntity>(this.userRepository, options));
  }

  private validatePassword(password: string, storedPasswordHash: string): Observable<any> {
    return this.authService.comparePasswords(password, storedPasswordHash);
  }

  // also returns the password
  private findByEmail(email: string): Observable<UserI> {
    return from(this.userRepository.findOne({where: {email}, select: ['id', 'email', 'username', 'password']}));
  }

  private hashPassword(password: string): Observable<string> {
    return this.authService.hashPassword(password);
  }

  private findOne(id: number): Observable<UserI> {
    return from(this.userRepository.findOne({where: {id}}));
  }

  private mailExists(email: string): Observable<boolean> {
    return from(this.userRepository.findOne({where: {email}})).pipe(
      map((user: UserI) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      })
    )
  }

}
