import s from './modal.module.scss';

// language=hbs
export default `
    <div class="${s.modalWrapper}">
        {{{ content }}}
        {{{ overlay }}}
    </div>
`;
