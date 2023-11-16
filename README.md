## ЧатПрактикум

Проект на стадии разработки, посмотреть можно [тут](https://melodious-kangaroo-d0bb12.netlify.app/)

### [Макет](https://www.figma.com/file/SSOn9QgZ0XkJKI1lelkQ8t/%D0%9C%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC?type=design&node-id=0-1&mode=design&t=I44loUCw6nDdPN7a-0)

ЧатПрактикум это мессенджер, написанный в рамках курса Я.Практикум на курсе Мидл-фронтенд разработчик.
Используемый стек:

- handlebars
- vite
- typescript
- express
- sass/scss

В данный момент переход по сайту осуществляется по прямым ссылкам внутри страниц, также можно ознакомится со всеми доступными путями в файле `src/widgets/router`.

## Компоненты

Добавила компонентный подход в проект с помощью реализацию блока Component и Event Bus
#### Component
Абстрактный класс, выполненный на основе класса Block из курса. Изменила передачу пропсов и children, по сравнению с примером они передаются в компонент, типизированы коомпонентами, которые отрисуются. Такой подход позволил мне удобно работать напрямую с children.
EventBus следит за событиями и обноалениями.

реализация компонента на основе абстрактного класса реализуется следующим образом:

```typescript
import componentTemplate from './componentTemplate.template.ts';

export class CustomComponent extends Component<
    CustomComponentProps, CustomComponentChildren
> {
    constructor() {
        const props = {
            props: TDefaultProps, // Дефолтный тип пропса
            children: CustomComponentChildren, // Потомки в компоненте
        };
        super(tag, props);
    }
    
    render() {
        // Если компонент имеет темплейт на Handlebars
        const template = Handlebars.compile(componentTemplate);
        return this.compile(template);
    }
}
```

Более подробно можно посмотреть в проекте, примеры с children например в pages.

#### HTTPTransport
Класс для работы с запросами обертка для XMLHttpRequest. Реализованы методы GET, POST, PUT, DELETE. Добавила работу с query string в GET-запросе.

### Файловая структура
Организовала структуру файлов на основе [FSD](https://feature-sliced.design/ru/docs/get-started/overview) c некоторыми упрощениями и допущениями на свой лад.
Основа:

![img.png](public/img.png)

Где часть папок основаны на спецификации fsd - например, shared, pages, widgets, features - содержат шаренный компоненты, функции, стили и свг иконки, страницы проекта, готовые группы шаренных компонентов в единую структуру с БЛ, легкие структуры соотв.
Компоненты в основном содержат ui и lib папки. UI содержит компоненту, темплейт и стили и доп компоненты, LIB - типы, вспомогательные функции и контекст.

## Установка и запуск

- `npm install` — установка стабильной версии,
- `npm run dev` — запуск версии для разработчика,
- `npm run start` — сборка и запуск на порту 3000,
- `npm run build` — сборка стабильной версии.
