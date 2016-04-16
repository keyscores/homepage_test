import { Template } from 'meteor/templating';
import "./newhome.html"

var langSetting = function (){
  return Session.get('language')
}

var texts =  [
  {
    section: "maintitle",
    title: { en: "DISTRIBUTE YOUR MOVIES ON ITUNES",
        sp: "DISTRIBUE TUS PELICULAS EN ITUNES",
        pt: "DISTRIBUA SEUS FILMES NO ITUNES"
    },
    content:{ en: "WE KNOW LATIN BETTER",
        sp: "CONOCEMOS LATAM MEJOR",
        pt: "CONHECEMOS LATAM MELHOR"
    }
  },
  {
    section: "contact",
    title: { en: "SEND A MESSAGE TO US",
        sp: "ENVIE UN MENSAGE",
        pt: "MANDE UMA MENSAGEM"
    },
    content:{ en: "OR CALL US",
        sp: "CONOCEMOS LATAM MEJOR",
        pt: "CONHECEMOS LATAM MELHOR"
    }
  },

  {
    section: "international",
    title: { en: "INTERNATIONAL ITUNES",
        sp: "DISTRIBUE TUS PELICULAS EN ITUNES",
        pt: "DISTRIBUA SEUS FILMES NO ITUNES"
    },
    content:{ en: "WE KNOW LATIN BETTER",
        sp: "CONOCEMOS LATAM MEJOR",
        pt: "CONHECEMOS LATAM MELHOR"
    },
    image: "/images/icon-itunes-p.png"
  },
  {
    section: "material",
    title: { en: "MATERIAL & DELIVERIES",
        sp: "DISTRIBUE TUS PELICULAS EN ITUNES",
        pt: "DISTRIBUA SEUS FILMES NO ITUNES"
    },
    content:{ en: "WE KNOW LATIN BETTER",
        sp: "CONOCEMOS LATAM MEJOR",
        pt: "CONHECEMOS LATAM MELHOR"
    },
    image: "/images/icon-material-p.png"

  },
  {
    section: "pricing",
    title: { en: "PRICING & MARKETING",
        sp: "DISTRIBUE TUS PELICULAS EN ITUNES",
        pt: "DISTRIBUA SEUS FILMES NO ITUNES"
    },
    content:{ en: "WE KNOW LATIN BETTER",
        sp: "CONOCEMOS LATAM MEJOR",
        pt: "CONHECEMOS LATAM MELHOR"
    },
    image: "/images/icon-pricing-p.png"

  },
  {
    section: "currency",
    title: { en: "MULTI CURRENCY MANAGEMENT & PAYMENTS",
        sp: "DISTRIBUE TUS PELICULAS EN ITUNES",
        pt: "DISTRIBUA SEUS FILMES NO ITUNES"
    },
    content:{ en: "WE KNOW LATIN BETTER",
        sp: "CONOCEMOS LATAM MEJOR",
        pt: "CONHECEMOS LATAM MELHOR"
    },
    image: "/images/icon-money-p.png"

  },
  {
    section: "reports",
    title: { en: "ONLINE REPORTS",
        sp: "DISTRIBUE TUS PELICULAS EN ITUNES",
        pt: "DISTRIBUA SEUS FILMES NO ITUNES"
    },
    content:{ en: "WE KNOW LATIN BETTER",
        sp: "CONOCEMOS LATAM MEJOR",
        pt: "CONHECEMOS LATAM MELHOR"
    },
    image: "/images/icon-reports-p.png"

  }

]


Template.newhome.helpers({
  text: function( section , component ){

    var language = langSetting()
    var useText = _.findWhere( texts , { section: section } )
    return useText[component][language]
  },
  listOfSections: function(){
    var filter = _.filter( texts, function(e){
      return !_.contains ( [ "maintitle","contact" ], e.section )
    });

    // console.log('filter', filter);
    return filter
  }
});

Template.newhome.events({
  "click .language": function(event, template){
    console.log(event.target.id);
      Session.set('language', event.target.id )
  }
});


Template.newhome.rendered = function(){
  Session.set("language", 'en')
}

Template.contact.helpers({
  text: function( section , component ){
    var language = langSetting()
    var useText = _.findWhere( texts , { section: section } )
    return useText[component][language]
  },
});
