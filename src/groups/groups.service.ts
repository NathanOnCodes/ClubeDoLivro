import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { In, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { RedisService } from 'src/shared/redis/redis.service';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly redisService: RedisService,
  ){}

  async create(userId: number, CreateGroupDto: CreateGroupDto): Promise<Group> {
    const owner = await this.userRepository.findOne({where: {id: userId}});
    const group = this.groupRepository.create({
      ...CreateGroupDto,
      owner,
      participants: [owner],
    });
    return this.groupRepository.save(group);
  }

  async addUsers(groupId: number, userIds: number[]): Promise<Group>{
    const group = await this.groupRepository.findOne({
      where: {id: groupId},
      relations: ['participants'],
    });
    const users = await this.userRepository.find({
      where: {id: In(userIds)},
    });
    group.participants.push(...users);
    return this.groupRepository.save(group);
  }
  async getGroupById(groupId: number): Promise<Group> {
    const group = await this.groupRepository.findOne({
      where: { id: groupId },
      relations: ['owner'],
    });

    if (!group) throw new NotFoundException('Grupo não encontrado');
    return group;
  }
  async getAllAssignments(groupId: string): Promise<Record<string, string>> {
    const assignments = await this.redisService.get(`group:${groupId}:assignments`);
    return JSON.parse(assignments);
  }

  async getMyAssignment(groupId: string, useerId: string): Promise<string>{
    const assignments = await this.getAllAssignments(groupId);
    return assignments[useerId];
  }
}
