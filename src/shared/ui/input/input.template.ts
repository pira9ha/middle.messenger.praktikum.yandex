import s from './input.module.scss';

// language=hbs
export default `
    <div class="${s.field}">
        <label
            for="{{ name }}"
            class="${s.label} {{ labelVariant }}"
        >
            {{ labelText }}
        </label>
        <input
            class="${s.input} {{ className }}"
            type="{{ type }}"
            name="{{ name }}"
            value="{{ value }}"
            placeholder="{{ placeholder }}"
            autocomplete="{{ autocomplete }}"
        >
    </div>
`;