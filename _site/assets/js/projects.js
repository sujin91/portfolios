$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/my/clock.png',
            link: 'https://github.com/sujin91/clock-app',
            title: 'Clock-App',
            technologies: ['VanillaJS'],
            description: "MVC + 옵저버패턴을 사용한 시계, 알람, 스톱워치 기능을 가진 시계앱입니다. Vanilla JS로만 구현하였습니다.",
            categories: ['webdev', 'diy']
        },
        {
            image: 'assets/my/wetube.png',
            link: 'https://github.com/sujin91/wetube',
            title: 'Wetube',
            technologies: ['VanillaJS', 'Express', 'MongoDB'],
            description: "'유튜브 클론코딩', 유저들은 영상을 재생하고, 댓글을 달고, 검색할 수 있으며, 자기 자신의 비디오를 녹화하고 업로드 할 수 있습니다.",
            categories: ['webdev', 'diy']
        },
        {
            image: 'assets/my/nomflix.png',
            link: 'https://github.com/sujin91/nomflix',
            title: 'Nomflix',
            demo: false,
            technologies: ['ReactJS'],
            description: "영화 웹서비스 만들기, 리액트를 활용한 간단한 영화 웹 서비스입니다. ",
            categories: ['webdev', 'diy']
        },
        // {
        //     image: 'assets/images/mpw.jpg',
        //     link: 'https://github.com/abhn/mpw',
        //     title: 'Master Password',
        //     demo: 'https://www.nagekar.com/mpw',
        //     technologies: ['Semantic UI', 'CSS3'],
        //     description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
        //     categories: ['featured', 'security']
        // },
        // {
        //     image: 'assets/images/social-share-count.jpeg',
        //     link: 'https://github.com/abhn/Social-Share-Counts',
        //     title: 'Social Share Count',
        //     demo: false,
        //     technologies: ['Python'],
        //     description: "Ever wondered how many times a URL has been shared on popular social networks?",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/data-destroyer.png',
        //     link: 'https://github.com/abhn/data-destroyer-gui',
        //     title: 'Data Destroyer',
        //     demo: false,
        //     technologies: ['C++', 'Qt'],
        //     description: "Native GUI wrapper for GNU coreutils tool 'dd'",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/raspberry-pi-monitor.png',
        //     link: 'https://github.com/abhn/RPi-Status-Monitor',
        //     title: 'Raspberry Pi Monitor',
        //     demo: false,
        //     technologies: ['python', 'flask'],
        //     description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
        //     categories: ['webdev', 'diy']
        // },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}