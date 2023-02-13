import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class License {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    
}