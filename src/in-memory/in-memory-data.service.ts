import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let players = [
            { id: 1, name: 'Lama' },
            { id: 2, name: 'Mendy' },
            { id: 3, name: 'Thiago Silva' },
            { id: 4, name: 'Yepes' },
            { id: 5, name: 'Maxwell' },
            { id: 6, name: 'Verrati' },
            { id: 7, name: 'Menez' },
            { id: 8, name: 'Matuidi' },
            { id: 9, name: 'Pastore' },
            { id: 10, name: 'Zlatan' },
            { id: 11, name: 'Nene' }
        ];
        
        return {players};
    }
}