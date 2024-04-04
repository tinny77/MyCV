import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: {
					description:
						'Passionate and experienced Front-end and WordPress developer specialized in crafting responsive websites from intricate designs, optimizing performance, and ensuring top-tier security. Proficient in CSS, HTML, WordPress theme customization, and plugin integration.',
					intro_text:
						"I've been working on frontend development for more than {{years}} years and, for as long as I can remember, my passion has been website development.<br />I am skilled in developing dynamic websites using WordPress, with expertise in turning designs into code, setting up the environment, theme customization, and plugin integration, ensuring optimal website performance and security.",
					about_text:
						'I am a Front-end and <strong>WordPress</strong> developer and I&#39;m {{age}} years old.<br/><br/>I excel in transforming designs into top-tier responsive HTML code. With a keen eye for detail, I ensure pixel-perfect outcomes and apply optimization methods for enhanced website performance. <br/>I am particularly passionate about transforming intricate designs into flawless code, and my deep appreciation for <strong>CSS</strong> and its role in bringing designs to life fuels my enthusiasm for creating visually stunning and responsive websites. This love for design-to-code conversion motivates me to continually hone my skills and deliver exceptional results in every project I undertake.<br/>Proficient in leading photo editing tools, I adeptly refine visuals to elevate quality, aligning seamlessly with site design and brand aesthetics.<br/><br/>My expertise lies in developing and maintaining <strong>WordPress</strong> sites, crafting custom themes and plugins, and seamlessly migrating websites to the <strong>WordPress</strong> platform.<br/>I have a proven track record of integrating essential plugins like WPML and WooCommerce to enhance site functionality and implementing <strong>SEO</strong> and CRO best practices for maximum visibility and user engagement.<br/><br/>I thrive in dynamic work environments and demonstrate proficiency in managing multiple projects concurrently, even under stringent time constraints.<br/>My dedication to delivering exceptional work with a keen eye for detail is a consistent trait across all my endeavors, ensuring the highest standards of quality in every task I undertake.<br/><br/>',
					tooltip_linkedin: 'Visit my LinkedIn profile',
					tooltip_github: 'Visit my GitHub profile',
					tooltip_download_cv: 'Download my CV',
					tooltip_contact: 'Contact me',
					skills: [
						'Strong understanding of HTML and CSS, including cross-browser compatibility, responsivity and performance',
						'Transforming complex PSD layouts into pixel-perfect presentation layer HTML5/CSS3 templates',
						'Developing custom themes and plugins',
						'Developing and provide maintenance support for WordPress sites',
						'Migration of websites from other platforms to WordPress',
						'Integration and set up of plugins like WPML, WooCommerce, Yoast SEO, etc.',
						'Experience with WordPress and Gutenberg, including building custom blocks',
						'Optimization of page speed of WordPress sites',
						'Implementation of SEO/CRO best practices in WordPress sites',
						'Familiarity with design tools such as Sketch, Figma and Adobe XD',
						'Solid understanding of good UX and UI practices for websites',
						'Working with version control systems such as Git / GitHub',
						'Writing modern and performant JavaScript using the latest technologies',
						'Familiarity in interpreting designs and/or specifications and adapting them to code',
						'Experience with front-end building tools (such as Webpack)',
						'Experience working remotely',
						'Working under tight deadlines and handling multiple projects simultaneously',
						'Producing high-quality work with a strong focus on detail',
						'Experience working with component systems',
						'Ability to estimate work for a project and turn specs into clearly defined, executable tasks',
					],
					label_hybrid: 'Hybrid',
					label_onsite: 'On-site',
					exp_1: [
						'I leveraged my self-taught expertise in <strong>CSS</strong>, <strong>HTML</strong>, and <strong>JavaScript (jQuery) </strong> to develop web interfaces that evolved from desktop-only to responsive designs. This encompassed a spectrum of projects, predominantly websites, where I covered frontend to backend development, employing <strong>ASP</strong> and <strong>Access/SQLite</strong> databases for seamless data integration.',
						'In this role, I not only led the creation of dynamic and visually appealing user interfaces but also contributed significantly to numerous web-app projects.',
						'Furthermore, my proficiency in photo editing and graphic design programs allowed me to make precise adjustments and edits to visual assets. This set of skills has been instrumental in seamlessly integrating website design and branding, contributing to a consistent and polished user experience.',
					],
					exp_2: [
						'Demonstrated proficiency in developing a diverse range of projects, including static websites, landing pages, newsletter templates, and custom <strong>WordPress</strong> themes, utilizing <strong>PHP</strong>, <strong>CPT</strong>s, and <strong>ACF</strong>.',
						'Ensured the responsiveness of designs through meticulous implementation of <strong>(S)CSS</strong>, <strong>HTML</strong>, and <strong>JavaScript</strong>, while overseeing site maintenance and optimization seamlessly managed through <strong>Git</strong>.',
						'Managed end-to-end content transfer from development to production, expertly handling necessary configurations, including server-side setups.',
						'Specialized in the conversion of designs to code, prioritizing attention to detail and achieving pixel-perfect results. Implemented optimization techniques for enhanced performance, working extensively with design layouts from <strong>InDesign</strong> and <strong>Adobe XD</strong>. Utilized <strong>Photoshop</strong> regularly to optimize and fine-tune design aspects, ensuring a final product that meets the highest standards of precision.',
					],
					exp_3: [
						'Spearheaded the evolution of front-end development for <strong> WordPress</strong> themes, placing a strong emphasis on pre-built themes and visual development, adeptly utilizing <strong>ACF</strong>  and page builders like Elementor.',
						'Specialized in the conversion of designs into high-quality, responsive HTML code, ensuring pixel-perfect results, and implementing optimization techniques for elevated website performance.',
						'Leveraged <strong>PHP</strong> code for direct template customization, streamlining the data input process for increased efficiency and customization.',
						'Demonstrated expertise in photo editing and graphic design programs, ensuring precise adjustments and edits for visual assets, seamlessly blending with website design and branding.',
						'Oversaw the complete content transfer procedure from development to production environments, taking care of all required installations, including server-side configurations.',
					],
					contact_text:
						'Feel free to drop me a message using the form below.<br /><br/>I&#39;m actively seeking chances that enable me to make substantial contributions to a variety of projects and I&#39;m eager to apply my expertise to freelance or part-time contract positions, ideally in a remote setting.<br/><br/>Looking forward to connecting and discussing exciting opportunities together!',
					contact_thank_you: 'Thank you for your message!',
					contact_label_first_name: 'First name',
					contact_label_last_name: 'Last name',
					contact_label_company: 'Company',
					contact_label_message: 'Your message',
					contact_label_send: 'Send',
				},
			},
			it: {
				translation: {
					description:
						"Sviluppatore Front-end e WordPress specializzato nella creazione di siti web responsive da design complessi, nell'ottimizzazione delle prestazioni e nella garanzia della massima sicurezza. Competente in CSS, HTML, personalizzazione di temi WordPress e integrazione di plugin.",
					intro_text:
						"Lavoro nello sviluppo front-end da più di {{years}} anni e da sempre la mia passione è lo sviluppo di siti web.<br />Sono esperto nello sviluppo di siti web dinamici utilizzando WordPress, con competenze nella trasformazione dei design in codice, nell'impostazione dell'ambiente, nella personalizzazione dei temi e nell' integrazione dei plugin, assicurando prestazioni e sicurezza ottimali del sito web.",
					about_text:
						"Ho {{age}} anni e sono un sviluppatore Front-end e <strong>WordPress</strong>.<br/><br/>Sono esperto nel convertire i design in codice HTML responsivo di alta qualità e particolarmente appassionato nel trasformare design intricati in codice impeccabile. La mia forte passione per il <strong>CSS</strong> e il suo ruolo nel dare vita ai design alimenta il mio entusiasmo nel creare siti web visivamente sorprendenti e responsivi.<br/>Con un occhio attento ai dettagli, assicuro risultati perfetti al pixel e applico metodi di ottimizzazione per migliorare le prestazioni del sito.<br/>Competente nei principali strumenti di editing fotografico, affino abilmente le immagini per elevare la qualità, allineandole perfettamente al design del sito e all'estetica del brand.<br/><br/>La mia esperienza si estende allo sviluppo e alla manutenzione di siti <strong>WordPress</strong>, alla creazione di temi e plugin personalizzati e alla migrazione dei siti web sulla piattaforma <strong>WordPress</strong>.<br/>Posso vantare una solida esperienza nell'integrare plugin essenziali come WPML e WooCommerce per migliorare la funzionalità del sito e nell'implementazione delle migliori pratiche di <strong>SEO</strong> e CRO per massimizzare la visibilità e l'engagement degli utenti.<br/><br/>Mi trovo bene in ambienti di lavoro dinamici e dimostro competenza nella gestione di più progetti contemporaneamente, anche sotto vincoli di tempo rigorosi.",
					tooltip_linkedin: 'Visita il mio profilo LinkedIn',
					tooltip_github: 'Visita il mio profilo GitHub',
					tooltip_download_cv: 'Scarica il mio CV',
					tooltip_contact: 'Contattami',
					skills: [
						'Lunga esperienza con HTML e CSS, inclusa la compatibilità cross-browser, la responsività e le prestazioni',
						'Trasformazione di layout PSD complessi in template HTML5/CSS3 perfetti al pixel',
						'Sviluppo di temi e plugin personalizzati',
						'Sviluppo e supporto alla manutenzione per siti WordPress',
						'Migrazione di siti web da altre piattaforme a WordPress',
						'Integrazione e configurazione di plugin come WPML, WooCommerce, Yoast SEO, ecc.',
						'Esperienza con WordPress e Gutenberg e la creazione di blocchi personalizzati',
						'Ottimizzazione della velocità delle pagine dei siti WordPress',
						'Implementazione delle migliori pratiche SEO/CRO nei siti WordPress',
						'Conoscenza degli strumenti di progettazione come Sketch, Figma e Adobe XD',
						'Solida comprensione delle buone pratiche di UX e UI per i siti web',
						'Utilizzo di sistemi di controllo versione come Git / GitHub',
						'Scrittura di JavaScript moderno e performante utilizzando le ultime tecnologie',
						"Conoscenza nell'interpretare design e/o specifiche e adattarle al codice",
						'Esperienza con gli strumenti di sviluppo front-end (come Webpack)',
						'Esperienza nel lavoro remoto',
						'Lavoro sotto scadenze strette e gestione di più progetti contemporaneamente',
						'Produzione di lavori di alta qualità con un forte focus sui dettagli',
						"Esperienza nell'utilizzo di sistemi a componenti",
						'Abilità nello stimare il lavoro per un progetto e trasformare le specifiche in compiti chiaramente definiti ed eseguibili',
					],
					label_hybrid: 'Ibrido',
					label_onsite: 'In sede',
					exp_1: [
						"Ho sfruttato la mia competenza autodidatta in <strong>CSS</strong>, <strong>HTML</strong> e <strong>JavaScript (jQuery)</strong> per sviluppare interfacce web che sono passate da essere utilizzabili solo su desktop a design responsivi. Questo ha coinvolto una serie di progetti, principalmente siti web, in cui ho coperto lo sviluppo front-end e back-end, utilizzando <strong>ASP</strong> e database <strong>Access/SQLite</strong> per un'integrazione dati senza soluzione di continuità.",
						'In questo ruolo, non solo ho guidato la creazione di interfacce utente dinamiche e visivamente accattivanti, ma ho anche contribuito significativamente a numerosi progetti di web-app.',
						"La mia competenza nei programmi di editing fotografico e grafico mi ha permesso di apportare aggiustamenti e modifiche precise agli asset visivi. Questo insieme di competenze è stato fondamentale per integrare perfettamente il design dei siti e il loro branding, contribuendo a un'esperienza utente coerente e curata.",
					],
					exp_2: [
						'Sviluppo di una vasta gamma di progetti, tra cui siti web statici, landing page, modelli di newsletter e temi <strong>WordPress</strong> personalizzati, utilizzando <strong>PHP</strong>, <strong>CPT</strong> e <strong>ACF</strong>.',
						"Ho garantito la responsività dei design attraverso un'implementazione meticolosa di <strong>(S)CSS</strong>, <strong>HTML</strong> e <strong>JavaScript</strong>, mentre sovrintendevo alla manutenzione e all'ottimizzazione del sito gestito senza soluzione di continuità tramite <strong>Git</strong>.",
						'Ho gestito il trasferimento di contenuti da sviluppo a produzione, gestendo le configurazioni necessarie, inclusi setup lato server.',
						"Conversione di design in codice, dando priorità all'attenzione ai dettagli e ottenendo risultati perfetti al pixel. Implementato tecniche di ottimizzazione per prestazioni migliorate, lavorando ampiamente con layout di design da <strong>InDesign</strong> e <strong>Adobe XD</strong>. Ho utilizzato regolarmente <strong>Photoshop</strong> per ottimizzare e perfezionare gli aspetti del design, garantendo un prodotto finale che rispetti gli standard più elevati di precisione.",
					],
					exp_3: [
						"Ho guidato l'evoluzione dello sviluppo front-end per i temi <strong>WordPress</strong>, ponendo un forte accento su temi pre-costruiti e sviluppo visuale, utilizzando <strong>ACF</strong> e costruttori di pagine come Elementor.",
						'Conversione di design in codice HTML responsivo, garantendo risultati perfetti al pixel e implementando tecniche di ottimizzazione per prestazioni del sito web elevate.',
						'Ho sfruttato il codice <strong>PHP</strong> per la personalizzazione diretta dei modelli, semplificando il processo di inserimento dati per un maggiore rendimento e personalizzazione.',
						'Dimostrata esperienza nei programmi di editing fotografico e grafico, garantendo aggiustamenti e modifiche precise per gli asset visivi, integrandosi senza soluzione di continuità con il design del sito web e il branding.',
						"Ho supervisionato l'intera procedura di trasferimento di contenuti dall'ambiente di sviluppo a quello di produzione, occupandomi di tutte le installazioni necessarie, inclusi le configurazioni lato server.",
					],
					contact_text:
						"Lasciami un messaggio utilizzando il modulo qui sotto.<br /><br/>Sono alla ricerca di occasioni che mi permettano di dare un contributo sostanziale a una varietà di progetti e sono desideroso di applicare le mie competenze in posizioni freelance o contrattuali a tempo parziale, idealmente in un contesto remoto<br/><br/>Non vedo l'ora di connetterci e discutere insieme nuove opportunità!",
					contact_thank_you: 'Grazie per il tuo messaggio!',
					contact_label_first_name: 'Nome',
					contact_label_last_name: 'Cognome',
					contact_label_company: 'Azienda',
					contact_label_message: 'Il tuo messaggio',
					contact_label_send: 'Invia',
				},
			},
		},
		//lng: ['it', 'en'].includes(navigator.language) ? navigator.language : 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
