// language=hbs
export default `
    {{{ openButton }}}
    {{#if isOpen}}
        {{{ overlay }}}
        {{{ dropdownMenu }}}
    {{/if}}
`;
