import s from './card.module.scss';

// language=hbs
export default `
    <div class="absolute-centered-block ${s.card}">
        {{> @partial-block}}
    </div>
`;