import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers(){
        return this.userService.findAll();
    }

    @Get(':userId')
    getOneUserId(@Param('userId') userId:string) {
        return this.userService.findOneId(userId);
    }

    @Post()
    create(@Body() payload: CreateUserDto) {
        return this.userService.create(payload);
    }

    @Put(':userId')
    update(@Param('userId') userId:string, @Body() payload:UpdateUserDto) {
        return this.userService.update(userId, payload);
    }

    @Delete(':userId')
    delete(@Param('userId') userId:string) {
        return this.userService.delete(userId);
    }
}
