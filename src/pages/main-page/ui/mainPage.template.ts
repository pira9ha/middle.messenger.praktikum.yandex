// language=hbs
export default `
    <div class="absolute-centered-block">
        {{#each pages}}
            <li data-page-name="{{@key}}">{{this.name}}</li>
            {{> link this.link }}
        {{/each}}
    </div>
`;