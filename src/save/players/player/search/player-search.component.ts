import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { Observable }               from 'rxjs/Observable';
import { Subject }                  from 'rxjs/Subject';

import { PlayerSearchService }      from './../service/player-search.service';
import { Player }                   from './../player';

@Component({
    selector: 'player-search',
    templateUrl: 'src/views/player-search.component.html',
    styleUrls:  ['src/css/player-search.component.css'],
    providers: [PlayerSearchService]
})

export class PlayerSearchComponent implements OnInit {
    players: Observable<Player[]>;
    
    //Subject is a producer of an observable event stream
    private searchTerms = new Subject<string>();
    
    constructor(
        private playerSearchService: PlayerSearchService,
        private router: Router
    ) {}
    
    // Push a search term into the observable stream.
    //Each call to search puts a new string into this subject's observable stream by calling next.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    
    // We're going to turn the stream of search terms into a stream of Hero arrays and assign the result to the heroes property.
    ngOnInit(): void {
        this.players = this
            .searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable(request object ) each time
            // return the http search observable
            ? this.playerSearchService.search(term)
            // or the observable of empty heroes if no search term
            : Observable.of<Player[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Player[]>([]);
            });
    }
    
    gotoDetail(player: Player): void {
        let link = ['/detail', player.id];
        this.router.navigate(link);
    }
    
}