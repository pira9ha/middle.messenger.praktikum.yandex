import s from './link.module.scss';

// language=hbs
export default `
    <a class="${s.link} {{ className }}" href="{{ path }}" onclick="{{ onClick }}">
        {{#if title }}
            {{ title }}
        {{else}}
            {{> arrowIcon }}
        {{/if}}
    </a>
`;