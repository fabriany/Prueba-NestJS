import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
    private users: User[] = [{
        id: '01',
        name: 'fabriany',
        lastName: 'orrego',
        document: '1032443423',
        documentType: 'CC',
        birthDate: new Date,
    }];

    findAll() {
        return this.users;
    }

    findOneId(id: string) {
        const user = this.users.find((item) => item.id === id);
        if(!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        return user;

    }

    create(payload: CreateUserDto) {
        const newUser = {
            id: '12',
            ...payload,
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: string, payload: UpdateUserDto) {
        const product = this.findOneId(id);
        if(product) {
            const index = this.users.findIndex((item) => item.id === id);
            this.users[index] = {
                ...payload,
                ...product
            };
        }
        return product;
    }

    delete(id: string){
        const index = this.users.findIndex((item) => item.id === id);
        if(index === -1) {
            throw new NotFoundException('Usuario no encontrado');
        }
        this.users.splice(index, 1);
    }
}
