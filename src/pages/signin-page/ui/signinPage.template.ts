import s from './signinPage.module.scss';

// language=hbs
export default `
    <div class="${s.signinPage}">
        <div class="${s.signinCard}">
            <h2 class="${s.title}">{{ formName }}</h2>
            {{> form formContext }}
            {{> link linkContext }}
        </div>
    </div>
`;
