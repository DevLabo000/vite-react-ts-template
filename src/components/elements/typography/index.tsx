const VariantSetting = [
  { key: 'h1', class: ['text-gray-900', 'text-6xl', 'font-semibold'] },
  { key: 'h2', class: ['text-gray-900', 'text-5xl', 'font-semibold'] },
  { key: 'h3', class: ['text-gray-900', 'text-4xl', 'font-semibold'] },
  { key: 'h4', class: ['text-gray-900', 'text-2xl', 'font-semibold'] },
  { key: 'h5', class: ['text-gray-900', 'text-xl', 'font-semibold'] },
  { key: 'h6', class: ['text-gray-900', 'text-lg', 'font-semibold'] },
  { key: 'subtitle1', class: ['prose', 'font-semibold'] },
  { key: 'subtitle2', class: ['prose', 'prose-sm', 'font-semibold'] },
  { key: 'body1', class: ['prose'] },
  { key: 'body2', class: ['prose', 'prose-sm'] },
] as const;

type VariantType = (typeof VariantSetting)[number]['key'];

type PropsTypes = {
  children: React.ReactNode;
  variant: VariantType;
};

export function Typography(props: PropsTypes) {
  const { children, variant } = props;
  const styles = VariantSetting.filter((map) => map.key === variant).map(
    (map) => map.class,
  )[0];

  const className = [...styles].join(' ');

  return (
    <div>
      <span className={className}>{children}</span>
    </div>
  );
}

export default Typography;
