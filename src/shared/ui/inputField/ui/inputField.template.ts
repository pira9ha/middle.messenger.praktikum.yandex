// language=hbs
export default `
    {{{ label }}}
    <span class="{{ iconStyle }}">{{{ icon }}}</span>
    {{{ input }}}
    
    {{#if errorMessage }}
        {{{ error }}}
    {{/if}}
`;
