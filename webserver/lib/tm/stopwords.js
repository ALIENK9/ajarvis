
// STOPWORDS dizionario
// Non fate righe troppo lunghe, sennò diventa illeggibile

const STOPWORDS = {};

STOPWORDS.IT = [
	'a', 'abbastanza', 'accidenti', 'ad', 'è', 'é', 'adesso', 'affinche', 'agli', 'ahime', 'ahimè¨', 'ad', 'ai', 'al',
	'alcuna', 'alcuni', 'alcuno', 'all', 'alla', 'alle', 'allo', 'altri', 'altrimenti', 'altro', 'altrui', 'anche', 'ancora', 'anni',
	'anno', 'ansa', 'assai', 'attesa', 'avanti', 'avendo', 'avente', 'aver', 'avere', 'avete', 'aveva', 'avuta', 'avute', 'avuti',
	'avuto', 'basta', 'bene', 'benissimo', 'berlusconi', 'brava', 'bravo', 'c', 'casa', 'caso', 'cento', 'certa', 'certe', 'certi',
	'certo', 'che', 'chi', 'chicchessia', 'chiunque', 'ci', 'ciascuna', 'ciascuno', 'cima', 'cio', 'ciò', 'cioe', 'cioè', 'circa',
	'citta', 'città ', 'codesta', 'codesti', 'codesto', 'cogli', 'coi', 'col', 'colei', 'coll', 'coloro', 'colui', 'come', 'con',
	'concernente', 'consiglio', 'contro', 'cortesia', 'cos', 'cosa', 'cosi', 'così', 'cui', 'd', 'da', 'dagli', 'dai', 'dal', 'dall',
	'dalla', 'dalle', 'dallo', 'davanti', 'degli', 'dei', 'del', 'dell', 'della', 'delle', 'dello', 'dentro', 'detto', 'deve', 'di',
	'dice', 'dietro', 'dire', 'dirimpetto', 'dopo', 'dove', 'dovra', 'dovrà ', 'due', 'dunque', 'durante', 'e', 'ecco', 'ed', 'egli',
	'ella', 'eppure', 'era', 'erano', 'esse', 'essendo', 'esser', 'essere', 'essi', 'ex', 'fa', 'fare', 'fatto', 'favore', 'fin',
	'finalmente', 'finche', 'finché', 'finchè', 'fine', 'fino', 'forse', 'fra', 'fuori', 'gia', 'già', 'giacche', 'giorni', 'giorno',
	'gli', 'gliela', 'gliele', 'glieli', 'glielo', 'gliene', 'governo', 'grande', 'grazie', 'gruppo', 'ha', 'hai', 'hanno', 'ho', 'i',
	'ieri', 'il', 'improvviso', 'in', 'infatti', 'insieme', 'intanto', 'intorno', 'invece', 'io', 'l', 'la', 'là ', 'lavoro', 'le',
	'lei', 'li', 'lo', 'lontano', 'loro', 'lui', 'lungo', 'ma', 'macche', 'magari', 'mai', 'male', 'malgrado', 'malissimo', 'me',
	'medesimo', 'mediante', 'meglio', 'meno', 'mentre', 'mesi', 'mezzo', 'mi', 'mia', 'mie', 'miei', 'mila', 'miliardi', 'milioni',
	'ministro', 'mio', 'moltissimo', 'molto', 'mondo', 'nazionale', 'ne', 'negli', 'nei', 'nel', 'nell', 'nella', 'nelle', 'nello',
	'nemmeno', 'neppure', 'nessuna', 'nessuno', 'niente', 'no', 'noi', 'nondimeno', 'nostra', 'nostre', 'nostri', 'nostro',
	'nulla', 'nuovo', 'o', 'od', 'oggi', 'ogni', 'ognuna', 'ognuno', 'oltre', 'oppure', 'ora', 'ore', 'osi', 'ossia', 'paese',
	'parecchi', 'parecchie', 'parecchio', 'parte', 'partendo', 'peccato', 'peggio', 'per', 'perche', 'perchè', 'perché', 'percio',
	'perciò', 'perfino', 'pero', 'però', 'persone', 'piedi', 'pieno', 'piglia', 'piu', 'più', 'po', 'pochissimo', 'poco', 'poi',
	'poiche', 'pressapoco', 'prima', 'primo', 'proprio', 'puo', 'può', 'pure', 'purtroppo', 'qualche', 'qualcuna', 'qualcuno',
	'quale', 'quali', 'qualunque', 'quando', 'quanta', 'quante', 'quanti', 'quanto', 'quantunque', 'quasi', 'quattro', 'quel',
	'quella',	'quelli', 'quello', 'quest', 'questa', 'queste', 'questi', 'questo', 'qui', 'quindi', 'riecco', 'salvo', 'sara',
	'sarà', 'sarebbe', 'scopo', 'scorso', 'se', 'secondo', 'seguente', 'sei', 'sempre', 'senza', 'si', 'sia', 'siamo', 'siete',
	'solito', 'solo', 'sono', 'sopra', 'sotto', 'sta', 'staranno', 'stata', 'state', 'stati', 'stato', 'stesso', 'su', 'sua',
	'successivo', 'sue', 'sugli', 'sui', 'sul', 'sull', 'sulla', 'sulle', 'sullo', 'suo', 'suoi', 'tale', 'talvolta', 'tanto',
	'te', 'tempo', 'ti', 'torino', 'tra', 'tranne', 'tre', 'troppo', 'tu', 'tua', 'tue', 'tuo', 'tuoi', 'tutta', 'tuttavia',
	'tutte', 'tutti', 'tutto', 'uguali', 'un', 'una', 'uno', 'uomo', 'va', 'vale', 'varia', 'varie', 'vario', 'verso', 'vi', 'via',
	'vicino', 'visto', 'vita', 'voi', 'volta', 'vostra', 'vostre', 'vostri', 'vostro', 'esso', 'egli', 'ella', 'si', 'ci', 'ne',
	'nè', 'né', 'ce',
];


module.exports = STOPWORDS;
