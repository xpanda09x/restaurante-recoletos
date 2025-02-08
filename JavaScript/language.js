const translations = {
    es: {
        // BOTONES
        spanishBtn: 'Carta en Español',
        englishBtn: 'Menu in English',
        // ICONOS
        inicio_icono: 'Inicio',
        galeria_icono: 'Galería',
        menu_icono: 'Menú',
        vinos_icono: 'Vinos',
        contacto_icono: 'Contacto',
        // TEXTO
        welcome: 'Bienvenidos a Recoletos',
        experience: 'Disfrute de una experiencia gastronómica única en un ambiente elegante y acogedor.',
        galery: 'Galería',
        discoverFood: 'Descubre algunos de nuestros exquisitos platos.',
        menu_titulo: 'Menú',
        // PRIMEROS PLATOS
        primeros_platos: 'Primeros',
        croquetas: 'Croquetas de jamón ibérico',
        esparragos: 'Espárragos blancos en vinagreta de navajas',
        pimientos: 'Pimientos del piquillo rellenos de morcilla',
        ensalada_Faisan: 'Ensalada de faisán en escabeche',
        patatas_revolconas: 'Patatas revolconas con torreznos',
        sopa_pescado: 'Sopa de pescado o marisco',
        // SEGUNDOS PLATOS
        segundos_platos: 'Segundos',
        bacalao: 'Bacalao à Brás',
        mero: 'Mero a la bilbaína',
        canelon_setas: 'Canelón de setas con bechamel de langostinos',
        terrina_codillo: 'Terrina de codillo de cerdo con lombarda',
        entrecot_cebon: 'Entrecot de cebón a la plancha',
        callos: 'Callos a la madrileña',
        // POSTRES
        postres: 'Postres',
        postres_casa: 'Postres de la casa',
        //CARACTERISTICAS ALIMENTARIAS
        gluten: 'Gluten',
        huevo: 'Huevo',
        lacteos: 'Lácteos',
        crustaceos: 'Crustáceos',
        frutos_secos: 'Frutos Secos',
        mostaza: 'Mostaza',
        pescado: 'Pescado',
        //PRECIOS
        precio_socio: 'Menú socio: 35,65 €',
        precio_invitado: 'Menú invitado: 40,00 €',
        // VINOS
        vinos: 'Vinos',
        vinos_blancos: 'Vinos Blancos',
        vinos_jovenes: 'Tintos Jóvenes',
        tintos_crianza: 'Tintos Crianza',
        tintos_reserva: 'Tintos Reserva',
        espumosos: 'Espumosos',
        // SERVICIOS
        servicio_noche: 'Servicio de la noche:',
        servicio_noche_detalle: ' Medio menú (1 plato a elegir de toda la carta, bebida y postre) - 19 €',
        horario_reserva: 'Horario de reserva:',
        horario_reserva_detalle: ' Almuerzo 14:00-15:00 / Cena 21:00-22:00',
        titulo_contacto: 'Contacto',
        contacto_info: 'Las reservas se realizan a través de recepción al teléfono +34 915 21 87 00',
        horas_reservas: 'El restaurante abre de martes a sábado, y permanece cerrado los domingos y lunes.'
    },
    en: {
        // BOTONES
        spanishBtn: 'Carta en Español',
        englishBtn: 'Menu in English',
        // ICONOS
        inicio_icono: 'Home',
        galeria_icono: 'Gallery',
        menu_icono: 'Menu',
        vinos_icono: 'Wines',
        contacto_icono: 'Contact',
        // TEXTO
        welcome: 'Welcome to Recoletos',
        experience: 'Enjoy a unique gastronomic experience in an elegant and cozy atmosphere.',
        galery: 'Gallery',
        discoverFood: 'Discover some of our exquisite dishes.',
        menu_titulo: 'Menu',
        // PRIMEROS PLATOS
        primeros_platos: 'Starters',
        croquetas: 'Iberian ham croquettes',
        esparragos: 'White asparagus in razor clam vinaigrette',
        pimientos: 'Piquillo peppers stuffed with black pudding',
        ensalada_Faisan: 'Pheasant salad in marinade',
        patatas_revolconas: 'Revolconas potatoes with crispy bacon',
        sopa_pescado: 'Fish or seafood soup',
        // SEGUNDOS PLATOS
        segundos_platos: 'Main Courses',
        bacalao: 'Bacalao à Brás',
        mero: 'Bilbao-style grouper',
        canelon_setas: 'Mushroom cannelloni with prawn béchamel',
        terrina_codillo: 'Pork knuckle terrine with red cabbage',
        entrecot_cebon: 'Grilled beef rib-eye',
        callos: 'Madrid-style tripe',
        // POSTRES
        postres: 'Desserts',
        postres_casa: 'House desserts',
        //CARACTERISTICAS ALIMENTARIAS
        gluten: 'Gluten',
        huevo: 'Egg',
        lacteos: 'Milk',
        crustaceos: 'Custaceans',
        frutos_secos: 'Nuts',
        mostaza: 'Mustard',
        pescado: 'Fish',
        //PRECIOS
        precio_socio: 'Member Menu: 35.65 €',
        precio_invitado: 'Guest Menu: 40.00 €',
        // VINOS
        vinos: 'Wines',
        vinos_blancos: 'White Wines',
        vinos_jovenes: 'Young Reds',
        tintos_crianza: 'Crianza Reds',
        tintos_reserva: 'Reserva Reds',
        espumosos: 'Sparkling Wines',
        // SERVICIOS
        servicio_noche: 'Night Service:',
        servicio_noche_detalle: ' Half menu (1 dish from the entire menu, drink, and dessert) - 19 €',
        horario_reserva: 'Reservation hours:',
        horario_reserva_detalle: ' Lunch 14:00-15:00 / Dinner 21:00-22:00',
        titulo_contacto: 'Contact',
        contacto_info: 'Reservations are made through reception at phone number +34 915 21 87 00',
        horas_reservas: 'The restaurant is open from Tuesday to Saturday, and closed on Sundays and Mondays.'
    }
};

// <-------------------------------------------------------------------------------------------------------------->

// Función para actualizar los textos de los elementos
function translate(language) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language][key]) {
            // Verificar si el elemento contiene hijos (como imágenes o enlaces)
            if (element.children.length > 0) {
                // Mover todos los nodos no textuales (como imágenes) al final
                const iconNodes = Array.from(element.childNodes).filter(node => node.nodeType !== Node.TEXT_NODE);
                const textNode = document.createTextNode(translations[language][key]);

                // Limpiar el contenido actual y añadir el texto seguido de los iconos
                element.innerHTML = '';
                element.appendChild(textNode);
                iconNodes.forEach(icon => element.appendChild(icon));
            } else {
                // Si no tiene hijos, reemplazar directamente el texto
                element.textContent = translations[language][key];
            }
        }
    });

    // Actualización de los botones de cambio de idioma
    document.getElementById('btnEspañol').textContent = translations[language].spanishBtn;
    document.getElementById('btnIngles').textContent = translations[language].englishBtn;
}



// Función para cambiar el idioma
function changeLanguage(language) {
    translate(language);
    document.documentElement.lang = language;
}

// Añadir event listeners para los botones de cambio de idioma
document.getElementById('btnEspañol').addEventListener('click', () => {
    changeLanguage('es');
});

document.getElementById('btnIngles').addEventListener('click', () => {
    changeLanguage('en');
});
