import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable} from 'typeorm';

import Endereco from '../models/Endereco';
import Local from  '../models/Local';

@Entity('tb_jogador')
class Jogador {

    @PrimaryGeneratedColumn()
    nickname: string;

    @Column('text')
    senha: string;

    @Column('int')
    pontos: number;

    //coluna opcional
    @Column('date', {nullable: true})
    data_ultimo_login: Date;
    
    //coluna opcional, caso nao seja informado data, vai recebere a data corrente.
    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    data_cadastro: Date;

    //associação (flecha)
    @ManyToOne(type => Endereco)
    @JoinColumn({name: "endereco_id", referencedColumnName: "id"})
    endereco: Endereco;   

   

}
export default Jogador;