import s from './loginPage.module.scss';

// language=hbs
export default `
    {{#> mainLayout }}
        <div class="${s.loginCard}">
            <h2 class="${s.title}">{{ formName }}</h2>
            {{> form formContext }}
            {{> link linkContext }}
        </div>
    {{/mainLayout}}
`;