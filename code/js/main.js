// ========== MODE SOMBRE ==========
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    // Appliquer l'icône correcte à tous les boutons dark mode
    const darkIcons = document.querySelectorAll('#darkModeToggleDesktop i, #darkModeToggleMobile i, #darkModeToggle i');
    darkIcons.forEach(icon => {
        icon.className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
    });
}

function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDark);

    // Mettre à jour toutes les icônes
    const darkIcons = document.querySelectorAll('#darkModeToggleDesktop i, #darkModeToggleMobile i, #darkModeToggle i');
    darkIcons.forEach(icon => {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    });
}

function setupDarkModeToggles() {
    const desktopBtn = document.getElementById('darkModeToggleDesktop');
    const mobileBtn = document.getElementById('darkModeToggleMobile');
    const pageBtn = document.getElementById('darkModeToggle');

    if (desktopBtn) {
        desktopBtn.addEventListener('click', () => {
            setDarkMode(!document.body.classList.contains('dark-mode'));
        });
    }
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            setDarkMode(!document.body.classList.contains('dark-mode'));
        });
    }
    if (pageBtn) {
        pageBtn.addEventListener('click', () => {
            setDarkMode(!document.body.classList.contains('dark-mode'));
        });
    }
}

// ========== MULTILINGUE ==========
let currentLang = localStorage.getItem('lang') || 'fr';

// Traductions communes à toutes les pages
const commonTranslations = {
    fr: {
        nav1: "Accueil",
        nav2: "À propos",
        nav3: "Enfance",
        nav4: "Jeunesse",
        nav5: "Vie du Diocèse",
        nav6: "Galerie",
        don: "DON POUR LA CONSTRUCTION DU CENTRE DIOCÉSAIN",
        title: "Aumônerie Diocésaine Jeunesse & Enfance",
        subtitle: "Archidiocèse de Douala – Cameroun",
        motAumonier: "MOT DE L'AUMONIER DIOCÉSAIN",
        aboutTitle: "À propos",
        about1: "MISSION PASTORALE",
        about2: "HISTOIRE & FONDEMENTS",
        about3: "ÉQUIPE DIOCÉSAINE",
        enfanceTitle: "Pastorale de l'Enfance",
        enfance1: "ÉVEIL À LA FOI",
        enfance2: "CATÉCHÈSE & GROUPES",
        enfance3: "CALENDRIER ANNUEL",
        jeunesseTitle: "Pastorale de la Jeunesse",
        jeunesse1: "MOUVEMENTS & GROUPES",
        jeunesse2: "FORMATION & LEADERSHIP",
        jeunesse3: "PROJETS & ENGAGEMENTS",
        vieTitle: "Vie du Diocèse",
        annoncesTitle: "Annonces",
        annoncesDesc: "Restez informés des actualités, événements et communications importantes de l'Archidiocèse.",
        annoncesBtn: "Voir les annonces",
        communiquesTitle: "Communiqués",
        communiquesDesc: "Découvrez les offres d'emploi, les formations et les communications officielles du diocèse.",
        communiquesBtn: "Voir les communiqués",
        galleryTitle: "Galerie photo",
        closeGallery: "Fermer la galerie"
    },
    en: {
        nav1: "Home",
        nav2: "About",
        nav3: "Childhood",
        nav4: "Youth",
        nav5: "Diocesan Life",
        nav6: "Gallery",
        don: "DONATION FOR THE CONSTRUCTION OF THE DIOCESAN CENTER",
        title: "Diocesan Youth & Children's Chaplaincy",
        subtitle: "Archdiocese of Douala – Cameroon",
        motAumonier: "WORD OF THE DIOCESAN CHAPLAIN",
        aboutTitle: "About",
        about1: "PASTORAL MISSION",
        about2: "HISTORY & FOUNDATIONS",
        about3: "DIOCESAN TEAM",
        enfanceTitle: "Childhood Ministry",
        enfance1: "AWAKENING TO FAITH",
        enfance2: "CATECHESIS & GROUPS",
        enfance3: "ANNUAL CALENDAR",
        jeunesseTitle: "Youth Ministry",
        jeunesse1: "MOVEMENTS & GROUPS",
        jeunesse2: "TRAINING & LEADERSHIP",
        jeunesse3: "PROJECTS & COMMITMENTS",
        vieTitle: "Diocesan Life",
        annoncesTitle: "Announcements",
        annoncesDesc: "Stay informed about news, events and important communications from the Archdiocese.",
        annoncesBtn: "View announcements",
        communiquesTitle: "Official Statements",
        communiquesDesc: "Discover job offers, training courses and official communications from the diocese.",
        communiquesBtn: "View statements",
        galleryTitle: "Photo Gallery",
        closeGallery: "Close gallery"
    }
};

// Traductions spécifiques à la page "Nuit des Jeunes"
const pageTranslations = {
    fr: {
        headerTitle: "Nuit des Jeunes avec Jésus-Christ",
        headerSub: "Aumônerie Diocésaine Jeunesse & Enfance – Douala",
        infoTitle: "Informations",
        dateTitle: "Date",
        dateText: "Du Vendredi 06 au\nSamedi 07 Février 2026",
        timeTitle: "Heure",
        timeText: "De 17h00 jusqu'au matin (6h00)",
        locationTitle: "Lieu",
        locationText: "Cathédrale Sts Pierre & Paul\nBonadibong, Douala - Cameroun",
        mapLink: "Ouvrir l'itinéraire",
        programmeTitle: "Le Parcours de la Nuit",
        step1Title: "Parade",
        step1Desc: "Ouverture culturelle spectaculaire avec les groupes de jeunes",
        step2Title: "Chapelet",
        step2Desc: "Prière fervente et méditation des mystères lumineux",
        step3Title: "Enseignement",
        step3Desc: "Parole de vie et témoignages inspirants",
        step4Title: "Confession",
        step4Desc: "Sacrement de réconciliation : cœur à cœur avec le Seigneur",
        step5Title: "Messe",
        step5Desc: "Eucharistie solennelle présidée par Mgr l'Archevêque",
        step6Title: "Adoration",
        step6Desc: "Face au Saint-Sacrement, nuit d'intimité avec le Christ",
        step7Title: "Théâtre",
        step7Desc: "Pièce de théâtre évangélisatrice et messages forts",
        ctaTitle: "✨ Viens vivre une nuit de transformation ✨",
        ctaBtn: "Je m'inscris aux activités",
        backBtn: "Retour à l'accueil"
    },
    en: {
        headerTitle: "Youth Night with Jesus Christ",
        headerSub: "Diocesan Youth & Children's Chaplaincy – Douala",
        infoTitle: "Information",
        dateTitle: "Date",
        dateText: "From Friday 06 to\nSaturday 07 February 2026",
        timeTitle: "Time",
        timeText: "From 5:00 PM until morning (6:00 AM)",
        locationTitle: "Location",
        locationText: "Sts Peter & Paul Cathedral\nBonadibong, Douala - Cameroon",
        mapLink: "Open route",
        programmeTitle: "The Night Journey",
        step1Title: "Parade",
        step1Desc: "Spectacular cultural opening with youth groups",
        step2Title: "Rosary",
        step2Desc: "Fervent prayer and meditation on the luminous mysteries",
        step3Title: "Teaching",
        step3Desc: "Word of life and inspiring testimonies",
        step4Title: "Confession",
        step4Desc: "Sacrament of reconciliation: heart to heart with the Lord",
        step5Title: "Mass",
        step5Desc: "Solemn Eucharist presided by the Archbishop",
        step6Title: "Adoration",
        step6Desc: "Before the Blessed Sacrament, night of intimacy with Christ",
        step7Title: "Theater",
        step7Desc: "Evangelizing theater piece and powerful messages",
        ctaTitle: "✨ Come and experience a night of transformation ✨",
        ctaBtn: "Register for activities",
        backBtn: "Back to home"
    }
};

// Fusionner les traductions (communes + spécifiques à la page)
function getFullTranslations() {
    // Vérifier si on est sur la page "Nuit des Jeunes" (présence d'un élément spécifique)
    const isNuitPage = document.querySelector('.hero-swiper') !== null;

    if (isNuitPage) {
        // Fusionner les traductions communes avec celles de la page
        const full = {...commonTranslations[currentLang], ...pageTranslations[currentLang] };
        return full;
    }
    return commonTranslations[currentLang];
}

function updateLanguage() {
    const t = getFullTranslations();

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    localStorage.setItem('lang', currentLang);
}

function setupLanguageToggles() {
    const desktopBtn = document.getElementById('langToggleDesktop');
    const mobileBtn = document.getElementById('langToggleMobile');
    const pageBtn = document.getElementById('langToggle');

    const toggleLang = () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        updateLanguage();
    };

    if (desktopBtn) desktopBtn.addEventListener('click', toggleLang);
    if (mobileBtn) mobileBtn.addEventListener('click', toggleLang);
    if (pageBtn) pageBtn.addEventListener('click', toggleLang);
}

// ========== INITIALISATION ==========
function initPage() {
    initDarkMode();
    setupDarkModeToggles();
    setupLanguageToggles();
    updateLanguage();
}

// Lancer l'initialisation quand le DOM est chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}