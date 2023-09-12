import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_local')
class Local {

 @PrimaryGeneratedColumn()
 id: number;

 @Column("varchar", { length: 200 })
 nome: string;

 @Column("varchar", { length: 100 })
 longitude: string;

 @Column("varchar", { length: 100 })
 latitude: string;

}
export default Local;