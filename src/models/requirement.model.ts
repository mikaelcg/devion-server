import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Flow} from './flow.model';
import {Project} from './project.model';

@model({
  settings: {
    strict: false,
    foreignKeys: {
      projectId: {
        name: 'fk_requirement_projectId',
        entity: 'Project',
        entityKey: 'id',
        foreignKey: 'projectId',
      },
      flowId: {
        name: 'fk_requirement_flowId',
        entity: 'Flow',
        entityKey: 'id',
        foreignKey: 'flowId',
      },
    },
  },
})
export class Requirement extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Project)
  projectId?: number;

  @belongsTo(() => Flow)
  flowId?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  constructor(data?: Partial<Requirement>) {
    super(data);
  }
}

export interface RequirementRelations {
  // describe navigational properties here
}

export type RequirementWithRelations = Requirement & RequirementRelations;
