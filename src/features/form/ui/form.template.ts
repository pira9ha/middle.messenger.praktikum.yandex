import s from './form.module.scss';

// language=hbs
export default `
    <form class="${s.form} {{ className }}">
        {{#each fieldsContext }}
            {{>input this }}
        {{/each}}
        {{#each buttonContext }}
            {{>button this }}
        {{/each}}
    </form>
`;