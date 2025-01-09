const skills = [
	{
		id: 'wp',
		title: 'WordPress Development',
		iconName: 'wordpress',
		description_en:
			'Extensive experience in developing custom WordPress themes. Proficiency in utilizing WordPress APIs and hooks for extending functionality. Skilled in working with popular visual builders like Elementor, WPBakery, and Divi.',
		description_it:
			"Ampia esperienza nello sviluppo di temi personalizzati per WordPress. Competenza nell'utilizzo delle API e degli hook di WordPress per estendere le funzionalità. Esperto nell'utilizzo di builder visivi come Elementor, WPBakery e Divi.",
	},
	{
		id: 'frontend',
		title: 'Front-End Development',
		iconName: 'theme',
		description_en:
			'Proficiency in front-end technologies such as HTML, CSS, and JavaScript. Knowledge of modern front-end frameworks like React for building dynamic and interactive user interfaces.',
		description_it:
			'Competenza nelle tecnologie front-end come HTML, CSS e JavaScript. La conoscenza dei moderni framework front-end come React per la costruzione di interfacce utente dinamiche e interattive.',
	},
	{
		id: 'theme',
		title: 'Theme Development',
		iconName: 'code',
		description_en:
			'Expertise in creating custom WordPress themes from scratch, implementing plugins, cpts and taxonomies, Also skilled at adapting and customizing pre-built templates to match project requirements and deliver efficient, tailored solutions.',
		description_it:
			"Competenza nella creazione di temi WordPress personalizzati da zero, con l'implementazione di tipi di plugin, cpt e tassonomie. Abile inoltre nell'adattare e personalizzare template già esistenti per soddisfare le esigenze del progetto e offrire soluzioni su misura.",
	},
	{
		id: 'plugin',
		title: 'Plugin Development',
		iconName: 'plugin',
		description_en:
			'Ability to develop custom WordPress plugins to extend the functionality of WordPress core or third-party plugins. This includes integrating with external APIs and  implementing custom features.',
		description_it:
			"Capacità di sviluppare plugin personalizzati per estendere la funzionalità di WordPress o di plugin di terze parti. Questo include l'integrazione con API esterne e l'implementazione di funzionalità personalizzate.",
	},
	{
		id: 'figma',
		title: 'Assets Management',
		iconName: 'figma',
		description_en:
			'Familiarity with design tools like Figma, XD, and Photoshop for managing UI/UX assets. Skilled at resizing, cropping, and making simple adjustments to images using tools like Photoshop, ensuring designers can focus on creative tasks.',
		description_it:
			'Familiarità con gli strumenti di design come Figma, XD e Photoshop per la gestione degli asset UI/UX. Abilità nel ridimensionare, ritagliare e apportare semplici modifiche alle immagini utilizzando strumenti come Photoshop, permettendo ai designer di concentrarsi sui compiti creativi.',
	},
	{
		id: 'events',
		title: 'Tracking and Analytics',
		iconName: 'events',
		description_en:
			'Experience in implementing tracking and analytics solutions for WordPress sites. Skilled in configuring Google Tag Manager, Google Analytics, and similar tools to monitor website performance, user behavior, and conversion metrics.',
		description_it:
			"Esperienza nell'implementazione di soluzioni di tracciamento e analisi per siti WordPress. Competenza nella configurazione di Google Tag Manager, Google Analytics e strumenti simili per monitorare le prestazioni del sito, il comportamento degli utenti e le metriche di conversione.",
	},
	{
		id: 'debug',
		title: 'Debugging and Troubleshooting',
		iconName: 'debug',
		description_en:
			'Strong debugging skills to identify and resolve issues related to WordPress core, themes, plugins, or server configurations. Ability to use debugging tools and techniques effectively to diagnose and fix problems.',
		description_it:
			'Forti competenze di debugging per identificare e risolvere problemi legati al core di WordPress, ai temi, ai plugin o alle configurazioni del server. Capacità di utilizzare efficacemente strumenti e tecniche di debugging per diagnosticare e risolvere i problemi.',
	},
	{
		id: 'security',
		title: 'Security Best Practices',
		iconName: 'security',
		description_en:
			'Deep understanding of WordPress security principles and best practices for securing WordPress sites against common vulnerabilities and attacks. This includes implementing measures such as user authentication, data validation, input sanitization, and protection against XSS, CSRF, and SQL injection.',
		description_it:
			"Profonda comprensione dei principi di sicurezza di WordPress e delle migliori pratiche per proteggere i siti WordPress dalle vulnerabilità comuni e dagli attacchi. Questo include l'implementazione di misure come l'autenticazione degli utenti, la validazione dei dati, la sanificazione degli input e la protezione contro XSS, CSRF e SQL injection.",
	},
	{
		id: 'performance',
		title: 'Performance Optimization',
		iconName: 'performance',
		description_en:
			'Ability to optimize WordPress sites for speed and performance, including minimizing page load times, optimizing images and assets, implementing caching mechanisms, and leveraging techniques like lazy loading and asynchronous loading.',
		description_it:
			"Capacità di ottimizzare i siti WordPress per velocità e prestazioni, inclusa la riduzione dei tempi di caricamento delle pagine, l'ottimizzazione delle immagini e degli asset, l'implementazione di meccanismi di caching e l'utilizzo di tecniche come il lazy loading e il caricamento asincrono.",
	},
	{
		id: 'php',
		title: 'Backend Development',
		iconName: 'php',
		description_en:
			'Proficiency in PHP programming and MySQL database management. Skilled in writing clean, efficient, and secure PHP code, designing optimized databases, and querying data effectively. ',
		description_it:
			'Competenza nella programmazione PHP e nella gestione di database MySQL. Abilità nel scrivere codice PHP pulito, efficiente e sicuro, progettare database ottimizzati e interrogare i dati in modo efficace. ',
	},
	/*{
		id: 'php',
		title: 'PHP',
		iconName: 'php',
		description_en:
			'Strong proficiency in PHP programming language. Ability to write clean, efficient, and secure code following best practices.',
		description_it:
			'Forte competenza nel linguaggio di programmazione PHP. Capacità di scrivere codice pulito, efficiente e sicuro seguendo le migliori pratiche.',
	},
	{
		id: 'mysql',
		title: 'MySQL',
		iconName: 'database',
		description_en:
			'Solid understanding of MySQL database management, including database design, optimization, and querying.',
		description_it:
			"Solida comprensione della gestione del database MySQL, inclusa la progettazione del database, l'ottimizzazione e l'interrogazione.",
	},*/
	{
		id: 'git',
		title: 'Version Control',
		iconName: 'git',
		description_en:
			'Proficient in using version control systems like Git for managing codebase changes, collaborating with team members, and ensuring code integrity and versioning.',
		description_it:
			"Competenza nell'uso di sistemi di controllo versione come Git per gestire le modifiche al codice, collaborare con i membri del team e garantire l'integrità e il versionamento del codice.",
	},
	{
		id: 'hosting',
		title: 'Hosting Environment',
		iconName: 'hosting',
		description_en:
			'Familiarity with various hosting environments and server configurations commonly used for WordPress hosting. Knowledge of server management, security practices, and performance optimization techniques.',
		description_it:
			"Familiarità con vari ambienti di hosting e configurazioni del server comunemente utilizzati per l'hosting di WordPress. Conoscenza della gestione del server, delle pratiche di sicurezza e delle tecniche di ottimizzazione delle prestazioni.",
	},
];

export default skills;
