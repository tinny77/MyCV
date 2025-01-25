import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<SelectPrimitive.Trigger
			ref={ref}
			className={`flex h-10 w-full items-center justify-between text-sm form-control ${className}`}
			{...props}
		>
			{children}
			<SelectPrimitive.Icon>
				<ChevronDown className="h-4 w-4 opacity-50" />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	)
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<SelectPrimitive.Portal>
			<div className=" fixed inset-0 bg-black/50 z-50">
				<div className="fixed inset-0 flex items-center justify-center">
					<SelectPrimitive.Content
						ref={ref}
						className={`popup rounded-lg shadow-lg w-[90vw] max-w-md max-h-[85vh] overflow-auto z-90 ${className}`}
						{...props}
					>
						<SelectPrimitive.Viewport className="p-2 pt-1">
							{children}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</div>
			</div>
		</SelectPrimitive.Portal>
	)
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={`text-sm font-semibold ${className}`}
		{...props}
	/>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<SelectPrimitive.Item
			ref={ref}
			className={`relative flex w-full cursor-pointer select-none items-center rounded-md py-3 my-2 pl-2 pr-8 text-sm outline-none hover:bg-gray-100 ${className}`}
			{...props}
		>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	)
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
};
