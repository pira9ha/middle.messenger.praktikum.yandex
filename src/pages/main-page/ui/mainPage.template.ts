import s from './mainPage.module.scss';

// language=hbs
export default `
    <nav class="${s.mainPage}">
        {{#each pages}}
            <li>
                {{> link this.link }}
            </li>
        {{/each}}
    </nav>
`;
