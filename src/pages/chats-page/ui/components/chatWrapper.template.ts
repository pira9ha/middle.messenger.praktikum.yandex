import s from './chatWrapper.module.scss';

// language-hbs
export default `
    <div class="${s.chatWrapper}">
        {{> @partial-block}}
    </div>
`;