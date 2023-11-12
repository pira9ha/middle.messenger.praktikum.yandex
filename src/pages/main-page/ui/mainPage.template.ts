// language=hbs
export default `
    {{#each links }}
        <li>
            {{{ this }}}
        </li>
    {{/each}}
`;
