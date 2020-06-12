
// Puzzle 1 - SOLVABLE
function attachPuzzle1 () {
    // Contains all the variables of puzzle1 so as not to sully the global scope
    let station_names = ["Acton Town", "Aldgate", "Aldgate East", "Alperton", "Amersham", "Angel", "Archway", "Arnos Grove", "Arsenal", "Baker Street", "Balham", "Bank", "Barbican", "Barking", "Barkingside", "Barons Court", "Bayswater", "Becontree", "Belsize Park", "Bermondsey", "Bethnal Green", "Blackfriars", "Blackhorse Road", "Bond Street", "Borough", "Boston Manor", "Bounds Green", "Bow Road", "Brent Cross", "Brixton", "Bromley-by-Bow", "Buckhurst Hill", "Burnt Oak", "Caledonian Road", "Camden Town", "Canada Water", "Canary Wharf", "Canning Town", "Cannon Street", "Canons Park", "Chalfont & Latimer", "Chalk Farm", "Chancery Lane", "Charing Cross", "Chesham", "Chigwell", "Chiswick Park", "Chorleywood", "Clapham Common", "Clapham North", "Clapham South", "Cockfosters", "Colindale", "Colliers Wood", "Covent Garden", "Croxley", "Dagenham East", "Dagenham Heathway", "Debden", "Dollis Hill", "Ealing Broadway", "Ealing Common", "Earl's Court", "East Acton", "East Finchley", "East Ham", "East Putney", "Eastcote", "Edgware", "Edgware Road", "Edgware Road", "Elephant & Castle", "Elm Park", "Embankment", "Epping", "Euston", "Euston Square", "Fairlop", "Farringdon", "Finchley Central", "Finchley Road", "Finsbury Park", "Fulham Broadway", "Gants Hill", "Gloucester Road", "Golders Green", "Goldhawk Road", "Goodge Street", "Grange Hill", "Great Portland Street", "Greenford", "Green Park", "Gunnersbury", "Hainault", "Hammersmith", "Hammersmith", "Hampstead", "Hanger Lane", "Harlesden", "Harrow & Wealdstone", "Harrow-on-the-Hill", "Hatton Cross", "Heathrow Terminals 2 & 3", "Heathrow Terminal 4", "Heathrow Terminal 5", "Hendon Central", "High Barnet", "Highbury & Islington", "Highgate", "High Street Kensington", "Hillingdon", "Holborn", "Holland Park", "Holloway Road", "Hornchurch", "Hounslow Central", "Hounslow East", "Hounslow West", "Hyde Park Corner", "Ickenham", "Kennington", "Kensal Green", "Kensington (Olympia)", "Kentish Town", "Kenton", "Kew Gardens", "Kilburn", "Kilburn Park", "Kingsbury", "King's Cross St Pancras", "Knightsbridge", "Ladbroke Grove", "Lambeth North", "Lancaster Gate", "Latimer Road", "Leicester Square", "Leyton", "Leytonstone", "Liverpool Street", "London Bridge", "Loughton", "Maida Vale", "Manor House", "Mansion House", "Marble Arch", "Marylebone", "Mile End", "Mill Hill East", "Monument", "Moorgate", "Moor Park", "Morden", "Mornington Crescent", "Neasden", "Newbury Park", "North Acton", "North Ealing", "North Greenwich", "North Harrow", "North Wembley", "Northfields", "Northolt", "Northwick Park", "Northwood", "Northwood Hills", "Notting Hill Gate", "Oakwood", "Old Street", "Osterley", "Oval", "Oxford Circus", "Paddington", "Paddington", "Park Royal", "Parsons Green", "Perivale", "Piccadilly Circus", "Pimlico", "Pinner", "Plaistow", "Preston Road", "Putney Bridge", "Queen's Park", "Queensbury", "Queensway", "Ravenscourt Park", "Rayners Lane", "Redbridge", "Regent's Park", "Richmond", "Rickmansworth", "Roding Valley", "Royal Oak", "Ruislip", "Ruislip Gardens", "Ruislip Manor", "Russell Square", "St. James's Park", "St. John's Wood", "St. Paul's", "Seven Sisters", "Shepherd's Bush", "Shepherd's Bush Market", "Sloane Square", "Snaresbrook", "South Ealing", "South Harrow", "South Kensington", "South Kenton", "South Ruislip", "South Wimbledon", "South Woodford", "Southfields", "Southgate", "Southwark", "Stamford Brook", "Stanmore", "Stepney Green", "Stockwell", "Stonebridge Park", "Stratford", "Sudbury Hill", "Sudbury Town", "Swiss Cottage", "Temple", "Theydon Bois", "Tooting Bec", "Tooting Broadway", "Tottenham Court Road", "Tottenham Hale", "Totteridge & Whetstone", "Tower Hill", "Tufnell Park", "Turnham Green", "Turnpike Lane", "Upminster", "Upminster Bridge", "Upney", "Upton Park", "Uxbridge", "Vauxhall", "Victoria", "Walthamstow Central", "Wanstead", "Warren Street", "Warwick Avenue", "Waterloo", "Watford", "Wembley Central", "Wembley Park", "West Acton", "West Brompton", "West Finchley", "West Ham", "West Hampstead", "West Harrow", "West Kensington", "West Ruislip", "Westbourne Park", "Westminster", "White City", "Whitechapel", "Willesden Green", "Willesden Junction", "Wimbledon", "Wimbledon Park", "Wood Green", "Wood Lane", "Woodford", "Woodside Park"];

    function checkSolution (event, ui) {
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
            toggleButtonLock($('.button'));
        } else {
            $('div.solution-check').append(fail_html);
            $('div.solution-check > p').addClass('failure');
        }
    }

    $( "div.solution > input" ).autocomplete({
        source: station_names,
        select: checkSolution,
    });
}

// Puzzle 2 - SOLVABLE, clues BROKEN
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

    function checkSolution () {
        let solution = 'cross the park';
        let puzzle_id = 2;
        let success_msg = "You've got it!"
        let fail_msg = "Hmm... that's not quite right."
        let value = this.value.toLowerCase();

        let correct_html = "<img src='media/success.svg'><p class='solution-check'>"+success_msg+"</p>";
        let fail_html = "<img src='media/failure.svg'><p class='solution-check'>"+fail_msg+"</p>";

        $( "div.solution-check" ).replaceWith( '<div class="solution-check"></div>' );
        if (value == solution) {
            $('div.solution-check').append(correct_html);
            $('div.solution-check > p').addClass('success');
            setUserCompletePuzzle(puzzle_id);
            toggleButtonLock($('.button'));
        } else {
            $('div.solution-check').append(fail_html);
            $('div.solution-check > p').addClass('failure');
        }
    }

    $( "div.solution > input" ).change(checkSolution);
}

// Puzzle 3 - SOLVABLE
function attachPuzzle3() {
    function checkSolution () {
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
            toggleButtonLock($('.button'));
        } else {
            $('div.solution-check').append(fail_html);
            $('div.solution-check > p').addClass('failure');
        }
    }

    $( "div.solution > input" ).change(checkSolution);
}

// Puzzle 4 - SOLVABLE
function attachPuzzle4(){
    const COLORS = { // The tea colors and the solution!
        'black': '100',
        'green': '080',
        'white': '085',
    };

    function checkSolution(){
        let NEEDED_MATCHES = 3;  // Number of entries in colors
        let puzzle_id = 4;
        let correct_html = "<img src='media/success.svg'>"
        let fail_html = "<img src='media/failure.svg'>";
        var total_matches = 0;
        $( "input.tea-puzzle" ).each(function( index ) {
            if(this.value) {
                let c = $(this).attr('data-attribute');
                $( 'div.solution-check[data-attribute="'+c+'"]' ).replaceWith( '<div class="solution-check" data-attribute="'+c+'"></div>' );
                if (this.value == COLORS[c]) {
                    total_matches += 1; // this references total_matches defined ABOVE
                    $('div.solution-check[data-attribute="'+c+'"]').append(correct_html);
                } else {
                    $('div.solution-check[data-attribute="'+c+'"]').append(fail_html);
                }
            }
        });

        if (total_matches == NEEDED_MATCHES) {
            setUserCompletePuzzle(puzzle_id);
            toggleButtonLock($('.button'));
        };
    }

    for (var color in COLORS) {
        if(COLORS.hasOwnProperty(color)){
            $('div.puzzle-content').append('<div><img \
                class="bulb" \
                src="/media/puzzle4/'+color+'_light.png"> \
                <input name="'+color+'" class="tea-puzzle" data-attribute="'+color+'" type="text" placeholder="000"></input> \
                <label for="'+color+'">C</label> \
                <div class="solution-check" data-attribute="'+color+'"></div> \
                </div>'
            );
        }
    $('input').change(checkSolution);
    };

}

// Puzzle 5 - SOLVABLE
function attachPuzzle5() {
    function checkSolution () {
        let solution = 'bee soho';
        let puzzle_id = 5;
        let success_msg = "You're in!"
        let fail_msg = "Hmm don't think that's it."

        let correct_html = "<img src='media/success.svg'><p class='solution-check'>"+success_msg+"</p>";
        let fail_html = "<img src='media/failure.svg'><p class='solution-check'>"+fail_msg+"</p>";

        $( "div.solution-check" ).replaceWith( '<div class="solution-check"></div>' );
        if (this.value == solution) {
            $('div.solution-check').append(correct_html);
            $('div.solution-check > p').addClass('success');
            setUserCompletePuzzle(puzzle_id);
            toggleButtonLock($('.button'));
        } else {
            $('div.solution-check').append(fail_html);
            $('div.solution-check > p').addClass('failure');
        }
    }

    $( "div.solution > input" ).change(checkSolution);
}

// Light puzzle 7 - SOLVABLE
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

    function checkSolution(current_switch_state) {
        if (current_switch_state.every(Boolean)) {
            let puzzle_id = 7;
            let success_msg = "You've reached proper <strong>Illumination</strong>.";
            let correct_html = "<img src='media/success.svg'><p class='solution-check'>"+success_msg+"</p>";
            if (!$('div.solution-check > p').length) {
                // No need to append a million of these
                $('div.solution-check').append(correct_html);
                $('div.solution-check > p').addClass('success');
                setUserCompletePuzzle(puzzle_id);
                toggleButtonLock($('.button'));
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
        // Then update the lights
        for (let i = 0; i < calculated_state.length; i++) {
            illuminate_light_index(i, calculated_state[i]);
        }
        // Check for win conditions
        checkSolution(calculated_state);
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


// Attach the "click map" to a nav room image
function clickMap(room_name){
    var img = new Image();
    var canvas = document.createElement('canvas');
    img.onload = function() {
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
    };
    img.src = '/media/'+room_name+'_click_map.png';

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    $('img').on("click", function(e) {
        var offset = $(this).offset();
        var X = (e.pageX - offset.left);
        var Y = (e.pageY - offset.top);

        var pixelData = canvas.getContext('2d').getImageData(X, Y, 1, 1).data;
        var hex = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
        pickDiscovery(room_name, hex);
    })

}

function pickDiscovery(room_name, hex) {
    if ((typeof(discoveries[room_name]) == "undefined") || (typeof(discoveries[room_name][hex]) == "undefined") ) {
        return;
    }

    for (let i = 0; i < discoveries[room_name][hex].length; i++) {
        let discovery = discoveries[room_name][hex][i];
        if (typeof(discovery['condition']) != 'undefined') {
            // then check if it's allowed (returns False if we need to skip)
            if (!discovery['condition']()) {
                continue;
            }
        }
        // Execute the side effects of the discovery, if any
        if (typeof(discovery['side_effect']) != 'undefined') {
            discovery['side_effect']();
        }
        // Keep track of discoveries discovered
        if (discovery['red_herring'] != true) {
            setUserUnlock(room_name + '_' + hex);
            updateMap();
        }
        // Open the dialog
        $( "#"+hex+'_'+i ).dialog( "open" );
        return;
    }
}

var toggleButtonLock = (function () {
    // This function is only intended to turn off ONCE
    // and when you've turned the link back ON, it STAYS ON.
    var button_link = '';
    return function (button_element) {
        let a_href = button_element.parent('a');
        if (!button_link) {
            button_link = a_href.attr('href');
            a_href.removeAttr('href');
            button_element.addClass('locked');
        } else {
            a_href.attr('href', button_link);
            button_element.removeClass('locked');
        }
    }
})();


function populateDiscoveries(room_name){
    let hints = $('body').append("<div class='hints'</div'>");
    let room_discoveries = discoveries[room_name];

    for(var hex in room_discoveries){

        if(room_discoveries.hasOwnProperty(hex)){
            for (var i = 0; i < room_discoveries[hex].length; i++) {
                let discovery = room_discoveries[hex][i];
                let discovery_id = hex + '_' + i;
                hints.append('<div id="'+discovery_id+'" title="DISCOVERY"></div>');
                $('#'+discovery_id).append('<div class="discovery"></div>');
                let outer_html = $('#'+discovery_id+' > .discovery');

                outer_html.append('<h1>'+discovery['title']+'</h1>');
                outer_html.append('<div>'+discovery['text']+'</div>');
                
                outer_html.append('<div class="row next"><div class="button"><p>'+discovery['next_text']+'</p></div></div>');

                let button = $(outer_html.children('div.next').children('div.button')[0]);
                if (discovery['next']){
                    button.wrap('<a href="/'+discovery['next']+'"></a>');
                }

                $( "#"+discovery_id ).dialog({
                    autoOpen: false,
                    modal: true,
                });
                button.click(function(){ $( "#"+discovery_id ).dialog( "close" );})
            }
        }

    }

}


const discoveries = {
    'foyer': {
        'a8ff00': [{
            'name': 'foyer 1.0 interact book',
            'title': 'A mysterious book',
            'text': '<p>A suspicious-looking guestbook is on the console table.</p><p>You seem to think that shaking it is a good idea, and it seems to work in your favor: a barely-legible <strong>tarot card</strong> gently drifts to the ground.</p>',
            'next_text': 'Continue Exploring',
        }],
        '00eeff': [
            {
                'name': '2.1 interact drawer (key)',
                'title': "An unlocked drawer",
                'text': '<p>Looks like it worked! Inside, you find another key labelled "Library". It is definitely a good idea to explore locked areas, because they always hide something...</p>',
                'condition': function() {return checkUserUnlock('foyer_drawer')},
                // trigger library unlock function
                'side_effect': function() {setUserUnlock('library')},
                'next_text': 'Go to the library',
                'next': 'library0_0.html',
            },
            {
                'name': '2.0 interact drawer (no key)',
                'title': "A locked drawer",
                'text': "<p>Since you're a detective, it's in your nature to snoop. You try to open the drawer, but it's locked.</p><p>There must be a <strong>key</strong> here somewhere.</p>",
                'next_text': 'Continue Exploring',
                'red_herring': true,
            },
        ],
        'ff0000': [{
            'name': '3.0 interact plant',
            'title': 'A peaceful plant',
            'text': "<p>You notice something that looks not quite like soil or the <strong>peace lilies</strong> that are growing in the pot &#x2014; in fact, it's glinting.</p><p>You pick up a tiny box with a combination lock. Weirdly, there are instructions on it.</p>",
            'next_text': "It's puzzle time!",
            'next': 'puzzle3_0.html',
        }],
        'ff8a00': [{
            'name': '4.0 interact painting',
            'title': '<em>Morning Sun</em>',
            'text': '<p>Painter: Yayoi Kusama</p><p>Year: 1999</p>',
            'next_text': 'Continue Exploring',
        }],
        'ffb400': [{
            'title': 'Grandfather Clock',
            'text': "<p>The old clock is showing 7'oclock.</p>",
            'next_text': 'Continue Exploring',
        }],
        'fcff00': [{
            'title': 'Grandfather Clock',
            'text': '<p>You listen for the characteristic ticking of the clock but hear only silence...</p>',
            'next_text': 'Continue Exploring',
            'red_herring': true,
        }],
    },
    'study': {
        'ff0000': [{
            'name': '1.0 interact flower',
            'title': 'A vase',
            'text': "<p>It's an <strong>amaryllis</strong> in a vase. It still seems pretty healthy; a reminder that Malerei hasn't been missing for long.</p>",
            'next_text': 'Continue Exploring',
        }],
        'ff8a00': [{
            'name': '2.0 interact painting',
            'title': '<em>The Execution of Lady Jane Grey</em>',
            'text': "<p>Painter: Paul Delaroche</p><p>Year: 1833</p>",
            'next_text': 'Continue Exploring',
        }],
        '0030ff': [{
            'name': '3.0 interact drawer',
            'title': 'A little storage',
            'text': "<p>Upon opening the door, you're greeted with a safe with a bizarre locking mechanism.</p>",
            'next_text': "It's puzzle time!",
            'next': 'puzzle4_0.html',
        }],
        'a8ff00': [{
            'name': '4.0 interact laptop',
            'title': 'A laptop',
            'text': "<p>You see a laptop on the desk. Couldn't hurt to take a peek, right?</p>",
            'next_text': "It's puzzle time!",
            'next': 'puzzle5_0.html',
        }],
        '00eeff': [{
            'title': 'Clicky pen',
            'text': "<p>There's a nice pen sitting on the desk. You test it out on a scrap piece of paper, finding it produces a smooth flowing line. The owner would be very sad to lose such a nice pen, so you put it back.</p>",
            'next_text': "Continue Exploring",
            'red_herring': true,
        }],
        'ffb400': [{
            'title': 'Small Clock',
            'text': "<p>The small clock is showing 4'oclock.</p>",
            'next_text': 'Continue Exploring',
        }],
        'ae00ff': [{
            'title': 'Cushion',
            'text': "<p>The cushion on the floor looks just perfect for sitting down and enjoying tea.</p>",
            'next_text': 'Continue Exploring',
            'red_herring': true,
        }],
        'f600ff': [{
            'title': 'Tea Kettle',
            'text': "<p>Looks like a well-loved tea kettle. Unsuprisingly, there is no tea inside.</p>",
            'next_text': 'Continue Exploring',
            'red_herring': true,
        }],
        'ff0084': [{
            'title': 'A tea set',
            'text': "<p>A tea cup sits atop a wooden box full of tea. Looks like the teas are divided into <strong>black</strong>, <strong>green</strong>, and <strong>white</strong>. It smells very aromatic!</p>",
            'next_text': 'Continue Exploring',
            'red_herring': true,
        }],
        '3812b5': [{
            'title': 'A handwritten note',
            'text': "<p>lapsang 212F</p><p>sencha 176F</p><p>baimudan 185F</p>",
            'next_text': 'Continue Exploring',
        }],
        '9382c8': [{
            'title': 'Scrap paper',
            'text': "<p>A scrap piece of paper. Might be nice for testing out a pen.</p>",
            'next_text': 'Continue Exploring',
            'red_herring': true,
        }],
    },
    'bedroom': {
        'ff8a00': [
            {
                'name': '1.0 interact frame',
                'title': 'An empty frame',
                'text': "<p>There's a rolled-up canvas, but it looks ruined. You take a look at the frame behind it to see if anything seems amiss. Lo and behold...</p>",
                'next_text': "It's puzzle time!",
                'next': 'puzzle6_0.html',
            }
        ],
        'ff0000': [
            {
                'name': '2.0 interact flower',
                'title': 'A sweet scent',
                'text': "<p>A vase containing vibrant purple <strong>primulas</strong> are thriving in this room.</p>",
                'next_text': 'Continue Exploring',
            }
        ],
        'ffb400': [
            {
                'title': 'Wall Clock',
                'text': "<p>The clock built into the wall reads 7 o'clock.</p>",
                'next_text': 'Continue Exploring',
            }
        ],
        'a8ff00': [ // note on board
            {
                'name': '3.0 interact note',
                'title': 'Numbers on a note',
                'text': "<p>It reads: 0405 339.</p><p>What's this for? This is probably useful for something...</p>",
                'next_text': "Continue Exploring",
            }
        ],
        '0030ff': [ //  under the bed
            {
                'name': '4.0 interact under the bed',
                'title': 'Another...key.',
                'text': "<p>Well, this wasn't a very secure location. Guess this goes to the drawer next to the bed.</p>",
                // requires puzzle5.0 to unlock
                'condition': function() {return checkUserCompletePuzzle(5)},
                // unlock drawer next to the bed
                'side_effect': function() {setUserUnlock('bedroom_drawer')},
                'next_text': "Continue Exploring",
            },
            {
                'title': 'Cozy bed',
                'text': "<p>What a nicely made bed.</p>",
                'next_text': "Continue Exploring",
                'red_herring': true,
            },
        ],
        'ae00ff': [  // drawer
            {
                'name': '5.1 interact drawer',
                'title': 'An unlocked drawer',
                'text': "<p>You find another <strong>blank tarot card</strong> and a <strong>recorder</strong> locked with another strange mechanism. May as well give it a go.</p>",
                // requires if 0030ff has been visited
                'condition': function() {return checkUserUnlock('bedroom_drawer')},
                // add tarot card to inventory - chariot
                'side_effect': function() {setUserUnlock('chariot')},
                'next_text': "It's puzzle time!",
                'next': "light_puzzle7_0.html",
            },
            {
                'name': '5.0 interact drawer',
                'title': 'Another locked drawer',
                'text': "<p>This person seems to like locking everything down.</p><p>Time to look for another key...but where would it be?</p>",
                'next_text': "Continue Exploring",
                'red_herring': true,
            },
        ],
        '00eeff': [
            {
                'title': 'Cozy bed',
                'text': "<p>What a nicely made bed.</p>",
                'next_text': "Continue Exploring",
                'red_herring': true,
            }
        ],
    },
    'library': {
        'ff8a00': [{
            'name': '1.0 interact painting',
            'title': '<em>Elena at Cala de San Vicente</em>',
            'text': "<p>Painting: Joaqu&iacute;n Sorolla y Bastida</p><p>Year: 1919</p>",
            'next_text': "Continue Exploring",
        }],
        'ff0000': [{
            'name': '2.0 interact plant',
            'title': 'More green things',
            'text': "<p>It's a heavy vase filled with <strong>succulent</strong> plants. Beneath it, you find another <strong>blank tarot card</strong>.</p>",
            // add tarot card to inventory - temperance
            'side_effect': function() {setUserUnlock('temperance')},
            'next_text': "Continue Exploring",
        }],
        'a8ff00': [{
            'name': '3.0 interact top book shelf',
            'title': '<em>Seasoned Plants</em>',
            'text': "<p>These pages are bookmarked:</p> \
                     <p><strong>Amaryllis</strong>, autumn<br /> \
                     <strong>Peace lily</strong>, summer<br /> \
                     <strong>Succulents</strong>, winter<br /> \
                     <strong>Primula</strong>, spring</p>",
            'next_text': "Continue Exploring",
        }],
        '00eeff': [{
            'name': '4.0 interact 2nd book shelf',
            'title': 'Fancy journal',
            'text': '<p>Pages and pages of flowery script.</p><p><em>"Water makes me think of balance."</em></p><p><em>"Jane Grey. What it must have been like to die in the Tower of London..".</em></p>',
            'next_text': "Continue Exploring",
        }],
        'ae00ff': [{
            'name': '5.0 interact 3rd book shelf',
            'title': '<em>Beau-tea-ful</em>',
            'text': "<p>A lovely book catches your eye; you've been meaning to try tea for a bit.</p> \
                     <p><strong>Lapsang souchong</strong> is a black tea.<br /> \
                     <strong>Sencha</strong> is a green tea.<br /> \
                     <strong>Bai mu dan</strong> is a white tea.<br /></p>",
            'next_text': "Continue Exploring",
        }],
        'f600ff': [{
            'name': '6.0 interact bottom shelf',
            'title': '<em>It Takes Two to Tarot</em>',
            'text': "<p>You pull out a book with a well-worn cover; this must have been read a lot.</p><p>TODO: TAROT INFO/LINK OUT HERE</p>",
            'next_text': "Continue Exploring",
        }],
        'ff0084': [
            {
                'name': '7.1 interact hidden room',
                'title': 'A secret door',
                'text': "<p>Pushing the cushions and part of the bookshelf out of the way, you're amazed to find a trap door under the rug. Well, if you weren't suspicious before, you're definitely suspicious now.</p>",
                'next_text': "Continue Exploring",
                // won't reveal until light puzzle is solved
                'condition': function() {return checkUserCompletePuzzle(7)},
            },
            {
                'name': '7.0 interact hidden room',
                'title': 'A cushion covered chair',
                'text': "<p>The owner of this chair obviously loves cushions. You can hardly see the chair underneath. Looks comfy though.</p>",
                'next_text': "Continue Exploring",
            },
        ],
        'ffb400': [{
            'title': 'Digital Clock',
            'text': "<p>The digital clock is displaying 14:00.</p>",
            'next_text': 'Continue Exploring',
        }],
        '3812b5': [{
            'title': 'Lamp',
            'text': "<p>A free standing lamp. Useful for reading all those books.</p>",
            'next_text': 'Continue Exploring',
            'red_herring': true,
        }],
        '0030ff': [{
            'title': 'Tiny light',
            'text': "<p>Awww. It's so small!</p>",
            'next_text': 'Continue Exploring',
            'red_herring': true,
        }],
    },
}

const UNLOCKS = {
    // all of the rooms have to be unlocked
    access: [
        'foyer_drawer',  // solve puzzle 3.0 // DONE
        'bedroom_drawer', // find key under the bed
        'bedroom', // solve puzzle 4.0 // DONE
        'bedroom_underbed', // solve puzzle 5.0 // DONE
        'secret',  // solve light puzzle7.0  // DONE
        'library',  // find a key in the foyer
        'bedroom',  // unlocks with tea temperature puzzle4.0 - DONE
        'foyer', // unlocked by doing intro puzzles2.0 // DONE
        'study', // unlocked by doing intro puzzles // DONE
    ],
    cards : {
        'sun': 'The Sun',
        tower: 'The Tower',  // DONE (ish, double check right card)
        temperance: 'Temperance',
        chariot: 'The Chariot',
    }
};

const ROOMS = ['secret', 'bedroom', 'library', 'foyer', 'study'];
const CARDS = ['sun', 'tower', 'temperance', 'chariot'];

// cookie helpers
const COOKIE_NAME = 'game_data';

function getGameData() {
    return (Cookies.get(COOKIE_NAME) ? JSON.parse(Cookies.get(COOKIE_NAME)) : {});
}

function setCookie(key, value) {
    let game_data = getGameData();
    game_data[key] = value;
    Cookies.set(COOKIE_NAME, JSON.stringify(game_data), { expires: 30, SameSite: 'strict' });
    return game_data[key];
}

function resetGameData() {
    Cookies.remove(COOKIE_NAME);
}

function calculateUserDiscoveryUnlocks(room_name) {
    let game_data = getGameData();
    var this_room_seen = 0;
    var this_room_total = 0;
    var game_seen = 0;
    var game_total = 0;
    for(let room in discoveries){
        if(discoveries.hasOwnProperty(room)){
            for (let hash in discoveries[room]) {
                if(discoveries[room].hasOwnProperty(hash)){
                    let cookie_key = room + '_' + hash;
                    game_total += 1;
                    if (room == room_name) {
                        this_room_total += 1;
                        if (cookie_key in game_data) {
                            this_room_seen += 1
                        }
                    }
                    if (cookie_key in game_data) {
                        game_seen += 1;
                    }
                }
            }
        }
    }
    let cards_unlocked = 0;
    for (let i=0; i< CARDS.length; i++) {
        let card = CARDS[i];
        if (checkUserUnlock(card)) cards_unlocked += 1;
    }
    return [[this_room_seen, this_room_total], [game_seen, game_total], cards_unlocked];
}

function setUserUnlock(unlock_name) {
    setCookie(unlock_name, true);
}

function checkUserUnlock(unlock_name) {
    return getGameData()[unlock_name] === true;
}

function setUserCompletePuzzle(puzzle_id) {
    setCookie(puzzle_id, true);
    let associated_unlocks = {
        2 : ['foyer', 'study'],
        3 : ['foyer_drawer'],
        4 : ['bedroom', 'tower'], // TODO tarot card 2... so might switch this from tower
        5 : ['bedroom_underbed'],
        7 : ['secret'],
    }
    if (typeof(associated_unlocks[puzzle_id]) != 'undefined') {
        for (let i = 0; i < associated_unlocks[puzzle_id].length; i++) {
            setUserUnlock(associated_unlocks[puzzle_id][i]);
        }
    }
}

function checkUserCompletePuzzle(puzzle_id) {
    return getGameData()[puzzle_id] === true;
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
    for (let i = 0; i < ROOMS.length; i++) {
        if (checkUserUnlock(ROOMS[i])) {
            do_unlock(ROOMS[i]);
        }
    }
}

function updateMap(){
    // The map unlocks sections
    // Highlights which room you are in
    // Renders/hides the tooltip
    // And shows clues
    let room_name = $('img.click-map').attr('data-attribute');
    let this_room_stats, total_stats, cards_unlocked;
    [this_room_stats, total_stats, cards_unlocked] = calculateUserDiscoveryUnlocks(room_name);
    if (total_stats[0] > 0) {
        // Remove the first time tool tip if they've already been exploring
        $('#map').children('div.tip').remove();
    }
    $('div.inventory').replaceWith('<div class="inventory"></div>');
    let card_text = '';
    if (cards_unlocked > 0) {
        let out_of = (cards_unlocked == CARDS.length ? CARDS.length : '?');
        card_text = cards_unlocked+'/'+out_of+' tarot cards</br>'
    }
    $('div.inventory').append(
        ('<p><strong>Discoveries:</strong><br />This room: ' + 
            this_room_stats[0] + '/' + this_room_stats[1] + '<br \>' +
            'Total:'+ total_stats[0] + '/' + total_stats[1]+ '<br \>' +
            card_text + '</p>'
        )
    );
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
    updateMap();
    unlockMapSections();

    if ($('img.click-map').length) {
        clickMap($('img.click-map').attr('data-attribute'));
        populateDiscoveries($('img.click-map').attr('data-attribute'));
    }

    let puzzle_fns = {
        1 : attachPuzzle1,
        2 : attachPuzzle2,
        3 : attachPuzzle3,
        4 : attachPuzzle4,
        5 : attachPuzzle5,
        // 6 is TODO
        7 : attachPuzzle7,
        // 8 is TODO
        // 9 is TODO

    };
    for(let puzzle_id in puzzle_fns){
        if(puzzle_fns.hasOwnProperty(puzzle_id)){
            if($("#"+puzzle_id).length){
                puzzle_fns[puzzle_id](); // this is the call to "attach"
                toggleButtonLock($('.button'));
                if (checkUserCompletePuzzle(puzzle_id)) {
                    // Let the user advance without re-solving the puzzle it they've already solved it
                    toggleButtonLock($('.button'));
                }
            }
        }
    }
});