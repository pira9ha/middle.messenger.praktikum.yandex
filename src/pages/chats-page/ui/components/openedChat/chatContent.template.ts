import s from './chatContent.module.scss';

// language=hbs
export default `
    {{{ header }}}
    <div class="${s.messagesWrapper}">
        {{#each messages }}
            {{{ this }}}
        {{/each}}
        {{{ messageForm }}}
    </div>
`;
