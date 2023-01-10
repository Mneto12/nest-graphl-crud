import { registerEnumType } from "@nestjs/graphql";

export enum Status {
    active,
    inactive,
}

registerEnumType(Status, {
    name: 'Status',
    description: 'Status of a project',
    valuesMap: {
        active: {
            description: 'Default',
        },
        inactive: {
            description: 'When a project off'
        }
    }
})