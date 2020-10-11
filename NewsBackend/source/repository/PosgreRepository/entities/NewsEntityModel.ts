import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { INewsEntity } from "../../../core/models/INewsEntity";

@Entity({name:"camillion_news"})
export class NewsEntityModel extends BaseEntity implements INewsEntity {
    
    @PrimaryColumn('uuid')
    id!: string;
    
    @Column()
    title!: string;
    
    @Column()
    description!: string;
    
    @Column()
    text!: string;
    
    @Column()
    createdBy!: string;
    
    @Column()
    createdAt!: Date;
    
    @Column({ nullable: true })
    updatedBy!: string;
    
    @Column({ nullable: true })
    updatedAt!: Date;

}