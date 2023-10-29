import s from './button.module.scss';

// language=hbs
export default `
    <button class="${s.button} {{ styleVariant }} {{ className }}" type="{{ type }}">
        {{ title }}
    </button>
`;