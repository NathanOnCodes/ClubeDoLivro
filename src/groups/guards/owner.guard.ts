import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { GroupsService } from "../groups.service";


@Injectable()
export class OwnerGuard implements CanActivate {
    constructor(private groupService: GroupsService){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const groupId = request.params.groupId;
        const userId = request.user.id;


        const group = await this.groupService.getGroupById(groupId);
        if(group.owner.id !== userId) throw new ForbiddenException('Você não pode realizar essa ação');
        
        return true;
    }
}