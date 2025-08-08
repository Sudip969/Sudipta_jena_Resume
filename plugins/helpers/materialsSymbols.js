import { h } from 'vue';

export const materialSymbols = {
  component: (props) => {
    // Adding a support for Font Awesome icons, we can remove this later.
    if (props.icon.includes('fa-') && props['dynamic-icon']) {
      return h('span', {}, [
        h('span', {
          class: props.icon,
          'aria-hidden': true,
          'data-test': props['data-test'],
          ...(!(props.style['font-size'] || props.style['fontSize']) && { style: { fontSize: 'calc(100%)' } }),
          title: props.title
        })
      ]);
    }

    return h('span', {
      class: 'material-symbols-outlined',
      innerHTML: props.icon?.replace('--filled', ''),
      style: (() => {
        const settings = [
          props.icon?.includes('--filled') ? "'FILL' 1" : null,
          props.opz ? `'opsz' ${props.opz}` : null
        ]
          .filter(Boolean)
          .join(', ');
        return settings ? { fontVariationSettings: settings } : undefined;
      })(),
      'data-test': props['data-test'],
      title: props.title
    });
  }
};
