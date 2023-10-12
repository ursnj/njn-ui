export const accordionAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AccordionTypes', default: 'AccordionTypes.SINGLE', details: 'You can pass type of the accordion.' },
  { name: 'items', type: 'AccordionListItem[]', default: '[ ]', details: 'You can pass list of accordion items.' }
];

export const alertAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AlertTypes', default: 'AlertTypes.DEFAULT', details: 'You can pass type of the alert.' },
  { name: 'title', type: 'string', default: 'Renders based on the type you passed.', details: 'You can pass alert title.' },
  { name: 'message', type: 'string', default: 'Required', details: 'You can pass alert message.' },
  { name: 'onCLode', type: '() => void', default: 'Required', details: 'You can get callback when alert got closed.' }
];

export const badgeAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'size', type: 'BadgeSize', default: 'BadgeSize.SM', details: 'You can pass size of the badge.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass badge content as children.' }
];
