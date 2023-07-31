import {AngularIcon, CssIcon, JavascriptIcon, ReactIcon, SvelteIcon, TailwindIcon, TypescriptIcon} from "../../../svg";

export interface Project {
    id: number,
    title: string,
    date: string,
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
        title: 'Foro',
        date: '23 June 2022',
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