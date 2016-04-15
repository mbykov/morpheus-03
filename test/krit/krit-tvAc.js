var utils = require('../utils');
//var desc = 'avyaya'; //
var desc = 'ktvAc';
// dhatu, translation, '', '', ktvAc
// то же, что в krit-avyaya.js, но даны только значения gerund, ktvAc, - tvA и -ल्यप्-lyap-pratyaya
// http://sanskrit.jnu.ac.in/elearning/katwa_pratyay.html
// чтобы запустить только эти, нужно отрубить те - теперь tvAc

var tests = [

    ['भू', 'been', '', '', 'भूत्वा'],
    ['कृ', 'done', '', '', 'कृत्वा'],
    ['तॄ', 'swum', '', '', 'तीर्त्वा'], // MW: तॄ, но не tf-तृ - заменил здесь
    ['पठ्', 'read', '', '', 'पठित्वा'],
    ['वच्', 'said', '', '', 'उक्त्वा'],
    ['स्वप्', 'slept', '', '', 'सुप्त्वा'],
    ['यज्', 'sacrificed', '', '', 'इष्ट्वा'],
    ['त्यज्', 'abandoned', '', '', 'त्यक्त्वा'],
    ['गम्', 'gone', '', '', 'गत्वा'],
    ['हन्', 'killed', '', '', 'हत्वा'],
    ['विद्', 'known', '', '', 'विदित्वा'],
    ['अस्', 'been', '', '', 'भूत्वा'],
    ['पा', 'drunk', '', '', 'पीत्वा'],
    ['ज्ञा', 'known', '', '', 'ज्ञात्वा'],
    ['दा', 'given', '', '', 'दत्वा'],
    ['जि', 'conquered', '', '', 'जित्वा'],

    ['शी', 'slept', '', '', 'शयित्वा'],
    ['श्रु', 'heard', '', '', 'श्रुत्वा'],
    ['ब्रू', 'spoken', '', '', 'उक्त्वा'], // WTF?
    ['चुर्', 'stolen', '', '', 'चोरयित्वा'],
    ['ग्रह्', 'taken', '', '', 'गृहीत्वा'],
    ['सेव्', 'served', '', '', 'सेवित्वा'],
    ['सह्', 'forborne', '', '', 'सहित्वा'],
    ['यत्', 'attempted', '', '', 'यतित्वा'],
    ['स्था', 'existed', '', '', 'स्थित्वा'],
    ['स्ना', 'bathed', '', '', 'स्नात्वा'],
    ['घ्रा', 'smelled', '', '', 'घ्रात्वा'],

    ['नी', 'led', '', '', 'नीत्वा'],
    ['क्री', 'bought', '', '', 'क्रीत्वा'],
    ['स्तु', 'worshipped', '', '', 'स्तुत्वा'],
    ['स्मृ', 'remembered', '', '', 'स्मृत्वा'],
    ['मृ', 'died', '', '', 'मृत्वा'],
    ['हृ', 'carried', '', '', 'हृत्वा'],
    ['चल्', 'walked', '', '', 'चलित्वा'],
    ['वप्', 'sowed', '', '', 'उप्त्वा'],
    ['वस्', 'dwelled', '', '', 'उषित्वा'],
    ['क्रीड्', 'bought', '', '', 'क्रीडित्वा'],
    ['मिल्', 'met', '', '', 'मिलित्वा'],
    ['वह्', 'borne', '', '', 'ऊढ्वा'],
    ['व्यध्', 'hurt', '', '', 'विद्ध्वा'],
    ['दुह्', 'milked', '', '', 'दुग्ध्वा'],
    ['रुह्', 'risen', '', '', 'रूढ्वा'],
    ['अर्च्', 'worshipped', '', '', 'अर्चित्वा'],
    //['प्रच्छ्', 'asked', '', '', 'पृष्ट्वा'], // FIXME: MW:
    ['पच्', 'cooked', '', '', 'पक्त्वा'],
    ['नम्', 'bowed', '', '', 'नत्वा'],
    ['जन्', 'produced', '', '', 'जनित्वा'],
    ['क्षिप्', 'thrown', '', '', 'क्षिप्त्वा'],

    ['छिद्', 'cut', '', '', 'छित्वा'],
    ['सिच्', 'sprinkled', '', '', 'सिक्त्वा'],
    ['चिन्त्', 'thought', '', '', 'चिन्तयित्वा'],
    //['दण्ड्', 'punished', '', '', 'दण्डयित्वा'], // FIXME: MW: нет такого
    ['आप्', 'obtained', '', '', 'आप्त्वा'],
    ['लभ्', 'obtained', '', '', 'लब्ध्वा'],
    ['दह्', 'burnt', '', '', 'दग्ध्वा'],
    ['भिद्', 'divided', '', '', 'भित्त्वा'],
    ['मुच्', 'liberated', '', '', 'मुक्त्वा'],
    ['इष्', 'wished', '', '', 'इष्ट्वा'],
    ['दृश्', 'seen', '', '', 'दृष्ट्वा'],
    ['सृज्', 'created', '', '', 'सृष्ट्वा'],
    ['कथ्', 'told', '', '', 'कथयित्वा'],
    ['भक्ष्', 'eaten', '', '', 'भक्षयित्वा'],
    ['विश्', 'entered', '', '', 'विशित्वा'],
    ['स्पृश्', 'touched', '', '', 'स्पृष्ट्वा'],
    ['नृत्', 'danced', '', '', 'नर्तित्वा'],
    ['गण्', 'counted', '', '', 'गणयित्वा'],
    ['तड्', 'beaten', '', '', 'ताडयित्वा'],
    ['भज्', 'served', '', '', 'भक्त्वा'],
    ['ह्वे', 'called', '', '', 'हुत्वा'],


    // // lyap

    // ['वि+ग्रह', 'received', '', '', 'विगृह्य'],
    // ['वि+क्री', 'bought', '', '', 'विक्रीय'],
    // ['आ+नी', 'brought', '', '', 'आनीय'],
    // ['आ+हृ', 'brought', '', '', 'आहृत्य'],
    // ['वि+हस्', 'laughed', '', '', 'विहस्य'],
    // ['वि+रच्', 'arranged', '', '', 'विरच्य'],
    // ['वि+लिख्', 'written', '', '', 'विलिख्य'],
    // ['वि+छिद्', 'cut', '', '', 'विच्छिद्य'],
    // ['उप+', 'उपगम्य', '', '', 'attained', 'गम्'],
    // ['उत्+डी', 'flown', '', '', 'उड्डीय'],
    // ['सम्+भू', 'been', '', '', 'सम्भूय'],
    // ['प्र+आप्', 'obtained', '', '', 'प्राप्य'],
    // ['प्र+क्रीड्', 'played', '', '', 'प्रक्रीड्य'],
    // ['वि+चिन्त्', 'thought', '', '', 'विचिन्त्य'],
    // ['अव्+गम्', 'known', '', '', 'अवगम्य'],
    // ['परि+भ्रम्', 'travelled', '', '', 'परिभ्रम्य'],
    // ['नि+शम्', 'heard', '', '', 'निशम्य'],
    // ['परि+त्यज्', 'abandoned', '', '', 'परित्यज्य'],
    // ['अनु+इष्', 'searched', '', '', 'अन्विष्य'],

    // ['आ+घ्रा', 'smelled', '', '', 'आघ्राय'],
    // ['वि+ज्ञा', 'known', '', '', 'विज्ञाय'],
    // ['वि+भिद्', 'divided', '', '', 'विभिद्य'],
    // ['उप+लभ्', 'obtained', '', '', 'उपलभ्य'],
    // ['उप+कृ', 'obliged', '', '', 'उपकृत्य'],
    // ['उप+दृ', 'demolished', '', '', 'विदार्य'],
    // ['अव+रूध्', 'obstructed', '', '', 'अवरुध्य'],
    // ['वि+हा', 'abandoned', '', '', 'विहाय'],
    // ['अभि+नन्द्', 'greeted', '', '', 'अभिनन्द्य'],
    // ['प्र+नम्', 'bowed', '', '', 'to', 'प्रणम्य'],
    // ['वि+मुच्', 'released', '', '', 'विमुच्य'],
    // ['प्र+विश्', 'entered', '', '', 'प्रविश्य'],
    // ['आ+दिश्', 'ordered', '', '', 'आदिश्य'],
    // ['आ+रभ्', 'started', '', '', 'आरभ्य'],
    // ['आ+दा', 'taken', '', '', 'आदाय'],
    // ['प्र+ईक्ष्', 'seen', '', '', 'प्रेक्ष्य'],
    // ['सम्+तृ', 'swum', '', '', 'सन्तीर्य'],
    // ['आ+ह्वे', 'called', '', '', 'आहूय'],
    // ['अधि+इ', 'remembered', '', '', 'अधीत्य'],
    // ['प्र+स्तु', 'praised', '', '', 'प्रस्तूय'],
    // ['आ+पृ', 'filled', '', '', 'आपूर्य'],
    // ['आ+पा', 'drunk', '', '', 'आपीय'],
    // ['वि+तन्', 'spread', '', '', 'वितत्य'],
    // ['आ+क्रम्', 'प्र+क्षिप्', '', '', 'प्रक्षिप्य', 'thrown', 'आक्रम्य'], //
    // //['उत्+खन्', 'उत्खाय', '', ''],
    // ['आ+गम्', 'dug', '', '', 'आगम्य'],
    // ['प्र+चल्', 'walked', '', '', 'प्रचल्य'],
    // ['वि+जि', 'conquered', '', '', 'विजित्य'],
    // ['उत्+छिद्', 'cut', '', '', 'उच्छिद्य'],

    // ['प्र+ज्वल्', 'burned', '', '', 'प्रज्वल्य'],
    // ['उत्+तृ', 'passed', '', '', 'उत्तीर्य'],
    // ['आ+धृ', 'hold', '', '', 'आधृत्य'],
    // ['नि+पत्', 'fallen', '', '', 'निपत्य'],
    // ['वि+हस्', 'laughed', '', '', 'विहस्य'],
    // ['नि+शम्', 'heard', '', '', 'निशम्य'],
    // ['नि+हन्', 'called', '', '', 'निहत्य'],
    // ['वि+सृज्', 'thrown', '', '', 'विसृज्य'],
    // ['वि+श्वस्', 'confided', '', '', 'in', 'विश्वस्य'],

    // без перевода


    // ['वि+', 'रम्', 'विरम्य'],
    // ['वि+रच्', 'विरच्य'],
    // ['सम्+यम्', 'संयम्य'],
    // ['अनु+इष्', 'अन्विष्य'],
    // ['नि+धा', 'निधाय'],
    // ['आ+श्रि', 'आश्रित्य'],
    // ['आ+हृ', 'आहृत्य'],
    // ['निर्+दिश्', 'निर्दिश्य'],
    // ['आ+क्रम्', 'आक्रम्य'],
    // ['आ+कृष्', 'आकृष्य'],
    // ['वि+नश्', 'विनश्य'],
    // ['आ+नी', 'आनीय'],
    // ['सम्+दिश्', 'सन्दिश्य'],
    // ['उप+हस्', 'उपहस्य'],
    // ['सम्+ईक्ष्', 'समीक्ष्य'],
    // ['वि+रच्', 'विरच्य'],
    // ['वि+लिख्', 'विलिख्य'],
    // ['वि+भूष्', 'विभूष्य'],
    // ['उप+गम्', 'उपगम्य'],
    // ['प्र्+नम्', 'प्रणम्य'],
    // ['प्र+पद्', 'प्रपद्य'],
    // ['अव+गम्', 'अवगम्य'],
    // ['अव+नम्', 'अवनम्य'],
    // ['आ+इ', 'एत्य'],
    // ['निस्+क्रम्', 'निष्क्रम्य'],
    // ['वि+भज्', 'विभज्य'],
    // ['उप+दिश्', 'उपदिश्य'],

];

describe(desc, function() {
    utils.kridantaAvyaya(tests, desc);
});