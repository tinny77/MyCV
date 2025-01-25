import { useTranslation } from 'react-i18next';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from './ui/select';

const ServiceSelect = () => {
	const { t } = useTranslation();

	const services = [
		{
			value: 'wp-conversion',
			label: t('services.wp_conversion.title'),
			description: t('services.wp_conversion.description'),
		},
		{
			value: 'custom-development',
			label: t('services.custom_dev.title'),
			description: t('services.custom_dev.description'),
		},
		{
			value: 'seo',
			label: t('services.seo.title'),
			description: t('services.seo.description'),
		},
		{
			value: 'plugins',
			label: t('services.plugins.title'),
			description: t('services.plugins.description'),
		},
		{
			value: 'maintenance',
			label: t('services.maintenance.title'),
			description: t('services.maintenance.description'),
		},
		{
			value: 'migration',
			label: t('services.migration.title'),
			description: t('services.migration.description'),
		},
		{
			value: 'landing-pages',
			label: t('services.landing.title'),
			description: t('services.landing.description'),
		},
		{
			value: 'support',
			label: t('services.support.title'),
			description: t('services.support.description'),
		},
		{
			value: 'multilingual',
			label: t('services.multilingual.title'),
			description: t('services.multilingual.description'),
		},
		{
			value: 'consulting',
			label: t('services.consulting.title'),
			description: t('services.consulting.description'),
		},
	];

	return (
		<div className="w-full">
			<Select name="service" required>
				<SelectTrigger>
					<SelectValue placeholder={t('contact_service_placeholder')} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel className="text-lg font-semibold mb-2 block text-center _text-white">
							{t('contact_service_placeholder')}
						</SelectLabel>
						<div className="space-y-2  ">
							{services.map((service) => (
								<SelectItem key={service.value} value={service.value}>
									<div>
										<div className="font-medium">{service.label}</div>
										<div className="text-sm text-gray-500">
											{service.description}
										</div>
									</div>
								</SelectItem>
							))}
						</div>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default ServiceSelect;
