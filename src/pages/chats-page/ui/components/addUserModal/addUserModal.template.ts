import s from './addUserModal.module.scss';

// language=hbs
export default `
    {{{ loginSearch }}}
    
    <ul class="${s.searchedList}">
        {{#each searchedUsers }}
            <li class="${s.searchedListItem}" data-user-id="{{this.id}}">{{ this.login }}</li>
        {{/each}}
    </ul>
    
    <div class="${s.selectedUsers}">
        {{#each selectedUsers }}
            <span class="${s.selectedUser}" data-user-id="{{this.id}}">{{ this.login }}</span>
        {{/each}}
    </div>
    
    {{{ sendButton }}}
`;
