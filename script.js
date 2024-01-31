// Inserisci la tua logica di cambio lingua qui
function changeLanguage(lang) {
    var elements = document.querySelectorAll('[data-lang]');

    elements.forEach(function(element) {
        var translations = translationsData[lang][element.dataset.lang];
        if (translations) {
            element.textContent = translations;
        }
    });
}

// Dati di traduzione
var translationsData = {
    'it': {
        'about': 'Su di me',
        'experiences': 'Esperienze',
        'projects': 'Progetti',
        'contactme':'Contattami',
        'in construction':'Pagina in costruzione...',
        'empty':'Ancora nulla per il momento :(',
        'description':"Ciao, mi chiamo Jacopo e sono uno studente di cybersecurity appassionato di tecnologia, informatica, musica e videogiochi. Mi sono diplomato in informatica e telecomunicazioni con specializzazione informatica e ora sto frequentando un corso di cybersecuriy presso un ITS. Ho ottime conoscenze di networking, virtualizzazione, uso dei sistemi GNU/Linux e database. So programmare in C++, Java, PHP, MySql, JavaScript e anche HTML, CSS. Possiedo eccellenti capacità di teamworking, problem solving, pensiero analitico, autoapprendimento, comunicazione ed empatia. Mi ritengo una persona precisa, attenta ai dettagli e simpatica :) Nel tempo libero mi piace giocare ai videogiochi, suonare il sassofono o guardare film. E con questa piccola presentazione spero di essermi rappresentato al meglio e di aver attirato la tua attenzione :D"
        // Aggiungi altre traduzioni se necessario
    },
    'en': {
        'about': 'About Me',
        'experiences': 'Experiences',
        'projects': 'Projects',
        'contactme':'Contact Me',
        'in construction':'Page in construction...',
        'empty':'Nothing for the moment :(',
        'description': "Hi, my name is Jacopo and I am a cybersecurity student passionate about technology, computer science, music and video games. I graduated in computer science and telecommunications with a specialization in computer science and now I am attending a cybersecurity course at an ITS. I have excellent knowledge of networking, virtualization, use of GNU/Linux systems and databases. I can program in C++, Java, PHP, MySql, JavaScript and also HTML, CSS. I possess excellent teamworking, problem solving, analytical thinking, self-study, communication and empathy skills. I consider myself a precise person, attentive to details and nice :) In my free time, I like to play video games, play the saxophone or watch movies. And with this little presentation I hope I have represented myself at my best and have caught your attention :D"
        // Aggiungi altre traduzioni se necessario
    }
};

// Inizializza la pagina con la lingua corrente
document.addEventListener('DOMContentLoaded', function() {
    var currentLang = window.location.search.includes('lang=en') ? 'en' : 'it';
    changeLanguage(currentLang);
});
