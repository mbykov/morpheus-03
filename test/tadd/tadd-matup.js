// http://sanskrit.jnu.ac.in/elearning/pratyay.html
// मतुप् (मत्, वत्) - it has that or that is in it

var utils = require('../utils');
var desc = 'matup';

var tests = [

    [ 'guRa', 'गुण', 'गुणवत्', 'गुणवान्', 'गुणवती', 'गुणवत्' ],
    [ 'Pala', 'फल', 'फलवत्', 'फलवान्', 'फलवती', 'फलवत्' ],
    [ 'Dana', 'धन', 'धनवत्', 'धनवान्', 'धनवती', 'धनवत्' ],
    [ 'rasa', 'रस', 'रसवत्', 'रसवान्', 'रसवती', 'रसवत्' ],
    [ 'jYAna', 'ज्ञान', 'ज्ञानवत्', 'ज्ञानवान्', 'ज्ञानवती', 'ज्ञानवत्' ],
    [ 'arTa', 'अर्थ', 'अर्थवत्', 'अर्थवान्', 'अर्थवती', 'अर्थवत्' ],
    [ 'bala', 'बल', 'बलवत्', 'बलवान्', 'बलवती', 'बलवत्' ],

    [ 'ganDa', 'गन्ध', 'गन्धवत्', 'गन्धवान्', 'गन्धवती', 'गन्धवत्' ],
    [ 'somya', 'सोम्य', 'सोम्यवत्', 'सोम्यवान्', 'सोम्यवती', 'सोम्यवत्' ],
    [ 'sadAcAra', 'सदाचार', 'सदाचारवत्', 'सदाचारवान्', 'सदाचारवती', 'सदाचारवत्' ],
    [ 'jala', 'जल', 'जलवत्', 'जलवान्', 'जलवती', 'जलवत्' ],
    [ 'kaWora', 'कठोर', 'कठोरवत्', 'कठोरवान्', 'कठोरवती', 'कठोरवत्' ],
    [ 'SIla', 'शील', 'शीलवत्', 'शीलवान्', 'शीलवती', 'शीलवत्' ],
    [ 'rUpa', 'रूप', 'रूपवत्', 'रूपवान्', 'रूपवती', 'रूपवत्' ],
    [ 'vitta', 'वित्त', 'वित्तवत्', 'वित्तवान्', 'वित्तवती', 'वित्तवत्' ],
    [ 'BAgya', 'भाग्य', 'भाग्यवत्', 'भाग्यवान्', 'भाग्यवती', 'भाग्यवत्' ],
    [ 'sUrya', 'सूर्य', 'सूर्यवत्', 'सूर्यवान्', 'सूर्यवती', 'सूर्यवत्' ],
    [ 'varRa', 'वर्ण', 'वर्णवत्', 'वर्णवान्', 'वर्णवती', 'वर्णवत्' ],
    [ 'parAkrama', 'पराक्रम', 'पराक्रमवत्', 'पराक्रमवान्', 'पराक्रमवती', 'पराक्रमवत्' ],
    [ 'ESvarya', 'ऐश्वर्य', 'ऐश्वर्यवत्', 'ऐश्वर्यवान्', 'ऐश्वर्यवती', 'ऐश्वर्यवत्' ],
    [ 'sparSa', 'स्पर्श', 'स्पर्शवत्', 'स्पर्शवान्', 'स्पर्शवती', 'स्पर्शवत्' ],
    [ 'vIrya', 'वीर्य', 'वीर्यवत्', 'वीर्यवान्', 'वीर्यवती', 'वीर्यवत्' ],
    [ 'sneha', 'स्नेह', 'स्नेहवत्', 'स्नेहवान्', 'स्नेहवती', 'स्नेहवत्' ],
    [ 'viSAla', 'विशाल', 'विशालवत्', 'विशालवान्', 'विशालवती', 'विशालवत्' ],
    [ 'Baga', 'भग', 'भगवत्', 'भगवान्', 'भगवती', 'भगवत्' ],
    [ 'sAhasa', 'साहस', 'साहसवत्', 'साहसवान्', 'साहसवती', 'साहसवत्' ],
    [ 'kzatriya', 'क्षत्रिय', 'क्षत्रियवत्', 'क्षत्रियवान्', 'क्षत्रियवती', 'क्षत्रियवत्' ],
    [ 'DyAna', 'ध्यान', 'ध्यानवत्', 'ध्यानवान्', 'ध्यानवती', 'ध्यानवत्' ],
    [ 'Sabda', 'शब्द', 'शब्दवत्', 'शब्दवान्', 'शब्दवती', 'शब्दवत्' ],
    [ 'viveka', 'विवेक', 'विवेकवत्', 'विवेकवान्', 'विवेकवती', 'विवेकवत्' ],
    [ 'Darma', 'धर्म', 'धर्मवत्', 'धर्मवान्', 'धर्मवती', 'धर्मवत्' ],
    [ 'aDikAra', 'अधिकार', 'अधिकारवत्', 'अधिकारवान्', 'अधिकारवती', 'अधिकारवत्' ],
    [ 'vikAra', 'विकार', 'विकारवत्', 'विकारवान्', 'विकारवती', 'विकारवत्' ],
    [ 'vfkza', 'वृक्ष', 'वृक्षवत्', 'वृक्षवान्', 'वृक्षवती', 'वृक्षवत्' ],
    [ 'loBa', 'लोभ', 'लोभवत्', 'लोभवान्', 'लोभवती', 'लोभवत्' ],

    // अपवाद Examples of the words ended with आ (आकारन्त शब्द) :

    [ 'dayA', 'दया', 'दयावत्', 'दयावान्', 'दयावती', 'दयावत्' ],
    [ 'kfpA', 'कृपा', 'कृपावत्', 'कृपावान्', 'कृपावती', 'कृपावत्' ],
    [ 'kriyA', 'क्रिया', 'क्रियावत्', 'क्रियावान्', 'क्रियावती', 'क्रियावत्' ],
    [ 'ASA', 'आशा', 'आशावत्', 'आशावान्', 'आशावती', 'आशावत्' ],
    [ 'mahimA', 'महिमा', 'महिमावत्', 'महिमावान्', 'महिमावती', 'महिमावत्' ],
    [ 'kzamA', 'क्षमा', 'क्षमावत्', 'क्षमावान्', 'क्षमावती', 'क्षमावत्' ],
    [ 'rakzA', 'रक्षा', 'रक्षावत्', 'रक्षावान्', 'रक्षावती', 'रक्षावत्' ],
    [ 'vidyA', 'विद्या', 'विद्यावत्', 'विद्यावान्', 'विद्यावती', 'विद्यावत्' ],
    [ 'mAlA', 'माला', 'मालावत्', 'मालावान्', 'मालावती', 'मालावत्' ],
    [ 'DArA', 'धारा', 'धारावत्', 'धारावान्', 'धारावती', 'धारावत्' ],
    [ 'lajjA', 'लज्जा', 'लज्जावत्', 'लज्जावान्', 'लज्जावती', 'लज्जावत्' ],
    [ 'SoBA', 'शोभा', 'शोभावत्', 'शोभावान्', 'शोभावती', 'शोभावत्' ],
    [ 'SiKA', 'शिखा', 'शिखावत्', 'शिखावान्', 'शिखावती', 'शिखावत्' ],
    [ 'meGa', 'मेघ', 'मेघवत्', 'मेघवान्', 'मेघवती', 'मेघवत्' ],
    [ 'kalA', 'कला', 'कलावत्', 'कलावान्', 'कलावती', 'कलावत्' ],
    [ 'praBA', 'प्रभा', 'प्रभावत्', 'प्रभावान्', 'प्रभावती', 'प्रभावत्' ],
    [ 'lIlA', 'लीला', 'लीलावत्', 'लीलावान्', 'लीलावती', 'लीलावत्' ],

    // examples of the words ended with इ and ई (इकारान्त शब्द) :

    [ 'budDi', 'बुद्धि', 'बुद्धिमत्', 'बुद्धिमान्', 'बुद्धिमती', 'बुद्धिमत्' ],
    [ 'mati', 'मति', 'मतिमत्', 'मतिमान्', 'मतिमती', 'मतिमत्' ],
    [ 'Sakti', 'शक्ति', 'शक्तिमत्', 'शक्तिमान्', 'शक्तिमती', 'शक्तिमत्' ],
    [ 'Bakti', 'भक्ति', 'भक्तिमत्', 'भक्तिमान्', 'भक्तिमती', 'भक्तिमत्' ],
    [ 'agni', 'अग्नि', 'अग्निमत्', 'अग्निमान्', 'अग्निमती', 'अग्निमत्' ],
    [ 'gati', 'गति', 'गतिमत्', 'गतिमान्', 'गतिमती', 'गतिमत्' ],
    [ 'Dvani', 'ध्वनि', 'ध्वनिमत्', 'ध्वनिमान्', 'ध्वनिमती', 'ध्वनिमत्' ],
    [ 'Dfti', 'धृति', 'धृतिमत्', 'धृतिमान्', 'धृतिमती', 'धृतिमत्' ],
    [ 'dIpti', 'दीप्ति', 'दीप्तिमत्', 'दीप्तिमान्', 'दीप्तिमती', 'दीप्तिमत्' ],
    [ 'prIti', 'प्रीति', 'प्रीतिमत्', 'प्रीतिमान्', 'प्रीतिमती', 'प्रीतिमत्' ],
    [ 'vahni', 'वह्नि', 'वह्निमत्', 'वह्निमान्', 'वह्निमती', 'वह्निमत्' ],
    [ 'Sruti', 'श्रुति', 'श्रुतिमत्', 'श्रुतिमान्', 'श्रुतिमती', 'श्रुतिमत्' ],
    [ 'smfti', 'स्मृति', 'स्मृतिमत्', 'स्मृतिमान्', 'स्मृतिमती', 'स्मृतिमत्' ],
    [ 'dfzwi', 'दृष्टि', 'दृष्टिमत्', 'दृष्टिमान्', 'दृष्टिमती', 'दृष्टिमत्' ],
    [ 'kfti', 'कृति', 'कृतिमत्', 'कृतिमान्', 'कृतिमती', 'कृतिमत्' ],
    [ 'BIti', 'भीति', 'भीतिमत्', 'भीतिमान्', 'भीतिमती', 'भीतिमत्' ],

    [ 'Urmi', 'ऊर्मि', 'ऊर्मिमत्', 'ऊर्मिमान्', 'ऊर्मिमती', 'ऊर्मिमत्' ],
    [ 'BUmi', 'भूमि', 'भूमिमत्', 'भूमिमान्', 'भूमिमती', 'भूमिमत्' ],
    [ 'kfmi', 'कृमि', 'कृमिमत्', 'कृमिमान्', 'कृमिमती', 'कृमिमत्' ],
    [ 'DI', 'धी', 'धीमत्', 'धीमान्', 'धीमती', 'धीमत्' ],
    [ 'SrI', 'श्री', 'श्रीमत्', 'श्रीमान्', 'श्रीमती', 'श्रीमत्' ],
    [ 'hrI', 'ह्री', 'ह्रीमत्', 'ह्रीमान्', 'ह्रीमती', 'ह्रीमत्' ],
    [ 'nadI', 'नदी', 'नदीमत्', 'नदीमान्', 'नदीमती', 'नदीमत्' ],

    //अपवाद (exception) लक्ष्मी लक्ष्मीवत् लक्ष्मीवान् लक्ष्मीवती लक्ष्मीवत्
    // Examples of the words ended wih उ (उकारान्त शब्द) :

    [ 'BAnu', 'भानु', 'भानुमत्', 'भानुमान्', 'भानुमती', 'भानुमत्' ],
    [ 'maDu', 'मधु', 'मधुमत्', 'मधुमान्', 'मधुमती', 'मधुमत्' ],
    [ 'aMSu', 'अंशु', 'अंशुमत्', 'अंशुमान्', 'अंशुमती', 'अंशुमत्' ],
    [ 'sAnu', 'सानु', 'सानुमत्', 'सानुमान्', 'सानुमती', 'सानुमत्' ],
    [ 'hanu', 'हनु', 'हनुमत्', 'हनुमान्', 'हनुमती', 'हनुमत्' ],
    [ 'ikzu', 'इक्षु', 'इक्षुमत्', 'इक्षुमान्', 'इक्षुमती', 'इक्षुमत्' ],
    [ 'vasu', 'वसु', 'वसुमत्', 'वसुमान्', 'वसुमती', 'वसुमत्' ],
    [ 'viDu', 'विधु', 'विधुमत्', 'विधुमान्', 'विधुमती', 'विधुमत्' ],

    // Examples of the words ended with ऊ (ऊकारान्त शब्द) :

    [ 'vaDU', 'वधू', 'वधूमत्', 'वधूमान्', 'वधूमती', 'वधूमत्' ],

    // Examples of the words ended with ऋ (ऋकारान्त शब्द) :

    [ 'pitf', 'पितृ', 'पितृमत्', 'पितृमान्', 'पितृमती', 'पितृमत्' ],
    [ 'mAtf', 'मातृ', 'मातृमत्', 'मातृमान्', 'मातृमती', 'मातृमत्' ],
    [ 'BrAtf', 'भ्रातृ', 'भ्रातृमत्', 'भ्रातृमान्', 'भ्रातृमती', 'भ्रातृमत्' ],
    [ 'jAmAtf', 'जामातृ', 'जामातृमत्', 'जामातृमान्', 'जामातृमती', 'जामातृमत्' ],
    [ 'svasf', 'स्वसृ', 'स्वसृमत्', 'स्वसृमान्', 'स्वसृमती', 'स्वसृमत्' ],

    // Examples of the words ended with ओ (ओकारान्त शब्द) :

    [ 'go', 'गो', 'गोमत्', 'गोमान्', 'गोमती', 'गोमत्' ],

    // Examples of the words ended with consonant (हलन्त शब्द) :

    [ 'Ayus', 'आयुस्', 'आयुस्मत्', 'आयुस्मान्', 'आयुस्मती', 'आयुस्मत्' ],
    [ 'Danus', 'धनुस्', 'धनुस्मत्', 'धनुस्मान्', 'धनुस्मती', 'धनुस्मत्' ],
    [ 'garut', 'गरुत्', 'गरुत्मत्', 'गरुत्मान्', 'गरुत्मती', 'गरुत्मत्' ],

    // In some words ended with consonant, when 'अ' becomes the उपधा (penultimate) of these words, the 'म' becomes 'व' of the Matup affix and thus used 'वत्' :

    [ 'naBas', 'नभस्', 'नभस्वत्', 'नभस्वान्', 'नभस्वती', 'नभस्वत्' ],
    [ 'yaSas', 'यशस्', 'यशस्वत्', 'यशस्वान्', 'यशस्वती', 'यशस्वत्' ],
    [ 'payas', 'पयस्', 'पयस्वत्', 'पयस्वान्', 'पयस्वती', 'पयस्वत्' ],
    [ 'vidyut', 'विद्युत्', 'विद्युत्वत्', 'विद्युत्वान्', 'विद्युत्वती', 'विद्युत्वत्' ],
    [ 'saras', 'सरस्', 'सरस्वत्', 'सरस्वान्', 'सरस्वती', 'सरस्वत्' ],
    [ 'manas', 'मनस्', 'मनस्वत्', 'मनस्वान्', 'मनस्वती', 'मनस्वत्' ],
    [ 'ojas', 'ओजस्', 'ओजस्वत्', 'ओजस्वान्', 'ओजस्वती', 'ओजस्वत्' ],
    [ 'varcas', 'वर्चस्', 'वर्चस्वत्', 'वर्चस्वान्', 'वर्चस्वती', 'वर्चस्वत्' ],
    [ 'marut', 'मरुत्', 'मरुत्वत्', 'मरुत्वान्', 'मरुत्वती', 'मरुत्वत्' ],
    [ 'Atman', 'आत्मन्', 'आत्मन्वत्', 'आत्मन्वान्', 'आत्मन्वती', 'आत्मन्वत्' ],
    [ 'BAs', 'भास्', 'भास्वत्', 'भास्वान्', 'भास्वती', 'भास्वत्' ],

];

describe(desc, function() {
    utils.tadd_matup(tests, desc);
});