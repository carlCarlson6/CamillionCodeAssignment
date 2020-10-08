import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { INewsEntity } from "../../../core/models/INewsEntity";

@Entity({name:"camillion_news"})
export class NewsEntityModel extends BaseEntity implements INewsEntity {
    
    @PrimaryColumn('uuid')
    id!: String;
    
    @Column()
    title!: String;
    
    @Column()
    description!: String;
    
    @Column()
    text!: String;
    
    @Column()
    createdBy!: String;
    
    @Column()
    createdAt!: Date;
    
    @Column({ nullable: true })
    updatedBy!: String;
    
    @Column({ nullable: true })
    updatedAt!: Date;

}