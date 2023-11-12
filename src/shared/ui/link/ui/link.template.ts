// language=hbs
export default `
    {{#if title }}
        {{ title }}
    {{else}}
        {{{ icon }}}
    {{/if}}
`;
