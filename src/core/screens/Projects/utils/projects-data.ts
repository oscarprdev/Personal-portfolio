import {AngularIcon, CssIcon, JavascriptIcon, ReactIcon, SvelteIcon, TailwindIcon, TypescriptIcon} from "../../../svg";
import chatImage from '../../../../assets/images/chat.png'
import foroImage from '../../../../assets/images/foro.png'
import readinglistImage from '../../../../assets/images/readinglist.png'
import ecommerceImage from '../../../../assets/images/ecommerce.png'


export interface Project {
    id: number,
    title: string,
    date: string,
    image: string,
    description: string,
    links: {
      code: string,
      app: string
    },
    icons:
        {
            svg: JSX.Element,
            isModified: boolean
        }[]

}

export const ProjectsData: Project[] = [
    {
        id: 1,
        title: 'Reading List',
        date: '20 July 2023',
        image: readinglistImage,
        description: 'Reading list app where the user can add books to a list and set as favourite or as already read',
        links: {
            code: 'https://github.com/oscarprdev/midudev-pruebas-tecnicas/tree/oscarprdev/reading-list/pruebas/01-reading-list/oscarprdev',
            app: 'https://books-oscarprdev.netlify.app/'
        },
        icons: [
            {
                svg: TypescriptIcon(),
                isModified: false
            },
            {
                svg: SvelteIcon(),
                isModified: true
            },
            {
                svg: TailwindIcon(),
                isModified: true
            }
        ]
    },
    {
        id: 2,
        title: 'Forum',
        date: '23 June 2022',
        image: foroImage,
        description: 'A forum app where users can create and comment topics and there is a rewarding usage system allowing the user to update its profile avatar',
        links: {
            code: 'https://github.com/oscarprdev/REACT--Foro_social',
            app: 'https://react-foro.netlify.app'
        },
        icons: [
            {
                svg: JavascriptIcon(),
                isModified: false
            },
            {
                svg: ReactIcon(),
                isModified: false
            },
            {
                svg: CssIcon(),
                isModified: true
            },
        ]
    },
    {
        id: 3,
        title: 'Chat',
        date: '11 July 2022',
        image: chatImage,
        description: 'A basic chat app done with sockets.io',
        links: {
            code: 'https://github.com/oscarprdev/REACT-Chat-Socket',
            app: 'https://react-chat-socket-oscar.netlify.app/'
        },
        icons: [
            {
                svg: JavascriptIcon(),
                isModified: false
            },
            {
                svg: ReactIcon(),
                isModified: false
            },
            {
                svg: CssIcon(),
                isModified: true
            },
        ]
    },
    {
        id: 4,
        title: 'E-commerce',
        date: '28 May 2022',
        image: ecommerceImage,
        description: 'A sport shoes e-commerce with shopping cart and product detail screen',
        links: {
            code: 'https://github.com/oscarprdev/Angular--Sneakers-ecommerce',
            app: 'https://sneakers-ecommerce-nine.vercel.app/'
        },
        icons: [
            {
                svg: TypescriptIcon(),
                isModified: false
            },
            {
                svg: AngularIcon(),
                isModified: false
            },
            {
                svg: CssIcon(),
                isModified: true
            },
        ]
    },
]