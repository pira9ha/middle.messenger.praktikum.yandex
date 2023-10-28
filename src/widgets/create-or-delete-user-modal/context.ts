import {IModalProps} from "@/features/modal/lib/types/modal.ts";
import {TCreateOrDeleteModalProps} from "@/widgets/create-or-delete-user-modal/CreateOrDeleteUserModal.ts";

export const context = ({isDelete}: TCreateOrDeleteModalProps): IModalProps => ({
    title: `${isDelete ? 'Удалить' : 'Добавить'} пользователя`,
    formContext: {
        fieldsContext: {
            login: {
                name: 'login',
                labelText: 'Логин',
            },
        },
        buttonContext: {
            login: {
                type: 'submit',
                title: isDelete ? 'Удалить' : 'Добавить',
            }
        },
    },
})