//ici mes fonctions

// les revenues de l'Adulte haandicapé
const revenuAnuelleAP1 = 0;
const epargneAnnelleP1 =  0;
const pensionAlimentaireAnnuelleP1 =  -0 ;

const totalRevenuAnnuelleP1 = 
    revenuAnuelleAP1 + 
    epargneAnnelleP1 + 
    pensionAlimentaireAnnuelleP1
;

console.log(`revenu annuelle du P1 = ` + totalRevenuAnnuelleP1)

// les Revenues du Conjoint
const revenuAnuelleP2 = 20000 ;
const epargneAnnelleP2 =   0;
const pensionAlimentaireAnnuelleP2 =  0 ;

const totalRevenuAnnuelleP2 = 
    revenuAnuelleP2 + 
    epargneAnnelleP2 + 
    pensionAlimentaireAnnuelleP2
;

console.log(`revenu annuelle du P2 = ` +totalRevenuAnnuelleP2);

// Les revenues de l'enfant
const totalRevenuAnnuelleEnfant = 0;

console.log(`revenu annuelle de l'enfant = ` +totalRevenuAnnuelleEnfant)


// les revenues total du foyer
const totalRevenuAnnuelleFoyer = 
    Number(totalRevenuAnnuelleP1) + 
    Number(totalRevenuAnnuelleP2 ) +
    Number(totalRevenuAnnuelleEnfant);

console.log(`revenu total annuelle du foyer = ` +totalRevenuAnnuelleFoyer)

// les montants officiels
const smicMensuelle = 1500;
const smic140Mensuelle = ( smicMensuelle * 140/100 );

const aahMensuelle = 860 ;

const mva = 104.77;

console.log('le SMIC a 140% = ' + smic140Mensuelle)

// Les Conditions
const invalideP1 = true;
const invalideP2 = false;

const activiteP1 = false;
const activiteP2 = true;

const taux80P1 = true;
const taux80P2 = false;

const logement = true ;

const apl = true;

const aahAnuelle = (Number(aahMensuelle)) * 12 ;

console.log(`montant annuelle aah  = ` +aahAnuelle)


//const plafondAahMensuelle = function (params) {
//    if (invalideP1 === true,
//        );
//    
//}