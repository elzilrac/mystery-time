
// Puzzle 1
function attachPuzzle1 () {
    // Contains all the variables of puzzle1 so as not to sully the global scope
    let station_names = ["Acton Town", "Aldgate", "Aldgate East", "Alperton", "Amersham", "Angel", "Archway", "Arnos Grove", "Arsenal", "Baker Street", "Balham", "Bank", "Barbican", "Barking", "Barkingside", "Barons Court", "Bayswater", "Becontree", "Belsize Park", "Bermondsey", "Bethnal Green", "Blackfriars", "Blackhorse Road", "Bond Street", "Borough", "Boston Manor", "Bounds Green", "Bow Road", "Brent Cross", "Brixton", "Bromley-by-Bow", "Buckhurst Hill", "Burnt Oak", "Caledonian Road", "Camden Town", "Canada Water", "Canary Wharf", "Canning Town", "Cannon Street", "Canons Park", "Chalfont & Latimer", "Chalk Farm", "Chancery Lane", "Charing Cross", "Chesham", "Chigwell", "Chiswick Park", "Chorleywood", "Clapham Common", "Clapham North", "Clapham South", "Cockfosters", "Colindale", "Colliers Wood", "Covent Garden", "Croxley", "Dagenham East", "Dagenham Heathway", "Debden", "Dollis Hill", "Ealing Broadway", "Ealing Common", "Earl's Court", "East Acton", "East Finchley", "East Ham", "East Putney", "Eastcote", "Edgware", "Edgware Road", "Edgware Road", "Elephant & Castle", "Elm Park", "Embankment", "Epping", "Euston", "Euston Square", "Fairlop", "Farringdon", "Finchley Central", "Finchley Road", "Finsbury Park", "Fulham Broadway", "Gants Hill", "Gloucester Road", "Golders Green", "Goldhawk Road", "Goodge Street", "Grange Hill", "Great Portland Street", "Greenford", "Green Park", "Gunnersbury", "Hainault", "Hammersmith", "Hammersmith", "Hampstead", "Hanger Lane", "Harlesden", "Harrow & Wealdstone", "Harrow-on-the-Hill", "Hatton Cross", "Heathrow Terminals 2 & 3", "Heathrow Terminal 4", "Heathrow Terminal 5", "Hendon Central", "High Barnet", "Highbury & Islington", "Highgate", "High Street Kensington", "Hillingdon", "Holborn", "Holland Park", "Holloway Road", "Hornchurch", "Hounslow Central", "Hounslow East", "Hounslow West", "Hyde Park Corner", "Ickenham", "Kennington", "Kensal Green", "Kensington (Olympia)", "Kentish Town", "Kenton", "Kew Gardens", "Kilburn", "Kilburn Park", "Kingsbury", "King's Cross St Pancras", "Knightsbridge", "Ladbroke Grove", "Lambeth North", "Lancaster Gate", "Latimer Road", "Leicester Square", "Leyton", "Leytonstone", "Liverpool Street", "London Bridge", "Loughton", "Maida Vale", "Manor House", "Mansion House", "Marble Arch", "Marylebone", "Mile End", "Mill Hill East", "Monument", "Moorgate", "Moor Park", "Morden", "Mornington Crescent", "Neasden", "Newbury Park", "North Acton", "North Ealing", "North Greenwich", "North Harrow", "North Wembley", "Northfields", "Northolt", "Northwick Park", "Northwood", "Northwood Hills", "Notting Hill Gate", "Oakwood", "Old Street", "Osterley", "Oval", "Oxford Circus", "Paddington", "Paddington", "Park Royal", "Parsons Green", "Perivale", "Piccadilly Circus", "Pimlico", "Pinner", "Plaistow", "Preston Road", "Putney Bridge", "Queen's Park", "Queensbury", "Queensway", "Ravenscourt Park", "Rayners Lane", "Redbridge", "Regent's Park", "Richmond", "Rickmansworth", "Roding Valley", "Royal Oak", "Ruislip", "Ruislip Gardens", "Ruislip Manor", "Russell Square", "St. James's Park", "St. John's Wood", "St. Paul's", "Seven Sisters", "Shepherd's Bush", "Shepherd's Bush Market", "Sloane Square", "Snaresbrook", "South Ealing", "South Harrow", "South Kensington", "South Kenton", "South Ruislip", "South Wimbledon", "South Woodford", "Southfields", "Southgate", "Southwark", "Stamford Brook", "Stanmore", "Stepney Green", "Stockwell", "Stonebridge Park", "Stratford", "Sudbury Hill", "Sudbury Town", "Swiss Cottage", "Temple", "Theydon Bois", "Tooting Bec", "Tooting Broadway", "Tottenham Court Road", "Tottenham Hale", "Totteridge & Whetstone", "Tower Hill", "Tufnell Park", "Turnham Green", "Turnpike Lane", "Upminster", "Upminster Bridge", "Upney", "Upton Park", "Uxbridge", "Vauxhall", "Victoria", "Walthamstow Central", "Wanstead", "Warren Street", "Warwick Avenue", "Waterloo", "Watford", "Wembley Central", "Wembley Park", "West Acton", "West Brompton", "West Finchley", "West Ham", "West Hampstead", "West Harrow", "West Kensington", "West Ruislip", "Westbourne Park", "Westminster", "White City", "Whitechapel", "Willesden Green", "Willesden Junction", "Wimbledon", "Wimbledon Park", "Wood Green", "Wood Lane", "Woodford", "Woodside Park"];

    function checkSolution1 (event, ui) {
        let solution = "Charing Cross"
        let success_msg = "Yup, that's the one!"
        let fail_msg = "Sorry, not quite right. Stay on the train."

        let correct_html = "<img src='media/success.svg'><p class='solution-check'>"+success_msg+"</p>";
        let fail_html = "<img src='media/failure.svg'><p class='solution-check'>"+fail_msg+"</p>";
        let puzzle_id = 1;

        $( "div.solution-check" ).replaceWith( '<div class="solution-check"></div>' );
        if (ui.item.value == solution) {
            $('div.solution-check').append(correct_html);
            $('div.solution-check > p').addClass('success');
            setUserCompletePuzzle(puzzle_id);
            // TODO un-grey out 'next question'
        } else {
            $('div.solution-check').append(fail_html);
            $('div.solution-check > p').addClass('failure');
        }
    }

    $( "div.solution > input" ).autocomplete({
        source: station_names,
        select: checkSolution1,
    });
}


function attachPuzzle2(){
    let carosel_html = '<div class="carosel"> \
        <div><img src="/media/puzzle2/img1.png"></div> \
        <div><img src="/media/puzzle2/img2.png"></div> \
        <div><img src="/media/puzzle2/img3.png"></div> \
    </div>';

    $('div.puzzle-content').append(carosel_html);
    $(function() {
        $('.carosel').slick({
            // Configuration goes here
        });
    });
}

function attachPuzzle3() {
    function checkSolution3 () {
        let solution = 51181;
        let puzzle_id = 3;
        let success_msg = "Right on target!"
        let fail_msg_high = "Overshot the mark."
        let fail_msg_low = "Not quite."
        let value = this.value;
        
        if(isNaN(value)) {
            return;  // Not a number, so don't bother
        }

        let fail_msg = (value > solution ? fail_msg_high: fail_msg_low);
        let correct_html = "<img src='media/success.svg'><p class='solution-check'>"+success_msg+"</p>";
        let fail_html = "<img src='media/failure.svg'><p class='solution-check'>"+fail_msg+"</p>";

        $( "div.solution-check" ).replaceWith( '<div class="solution-check"></div>' );
        if (value == solution) {
            $('div.solution-check').append(correct_html);
            $('div.solution-check > p').addClass('success');
            setUserCompletePuzzle(puzzle_id);
            // TODO un-grey out 'next question'
        } else {
            $('div.solution-check').append(fail_html);
            $('div.solution-check > p').addClass('failure');
        }
    }

    $( "div.solution > input" ).change(checkSolution3);
}

// Light puzzle (temporarily assigned number '7')
function attachPuzzle7() {
    const INPUTS = 4;
    let lights_and_switches_html = '\
    <div class="lights"></div> \
    <div class="switches"></div> \
    ';
    function flip_switch(switch_idx) {
        element = $('#switch_'+ switch_idx);
        let current_state = JSON.parse(element.attr('data-value'));
        element.attr("src", "/media/light_puzzle7/switch_"+!current_state+".png");
        element.attr("data-value", !current_state);
    }
    function illuminate_light_index(index, illuminate) {
        let lit = (illuminate  ? '_lit' : '');
        $('#bulb_'+index).attr("src", "/media/light_puzzle7/lightbulb"+lit+".png");
    }

    function checkSolution7(current_switch_state) {
        if (current_switch_state.every(Boolean)) {
            let puzzle_id = 7;
            let success_msg = "You've reached proper <em>Illumination<em>.";
            let correct_html = "<img src='media/success.svg'><p class='solution-check'>"+success_msg+"</p>";
            if (!$('div.solution-check > p').length) {
                // No need to append a million of these
                $('div.solution-check').append(correct_html);
                $('div.solution-check > p').addClass('success');
                setUserCompletePuzzle(puzzle_id);
            }
        } else {
            // clear the success status message
            if ($('div.solution-check > p').length) {
                $( "div.solution-check" ).replaceWith( '<div class="solution-check"></div>' );
            }
        }
    }

    function resolve_logic_gates(current_switch_state){
        // Each light is a logic expression
        // there is only one combination of the switches that resolves successfully
        // win condition is 0 1 0 1
        let a = current_switch_state[0];
        let b = current_switch_state[1];
        let c = current_switch_state[2];
        let d = current_switch_state[3];

        return [
            Boolean((a^b)|(c^d)),
            Boolean(d&(!c)),
            Boolean((b|d)&(!a)),
            Boolean(d&b),
        ];
    }

    function blackbox(switch_idx) {
        // First flip the switch
        flip_switch(switch_idx);

        // Then get the state of the switches
        var current_switch_state = $('img.switch').map(function() {
            return JSON.parse(this.getAttribute('data-value'));
        }).get();
        // Then calculate the lights
        let calculated_state = resolve_logic_gates(current_switch_state);
        console.log(calculated_state)
        // Then update the lights
        for (let i = 0; i < calculated_state.length; i++) {
            illuminate_light_index(i, calculated_state[i]);
        }
        // Check for win conditions
        console.log(calculated_state);
        checkSolution7(calculated_state);
    }
    $('div.puzzle-content').append(lights_and_switches_html);
    let default_switch_val = false;
    for (let i = 0; i < INPUTS; i++) {
        $('div.lights').append('<img class="bulb" id="bulb_'+i+'" src="/media/light_puzzle7/lightbulb.png">');
        // Switch 0 is OFF, 1 is ON
        $('div.switches').append('<img \
            class="switch" \
            id="switch_'+i+'" \
            data-value="'+default_switch_val+'" \
            src="/media/light_puzzle7/switch_'+default_switch_val+'.png">'
        );
        $('#switch_'+i).click(function(){blackbox(i)});
    };
    
}

// Overlays
function popUpOverlay(title, subtitle, body, next=null, next_text='Continue Exploring') {

    function removeOverlay() {$('div.overlay-bg').remove()}
    let overlay = $('div.content').append('<div class="overlay-fg"></div>');

    let fg_div = document.createElement( "div" );
    fg_div.setAttribute('class', 'overlay-fg');
    $(fg_div).append('<div class="nav"></div>');
    $(fg_div).append('<h2>'+subtitle+'</h2>');
    $(fg_div).append('<h1>'+title+'</h1>');

}


// cookie helpers
const COOKIE_NAME = 'game_data';

function getCookie(key) {
    let game_data = JSON.parse(Cookies.get(COOKIE_NAME));
    return game_data[key];
}

function setCookie(key, value) {
    let game_data = JSON.parse(Cookies.get(COOKIE_NAME));
    game_data[key] = value;
    Cookies.set(COOKIE_NAME, JSON.stringify(game_data), { expires: 30 });
    return game_data[key];
}

function resetGameData() {
    Cookies.remove(COOKIE_NAME);
}

function setUserCompletePuzzle(puzzle_id) {
    setCookie(puzzle_id, true);
}

function checkUserCompletePuzzle(puzzle_id) {
    return getCookie(puzzle_id) === true;
}

function do_unlock(room_name){
    let elem = $('div.'+room_name);
    elem.empty(); // Remove the lock image
    elem.removeClass('locked');
    elem.addClass('unlocked');
    elem.wrap('<a href="/'+room_name+'0_0.html"></a>');
    elem.append('<p>'+room_name.toUpperCase()+'</p>')
}
function unlockMapSections(){
    // The first unlock is the study and the foyer
    // if (checkUserCompletePuzzle(2)) {
    if (true){
        do_unlock('foyer');
        do_unlock('study');
    }
    // Other cases TODO
}

function updateMap(){
    // The map unlocks sections
    // Highlights which room you are in
    // Renders/hides the tooltip
    // And shows clues
}


$( document ).ready(function() {
    // Attach map opening JS
    $( "#map" ).dialog({
        autoOpen: false,
        width: 280,
        position: { my: "right top", at: "right top", of: window },
        closeOnEscape: true,
        draggable: false,
        resizable: true,
        modal: false,

    });
    $('a[href*=map]').click(function() {
        $( "#map" ).dialog( "open" );
    });
    unlockMapSections();

    // Attach relevant segments to the puzzles!
    if($("#1").length){
        attachPuzzle1();
    }
    if($("#2").length){
        attachPuzzle2();
    }
    if($("#3").length){
        attachPuzzle3();
    }
    if($("#7").length){
        attachPuzzle7();
    }
});