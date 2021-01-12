/*
 	https://evoluteur.github.io/
 	(c) 2021 Olivier Giulieri 
 */

var mediaList = {
	code: [
		{
			id:'isomorphic-table-cards', 
			title: 'Isomorphic Table/Cards',
			url:'http://evoluteur.github.io/isomorphic-table-cards'
		},
		{
			id:'many-bubbles', 
			title: 'Evolutility bubbles view',
			url:'http://evoluteur.github.io/evolutility-ui-jquery/demo/index.html#comics/bubbles'
		},
		{
			id:'motivational-numerology', 
			title: 'Motivational Numerology',
			url:'https://evoluteur.github.io/motivational-numerology/',
		},
		{
			id:'d3-dual-range-slider', 
			title: 'D3 dual range slider',
			url:'http://evoluteur.github.io/d3-dual-range-slider/',
		},
		{
			id:'structured-filter', 
			title: 'Structured filter',
			url:'http://evoluteur.github.io/structured-filter/',
		},
		{
			id:'colorpicker', 
			title: 'Color-picker',
			url:'http://evoluteur.github.io/colorpicker/',
		},
		{
			id:'madeleine-data-science', 
			title: 'Madeleinology',
			url:'http://evoluteur.github.io/madeleinology/ingredients-top4.html',
		},
		{
			id:'chord', 
			title: 'Chord diagram',
			url:'http://www.chakradesign.com/gemstones-d3-chord.html',
		},
	],
	recipes: [
		{
			id:'creme-brulee', 
			title: 'Crèmes brûlées',
			url:'recipes/desserts/creme-brulee.html'
		},
		{
			id:'pear-tart', 
			title: 'Pear cream tart',
			url:'recipes/desserts/pear-cream-tart.html'
		},
		{
			id:'madeleine', 
			title: 'Madeleines',
			url:'recipes/desserts/madeleines.html' 
		},
	],
	recipes_learning: [
		{
			id:'canneles', 
			title: 'Cannelés',
			url:'recipes/desserts/canneles.html' 
		},
	],
	comics: shuffle([
		{
			id: "incal1",
			title: "L'Incal",
			url: "https://smile.amazon.com/Incal-Alejandro-Jodorowsky/dp/1594650934"
		},
		{
			id: "lama1",
			title: "Le Lama Blanc",
			url: "https://smile.amazon.com/White-Lama-Alexandro-Jodorowsky/dp/1594650802"
		},
		{
			id: "orbital1",
			title: "Orbital",
			url: "https://www.bdgest.com/preview-2765-BD-orbital-contacts.html"
		},
		{
			id: "niourk1",
			title: "Niourk",
			url: "http://www.bedetheque.com/serie-35353-BD-NiourK.html"
		},
		{
			id: "segments1",
			title: "Segments",
			url: "http://www.bedetheque.com/serie-30223-BD-Segments.html"
		},
		{
			id: "quete1",
			title: "La Quête de l'Oiseau du Temps",
			url: "https://smile.amazon.com/Quest-Time-Bird-Serge-Tendre/dp/1782763627"
		},
		{
			id: "monstre1",
			title: "Le Sommeil du Monstre",
			url: "http://www.bedetheque.com/BD-Sommeil-du-monstre-Tome-1-1348.html"
		},
		{
			id: "pemaling1",
			title: "Pema Ling",
			url: "http://www.bedetheque.com/serie-11520-BD-Pema-Ling.html"
		},
		{
			id: "aslak1",
			title: "Aslak",
			url: "http://www.bedetheque.com/serie-27075-BD-Aslak.html"
		},
		{
			id: "4pouvoir1",
			title: "Le Quatrieme Pouvoir",
			url: "http://www.bedetheque.com/serie-592-BD-Quatrieme-pouvoir.html"
		},
		{
			id: "acriborea",
			title: "Acriborea",
			url: "http://www.bedetheque.com/serie-13233-BD-Acriborea.html"
		},
		{
			id: "ivressefantom1",
			title: "L'Ivresse des Fantomes",
			url: "http://www.bedetheque.com/serie-15118-BD-Ivresse-des-fantomes.html"
		},
		{
			id: "carmenmc1",
			title: "Carmen Mc-Callum",
			url: "http://www.bedetheque.com/serie-70-BD-Carmen-Mc-Callum.html"
		},
		{
			id: "aquablue1",
			title: "Aquablue",
			url: "http://www.bedetheque.com/serie-48-BD-Aquablue.html"
		},
		{
			id: "zarkass1",
			title: "Piege sur Zarkass",
			url: "http://www.bedetheque.com/serie-36598-BD-Piege-sur-Zarkass.html"
		},
		{
			id: "nirvana1",
			title: "Nirvana",
			url: "http://www.bedetheque.com/serie-28647-BD-Nirvana.html"
		},
		{
			id: "ocean-amour",
			title: "Un Ocean d\'Amour",
			url: "http://www.bedetheque.com/serie-44836-BD-Un-ocean-d-amour.html"
		},
		{
			id: "chininkel1",
			title: "Le Grand Pouvoir du Chninkel",
			url: "http://www.bedetheque.com/serie-26-BD-Grand-pouvoir-du-Chninkel.html"
		},
		{
			id: "legendesoublie1",
			title: "Legendes des Contrees Oubliees",
			url: "http://www.bedetheque.com/serie-2-BD-Legendes-des-contrees-oubliees.html"
		},
		{
			id: "kevin1",
			title: "Litteul Kevin",
			url: "http://www.bedetheque.com/serie-560-BD-Litteul-Kevin.html"
		},
		{
			id: "sillage1",
			title: "Sillage",
			url: "http://www.bedetheque.com/serie-18-BD-Sillage.html"
		},
		{
			id: "edena1",
			title: "Edena",
			url: "https://smile.amazon.com/Moebius-Library-World-Edena/dp/1506702163"
		},
		{
			id: "okko1",
			title: "Okko",
			url: "http://www.bedetheque.com/serie-10529-BD-Okko.html"
		},
		{
			id: "thorgal1",
			title: "Thorgal",
			url: "http://www.bedetheque.com/serie-12-BD-Thorgal.html"
		},
		{
			id: "chimere1",
			title: "Chimeres 1887",
			url: "http://www.bedetheque.com/serie-29524-BD-Chimeres-1887.html"
		},
		{
			id: "fleaudieux1",
			title: "Le Fleau des Dieux",
			url: "http://www.bedetheque.com/serie-526-BD-Fleau-des-dieux.html"
		},
		{
			id: "lanfeust1",
			title: "Lanfeust de Troy",
			url: "http://www.bedetheque.com/serie-6-BD-Lanfeust-de-Troy.html"
		},
		{
			id: "oms",
			title: "OMS en serie",
			url: "http://www.bedetheque.com/serie-35557-BD-OmS-en-serie.html"
		},
		{
			id: "urban1",
			title: "Urban",
			url: "http://www.bedetheque.com/serie-29156-BD-Urban.html"
		},
		{
			id: "largo1",
			title: "Largo Winch",
			url: "http://www.bedetheque.com/serie-14-BD-Largo-Winch.html"
		},
		{
			id: "skydoll1",
			title: "Sky Doll",
			url: "https://smile.amazon.com/Sky-Doll-Vol-Barbara-Canepa/dp/0785132368/"
		},
		{
			id: "vampire-benares1",
			title: "Le Vampire de Benares",
			url: "http://www.bedetheque.com/serie-28231-BD-Vampire-de-Benares.html"
		},
		{
			id: "neffous1",
			title: "La Nef des Fous",
			url: "http://www.bedetheque.com/serie-36-BD-Nef-des-fous.html"
		},
		{
			id: "uw11",
			title: "Universal War One",
			url: "http://www.bedetheque.com/serie-279-BD-Universal-War-One.html"
		},
		{
			id: "goldencity1",
			title: "Golden City",
			url: "http://www.bedetheque.com/serie-289-BD-Golden-City.html"
		},
		{
			id: "manoir1",
			title: "Le Manoir des Murmures",
			url: "http://www.bedetheque.com/serie-16625-BD-Manoir-des-murmures.html"
		},
		{
			id: "pandamonia1",
			title: "Pandamonia",
			url: "https://www.bdgest.com/preview-854-BD-pandamonia-chaos-bestial.html"
		},
		{
			id: "travis1",
			title: "Travis",
			url: "http://www.bedetheque.com/serie-75-BD-Travis.html"
		},
		{
			id: "grandmort1",
			title: "Le Grand Mort",
			url: "http://www.bedetheque.com/serie-16623-BD-Grand-Mort.html"
		},
		{
			id: "metabaron1",
			title: "Les Meta-Barons",
			url: "http://www.bedetheque.com/serie-5124-BD-Meta-barons.html"
		},
		{
			id: "technoperes1",
			title: "Les Technopères",
			url: "http://www.bedetheque.com/serie-65-BD-Technoperes.html"
		},
		{
			id: "passagersvent1",
			title: "Les Passagers du Vent",
			url: "http://www.bedetheque.com/serie-108-BD-Passagers-du-vent.html"
		},
		{
			id: "garulfo1",
			title: "Garulfo",
			url: "http://www.bedetheque.com/serie-57-BD-Garulfo.html"
		},
		{
			id: "meteors",
			title: 'Meteors',
			url: "http://www.bedetheque.com/serie-17452-BD-Meteors.html"
		},
		{
			id: "solo",
			title: 'Solo',
			url: "http://www.bedetheque.com/serie-44145-BD-Solo.html"
		},
		{
			id: "bolchoi_arena",
			title: 'Bolchoi Arena',
			url: "https://www.bedetheque.com/serie-62493-BD-Bolchoi-Arena.html"
		},
	]),
	comics_us: shuffle([
		{
			id: "saga1",
			title: "Saga",
			url: "https://smile.amazon.com/Saga-Book-One-Brian-Vaughan/dp/1632150786",
		},
		{
			id: "androitsheep1",
			title: "Do androids dream of electronic sheeps",
			url: "https://smile.amazon.com/Androids-Dream-Electric-Sheep-Vol/dp/1608865002",
		},
		{
			id: "ronin",
			title: "Ronin",
			url: "https://smile.amazon.com/Frank-Millers-Ronin-Miller/dp/0930289218",
		},
		{
			id: "low",
			title: "Low",
			url: "https://smile.amazon.com/Low-Vol-1-Delirium-Hope/dp/1632151944",
		},
		{
			id: "descender",
			title: "Descender",
			url: "https://smile.amazon.com/Descender-Vol-1-Tin-Stars/dp/1632154269",
		},
		{
			id: "east-of-west",
			title: "East of West",
			url: "https://smile.amazon.com/East-West-Promise-Jonathan-Hickman/dp/1607067706/",
		},
	]),
	comics_euro_us: shuffle([
		{
			id: "edena",
			title: "Edena",
			url: "https://smile.amazon.com/Moebius-Library-World-Edena/dp/1506702163"
		},
		{
			id: "incal",
			title: "The Incal",
			url: "https://smile.amazon.com/Incal-Alejandro-Jodorowsky/dp/1594650934"
		},
		{
			id: "incalb",
			title: "Before The Incal",
			url: "https://smile.amazon.com/Before-Incal-Alejandro-Jodorowsky/dp/159465901X"
		},
		{
			id: "4power",
			title: "The Fourth Power",
			url: "https://smile.amazon.com/Fourth-Power-Oversized-Deluxe/dp/1594653011"
		},
		{
			id: "birdtime",
			title: "The Quest For The Time Bird",
			url: "https://smile.amazon.com/Quest-Time-Bird-Serge-Tendre/dp/1782763627"
		},
		{
			id: "lama",
			title: "The White Lama",
			url: "https://smile.amazon.com/White-Lama-Alexandro-Jodorowsky/dp/1594650802"
		},/*
		{
			id: "imperfectfuture",
			title: "Tales of an Imperfect Future",
			url: "https://www.amazon.com/Tales-Imperfect-Future-Alfonso-Font/dp/1616554940"
		},*/
	]),
	fractals: [
		{id:'mandelbrot-1', title:'Mandelbrot set ("the thumbprint of God")', url:'https://en.wikipedia.org/wiki/Benoit_Mandelbrot#/media/File:Mandel_zoom_08_satellite_antenna.jpg'},
		{id:'mandelbrot-2', title:'Mandelbrot set', url:'https://en.wikipedia.org/wiki/Benoit_Mandelbrot#/media/File:Newton-lplane-Mandelbrot.jpg'},
		{id:'mandelbrot_one_island', title:'Julia "island"', url:'https://en.wikipedia.org/wiki/Mandelbrot_set#/media/File:Mandel_zoom_15_one_island.jpg'},
		{id:'snowflake', title:'Snowflake', url:'http://gizmodo.com/this-physicists-designer-snowflakes-are-dazzling-1748893157'},
		{id:'romanesco', title:'Romanesco Broccoli', url:'https://www.gardenbetty.com/romanesco-broccoli-a-fibonacci-fractal/'},
		{id:'mountains', title:'Mountain tops', url:'https://www.wired.com/2010/09/fractal-patterns-in-nature/'},
	],
 	art: [
 		{id:'monet', title:'Claude Monet', url:'https://www.google.com/search?tbm=isch&q=claude+monet+impressionism'},
 		{id:'seurat', title:'Georges Seurat', url:'https://www.google.com/search?&source=lnms&tbm=isch&q=seurat'},
 		{id:'vangogh', title:'Vincent Van Gogh', url:'https://www.google.com/search?q=van+gogh&newwindow=1&source=lnms&tbm=isch'},
 		{id:'hokusai', title:'Katsushika Hokusai', url:'https://www.google.com/search?q=hokusai&newwindow=1&source=lnms&tbm=isch'},
 		{id:'jung', title:'Carl Jung', url:'https://www.google.com/search?tbm=isch&q=jung+red+book'},
 		{id:'hiroshige', title:'Utagawa Hiroshige', url:'https://en.wikipedia.org/wiki/Hiroshige'},
 		{id:'moebius', title:'Moebius', url:'https://www.moebius.fr/'},
 		{id:'klimt', title:'Gustav Klimt', url:'https://www.google.com/search?tbm=isch&q=klimt'},
 	],
	chakras: [
		{	
			id:'chakras', 
			title: 'Meditation',
			url:'https://www.meetup.com/find/events/?allMeetups=false&keywords=meditation'
		},
		{	
			id:'ch7-silver2', 
			title: '7 Chakras Charm',
			//title: '7 Chakras Charm: Amethyst, Sodalite, Angelite, Amazonite, Amber, Carnelian, Red jasper',
			url:'http://www.chakradesign.com'
		},
		{	
			id:'sai-maa', 
			title: 'Sai Maa',
			url:'https://www.sai-maa.com'
		},
		{	
			id:'sadhguru', 
			title: 'Sadhguru',
			url:'https://isha.sadhguru.org'
		},
	],
	movies: shuffle([
		{id:'matrix', title:'Matrix', url:'https://www.imdb.com/title/tt0133093/'},
		{id:'dark-city', title:'Dark City', url:'https://www.imdb.com/title/tt0118929/'},
		{id:'gattaca', title:'Gattaca', url:'https://www.imdb.com/title/tt0119177/'},
		{id:'bladerunner', title:'Blade Runner', url:'https://www.imdb.com/title/tt0083658/'},
		{id:'vendetta', title:'V for Vendetta', url:'https://www.imdb.com/title/tt0434409/'},
		{id:'fifthelem', title:'The Fifth Element', url:'https://www.imdb.com/title/tt0119116/'},
		{id:'star-wars', title:'Star Wars', url:'https://www.imdb.com/title/tt1185834/'},
		{id:'avatar', title:'Avatar', url:'https://www.imdb.com/title/tt0499549/'},
		{id:'dune', title:'Dune', url:'https://www.imdb.com/title/tt0087182/'},
		{id:'kpax', title:'K-PAX', url:'https://www.imdb.com/title/tt0272152/'},
		{id:'inception', title:'Inception', url:'https://www.imdb.com/title/tt1375666/'},
		{id:'stargate', title:'Star Gate', url:'https://www.imdb.com/title/tt0111282/'},
		{id:'enders', title:'Ender\'s Game', url:'https://www.imdb.com/title/tt1731141/'},
		{id:'guardian-galaxy', title:'Guardian of the Galaxy', url:'https://www.imdb.com/title/tt2015381/'},
		{id:'xmen', title:'X-Men', url:'https://www.imdb.com/title/tt0120903/'},
		{id:'johncarter', title:'John Carter', url:'https://www.imdb.com/title/tt0401729/'}, 
		{id:'tron', title:'TRON', url:'https://www.imdb.com/title/tt0084827/'}, 
		{id:'ghost-in-shell', title:'Ghost in the Shell', url:'https://www.imdb.com/title/tt0113568/'},
		{id:'akira', title:'Akira', url:'https://www.imdb.com/title/tt0094625/'},
		{id:'dr-strange', title:'Doctor Strange', url:'https://www.imdb.com/title/tt1211837/'},
		{id:'ironman', title:'Iron Man', url:'https://www.imdb.com/title/tt0371746/'},
		{id:'island', title:'The Island', url:'https://www.imdb.com/title/tt0399201'},
		{id:'dejavu', title:'Deja Vu', url:'https://www.imdb.com/title/tt0453467'},
		{id:'minority-report', title:'Minority Report', url:'https://www.imdb.com/title/tt0181689/'},
		{id:'i-legend', title:'I Am Legend', url:'https://www.imdb.com/title/tt0480249'},
		{id:'wall-e', title:'WALL·E', url:'https://www.imdb.com/title/tt0910970'},
		{id:'riddick', title:'The Chronicles of Riddick', url:'https://www.imdb.com/title/tt0296572'},
		{id:'underworld', title:'Underworld', url:'https://www.imdb.com/title/tt0320691'},
		{id:'man-earth', title:'The Man from Earth', url:'https://www.imdb.com/title/tt0756683/'},
		{id:'limitless', title:'Limitless', url:'https://www.imdb.com/title/tt1219289/'},
		{id:'cloud-atlas', title:'Cloud Atlas', url:'https://www.imdb.com/title/tt1371111/'},
		{id:'valerian', title:'Valerian and the City of a Thousand Planets', url:'https://www.imdb.com/title/tt2239822/'},
		{id:'wwoman', title:'Wonder Woman', url:'https://www.imdb.com/title/tt0451279/'},
		{id:'butterfly', title:'The Butterfly Effect', url:'https://www.imdb.com/title/tt0289879/'},
		{id:'sense8', title:'Sense8', url:'https://www.imdb.com/title/tt2431438/'},
		{id:'serenity', title:'Serenity', url:'https://www.imdb.com/title/tt0379786/'},
		{id:'giver', title:'The Giver', url:'https://www.imdb.com/title/tt0435651/'},
		{id:'alita', title:'Alita: Battle Angel', url:'https://www.imdb.com/title/tt0437086/'},
		{id:'wargames', title:'WarGames', url:'https://www.imdb.com/title/tt0086567/'},
		{id:'alien', title:'Alien', url:'https://www.imdb.com/title/tt0078748/'},
		{id:'jupiter', title:'Jupiter Ascending', url:'https://www.imdb.com/title/tt1617661/'},
		{id:'avalon', title:'Avalon', url:'https://www.imdb.com/title/tt0267287/'},
		{id:'rp1', title:'Ready Player One', url:'https://www.imdb.com/title/tt1677720/'},
        {id:'existenz', title:'Existenz', url:'https://www.imdb.com/title/tt0120907/'},
        {id:'mandolorian', title:'The Mandalorian', url:'https://www.imdb.com/title/tt8111088/'},
    ]),
    movies_fr: [
		{
			id:'fr-amelie', 
			title: 'Amelie',
			title_us: '',
			url:'http://www.imdb.com/title/tt0211915/' 
		},
		{
			id:'fr-ridicule', 
			title: 'Ridicule',
			url:'http://www.imdb.com/title/tt0117477/'
		},
		{
			id:'fr-verte', 
			title: 'La belle verte',
			title_us: '',
			url:'http://www.imdb.com/title/tt0115650' 
		},
		{
			id:'fr-gazon', 
			title: 'Gazon maudit',
			title_us: 'French Twist',
			url:'https://www.imdb.com/title/tt0113149/?ref_=nv_sr_srsg_0' 
		},
		{
			id:'fr-dinner', 
			title: 'Le dîner de cons',
			title_us: 'The Dinner Game',
			url:'http://www.imdb.com/title/tt0119038/'
		},
		{
			id:'fr-intouchable', 
			title: 'Intouchables',
			title_us: 'The Intouchables',
			url:'http://www.imdb.com/title/tt1675434/' 
		},
		{
			id:'fr-fleuve', 
			title: 'La vie est un long fleuve tranquille',
			title_us: 'Life Is a Long Quiet River',
			url:'http://www.imdb.com/title/tt0096386' 
		},
		{
			id:'fr-feu', 
			title: 'La guerre du feu',
			title_us: 'Quest for Fire',
			url:'http://www.imdb.com/title/tt0082484' 
		},
	],
}
var pixMe=['og-2020','og-2019','og-2018','og-2017','og-neige','og-closeup','og-infant'];
var pixMeIdx=0;
var isMobile = typeof window.orientation !== 'undefined';

const e = id => document.getElementById(id);

function shuffle(arr){
	var ln = arr.length,
		rnd = Math.floor(Math.random() * (ln));
	return arr.slice(rnd, ln).concat(arr.slice(0, rnd))
}

function more(id, min){
	var elem=e(id+'_x');
	elem.className='';
	elem.innerHTML=mosaic(id, true)
}
function frenchMovies(){
	e('movies_french').innerHTML=mosaic('movies_fr')
}

function switchPix(elem){
	pixMeIdx=pixMeIdx>(pixMe.length-2)?0:pixMeIdx+1;
	elem.src='pix/olivier/'+pixMe[pixMeIdx]+'.jpg';
}

var linkCaptions={
	comics: 'Show more French graphic novels',
	comics_2: 'Show even more graphic novels',
	movies: 'Show more sci-fi movies'
}
function pixDir(id){
	if(id.startsWith('comic')){
		id='comics'
	}
	return 'pix/'+id+'/'
}

function mosaic(id, more){
	if(id==='comics_2'){
		id='comics';
		more=2;
	}else{
		more= more ? 1 : 0;
	}
	var preview=(id==='movies' || id==='comics')?9:10,
	 	ext=id==='code'?'.gif':'.jpg',
		arrList=mediaList[id],
		ml = (id==='comics' && more) ? 24 : arrList.length,
		arrListP = more ? arrList.slice(preview, ml) : arrList.slice(0, preview),
		pixPath = pixDir(id),
		imageLink = function (m){
			var pix='<img src="'+pixPath+m.id+ext+'"/>';
			if(m.title){
				pix += '<div class="pixTitle">'+m.title+'</div>';
			}
			var h = '<div class="pixTitleHolder">';
			if(m.url){
				h+= '<a href="'+m.url+'"'+
						(id!='recipes' ? ' target="_blank" rel="noopener"':'')+
						(m.css?(' class="'+m.css+'"'):'')+
					'>'+pix+'</a>';
			}else{
				h+= pix;
			}
			h+='</div>';
			return h;
		},
		mm;

	if(more===2){
		arrListP = arrList.slice(ml, arrList.length);
	}else{
		arrListP = more ? arrList.slice(preview, ml) : arrList.slice(0, preview);
	}
	mm = arrListP.map(imageLink);
	if(arrList.length>preview & !more){
		mm.push(linkMore(id, preview));
	}
	if(more===1 && (id==='comics')){
		mm.push(linkMore(id+'_2', 0));
	}
	mm.push('<div class="clearer"></div>');
	return mm.join('');
}
const linkMore = (id, preview) => '<span id="'+id+'_x" class="block">'+
    '<a class="linkMore" href="javascript:more(\''+id+'\','+preview+')"> + '+
    linkCaptions[id]+'&nbsp;</a><br><br></span>';

function setMosaic(id){
	e(id+'2').innerHTML = mosaic(id);
}
const sectionTitles = {
    code: 'Code',
    comics: 'Graphic Novels',
    recipes: 'Cooking',
    movies: 'Movies',
    fractals: 'Inspiration',
    chakras: 'Meditation',
    art: 'Namaste',
}
function setupPage(){
    const pixAreas = ['code','comics','comics_us','comics_euro_us','recipes','movies','fractals','art','chakras']
    // 'movies_fr' for frenchMovies
    const fn = isMobile ? 
        setMosaic
        : id => {
            if(sectionTitles[id]){
                document.getElementById(id+'-braille').innerHTML = br.braille(sectionTitles[id])
            }
            setMosaic(id)
        }
    pixAreas.forEach(fn);
}

let cTheme = ''
function toggleTheme(){ 
    const t = (cTheme==='-japan'?'':'-japan')
    document.getElementById('thememe').href='css/me'+t+'.css'
    cTheme = t
}

var br = {
    braille: function (message) { 
        var h=''; 
        var myChar, prevCharNum, inQuote 

        function BrChar(bPix, bAlt) {
            return '<div class="br br-'+bPix+'"><span>'+bAlt+'</span></div>'
            //return '<div class="br br-'+bPix+'" title="'+bAlt+'"></div>'
        }

        for (var i=0; i<message.length; i++) {
            myChar = message.charAt(i);
            if ((myChar>="a") && (myChar<="z")) { // a to z
                    h+=BrChar(myChar, myChar);
                    prevCharNum = false;            
            } else if((myChar>="A") && (myChar<="Z")) { // A to Z
                    h+=BrChar("cap", "Caps")+BrChar(myChar.toLowerCase(), myChar); // Caps
                    prevCharNum = false;         
            } else if((myChar>"0") && (myChar<="9")) {
                    if (!prevCharNum){
                            h+=BrChar("num", "Number");
                    } 
                    h+=BrChar(String.fromCharCode(myChar.charCodeAt(0) + 48), myChar); 
                    prevCharNum = true;            
            } else {
                switch (myChar) {
                    case " ": 
                        h+=BrChar("sp", ""); //Space
                        prevCharNum = false;
                        break;
                    case "0":
                        if (!prevCharNum){
                            h+=BrChar("num", "Number"); 
                        }
                        h+=BrChar("j", "0");      
                        prevCharNum = true;
                        break;
                    case "\n":
                        h+="<br><br>";
                        nbCharsInLine = -1;
                        prevCharNum = false;
                        break;
                    case ".":
                        if (prevCharNum){
                            h+=BrChar("dec", "."); 
                        }
                        else{
                            h+=BrChar("period", ".");  
                        }
                        break;
                    case "$":
                        h+=BrChar("period", "$");
                        prevCharNum = false;
                        break;
                    case "%":
                        h+=BrChar("col", "%")+BrChar("p", "");
                        prevCharNum = false;
                        break;
                    case "'":
                        h+=BrChar("qs", "'"); 
                        prevCharNum = false;
                        break;
                    case ",":
                        h+=BrChar("comma", ",");
                        prevCharNum = false;
                        break;
                    case "?":
                        h+=BrChar("qu", "?"); 
                        prevCharNum = false;
                        break;
                    case "(":
                    case ")":
                        h+=BrChar("par", "parenthesis"); 
                        prevCharNum = false;
                        break;
                    case "*":
                        h+=BrChar("ast", "*")+BrChar("ast", "*"); 
                        prevCharNum = false;
                        break;
                    case "//":
                        h+=BrChar("sla", "//"); 
                        prevCharNum = false;
                        break;
                    case "!":
                        h+=BrChar("ex", "!"); 
                        prevCharNum = false;
                        break;
                    case "'": 
                        if (inQuote)
                            h+=BrChar("qc", "Close Quote"); 
                        else
                            h+=BrChar("qo", "Open Quote");  
                        inQuote = !inQuote;
                        prevCharNum = false;
                        break;
                    case ":":
                        h+=BrChar("col", ":");
                        prevCharNum = false;
                        break;
                    case ";":
                        h+=BrChar("sc", ";"); 
                        prevCharNum = false;
                        break;
                    case "[":
                        h+=BrChar("cap", "[")+BrChar("par", "");
                        break;
                    case "]":
                        h+=BrChar("par", "]")+BrChar("qs", ""); 
                        break;
                }
            }
        }
        return h;
    },

    alphabet: function(){
        var alpha='<div class="braille-doc2 alphabet">',
            char;
        for(var i=97;i<123;i++){
            char=String.fromCharCode(i);
            alpha+='<div><span>'+char+'</span><div class="br br-'+char+'"></div></div>'; 
        }
        return alpha+'</div>';
    }
}
