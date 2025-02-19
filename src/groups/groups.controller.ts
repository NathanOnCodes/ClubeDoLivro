import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { AddUsersDto } from './dto/add-users.dto';
import { OwnerGuard } from './guards/owner.guard';


@Controller('api/friends/groups/')
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService
  ){}

  @Post()
  create(@Req() req, @Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(req.user.id, createGroupDto);
  }

  @Post(':groupId/users')
  @UseGuards(OwnerGuard)
  addUsers(
    @Param('groupId') groupId: number,
    @Body('userIds') addUsersDto: AddUsersDto
  ){
    return this.groupsService.addUsers(groupId, addUsersDto.userIds);
  }

  @Get(':groupId/assignments')
  @UseGuards(OwnerGuard)
  async getMyAssignments(@Param('groupId') groupId: string){
    return this.groupsService.getAllAssignments(groupId);
  }

  @Get(':groupId/my-assignment')
  async getMyAssignment(@Param('groupId') groupId: string, @Req() req){
    return this.groupsService.getMyAssignment(groupId, req.user.id);
  }
}
