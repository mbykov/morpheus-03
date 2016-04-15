var utils = require('../utils');
var desc = 'tal'; // ri
// taddhita-tal - word is used in feminine -  impersonal substantives
// http://sanskrit.jnu.ac.in/elearning/thak_pratyay.html
// make test g=tadd_tal_

var tests = [

    ['laGu', 'लघु', 'laGutA', 'लघुता'],
    ['amla', 'अम्ल', 'amlatA', 'अम्लता'],
    ['asura', 'असुर', 'asUratA', 'असूरता'],
    ['anukUla', 'अनुकूल', 'anukUlatA', 'अनुकूलता'],
    ['AtmIya', 'आत्मीय', 'AtmIyatA', 'आत्मीयता'],
    ['ISvara', 'ईश्वर', 'ISvaratA', 'ईश्वरता'],
    ['uzRa', 'उष्ण', 'uzRatA', 'उष्णता'],
    ['ucca', 'उच्च', 'uccatA', 'उच्चता'],
    ['fju', 'ऋजु', 'fjutA', 'ऋजुता'],
    ['kawu', 'कटु', 'kawutA', 'कटुता'],
    ['eka', 'एक', 'ekatA', 'एकता'],
    ['kuSala', 'कुशल', 'kuSalatA', 'कुशलता'],
    ['komala', 'कोमल', 'komalatA', 'कोमलता'],
    ['kazAya', 'कषाय', 'kazAyatA', 'कषायता'],
    ['kaWora', 'कठोर', 'kaWoratA', 'कठोरता'],
    ['kavi', 'कवि', 'kavitA', 'कविता'],
    ['kurUpa', 'कुरूप', 'kurUpatA', 'कुरूपता'],
    ['kfSa', 'कृश', 'kfSatA', 'कृशता'],
    ['kfzRa', 'कृष्ण', 'kfzRatA', 'कृष्णता'],
    ['krUra', 'क्रूर', 'krUratA', 'क्रूरता'],
    ['kfpaRa', 'कृपण', 'kfpaRatA', 'कृपणता'],
    ['kanizWa', 'कनिष्ठ', 'kanizWatA', '=कनिष्ठता'],
    ['dAsa', 'दास', 'dAsatA', 'दासता'],
    ['Kinna', 'खिन्न', 'KinnatA', 'खिन्नता'],
    ['gurU', 'गुरू', 'gurUtA', 'गुरूता'],
    ['go', 'गो', 'gotA', 'गोता'],
    ['cArU', 'चारू', 'cArUtA', 'चारूता'],
    ['citra', 'चित्र', 'citratA', 'चित्रता'],
    ['capala', 'चपल', 'capalatA', 'चपलता'],
    ['caMcala', 'चंचल', 'caMcalatA', 'चंचलता'],
    ['Cinna', 'छिन्न', 'CinnatA', 'छिन्नता'],
    ['Cala', 'छल', 'CalatA', 'छलता'],
    ['ja', 'जड़', 'jatA', 'जड़ता'],
    ['jAtIya', 'जातीय', 'jAtIyatA', 'जातीयता'],
    ['durjana', 'दुर्जन', 'durjanatAtA', 'दुर्जनताता'],
    ['duzwa', 'दुष्ट', 'duzwatA', 'दुष्टता'],
    ['durlaBa', 'दुर्लभ', 'durlaBatA', 'दुर्लभता'],
    ['dIrGa', 'दीर्घ', 'dIrGatA', 'दीर्घता'],
    ['divya', 'दिव्य', 'divyatA', 'दिव्यता'],
    ['df', 'दृढ़', 'dftA', 'दृढ़ता'],
    ['dIna', 'दीन', 'dInatA', 'दीनता'],
    ['deva', 'देव', 'devatA', 'देवता'],
    ['dakza', 'दक्ष', 'dakzatA', 'दक्षता'],
    ['nija', 'निज', 'nijatA', 'निजता'],
    ['nIca', 'नीच', 'nIcatA', 'नीचता'],
    ['pfzWa', 'पृष्ठ', 'pfzWatA', 'पृष्ठता'],
    ['pawu', 'पटु', 'pawutA', 'पटुता'],
    ['pIna', 'पीन', 'pInatA', 'पीनता'],
    ['purUza', 'पुरूष', 'purUzatA', 'पुरूषता'],
    ['pravIRa', 'प्रवीण', 'pravIRatA', 'प्रवीणता'],
    ['pUrRa', 'पूर्ण', 'pUrRatA', 'पूर्णता'],
    ['para', 'पर', 'paratA', 'परता'],
    ['pfTu', 'पृथु', 'pfTutA', 'पृथुता'],
    ['piSAca', 'पिशाच', 'piSAcatA', 'पिशाचता'],
    ['priya', 'प्रिय', 'priyatA', 'प्रियता'],
    ['paSu', 'पशु', 'paSutA', 'पशुता'],
    ['Pala', 'फल', 'PalatA', 'फलता'],
    ['banDu', 'बन्धु', 'banDutA', 'बन्धुता'],
    ['brAhmaRa', 'ब्राह्मण', 'brAhmaRatA', 'ब्राह्मणता'],
    ['vaDira', 'वधिर', 'vaDiratA', 'वधिरता'],
    ['BIrU', 'भीरू', 'BIrUtA', 'भीरूता'],
    ['Binna', 'भिन्न', 'BinnatA', 'भिन्नता'],
    ['mitra', 'मित्र', 'mitratA', 'मित्रता'],
    ['manuzya', 'मनुष्य', 'manuzyatA', 'मनुष्यता'],
    ['mAnava', 'मानव', 'mAnavatA', 'मानवता'],
    ['mahat', 'महत्', 'mahattA', 'महत्ता'],
    ['mfdu', 'मृदु', 'mfdutA', 'मृदुता'],
    ['mUrKa', 'मूर्ख', 'mUrKatA', 'मूर्खता'],
    ['rUzwa', 'रूष्ट', 'rUzwatA', 'रूष्टता'],
    ['ripu', 'रिपु', 'riputA', 'रिपुता'],

    ['vESya', 'वैश्य', 'vESyatA', 'वैश्यता'],
    ['vidvas', 'विद्वस्', 'vidvatA', 'विद्वता'],
    ['vIra', 'वीर', 'vIratA', 'वीरता'],
    ['viSAla', 'विशाल', 'viSAlatA', 'विशालता'],
    ['vizAda', 'विषाद', 'vizAdatA', 'विषादता'],
    ['vizaRRa', 'विषण्ण', 'vizaRRatA', 'विषण्णता'],
    ['vakra', 'वक्र', 'vakratA', 'वक्रता'],
    ['vipula', 'विपुल', 'vipulatA', 'विपुलता'],
    ['SUra', 'शूर', 'SUratA', 'शूरता'],
    ['Satru', 'शत्रु', 'SatrutA', 'शत्रुता'],
    ['SUdra', 'शूद्र', 'SudratA', 'शुद्रता'],
    ['SiSu', 'शिशु', 'SiSutA', 'शिशुता'],
    ['Suzka', 'शुष्क', 'SuzkatA', 'शुष्कता'],
    ['SUnya', 'शून्य', 'SUnyatA', 'शून्यता'],
    ['SItala', 'शीतल', 'SItalatA', 'शीतलता'],
    ['SuBra', 'शुभ्र', 'SuBratA', 'शुभ्रता'],
    ['SuBa', 'शुभ', 'SuBatA', 'शुभता'],
    ['Sukla', 'शुक्ल', 'SuklatA', 'शुक्लता'],
    ['sahAya', 'सहाय', 'sahAyatA', 'सहायता'],
    ['sundara', 'सुन्दर', 'sundaratA', 'सुन्दरता'],
    ['sADu', 'साधु', 'sADutA', 'साधुता'],
    ['sva', 'स्व', 'svatA', 'स्वता'],
    ['svADIna', 'स्वाधीन', 'svADInatA', 'स्वाधीनता'],
    ['snigDa', 'स्निग्ध', 'snigDatA', 'स्निग्धता'],
    ['sajjana', 'सज्जन', 'sajjanatA', 'सज्जनता'],
    ['sOmya', 'सौम्य', 'sOmyatA', 'सौम्यता'],
    ['sama', 'सम', 'samatA', 'समता'],
    ['samAna', 'समान', 'samAnatA', 'समानता'],
    ['sTira', 'स्थिर', 'sTiratA', 'स्थिरता'],
    ['hIna', 'हीन', 'hInatA', 'हीनता'],

];

describe(desc, function() {
    utils.taddhita(tests, desc);
    //utils.tadd_tal(tests, desc);
});