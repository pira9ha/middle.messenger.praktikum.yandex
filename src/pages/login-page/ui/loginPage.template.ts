import s from './loginPage.module.scss';

// language=hbs
export default `
    <div class="${s.loginPage}">
        <div class="${s.loginCard}">
            <h2 class="${s.title}">{{ formName }}</h2>
            {{{ form }}}
            {{{ link }}}
        </div>
    </div>
`;
