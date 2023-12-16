// language=hbs
export default `
    <span class="{{ iconStyle }}">{{{ icon }}}</span>
    {{{ input }}}
    {{{ label }}}
    
    {{#if errorMessage }}
        {{{ error }}}
    {{/if}}
`;
