export class Heart {
    constructor(
        public full: boolean,
        public urlHeartFull: string = '/assets/coracao_cheio.png', 
        public urlHeartEmpty: string = '/assets/coracao_vazio.png', 
    ){}

    public show(): string{
        return this.full ? this.urlHeartFull : this.urlHeartEmpty
    }
}